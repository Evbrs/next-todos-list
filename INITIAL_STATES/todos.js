module.exports = {
  lastIndex: 1,
  todos: {
    0: {
      index: 0,
      lastIndexTasks: 2,
      title: "title 1",
      finishedTasks: 10,
      totalTasks: 15,
      tasks: {
        0: { index: 0, description: "tasksTitle 1", isFinished: true },
        1: { index: 1, description: "tasksTitle 2", isFinished: true },
        2: { index: 2, description: "tasksTitle 3", isFinished: false },
        3: { index: 3, description: "tasksTitle 4", isFinished: true },
      },
    },
    1: {
      index: 1,
      lastIndexTasks: 2,
      title: "title 2",
      finishedTasks: 0,
      totalTasks: 3,
      tasks: {
        0: { index: 0, description: "tasksTitle 1 todo 2", isFinished: false },
        1: { index: 1, description: "tasksTitle 2 todo 2", isFinished: false },
        2: { index: 2, description: "tasksTitle 3 todo 2", isFinished: false },
      },
    }
  }
}