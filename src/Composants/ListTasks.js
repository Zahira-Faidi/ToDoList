import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTaskAction } from "../reducer/todo/action";
import "./style/ListTasks.css"; 

function ListTasks() {
    const tasks = useSelector((data) => data.tasks);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTaskAction(id));
    };

    return (
        <div className="task-list-container">
            <p>
                <Link to="/add-task">
                    <button className="btn btn-primary">Add Task</button>
                </Link>
            </p>
            <table className="task-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Completed</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={index}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>{task.completed}</td>
                            <td>
                                <Link to={`/update-task/${task.id}`}>
                                    <button className="btn btn-success">Edit</button>
                                </Link>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(task.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListTasks;
