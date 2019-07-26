import React, { Component } from 'react'

export default class SignUp extends Component {
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
                        <input type="text" name="username" />
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
                        <input type="password" name="password" />
                        <i className="fa fa-lock login-user" />
                      </div>
                    </div>
                  </div>
    
                  <div className="row">
                    <div className="col-lg-4" />
                    <div className="col-lg-8">
                      <div className="login-button-pro">
                        <button type="submit" className="login-button login-button-lg">Log In</button>
                        <button type="submit" className="login-button login-button-rg">Cancel</button>
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
