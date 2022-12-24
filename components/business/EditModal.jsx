const EditModal = (props) => {
  const values = useContext(context)
  const { name } = props
  const { showEditModal, setShowEditModal, todos, setTodos, setIndex } = values
  const initialValues = {
    Name: name,
  }
  console.log(showAddTodosModal)
  const validationSchema = Yup.object().shape({
    Name: Yup.string()
      .min(5, "Todo name must be at least 5 characters long")
      .max(40, "Todo name must be smaller than 16 characters"),
  })

  const handleCloseModal = (e) => {
    setShowEditModal(false)
  }

  const handleSubmit = (values, { resetForm }) => {}

  return (
    <div>
      {showEditModal ? (
        <div className="fixed z-30 h-screen w-screen bg-white inset-0 overflow-hidden">
          <div className="flex flex-row items-center justify-between border-b-2 p-4 pr-10">
            <p className="text-3xl font-extrabold">Edit the name :</p>
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
                    label="Name to edit"
                    name="Name"
                    placeholder="Enter name...."
                  />
                  {errors.Name && touched.Name ? (
                    <div className="text-red-500 font-medium italic text-md pl-4">
                      {errors.Name}
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

export default EditModal
