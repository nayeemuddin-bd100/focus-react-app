import icon1 from "../../assets/images/icon-1.png";
import icon2 from "../../assets/images/icon-2.png";
import icon3 from "../../assets/images/icon-3.png";
import icon4 from "../../assets/images/icon-4.png";
import icon5 from "../../assets/images/icon-5.png";
import icon6 from "../../assets/images/icon-6.png";
import ReadMoreBtn from "../choose/readmoreBtn";
import ServiceItem from "./item";

function Services() {

    return (
      <div>
        {/* Services Title */}
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
        {/* **************** */}

        <div class="choose_section_2">
          <div class="container">
            <div class="row">
              <div class="col-sm-4">



                <ServiceItem
                  className="about_inner"
                  icon={icon1}
                  heading="Shared Hosting"
                  text=" Donec nec justo eget felis facilisis fermentum. Aliquam
                   porttitor mauris sit amet orci."
                />
              </div>

              <div class="col-sm-4">
                <ServiceItem
                  className="dedicated"
                  icon={icon2}
                  heading="Dedicated Hosting"
                  text=" Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet orci."
                />
              </div>

              
              <div class="col-sm-4">
                <ServiceItem
                  className="about_inner"
                  icon={icon3}
                  heading="Domain Registration"
                  text=" Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet orci."
                />
              </div>
            </div>
          </div>
        </div>

        <div class="choose_section_2">
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <ServiceItem
                  className="about_inner"
                  icon={icon4}
                  heading="Domain Registration"
                  text=" Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet orci."
                />
                
              </div>
              <div class="col-sm-4">
                <ServiceItem
                  className="about_inner"
                  icon={icon5}
                  heading="Domain Registration"
                  text=" Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet orci."
                />
              
              </div>
              <div class="col-sm-4">
                <ServiceItem
                  className="about_inner"
                  icon={icon6}
                  heading="Domain Registration"
                  text=" Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet orci."
                />
               
              </div>
            </div>
            
            <ReadMoreBtn />
          </div>
        </div>
      </div>
    );
    
}
export default Services;