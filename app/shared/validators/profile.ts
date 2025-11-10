import { z } from 'zod';

export const profileSchema = z.object({
  id: z.number(),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  family: z.string().min(2, 'Family must be at least 2 characters'),
  email: z.email('Invalid email format'),
  mobile: z
    .string()
    .regex(/^(\+98|0)?9\d{9}$/, 'Invalid Iranian mobile number'),
  dob: z.string(),
  favorites: z.array(z.string()),
  bio: z.string().max(300, 'Bio must be under 300 characters'),
});

export const profileUpdateSchema = profileSchema
  .partial()
  .refine(
    (data) =>
      Object.keys(data).every((key) =>
        ['name', 'family', 'mobile', 'dob', 'favorites', 'bio'].includes(key),
      ),
    {
      message: 'Invalid fields in update payload',
    },
  );

export type Profile = z.infer<typeof profileSchema>;
export type ProfileUpdateInput = z.infer<typeof profileUpdateSchema>;
