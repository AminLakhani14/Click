import React, { useState } from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import Highlight from "react-highlight";
import "../Css/wheeler.css";
import userInterface from "../assets/user-interface.png";
import rate from "../assets/rate.png";
import calculator from "../assets/calculator.png";
import { useEffect } from "react";
import { useRef } from "react";
import world from "../assets/world.jpg";
import { translations } from "../Transalation/Transalation";
import { useSelector } from "react-redux";

function MobileGallery(props) {
  const {language} = useSelector((state)=>state.language)

  const carouselRef = useRef(null);
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
  useEffect(() => {
    if (!carouselRef.current) {
      console.error("Parent container element not found.");
      return;
    }

    // Render the Carousel component or perform any other necessary actions
    // once the parent container element exists.
  }, []);
    const [languageChangeKey, setLanguageChangeKey] = useState(0); // Track language change

  useEffect(() => {
    // Update the key to trigger a re-render
    setLanguageChangeKey(languageChangeKey + 1);
  }, [language]);  // Listen for changes in language

  return (
    <>
      <div className=" bg-help" style={{height:"460px"}}>
        <div className="body-box">
          <div className="row mt-4 mb-3">
            <div className="col-12 -">
              <h1
                style={{
                  color: "#054a91",
                  fontWeight: "700",
                  fontFamily: "Crimson Pro !important",
                  fontSize: "30px",
                  marginLeft: "25px",
                }}
              >
                {translations["Help"][language]}
              </h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-8 pe-0 ps-0"
              id="carouselContainer"
              ref={carouselRef}
            >
              <Carousel
              key={languageChangeKey} 
                show={1}
                slide={1}
                swiping={false} 
                responsive={windowWidth >= 1900 ? false : ""}
                leftArrow={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "150px",
                      width: "65px",
                    }}
                  >
                    <i id="left" className="fa-solid fa-angle-left"></i>
                  </div>
                }
                rightArrow={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "150px",
                      width: "65px",
                    }}
                  >
                    <i id="right" className="fa-solid fa-angle-right"></i>
                  </div>
                }
              >
                 <div style={{marginRight:"10px"}}>
                <div>
                  {" "}
                  <li className="card">
                    <div className="img">
                      <img
                        src={world}
                        alt="img"
                        draggable="false"
                      ></img>
                    </div>
                    <p className="card__name">{translations["BREADY"][language]}</p>
                  </li>
                </div>
                </div>
                <div style={{ marginRight: "10px" }}>
                  <div>
                    {" "}
                    <li className="mobilecard">
                      <div className="img">
                        <img
                          src={userInterface}
                          alt="img"
                          draggable="false"
                        ></img>
                      </div>
                      <p className="mobilecard__name">{translations["RequestInformation"][language]}</p>
                    </li>
                  </div>
                </div>
                <div style={{ marginRight: "10px" }}>
                  <div>
                    {" "}
                    <li className="mobilecard">
                      <div className="img">
                        <img src={rate} alt="img" draggable="false"></img>
                      </div>
                      <p className="mobilecard__name">{translations["Feedback"][language]}</p>
                    </li>
                    ‍
                  </div>
                </div>
                <div style={{ marginRight: "10px" }}>
                  <div>
                    {" "}
                    <li className="mobilecard">
                      <div className="img">
                        <img src={calculator} alt="img" draggable="false"></img>
                      </div>
                      <p className="card__name" style={{marginBottom: "-28px"}}>
                    {translations["RegulatoryCost"][language]} <br /> {translations["Calculator"][language]}
                    </p>
                    </li>
                  </div>
                </div>
                {/*Karachi fund*/}
                <div style={{ marginRight: "10px" }}>
                  <div>
                    {" "}
                    <li className="mobilecard">
                      <div className="img">
                        <img
                          src={userInterface}
                          alt="img"
                          draggable="false"
                        ></img>
                      </div>
                      <p className="mobilecard__name">{translations["KarachiFund"][language]}</p>
                    </li>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MobileGallery;
