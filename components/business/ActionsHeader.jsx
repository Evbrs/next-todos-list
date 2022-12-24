import Bin from "../Icons/Bin"
import Plus from "../Icons/Plus"
import Edit from "../Icons/Edit"
import Button from "../ui/Button"
import Check from "../Icons/Check"
import context from "../../INITIAL_STATES/context"

import { useState, useContext } from "react"

const ActionsHeader = () => {
  const values = useContext(context)
  const {
    isChecked,
    setIsChecked,
    index,
    setIndex,
    todos,
    setTodos,
    showAddTasksModal,
    setShowAddTasksModal,
  } = values

  const handleCheckClick = () => {
    if (isChecked) {
      setIsChecked(false)
    } else {
      setIsChecked(true)
    }
  }

  const handleDeleteTodo = (e) => {
    const updatedTodo = { ...todos }
    delete updatedTodo.todos[index]
    setIndex(index + 1)
    setTodos(updatedTodo)
  }

  const handlePlusClick = () => {
    setShowAddTasksModal(true)
  }

  return (
    <div className="flex flex-row px-2 py-2 border-b-2">
      <Button onClick={handlePlusClick}>
        <Plus className="mx-2" />
      </Button>
      <Button>
        <Edit className="mx-2" />
      </Button>
      <Button onClick={handleDeleteTodo}>
        <Bin className="mx-2" />
      </Button>
      <Button onClick={handleCheckClick}>
        <Check className="absolute right-10 top-20" isChecked={isChecked} />
      </Button>
    </div>
  )
}

export default ActionsHeader
