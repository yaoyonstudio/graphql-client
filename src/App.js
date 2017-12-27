import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'

import Myheader from './Common/Myheader'
import Myfooter from './Common/Myfooter'
import Home from './Home/Home';
import Posts from './Posts/Posts';
import About from './About/About';
import Test from './Test';

class App extends Component {
  render() {
    return (
      <Router>
				<div className="container">
          <Myheader></Myheader>
					<div className="page">
						<Route exact path="/" component={Home}/>
						<Route path="/about" component={About}/>
						<Route path="/posts" component={Posts}/>
						<Route path="/test" component={Test}/>
					</div>
          <Myfooter></Myfooter>
				</div>
			</Router>
    );
  }
}

export default App;
