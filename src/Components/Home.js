import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
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
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../Redux/Reducer/languageSlice";
function Home(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch()
  //  const isNewsletterModalOpen=useSelector((state)=>state.NewsLetterModal)
  const { language, isNewsletterModalOpen } = useSelector((state) => state.language)
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



  // Function to toggle language between English, Urdu, and Sindhi
  const toggleLanguage = () => {
    if (language == 'ur') {
      dispatch(setLanguage('en'));
    } else {
      dispatch(setLanguage('ur'));
    }

  };

  const SindhitoggleLanguage = () => {
    if (language == 'sd') {
      dispatch(setLanguage('en'));
    } else {
      dispatch(setLanguage('sd'));
    }

  };


  return (
    <>
      {windowWidth <= 500 ? <MobileHome SindhitoggleLanguage={SindhitoggleLanguage} toggleLanguage={toggleLanguage} /> :
        <Header SindhitoggleLanguage={SindhitoggleLanguage} toggleLanguage={toggleLanguage} />
      }
      {/* {
      isNewsletterModalOpen && <NewsLetterModal/>
    } */}
      {windowWidth <= 500 ? <MobileMarque toggleLanguage={toggleLanguage} /> : ""
        // <Marque />
      }
      <StatisticsBar />
      {windowWidth <= 500 ? <MobileWheeler isVisible2={isVisible2} toggleVisibility={toggleVisibility} toggleVisibility2={toggleVisibility2} /> :
        <Wheeler isVisible2={isVisible2} toggleVisibility={toggleVisibility} toggleVisibility2={toggleVisibility2} />
      }
      <Highlights />
      <WhySindh />
      {windowWidth <= 500 ? <MobileMessage /> :
        <Message />}
      {windowWidth <= 500 ? <MobileTestimonial /> :
        <Testimonial />}

      {windowWidth <= 500 ? <MobileGallery /> :
        <Gallery />}

      <Footer isVisible2={isVisible2} />
    </>
  );
}
export default Home;
