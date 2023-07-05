import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
  }

  componentDidMount() {
    axios
      .get('/user')
      .then((response) => {
        const isAuthenticated = response.data.authenticated || response.data.details;
        this.setState({ isAuthenticated });
      })
      .catch((error) => {
        console.error(error);
        // Handle error if needed
      });
  }

  render() {
    const { isAuthenticated } = this.state;

    return (
      <div>
        <React.Fragment>
          <section id="hero">
            <div className="hero-container">
              <div
                className="carousel-item active"
                style={{ backgroundImage: "url(assets/img/slide/slide-1.jpg)" }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2 className="animate__animated animate__fadeInDown">
                      Know your neighborhood
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Welcome to Know Your Neighborhood. Say goodbye to the hassle of searching for stores manually or relying on outdated information. Our app provides you with an extensive list of nearby stores, ensuring you have access to a wide range of options. Whether you're in need of groceries, clothing, electronics, or any other essentials, our application will guide you to the nearest stores that meet your requirements.
                    </p>
                    {isAuthenticated ? (
                      <a href="/show" className="btn-get-started animate__animated animate__fadeInUp scrollto">
                        Get Started
                      </a>
                    ) : (
                      <a href="/login" className="btn-get-started animate__animated animate__fadeInUp scrollto">
                        Login
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      </div>
    );
  }
}

export default Home;
