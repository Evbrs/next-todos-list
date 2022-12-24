import classnames from "classnames"
import Button from "../ui/Button"
import Plus from "../Icons/Plus"
const TodosHeaders = (props) => {
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
  return (
    <nav className="border-b-2 flex flex-row">
      <div className="pl-2 w-5/6">
        {todos.map((todo) => (
          <Button className="border-x-2 relative mt-2 border-t-2 rounded-t-xl px-2 -ml-1 first:ml-0 h-100 bg-white">
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
        <Button className="border-x-2 border-t-2 rounded-t-xl px-2 mt-3 -ml-1 first:ml-0 bg-white">
          <Plus />
        </Button>
      </div>
    </nav>
  )
}

export default TodosHeaders
