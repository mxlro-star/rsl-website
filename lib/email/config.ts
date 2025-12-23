import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';

// Email configuration from environment variables
export const EMAIL_CONFIG = {
  smtp: {
    host: process.env.SMTP_HOST || '',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASSWORD || '',
    },
  },
  from: process.env.EMAIL_FROM || 'noreply@futuresocialhousing.co.uk',
  to: process.env.EMAIL_TO || 'hello@futuresocialhousing.co.uk',
};

// Validate email configuration
export function validateEmailConfig(): { valid: boolean; missing: string[] } {
  const required = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASSWORD'];
  const missing = required.filter((key) => !process.env[key]);

  return {
    valid: missing.length === 0,
    missing,
  };
}

// Create transporter (singleton pattern)
let transporter: Transporter | null = null;

export function getEmailTransporter(): Transporter {
  if (!transporter) {
    const validation = validateEmailConfig();

    if (!validation.valid) {
      throw new Error(
        `Missing required email configuration: ${validation.missing.join(', ')}`
      );
    }

    transporter = nodemailer.createTransport(EMAIL_CONFIG.smtp);
  }

  return transporter;
}

// Test email connection (useful for debugging)
export async function testEmailConnection(): Promise<boolean> {
  try {
    const transport = getEmailTransporter();
    await transport.verify();
    return true;
  } catch (error) {
    console.error('Email connection test failed:', error);
    return false;
  }
}
