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

    API.updateTask ({
      _id: id,
      task_1_Description: this.state.task_1_Description,
      task_1_Location: this.state.task_1_Location,
      task_1_PaymentAmount: this.state.task_1_PaymentAmount,
      task_1_Done: this.state.task_1_Description,
      task_1_Runner_Claimed: false,
      task_2_Description: this.state.task_2_Description,
      task_2_Location: this.state.task_2_Location,
      task_2_PaymentAmount: this.state.task_2_PaymentAmount,
      task_2_Done: this.state.task_2_Done,
      task_2_Runner_Claimed: false,
      task_3_Description: this.state.task_3_Description,
      task_3_Location: this.state.task_3_Location,
      task_3_PaymentAmount: this.state.task_3_PaymentAmount,
      task_3_Done: this.state.task_3_Done,
      task_3_Runner_Claimed: false,
      task_4_Description: this.state.task_4_Description,
      task_4_Location: this.state.task_4_Location,
      task_4_PaymentAmount: this.state.task_4_PaymentAmount,
      task_4_Done: this.state.task_4_Done,
      task_4_Runner_Claimed: false,
      deliveryAddress: this.state.deliveryAddress,
      dateDoneBy: this.state.dateDoneBy,
      timeDoneBy: this.state.timeDoneBy,
      total: this.state.total


    }).then(res => this.loadTasks())
      .catch(err => console.log(err));



    console.log(this.state.taskListArray)



  };

  claimOne = id => {
    console.log(id)

    API.updateTask ({
      _id: id,
      task_1_Description: this.state.task_1_Description,
      task_1_Location: this.state.task_1_Location,
      task_1_PaymentAmount: this.state.task_1_PaymentAmount,
      task_1_Done: this.state.task_1_Description,
      task_1_Runner_Claimed: true,
      task_2_Description: this.state.task_2_Description,
      task_2_Location: this.state.task_2_Location,
      task_2_PaymentAmount: this.state.task_2_PaymentAmount,
      task_2_Done: this.state.task_2_Done,
      task_2_Runner_Claimed: this.state.task_2_Runner_Claimed,
      task_3_Description: this.state.task_3_Description,
      task_3_Location: this.state.task_3_Location,
      task_3_PaymentAmount: this.state.task_3_PaymentAmount,
      task_3_Done: this.state.task_3_Done,
      task_3_Runner_Claimed: this.state.task_3_Runner_Claimed,
      task_4_Description: this.state.task_4_Description,
      task_4_Location: this.state.task_4_Location,
      task_4_PaymentAmount: this.state.task_4_PaymentAmount,
      task_4_Done: this.state.task_4_Done,
      task_4_Runner_Claimed: this.state.task_4_Runner_Claimed,
      deliveryAddress: this.state.deliveryAddress,
      dateDoneBy: this.state.dateDoneBy,
      timeDoneBy: this.state.timeDoneBy,
      total: this.state.total


    }).then(res => this.loadTasks())
      .catch(err => console.log(err));

      console.log(this.state.taskListArray)

  }

  claimTwo = id => {

    API.updateTask ({
      _id: id,
      task_1_Description: this.state.task_1_Description,
      task_1_Location: this.state.task_1_Location,
      task_1_PaymentAmount: this.state.task_1_PaymentAmount,
      task_1_Done: this.state.task_1_Description,
      task_1_Runner_Claimed: this.state.task_1_Runner_Claimed,
      task_2_Description: this.state.task_2_Description,
      task_2_Location: this.state.task_2_Location,
      task_2_PaymentAmount: this.state.task_2_PaymentAmount,
      task_2_Done: this.state.task_2_Done,
      task_2_Runner_Claimed: true,
      task_3_Description: this.state.task_3_Description,
      task_3_Location: this.state.task_3_Location,
      task_3_PaymentAmount: this.state.task_3_PaymentAmount,
      task_3_Done: this.state.task_3_Done,
      task_3_Runner_Claimed: this.state.task_3_Runner_Claimed,
      task_4_Description: this.state.task_4_Description,
      task_4_Location: this.state.task_4_Location,
      task_4_PaymentAmount: this.state.task_4_PaymentAmount,
      task_4_Done: this.state.task_4_Done,
      task_4_Runner_Claimed: this.state.task_4_Runner_Claimed,
      deliveryAddress: this.state.deliveryAddress,
      dateDoneBy: this.state.dateDoneBy,
      timeDoneBy: this.state.timeDoneBy,
      total: this.state.total


    }).then(res => this.loadTasks())
      .catch(err => console.log(err));
    
  }

  claimThree = id => {

    API.updateTask ({
      _id: id,
      task_1_Description: this.state.task_1_Description,
      task_1_Location: this.state.task_1_Location,
      task_1_PaymentAmount: this.state.task_1_PaymentAmount,
      task_1_Done: this.state.task_1_Description,
      task_1_Runner_Claimed: this.state.task_1_Runner_Claimed,
      task_2_Description: this.state.task_2_Description,
      task_2_Location: this.state.task_2_Location,
      task_2_PaymentAmount: this.state.task_2_PaymentAmount,
      task_2_Done: this.state.task_2_Done,
      task_2_Runner_Claimed: this.state.task_2_Runner_Claimed,
      task_3_Description: this.state.task_3_Description,
      task_3_Location: this.state.task_3_Location,
      task_3_PaymentAmount: this.state.task_3_PaymentAmount,
      task_3_Done: this.state.task_3_Done,
      task_3_Runner_Claimed: true,
      task_4_Description: this.state.task_4_Description,
      task_4_Location: this.state.task_4_Location,
      task_4_PaymentAmount: this.state.task_4_PaymentAmount,
      task_4_Done: this.state.task_4_Done,
      task_4_Runner_Claimed: this.state.task_4_Runner_Claimed,
      deliveryAddress: this.state.deliveryAddress,
      dateDoneBy: this.state.dateDoneBy,
      timeDoneBy: this.state.timeDoneBy,
      total: this.state.total


    }).then(res => this.loadTasks())
      .catch(err => console.log(err));
    
  }

  claimFour = id => {

    API.updateTask ({
      _id: id,
      task_1_Description: this.state.task_1_Description,
      task_1_Location: this.state.task_1_Location,
      task_1_PaymentAmount: this.state.task_1_PaymentAmount,
      task_1_Done: this.state.task_1_Description,
      task_1_Runner_Claimed: this.state.task_1_Runner_Claimed,
      task_2_Description: this.state.task_2_Description,
      task_2_Location: this.state.task_2_Location,
      task_2_PaymentAmount: this.state.task_2_PaymentAmount,
      task_2_Done: this.state.task_2_Done,
      task_2_Runner_Claimed: this.state.task_2_Runner_Claimed,
      task_3_Description: this.state.task_3_Description,
      task_3_Location: this.state.task_3_Location,
      task_3_PaymentAmount: this.state.task_3_PaymentAmount,
      task_3_Done: this.state.task_3_Done,
      task_3_Runner_Claimed: this.state.task_3_Runner_Claimed,
      task_4_Description: this.state.task_4_Description,
      task_4_Location: this.state.task_4_Location,
      task_4_PaymentAmount: this.state.task_4_PaymentAmount,
      task_4_Done: this.state.task_4_Done,
      task_4_Runner_Claimed: true,
      deliveryAddress: this.state.deliveryAddress,
      dateDoneBy: this.state.dateDoneBy,
      timeDoneBy: this.state.timeDoneBy,
      total: this.state.total


    }).then(res => this.loadTasks())
      .catch(err => console.log(err));
    
  }



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