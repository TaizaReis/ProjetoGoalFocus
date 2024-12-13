import { Plus } from 'lucide-react'
import { OutlineButton } from './ui/outline-button'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getPendingGoals } from '../http/get-pending-goals'
import { createGoalCompletion } from '../http/creat-goal-completetions'




export function PedingGoals() {
    const queryClient = useQueryClient()

    const {data} = useQuery({
      queryKey: ['pending-goals'],
      queryFn: getPendingGoals,
      staleTime: 1000 * 60,  //60 segundos
    })

    console.log(data)


    if (!data) {
        return null
    }
    
    async function handleCompleteGoal(goalId: string) {
        await createGoalCompletion(goalId)

        queryClient.invalidateQueries({ queryKey:['summary'] })
        queryClient.invalidateQueries({ queryKey:['pending-goals'] })
    }


    return (
        <div className="flex flex-wrap gap-3">
          {data.map(goal => {
            return (
              <OutlineButton
                key={goal.id}
                // onClick={() => handleCreateGoalCompletion(goal.id)}                
                disabled={goal.CompletionCont>= goal.desiredWeeklyFrequency}
                onClick={() => handleCompleteGoal(goal.id)}
                
              >
                <Plus className="size-4 text-zinc-600" />
                {goal.title}
              </OutlineButton>
            )
          })}
        </div>
      )
}