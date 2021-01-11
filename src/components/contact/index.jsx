import bulitIcon from "../../assets/images/bulit-icon.png";
import emailIcon from "../../assets/images/email-icon.png";
import fbIcon from "../../assets/images/fb-icon.png";
import footerLogo from "../../assets/images/footer-logo.png";
import googleIcon from "../../assets/images/google-icon.png";
import img2 from "../../assets/images/img-2.png";
import inIcon from "../../assets/images/in-icon.png";
import mapIcon from "../../assets/images/map-icon.png";
import phoneIcon from "../../assets/images/phone-icon.png";
import twitterIcon from "../../assets/images/twitter-icon.png";

function Contact() {
    return (
      <div>
        <div id="contact" class="contact_section">
          <div class="container">
            <div class="col-sm-12">
              <h1 class="choose_text">Request A Call Back</h1>
              <p class="lorem_text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </p>
            </div>
          </div>
        </div>
        <div class="contact_section_2">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="input_main">
                  <div class="container">
                    <form action="/action_page.php">
                      <div class="form-group">
                        <input
                          type="text"
                          class="email-bt"
                          placeholder="Name"
                          name="Name"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          class="email-bt"
                          placeholder="Email"
                          name="Email"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          class="email-bt"
                          placeholder="Phone"
                          name="Email"
                        />
                      </div>
                      <div class="form-group">
                        <textarea
                          class="massage-bt"
                          placeholder="Massage"
                          rows="5"
                          id="comment"
                          name="text"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  <div class="send_btn">
                    <button type="button" class="main_bt">
                      <a href="#">Send</a>
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="section_right">
                  <img src={img2} style={{ maxWidth: "100%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="contact_section_3">
          <div class="container">
            <div class="contact_taital">
              <div class="row web">
                <div class="col-sm-12 col-md-12 col-lg-4">
                  <div class="map_main">
                    <img src={mapIcon} />
                    <span class="londan_text">London 145 United Kingdom</span>
                  </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-4">
                  <div class="map_main">
                    <img src={phoneIcon} />
                    <span class="londan_text">+7586656566</span>
                  </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-4">
                  <div class="map_main">
                    <img src={emailIcon} />
                    <span class="londan_text">demo@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="contact_product">
              <div class="row">
                <div class="col-sm-6 col-md-6 col-lg-2">
                  <div class="footer-logo">
                    <img src={footerLogo} style={{ maxWidth: "100%" }} />
                  </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-4">
                  <h1 class="useful_text">USEFUL LINK</h1>
                  <div class="menu">
                    <ul>
                      <li>
                        <a href="#home">
                          <img
                            src={bulitIcon}
                            style={{ paddingRight: "10px" }}
                          />
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="#about">
                          <img
                            src={bulitIcon}
                            style={{ paddingRight: "10px" }}
                          />
                          About
                        </a>
                      </li>
                      <li>
                        <a href="#service">
                          <img
                            src={bulitIcon}
                            style={{ paddingRight: "10px" }}
                          />
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="#contact">
                          <img
                            src={bulitIcon}
                            style={{ paddingRight: "10px" }}
                          />
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-6">
                  <h1 class="useful_text">PRODUCT</h1>
                  <div class="menu multi_column_menu">
                    <ul>
                      <li class="footer_menu">
                        <a href="#">
                          <img src={bulitIcon} class="footer_menu" />
                          Webhosting
                        </a>
                      </li>
                      <li class="footer_menu">
                        <a href="#">
                          <img src={bulitIcon} class="footer_menu" />
                          Reseler Hosting
                        </a>
                      </li>
                      <li class="footer_menu">
                        <a href="#">
                          <img src={bulitIcon} class="footer_menu" />
                          VPS Hosting
                        </a>
                      </li>
                      <li class="footer_menu">
                        <a href="#">
                          <img src={bulitIcon} class="footer_menu" />
                          Wordpress Hosting
                        </a>
                      </li>
                      <li class="footer_menu">
                        <a href="#">
                          <img src={bulitIcon} class="footer_menu" />
                          Dedicated hosting
                        </a>
                      </li>
                      <li class="footer_menu">
                        <a href="#">
                          <img src={bulitIcon} class="footer_menu" />
                          Windows
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="input-group mb-3 margin-top-30">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter you email"
                    />
                    <div class="input-group-append">
                      <button class="subsrcibe_bt" type="Subscribe">
                        <a href="#">SUBSCRIBE</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="icon_main">
              <div class="row">
                <div class="col-sm-12">
                  <div class="menu_text">
                    <ul>
                      <li>
                        <a href="#">
                          <img src={fbIcon} />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={twitterIcon} />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={inIcon} />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={googleIcon} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright_main">
          <div class="container">
            <p class="copy_text">
              © 2018 All Rights Reserved.{" "}
              <a href="https://html.design">Free Website Templates</a>
            </p>
          </div>
        </div>
      </div>
    );
}

export default Contact