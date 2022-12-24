import Close from "../Icons/Close"
import Button from "../ui/Button"
import context from "../../INITIAL_STATES/context"
import Input from "../ui/InputField"

import { Formik, Form } from "formik"
import * as Yup from "yup"
import { useContext } from "react"

const AddTasksModal = () => {
  const values = useContext(context)
  const { showAddTasksModal, setShowAddTasksModal, todos, setTodos, index } =
    values

  const initialValues = {
    taskName: "",
  }

  const validationSchema = Yup.object().shape({
    taskName: Yup.string()
      .min(2, "Task name must be at least 5 characters long")
      .max(55, "Task name must be smaller than 13 characters"),
  })

  const handleCloseModal = (e) => {
    setShowAddTasksModal(false)
  }

  const handleSubmit = (values, { resetForm }) => {
    const todo = todos.todos[index]
    todo.lastIndexTasks += 1
    todo.totalTasks += 1
    console.log(values.taskName)
    todo.tasks[todo.lastIndexTasks] = {
      index: todo.lastIndexTasks,
      description: values.taskName,
      isFinished: false,
    }
    setTodos((prevState) => ({
      ...prevState,
      todos: {
        ...prevState.todos,
        [index]: todo,
      },
    }))
    resetForm()
    handleCloseModal()
  }

  return (
    <div>
      {showAddTasksModal ? (
        <div className="fixed z-30 h-screen w-screen bg-white inset-0 overflow-hidden">
          <div className="flex flex-row items-center justify-between border-b-2 p-4 pr-10">
            <p className="text-3xl font-extrabold">Create a new Task :</p>
            <Button onClick={handleCloseModal}>
              <Close />
            </Button>
          </div>
          <div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched }) => (
                <Form>
                  <Input
                    label="taskName"
                    name="taskName"
                    placeholder="Enter todo name...."
                  />
                  {errors.taskName && touched.taskName ? (
                    <div className="text-red-500 font-medium italic text-md pl-4">
                      {errors.taskName}
                    </div>
                  ) : null}
                  <div className="absolute right-11 bottom-11">
                    <Button
                      className="mr-2"
                      variant="cancel"
                      onClick={handleCloseModal}
                    >
                      Cancel
                    </Button>
                    <Button className="ml-2" type="submit" variant="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default AddTasksModal
