import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTaskAction } from "../reducer/todo/action";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./style/UpdateTask.css";

function UpdateTask() {
  const { id } = useParams();
  const task = useSelector((data) =>
    data.tasks.find((u) => u.id === parseInt(id))
  );
  const [title, setTitle] = useState(task ? task.title : "");
  const [completed, setCompleted] = useState(task ? task.completed : "");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(
      updateTaskAction({
        id: id,
        title: title,
        completed: completed,
      })
    );
    navigate("/");
  };

  return (
    <div className="update-task-container">
      <form className="update-task-form">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="completed">Completed</label>
        <input
          type="text"
          id="completed"
          value={completed}
          onChange={(e) => setCompleted(e.target.value)}
        />

        <button className="btn btn-primary" onClick={handleClick}>
          Enregistrer
        </button>
      </form>
    </div>
  );
}

export default UpdateTask;
