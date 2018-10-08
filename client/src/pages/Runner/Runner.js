import React from 'react';
import bg8 from './images/bg8.jpg';
import API from "../../utils/API";
import TaskCard from "../../components/TaskCard";

const runnerStyle = {
  backgroundImage: "url(" + bg8 + ")"
};


const runnerContainerStyle = {
  height: 80 + '%'
}

export default class Runner extends React.Component {
  state = {
    taskListArray: [],
    id: ""
  }

  componentDidMount() {
    this.loadTasks()
    this.interval = setInterval(() => this.compareTime(), 5000);

    API.getUser(this.props.match.params.id)
    .then(res => this.setState({
      id: res.data._id
    }))
    .catch(err => console.log(err));
  };


  loadTasks = () => {
    API.getTasks()
      .then(res =>
        this.setState({ taskListArray: res.data })
      )
      .catch(err => console.log(err));
  };


  /////////////////////////////////////////////////
  // CLAIMED
  /////////////////////////////////////////////////
  claimAll = id => {
    console.log("clicked");
    console.log(id);

    for (var i = 0; i < this.state.taskListArray.length; i++) {
      if (this.state.taskListArray[i]._id === id) {
        console.log(i);
        API.updateTask({
          _id: id,

          task_1_Runner_Claimed: false,
          task_2_Runner_Claimed: false,
          task_3_Runner_Claimed: false,
          task_4_Runner_Claimed: false,

        }).then(res => this.loadTasks())
          .catch(err => console.log(err));
      }
    }
    console.log(this.state.taskListArray)
  };
  claimOne = id => {

    for (var i = 0; i < this.state.taskListArray.length; i++) {
      if (this.state.taskListArray[i]._id === id) {
        console.log(i);
        API.updateTask({
          _id: id,

          task_1_Runner_Claimed: true,

        }).then(res => this.loadTasks())
          .catch(err => console.log(err));
      }
    }
  }
  claimTwo = id => {

    for (var i = 0; i < this.state.taskListArray.length; i++) {
      if (this.state.taskListArray[i]._id === id) {
        console.log(i);
        API.updateTask({
          _id: id,

          task_2_Runner_Claimed: true,

        }).then(res => this.loadTasks())
          .catch(err => console.log(err));
      }
    }
  }
  claimThree = id => {

    for (var i = 0; i < this.state.taskListArray.length; i++) {
      if (this.state.taskListArray[i]._id === id) {
        console.log(i);
        API.updateTask({
          _id: id,

          task_3_Runner_Claimed: true,

        }).then(res => this.loadTasks())
          .catch(err => console.log(err));
      }
    }
  }
  claimFour = id => {

    for (var i = 0; i < this.state.taskListArray.length; i++) {
      if (this.state.taskListArray[i]._id === id) {
        console.log(i);
        API.updateTask({
          _id: id,

          task_4_Runner_Claimed: true,

        }).then(res => this.loadTasks())
          .catch(err => console.log(err));
      }
    }
  }

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



