import React, { useEffect, useState } from "react";
import Header from "./Header";
import GenericHeader from "./genericHeader";
import Highlight from "react-highlight";
import rate from "../assets/rate.png";
import userInterface from "../assets/user-interface.png";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { Popover, Steps } from "antd";
import "../Css/investnow.css";
import whySindh from "../assets/whysindhMain.png"
import "aos/dist/aos.css";
import MobileHeaderGeneric from "./MobileHeaderGeneric";

function NewsAndInformation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  let value = ">";
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
    {windowWidth <= 500 ? <MobileHeaderGeneric /> : <GenericHeader />}
    {windowWidth <= 500 ? <div></div> : <div></div>}

      <div
        style={{background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),url(${whySindh})`}}
        className="siteHeader"
      >
        <h1 data-aos="fade-up" className={"Investnow-h1"}>
          Abandoned Liaquatabad Super Market to be converted into shopping mall.
          <label className="NewsAndInformationDate">19/01/2022</label>
        </h1>
      </div>
      <div style={{ backgroundColor: "#f7f7f7" }}>
        <div
          className="row jcc"
          style={{ paddingTop: "100px", paddingBottom: "100px" }}
        >
          <div className="col-lg-5">
            <div className="newsAndInformationCard" data-aos="fade-up">
              <div className="NewsTitleImage"></div>
              <label className="NewsTitleHeading">News Title</label>
              <label className="NewsTitleDate">1/06/2023</label>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="newsAndInformationCard" data-aos="fade-up">
              <div className="NewsTitleImage"></div>
              <label className="NewsTitleHeading">News Title</label>
              <label className="NewsTitleDate">1/06/2023</label>
            </div>
          </div>
        </div>
        <div
          className="row jcc"
          style={{  paddingBottom: "100px" }}
        >
          <div className="col-lg-5">
            <div className="newsAndInformationCard" data-aos="fade-up">
              <div className="NewsTitleImage"></div>
              <label className="NewsTitleHeading">News Title</label>
              <label className="NewsTitleDate">1/06/2023</label>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="newsAndInformationCard" data-aos="fade-up">
              <div className="NewsTitleImage"></div>
              <label className="NewsTitleHeading">News Title</label>
              <label className="NewsTitleDate">1/06/2023</label>
            </div>
          </div>
        </div>
        <div
          className="row jcc"
          style={{  paddingBottom: "95px" }}
        >
          <div className="col-lg-5">
            <div className="newsAndInformationCard" data-aos="fade-up">
              <div className="NewsTitleImage"></div>
              <label className="NewsTitleHeading">News Title</label>
              <label className="NewsTitleDate">1/06/2023</label>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="newsAndInformationCard" data-aos="fade-up">
              <div className="NewsTitleImage"></div>
              <label className="NewsTitleHeading">News Title</label>
              <label className="NewsTitleDate">1/06/2023</label>
            </div>
          </div>
        </div>
        <div className="row">
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            paddingBottom:"100px"
          }}
        >
          <a href="comingsoon.html">
            <button type="button" className="InvestInSindhButton">
              <span style={{ width: "179px", height: "33px" }}>Learn More</span>
            </button>
          </a>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
export default NewsAndInformation;
