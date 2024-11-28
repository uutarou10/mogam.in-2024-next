import { z } from 'zod';
import { tagSchema } from '@/features/posts/model/tag';

export const postSchema = z.object({
  title: z.string().min(1),
  tags: tagSchema.array(),
  createdAt: z.date(),
});
