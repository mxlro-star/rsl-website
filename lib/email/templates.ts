import type { RequestIntroductionInput } from '@/lib/validation/request-introduction';

export interface EmailTemplate {
  subject: string;
  text: string;
  html: string;
}

/**
 * Generate email content for request introduction submissions
 */
export function generateRequestIntroductionEmail(
  data: RequestIntroductionInput
): EmailTemplate {
  const { fullName, email, phone, organisation, requestType, message } = data;

  // Plain text version (fallback)
  const text = `
New Request Introduction – Future Social Housing

Request Details:
----------------
Full Name: ${fullName}
Email Address: ${email}
Phone Number: ${phone || 'Not provided'}
Organisation: ${organisation || 'Not provided'}
Request Type: ${requestType}

Message:
--------
${message}

Consent: User has consented to being contacted and data storage.

Submitted: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}
  `.trim();

  // HTML version (primary)
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Request Introduction</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">

  <div style="background-color: #f4f4f5; padding: 30px; border-radius: 8px; border: 1px solid #e4e4e7;">

    <h1 style="color: #18181b; font-size: 24px; font-weight: 600; margin: 0 0 24px 0; border-bottom: 2px solid #3b82f6; padding-bottom: 12px;">
      New Request Introduction
    </h1>

    <div style="background-color: #ffffff; padding: 24px; border-radius: 6px; margin-bottom: 20px; border: 1px solid #e4e4e7;">
      <h2 style="color: #3b82f6; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
        Request Details
      </h2>

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 12px 8px 0; font-weight: 600; color: #52525b; width: 140px; vertical-align: top;">
            Full Name:
          </td>
          <td style="padding: 8px 0; color: #18181b;">
            ${escapeHtml(fullName)}
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 12px 8px 0; font-weight: 600; color: #52525b; vertical-align: top;">
            Email:
          </td>
          <td style="padding: 8px 0; color: #18181b;">
            <a href="mailto:${escapeHtml(email)}" style="color: #3b82f6; text-decoration: none;">
              ${escapeHtml(email)}
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 12px 8px 0; font-weight: 600; color: #52525b; vertical-align: top;">
            Phone:
          </td>
          <td style="padding: 8px 0; color: #18181b;">
            ${phone ? escapeHtml(phone) : '<em style="color: #a1a1aa;">Not provided</em>'}
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 12px 8px 0; font-weight: 600; color: #52525b; vertical-align: top;">
            Organisation:
          </td>
          <td style="padding: 8px 0; color: #18181b;">
            ${organisation ? escapeHtml(organisation) : '<em style="color: #a1a1aa;">Not provided</em>'}
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 12px 8px 0; font-weight: 600; color: #52525b; vertical-align: top;">
            Request Type:
          </td>
          <td style="padding: 8px 0; color: #18181b;">
            <span style="background-color: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 4px; font-size: 14px; font-weight: 500;">
              ${escapeHtml(requestType)}
            </span>
          </td>
        </tr>
      </table>
    </div>

    <div style="background-color: #ffffff; padding: 24px; border-radius: 6px; margin-bottom: 20px; border: 1px solid #e4e4e7;">
      <h2 style="color: #3b82f6; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
        Message
      </h2>
      <div style="color: #18181b; white-space: pre-wrap; font-size: 15px; line-height: 1.6;">
${escapeHtml(message)}
      </div>
    </div>

    <div style="padding: 16px; background-color: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 4px; margin-bottom: 20px;">
      <p style="margin: 0; color: #92400e; font-size: 14px;">
        <strong>Consent:</strong> User has consented to Future Social Housing contacting them and storing their information.
      </p>
    </div>

    <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e4e4e7;">
      <p style="margin: 0; color: #71717a; font-size: 13px;">
        Submitted: ${new Date().toLocaleString('en-GB', {
          timeZone: 'Europe/London',
          dateStyle: 'full',
          timeStyle: 'long'
        })}
      </p>
    </div>

  </div>

  <div style="text-align: center; padding-top: 20px;">
    <p style="margin: 0; color: #a1a1aa; font-size: 12px;">
      Future Social Housing – Request Introduction System
    </p>
  </div>

</body>
</html>
  `.trim();

  return {
    subject: 'New Request Introduction – Future Social Housing',
    text,
    html,
  };
}

/**
 * Escape HTML special characters to prevent XSS
 */
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
