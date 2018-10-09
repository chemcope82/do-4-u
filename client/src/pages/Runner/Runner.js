import React, { Component } from 'react';
import bg8 from './images/bg8.jpg';
import API from "../../utils/API";
import TaskCard from "../../components/TaskCard";
import TaskItem from "../../components/TaskItem";


const runnerStyle = {
  backgroundImage: "url(" + bg8 + ")"
};


const runnerContainerStyle = {
  height: 80 + '%'
}

const taskCardArrayObject = {
  task_Description: "",
  task_Location: "",
  task_Payment: "",
  task_Number: null
};


class Runner extends Component {
  state = {
    currentUser: "",
    taskListArray: [],
    taskCardArray: []
  }

  componentDidMount() {
    this.loadTasks();
    this.getUser();

    // this.state.taskListArray.map(taskList => {
    //  let taskCardArrayObject = {
    //     task_Description: taskList.task_1_Description,
    //     task_Location: taskList.task_1_Location,
    //     task_Payment: taskList.task_1_PaymentAmount,
    //     task_Number: 1
    //   }
    //   taskCardArray.
    //   if(taskList.)
    // })
    // this.interval = setInterval(() => this.compareTime(), 5000);
  }

  loadTasks = () => {
    API.getTasks()
      .then(res => {
        this.setState({ taskListArray: res.data });
        console.log(this.state.taskListArray);
      })
      .catch(err => console.log(err));
  };

  getUser = () => {
    API.getUser()
      .then(res => {
        this.setState({ currentUser: res.user._id });
        console.log(this.state.currentUser)
      })
      .catch(err => console.log(err));
  }

  getOptions = (event) => {
    event.preventDefault();
    const Options = {
    taskID: event.target.name,
    taskNumber: event.target.value
    }
    return Options;
  }


  claimTask = event => {
    
    API.claimTask(this.getOptions(event))

    .then(res => alert("task claimed!"))
    .catch(err => console.log(err));

  }
  /////////////////////////////////////////////////
  // TASK EXPIRATION
  /////////////////////////////////////////////////
  // If (List Expired) {Delete it from the DB}
  // compareTime = () => {
  //   const now = new Date();
  //   const currentYear = now.getFullYear();
  //   console.log('currentYear', currentYear);
  //   const currentMonth = now.getMonth() + 1;
  //   console.log('currentMonth', currentMonth);
  //   const currentDay = now.getDate();
  //   console.log('currentDay', currentDay);
  //   const currentHour = now.getHours();
  //   console.log('currentHour', currentHour);
  //   const currentMinute = now.getMinutes();
  //   console.log('currentMinute', currentMinute);
  //   const currentSecond = now.getSeconds();

  //   console.log('currentSecond', currentSecond);

    // this.state.taskListArray.map(task => {
    //   var expYear = task.year
    //   var expMonth = task.month
    //   var expDay = task.day
    //   var expHour = task.hour
    //   var expMinute = task.minute
    //   var amOrPm = task.amOrPm

    //   // Converting from military time
    //   if (amOrPm === "PM") {
    //     expHour = expHour + 12
    //   }
    //   // 12AM
    //   if (expHour === 12 && amOrPm === "AM") {
    //     expHour = 0
    //   }
      
    //   console.log('expHour', expHour);

    //   if (
    //     currentYear >= expYear
    //     &&
    //     currentMonth >= expMonth
    //     &&
    //     currentDay >= expDay
    //     &&
    //     currentHour >= expHour
    //     &&
    //     currentMinute >= expMinute

        // we may want to add something here for AM/PM so the user wont have to put in military time.
  //     ) {
  //       let id = task._id;
  //       console.log("updating API");
  //       API.updateTask({
  //         _id: id,
  //         taskExpired: true,
  //       }).then(res => this.loadTasks())
  //         .then(res => this.checkIfTaskIsExpired())
  //         .catch(err => console.log(err));
  //     }
  //   })
  // };
  // Checking the DB to see if taskExpired = true
  // checkIfTaskIsExpired = () => {
  //   this.state.taskListArray.map(task => {

  //     if (task.taskExpired === true) {
  //       console.log('task', task);

  //       let id = task._id
  //       console.log('id', id);
  //       this.deleteExpiredTask(id)
  //     }
  //   })
  // }
  // Set taskExpired to true if the time is expired or just delete it 
  // deleteExpiredTask = id => {
  //   console.log(id)
  //   API.deleteTask({
  //     _id: id
  //   }).then(res => this.loadTasks())
  //     .catch(err => console.log(err));
  //   console.log("DELETED FROM DB")
  // }

  handleSignout = event => {
    event.preventDefault();
    
    API.logout();
  };


  render() {
    return (

      <div className="bg" style={runnerStyle}>

        <nav className="transparent z-depth-0">
          <div className="nav-wrapper">
            <p className="brand-logo white-text left hide-on-small-only" id="slogan"> Do More. Work Less.</p>
            <ul id="nav-mobile" className="right">
            <li><a href={`/runnerlists/${this.state.currentUser}`} className=" white-text">My Runner Lists</a></li>
            <li><a href={`/profile/${this.state.currentUser}`} className=" white-text">Home</a></li>
              <li><a href="/" onClick={this.handleSignout} className="signoutBtn white-text">Sign Out</a></li>
            </ul>
          </div>
        </nav>

        <p className="center white-text" id="createList">Available Lists</p>

        <div className="row runner" style={runnerContainerStyle}>
          <div className="">
            <div className="col s12">
              {this.state.taskListArray.map(task => (
                <TaskCard 
                  key={task._id}
                  month={task.month}
                  day={task.day}
                  year={task.year}
                  hour={task.hour}
                  minute={task.minute}
                  amOrPm={task.amOrPm}
                  total={task.total}
                  deliveryAddress={task.deliveryAddress}
                  firstName={task.user[0].firstName}
                  lastName={task.user[0].lastName}
                  phone={task.user[0].phone}
                  >
                    <TaskItem
                      taskDescription={task.task_1_Description}
                      taskLocation={task.task_1_Location}
                      taskPayment={task.task_1_PaymentAmount}
                    >
                      <span className="secondary-content">
                      <a href="#" name={task._id} value="1" onClick={this.claimTask}>Claim</a>
                      </span>
                    </TaskItem> 

                    <TaskItem
                      taskDescription={task.task_2_Description}
                      taskLocation={task.task_2_Location}
                      taskPayment={task.task_2_PaymentAmount}
                    >
                      <span className="secondary-content">
                      <a href="#" name={task._id} value="2" onClick={this.claimTask}>Claim</a>
                      </span>
                    </TaskItem>

                    <TaskItem
                      taskDescription={task.task_3_Description}
                      taskLocation={task.task_3_Location}
                      taskPayment={task.task_3_PaymentAmount}
                    >
                      <span className="secondary-content">
                      <a href="#" name={task._id} value="3" onClick={this.claimTask}>Claim</a>
                      </span>
                    </TaskItem>

                    <TaskItem
                      taskDescription={task.task_4_Description}
                      taskLocation={task.task_4_Location}
                      taskPayment={task.task_4_PaymentAmount}
                    >
                      <span className="secondary-content">
                      <a href="#" name={task._id} value="4" onClick={this.claimTask}>Claim</a>
                      </span>
                    </TaskItem>

                  </TaskCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Runner;