  render() {
    // console.log(this.state.taskListArray)
    // console.log(this.state.taskListArray[0].task_1_Description);
    return (

      <div className="bg" style={runnerStyle}>

        <nav className="transparent z-depth-0">
          <div className="nav-wrapper">
            <p className="brand-logo white-text left hide-on-small-only" id="slogan"> Do More. Work Less.</p>
            <ul id="nav-mobile" className="right">
            <li><a href={`http://localhost:3000/runnerlists/${this.state.id}`} className=" white-text">My Runner Lists</a></li>
            <li><a href={`http://localhost:3000/profile/${this.state.id}`} className=" white-text">Home</a></li>
              <li><a href="/" className="signoutBtn white-text">Sign Out</a></li>
            </ul>
          </div>
        </nav>

        <p className="center white-text" id="createList">Available Lists</p>

        <div className="row runner" style={runnerContainerStyle}>
          <div className="">
            <div className="col s12">



              {/* rendering onto the page, feel free to skip over */}

              {this.state.taskListArray.map(task => {

                // // If statement for expired tasks
                // let expiredTaskId = task._id;
                // console.log('expiredTaskId', expiredTaskId);
                // if (task.taskExpired === false) {
                //   this.compareTime(task)
                // }
                console.log("test")

                // this.populatePage(task)
                if (task.task_1_Runner_Claimed === true && task.task_2_Runner_Claimed === true && task.task_3_Runner_Claimed === true && task.task_4_Runner_Claimed === true) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={"CLAIMED"}
                    task_1_PaymentAmount={""}
                    task_1_Location={""}
                    task_2_Description={"CLAIMED"}
                    task_2_PaymentAmount={""}
                    task_2_Location={""}
                    task_3_Description={"CLAIMED"}
                    task_3_PaymentAmount={""}
                    task_3_Location={""}
                    task_4_Description={"CLAIMED"}
                    task_4_PaymentAmount={""}
                    task_4_Location={""}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={"CLAIM"}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
                    month={task.month}
                    day={task.day}
                    year={task.year}
                    hour={task.hour}
                    minute={task.minute}
                  />

                }
                else if (task.task_1_Runner_Claimed === false && task.task_2_Runner_Claimed === false && task.task_3_Runner_Claimed === false && task.task_4_Runner_Claimed === false) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={`Task 1: ${task.task_1_Description}`}
                    task_1_PaymentAmount={`Price: ${task.task_1_PaymentAmount}`}
                    task_1_Location={`Location: ${task.task_1_Location}`}
                    task_2_Description={`Task 2: ${task.task_2_Description}`}
                    task_2_PaymentAmount={`Price: ${task.task_2_PaymentAmount}`}
                    task_2_Location={`Location: ${task.task_2_Location}`}
                    task_3_Description={`Task 3: ${task.task_3_Description}`}
                    task_3_PaymentAmount={`Price: ${task.task_3_PaymentAmount}`}
                    task_3_Location={`Location: ${task.task_3_Location}`}
                    task_4_Description={`Task 4: ${task.task_4_Description}`}
                    task_4_PaymentAmount={`Price: ${task.task_4_PaymentAmount}`}
                    task_4_Location={`Location: ${task.task_4_Location}`}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={"Claim All"}
                    ClaimOneTask={"Claim"}
                    ClaimTwoTask={"Claim"}
                    ClaimThreeTask={"Claim"}
                    ClaimFourTask={"Claim"}
                  />
                } else if (task.task_1_Runner_Claimed === true && task.task_2_Runner_Claimed === false && task.task_3_Runner_Claimed === false && task.task_4_Runner_Claimed === false) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={"CLAIMED"}
                    task_1_PaymentAmount={""}
                    task_1_Location={""}
                    task_2_Description={`Task 2: ${task.task_2_Description}`}
                    task_2_PaymentAmount={`Price: ${task.task_2_PaymentAmount}`}
                    task_2_Location={`Location: ${task.task_2_Location}`}
                    task_3_Description={`Task 3: ${task.task_3_Description}`}
                    task_3_PaymentAmount={`Price: ${task.task_3_PaymentAmount}`}
                    task_3_Location={`Location: ${task.task_3_Location}`}
                    task_4_Description={`Task 4: ${task.task_4_Description}`}
                    task_4_PaymentAmount={`Price: ${task.task_4_PaymentAmount}`}
                    task_4_Location={`Location: ${task.task_4_Location}`}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={"Claim All"}
                    ClaimOneTask={""}
                    ClaimTwoTask={"Claim"}
                    ClaimThreeTask={"Claim"}
                    ClaimFourTask={"Claim"}
                  />
                } else if (task.task_1_Runner_Claimed === true && task.task_2_Runner_Claimed === true && task.task_3_Runner_Claimed === false && task.task_4_Runner_Claimed === false) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={"CLAIMED"}
                    task_1_PaymentAmount={""}
                    task_1_Location={""}
                    task_2_Description={"CLAIMED"}
                    task_2_PaymentAmount={""}
                    task_2_Location={""}
                    task_3_Description={`Task 3: ${task.task_3_Description}`}
                    task_3_PaymentAmount={`Price: ${task.task_3_PaymentAmount}`}
                    task_3_Location={`Location: ${task.task_3_Location}`}
                    task_4_Description={`Task 4: ${task.task_4_Description}`}
                    task_4_PaymentAmount={`Price: ${task.task_4_PaymentAmount}`}
                    task_4_Location={`Location: ${task.task_4_Location}`}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={"Claim All"}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={"Claim"}
                    ClaimFourTask={"Claim"}
                  />
                } else if (task.task_1_Runner_Claimed === true && task.task_2_Runner_Claimed === true && task.task_3_Runner_Claimed === true && task.task_4_Runner_Claimed === false) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={"CLAIMED"}
                    task_1_PaymentAmount={""}
                    task_1_Location={""}
                    task_2_Description={""}
                    task_2_PaymentAmount={"CLAIMED"}
                    task_2_Location={""}
                    task_3_Description={""}
                    task_3_PaymentAmount={"CLAIMED"}
                    task_3_Location={""}
                    task_4_Description={""}
                    task_4_PaymentAmount={`Price: ${task.task_4_PaymentAmount}`}
                    task_4_Location={`Location: ${task.task_4_Location}`}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={"Claim All"}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={"Claim"}
                  />
                } else if (task.task_1_Runner_Claimed === true && task.task_2_Runner_Claimed === false && task.task_3_Runner_Claimed === true && task.task_4_Runner_Claimed === false) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={"CLAIMED"}
                    task_1_PaymentAmount={""}
                    task_1_Location={""}
                    task_2_Description={`Task 2: ${task.task_2_Description}`}
                    task_2_PaymentAmount={`Price: ${task.task_2_PaymentAmount}`}
                    task_2_Location={`Location: ${task.task_2_Location}`}
                    task_3_Description={"CLAIMED"}
                    task_3_PaymentAmount={""}
                    task_3_Location={""}
                    task_4_Description={`Task 4: ${task.task_4_Description}`}
                    task_4_PaymentAmount={`Price: ${task.task_4_PaymentAmount}`}
                    task_4_Location={`Location: ${task.task_4_Location}`}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={"Claim All"}
                    ClaimOneTask={""}
                    ClaimTwoTask={"Claim"}
                    ClaimThreeTask={""}
                    ClaimFourTask={"Claim"}
                  />
                } else if (task.task_1_Runner_Claimed === true && task.task_2_Runner_Claimed === false && task.task_3_Runner_Claimed === false && task.task_4_Runner_Claimed === true) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={"CLAIMED"}
                    task_1_PaymentAmount={""}
                    task_1_Location={""}
                    task_2_Description={`Task 2: ${task.task_2_Description}`}
                    task_2_PaymentAmount={`Price: ${task.task_2_PaymentAmount}`}
                    task_2_Location={`Location: ${task.task_2_Location}`}
                    task_3_Description={`Task 3: ${task.task_3_Description}`}
                    task_3_PaymentAmount={`Price: ${task.task_3_PaymentAmount}`}
                    task_3_Location={`Location: ${task.task_3_Location}`}
                    task_4_Description={"CLAIMED"}
                    task_4_PaymentAmount={""}
                    task_4_Location={""}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={"Claim All"}
                    ClaimOneTask={""}
                    ClaimTwoTask={"Claim"}
                    ClaimThreeTask={"Claim"}
                    ClaimFourTask={""}
                  />
                } else if (task.task_1_Runner_Claimed === false && task.task_2_Runner_Claimed === true && task.task_3_Runner_Claimed === false && task.task_4_Runner_Claimed === false) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={`Task 1: ${task.task_1_Description}`}
                    task_1_PaymentAmount={`Price: ${task.task_1_PaymentAmount}`}
                    task_1_Location={`Location: ${task.task_1_Location}`}
                    task_2_Description={"CLAIMED"}
                    task_2_PaymentAmount={""}
                    task_2_Location={""}
                    task_3_Description={`Task 3: ${task.task_3_Description}`}
                    task_3_PaymentAmount={`Price: ${task.task_3_PaymentAmount}`}
                    task_3_Location={`Location: ${task.task_3_Location}`}
                    task_4_Description={`Task 4: ${task.task_4_Description}`}
                    task_4_PaymentAmount={`Price: ${task.task_4_PaymentAmount}`}
                    task_4_Location={`Location: ${task.task_4_Location}`}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={"Claim All"}
                    ClaimOneTask={"Claim"}
                    ClaimTwoTask={""}
                    ClaimThreeTask={"Claim"}
                    ClaimFourTask={"Claim"}
                  />
                } else if (task.task_1_Runner_Claimed === false && task.task_2_Runner_Claimed === true && task.task_3_Runner_Claimed === true && task.task_4_Runner_Claimed === false) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={`Task 1: ${task.task_1_Description}`}
                    task_1_PaymentAmount={`Price: ${task.task_1_PaymentAmount}`}
                    task_1_Location={`Location: ${task.task_1_Location}`}
                    task_2_Description={"CLAIMED"}
                    task_2_PaymentAmount={""}
                    task_2_Location={""}
                    task_3_Description={"CLAIMED"}
                    task_3_PaymentAmount={""}
                    task_3_Location={""}
                    task_4_Description={`Task 4: ${task.task_4_Description}`}
                    task_4_PaymentAmount={`Price: ${task.task_4_PaymentAmount}`}
                    task_4_Location={`Location: ${task.task_4_Location}`}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={"Claim All"}
                    ClaimOneTask={"Claim"}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={"Claim"}
                  />
                } else if (task.task_1_Runner_Claimed === false && task.task_2_Runner_Claimed === true && task.task_3_Runner_Claimed === false && task.task_4_Runner_Claimed === true) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={`Task 1: ${task.task_1_Description}`}
                    task_1_PaymentAmount={`Price: ${task.task_1_PaymentAmount}`}
                    task_1_Location={`Location: ${task.task_1_Location}`}
                    task_2_Description={"CLAIMED"}
                    task_2_PaymentAmount={""}
                    task_2_Location={""}
                    task_3_Description={`Task 3: ${task.task_3_Description}`}
                    task_3_PaymentAmount={`Price: ${task.task_3_PaymentAmount}`}
                    task_3_Location={`Location: ${task.task_3_Location}`}
                    task_4_Description={"CLAIMED"}
                    task_4_PaymentAmount={""}
                    task_4_Location={""}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={"Claim All"}
                    ClaimOneTask={"Claim"}
                    ClaimTwoTask={""}
                    ClaimThreeTask={"Claim"}
                    ClaimFourTask={""}
                  />
                } else if (task.task_1_Runner_Claimed === false && task.task_2_Runner_Claimed === true && task.task_3_Runner_Claimed === true && task.task_4_Runner_Claimed === true) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={`Task 1: ${task.task_1_Description}`}
                    task_1_PaymentAmount={`Price: ${task.task_1_PaymentAmount}`}
                    task_1_Location={`Location: ${task.task_1_Location}`}
                    task_2_Description={"CLAIMED"}
                    task_2_PaymentAmount={""}
                    task_2_Location={""}
                    task_3_Description={"CLAIMED"}
                    task_3_PaymentAmount={""}
                    task_3_Location={""}
                    task_4_Description={"CLAIMED"}
                    task_4_PaymentAmount={""}
                    task_4_Location={""}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={"Claim All"}
                    ClaimOneTask={"Claim"}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
                  />
                } else if (task.task_1_Runner_Claimed === false && task.task_2_Runner_Claimed === false && task.task_3_Runner_Claimed === true && task.task_4_Runner_Claimed === false) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={`Task 1: ${task.task_1_Description}`}
                    task_1_PaymentAmount={`Price: ${task.task_1_PaymentAmount}`}
                    task_1_Location={`Location: ${task.task_1_Location}`}
                    task_2_Description={`Task 2: ${task.task_2_Description}`}
                    task_2_PaymentAmount={`Price: ${task.task_2_PaymentAmount}`}
                    task_2_Location={`Location: ${task.task_2_Location}`}
                    task_3_Description={"CLAIMED"}
                    task_3_PaymentAmount={""}
                    task_3_Location={""}
                    task_4_Description={`Task 4: ${task.task_4_Description}`}
                    task_4_PaymentAmount={`Price: ${task.task_4_PaymentAmount}`}
                    task_4_Location={`Location: ${task.task_4_Location}`}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={"Claim All"}
                    ClaimOneTask={"Claim"}
                    ClaimTwoTask={"Claim"}
                    ClaimThreeTask={""}
                    ClaimFourTask={"Claim"}
                  />
                } else if (task.task_1_Runner_Claimed === false && task.task_2_Runner_Claimed === false && task.task_3_Runner_Claimed === true && task.task_4_Runner_Claimed === true) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={`Task 1: ${task.task_1_Description}`}
                    task_1_PaymentAmount={`Price: ${task.task_1_PaymentAmount}`}
                    task_1_Location={`Location: ${task.task_1_Location}`}
                    task_2_Description={`Task 2: ${task.task_2_Description}`}
                    task_2_PaymentAmount={`Price: ${task.task_2_PaymentAmount}`}
                    task_2_Location={`Location: ${task.task_2_Location}`}
                    task_3_Description={"CLAIMED"}
                    task_3_PaymentAmount={""}
                    task_3_Location={""}
                    task_4_Description={"CLAIMED"}
                    task_4_PaymentAmount={""}
                    task_4_Location={""}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={"Claim All"}
                    ClaimOneTask={"Claim"}
                    ClaimTwoTask={"Claim"}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
                  />
                } else if (task.task_1_Runner_Claimed === false && task.task_2_Runner_Claimed === false && task.task_3_Runner_Claimed === false && task.task_4_Runner_Claimed === true) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={`Task 1: ${task.task_1_Description}`}
                    task_1_PaymentAmount={`Price: ${task.task_1_PaymentAmount}`}
                    task_1_Location={`Location: ${task.task_1_Location}`}
                    task_2_Description={`Task 2: ${task.task_2_Description}`}
                    task_2_PaymentAmount={`Price: ${task.task_2_PaymentAmount}`}
                    task_2_Location={`Location: ${task.task_2_Location}`}
                    task_3_Description={`Task 3: ${task.task_3_Description}`}
                    task_3_PaymentAmount={`Price: ${task.task_3_PaymentAmount}`}
                    task_3_Location={`Location: ${task.task_3_Location}`}
                    task_4_Description={"CLAIMED"}
                    task_4_PaymentAmount={""}
                    task_4_Location={""}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={"Claim All"}
                    ClaimOneTask={"Claim"}
                    ClaimTwoTask={"Claim"}
                    ClaimThreeTask={"Claim"}
                    ClaimFourTask={""}
                  />
                } else if (task.task_1_Runner_Claimed === true && task.task_2_Runner_Claimed === true && task.task_3_Runner_Claimed === false && task.task_4_Runner_Claimed === true) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={"CLAIMED"}
                    task_1_PaymentAmount={""}
                    task_1_Location={""}
                    task_2_Description={"CLAIMED"}
                    task_2_PaymentAmount={""}
                    task_2_Location={""}
                    task_3_Description={`Task 3: ${task.task_3_Description}`}
                    task_3_PaymentAmount={`Price: ${task.task_3_PaymentAmount}`}
                    task_3_Location={`Location: ${task.task_3_Location}`}
                    task_4_Description={"CLAIMED"}
                    task_4_PaymentAmount={""}
                    task_4_Location={""}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={"Claim All"}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={"Claim"}
                    ClaimFourTask={""}
                  />
                } else if (task.task_1_Runner_Claimed === true && task.task_2_Runner_Claimed === false && task.task_3_Runner_Claimed === true && task.task_4_Runner_Claimed === true) {
                  return <TaskCard
                    claimAll={this.claimAll}
                    claimOne={this.claimOne}
                    claimTwo={this.claimTwo}
                    claimThree={this.claimThree}
                    claimFour={this.claimFour}
                    id={task._id}
                    key={task._id}
                    dateDoneBy={task.dateDoneBy}
                    task_1_Description={"CLAIMED"}
                    task_1_PaymentAmount={""}
                    task_1_Location={""}
                    task_2_Description={`Task 2: ${task.task_2_Description}`}
                    task_2_PaymentAmount={`Price: ${task.task_2_PaymentAmount}`}
                    task_2_Location={`Location: ${task.task_2_Location}`}
                    task_3_Description={"CLAIMED"}
                    task_3_PaymentAmount={""}
                    task_3_Location={""}
                    task_4_Description={"CLAIMED"}
                    task_4_PaymentAmount={""}
                    task_4_Location={""}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={"Claim All"}
                    ClaimOneTask={""}
                    ClaimTwoTask={"Claim"}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
                  />
                }
              })}

            </div>
          </div>
        </div>
      </div>
    )

  }
}


