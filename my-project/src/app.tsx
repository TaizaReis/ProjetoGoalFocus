//JSX - JavaScript XML -> HTML
import { Dialog } from './componentes/ui/dialog'
// import { EmptyGoals } from './componentes/empty-goals'
import { CreateGoal } from './componentes/create-goal'
import { Summary } from './componentes/summary'



export function App() {
  return (
    <Dialog>
      {/* <EmptyGoals /> */}
      <Summary />

      <CreateGoal />      
      
    </Dialog>

  )
  
}


