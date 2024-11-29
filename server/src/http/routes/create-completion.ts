import { z } from 'zod'
import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createGoalCompletion } from '../../db/functions/create-goal-completion'

export const createCompletionRoute: FastifyPluginAsyncZod = async app => {
    app.post(
        '/completions',
        {
          schema: {
            body: z.object({
              goalId: z.string(),
            }),
          },
        },
        async request => {
          const { goalId } = request.body
      
          await createGoalCompletion({
            goalId,
          })
        }
      )
  
}