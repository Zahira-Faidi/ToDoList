import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskAction } from "../reducer/todo/action";
import { useNavigate } from "react-router-dom";
import "./style/AddTask.css"; 

function AddTask() {
  const count = useSelector((data) => data.tasks.length);
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(
      addTaskAction({
        id: count + 1,
        title: title,
        completed: completed,
      })
    );
    navigate("/");
  };

  return (
    <div className="add-task-container">
      <form className="add-task-form">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="completed">Completed</label>
        <input
          type="completed"
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

export default AddTask;
