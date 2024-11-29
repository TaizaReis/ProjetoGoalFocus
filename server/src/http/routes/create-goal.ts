import { z } from 'zod';
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { createGoal } from '../../db/functions/create-goal';

export const createGoalRoute: FastifyPluginAsyncZod = async  (app) => {
    app.post(
        '/gaols',
        {
          schema: {
            body: z.object({
              title: z.string(),
              desiredWeeklyFrequency: z.number().int().min(7).max(7),
            }),
          },
        },
        async request => {
          const { title, desiredWeeklyFrequency } = request.body
      
          await createGoal({
            title,
            desiredWeeklyFrequency,
          })
        }
    )
}    