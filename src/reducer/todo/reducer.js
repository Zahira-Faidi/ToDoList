import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from "./action";

const initialState = {
    tasks: [
        { id: 1, title: "Task 1", completed: "false" },
        { id: 2, title: "Task 2", completed: "true" },
    ]
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] }
        case UPDATE_TASK:

            const task = state.tasks.find((u) => u.id === parseInt(action.payload.id))
            if (task) {
                task.title = action.payload.title
                task.completed = action.payload.completed
            }
            return state
        case DELETE_TASK:
            return { ...state, tasks: [...state.tasks.filter((u) => u.id !== parseInt(action.payload))] }
        default:
            return state
    }
}
export default reducer