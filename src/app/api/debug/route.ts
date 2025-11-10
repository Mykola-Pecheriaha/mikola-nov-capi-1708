import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    timestamp: new Date().toISOString(),
    environment: {
      NODE_ENV: process.env.NODE_ENV,
      VERCEL: process.env.VERCEL,
      VERCEL_ENV: process.env.VERCEL_ENV,
      VERCEL_URL: process.env.VERCEL_URL,
      VERCEL_BRANCH_URL: process.env.VERCEL_BRANCH_URL,
      cwd: process.cwd(),
      platform: process.platform,
      runtime: typeof process.versions?.node ? 'node' : 'edge',
    },
    headers: {
      'user-agent': 'server-side',
    },
    isVercel: !!(process.env.VERCEL || process.env.VERCEL_ENV),
    detection: {
      hasFileSystem: (() => {
        try {
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          const fs = require('fs');
          return !!fs;
        } catch {
          return false;
        }
      })(),
    },
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log('🚀 DEBUG API POST:', {
      timestamp: new Date().toISOString(),
      body,
      environment: process.env.NODE_ENV,
      isVercel: !!(process.env.VERCEL || process.env.VERCEL_ENV),
      headers: Object.fromEntries(req.headers.entries()),
    });

    return NextResponse.json({
      success: true,
      received: body,
      timestamp: new Date().toISOString(),
      environment: {
        NODE_ENV: process.env.NODE_ENV,
        VERCEL: process.env.VERCEL,
        VERCEL_ENV: process.env.VERCEL_ENV,
      },
      isVercel: !!(process.env.VERCEL || process.env.VERCEL_ENV),
      message: 'Debug API working correctly',
    });
  } catch (error) {
    console.error('🚨 DEBUG API Error:', error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV,
      },
      { status: 500 },
    );
  }
}
