import React from 'react';
import bg6 from './images/bg6.jpg';
import API from "../../utils/API";
import TaskCard from "../../components/TaskCard";

const UserListStyle = {
  backgroundImage: "url(" + bg6 + ")"
};

const UserListContainerStyle = {
  height: 80 + '%'
}

// const runnerStyle = {
//   backgroundImage: "url(" + bg8 + ")"
// };


// const runnerContainerStyle = {
//   height: 80 + '%'
// }

export default class UserList extends React.Component {

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
  // state = {
  //   firstName: '',
  //   lastName: '',
  //   phone: '',

  //   task_1_Description: '',
  //   task_1_PaymentAmount: '',
  //   task_1_Location: '',
  //   task_1_Runner: '',
  //   task_1_Runner_Phone: '',

  //   task_2_Description: '',
  //   task_2_PaymentAmount: '',
  //   task_2_Location: '',
  //   task_2_Runner: '',
  //   task_2_Runner_Phone: '',

  //   task_3_Description: '',
  //   task_3_PaymentAmount: '',
  //   task_3_Location: '',
  //   task_3_Runner: '',
  //   task_3_Runner_Phone: '',

  //   task_4_Description: '',
  //   task_4_PaymentAmount: '',
  //   task_4_Location: '',
  //   task_4_Runner: '',
  //   task_4_Runner_Phone: '',

  //   dateDoneBy: '',
  //   timeDoneBy: '',

  //   deliveryAddress: '',
  //   ListStatus: '',


  // }

  // componentDidMount() {
  //   API.getTasks()
  //     .then(function(res) {
  //       for (var i = 0; i < res.data.length; i++){
  //         this.setState({
  //           task_1_Description: res.data[0].task_1_Description
  //         })
  //       }
  //     })
  //     .catch(err => console.log(err));


  //     console.log("working");

  //     console.log(this.state.task_1_Description);
  // };


 
  
