import { NextRequest, NextResponse } from 'next/server';
import { renderToStream } from '@react-pdf/renderer';
import { createElement } from 'react';
import LandlordOnboardingPDF from './components/PDFDocument';

export async function GET(request: NextRequest) {
  try {
    const startTime = Date.now();
    console.log('[PDF] Generation started', new Date().toISOString());

    // Generate PDF stream (using createElement since .ts files don't support JSX)
    const stream = await renderToStream(createElement(LandlordOnboardingPDF));

    // Convert Node.js stream to buffer
    const chunks: Buffer[] = [];

    for await (const chunk of stream as any) {
      chunks.push(Buffer.from(chunk));
    }

    const buffer = Buffer.concat(chunks);

    const duration = Date.now() - startTime;
    console.log('[PDF] Generation completed', {
      timestamp: new Date().toISOString(),
      fileSize: buffer.length,
      duration: `${duration}ms`,
    });

    // Return PDF with appropriate headers
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition':
          'attachment; filename="Future-Social-Housing-Landlord-Onboarding-Pack.pdf"',
        'Content-Length': buffer.length.toString(),
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('[PDF] Generation error:', error);
    return NextResponse.json(
      {
        error: 'Failed to generate PDF',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// Ensure Node.js runtime (not Edge) for better compatibility with @react-pdf/renderer
export const runtime = 'nodejs';
