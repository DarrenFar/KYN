import React, { Component } from 'react';
import axios from 'axios';

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      isAdmin: false,
      isFacebookLogin: false,
    };
  }

  componentDidMount() {
    axios
      .get('/user')
      .then((response) => {
        const isAuthenticated = response.data.authenticated || response.data.details;
        const isAdmin = response.data.authorities.some((authority) => authority.authority === 'ROLE_ADMIN');
        const isFacebookLogin = response.data.details !== null; 
        this.setState({ isAuthenticated, isAdmin, isFacebookLogin });
      })
      .catch((error) => {
        console.error(error);
        // Handle error if needed
      });
  }

  render() {
    const { isAuthenticated, isAdmin, isFacebookLogin } = this.state;

    return (
      <div>
        <React.Fragment>
          <header id="header" className="d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">
              <h1 className="logo">
                <a href="index.html">KYN</a>
              </h1>
              <nav id="navbar" className="navbar">
                <ul>
                  <li><a className="nav-link" href="/">Home</a></li>
                  <li><a className="nav-link" href="/about">About Us</a></li>
                  <li><a className="nav-link" href="/contact">Contact Us</a></li>
                  <li><a className="nav-link" href="/terms">Terms and Conditions</a></li>
                  {isAuthenticated ? (
                    <React.Fragment>
                      <li><a className="nav-link" href={isFacebookLogin ? '/profile' : '/profiles'}>Profile</a></li>
                      <li><a className="nav-link" href="/show">Show Store</a></li>
                      <li><a className="nav-link" href="/add">Add Store</a></li>
                      {isAdmin && <li><a className="nav-link" href="/admin">Admin Page</a></li>}
                    </React.Fragment>
                  ) : (
                    <li><a className="getstarted" href="/register">Register</a></li>
                  )}
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
              </nav>
            </div>
          </header>
        </React.Fragment>
      </div>
    );
  }
}

export default Top;
