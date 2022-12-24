import classNames from "classnames"
import Button from "../ui/Button"
import Plus from "../Icons/Plus"
import context from "../../INITIAL_STATES/context"

import { useContext } from "react"

const TodosHeaders = (props) => {
  const { className, ...otherProps } = props
  const values = useContext(context)
  const { setIndex, todos, showAddTodosModal, setShowAddTodosModal } = values

  const handleTodosChange = (e) => {
    const todoIndex = e.currentTarget.getAttribute("data-todo-id")
    setIndex(parseInt(todoIndex, 10))
  }

  const handleShowTodoModal = (e) => {
    setShowAddTodosModal(true)
  }

  const todosData = Object.values(todos.todos)

  return (
    <nav className="border-b-2 flex flex-row">
      <div className="pl-2 w-5/6">
        {todosData.map((todo) => (
          <Button
            className={classNames(
              "border-x-2 relative mt-2 border-t-2 rounded-t-xl px-2 -ml-1 first:ml-0 h-100 bg-white",
              className
            )}
            key={todo.index + "." + todo.tasks.length}
            data-todo-id={todo.index}
            onClick={handleTodosChange}
          >
            {todo.title}
            <span className="ml-2">
              {todo.finishedTasks > 0 ? (
                <span className="bg-green-200 rounded-2xl relative px-2 -mr-[6px] z-10">
                  {todo.finishedTasks}
                </span>
              ) : null}
              <span className="bg-blue-500 rounded-2xl relative px-2">
                {todo.totalTasks}
              </span>
            </span>
          </Button>
        ))}
      </div>
      <div className="pl-2 ">
        <Button
          onClick={handleShowTodoModal}
          className="border-x-2 border-t-2 rounded-t-xl px-2 mt-3 -ml-1 first:ml-0 bg-white"
        >
          <Plus />
        </Button>
      </div>
    </nav>
  )
}

export default TodosHeaders