  render() {
    // return (
      
    //   <div className="bg" style={UserListStyle}>

    //     <nav className="transparent z-depth-0">
    //       <div className="nav-wrapper">
    //         <p className="brand-logo blue-text text-darken-2" id="slogan"> Do More. Work Less.</p>
    //         <ul id="nav-mobile" className="right hide-on-med-and-down">
    //           <li><a href="/user" className="blue-text text-darken-2">Create List</a></li>
    //           <li><a href="/" className="blue-text text-darken-2" id="signout">Sign Out</a></li>
    //         </ul>
    //       </div>
    //     </nav>

    //     <p className="center blue-text text-darken-2 pageTitle">Your Lists</p>
        
    //     <div className="row runner" style={UserListContainerStyle}>
    //       <div className="">
    //         <div className="col s12">


    //           <div className="col s4">
    //             <ul className="collection with-header blur radius userLists">
    //               <li className="collection-header">
    //                 <h5>Due on {this.state.dateDoneBy} at {this.state.timeDoneBy}</h5>
    //                 <h6>List Status {this.state.listStatus}</h6>
    //                 <h6>List Total ${this.state.total}</h6>
    //                 <h6>Delivery Location: {this.state.deliveryAddress}</h6>
    //               </li>
    //               <li className="collection-item">
    //                 <div>
    //                   Task 1: {this.state.task_1_Description}
    //                   <br />
    //                   Location: {this.state.locationOne}
    //                   <br />
    //                   Price: {this.state.task_1_PaymentAmount}
    //                   <br />
    //                   Status: {this.state.task_1_Status}
    //                   <br />
    //                   Runner: {this.state.task_1_Runner} | {this.state.task_1_Runner.Phone}
    //                 </div>
    //               </li>
    //               <li className="collection-item">
    //                 <div>
    //                   Task 2: {this.state.task_2_Description}
    //                   <br />
    //                   Location: {this.state.locationTwo}
    //                   <br />
    //                   Price: {this.state.task_2_PaymentAmount}
    //                   <br />
    //                   Status: {this.state.task_2_Status}
    //                   <br />
    //                   Runner: {this.state.task_2_Runner} | {this.state.task_2_Runner.Phone}
    //                 </div>
    //               </li>
    //               <li className="collection-item">
    //                 <div>
    //                   Task 3: {this.state.task_3_Description}
    //                   <br />
    //                   Location: {this.state.locationThree}
    //                   <br />
    //                   Price: {this.state.task_3_PaymentAmount}
    //                   <br />
    //                   Status: {this.state.task_3_Status}
    //                   <br />
    //                   Runner: {this.state.task_3_Runner} | {this.state.task_3_Runner.Phone}
    //                 </div>
    //               </li>
    //               <li className="collection-item">
    //                 <div>
    //                   Task 4: {this.state.task_4_Description}
    //                   <br />
    //                   Location: {this.state.locationFour}
    //                   <br />
    //                   Price: {this.state.task_4_PaymentAmount}
    //                   <br />
    //                   Status: {this.state.task_4_Status}
    //                   <br />
    //                   Runner: {this.state.task_4_Runner} | {this.state.task_4_Runner.Phone}
    //                 </div>
    //               </li>
    //             </ul>
    //           </div>


    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // )

    return (

      <div className="bg" style={UserListStyle}>

        <nav className="transparent z-depth-0">
          <div className="nav-wrapper">
            <p className="brand-logo white-text" id="slogan"> Do More. Work Less.</p>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="/" className=" white-text">Log In</a></li>
            </ul>
          </div>
        </nav>

        <p className="center white-text" id="createList">Available Lists</p>

        <div className="row runner" style={UserListContainerStyle}>
          <div className="">
            <div className="col s12">



              {/* rendering onto the page, feel free to skip over */}

              {this.state.taskListArray.map(task => {
                // this.populatePage(task)
                console.log(task.user[0]);
                if (this.props.match.params.id === task.user[0]){
                  
               
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
                    task_1_Description={"IN PROGRESS"}
                    task_1_PaymentAmount={""}
                    task_1_Location={""}
                    task_2_Description={"IN PROGRESS"}
                    task_2_PaymentAmount={""}
                    task_2_Location={""}
                    task_3_Description={"IN PROGRESS"}
                    task_3_PaymentAmount={""}
                    task_3_Location={""}
                    task_4_Description={"IN PROGRESS"}
                    task_4_PaymentAmount={""}
                    task_4_Location={""}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
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
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
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
                    task_1_Description={"IN PROGRESS"}
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
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
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
                    task_1_Description={"IN PROGRESS"}
                    task_1_PaymentAmount={""}
                    task_1_Location={""}
                    task_2_Description={"IN PROGRESS"}
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
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
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
                    task_1_Description={"IN PROGRESS"}
                    task_1_PaymentAmount={""}
                    task_1_Location={""}
                    task_2_Description={""}
                    task_2_PaymentAmount={"IN PROGRESS"}
                    task_2_Location={""}
                    task_3_Description={""}
                    task_3_PaymentAmount={"IN PROGRESS"}
                    task_3_Location={""}
                    task_4_Description={""}
                    task_4_PaymentAmount={`Price: ${task.task_4_PaymentAmount}`}
                    task_4_Location={`Location: ${task.task_4_Location}`}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
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
                    task_1_Description={"IN PROGRESS"}
                    task_1_PaymentAmount={""}
                    task_1_Location={""}
                    task_2_Description={`Task 2: ${task.task_2_Description}`}
                    task_2_PaymentAmount={`Price: ${task.task_2_PaymentAmount}`}
                    task_2_Location={`Location: ${task.task_2_Location}`}
                    task_3_Description={"IN PROGRESS"}
                    task_3_PaymentAmount={""}
                    task_3_Location={""}
                    task_4_Description={`Task 4: ${task.task_4_Description}`}
                    task_4_PaymentAmount={`Price: ${task.task_4_PaymentAmount}`}
                    task_4_Location={`Location: ${task.task_4_Location}`}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
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
                    task_1_Description={"IN PROGRESS"}
                    task_1_PaymentAmount={""}
                    task_1_Location={""}
                    task_2_Description={`Task 2: ${task.task_2_Description}`}
                    task_2_PaymentAmount={`Price: ${task.task_2_PaymentAmount}`}
                    task_2_Location={`Location: ${task.task_2_Location}`}
                    task_3_Description={`Task 3: ${task.task_3_Description}`}
                    task_3_PaymentAmount={`Price: ${task.task_3_PaymentAmount}`}
                    task_3_Location={`Location: ${task.task_3_Location}`}
                    task_4_Description={"IN PROGRESS"}
                    task_4_PaymentAmount={""}
                    task_4_Location={""}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
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
                    task_2_Description={"IN PROGRESS"}
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
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
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
                    task_2_Description={"IN PROGRESS"}
                    task_2_PaymentAmount={""}
                    task_2_Location={""}
                    task_3_Description={"IN PROGRESS"}
                    task_3_PaymentAmount={""}
                    task_3_Location={""}
                    task_4_Description={`Task 4: ${task.task_4_Description}`}
                    task_4_PaymentAmount={`Price: ${task.task_4_PaymentAmount}`}
                    task_4_Location={`Location: ${task.task_4_Location}`}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
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
                    task_2_Description={"IN PROGRESS"}
                    task_2_PaymentAmount={""}
                    task_2_Location={""}
                    task_3_Description={`Task 3: ${task.task_3_Description}`}
                    task_3_PaymentAmount={`Price: ${task.task_3_PaymentAmount}`}
                    task_3_Location={`Location: ${task.task_3_Location}`}
                    task_4_Description={"IN PROGRESS"}
                    task_4_PaymentAmount={""}
                    task_4_Location={""}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
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
                    task_2_Description={"IN PROGRESS"}
                    task_2_PaymentAmount={""}
                    task_2_Location={""}
                    task_3_Description={"IN PROGRESS"}
                    task_3_PaymentAmount={""}
                    task_3_Location={""}
                    task_4_Description={"IN PROGRESS"}
                    task_4_PaymentAmount={""}
                    task_4_Location={""}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
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
                    task_3_Description={"IN PROGRESS"}
                    task_3_PaymentAmount={""}
                    task_3_Location={""}
                    task_4_Description={`Task 4: ${task.task_4_Description}`}
                    task_4_PaymentAmount={`Price: ${task.task_4_PaymentAmount}`}
                    task_4_Location={`Location: ${task.task_4_Location}`}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
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
                    task_3_Description={"IN PROGRESS"}
                    task_3_PaymentAmount={""}
                    task_3_Location={""}
                    task_4_Description={"IN PROGRESS"}
                    task_4_PaymentAmount={""}
                    task_4_Location={""}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
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
                    task_4_Description={"IN PROGRESS"}
                    task_4_PaymentAmount={""}
                    task_4_Location={""}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
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
                    task_1_Description={"IN PROGRESS"}
                    task_1_PaymentAmount={""}
                    task_1_Location={""}
                    task_2_Description={"IN PROGRESS"}
                    task_2_PaymentAmount={""}
                    task_2_Location={""}
                    task_3_Description={`Task 3: ${task.task_3_Description}`}
                    task_3_PaymentAmount={`Price: ${task.task_3_PaymentAmount}`}
                    task_3_Location={`Location: ${task.task_3_Location}`}
                    task_4_Description={"IN PROGRESS"}
                    task_4_PaymentAmount={""}
                    task_4_Location={""}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
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
                    task_1_Description={"IN PROGRESS"}
                    task_1_PaymentAmount={""}
                    task_1_Location={""}
                    task_2_Description={`Task 2: ${task.task_2_Description}`}
                    task_2_PaymentAmount={`Price: ${task.task_2_PaymentAmount}`}
                    task_2_Location={`Location: ${task.task_2_Location}`}
                    task_3_Description={"IN PROGRESS"}
                    task_3_PaymentAmount={""}
                    task_3_Location={""}
                    task_4_Description={"IN PROGRESS"}
                    task_4_PaymentAmount={""}
                    task_4_Location={""}
                    total={task.total}
                    timeDoneBy={task.timeDoneBy}
                    deliveryAddress={task.deliveryAddress}
                    ClaimAllTasks={""}
                    ClaimOneTask={""}
                    ClaimTwoTask={""}
                    ClaimThreeTask={""}
                    ClaimFourTask={""}
                  />
                }
              }
              })}
              

            </div>
          </div>
        </div>
      </div>
    )
  }
}
