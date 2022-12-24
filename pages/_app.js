import '../styles/globals.css'
import Context from '../INITIAL_STATES/context'
import INITIAL_TODOS from '../INITIAL_STATES/todos'
import INITIAL_ISCHECKED from '../INITIAL_STATES/isChecked'
import INITIAL_INDEXOFTODOS from '../INITIAL_STATES/indexOfTodos'
import INITIAL_SHOWMODAL from '../INITIAL_STATES/showModal'

import { useState } from 'react'


function MyApp({ Component, pageProps }) {
  const [index, setIndex] = useState(INITIAL_INDEXOFTODOS)
  const [todos, setTodos] = useState(INITIAL_TODOS)
  const [isChecked, setIsChecked] = useState(INITIAL_ISCHECKED)
  const [showAddTasksModal, setShowAddTasksModal] = useState(INITIAL_SHOWMODAL)
  const [showAddTodosModal, setShowAddTodosModal] = useState(INITIAL_SHOWMODAL)
  const [showEditModal, setShowEditModal] = useState(INITIAL_SHOWMODAL)

  return (
    <Context.Provider value={{ todos, setTodos, isChecked, setIsChecked, index, setIndex, showAddTasksModal, setShowAddTasksModal, showAddTodosModal, setShowAddTodosModal }}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default MyApp
