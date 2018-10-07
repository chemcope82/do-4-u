import axios from "axios";

const API = {
  getJWT() {
    return localStorage.getItem("JWToken");
  },
  setJWT(token) {
    localStorage.setItem("JWToken", token);
  },
  login({email, password}) {
    return axios.post("/api/login", { email, password })
    .then((response) => {
      if(response.data.token){
        this.setJWT(response.data.token);
      } 
      return Promise.resolve(response);
    });
  },
  logout() {
    localStorage.removeItem("JWToken");
    window.location = "/";
  },
  // Gets all users
  getUsers() {
    return axios.get("/api/user");
  },
  // Gets the user with the given id
  getUser(id) {

    let JWToken = this.getJWT();

    return axios.get("/api/user/" + id,
      {
        headers: {
          Authorization: `Bearer ${JWToken}`
        }
      } 
    ).catch(err =>{
      if(err.response.status === 401){
        this.logout();
      }
      return Promise.reject(err);
    });
  },
  // Deletes the user with the given id
  deleteUser(id) {
    let JWToken = this.getJWT();

    return axios.delete("/api/user/" + id,
    {
      headers: {
        Authorization: `Bearer ${JWToken}`
      }
    } 
  ).catch(err =>{
    if(err.response.status === 401){
      console.log("Unauthorized");
      this.logout();
    }
    return Promise.reject(err);
    });
  },
  // Saves a user to the database
  saveUser(userData) {
    return axios.post("/api/user", userData);
  },
  // BEGIN MY CODE FOR UPDATING (added comma above also)
  // Updates a taskList in the database
  updateUser(userData) {
    let id = userData._id;
    let userDataNew = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
        address: userData.address,
        city: userData.city,
        state: userData.state,
        zip: userData.zip,
        phone: userData.phone,

    };
    let JWToken = this.getJWT();

    return axios.put("/api/user/" + id , userDataNew,
    {
      headers: {
        Authorization: `Bearer ${JWToken}`
      }
    } 
  ).catch(err =>{
    if(err.response.status === 401){
      this.logout();
    }
    return Promise.reject(err);
    });
  },

  getTasks() {
    let JWToken = this.getJWT();

    return axios.get("/api/tasklist",
    {
      headers: {
        Authorization: `Bearer ${JWToken}`
      }
    } 
  ).catch(err =>{
    if(err.response.status === 401){
      console.log("Unauthorized");
      this.logout();
    }
    return Promise.reject(err);
    });
  },
  // Gets the taskList with the given id
  getTask(id) {
    let JWToken = this.getJWT();

    return axios.get("/api/tasklist/" + id,
    {
      headers: {
        Authorization: `Bearer ${JWToken}`
      }
    } 
  ).catch(err =>{
    if(err.response.status === 401){
      console.log("Unauthorized");
      this.logout();
    }
    return Promise.reject(err);
    });
  },
  // Deletes the taskList with the given id
  deleteTask(id) {
    let JWToken = this.getJWT();

    return axios.delete("/api/tasklist/" + id,
    {
      headers: {
        Authorization: `Bearer ${JWToken}`
      }
    } 
  ).catch(err =>{
    if(err.response.status === 401){
      console.log("Unauthorized");
      this.logout();
    }
    return Promise.reject(err);
    });
  },
  // Saves a taskList to the database
  saveTask(taskListData) {
    let JWToken = this.getJWT();

    return axios.post("/api/tasklist", taskListData,
    {
      headers: {
        Authorization: `Bearer ${JWToken}`
      }
    } 
  ).catch(err =>{
    if(err.response.status === 401){
      console.log("Unauthorized");
      this.logout();
    }
    return Promise.reject(err);
    });
  },
  // BEGIN MY CODE FOR UPDATING (added comma above also)
  // Updates a taskList in the database
  updateTask(taskListData) {
    let JWToken = this.getJWT();

    let id = taskListData._id;
    let taskListDataNew = {
        task_1_Description: taskListData.task_1_Description,
        task_1_Location: taskListData.task_1_Location,
        task_1_Location2: taskListData.task_1_Location2,
        task_1_PaymentAmount: taskListData.task_1_PaymentAmount,
        task_1_TimeDoneBy: taskListData.task_1_TimeDoneBy,
        task_1_Done: taskListData.task_1_Description,
        task_2_Description: taskListData.task_2_Description,
        task_2_Location: taskListData.task_2_Location,
        task_2_Location2: taskListData.task_2_Location2,
        task_2_PaymentAmount: taskListData.task_2_PaymentAmount,
        task_2_TimeDoneBy: taskListData.task_2_TimeDoneBy,
        task_2_Done: taskListData.task_2_Done,
        task_3_Description: taskListData.task_3_Description,
        task_3_Location: taskListData.task_3_Location,
        task_3_Location2: taskListData.task_3_Location2,
        task_3_PaymentAmount: taskListData.task_3_PaymentAmount,
        task_3_TimeDoneBy: taskListData.task_3_TimeDoneBy,
        task_3_Done: taskListData.task_3_Done,
        task_4_Description: taskListData.task_4_Description,
        task_4_Location: taskListData.task_4_Location,
        task_4_Location2: taskListData.task_4_Location2,
        task_4_PaymentAmount: taskListData.task_4_PaymentAmount,
        task_4_TimeDoneBy: taskListData.task_4_TimeDoneBy,
        task_4_Done: taskListData.task_4_Done,

    };
    return axios.put("/api/tasklist/" + id , taskListDataNew,
    {
      headers: {
        Authorization: `Bearer ${JWToken}`
      }
    } 
  ).catch(err =>{
    if(err.response.status === 401){
      console.log("Unauthorized");
      this.logout();
    }
    return Promise.reject(err);
    });
  },

  
  // END MY CODE FOR UPDATING
};

export default API;