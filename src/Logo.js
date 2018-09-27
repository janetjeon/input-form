import React, { Component } from 'react';
import './Logo.css';

class Logo extends Component {
    render() {
        return (
          <div className="logo__wrapper">
            <div className="logo__wrapper--content">
                <h1>AcmeStack</h1>
                <div className="logo">
                    <img src="./svg/logo-acmestack.svg" alt="logo" />
                </div>
            </div>
          </div>
        );
    }
}


export default Logo;