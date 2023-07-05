import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        email: '',
        username: '',
        password: '',
        role: 'USER'
      },
      errors: {},
      isRegistered: false
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      user: { ...prevState.user, [name]: value },
      errors: { ...prevState.errors, [name]: '' }
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      axios.post('/adduser', this.state.user)
        .then((response) => {
          console.log(response.data);
          this.setState({ isRegistered: true });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  validateForm = () => {
    const { user } = this.state;
    let errors = {};
    let isValid = true;

    if (!user.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!user.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!user.username.trim()) {
      errors.username = 'Username is required';
      isValid = false;
    }

    if (!user.password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (user.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  render() {
    const { user, errors, isRegistered } = this.state;

    return (
      <section id="registration" className="registration">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="section-title">
                <h2>Registration</h2>
              </div>
              <div className="registration-form">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      id="name"
                      name="name"
                      value={user.name}
                      onChange={this.handleChange}
                      required
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      value={user.email}
                      onChange={this.handleChange}
                      required
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                      id="username"
                      name="username"
                      value={user.username}
                      onChange={this.handleChange}
                      required
                    />
                    {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      id="password"
                      name="password"
                      value={user.password}
                      onChange={this.handleChange}
                      required
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  </div>
                  <input type="hidden" name="role" value={user.role} />
                  <div className="form-group mt-3">
                    <button type="submit" className="btn btn-primary">Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {isRegistered && (
          <div className="modal show d-block" tabIndex="-1" role="dialog" data-backdrop="static" data-keyboard="false">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <p>You have registered successfully!</p>
                </div>
                <div className="modal-footer">
                  <a href="/login" className="btn btn-primary">Login Now</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default Register;
