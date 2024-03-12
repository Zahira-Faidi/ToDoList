const initialState = {
    tasks: [
        { id: 1, title: "Task 1", completed: "false" },
        { id: 2, title: "Task 2", completed: "true" },
    ]
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "Add_task":
            return { ...state, tasks: [...state.tasks, action.payload] }
        case "Update_task":

            const task = state.tasks.find((u) => u.id === parseInt(action.payload.id))
            if (task) {
                task.title = action.payload.title
                task.completed = action.payload.completed
            }
            return state
        case "Delete_task":
            return { ...state, tasks: [...state.tasks.filter((u) => u.id !== parseInt(action.payload))] }
        default:
            return state
    }
}
export default reducer