
import React from "react";

import { useEffect, useState } from 'react';
import { data, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import TaskApi from "../TaskApi";
function UpdateTask() {
  const { id } = useParams(); // Get task ID from URL
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: '',
    description: '',
    completed: false,
    due_date: ''
  });

  const [loading, setLoading] = useState(true);

  // Fetch existing task details
  useEffect(() => {
  TaskApi.getTaskId(id)
    .then(response => {
      const taskData = Array.isArray(response.data) ? response.data[0] : response.data;
      setTask(taskData || {});
      console.log(taskData);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching task:', error);
      setLoading(false);
    });
}, [id]);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTask(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   TaskApi.updatetask(id, task)
      .then(() => {
        console.log(task);
        alert("Task updated successfully!");
        navigate("/tasks");
      })
      .catch(error => {
        alert("Error updating task!");
        console.error(error);
      });
  };

  if (loading) return <div className="text-center mt-5">Loading task data...</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Update Task</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 bg-light rounded">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={task.description}
            onChange={handleChange}
            rows="3"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Due Date</label>
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
            id="completedCheckbox"
          />
          <label className="form-check-label" htmlFor="completedCheckbox">
            Mark as Completed
          </label>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">Update Task</button>
          <button type="button" className="btn btn-secondary ms-3" onClick={() => navigate("/tasks")}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateTask;
