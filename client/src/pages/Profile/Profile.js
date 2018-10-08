import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
// import "./style.css"
import bg7 from './images/bg7.jpg';
import API from "../../utils/API";

const profileStyle = {
  backgroundImage: "url(" + bg7 + ")"
};
class Profile extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: ""

  }

  componentDidMount() {
    API.getUser(this.props.match.params.id)
      .then(res => {
          console.log(res);
          this.setState({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email,
          password: res.data.password,
          address: res.data.address,
          city: res.data.city,
          state: res.data.state,
          zip: res.data.zip,
          phone: res.data.phone
          })
      }).catch(err => console.log(err))
      
  };



  render() {
    return (
      <div className="bg profile" style={profileStyle}>
        <div>

          <nav className="transparent z-depth-0">
            <div className="nav-wrapper">
              <p className="brand-logo white-text left hide-on-small-only" id="slogan"> Do More. Work Less.</p>
              <ul id="nav-mobile" class="right">
                <li><a href="/user" className=" white-text">User Portal</a></li>
                <li><a href="/runner" className=" white-text">Runner Portal</a></li>
                <li><a href="/" className="signoutBtn white-text">Sign Out</a></li>
              </ul>
            </div>
          </nav>

          <div className="section no-pad-bot" id="index-banner">
            <div className="container blur radius">

              <h1 className="header center orange-text">{this.state.firstName} {this.state.lastName}</h1>
              {/* <div className="row center">
              <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
            </div> */}
              <div className="row">
                <div className="col s3">
                </div>
                <div className="col s6">
                  <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src="http://i.cdn.turner.com/adultswim/big/video/way-ahead-of-the-reveal/rickandmorty_ep308_002_Way_Ahead_Of_The_Reveal.jpg" />
                    </div>
                    <div className="card-content">
                      <span className="card-title activator grey-text text-darken-4">    <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span><i className="material-icons right">more info</i></span>
                      {/* <p><a href="#">This is a link</a></p> */}
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
                      <p></p>
                      <p>{this.state.phone}</p>
                      <p>{this.state.email}</p>
                      <p>{this.state.city}</p>
                      <p>{this.state.state}</p>
                      <p>{this.state.zip}</p>

                    </div>
                  </div>
                </div>
                <div className="col s3">
                </div>

              </div>

              <div className="row">
                <div className="col s2">
                </div>
                <div className="col s8 center">
                  <a href="http://localhost:3000/runner" id="button1" className="btn-large waves-effect waves-light orange">Runner</a>
                  <a href="http://localhost:3000/user" id="button2" className="btn-large waves-effect waves-light orange">Request</a>
                </div>
                <div className="col s2">
                </div>
              </div>



            </div>
          </div>


          <div className="container blur radius">
            <div className="section">

              <div className="row center">
                <h2 className="center light-blue-text"><i className="material-icons">Top Reviews</i></h2>
              </div>


              <div className="row">
                <div className="col s12 m4">
                  <div className="icon-block">
                    {/* <h2 className="center light-blue-text"><i className="material-icons">flash_on</i></h2> */}
                    <h5 className="center">anonymous</h5>
                    <div className="center">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </div>

                    <p className="light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co</p>
                  </div>
                </div>

                <div className="col s12 m4">
                  <div className="icon-block">
                    {/* <h2 className="center light-blue-text"><i className="material-icons">Top Reviews</i></h2> */}
                    <h5 className="center">anonymous</h5>
                    <div className="center">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>

                    <p className="light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co</p>
                  </div>
                </div>

                <div className="col s12 m4">
                  <div className="icon-block">
                    {/* <h2 className="center light-blue-text"><i className="material-icons">settings</i></h2> */}
                    <h5 className="center">anonymous</h5>
                    <div className="center">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                    </div>

                    <p className="light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    )
  }
}


export default Profile;