import img1 from "../../assets/images/img-1.png";
import rightAerow from "../../assets/images/right-aerow.png";


function About() {
    return (
      <div>
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
      </div>
    );
}

export default About;