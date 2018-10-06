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
    taskListArray: []
  }

  componentDidMount() {
    this.loadTasks()
    this.interval = setInterval(() => this.listExpired(), 1000);
  };


  loadTasks = () => {
    API.getTasks()
      .then(res =>
        this.setState({ taskListArray: res.data })
      )
      .catch(err => console.log(err));
  };


  claimAll = id => {
    console.log("clicked");
    console.log(id);

    API.updateTask({
      _id: id,
      task_1_Runner_Claimed: true,
      task_2_Runner_Claimed: true,
      task_3_Runner_Claimed: true,
      task_4_Runner_Claimed: true
    }).then(res => this.loadTasks())
      .catch(err => console.log(err));

    console.log(this.state.taskListArray)
  };


  claimOne = id => {
    console.log(id)

    API.updateTask({
      _id: id,
      task_1_Runner_Claimed: true
    }).then(res => this.loadTasks())
      .catch(err => console.log(err));

    console.log(this.state.taskListArray)

  }

  claimTwo = id => {

    API.updateTask({
      _id: id,
      task_2_Runner_Claimed: true,
    }).then(res => this.loadTasks())
      .catch(err => console.log(err));
  }


  claimThree = id => {

    API.updateTask({
      _id: id,
      task_3_Runner_Claimed: true
    }).then(res => this.loadTasks())
      .catch(err => console.log(err));
  }


  claimFour = id => {

    API.updateTask({
      _id: id,
      task_4_Runner_Claimed: true
    }).then(res => this.loadTasks())
      .catch(err => console.log(err));
  }


  // If (List Expired) {Delete it from the DB}
  listExpired = () => {
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    console.log('second', second);

    if (
      month === 10
      &&
      day === 6
      &&
      hour === 11
      &&
      minute === 2
      &&
      second === 0
    ) {
      alert("you did it!!")
      console.log('date', date);
      console.log('month', month);
      console.log('day', day);
      console.log('hour', hour);
      console.log('minute', minute);
      console.log('second', second);

      // API.deleteTask({
      //   _id: id
      // }).then(res => this.loadTasks())
      //   .catch(err => console.log(err));

    }

  };


  render() {
    // console.log(this.state.taskListArray)
    return (

      <div className="bg" style={runnerStyle}>

        <nav className="transparent z-depth-0">
          <div className="nav-wrapper">
            <p className="brand-logo white-text" id="slogan"> Do More. Work Less.</p>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/" className=" white-text">Log In</a></li>
            </ul>
          </div>
        </nav>

        <p className="center white-text" id="createList">Available Lists</p>

        <div className="row runner" style={runnerContainerStyle}>
          <div className="">
            <div className="col s12">


              {this.state.taskListArray.map(task => (
                <TaskCard
                  claimAll={this.claimAll}
                  claimOne={this.claimOne}
                  claimTwo={this.claimTwo}
                  claimThree={this.claimThree}
                  claimFour={this.claimFour}
                  id={task._id}
                  key={task._id}
                  dateDoneBy={task.dateDoneBy}
                  task_1_Description={task.task_1_Description}
                  task_1_PaymentAmount={task.task_1_PaymentAmount}
                  task_1_Location={task.task_1_Location}
                  task_2_Description={task.task_2_Description}
                  task_2_PaymentAmount={task.task_2_PaymentAmount}
                  task_2_Location={task.task_2_Location}
                  task_3_Description={task.task_3_Description}
                  task_3_PaymentAmount={task.task_3_PaymentAmount}
                  task_3_Location={task.task_3_Location}
                  task_4_Description={task.task_4_Description}
                  task_4_PaymentAmount={task.task_4_PaymentAmount}
                  task_4_Location={task.task_4_Location}
                  total={task.total}
                  timeDoneBy={task.timeDoneBy}
                  deliveryAddress={task.deliveryAddress}
                />
              ))}



            </div>
          </div>
        </div>
      </div>
    )
  }
}