import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

export class Google extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: ''
  };

  responseGoogle = (response) => {
    if (response.profileObj) {
      this.setState({
        isLoggedIn: true,
        userID: response.profileObj.googleId,
        name: response.profileObj.name,
        email: response.profileObj.email,
        picture: response.profileObj.imageUrl
      });
    }
  };

  render() {
    let googleContent;
    if (this.state.isLoggedIn) {
      googleContent = (
        <div>
          <h2>Welcome, {this.state.name}!</h2>
          <p>Email: {this.state.email}</p>
          <img src={this.state.picture} alt="Profile" />
        </div>
      );
    } else {
      googleContent = (
        <GoogleLogin
          clientId="1041470624449-la42c16qe8dpsuvvenr6e5arup7g0v8p.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
      );
    }

    return <div>{googleContent}</div>;
  }
}

export default Google;