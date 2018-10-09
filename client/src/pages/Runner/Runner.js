import React, { Component } from 'react';
import bg8 from './images/bg8.jpg';
import API from "../../utils/API";
import TaskCard from "../../components/TaskCard";

const runnerStyle = {
  backgroundImage: "url(" + bg8 + ")"
};


const runnerContainerStyle = {
  height: 80 + '%'
}


class Runner extends Component {
  state = {
    taskListArray: [],
  }

  componentDidMount() {
    this.loadTasks()
    this.interval = setInterval(() => this.compareTime(), 5000);
  }

  loadTasks = () => {
    API.getTasks()
      .then(res =>
        this.setState({ taskListArray: res.data })
      )
      .catch(err => console.log(err));
  };

  /////////////////////////////////////////////////
  // TASK EXPIRATION
  /////////////////////////////////////////////////
  // If (List Expired) {Delete it from the DB}
  compareTime = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    console.log('currentYear', currentYear);
    const currentMonth = now.getMonth() + 1;
    console.log('currentMonth', currentMonth);
    const currentDay = now.getDate();
    console.log('currentDay', currentDay);
    const currentHour = now.getHours();
    console.log('currentHour', currentHour);
    const currentMinute = now.getMinutes();
    console.log('currentMinute', currentMinute);
    const currentSecond = now.getSeconds();

    console.log('currentSecond', currentSecond);

    this.state.taskListArray.map(task => {
      var expYear = task.year
      var expMonth = task.month
      var expDay = task.day
      var expHour = task.hour
      var expMinute = task.minute
      var amOrPm = task.amOrPm

      // Converting from military time
      if (amOrPm === "PM") {
        expHour = expHour + 12
      }
      // 12AM
      if (expHour === 12 && amOrPm === "AM") {
        expHour = 0
      }
      
      console.log('expHour', expHour);

      if (
        currentYear >= expYear
        &&
        currentMonth >= expMonth
        &&
        currentDay >= expDay
        &&
        currentHour >= expHour
        &&
        currentMinute >= expMinute

        // we may want to add something here for AM/PM so the user wont have to put in military time.
      ) {
        let id = task._id;
        console.log("updating API");
        API.updateTask({
          _id: id,
          taskExpired: true,
        }).then(res => this.loadTasks())
          .then(res => this.checkIfTaskIsExpired())
          .catch(err => console.log(err));
      }
    })
  };
  // Checking the DB to see if taskExpired = true
  checkIfTaskIsExpired = () => {
    this.state.taskListArray.map(task => {

      if (task.taskExpired === true) {
        console.log('task', task);

        let id = task._id
        console.log('id', id);
        this.deleteExpiredTask(id)
      }
    })
  }
  // Set taskExpired to true if the time is expired or just delete it 
  deleteExpiredTask = id => {
    console.log(id)
    API.deleteTask({
      _id: id
    }).then(res => this.loadTasks())
      .catch(err => console.log(err));
    console.log("DELETED FROM DB")
  }

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
            <li><a href={`/runnerlists/${this.state.id}`} className=" white-text">My Runner Lists</a></li>
            <li><a href={`/profile/${this.state.id}`} className=" white-text">Home</a></li>
              <li><a href="/" onClick={this.handleSignout} className="signoutBtn white-text">Sign Out</a></li>
            </ul>
          </div>
        </nav>

        <p className="center white-text" id="createList">Available Lists</p>

        <div className="row runner" style={runnerContainerStyle}>
          <div className="">
            <div className="col s12">
              {this.state.taskListArray.map(task => {})}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Runner;
