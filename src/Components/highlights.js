import React from "react";
import "../Css/highlight.css";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import { useEffect } from "react";
import { useState } from "react";
import { translations } from "../Transalation/Transalation";
import { useSelector } from "react-redux";
function Highlights(props) {
  const {language} = useSelector((state)=>state.language)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update the window.innerWidth state when the resize event occurs
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
  return (
    <>
      <div className=" highlit">
        <div className="body-box">
          <div
            className={
              windowWidth < 500 ? "row pb-4" : "row mt-3 pb-4"
            }
          >
            <div className="col-12 ">
              <h1
                className="mainHeading"
                style={
                  windowWidth < 500
                    ? {
                        marginTop: "50px",
                      }
                    : {
                        display: "flex",
                        justifyContent: "center",
                      }
                }
              >
                {translations["Highlights"][language]}
              </h1>
            </div>
          </div>
          <div
            className="row justify-content-center overflow-hidden gap"
            style={windowWidth < 500?{gap:"25px"}:{ gap: "10px" }}
          >
            <div class="cardHighLight" style={windowWidth < 500?{ width: "85%" }:{ width: "24%" }}>
              <img src={card1} alt="" />
              <div class="overlay"></div>
              <div className="cardMain">
                <p className="cardHeaderHeading">{translations["EasYdata"][language]}</p>
                <p className="HigParagraphh cardinner">
                {translations["facilitatedTEXT"][language]}
                </p>
              </div>
              <div className="verticalTabGrid1">
                <div class="info">
                  <a href="#" class="updateBtn">
                    {translations["UpdatedData"][language]}
                  </a>
                </div>
              </div>
            </div>

            <div class="cardHighLight" style={windowWidth < 500?{ width: "85%" }:{ width: "24%" }}>
              <img src={card2} alt="" />
              <div class="overlay"></div>
              <div className="cardMain">
                <p className="cardHeaderHeading">{translations["Economies"][language]}</p>
                <p className="HigParagraphh cardinner">
                {translations["EconTEXT"][language]}
                </p>
              </div>
              <div className="verticalTabGrid1">
                <div class="info">
                  {/* <h1>Heading</h1> */}

                  <a href="#" class="updateBtn">
                  {translations["UpdatedData"][language]}
                  </a>
                </div>
              </div>
            </div>

            <div class="cardHighLight" style={windowWidth < 500?{ width: "85%" }:{ width: "24%" }}>
              <img src={card3} alt="" />
              <div class="overlay"></div>
              <div className="cardMain">
                <p className="cardHeaderHeading">
                {translations["iNVEstText"][language]}
                </p>
                <p className="HigParagraphh cardinner">
                  {" "}
                  {translations["LibiNVEstText"][language]}
                </p>
              </div>
              <div className="verticalTabGrid1">
                <div class="info">
                  {/* <h1>Heading</h1> */}

                  <a href="#" class="updateBtn">
                  {translations["UpdatedData"][language]}
                  </a>
                </div>
              </div>
            </div>
            <div class="cardHighLight" style={windowWidth < 500?{ width: "85%" }:{ width: "24%" }}>
              <img src={card4} alt="" />
              <div class="overlay"></div>
              <div className="cardMain">
                <p className="cardHeaderHeading"> {translations["EconomicZonesText"][language]}</p>
                <p className="HigParagraphh cardinner">
                {translations["blanketText"][language]}
                </p>
              </div>

              <div className="verticalTabGrid1">
                <div class="info">
                  <a href="#" class="updateBtn">
                  {translations["UpdatedData"][language]}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Highlights;
