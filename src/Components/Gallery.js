import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import Highlight from "react-highlight";
import "../Css/wheeler.css";
import computer from "../assets/computer.svg";
import world from "../assets/world.jpg";
import feedback from "../assets/feedback.svg";
import growths from "../assets/growths.png";
import calculators from "../assets/calculators.svg";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";

function Gallery() {
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
  return (
    <>
      <div className=" bg-help">
        <div className="body-box">
          <div className="row">
            <div className="col-12 highlit-heading pb-5">
              <h1 className="mainHeading"  data-aos="fade-up" >How we Help</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className={windowWidth <=1440?"col-lg-9 pe-0 ps-0":"col-lg-8 pe-0 ps-0"}>
              <Carousel
                show={windowWidth <=500?1:3}
                // slide={windowWidth <=500?1:3}
                swiping={true}
                infinite={true}
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
                    <p className="card__name">B-READY</p>
                  </li>
                </div>
                </div>
                <div style={{marginRight:"10px"}}>
                <div>
                  {" "}
                  <li className="card">
                    <div className="img" style={{width:"100px"}}>
                      <img
                        src={computer}
                        alt="img"
                        style={{width:"92px",
                        height:"74px"
                      }}
                        draggable="false"
                      ></img>
                    </div>
                    <p className="card__name" style={{marginBottom: "18px"}}>Request Information</p>
                  </li>
                </div>
                </div>
                <div style={{marginRight:"10px"}}>
                <div>
                  {" "}
                  <li className="card">
                    <div className="img">
                      <img src={feedback} alt="img" draggable="false" style={{width:"67px"}}></img>
                    </div>
                    <p className="card__name">Feedback</p>
                  </li>
                  ‍
                </div>
                </div>
                <div style={{marginRight:"10px"}}>
                <div>
                  {" "}
                  <li className="card">
                    <div className="img">
                      <img src={calculators} alt="img" draggable="false" style={{width:"67px"}}></img>
                    </div>
                    <p className="card__name" style={{marginBottom: "-28px"}}>
                      Regulatory Cost <br /> Calculator
                    </p>
                  </li>
                </div>
                </div>
                   {/*Karachi fund*/}
                <div style={{marginRight:"10px"}}>
                <div>
                  {" "}
                  <li className="card">
                    <div className="img">
                      <img
                        src={growths}
                        alt="img"
                        draggable="false"
                      ></img>
                    </div>
                    <p className="card__name">Karachi Fund</p>
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
export default Gallery;
