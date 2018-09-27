import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Logo from './Logo';
import Login from './Login';
import Success from './Success';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="site__wrapper">
            {/* <Route exact path="/" component={Login} /> */}
            <Route exact path="/" render={ (routeProps) => {return <Login {...routeProps} />} } />
            <Route exact path="/success" component={Success} />
            <Route path="/" component={Logo} />
        </div>
      </Router>
      // <Router>
      //   <div className="site__wrapper">
      //     <div className="site__left">
      //       <Route exact path="/" component={Login} />
      //       <Route exact path="/success" component={Success} />
      //     </div>
      //     <div className="site__right">
      //       <Route path="/" component={Logo} />
      //     </div>
      //   </div>
      // </Router>
    );
  }
}

export default App;
