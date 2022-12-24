import classNames from "classnames"
import Bin from "../Icons/Bin"
import CheckBox from "../ui/CheckBox"
import context from "../../INITIAL_STATES/context"

import { useContext } from "react"
import Button from "../ui/Button"

const List = (props) => {
  const { className, ...otherProps } = props
  const values = useContext(context)
  const { isChecked, todos, setTodos, index } = values

  const updateFinishedStatus = (index, taskIndex, state) => {
    let operator = -1
    if (state) {
      operator = +1
    }
    setTodos((prevState) => ({
      ...prevState,
      todos: {
        ...prevState.todos,
        [index]: {
          ...prevState.todos[index],
          finishedTasks: prevState.todos[index].finishedTasks + operator,
          tasks: {
            ...prevState.todos[index].tasks,
            [taskIndex]: {
              ...prevState.todos[index].tasks[taskIndex],
              isFinished: state,
            },
          },
        },
      },
    }))
  }

  const handleDeleteTask = (e) => {
    const updatedTodo = { ...todos }
    console.log("parent: ", e.target.parentNode)
    const taskIndex = e.target.parentNode.getAttribute("data-task-id")

    console.log("task Index: ", taskIndex)
    console.log(updatedTodo.todos[index].tasks[taskIndex])

    if (updatedTodo.todos[index].tasks[taskIndex].isFinished) {
      updatedTodo.todos[index].finishedTasks =
        updatedTodo.todos[index].finishedTasks - 1
    }
    updatedTodo.todos[index].totalTasks =
      updatedTodo.todos[index].totalTasks - 1
    delete updatedTodo.todos[index].tasks[taskIndex]
    setTodos(updatedTodo)
  }

  const todosLength = Object.keys(todos.todos).length

  const todo = todos.todos[index]
  let tasksToMap
  if (todo) {
    tasksToMap = Object.values(todo.tasks)
  }

  const tasksLength = tasksToMap.length
  if (tasksLength < 1) {
    return (
      <p className="text-center text-3xl font-bold pt-2">
        IL N'Y A PAS DE TACHE A AFFICHER
      </p>
    )
  }

  const handleCheckboxChange = (e) => {
    const checkboxState = e.target.checked
    const taskIndex =
      e.target.parentNode.parentNode.getAttribute("data-task-id")
    console.log("show me : ", taskIndex)
    if (checkboxState) {
      updateFinishedStatus(index, taskIndex, true)
      return
    }

    updateFinishedStatus(index, taskIndex, false)
  }

  return (
    <>
      {tasksToMap.map((todo) => {
        if (isChecked) {
          if (!todo.isFinished) {
            return
          } else {
            return (
              <div
                className={classNames(
                  "group flex flex-row items-center justify-between p-3 border-b-2",
                  className
                )}
                key={index + "." + todo.index}
                data-task-id={todo.index}
              >
                <div className="flex flex-row gap-4">
                  <CheckBox
                    onChange={handleCheckboxChange}
                    checked={todo.isFinished}
                  />
                  <p className="w-100">{todo.description}</p>
                </div>
                <Button
                  className="invisible group-hover:visible"
                  onClick={handleDeleteTask}
                >
                  <Bin />
                </Button>
              </div>
            )
          }
        }

        return (
          <div
            className={classNames(
              "group flex flex-row items-center justify-between p-3 border-b-2",
              className
            )}
            key={index + "." + todo.index}
            data-task-id={todo.index}
          >
            <div className="flex flex-row gap-4">
              <CheckBox
                onChange={handleCheckboxChange}
                defaultChecked={todo.isFinished}
              />
              <p className=" w-100">{todo.description}</p>
            </div>
            <Button
              className="invisible group-hover:visible"
              onClick={handleDeleteTask}
            >
              <Bin />
            </Button>
          </div>
        )
      })}
    </>
  )
}

export default List
