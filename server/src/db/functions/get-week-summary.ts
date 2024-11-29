import { and, eq, gte, lte, sql } from "drizzle-orm"
import { db } from ".."
import { goalCompletions, goals } from "../schema"
import dayjs from "dayjs"
import { title } from "process"


export async function getWeekSummary() {
    const firstDayOfWeek = dayjs().startOf('week').toDate()
    const lastDayOfWeek = dayjs().endOf('week').toDate()

    const goalsCreatedUpToWeek = db.$with('goals_created_up_to_week').as(
        db
          .select({
            id: goals.id,
            title: goals.title,
            desiredWeeklyFrequency: goals.desiredWeeklyFrequency,
            createdAt: goals.createdAt,
          })
          .from(goals)
          .where(lte(goals.createdAt, lastDayOfWeek))
      )

    const goalsCompletedInWeek = db.$with('goal_completion_in_week').as(
    db
      .select({
        id: goalCompletions.id,
        title: goals.title,
        completedAtDate: sql/*aql */`
          DATE(${goalCompletions.createdAt})               
        `.as('completedAtDate')         

        
      })
      .from(goalCompletions)
      .innerJoin(goals, eq(goals.id, goalCompletions.goalId))
      .where(
        and(
          gte(goalCompletions.createdAt, firstDayOfWeek),
          lte(goalCompletions.createdAt, lastDayOfWeek)
        )
      )
      
  )


  const goalsCompletedByWeekDay = db.$with('goals_complated_by_week_day').as(
    db
        .select({ 
            completedAtDate: goalsCompletedInWeek.completedAtDate,
            completions: sql/*aql */`
                JSON_AGG( 
                    JSON_BUILD_OBJECT(
                        'id', ${goalsCompletedInWeek.id},
                        'title', ${goalsCompletedInWeek.title},
                        'completedAt', ${goalsCompletedInWeek.completedAtDate},
                    )    
                )
            `.as('completions'),
        })
        .from(goalsCompletedInWeek)
        .groupBy(goalsCompletedInWeek.completedAtDate)
  )

  const result = await db
    .with(goalsCreatedUpToWeek, goalsCompletedInWeek, goalsCompletedByWeekDay)
    .select()
    .from(goalsCompletedByWeekDay)

    return {
        summary: result,
    }

}