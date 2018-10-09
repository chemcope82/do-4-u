import React from 'react';
import bg12 from './images/bg12.jpeg';
import API from "../../utils/API";
import TaskCard from "../../components/TaskCard";

const RunnerListStyle = {
  backgroundImage: "url(" + bg12 + ")"
};

const RunnerListContainerStyle = {
  height: 80 + '%',
  overflow: 'auto'
}

export default class RunnerLists extends React.Component {
  state = {
    taskListArray: [],
    id: "",
    firstName: "",
    lastName: "",
    phone: ""
  }

  componentDidMount() {

    this.loadTasks()

    API.getUser(this.props.match.params.id)
      .then(res => {
        // console.log(res);
        this.setState({
          id: res.data._id,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          phone: res.data.phone
        })
      }).catch(err => console.log(err))



  };

  loadTasks = () => {

    API.getTasks()
      .then(res =>
        this.setState({ taskListArray: res.data })
      )
      .catch(err => console.log(err));

  };

  render() {
    return (
      // <div className="bg" style={RunnerListStyle}>
      //   <div className="row">
      //     <div className="col s12">
      //       <nav className="transparent z-depth-0">
      //         <div className="nav-wrapper">
      //           <p className="brand-logo left deep-orange-text darken-10-text hide-on-small-only" id="slogan"> Do More. Work Less.</p>
      //           <ul id="nav-mobile" className="right">
      //           <li><a href="/runner" className="deep-orange-text darken-10-text">Home</a></li>
      //         <li><a href="/" className="signoutBtn deep-orange-text darken-10-text">Sign Out</a></li>
      //           </ul>
      //         </div>
      //       </nav>
      //     </div>
      //   </div>

      //   <p className="center deep-orange-text darken-10-text pageTitle">Your Runner Lists</p>

      //   <div className="row runner" style={RunnerListContainerStyle}>
      //     <div className="">
      //       <div className="col s12">
      //         <div className="col m6 s12">
      //           <ul className="collection with-header blur radius userLists">
      //             <li className="collection-header">
      //               <h5>Due on {this.state.dateDoneBy} at {this.state.timeDoneBy}</h5>
      //               <h6>List Status: {this.state.listStatus}</h6>
      //               <h6>List Total: ${this.state.total}</h6>
      //               <h6>Customer: {this.state.customer} | {this.state.customer_phone}</h6>
      //               <h6>Delivery Location: {this.state.deliveryAddress}</h6>
      //             </li>
      //             <li className="collection-item">
      //               <div>
      //                 <a href="#!" class="secondary-content"><i class="material-icons">Mark Complete</i></a>
      //                 Task 1: {this.state.task_1_Description}
      //                 <br />
      //                 Location: {this.state.locationOne}
      //                 <br />
      //                 Price: {this.state.task_1_PaymentAmount}
      //                 <br />
      //                 Status: {this.state.task_1_Status}
      //                 <br />
      //               </div>
      //             </li>
      //             <li className="collection-item">
      //               <div>
      //                 <a href="#!" class="secondary-content"><i class="material-icons">Mark Complete</i></a>
      //                 Task 2: {this.state.task_2_Description}
      //                 <br />
      //                 Location: {this.state.locationTwo}
      //                 <br />
      //                 Price: {this.state.task_2_PaymentAmount}
      //                 <br />
      //                 Status: {this.state.task_2_Status}
      //                 <br />
      //               </div>
      //             </li>
      //             <li className="collection-item">
      //               <div>
      //                 <a href="#!" class="secondary-content"><i class="material-icons">Mark Complete</i></a>
      //                 Task 3: {this.state.task_3_Description}
      //                 <br />
      //                 Location: {this.state.locationThree}
      //                 <br />
      //                 Price: {this.state.task_3_PaymentAmount}
      //                 <br />
      //                 Status: {this.state.task_3_Status}
      //                 <br />
      //               </div>
      //             </li>
      //             <li className="collection-item">
      //               <div>
      //                 <a href="#!" class="secondary-content"><i class="material-icons">Mark Complete</i></a>
      //                 Task 4: {this.state.task_4_Description}
      //                 <br />
      //                 Location: {this.state.locationFour}
      //                 <br />
      //                 Price: {this.state.task_4_PaymentAmount}
      //                 <br />
      //                 Status: {this.state.task_4_Status}
      //                 <br />
      //               </div>
      //             </li>
      //           </ul>
      //         </div>


      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div className="bg" style={RunnerListStyle}>

        <nav className="transparent z-depth-0">
          <div className="nav-wrapper">
            <p className="brand-logo left deep-orange-text darken-10-text hide-on-small-only" id="slogan"> Do More. Work Less.</p>
            <ul id="nav-mobile" className="right">
              <li><a href={`/profile/${this.state.id}`} className="deep-orange-text darken-10-text">Home</a></li>
              <li><a href="/" className="signoutBtn deep-orange-text darken-10-text">Sign Out</a></li>
            </ul>
          </div>
        </nav>

         <p className="center deep-orange-text darken-10-text pageTitle">Your Runner Lists</p>

        <div className="row runner" style={RunnerListContainerStyle}>
          <div className="">
            <div className="col s12">



              {/* rendering onto the page, feel free to skip over */}

              {this.state.taskListArray.map(task => {
                // this.populatePage(task)
                console.log(task.user[0]);
                if (this.props.match.params.id === task.user[0]) {


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
                      task_1_Description={`Task - ${task.task_1_Description} - IN PROGRESS`}
                      task_1_PaymentAmount={""}
                      task_1_Location={""}
                      task_2_Description={`Task - ${task.task_2_Description} - IN PROGRESS`}
                      task_2_PaymentAmount={""}
                      task_2_Location={""}
                      task_3_Description={`Task - ${task.task_3_Description} - IN PROGRESS`}
                      task_3_PaymentAmount={""}
                      task_3_Location={""}
                      task_4_Description={`Task - ${task.task_4_Description} - IN PROGRESS`}
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
                      month={task.month}
                      day={task.day}
                      year={task.year}
                      hour={task.hour}
                      minute={task.minute}
                      firstName={this.state.firstName}
                      lastName={this.state.lastName}
                      phone={this.state.phone}
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
                      month={task.month}
                      day={task.day}
                      year={task.year}
                      hour={task.hour}
                      minute={task.minute}
                      firstName={this.state.firstName}
                      lastName={this.state.lastName}
                      phone={this.state.phone}
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
                      task_1_Description={`Task - ${task.task_1_Description} - IN PROGRESS`}
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
                      month={task.month}
                      day={task.day}
                      year={task.year}
                      hour={task.hour}
                      minute={task.minute}
                      firstName={this.state.firstName}
                      lastName={this.state.lastName}
                      phone={this.state.phone}
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
                      task_1_Description={`Task - ${task.task_1_Description} - IN PROGRESS`}
                      task_1_PaymentAmount={""}
                      task_1_Location={""}
                      task_2_Description={`Task - ${task.task_2_Description} - IN PROGRESS`}
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
                      month={task.month}
                      day={task.day}
                      year={task.year}
                      hour={task.hour}
                      minute={task.minute}
                      firstName={this.state.firstName}
                      lastName={this.state.lastName}
                      phone={this.state.phone}
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
                      task_1_Description={`Task - ${task.task_1_Description} - IN PROGRESS`}
                      task_1_PaymentAmount={""}
                      task_1_Location={""}
                      task_2_Description={""}
                      task_2_PaymentAmount={`Task - ${task.task_2_Description} - IN PROGRESS`}
                      task_2_Location={""}
                      task_3_Description={""}
                      task_3_PaymentAmount={`Task - ${task.task_3_Description} - IN PROGRESS`}
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
                      month={task.month}
                      day={task.day}
                      year={task.year}
                      hour={task.hour}
                      minute={task.minute}
                      firstName={this.state.firstName}
                      lastName={this.state.lastName}
                      phone={this.state.phone}
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
                      task_1_Description={`Task - ${task.task_1_Description} - IN PROGRESS`}
                      task_1_PaymentAmount={""}
                      task_1_Location={""}
                      task_2_Description={`Task 2: ${task.task_2_Description}`}
                      task_2_PaymentAmount={`Price: ${task.task_2_PaymentAmount}`}
                      task_2_Location={`Location: ${task.task_2_Location}`}
                      task_3_Description={`Task - ${task.task_3_Description} - IN PROGRESS`}
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
                      month={task.month}
                      day={task.day}
                      year={task.year}
                      hour={task.hour}
                      minute={task.minute}
                      firstName={this.state.firstName}
                      lastName={this.state.lastName}
                      phone={this.state.phone}
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
                      task_1_Description={`Task - ${task.task_1_Description} - IN PROGRESS`}
                      task_1_PaymentAmount={""}
                      task_1_Location={""}
                      task_2_Description={`Task 2: ${task.task_2_Description}`}
                      task_2_PaymentAmount={`Price: ${task.task_2_PaymentAmount}`}
                      task_2_Location={`Location: ${task.task_2_Location}`}
                      task_3_Description={`Task 3: ${task.task_3_Description}`}
                      task_3_PaymentAmount={`Price: ${task.task_3_PaymentAmount}`}
                      task_3_Location={`Location: ${task.task_3_Location}`}
                      task_4_Description={`Task - ${task.task_4_Description} - IN PROGRESS`}
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
                      month={task.month}
                      day={task.day}
                      year={task.year}
                      hour={task.hour}
                      minute={task.minute}
                      firstName={this.state.firstName}
                      lastName={this.state.lastName}
                      phone={this.state.phone}
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
                      task_2_Description={`Task - ${task.task_2_Description} - IN PROGRESS`}
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
                      month={task.month}
                      day={task.day}
                      year={task.year}
                      hour={task.hour}
                      minute={task.minute}
                      firstName={this.state.firstName}
                      lastName={this.state.lastName}
                      phone={this.state.phone}
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
                      task_2_Description={`Task - ${task.task_2_Description} - IN PROGRESS`}
                      task_2_PaymentAmount={""}
                      task_2_Location={""}
                      task_3_Description={`Task - ${task.task_3_Description} - IN PROGRESS`}
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
                      month={task.month}
                      day={task.day}
                      year={task.year}
                      hour={task.hour}
                      minute={task.minute}
                      firstName={this.state.firstName}
                      lastName={this.state.lastName}
                      phone={this.state.phone}
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
                      task_2_Description={`Task - ${task.task_2_Description} - IN PROGRESS`}
                      task_2_PaymentAmount={""}
                      task_2_Location={""}
                      task_3_Description={`Task 3: ${task.task_3_Description}`}
                      task_3_PaymentAmount={`Price: ${task.task_3_PaymentAmount}`}
                      task_3_Location={`Location: ${task.task_3_Location}`}
                      task_4_Description={`Task - ${task.task_4_Description} - IN PROGRESS`}
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
                      month={task.month}
                      day={task.day}
                      year={task.year}
                      hour={task.hour}
                      minute={task.minute}
                      firstName={this.state.firstName}
                      lastName={this.state.lastName}
                      phone={this.state.phone}
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
                      task_2_Description={`Task - ${task.task_2_Description} - IN PROGRESS`}
                      task_2_PaymentAmount={""}
                      task_2_Location={""}
                      task_3_Description={`Task - ${task.task_3_Description} - IN PROGRESS`}
                      task_3_PaymentAmount={""}
                      task_3_Location={""}
                      task_4_Description={`Task - ${task.task_4_Description} - IN PROGRESS`}
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
                      month={task.month}
                      day={task.day}
                      year={task.year}
                      hour={task.hour}
                      minute={task.minute}
                      firstName={this.state.firstName}
                      lastName={this.state.lastName}
                      phone={this.state.phone}
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
                      task_3_Description={`Task - ${task.task_3_Description} - IN PROGRESS`}
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
                      month={task.month}
                      day={task.day}
                      year={task.year}
                      hour={task.hour}
                      minute={task.minute}
                      firstName={this.state.firstName}
                      lastName={this.state.lastName}
                      phone={this.state.phone}
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
                      task_3_Description={`Task - ${task.task_3_Description} - IN PROGRESS`}
                      task_3_PaymentAmount={""}
                      task_3_Location={""}
                      task_4_Description={`Task - ${task.task_4_Description} - IN PROGRESS`}
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
                      month={task.month}
                      day={task.day}
                      year={task.year}
                      hour={task.hour}
                      minute={task.minute}
                      firstName={this.state.firstName}
                      lastName={this.state.lastName}
                      phone={this.state.phone}
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
                      task_4_Description={`Task - ${task.task_4_Description} - IN PROGRESS`}
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
                      month={task.month}
                      day={task.day}
                      year={task.year}
                      hour={task.hour}
                      minute={task.minute}
                      firstName={this.state.firstName}
                      lastName={this.state.lastName}
                      phone={this.state.phone}
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
                      task_1_Description={`Task - ${task.task_1_Description} - IN PROGRESS`}
                      task_1_PaymentAmount={""}
                      task_1_Location={""}
                      task_2_Description={`Task - ${task.task_2_Description} - IN PROGRESS`}
                      task_2_PaymentAmount={""}
                      task_2_Location={""}
                      task_3_Description={`Task 3: ${task.task_3_Description}`}
                      task_3_PaymentAmount={`Price: ${task.task_3_PaymentAmount}`}
                      task_3_Location={`Location: ${task.task_3_Location}`}
                      task_4_Description={`Task - ${task.task_4_Description} - IN PROGRESS`}
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
                      month={task.month}
                      day={task.day}
                      year={task.year}
                      hour={task.hour}
                      minute={task.minute}
                      firstName={this.state.firstName}
                      lastName={this.state.lastName}
                      phone={this.state.phone}
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
                      task_1_Description={`Task - ${task.task_1_Description} - IN PROGRESS`}
                      task_1_PaymentAmount={""}
                      task_1_Location={""}
                      task_2_Description={`Task 2: ${task.task_2_Description}`}
                      task_2_PaymentAmount={`Price: ${task.task_2_PaymentAmount}`}
                      task_2_Location={`Location: ${task.task_2_Location}`}
                      task_3_Description={`Task - ${task.task_3_Description} - IN PROGRESS`}
                      task_3_PaymentAmount={""}
                      task_3_Location={""}
                      task_4_Description={`Task - ${task.task_4_Description} - IN PROGRESS`}
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
                      month={task.month}
                      day={task.day}
                      year={task.year}
                      hour={task.hour}
                      minute={task.minute}
                      firstName={this.state.firstName}
                      lastName={this.state.lastName}
                      phone={this.state.phone}
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
