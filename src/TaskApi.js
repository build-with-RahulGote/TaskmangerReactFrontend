import axios from "axios";

let showAllApi = "http://localhost:8080/task/createTask";
let addtasks = "http://localhost:8080/task/getTask";
let updatetasks = "http://localhost:8080/task/updatetasks";
let gettaskbyid = "http://localhost:8080/task/gettasksbyid";
let taskdelete="http://localhost:8080/task/deleteTask";

class TaskApi {
    showallTasks() {
        return axios.get(showAllApi);
    }

    createtasks(taskData) {
        return axios.post(`${addtasks}/`, taskData);
    }

    updatetask(id, taskData) {
      
        return axios.put(`${updatetasks}/${id}`, taskData);
    }

    getTaskId(id) {
        return axios.get(`${gettaskbyid}/${id}`);
    }

    deletetask(id){
          return axios.delete(`${taskdelete}/${id}`)
    }
}

export default new TaskApi();
