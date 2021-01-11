
//Components

import About from '../components/about';
import Banner from '../components/banner';
import Choose from '../components/choose';
import Contact from '../components/contact';
import Nav from '../components/nav';
import Services from '../components/services';


function Pages() {
    return (
      <div>
        <header id="home" className="section">
          <div className="header_main">
            {/* header inner */}
            <Nav/>
            {/* End header inner  */}

            
            {/* Banner Start */}
            <Banner/>    
          </div>
        </header>
        {/* banner end */}

        {/* choose start  */}
        <Choose />


        {/* about start  */}
        <About />


        {/* service start */}
        <Services />    
    

        {/* contact start */}
        <Contact />

      </div>
    );
    
}

export default Pages