import '../assets/css/bootstrap.min.css';
import '../assets/css/responsive.css';
import '../assets/css/style.css';
//
import bulitIcon from '../assets/images/bulit-icon.png';
import emailIcon from '../assets/images/email-icon.png';
import fbIcon from '../assets/images/fb-icon.png';
import footerLogo from '../assets/images/footer-logo.png';
import googleIcon from '../assets/images/google-icon.png';
import headFoneIcon from '../assets/images/headfone-icon.png';
import icon1 from '../assets/images/icon-1.png';
import icon2 from '../assets/images/icon-2.png';
import icon3 from '../assets/images/icon-3.png';
import icon4 from '../assets/images/icon-4.png';
import icon5 from '../assets/images/icon-5.png';
import icon6 from '../assets/images/icon-6.png';
import img1 from '../assets/images/img-1.png';
import img2 from '../assets/images/img-2.png';
import inIcon from '../assets/images/in-icon.png';
import logo from '../assets/images/logo.png';
//
import mapIcon from '../assets/images/map-icon.png';
import optimisedIcon from '../assets/images/optimised-icon.png';
import phoneIcon from '../assets/images/phone-icon.png';
import powerFullIcon from '../assets/images/power-full-icon.png';
import rightAerow from '../assets/images/right-aerow.png';
import twitterIcon from '../assets/images/twitter-icon.png';
import woofer from '../assets/images/woofer.png';




