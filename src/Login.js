import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import './Login.css';
// import Google from './svg/logo-google.svg'

class Login extends Component {

    state = {
      username: '',
      password: '',
      error: false
    }
   
    inputFormHandler = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    submitForm = (evt) => {
      evt.preventDefault();
      let {username, password} = this.state;
      if (username && password) {
        if (password.length < 8 || password.length > 24) {
          this.setState({
            error: true
          })
        } else {
          console.log('success!')
          this.props.history.push('/success')
        }
      } else {
        this.setState({
          error: true
        })
      }
    }
    
    render() {
        return (
          <div className="login__wrapper">
            <div className="login__form">
              <div className="login_form--container">
                <form onSubmit={this.submitForm} className="login__form--input">
                  <input type="text" required
                        placeholder="username" 
                        value={this.state.username}
                        onChange={this.inputFormHandler}
                        name="username" />

                  <input type="password" required
                        placeholder="password" 
                        value={this.state.password}
                        onChange={this.inputFormHandler}
                        name="password" 
                        maxLength='24'
                        id={this.state.error ? 'invalid' : ''} /> 
                        
                  <input type="submit" value="login" className="login__form--submit"/>
                </form>

                <p id={this.state.error ? 'errorMsg' : ''}>{this.state.error ? 'password must be between 8-24 characters' : ''}</p>
              </div>
              <label>
                <input type="checkbox" />
                <span>remember me</span>
              </label>

              <div className="login__external">
                <p>or login with</p>
                <div className="login__external--socialMedia">
                  <div className="socialMedia__icon">
                    <img src="svg/logo-google.svg" alt="gmail logo" />
                  </div>
                  <div className="socialMedia__icon">
                    <img src="svg/logo-facebook.svg" alt="facebook logo" />
                  </div>
                  <div className="socialMedia__icon">
                    <img src="svg/logo-twitter.svg" alt="twitter logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Login;

/*
else {
  this.setState({
    error: {
      username: '*cannot leave field empty',
      password: '*cannot leave field empty'
    },
    errorColour: 'invalid'
  })
}*/