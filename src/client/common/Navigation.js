import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component{
  static contextTypes = {
    user: React.PropTypes.object
  };
  render(){
    return (
      <div className="navbar navbar-inverse navbar-sticky navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar navbar-expand-lg navbar-light bg-light"></Link>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right smooth-scroll">
              <li><Link to="/">Movies</Link></li>
              <li><Link to="details">Details</Link></li>
              <li><Link to="results">Results</Link></li>
              <li><Link to="auth">Login</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
