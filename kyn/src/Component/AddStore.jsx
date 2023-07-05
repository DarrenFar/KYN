import React, { Component } from 'react';
import axios from 'axios';

class AddStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      phone: '',
      description: '',
      successMessage: '',
      errorMessage: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, address, phone, description } = this.state;
    axios
      .post('/api/private/addstore', { name, address, phone, description })
      .then((response) => {
        this.setState({ successMessage: 'Store added successfully!', errorMessage: '' });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ errorMessage: 'An error occurred while adding the store', successMessage: '' });
      });
  };

  handlePopupClose = () => {
    this.setState({ successMessage: '', errorMessage: '' });
    // Redirect to /show page
    window.location.href = '/show';
  };

  render() {
    const { name, address, phone, description, successMessage, errorMessage } = this.state;

    return (
      <section id="addstore" className="addstore">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="section-title">
                <h2>Add Store</h2>
              </div>
              <div className="addstore-form">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={name}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                      value={address}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      value={description}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <button type="submit" className="btn btn-primary">Add Store</button>
                  </div>
                </form>
              </div>
              {successMessage && (
                <div className="popup">
                  <div className="popup-content">
                    <h3>{successMessage}</h3>
                    <button onClick={this.handlePopupClose} className="btn btn-success">Go to Show Store</button>
                  </div>
                </div>
              )}
              {errorMessage && <div className="text-danger">{errorMessage}</div>}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AddStore;