// src/App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddTasks from './Componant/AddTasks';
import ViewTask from './componant/ViewTasks';
import Home from './Componant/Home';
import Layout from './Componant/Layout';
import UpdateTask from './Componant/UpdateTask';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="addtasks" element={<AddTasks />} />
          <Route path="tasks" element={<ViewTask />} />
          <Route path="update/:id" element={<UpdateTask/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
