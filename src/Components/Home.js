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
function Home() {
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
  return (
    <>
     {windowWidth <=500 ?<MobileHome />:
     <Header />
    }
    {windowWidth <=500 ?<MobileMarque />:""
    // <Marque />
   }
     <StatisticsBar />
     {windowWidth <=500 ?<MobileWheeler isVisible2={isVisible2} toggleVisibility={toggleVisibility} toggleVisibility2={toggleVisibility2}/>:
     <Wheeler />
    }
     <Highlights/>
     <WhySindh />
     {windowWidth <=500 ?<MobileMessage />:
     <Message />}
     {windowWidth <=500 ?<MobileTestimonial />:
     <Testimonial />}

     {windowWidth <=500 ?<MobileGallery />:
     <Gallery />}
     
     <Footer isVisible2={isVisible2}/>
    </>
  );
}
export default Home;
