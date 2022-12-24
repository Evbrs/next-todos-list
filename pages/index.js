import ActionsHeader from '../components/business/ActionsHeader'
import AddTasksModal from '../components/business/AddTasksModal'
import AddTodoModal from '../components/business/AddTodoModal'
import List from '../components/business/List'
import TodosHeaders from '../components/business/TodosHeaders'

export default function Home() {
  return (
    <div className='h-screen overflow-y-hidden'>
      <TodosHeaders />
      <ActionsHeader />
      <div className='h-screen overflow-y-scroll'>
        <List />
      </div>
      <AddTasksModal />
      <AddTodoModal />
    </div>
  )
}
