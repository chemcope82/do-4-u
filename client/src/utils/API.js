import axios from "axios";

export default {
  // Gets all books
  getUsers: function() {
    return axios.get("/api/user");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a book to the database
  saveUser: function(userData) {
    console.log("working again");
    return axios.post("/api/user", userData);
  },
  // BEGIN MY CODE FOR UPDATING (added comma above also)
  // Updates a book in the database
  updateUser: function(userData) {
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
    return axios.put("/api/user/" + id , userDataNew);
  },

  getTasks: function() {
    return axios.get("/api/tasklist");
  },
  // Gets the book with the given id
  getTask: function(id) {
    return axios.get("/api/tasklist/" + id);
  },
  // Deletes the book with the given id
  deleteTask: function(task) {
    let id = task._id
    console.log(id)
    return axios.delete("/api/tasklist/" + id);
  },
  // Saves a book to the database
  saveTask: function(taskListData) {
    return axios.post("/api/tasklist", taskListData);
  },
  // BEGIN MY CODE FOR UPDATING (added comma above also)
  // Updates a book in the database
  updateTask: function(taskListData) {
    let id = taskListData._id;

    console.log(taskListData);
    // delete taskListData._id;
    // console.log(taskListData);

    // let taskListDataNew = {
    //     task_1_Description: taskListData.task_1_Description,
    //     task_1_Location: taskListData.task_1_Location,
    //     task_1_PaymentAmount: taskListData.task_1_PaymentAmount,
    //     task_1_Done: taskListData.task_1_Description,
    //     task_1_Runner_Claimed: taskListData.task_1_Runner_Claimed,
    //     task_2_Description: taskListData.task_2_Description,
    //     task_2_Location: taskListData.task_2_Location,
    //     task_2_PaymentAmount: taskListData.task_2_PaymentAmount,
    //     task_2_Done: taskListData.task_2_Done,
    //     task_2_Runner_Claimed: taskListData.task_1_Runner_Claimed,
    //     task_3_Description: taskListData.task_3_Description,
    //     task_3_Location: taskListData.task_3_Location,
    //     task_3_PaymentAmount: taskListData.task_3_PaymentAmount,
    //     task_3_Done: taskListData.task_3_Done,
    //     task_3_Runner_Claimed: taskListData.task_1_Runner_Claimed,
    //     task_4_Description: taskListData.task_4_Description,
    //     task_4_Location: taskListData.task_4_Location,
    //     task_4_PaymentAmount: taskListData.task_4_PaymentAmount,
    //     task_4_Done: taskListData.task_4_Done,
    //     task_4_Runner_Claimed: taskListData.task_1_Runner_Claimed,
    //     deliveryAddress: taskListData.deliveryAddress,
    //     dateDoneBy: taskListData.dateDoneBy,
    //     timeDoneBy: taskListData.timeDoneBy,
    //     total: taskListData.total

    // };
    return axios.put("/api/tasklist/" + id , taskListData);
  }

  
  // END MY CODE FOR UPDATING
};
