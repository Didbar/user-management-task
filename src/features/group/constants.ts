import { z } from 'zod'

export const ZOD_GROUP_SCHEMA = {
  name: z.string().min(3, { message: 'name must be at least 3 characters*' }),
  slug: z.string().min(3, { message: 'slug must be at least 3 characters*' }),
}

export const GROUP_DEFAULT_VALUES = { name: '', slug: '' }
