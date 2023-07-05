import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      error: '',
    };
  }

  componentDidMount() {
    axios
      .get('/user')
      .then((response) => {
        let username = '';

        // Check if the response data is from a Facebook login
        if (response.data.details && response.data.details.name) {
          // Facebook login
          username = response.data.details.name;
        } else if (response.data.userAuthentication && response.data.userAuthentication.details) {
          // Local login
          username = response.data.userAuthentication.details.name;
        }

        // Assign the correct username to the state
        this.setState({ user: { name: response.data.name, username }, loading: false });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error: 'Please login to see your profile', loading: false });
      });
  }

  handleLogout = () => {
    axios
      .get('/logout')
      .then(() => {
        // Redirect to home page
        window.location.href = '/';

        // Display popup message
        alert('Logout successful!');
      })
      .catch((error) => {
        console.error(error);
        // Handle error if needed
      });
  };

  render() {
    const { user, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <section id="profile" className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="section-title">
                <h2>Profile</h2>
              </div>
              <div className="profile-details">
                <div className="profile-image">
                  <img src="/assets/img/profile.jpg" alt="Profile" className="rounded-circle profile-picture" />
                </div>
                <div className="profile-info text-center mt-4">
                  <p>
                    <strong>Username:</strong> {user.username}
                  </p>
                </div>
                <div className="profile-buttons">
                  <a href="/show" className="btn btn-success">Show Store</a>
                  <span className="mx-2"></span>
                  <a href="/add" className="btn btn-success">Add Store</a>
                </div>
                <div className="logout-button d-flex justify-content-center mt-4">
                  <a href="/" className="btn btn-danger" onClick={this.handleLogout}>Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Profile;
