import React from "react";
import "../Css/highlight.css";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import { useEffect } from "react";
import { useState } from "react";
function Highlights() {
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
                Highlights
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
                <p className="cardHeaderHeading">Ease of doing Business</p>
                <p className="HigParagraphh cardinner">
                  The focus of all reforms efforts is to facilitate Government
                </p>
              </div>
              <div className="verticalTabGrid1">
                <div class="info">
                  <a href="#" class="updateBtn">
                    Update
                  </a>
                </div>
              </div>
            </div>

            <div class="cardHighLight" style={windowWidth < 500?{ width: "85%" }:{ width: "24%" }}>
              <img src={card2} alt="" />
              <div class="overlay"></div>
              <div className="cardMain">
                <p className="cardHeaderHeading">Economy</p>
                <p className="HigParagraphh cardinner">
                  We are 24th Largest Economy
                </p>
              </div>
              <div className="verticalTabGrid1">
                <div class="info">
                  {/* <h1>Heading</h1> */}

                  <a href="#" class="updateBtn">
                    Update
                  </a>
                </div>
              </div>
            </div>

            <div class="cardHighLight" style={windowWidth < 500?{ width: "85%" }:{ width: "24%" }}>
              <img src={card3} alt="" />
              <div class="overlay"></div>
              <div className="cardMain">
                <p className="cardHeaderHeading">
                  Investment & Sector Policies
                </p>
                <p className="HigParagraphh cardinner">
                  {" "}
                  Sindh offers liberal Investment
                </p>
              </div>
              <div className="verticalTabGrid1">
                <div class="info">
                  {/* <h1>Heading</h1> */}

                  <a href="#" class="updateBtn">
                    Update
                  </a>
                </div>
              </div>
            </div>
            <div class="cardHighLight" style={windowWidth < 500?{ width: "85%" }:{ width: "24%" }}>
              <img src={card4} alt="" />
              <div class="overlay"></div>
              <div className="cardMain">
                <p className="cardHeaderHeading">Special Economic Zone</p>
                <p className="HigParagraphh cardinner">
                  Is a blanket term for various types of Specialized Zones
                </p>
              </div>

              <div className="verticalTabGrid1">
                <div class="info">
                  <a href="#" class="updateBtn">
                    Update
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
