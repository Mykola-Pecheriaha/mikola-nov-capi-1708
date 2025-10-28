import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'server', 'medical-forms.json');

// Тимчасове рішення для Vercel - in-memory store
// TODO: Замінити на Vercel KV коли проект буде готовий до продакшину
interface MedicalFormData {
  id: string;
  name: string;
  age: string;
  gender: string;
  phone: string;
  height: string;
  weight: string;
  bmi?: number;
  complaints: string;
  examinations: string[];
  hasChronicDisease: boolean;
  chronicDiseases: string;
  takesMedication: boolean;
  medications: string;
  painLevel: number;
  additionalComments: string;
  createdAt: string;
  status: string;
}

const vercelMemoryStore: MedicalFormData[] = [];

export async function GET() {
  try {
    // На Vercel використовуємо in-memory store
    if (process.env.VERCEL === '1') {
      console.log(`Vercel: returning ${vercelMemoryStore.length} forms from memory`);
      return NextResponse.json(vercelMemoryStore);
    }

    // Локально читаємо з файлу
    if (fs.existsSync(DATA_PATH)) {
      const data = fs.readFileSync(DATA_PATH, 'utf-8');
      return NextResponse.json(JSON.parse(data));
    } else {
      console.log('Local: medical forms file does not exist, returning empty array');
      return NextResponse.json([], { status: 200 });
    }
  } catch (error) {
    console.error('Error reading medical forms:', error);
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Додаємо timestamp та унікальний ID
    const formData = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
      status: 'pending', // pending, reviewed, completed
    };

    console.log('Medical form submission:', {
      id: formData.id,
      name: formData.name,
      phone: formData.phone,
      isVercel: process.env.VERCEL === '1',
    });

    // На Vercel зберігаємо у пам'яті (тимчасово)
    if (process.env.VERCEL === '1') {
      vercelMemoryStore.push(formData);
      console.log(`Vercel: saved to memory, total forms: ${vercelMemoryStore.length}`);
    } else {
      // Локально зберігаємо у файл
      try {
        const data = fs.existsSync(DATA_PATH)
          ? JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'))
          : [];
        data.push(formData);
        fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
        console.log('Local: saved to file successfully');
      } catch (fileError) {
        console.warn('Cannot write to file:', fileError);
      }
    }

    return NextResponse.json({
      success: true,
      id: formData.id,
      message:
        process.env.VERCEL === '1'
          ? `Form saved to memory (${vercelMemoryStore.length} total)`
          : 'Form saved to local file',
      environment: process.env.VERCEL === '1' ? 'vercel' : 'local',
    });
  } catch (e) {
    console.error('API Error:', e);
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
