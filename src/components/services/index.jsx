import icon1 from "../../assets/images/icon-1.png";
import icon2 from "../../assets/images/icon-2.png";
import icon3 from "../../assets/images/icon-3.png";
import icon4 from "../../assets/images/icon-4.png";
import icon5 from "../../assets/images/icon-5.png";
import icon6 from "../../assets/images/icon-6.png";

function Services() {

    return (
      <div>
        <div id="service" class="choose_section">
          <div class="container">
            <div class="col-sm-12">
              <h1 class="choose_text">
                Our<span class="color"> Service</span>
              </h1>
              <p class="lorem_text">
                Lorem ipsum dolor sittem ametamngcing elit, per sed do eiusmoad
                teimpor sittem elit inuning ut sed.
              </p>
            </div>
          </div>
        </div>
        <div class="choose_section_2">
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <div class="about_inner">
                  <div class="icon">
                    <a href="#">
                      <img src={icon1} />
                    </a>
                  </div>
                  <h2 class="totaly_text">Shared Hosting</h2>
                  <p class="making">
                    Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet orci.
                  </p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="dedicated">
                  <div class="icon">
                    <a href="#">
                      <img src={icon2} />
                    </a>
                  </div>
                  <h2 class="hosting_text">Dedicated Hosting</h2>
                  <p class="justo_text">
                    Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet orci.
                  </p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="about_inner">
                  <div class="icon">
                    <a href="#">
                      <img src={icon3} />
                    </a>
                  </div>
                  <h2 class="totaly_text">Domain Registration</h2>
                  <p class="making">
                    Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet orci.
                  </p>
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
                  <div class="icon">
                    <a href="#">
                      <img src={icon4} />
                    </a>
                  </div>
                  <h2 class="totaly_text">Shared Hosting</h2>
                  <p class="making">
                    Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet orci.
                  </p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="about_inner">
                  <div class="icon">
                    <a href="#">
                      <img src={icon5} />
                    </a>
                  </div>
                  <h2 class="totaly_text">Dedicated Hosting</h2>
                  <p class="making">
                    Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet orci.
                  </p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="about_inner">
                  <div class="icon">
                    <a href="#">
                      <img src={icon6} />
                    </a>
                  </div>
                  <h2 class="totaly_text">Domain Registration</h2>
                  <p class="making">
                    Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet orci.
                  </p>
                </div>
              </div>
            </div>
            <div class="bt_main">
              <button class="read_more">
                <a href="#">Read More</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
    
}
export default Services;