import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TaskApi from "../TaskApi";

function ViewTask() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const showAllApi = "http://localhost:8080/task/getTask";
  const deleteApi = "http://localhost:8080/task/deleteTask"; // Assuming this endpoint

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios
      .get(showAllApi)
      .then((response) => {
        setTasks(response.data);
      })
      .catch((err) => {
        console.error("Error fetching tasks:", err);
      });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
    TaskApi.deletetask(id)
        .then(() => {
          fetchTasks(); // Refresh task list
        })
        .catch((err) => {
          console.error("Error deleting task:", err);
        });
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>📋 Task List</h2>
        <button className="btn btn-outline-primary" onClick={() => navigate("/")}>
          ⬅ Back
        </button>
      </div>

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <table className="table table-bordered table-hover shadow-sm">
          <thead className="table-primary">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>
                  {task.completed ? (
                    <span className="badge bg-success">Completed</span>
                  ) : (
                    <span className="badge bg-warning text-dark">Pending</span>
                  )}
                </td>
                <td>{task.dueDate}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() => navigate(`/update/${task.id}`)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ViewTask;
