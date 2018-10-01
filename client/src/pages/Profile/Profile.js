import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import "./style.css"

class Profile extends Component {

  render() {
    return (
      <div>

        <nav class="light-blue lighten-1" role="navigation">
          <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">DO 4 U</a>
            <ul class="right hide-on-med-and-down">
              <li><a href="#">Log Out</a></li>
            </ul>

            <ul id="nav-mobile" class="sidenav">
              <li><a href="#">Log Out</a></li>
            </ul>
            <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          </div>
        </nav>
        <div class="section no-pad-bot" id="index-banner">
          <div class="container">

            <h1 class="header center orange-text">Rick Sanchez</h1>
            {/* <div class="row center">
              <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
            </div> */}
            <div class="row">
              <div class="col s5">
                <div class="card">
                  <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="http://i.cdn.turner.com/adultswim/big/video/way-ahead-of-the-reveal/rickandmorty_ep308_002_Way_Ahead_Of_The_Reveal.jpg" />
                  </div>
                  <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">    <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span><i class="material-icons right">more info</i></span>
                    {/* <p><a href="#">This is a link</a></p> */}
                  </div>
                  <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">User Name<i class="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                  </div>
                </div>


              </div>
              <div class="col s8">
                <a href="http://localhost:3000/runner" id="button1" class="btn-large waves-effect waves-light orange">Runner</a>
                <a href="http://localhost:3000/user" id="button2" class="btn-large waves-effect waves-light orange">Request</a>
              </div>
            </div>


          </div>
        </div>


        <div class="container">
          <div class="section">

            <div class="row center">
              <h2 class="center light-blue-text"><i class="material-icons">Top Reviews</i></h2>
            </div>


            <div class="row">
              <div class="col s12 m4">
                <div class="icon-block">
                  {/* <h2 class="center light-blue-text"><i class="material-icons">flash_on</i></h2> */}
                  <h5 class="center">anonymous</h5>
                  <div class="center">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>

                  <p class="light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co</p>
                </div>
              </div>

              <div class="col s12 m4">
                <div class="icon-block">
                  {/* <h2 class="center light-blue-text"><i class="material-icons">Top Reviews</i></h2> */}
                  <h5 class="center">anonymous</h5>
                  <div class="center">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                  </div>

                  <p class="light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co</p>
                </div>
              </div>

              <div class="col s12 m4">
                <div class="icon-block">
                  {/* <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2> */}
                  <h5 class="center">anonymous</h5>
                  <div class="center">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                  </div>

                  <p class="light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co</p>
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