import React, { useEffect, useState } from "react";
import Header from "./Header";
import Marque from './marque';
import StatisticsBar from "./statisticsBar";
import Wheeler from "./wheeler";
import Highlights from "./highlights";
import WhySindh from "./whySindh";
import Message from "./message";
import Testimonial from "./testimonial";
import Gallery from "./Gallery";
import Footer from "./footer";
import MobileHome from "./MobileHeader";
import MobileMarque from "./MobileMarque";
import MobileWheeler from "./MobileWheeler";
import MobileMessage from "./MobileMessage";
import MobileTestimonial from "./MobileTestimonial";
import MobileGallery from "./MobileGallery";
function Home(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update the windowWidth state when the resize event occurs
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [isVisible2, setIsVisible2] = useState(true);

  const toggleVisibility = () => {
    setIsVisible2(true);
  };

  const toggleVisibility2 = () => {
    setIsVisible2(false);
  };

  const [language, setLanguage] = useState('en');

  // Function to toggle language between English, Urdu, and Sindhi
  const toggleLanguage = () => {
    if (language === 'en') {
      setLanguage('ur');
    } else if (language === 'ur') {
      setLanguage('sd');
    } else {
      setLanguage('en');
      
    }
  };
    // setIsUrdu((prevIsUrdu) => !prevIsUrdu);
  

  // Object containing English and Urdu  
  return (
    <>
     {windowWidth <=500 ?<MobileHome language={language} setLanguage={setLanguage} toggleLanguage={toggleLanguage} />:
     <Header  language={language} setLanguage={setLanguage} toggleLanguage={toggleLanguage}/>
    }
    {windowWidth <=500 ?<MobileMarque language={language} setLanguage={setLanguage} toggleLanguage={toggleLanguage}/>:""
    // <Marque />
   }
     <StatisticsBar language={language} setLanguage={setLanguage} />
     {windowWidth <=500 ?<MobileWheeler isVisible2={isVisible2} toggleVisibility={toggleVisibility} toggleVisibility2={toggleVisibility2}/>:
     <Wheeler language={language} setLanguage={setLanguage}  isVisible2={isVisible2} toggleVisibility={toggleVisibility} toggleVisibility2={toggleVisibility2}/>
    }
     <Highlights language={language} setLanguage={setLanguage}/>
     <WhySindh  language={language} setLanguage={setLanguage}/>
     {windowWidth <=500 ?<MobileMessage />:
     <Message language={language} setLanguage={setLanguage}/>}
     {windowWidth <=500 ?<MobileTestimonial />:
     <Testimonial language={language} setLanguage={setLanguage}/>}

     {windowWidth <=500 ?<MobileGallery />:
     <Gallery language={language} setLanguage={setLanguage}/>}
     
     <Footer isVisible2={isVisible2} language={language} setLanguage={setLanguage}/>
    </>
  );
}
export default Home;
