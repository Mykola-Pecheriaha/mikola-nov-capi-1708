import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import type { MedicalForm } from '@/lib/supabase';
import fs from 'fs';
import path from 'path';

// Локальні файли як fallback
const DATA_PATH = path.join(process.cwd(), 'server', 'medical-forms.json');

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

// Функція для перетворення snake_case в camelCase для фронтенду
function toCamelCase(obj: Record<string, unknown>): Record<string, unknown> {
  const camelCaseObj: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
    camelCaseObj[camelKey] = value;
  }
  return camelCaseObj;
}

export async function GET() {
  try {
    // На serverless платформах завжди використовуємо Supabase
    if (isServerlessEnvironment()) {
      if (!isSupabaseAvailable()) {
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
    }

    if (isSupabaseAvailable()) {
      console.log('📋 Fetching medical forms from Supabase...');

      const { data, error } = await supabase
        .from('medical_forms')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('❌ Supabase error:', error);
        return NextResponse.json(
          { error: 'Failed to fetch medical forms', details: error.message },
          { status: 500 },
        );
      }

      console.log(`✅ Successfully fetched ${data?.length || 0} medical forms from Supabase`);

      // Перетворюємо snake_case в camelCase для фронтенду
      const camelCaseData = data?.map(toCamelCase) || [];

      return NextResponse.json(camelCaseData);
    } else {
      // Fallback до локальних файлів (тільки для локальної розробки)
      console.log('📂 Supabase не налаштовано, використовуємо локальні файли...');

      if (!fs.existsSync(DATA_PATH)) {
        fs.writeFileSync(DATA_PATH, JSON.stringify([], null, 2));
      }

      const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
      console.log(`✅ Successfully fetched ${data.length} medical forms from local file`);

      return NextResponse.json(data);
    }
  } catch (error) {
    console.error('💥 Error fetching medical forms:', error);
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
    if (isServerlessEnvironment()) {
      if (!isSupabaseAvailable()) {
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
    }

    if (isSupabaseAvailable()) {
      console.log('📋 Medical form submission to Supabase:', {
        name: body.name,
        phone: body.phone,
        isMobile: body.isMobile,
        userAgent: body.userAgent?.substring(0, 50) + '...',
      });

      // Підготовка даних для Supabase (snake_case)
      const formData: Partial<MedicalForm> = {
        name: body.name,
        age: body.age,
        gender: body.gender,
        phone: body.phone,
        height: body.height,
        weight: body.weight,
        bmi: body.bmi,
        complaints: body.complaints,
        examinations: body.examinations || [],
        has_chronic_disease: body.hasChronicDisease || false,
        chronic_diseases: body.chronicDiseases || '',
        takes_medication: body.takesMedication || false,
        medications: body.medications || '',
        pain_level: body.painLevel || 0,
        additional_comments: body.additionalComments || '',
        user_agent: body.userAgent,
        is_mobile: body.isMobile || false,
        viewport: body.viewport,
        connection: body.connection,
        platform: body.platform,
        cookie_enabled: body.cookieEnabled,
        status: 'pending',
      };

      // Зберігаємо в Supabase
      const { data, error } = await supabase
        .from('medical_forms')
        .insert([formData])
        .select()
        .single();

      if (error) {
        console.error('❌ Supabase insert error:', error);
        return NextResponse.json(
          {
            success: false,
            error: 'Failed to save medical form',
            details: error.message,
          },
          { status: 500 },
        );
      }

      console.log('✅ Medical form saved successfully to Supabase:', data.id);

      return NextResponse.json({
        success: true,
        id: data.id,
        message: 'Medical form saved to Supabase database',
        environment: 'supabase',
        debug: {
          supabaseId: data.id,
          createdAt: data.created_at,
        },
      });
    } else {
      // Fallback до локальних файлів (тільки для локальної розробки)
      console.log('📂 Supabase не налаштовано, зберігаємо в локальні файли...');

      try {
        if (!fs.existsSync(DATA_PATH)) {
          fs.writeFileSync(DATA_PATH, JSON.stringify([], null, 2));
        }

        const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));

        // Генеруємо ID
        const newId = data.length > 0 ? Math.max(...data.map((d: { id: number }) => d.id)) + 1 : 1;

        const newForm = {
          id: newId,
          ...body,
          bmi:
            body.bmi ||
            (body.weight && body.height
              ? (body.weight / Math.pow(body.height / 100, 2)).toFixed(1)
              : null),
          status: 'pending',
          timestamp: new Date().toISOString(),
          createdAt: new Date().toISOString(),
        };

        data.push(newForm);
        fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));

        console.log('✅ Medical form saved successfully to local file:', newId);

        return NextResponse.json({
          success: true,
          id: newId,
          message: 'Medical form saved to local file (development mode)',
          environment: 'local',
          debug: {
            localId: newId,
            totalForms: data.length,
          },
        });
      } catch (fileError) {
        console.error('❌ File system error:', fileError);
        return NextResponse.json(
          {
            success: false,
            error: 'File system error',
            details:
              'Cannot write to file system in this environment. Please configure Supabase for production.',
            fileError: fileError instanceof Error ? fileError.message : String(fileError),
            needsSetup: true,
          },
          { status: 500 },
        );
      }
    }
  } catch (e) {
    console.error('💥 Medical form API Error:', e);
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

    console.log('🗑️ DELETE request for medical form ID:', id, 'Type:', typeof id);

    // Перевіряємо чи Supabase налаштований
    if (isSupabaseAvailable()) {
      // Конвертуємо ID в число для Supabase
      const numericId = parseInt(id, 10);

      if (isNaN(numericId)) {
        console.error('❌ Invalid ID format:', id);
        return NextResponse.json({ success: false, error: 'Invalid ID format' }, { status: 400 });
      }

      console.log('🔍 Attempting to delete ID:', numericId);

      // Видаляємо з Supabase
      const { data, error } = await supabase
        .from('medical_forms')
        .delete()
        .eq('id', numericId)
        .select();

      if (error) {
        console.error('❌ Supabase delete error:', error);
        return NextResponse.json(
          { success: false, error: 'Failed to delete medical form', details: error.message },
          { status: 500 },
        );
      }

      if (!data || data.length === 0) {
        console.warn('⚠️ No records deleted - ID not found:', numericId);
        return NextResponse.json(
          { success: false, error: 'Medical form not found' },
          { status: 404 },
        );
      }

      console.log('✅ Medical form deleted successfully from Supabase:', data);

      return NextResponse.json({
        success: true,
        message: 'Medical form deleted from Supabase database',
        deletedId: numericId,
      });
    } else {
      // Fallback до локальних файлів
      console.log('📂 Deleting from local file...');

      if (!fs.existsSync(DATA_PATH)) {
        return NextResponse.json(
          { success: false, error: 'Medical forms file not found' },
          { status: 404 },
        );
      }

      const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
      const filteredData = data.filter((form: { id: string }) => form.id !== id);

      if (data.length === filteredData.length) {
        return NextResponse.json(
          { success: false, error: 'Medical form not found' },
          { status: 404 },
        );
      }

      fs.writeFileSync(DATA_PATH, JSON.stringify(filteredData, null, 2));

      console.log('✅ Medical form deleted successfully from local file');

      return NextResponse.json({
        success: true,
        message: 'Medical form deleted from local file',
      });
    }
  } catch (e) {
    console.error('💥 DELETE Error:', e);
    return NextResponse.json(
      {
        success: false,
        error: e instanceof Error ? e.message : String(e),
      },
      { status: 500 },
    );
  }
}
