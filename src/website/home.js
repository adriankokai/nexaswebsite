import React, { Component } from 'react'
import "./home.css"
import logo from "../logo.jpg"
import stove from "../photos/stove.jpg"
import scale from "../photos/scale.png"
import valve from "../photos/valve.png"
import pump from "../photos/pump.jpg"

export class home extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="menu-btn">
            <i className="fas fa-bars fa-2x"></i>
          </div>

          <div className="container">
            {/* <!-- Nav --> */}
            <nav className="main-nav">
              <img src={logo} alt="Microsoft" class="logo" />

              <ul className="main-menu">
                <li><a href="#">Office</a></li>
                <li><a href="#">Locations</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Deals</a></li>
                <li><a href="#">Support</a></li>
              </ul>

              <ul className="right-menu">
                <li>
                  <a href="#">
                    <i className="fas fa-search"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-shopping-cart"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* <!-- Showcase --> */}
          <header class="showcase">
            <h2>Deals</h2>
            <p>
              Select products that are on sale now - save while supplies last
            </p>
            <a href="#" class="btn">
              Shop Now <i class="fas fa-chevron-right"></i>
            </a>
          </header>

          {/* <!-- Home cards 1 --> */}
          <section className="home-cards">
            <div>
              <img src={stove} alt="" />
              <h3>New 2 plate stove</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at leo et 
                eros condimentum dictum vitae nec diam.
              </p>
              <a href="#">Learn More <i className="fas fa-chevron-right"></i></a>
            </div>
            <div>
              <img src={scale} alt="" />
              <h3>Lp gas filling scale</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at leo et 
                eros condimentum dictum vitae nec diam.
              </p>
              <a href="#">Learn More <i className="fas fa-chevron-right"></i></a>
            </div>
            <div>
              <img src={valve} alt="" />
              <h3>Valve</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at leo et 
                eros condimentum dictum vitae nec diam.
              </p>
              <a href="#">Learn More <i className="fas fa-chevron-right"></i></a>
            </div>
            <div>
              <img src={pump} alt="" />
              <h3>Pump</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at leo et 
                eros condimentum dictum vitae nec diam.
              </p>
              <a href="#">Learn More <i className="fas fa-chevron-right"></i></a>
            </div>
          </section>

          {/* <!-- Xbox --> */}
          <section className="xbox">
            <div className="content">
              <h2>Ultimate quality gas</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at leo et 
                eros condimentum dictum vitae nec diam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at leo et 
                eros condimentum dictum vitae nec diam.</p>
                <a href="#" className="btn">
                  Join Now <i className="fas fa-chevron-right"></i>
                </a>
            </div>
          </section>

          {/* <!-- Home cards 2 --> */}
          <section className="home-cards">
            <div>
              <img src="https://i.ibb.co/zVqhWn2/card5.png" alt="" />
              <h3>Online Orders</h3>
              <p>
                Make the most of our online existence.
              </p>
              <a href="#">Shop Now <i className="fas fa-chevron-right"></i></a>
            </div>
            <div>
              <img src="https://i.ibb.co/mGZcxcn/card6.jpg" alt="" />
              <h3>Our Team</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at leo et 
                eros condimentum dictum vitae nec diam.
              </p>
              <a href="#">See more <i className="fas fa-chevron-right"></i></a>
            </div>
            <div>
              <img src="https://i.ibb.co/NpPvVHj/card7.png" alt="" />
              <h3>Become a partner</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at leo et 
                eros condimentum dictum vitae nec diam.
              </p>
              <a href="#">See How <i className="fas fa-chevron-right"></i></a>
            </div>
            <div>
              <img src="https://i.ibb.co/LkP4L5T/card8.png" alt="" />
              <h3>Industry</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at leo et 
                eros condimentum dictum vitae nec diam.
              </p>
              <a href="#">Get Started <i className="fas fa-chevron-right"></i></a>
            </div>
          </section>
          
          {/* <!-- Carbon --> */}
          <section className="carbon dark">
            <div className="content">
              <h2>Commiting To Carbon Negative</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at leo et 
                eros condimentum dictum vitae nec diam.</p>
                <a href="#" className="btn">
                  Learn More <i className="fas fa-chevron-right"></i>
                </a>
            </div>
          </section>

          {/* <!-- Follow --> */}
          <section className="follow">
            <p>Follow Nexas</p>
            <a href="https://facebook.com">
              <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com">
              <img src="https://i.ibb.co/vJvbLwm/social-twitter.png" alt="Twitter" />
            </a>
            <a href="https://linkedin.com">
              <img src="https://i.ibb.co/b30HMhR/social-linkedin.png" alt="Linkedin" />
            </a>
          </section>
        </div>

        {/* <!-- Links --> */}
        <section className="links">
          <div className="links-inner">
            <ul>
              <li><h3>What's New</h3></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
            </ul>
            <ul>
              <li><h3>Nexas Store</h3></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Order tracking</a></li>
            </ul>
            <ul>
              <li><h3>Education</h3></li>
              <li><a href="#">Microsfot in education</a></li>
              <li><a href="#">Office for students</a></li>
              <li><a href="#">Office 365 for schools</a></li>
              <li><a href="#">Deals for studentss</a></li>
              <li><a href="#">Microsfot Azure</a></li>
            </ul>
            <ul>
              <li><h3>Enterprise</h3></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Government</a></li>
              <li><a href="#">Healthcare</a></li>
            </ul>
            <ul>
              <li><h3>The Team</h3></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
            </ul>
            <ul>
              <li><h3>Company</h3></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">About Nexas</a></li>
              <li><a href="#">Company news</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Inverstors</a></li>
            </ul>
          </div>
        </section>

        {/* <!-- Footer --> */}
        <footer className="footer">
          <div className="footer-inner">
            <div><i className="fas fa-globe fa-2x"></i> English (United States)</div>
            <ul>
              <li><a href="#">Sitemap</a></li>
            <li><a href="#">Contact Nexas</a></li>
            <li><a href="#">{"Privacy & cookies"}</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Trademarks</a></li>
            <li><a href="#">{"Safety & eco"}</a></li>
            <li><a href="#">About our ads</a></li>
            <li><a href="#">&copy; Nexas 2020</a></li>
            </ul>
          </div>
        </footer>  
      </React.Fragment>
    )
  }
}

export default home;
