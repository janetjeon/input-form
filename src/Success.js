import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Success.css';

class Success extends Component {
    render() {
      return (
        <div className="success__wrapper">
          <div className="success__msg--wrapper">
            <div className="success__msg--content">
              <h1>Congratulations!</h1>
              <p>You have successfully logged in.</p>
            </div>
            <div className="success__btn">
              <Link to="/"><button>sign out</button></Link>
            </div>
          </div>
        </div>
      );
    }
}

export default Success;