// return <TaskCard
// claimAll={this.claimAll}
// claimOne={this.claimOne}
// claimTwo={this.claimTwo}
// claimThree={this.claimThree}
// claimFour={this.claimFour}
// id={task._id}
// key={task._id}
// dateDoneBy={task.dateDoneBy}
// task_1_Description={`Task 1: ${task.task_1_Description}`}
// task_1_PaymentAmount={`Price: ${task.task_1_PaymentAmount}`}
// task_1_Location={`Location: ${task.task_1_Location}`}
// task_2_Description={`Task 2: ${task.task_2_Description}`}
// task_2_PaymentAmount={`Price: ${task.task_2_PaymentAmount}`}
// task_2_Location={`Location: ${task.task_2_Location}`}
// task_3_Description={`Task 3: ${task.task_3_Description}`}
// task_3_PaymentAmount={`Price: ${task.task_3_PaymentAmount}`}
// task_3_Location={`Location: ${task.task_3_Location}`}
// task_4_Description={`Task 4: ${task.task_4_Description}`}
// task_4_PaymentAmount={`Price: ${task.task_4_PaymentAmount}`}
// task_4_Location={`Location: ${task.task_4_Location}`}
// total={task.total}
// timeDoneBy={task.timeDoneBy}
// deliveryAddress={task.deliveryAddress}
// ClaimAllTasks={"Claim All"}
// ClaimOneTask={"Claim"}
// ClaimTwoTask={"Claim"}
// ClaimThreeTask={"Claim"}
// ClaimFourTask={"Claim"}
// />