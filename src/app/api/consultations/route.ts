import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import type { Consultation } from '@/lib/supabase';

// Перевірка чи Supabase доступний
function isSupabaseAvailable(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return !!(url && key && url !== 'https://placeholder.supabase.co' && key !== 'placeholder-key');
}

// Перевірка чи ми на serverless платформі (Vercel)
function isServerlessEnvironment(): boolean {
  return !!(
    process.env.VERCEL ||
    process.env.AWS_LAMBDA_FUNCTION_NAME ||
    process.env.RAILWAY_ENVIRONMENT
  );
}

export async function GET() {
  try {
    // На serverless платформах завжди вимагаємо Supabase
    if (isServerlessEnvironment() && !isSupabaseAvailable()) {
      console.error('❌ Serverless environment detected but Supabase not configured');
      return NextResponse.json(
        {
          error: 'Database not configured',
          details: 'Supabase configuration required for production environment',
          environment: 'serverless',
          needsSetup: true,
        },
        { status: 500 },
      );
    }

    console.log('📞 Fetching consultations from Supabase...');

    const { data, error } = await supabase
      .from('consultations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('❌ Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch consultations', details: error.message },
        { status: 500 },
      );
    }

    console.log(`✅ Successfully fetched ${data?.length || 0} consultations`);
    return NextResponse.json(data || []);
  } catch (error) {
    console.error('💥 Error fetching consultations:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // На serverless платформах завжди вимагаємо Supabase
    if (isServerlessEnvironment() && !isSupabaseAvailable()) {
      console.error('❌ Serverless environment: Supabase required but not configured');
      return NextResponse.json(
        {
          success: false,
          error: 'Database not configured for production',
          details:
            'Supabase configuration required. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.',
          environment: 'serverless',
          needsSetup: true,
          setupInstructions:
            'Visit https://supabase.com to create a project and get your credentials',
        },
        { status: 500 },
      );
    }

    console.log('📞 Consultation submission to Supabase:', {
      name: body.name,
      phone: body.phone,
      isMobile: body.isMobile,
      userAgent: body.userAgent?.substring(0, 50) + '...',
    });

    // Підготовка даних для Supabase
    const consultationData: Partial<Consultation> = {
      name: body.name,
      phone: body.phone,
      comment: body.comment || '',
      user_agent: body.userAgent,
      is_mobile: body.isMobile || false,
      viewport: body.viewport,
      connection: body.connection,
    };

    // Зберігаємо в Supabase
    const { data, error } = await supabase
      .from('consultations')
      .insert([consultationData])
      .select()
      .single();

    if (error) {
      console.error('❌ Supabase insert error:', error);
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to save consultation',
          details: error.message,
        },
        { status: 500 },
      );
    }

    console.log('✅ Consultation saved successfully:', data.id);

    return NextResponse.json({
      success: true,
      id: data.id,
      message: 'Consultation saved to Supabase database',
      environment: 'supabase',
      debug: {
        supabaseId: data.id,
        createdAt: data.created_at,
      },
    });
  } catch (e) {
    console.error('Consultation API Error:', e);
    return NextResponse.json(
      {
        success: false,
        error: e instanceof Error ? e.message : String(e),
        details: 'Please check server logs for more information',
      },
      { status: 500 },
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 });
    }

    console.log('🗑️ DELETE request for consultation ID:', id);

    // Видаляємо з Supabase
    const { error } = await supabase.from('consultations').delete().eq('id', id);

    if (error) {
      console.error('❌ Supabase delete error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to delete consultation', details: error.message },
        { status: 500 },
      );
    }

    console.log('✅ Consultation deleted successfully');

    return NextResponse.json({
      success: true,
      message: 'Consultation deleted from Supabase database',
    });
  } catch (e) {
    console.error('DELETE Consultation Error:', e);
    return NextResponse.json(
      {
        success: false,
        error: e instanceof Error ? e.message : String(e),
      },
      { status: 500 },
    );
  }
}
