import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'server', 'medical-forms.json');

export async function GET() {
  try {
    const data = fs.readFileSync(DATA_PATH, 'utf-8');
    return NextResponse.json(JSON.parse(data));
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = fs.existsSync(DATA_PATH) ? JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8')) : [];

    // Додаємо timestamp та унікальний ID
    const formData = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
      status: 'pending', // pending, reviewed, completed
    };

    data.push(formData);
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
    return NextResponse.json({ success: true, id: formData.id });
  } catch (e) {
    return NextResponse.json(
      {
        success: false,
        error: e instanceof Error ? e.message : String(e),
      },
      { status: 500 },
    );
  }
}
