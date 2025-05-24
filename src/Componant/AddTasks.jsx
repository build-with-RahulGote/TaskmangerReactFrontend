import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddTasks() {
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    completed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTask({
      ...task,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/task/createTask", task)
      .then(() => {
        alert("Task added successfully!");
        navigate("/tasks");
      })
      .catch((err) => {
        console.error("Error adding task:", err);
        alert("Failed to add task. Please try again.");
      });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="mb-4 text-center text-primary">📝 Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={task.title}
              onChange={handleChange}
              required
              placeholder="Enter task title"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Description</label>
            <textarea
              className="form-control"
              name="description"
              value={task.description}
              onChange={handleChange}
              required
              placeholder="Enter task description"
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Due Date</label>
            <input
              type="date"
              className="form-control"
              name="dueDate"
              value={task.dueDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="completed"
              checked={task.completed}
              onChange={handleChange}
              id="completed"
            />
            <label className="form-check-label" htmlFor="completed">
              Mark as Completed
            </label>
          </div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-success">
              ➕ Add Task
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => navigate("/")}
            >
              ⬅ Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTasks;
