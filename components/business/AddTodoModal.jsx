import Close from "../Icons/Close"
import Button from "../ui/Button"
import context from "../../INITIAL_STATES/context"
import Input from "../ui/InputField"

import { Formik, Form } from "formik"
import * as Yup from "yup"
import { useContext } from "react"

const AddTodoModal = () => {
  const values = useContext(context)
  const { showAddTodosModal, setShowAddTodosModal, todos, setTodos, setIndex } =
    values
  const initialValues = {
    todoName: "",
  }
  console.log(showAddTodosModal)
  const validationSchema = Yup.object().shape({
    todoName: Yup.string()
      .min(5, "Todo name must be at least 5 characters long")
      .max(15, "Todo name must be smaller than 16 characters"),
  })

  const handleCloseModal = (e) => {
    setShowAddTodosModal(false)
  }

  const handleSubmit = (values, { resetForm }) => {
    console.log("todoName:", values.todoName)
    const newTodo = {
      index: todos.lastIndex + 1,
      lastIndexTasks: 0,
      title: values.todoName,
      finishedTasks: 0,
      totalTasks: 0,
      tasks: {},
    }
    setTodos({
      lastIndex: todos.lastIndex + 1,
      todos: {
        ...todos.todos,
        [todos.lastIndex + 1]: newTodo,
      },
    })
    resetForm()
    setShowAddTodosModal(false)

    setIndex(todos.lastIndex + 1)
  }

  return (
    <div>
      {showAddTodosModal ? (
        <div className="fixed z-30 h-screen w-screen bg-white inset-0 overflow-hidden">
          <div className="flex flex-row items-center justify-between border-b-2 p-4 pr-10">
            <p className="text-3xl font-extrabold">Create a new Todo list :</p>
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
                    label="TodoName"
                    name="todoName"
                    placeholder="Enter todo name...."
                  />
                  {errors.todoName && touched.todoName ? (
                    <div className="text-red-500 font-medium italic text-md pl-4">
                      {errors.todoName}
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

export default AddTodoModal
