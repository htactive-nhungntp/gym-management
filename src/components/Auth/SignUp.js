import React, { Component } from "react";
import { withFirebase } from "../../Firebase/context";

class SignUpBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      username: "",
      password: ""
    };
  }
  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    let data = await this.props.firebase.getdata(`acount`);
    this.setState({
      user: data[0]
    });
  };

  toggleChange = (event, stateName) => {
    switch (stateName) {
      case "user_name":
        this.setState({ user_name: event.target.value });
        break;
      case "password":
        this.setState({ password: event.target.value });
        break;
      default:
        break;
    }
  };

  checkLogin = event => {
    event.preventDefault()

    let {username, password, user} = this.state

    if (user.user_name !== username && user.password !== password) {
      alert("Username or Password is wrong")
    } else {
      localStorage.setItem("user", JSON.stringify(user));
      this.props.history.push('/')
    }
  };

  render() {
    return (
      
      <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
        <div className="login-form-area mg-t-30 mg-b-15">
          <div className="container-fluid">
            <div className="row">
              
              <form id="adminpro-register-form" className="adminpro-form" onSubmit={this.checkLogin}>
                <div className="col-lg-12">
                  <div className="login-bg">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="logo">
                          <a href="/">
                            <img src="img/logo/logo.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="login-title">
                          <h1>Login Form </h1>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-4">
                        <div className="login-input-head">
                          <p>Username</p>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="login-input-area">
                          <input
                            type="text"
                            name="username"
                            onChange={e => this.toggleChange(e, "user_name")}
                          />
                          <i className="fa fa-user login-user" />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-4">
                        <div className="login-input-head">
                          <p>Password</p>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="login-input-area">
                          <input
                            type="password"
                            name="password"
                            onChange={e => this.toggleChange(e, "password")}
                          />
                          <i className="fa fa-lock login-user" />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-4" />
                      <div className="col-lg-8">
                        <div className="login-button-pro">
                          <button
                            type="button"
                            className="login-button login-button-lg"
                            onClick={this.checkLogin}
                          >
                            Log In
                          </button>
                          <button
                            type="submit"
                            className="login-button login-button-rg"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
     
    );
  }
}
let SignUp = withFirebase(SignUpBase);

export default SignUp;
