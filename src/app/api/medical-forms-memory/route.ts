import { NextResponse } from 'next/server';

// Простий API для зберігання в пам'яті (тільки для демонстрації)
// На продакшині використовуйте справжню базу даних

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

const medicalForms: MedicalFormData[] = [];

export async function GET() {
  try {
    console.log('GET request - returning medical forms:', medicalForms.length);
    return NextResponse.json(medicalForms);
  } catch (error) {
    console.error('Error in GET:', error);
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
      status: 'pending',
    };

    console.log('POST request - new medical form:', {
      id: formData.id,
      name: formData.name,
      phone: formData.phone,
    });

    // Зберігаємо в пам'яті (на продакшині використовуйте базу даних)
    medicalForms.push(formData);

    return NextResponse.json({
      success: true,
      id: formData.id,
      message: 'Form received successfully',
      total: medicalForms.length,
    });
  } catch (error) {
    console.error('Error in POST:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
