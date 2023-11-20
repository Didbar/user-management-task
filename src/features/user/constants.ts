import { z } from 'zod'

export const ZOD_USER_SCHEMA = {
  name: z.string().min(3, { message: 'name must be at least 3 characters*' }),
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
  groups: z
    .array(
      z.object({
        value: z.number(),
        label: z.string(),
      })
    )
    .min(1, { message: 'Please select at least one group' }),
}

export const USER_DEFAULT_VALUES = { name: '', email: '', groups: [] }
