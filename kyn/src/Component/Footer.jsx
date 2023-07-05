import React,{Component } from 'react';

class Footer extends Component{

render()
{
    return(
        <div>
<React.Fragment>


<footer id="footer">
  <div className="footer-top">
    <div className="container">
      <div className="row">

        <div className="col-lg-3 col-md-6">
          <div className="footer-info">
            <h3>KYN</h3>
            <p>
              A108 Adam Street <br />
              NY 535022, USA<br /><br />
              <strong>Phone:</strong> +1 5589 55488 55<br />
              <strong>Email:</strong> info@example.com<br />
            </p>
            <div className="social-links mt-3">
              <a href="twitter.com" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="facebook.com" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="instagram.com" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="linkedin.com" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="home">Home</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="about">About us</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="contact">Contact Us</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="terms">Terms of service</a></li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="add">Add store</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="view">View Store</a></li>

          </ul>
        </div>

        <div className="col-lg-4 col-md-6 footer-newsletter">
          <h4>Our Newsletter</h4>
          <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
          <form action="" method="post">
            <input type="email" name="email" /><input type="submit" value="Subscribe" />
          </form>
        </div>

      </div>
    </div>
  </div>

  <div className="container">
    <div className="copyright">
      &copy; {new Date().getFullYear()} Copyright <strong><span>KYN</span></strong>. All Rights Reserved
    </div>
  </div>
</footer>

</React.Fragment>
</div>
        )
 
}

}
export default Footer;