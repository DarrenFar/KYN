import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
      showPopup: false,
    };
  }

  redirectFb = () => {
    window.location.href = "http://localhost:9090";
  };

  redirectGoogle = () => {
    const googleClientId = '1041470624449-la42c16qe8dpsuvvenr6e5arup7g0v8p.apps.googleusercontent.com';
    const googleRedirectUri = 'http://localhost:3000/google';

    const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${googleRedirectUri}&response_type=code&scope=openid%20profile%20email`;

    // Redirect the user to the Google login page
    window.location.href = googleLoginUrl;
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value, error: '' });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    axios
      .post('/api/login', { username, password })
      .then((response) => {
        console.log(response.data);
        if (response.data === 'Login successful') {
          this.setState({ showPopup: true, error: '' });
        } else {
          this.setState({ error: response.data, showPopup: false });
        }
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error: 'Username or password is incorrect', showPopup: false });
      });
  };

  handlePopupClose = () => {
    this.setState({ showPopup: false });
  };

  render() {
    const { username, password, error, showPopup } = this.state;

    return (
      <section id="login" className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="section-title">
                <h2>Login</h2>
              </div>
              <div className="login-form">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      value={username}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  {error && <div className="text-danger">{error}</div>}
                  <div className="form-group mt-3">
                    <button type="submit" className="btn btn-primary">Login</button>
                  </div>
                </form>
              </div>
              <div className="social-login">
                <div className="social-divider">
                  <span className="divider-text">or</span>
                </div>
                <div className="social-buttons">
                  <button className="btn btn-facebook" onClick={this.redirectFb}>
                    <i className="bi bi-facebook"></i>Login with Facebook
                  </button>
                  <button className="btn btn-google" onClick={this.redirectGoogle}>
                    <i className="bi bi-google"></i>Login with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h3>Login Successful!</h3>
              <p>You have been successfully logged in.</p>
              <a href="/" className="btn btn-primary">Go to Home</a>
            </div>
          </div>
        )}
        {showPopup && <div className="popup-overlay" />}
      </section>
    );
  }
}

export default Login;
