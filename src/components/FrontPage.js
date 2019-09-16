import React, { Component } from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./Styles/frontPage.css";
import axios from "axios";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBModalFooter
} from "mdbreact";

class FrontPage extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      passVal: "",
      confirmVal: "",
      login_email: "",
      login_password: "",
      PhoneNum: ""
    };
  }

  onChangeLoginEmail(event) {
    this.setState({
      login_email: event.target.value
    });
  }
  onChangeLoginPass(event) {
    this.setState({
      login_password: event.target.value
    });
  }

  onChangeName(event) {
    this.setState({
      name: event.target.value
    });
  }
  onChangeEmail(event) {
    this.setState({
      email: event.target.value
    });
  }
  onChangePass(event) {
    this.setState({
      passVal: event.target.value
    });
  }
  onChangePhoneNum(event) {
    this.setState({
      PhoneNum: event.target.value
    });
  }
  onChangeConfirm(event) {
    this.setState({
      confirmVal: event.target.value
    });
  }
  Confirmation() {
    if (!this.state.passVal || !this.state.confirmVal) {
      alert("Password field empty");
    } else if (this.state.passVal !== this.state.confirmVal) {
      alert("Password mismatch");
    } else {
      alert("Confirmed");
      const newUser = {
        username: this.state.name,
        Email: this.state.email,
        Password: this.state.passVal,
        Mobile: this.state.PhoneNum
      };
      console.log(newUser);
      axios
        .post(
          " http://Api-env.pjxxtmeicp.us-east-2.elasticbeanstalk.com/users/add",
          newUser
        )
        .then(res => console.log(res.data));
      //window.location = "/";
    }
  }
  handleFlipping = id => () => {
    this.flippy.toggle();
  };
  render() {
    return (
      <Flippy
        flipOnHover={false}
        flipOnClick={false}
        flipDirection="horizontal"
        ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
      >
        <FrontSide>
          <MDBContainer>
            <MDBRow>
              <MDBCol className="mt-4 col-sm-12 col-md-6 offset-md-6 col-lg-4 offset-lg-8 ">
                <MDBCard>
                  <MDBCardBody className="mx-4">
                    <div className="text-center">
                      <h3 className="dark-grey-text mb-5">
                        <strong>Phonography</strong>
                      </h3>
                    </div>
                    <hr></hr>
                    <MDBInput
                      //required="true"
                      label="Name"
                      onChange={this.onChangeName.bind(this)}
                      group
                      type="text"
                      //  validate
                      //  error="wrong"
                      //  success="right"
                    />
                    <MDBInput
                      //  required="true"
                      label="Email"
                      onChange={this.onChangeEmail.bind(this)}
                      group
                      type="Text"
                      //  validate
                      //  error="wrong"
                      // success="right"
                    />
                    <MDBInput
                      label="Your password"
                      onChange={this.onChangePass.bind(this)}
                      group
                      type="password"
                      validate
                      containerClass="mb-0"
                    />
                    <MDBInput
                      label="Confirm Password"
                      onChange={this.onChangeConfirm.bind(this)}
                      group
                      type="password"
                      //  validate
                      containerClass="mb-0"
                    />
                    <MDBInput
                      label="Phone Number"
                      onChange={this.onChangePhoneNum.bind(this)}
                      group
                      type="text"
                      //  validate
                      containerClass="mb-0"
                    />
                    <div className="text-center mb-3 ">
                      <MDBBtn
                        id="SignUp"
                        color="dark"
                        type="submit"
                        onClick={this.Confirmation.bind(this)}
                        className="btn-block z-depth-1a"
                      >
                        Sign up
                      </MDBBtn>
                      <div className="text-center mb-3 rounded">
                        <a
                          href="#!"
                          className="blue-text ml-1"
                          onClick={this.handleFlipping(1)}
                        >
                          Other signup options
                        </a>
                      </div>
                    </div>
                  </MDBCardBody>
                  <MDBModalFooter className="mx-5 pt-3 mb-1"></MDBModalFooter>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </FrontSide>

        <BackSide>
          <MDBContainer>
            <MDBRow>
              <MDBCol className="mt-4 col-sm-12 col-md-6 offset-md-6 col-lg-4 offset-lg-8 ">
                <MDBCard>
                  <MDBCardBody className="mx-4">
                    <div className="text-center">
                      <h3 className="dark-grey-text mb-5">
                        <strong>Phonography</strong>
                      </h3>
                      <p>sign up to see photos that you might like!</p>
                      <MDBBtn
                        id="Google"
                        type="button"
                        color="primary"
                        className="btn-block z-depth-1a mb-3 "
                      >
                        Sign up with Google
                        <i className="fab fa-google offset-2"></i>
                      </MDBBtn>
                      <MDBBtn
                        id="facebook"
                        type="button"
                        //color="indigo"
                        className="btn-block z-depth-1a"
                      >
                        Sign up with Facebook
                        <i className="fab fa-facebook-square offset-1"></i>
                      </MDBBtn>
                      <br></br>

                      <p>Already Registered ? login here</p>
                      <MDBInput
                        label="Email"
                        onChange={this.onChangeLoginEmail.bind(this)}
                        group
                        type="Text"
                        // validate
                        // error="wrong"
                        // success="right"
                      />
                      <MDBInput
                        label="Your password"
                        onChange={this.onChangeLoginPass.bind(this)}
                        group
                        type="password"
                        //  validate
                        containerClass="mb-0"
                      />

                      <div className="text-center mb-3 ">
                        <MDBBtn
                          id="login"
                          color="dark"
                          type="submit"
                          // onClick=""
                          className="btn-block z-depth-1a"
                        >
                          Login
                        </MDBBtn>
                      </div>
                      <hr></hr>
                      <div className="text-center mb-3 rounded"></div>

                      <a
                        href="#!"
                        className="blue-text ml-1"
                        onClick={this.handleFlipping(1)}
                      >
                        Other signup options
                      </a>
                    </div>
                  </MDBCardBody>
                  <MDBModalFooter className="mx-5 pt-3 mb-1"></MDBModalFooter>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </BackSide>
      </Flippy>
    );
  }
}

export default FrontPage;
