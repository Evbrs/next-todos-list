import ActionsHeader from '../components/business/ActionsHeader'
import List from '../components/business/List'
import TodosHeaders from '../components/business/TodosHeaders'
import Button from '../components/ui/Button'

export default function Home() {
  return (
    <div className='pt-1'>
      <TodosHeaders />
      <ActionsHeader />
      <div className='flex-1 overflow-y-scroll'>

        <List />
      </div>
    </div>
  )
}
