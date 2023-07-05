import React, { Component } from 'react';
import axios from 'axios';

class ShowStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      loading: true,
      error: '',
    };
  }

  componentDidMount() {
    axios
      .get('/api/private/showstore')
      .then((response) => {
        this.setState({ stores: response.data, loading: false });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error: 'Please login to see store', loading: false });
      });
  }

  render() {
    const { stores, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <section id="showstore" className="showstore">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2>Show Store</h2>
              </div>
              <div className="store-list">
                {stores.map((store) => (
                  <div className="card mb-3" key={store.id}>
                    <div className="card-body">
                      <h5 className="card-title">{store.name}</h5>
                      <p className="card-text">{store.description}</p>
                      <p className="card-text">
                        <strong>Address:</strong> {store.address}
                      </p>
                      <p className="card-text">
                        <strong>Phone:</strong> {store.phone}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-4">
                <a href="/add" className="btn btn-success">Add Store</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ShowStore;
