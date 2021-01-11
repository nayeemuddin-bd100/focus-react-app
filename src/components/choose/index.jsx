import optimisedIcon from "../../assets/images/optimised-icon.png";
import powerFullIcon from "../../assets/images/power-full-icon.png";
import Item from "./item";
import ReadMoreBtn from "./readmoreBtn";

function Choose() {
    
    return (
      <div>
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
                <Item
                  bodyClass="power_full"
                  headline="Powerfull Feature"
                  img={powerFullIcon}
                  text="making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum
                    as their default model text, and a search for lorem ipsum
                    will uncover many web sites still "
                />
                <ReadMoreBtn />
              </div>

              <div className="col-sm-4">
                <Item
                  bodyClass="power"
                  img={optimisedIcon}
                  headline="Totaly Optimised"
                  text=" making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum
                    as their default model text, and a search for lorem ipsum
                    will uncover many web sites still"
                />
                <ReadMoreBtn />
              </div>

              <div className="col-sm-4">
                <Item
                  bodyClass="power"
                  img={optimisedIcon}
                  headline="Worldwide Support"
                  text=" making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum
                    as their default model text, and a search for lorem ipsum
                    will uncover many web sites still"
                />
                <ReadMoreBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Choose;