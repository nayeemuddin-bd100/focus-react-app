import woofer from "../../assets/images/woofer.png";

function Banner() {
    return (
      <div>
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
                    fermentum. Aliquam porttitor mauris sit amet orci. Aenean
                    dignissim pellentesque felis.
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
    );
}

export default Banner;