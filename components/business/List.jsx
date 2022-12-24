import classNames from "classnames"
import Bin from "../Icons/Bin"
import CheckBox from "../ui/CheckBox"

const List = (props) => {
  const { className, ...otherProps } = props
  const todos = [
    {
      index: 0,
      title: "title 1",
      finishedTasks: 1,
      totalTasks: 3,
      tasks: [
        { index: 0, description: "tasksTitle 1", isFinished: false },
        { index: 1, description: "tasksTitle 2", isFinished: true },
        { index: 2, description: "tasksTitle 3", isFinished: false },
      ],
    },
    {
      index: 1,
      title: "title 2",
      finishedTasks: 0,
      totalTasks: 3,
      tasks: [
        { index: 0, description: "tasksTitle 1 todo 2", isFinished: false },
        { index: 1, description: "tasksTitle 2 todo 2", isFinished: false },
        { index: 2, description: "tasksTitle 3 todo 2", isFinished: false },
      ],
    },
  ]
  const index = 0
  const todoToMap = todos[index]

  return (
    <>
      {todoToMap.tasks.map((todo) => (
        <div
          className={classNames(
            "group flex flex-row items-center justify-between p-3 border-b-2",
            className
          )}
          key={todo.index}
        >
          <div className="flex flex-row gap-4">
            <CheckBox />
            <p className=" w-100">{todo.description}</p>
          </div>
          <Bin className="invisible group-hover:visible" />
        </div>
      ))}
    </>
  )
}

export default List
