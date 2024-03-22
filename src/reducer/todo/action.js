export const ADD_TASK = "ADD_TASK"
export const UPDATE_TASK = "UPDATE_TASK";
export const DELETE_TASK = "DELETE_TASK";

export const addTaskAction =(task)=> {
    return {type:ADD_TASK, payload:task}
}
export const updateTaskAction = (newtask)=>{
    return{type:UPDATE_TASK, payload:newtask}
}
export const deleteTaskAction =(id)=>{
    return{type:DELETE_TASK, payload:id}
}