function Pages() {
    return (
      <div>
        <header id="home" className="section">
          <div className="header_main">
            {/* header inner */}
            <div className="header">
              <div className="container">
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                    <div className="full">
                      <div className="center-desk">
                        <div className="logo">
                          <a href="#home">
                            <img src={logo} style={{ maxWidth: "100%" }} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                    <div className="menu-area">
                      <div className="limit-box">
                        <nav className="main-menu">
                          <ul className="menu-area-main">
                            <li>
                              <a href="#home">Home</a>
                            </li>
                            <li>
                              <a href="#about">About</a>
                            </li>
                            <li>
                              <a href="#service">Service</a>
                            </li>
                            <li>
                              <a href="#testimonial">Testimonial</a>
                            </li>
                            <li>
                              <a href="#contact">Contact Us</a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end header inner  */}

            <section>
              <div className="bannen_inner">
                <div className="container">
                  <div className="row marginii">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <div className="taital_main"></div>
                      <h1 className="web_text">
                        <strong>Unlimited Web Hosting</strong>
                      </h1>
                      <p className="donec_text">
                        Donec nec justo eget felis facilisis fermentum. Aliquam
                        porttitor mauris sit amet orci. Aenean dignissim
                        pellentesque felis.Donec nec justo eget felis facilisis
                        fermentum. Aliquam porttitor mauris sit amet orci.
                        Aenean dignissim pellentesque felis.
                      </p>
                      <a className="get_bg" href="#" role="button">
                        Get Started
                      </a>
                      <a
                        className="btn btn-lg btn-dark"
                        href="about.html"
                        role="button"
                      >
                        Contact Us
                      </a>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                      <div className="img-box">
                        <figure>
                          <img
                            src={woofer}
                            alt="img"
                            style={{ maxWidth: "100%" }}
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div className="emaim-bt">
                    <div className="col-md-9 margin-0">
                      <div className="input-group mb-3 margin-top-20">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter domain name here"
                        />
                        <div className="input-group-append">
                          <button className="search_bt" type="Subscribe">
                            <a href="#">Search</a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </header>

        {/* banner end */}

        {/* choose start  */}

        <div id="about" className="choose_section">
          <div className="container">
            <div className="col-sm-12">
              <h1 className="choose_text">
                Why you should <span className="color">choose us</span>
              </h1>
              <p className="lorem_text">
                Making it look like readable English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their
                default model text, and a search for 'lorem ipsum' will uncover
                any web sites still
              </p>
            </div>
          </div>
        </div>
        <div className="choose_section_2">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="power_full">
                  <div className="icon">
                    <a href="#">
                      <img src={powerFullIcon} />
                    </a>
                  </div>
                  <h2 className="powerful_text">Powerful Features</h2>
                  <p className="making_tetx">
                    making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum
                    as their default model text, and a search for 'lorem ipsum'
                    will uncover many web sites still{" "}
                  </p>
                </div>
                <div className="btn_main">
                  <button type="button" className="read_bt">
                    <a href="#">Read More</a>
                  </button>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="power">
                  <div className="icon">
                    <a href="#">
                      <img src={optimisedIcon} />
                    </a>
                  </div>
                  <h2 className="totaly_text">Totaly Optimised</h2>
                  <p className="making">
                    making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum
                    as their default model text, and a search for 'lorem ipsum'
                    will uncover many web sites still{" "}
                  </p>
                </div>
                <div className="btn_main">
                  <button type="button" className="read_bt">
                    <a href="#">Read More</a>
                  </button>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="power">
                  <div className="icon">
                    <a href="#">
                      <img src={headFoneIcon} />
                    </a>
                  </div>
                  <h2 className="totaly_text">Worldwide Support</h2>
                  <p className="making">
                    making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum
                    as their default model text, and a search for 'lorem ipsum'
                    will uncover many web sites still{" "}
                  </p>
                </div>
                <div className="btn_main">
                  <button type="button" role="button" className="read_bt">
                    <a href="#">Read More</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* choose start */}

        {/* about start  */}

        <div className="about_main layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="images">
                  <img src={img1} style={{ maxWidth: "100%" }} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="right_section_main">
                  <h1 className="dolar_tetx">
                    <strong style={{ color: "#2ba879" }}>599.00* .com</strong>
                  </h1>
                  <h2 className="special_text">
                    Special Offer For Limited Time. 30% Discount On All Hosting
                    Plans
                  </h2>
                  <p className="donec_text">
                    making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum
                    as their default model text, and a search for 'lorem ipsum'
                    will uncover many web sites still{" "}
                  </p>
                  <div className="right_aero">
                    <img src={rightAerow} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about end */}

            {/* service start */}
            
             <div id="service" class="choose_section">
    	<div class="container">
    		<div class="col-sm-12">
    			<h1 class="choose_text">Our<span class="color"> Service</span></h1>
    			<p class="lorem_text">Lorem ipsum dolor sittem ametamngcing elit, per sed do eiusmoad teimpor sittem elit inuning ut sed.</p>
    		</div>
    	</div>
    </div>
    <div class="choose_section_2">
    	<div class="container">
    	    <div class="row">
    		    <div class="col-sm-4">
    			    <div class="about_inner">
    				    <div class="icon"><a href="#"><img src={icon1} /></a></div>
    				    <h2 class="totaly_text">Shared Hosting</h2>
    				    <p class="making">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
    			    </div>
    		    </div>
    		    <div class="col-sm-4">
    			    <div class="dedicated">
    				    <div class="icon"><a href="#"><img src={icon2}/></a></div>
    				    <h2 class="hosting_text">Dedicated Hosting</h2>
    				    <p class="justo_text">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
    			    </div>
    		    </div>
    		    <div class="col-sm-4">
    			    <div class="about_inner">
    				    <div class="icon"><a href="#"><img src={icon3} /></a></div>
    				    <h2 class="totaly_text">Domain Registration</h2>
    				    <p class="making">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
    			    </div>
    		    </div>
    	    </div>    		
    	</div>
    </div>

    <div class="choose_section_2">
    	<div class="container">
    	    <div class="row">
    		    <div class="col-sm-4">
    			    <div class="about_inner">
                                <div class="icon"><a href="#"><img src={icon4 }/></a></div>
    				    <h2 class="totaly_text">Shared Hosting</h2>
    				    <p class="making">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
    			    </div>
    		    </div>
    		    <div class="col-sm-4">
    			    <div class="about_inner">
    				    <div class="icon"><a href="#"><img src={icon5}/></a></div>
    				    <h2 class="totaly_text">Dedicated Hosting</h2>
    				    <p class="making">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
    			    </div>
    		    </div>
    		    <div class="col-sm-4">
    			    <div class="about_inner">
                                <div class="icon"><a href="#"><img src={icon6}/></a></div>
    				    <h2 class="totaly_text">Domain Registration</h2>
    				    <p class="making">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
    			    </div>
    		    </div>
    	    </div>
    	    <div class="bt_main">
    	    	<button class="read_more"><a href="#">Read More</a></button>
            </div>   		
    	</div>
    </div>
    
    {/* service end  */}
    {/* contact start */}
    
     <div id="contact" class="contact_section">
    	<div class="container">
    		<div class="col-sm-12">
    			<h1 class="choose_text">Request A Call  Back</h1>
    			<p class="lorem_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
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
                              <input type="text" class="email-bt" placeholder="Name" name="Name"/>
                            </div>
                            <div class="form-group">
                              <input type="text" class="email-bt" placeholder="Email" name="Email"/>
                            </div>
                            <div class="form-group">
                              <input type="text" class="email-bt" placeholder="Phone" name="Email"/>
                            </div>
                                <div class="form-group">
                                  <textarea class="massage-bt" placeholder="Massage" rows="5" id="comment" name="text"></textarea>
                                </div>
                            </form>
                          
                       </div> 
                       <div class="send_btn">
                        <button type="button" class="main_bt"><a href="#">Send</a></button>
                       </div>                   
                    </div>
    			</div>
    			<div class="col-md-6">
    				<div class="section_right">
    					<img src={img2}  style={{ maxWidth: "100%" }} />
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
    						<img src={mapIcon}/>
    						<span class="londan_text">London 145 United Kingdom</span>
    					</div>
    				</div>
    				<div class="col-sm-6 col-md-6 col-lg-4">
    					<div class="map_main">
    						<img src={phoneIcon}/>
    						<span class="londan_text">+7586656566</span>
    					</div>
    				</div>
    				<div class="col-sm-6 col-md-6 col-lg-4">
    					<div class="map_main">
    						<img src={emailIcon}/>
    						<span class="londan_text">demo@gmail.com</span>
    					</div>
    				</div>
    			</div>
    		</div>
    		<div class="contact_product">
    			<div class="row">
    				<div class="col-sm-6 col-md-6 col-lg-2">
                                            <div class="footer-logo"><img src={footerLogo } style={{ maxWidth: "100%" }} /></div>
    				</div>
    				<div class="col-sm-6 col-md-6 col-lg-4">
    					<h1 class="useful_text">USEFUL LINK</h1>
    				<div class="menu">
    					<ul>
    						<li><a href="#home"><img src={bulitIcon}  style={{ paddingRight: "10px" }} />Home</a></li>
    						<li><a href="#about"><img src={bulitIcon}  style={{ paddingRight: "10px" }} />About</a></li>
    						<li><a href="#service"><img src={bulitIcon}  style={{ paddingRight: "10px" }} />Services</a></li>
    						<li><a href="#contact"><img src={bulitIcon}  style={{ paddingRight: "10px" }} />Contact Us</a></li>
    					</ul>
    				</div>	
    				</div>
    				<div class="col-sm-12 col-md-12 col-lg-6">
    					<h1 class="useful_text">PRODUCT</h1>
    					<div class="menu multi_column_menu">
    					   <ul>
    						  <li class="footer_menu"><a href="#"><img src={bulitIcon} class="footer_menu"/>Webhosting</a></li>
    						  <li class="footer_menu"><a href="#"><img src={bulitIcon} class="footer_menu"/>Reseler Hosting</a></li>
    						  <li class="footer_menu"><a href="#"><img src={bulitIcon} class="footer_menu"/>VPS Hosting</a></li>
    						  <li class="footer_menu"><a href="#"><img src={bulitIcon} class="footer_menu"/>Wordpress Hosting</a></li>
    						  <li class="footer_menu"><a href="#"><img src={bulitIcon} class="footer_menu"/>Dedicated hosting</a></li>
    						  <li class="footer_menu"><a href="#"><img src={bulitIcon} class="footer_menu"/>Windows</a></li>
    					   </ul>
    				    </div>
    				    <div class="input-group mb-3 margin-top-30">
                           <input type="text" class="form-control" placeholder="Enter you email"/>
                           <div class="input-group-append">
                              <button class="subsrcibe_bt" type="Subscribe"><a href="#">SUBSCRIBE</a></button>  
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
    						   <li><a href="#"><img src={fbIcon}/></a></li>
    						   <li><a href="#"><img src={twitterIcon}/></a></li>
    						   <li><a href="#"><img src={inIcon}/></a></li>
    						   <li><a href="#"><img src={googleIcon} /></a></li>
    					    </ul>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
    <div class="copyright_main">
    	<div class="container">
    		<p class="copy_text">© 2018 All Rights Reserved. <a href="https://html.design">Free Website Templates</a></p>
    	</div>
    </div>

        {/* contact end */}

        {/* return closing tag */}
      </div>
    );
    
}

export default Pages