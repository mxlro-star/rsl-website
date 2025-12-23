import { z } from 'zod';

// Phone number validation regex (international format, optional)
const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;

export const requestIntroductionSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must not exceed 100 characters')
    .trim(),

  email: z
    .string()
    .email('Please enter a valid email address')
    .max(254, 'Email address is too long')
    .trim()
    .toLowerCase(),

  phone: z
    .string()
    .trim()
    .refine(
      (val) => val === '' || phoneRegex.test(val),
      'Please enter a valid phone number'
    )
    .optional()
    .transform((val) => val || ''),

  organisation: z
    .string()
    .max(200, 'Organisation name must not exceed 200 characters')
    .trim()
    .optional()
    .transform((val) => val || ''),

  requestType: z.enum(['Landlord', 'Local Authority', 'Partner', 'Other'], {
    errorMap: () => ({ message: 'Please select a request type' }),
  }),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must not exceed 2000 characters')
    .trim(),

  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: 'You must consent to continue',
    }),

  honeypot: z.string().optional(), // Not validated, just passed through
});

export type RequestIntroductionInput = z.infer<typeof requestIntroductionSchema>;
