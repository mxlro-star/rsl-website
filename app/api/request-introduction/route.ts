import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { requestIntroductionSchema } from '@/lib/validation/request-introduction';
import { getEmailTransporter, EMAIL_CONFIG } from '@/lib/email/config';
import { generateRequestIntroductionEmail } from '@/lib/email/templates';
import type { ApiResponse } from '@/lib/types';

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    // Parse request body
    const body = await request.json();

    // HONEYPOT CHECK: If honeypot field is filled, reject silently
    if (body.honeypot && body.honeypot.trim() !== '') {
      console.warn('[Request Introduction] Honeypot triggered', {
        timestamp: new Date().toISOString(),
        ip: request.headers.get('x-forwarded-for') || 'unknown',
      });

      // Return success to fool bots
      return NextResponse.json(
        { success: true },
        { status: 200 }
      );
    }

    // Validate with Zod
    const validatedData = requestIntroductionSchema.parse(body);

    // Generate email content
    const emailContent = generateRequestIntroductionEmail(validatedData);

    // Get email transporter
    const transporter = getEmailTransporter();

    // Send email
    const info = await transporter.sendMail({
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.to,
      replyTo: validatedData.email, // Allow direct reply to user
      subject: emailContent.subject,
      text: emailContent.text,
      html: emailContent.html,
      // Email headers for better deliverability
      headers: {
        'X-Priority': '3',
        'X-Mailer': 'Future Social Housing Request System',
      },
    });

    // Log success
    console.log('[Request Introduction] Email sent successfully', {
      timestamp: new Date().toISOString(),
      messageId: info.messageId,
      requestType: validatedData.requestType,
      userEmail: validatedData.email,
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        data: {
          message: 'Your request has been submitted successfully',
        },
      },
      { status: 200 }
    );

  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof ZodError) {
      const fieldErrors: Record<string, string> = {};

      error.errors.forEach((err) => {
        const field = err.path.join('.');
        fieldErrors[field] = err.message;
      });

      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: fieldErrors,
        },
        { status: 400 }
      );
    }

    // Handle email sending errors
    if (error instanceof Error && error.message.includes('SMTP')) {
      console.error('[Request Introduction] SMTP error:', error);

      return NextResponse.json(
        {
          success: false,
          error: 'Email service temporarily unavailable. Please try again later.',
        },
        { status: 503 }
      );
    }

    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid request format',
        },
        { status: 400 }
      );
    }

    // Generic error handler
    console.error('[Request Introduction] Unexpected error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}

// Only allow POST requests
export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

// Use Node.js runtime for Nodemailer compatibility
export const runtime = 'nodejs';
