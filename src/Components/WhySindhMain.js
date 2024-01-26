import React, { useEffect, useState } from "react";
import GenericHeader from "./genericHeader";
import Footer from "./footer";
import { Link } from "react-router-dom";
import "../Css/investnow.css";
import whySindh from "../assets/whysindhMain.png";
import GateWayImage from "../assets/GROWTH.png";
import EconomicPowerHouse from "../assets/EconomicPowerHouse.png";
import buildingBridge from "../assets/buildingBridge.png";
import diverseHorizon from "../assets/diverseHorizon.png";
import MobileHeaderGeneric from "./MobileHeaderGeneric";
import { useSelector } from "react-redux";
import { translations } from "../Transalation/Transalation";
function WhySindhMain() {
  const { language } = useSelector((state) => state.language)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    // Restore scroll restoration to its default behavior
    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  let value = ">";
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

      <div style={{ background: `url(${whySindh})` }} className="siteHeader">
        <h1 data-aos="fade-up" className="Investnow-h1 highlightable">

          {translations["WhySindh"][language]}
        </h1>
      </div>
      <div className="row breadCrumb">
        <Link
          to={"/home"}
          style={{ color: "#720D1D", fontSize: "30px", textDecoration: "none" }}
        >
          <div>
            <h5
              style={{ display: "contents", color: "black", fontSize: "30px" }}
            >
              Home {value}
            </h5>
            Why Sindh
          </div>
        </Link>
      </div>
      <div
        className="row"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "35px",
        }}
      >
        <h1 data-aos="fade-up"
          className={
            windowWidth < 500
              ? "mobilemainHeading"
              : "mainHeading highlightable"
          }
        >
          {translations["DAOS"][language]}
        </h1>
        <div
          className="col-lg-10"
          style={{
            display: "flex",
            justifyContent: "left",
            textAlign: "left",
          }}
        >
          <p data-aos="fade-up"
            className={
              windowWidth < 500
                ? "mobilePara"
                : "InvestnowParagraphh highlightable"
            }
          >

            {translations["WhySind1stpara"][language]}
          </p>
        </div>
      </div>
      <div className="row my-5" style={{ justifyContent: "center" }}>
        <div data-aos="fade-down-right"
          className={
            windowWidth < 500
              ? "descriptionImage"
              : "col-lg-9 descriptionImage"}
          style={{ background: `url(${GateWayImage})` }}
        >
          <label className={"agriAndFoodHeading highlightable"}
            data-aos="fade-up"
          >
            {translations["GatewayToGrowth"][language]}
          </label>
        </div>
      </div>
      <div className="dotsImage"></div>
      <div
        className="row"
        style={{ justifyContent: "center", marginTop: "-230px" }}
      >
        <div className="col-lg-5">
          <label
            className={"f-size highlightable"}
            data-aos="fade-up"
          >
            {translations["WhySindh2ndpara"][language]}
          </label>
        </div>
      </div>
      <div className="row mt-5">
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <a href="comingsoon.html">
            <button type="button" className="InvestInSindhButton">
              <span style={{ width: "179px", height: "33px" }}>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  className={""}
                  to={"/gateway"}
                >
                  <span style={{ textDecoration: "none", color: "white" }}>
                    {translations['LearnMore'][language]}
                  </span>
                </Link>
              </span>
            </button>
          </a>
        </div>
      </div>
      <div className="row my-5" style={{ justifyContent: "center" }}>
        <div data-aos="fade-down-right"
          className={
            windowWidth < 500
              ? "descriptionImage"
              : "col-lg-9 descriptionImage"}
          style={{ background: `url(${EconomicPowerHouse})` }}
        >
          <label
            className={"agriAndFoodHeading highlightable"}
            data-aos="fade-up"
          >
            {translations["EconomicPowerhouse"][language]}
          </label>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <div className="dotsPoultry"></div>
      </div>
      <div
        className="row"
        style={{ justifyContent: "center", marginTop: "-230px" }}
      >
        <div className="col-lg-5">
          <label
            className={"f-size highlightable"}
            data-aos="fade-up"
          >
            {translations['WhySindh3rdpara'][language]}
          </label>
        </div>
      </div>
      <div className="row mt-5">
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <a href="comingsoon.html">
            <button type="button" className="InvestInSindhButton">
              <span style={{ width: "179px", height: "33px" }}>
                {" "}
                <Link
                  style={{ textDecoration: "none" }}
                  className={""}
                  to={"/economicP"}
                >
                  <span style={{ textDecoration: "none", color: "white" }}>
                    {" "}
                    {translations['LearnMore'][language]}
                  </span>
                </Link>
              </span>
            </button>
          </a>
        </div>
      </div>
      <div className="row my-5" style={{ justifyContent: "center" }}>
        <div

          className={
            windowWidth < 500
              ? "descriptionImage"
              : "col-lg-9 descriptionImage"}
          data-aos="fade-down-right"
          style={{ background: `url(${buildingBridge})` }}
        >
          <label
            className={"agriAndFoodHeading highlightable"}
            data-aos="fade-up"
          >
            {translations["BuildingBridgestoS"][language]}
          </label>
        </div>
      </div>
      <div className="dotsImage"></div>
      <div
        className="row"
        style={{ justifyContent: "center", marginTop: "-230px" }}
      >
        <div className="col-lg-5">
          <label
            className={"f-size highlightable"}
            data-aos="fade-up">
            {translations["WhySindh4thpara"][language]}
          </label>
        </div>
      </div>
      <div className="row mt-5">
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <a href="comingsoon.html">
            <button type="button" className="InvestInSindhButton">
              <span style={{ width: "179px", height: "33px" }}>
                <Link
                  style={{ textDecoration: "none" }}
                  className={""}
                  to={"/buildingbridges"}
                >
                  <span style={{ textDecoration: "none", color: "white" }}>
                    {translations['LearnMore'][language]}
                  </span>
                </Link>
              </span>
            </button>
          </a>
        </div>
      </div>
      <div className="row my-5" style={{ justifyContent: "center" }}>
        <div
          className={
            windowWidth < 500
              ? "descriptionImage"
              : "col-lg-9 descriptionImage"}
          data-aos="fade-down-right"
          style={{ background: `url(${diverseHorizon})` }}
        >
          <label
            className="agriAndFoodHeading highlightable" data-aos="fade-up"
          >
            {translations["DiverseHorizons"][language]}
          </label>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <div className="dotsPoultry"></div>
      </div>
      <div
        className="row"
        style={{ justifyContent: "center", marginTop: "-230px" }}
      >
        <div className="col-lg-5">
          <label
            className="f-size highlightable" data-aos="fade-up"
          >
            {translations["WhySindh5thpara"][language]}
          </label>
        </div>
      </div>
      <div className="row mt-5" style={{ marginBottom: "65px" }}>
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <a href="comingsoon.html">
            <button type="button" className="InvestInSindhButton">
              <Link
                style={{ textDecoration: "none" }}
                className={""}
                to={"/diversehorizon"}
              >
                <span style={{ textDecoration: "none", color: "white" }}>
                  {" "}
                  {translations['LearnMore'][language]}
                </span>
              </Link>
            </button>
          </a>
        </div>
      </div>
      <div className="seizeOpportunity">
        <h1 data-aos="fade-up"
          className={
            windowWidth < 500
              ? "mobilemainHeading"
              : "mainHeading highlightable"
          }
        >
          {translations['SeizeTheOpportunity'][language]}
        </h1>
        <div
          className="mt-2"
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <a href="comingsoon.html">
            <button type="button" className={language === "en" ? "InvestInSindhButton" : "InvestinSindhbuttonforUrduandSindhi"}>
              <span style={{ width: "179px", height: "33px" }}>
                {translations['InvestSindh'][language]}
              </span>
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default WhySindhMain;
