import React, { Component } from 'react';
import axios from 'axios';

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false,
      users: [],
      loading: true,
      error: '',
    };
  }

  componentDidMount() {
    // Check user authentication
    axios
      .get('/user')
      .then((response) => {
        const { authorities } = response.data;
        const isAdmin = authorities.some((authority) => authority.authority === 'ROLE_ADMIN');
        this.setState({ isAdmin });

        if (isAdmin) {
          // Fetch user data if admin
          axios
            .get('/api/private/showcust')
            .then((response) => {
              this.setState({ users: response.data, loading: false });
            })
            .catch((error) => {
              console.error(error);
              this.setState({ error: 'Failed to fetch user data', loading: false });
            });
        } else {
          this.setState({ loading: false });
        }
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error: 'Failed to authenticate user', loading: false });
      });
  }

  render() {
    const { isAdmin, users, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    if (!isAdmin) {
      return <div>You are not authorized to access this page.</div>;
    }

    return (
      <section id="admin-page" className="admin-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2>Admin Page</h2>
              </div>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Username</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{user.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AdminPage;
