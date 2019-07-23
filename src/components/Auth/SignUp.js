import React, { Component } from 'react'

export default class SignIn extends Component {
    state={

    }

    render() {
        return (
            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
         <div className="login-form-area mg-t-30 mg-b-15">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3" />
            <form id="adminpro-register-form" className="adminpro-form">
              <div className="col-lg-12">
                <div className="login-bg">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="logo">
                        <a href="/"><img src="img/logo/logo.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="login-title">
                        <h1>Registration Form</h1>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="login-input-head">
                        <p>Fullname</p>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="login-input-area">
                        <input type="text" name="fullname" />
                        <i className="fa fa-user login-user" />
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
                        <input type="text" name="username" />
                        <i className="fa fa-user login-user" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="login-input-head">
                        <p>Email Address</p>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="login-input-area">
                        <input type="email" name="email" />
                        <i className="fa fa-envelope login-user" aria-hidden="true" />
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
                        <input type="password" name="password" />
                        <i className="fa fa-lock login-user" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="login-input-head">
                        <p>Confirm Password</p>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="login-input-area">
                        <input type="password" name="confarm_password" />
                        <i className="fa fa-lock login-user" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-lg-4" />
                    <div className="col-lg-8">
                      <div className="login-keep-me register-check">
                        <label className="checkbox">
                          <input type="checkbox" name="remember" defaultChecked /><i />I want to receive news and special offers
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4" />
                    <div className="col-lg-8">
                      <div className="login-button-pro">
                        <button type="submit" className="login-button login-button-rg">Log In</button>
                        <button type="submit" className="login-button login-button-lg">Register</button>
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
        )
    }
}
