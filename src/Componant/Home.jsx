import { useNavigate } from "react-router-dom";
import { FaPlusCircle, FaTasks } from "react-icons/fa"; // Icons

function Home() {
  const navigate = useNavigate();

  return (
    <>
      

      {/* Main Content */}
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Welcome to Mini Task Manager</h2>
          <p className="text-muted">Organize your daily tasks efficiently and stay productive!</p>
        </div>

        <div className="row justify-content-center">
          {/* Add Task Card */}
          <div className="col-md-5 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <FaPlusCircle size={40} className="text-success mb-3" />
                <h5 className="card-title fw-bold">Add New Task</h5>
                <p className="card-text">Click here to create and add a new task to your list.</p>
                <button className="btn btn-success" onClick={() => navigate("/addtasks")}>
                  ➕ Add Task
                </button>
              </div>
            </div>
          </div>

          {/* Show Tasks Card */}
          <div className="col-md-5 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <FaTasks size={40} className="text-primary mb-3" />
                <h5 className="card-title fw-bold">View All Tasks</h5>
                <p className="card-text">Review and manage your existing tasks here.</p>
                <button className="btn btn-primary" onClick={() => navigate("/tasks")}>
                  📋 Show Tasks
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;