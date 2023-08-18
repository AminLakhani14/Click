import React, { useEffect, useState } from "react";
import naturalgas from "../assets/natural-gas.png";
import mining from "../assets/mining.png";
import electricity from "../assets/electricity.png";
import bait from "../assets/bait.png";
import thread from "../assets/thread.png";
import cement from "../assets/cement.png";
import "../Css/header.css";
import { Link } from "react-router-dom";
import { translations } from "../Transalation/Transalation";
function WhySindh(props) {
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
      <div
        className="shadow-sm bg-white mt-5 choice-card"
        style={windowWidth < 500?{ backgroundSize: "100%", height: "800px"}:{ backgroundSize: "100%", height: "495px" }}
      >
        <div className="body-box" style={{ marginTop: "-70px" }}>
          <div className="row ">
            <div className="col-12 ">
              <h1
                className="mainHeading"
                style={
                  windowWidth < 500
                    ? {}
                    : {
                        marginBottom: "6px",
                        display: "flex",
                        justifyContent: "center",
                      }
                }
              >
              {translations["sindhATglance"][props.language]}
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div
              className={
                windowWidth <= 500 ? "col-lg-8 " : "col-lg-8 ph-reason"
              }
            >
              <p
                className={"favorite"}
              >
                {translations["FavourEnvironment"][props.language]}
              </p>
            </div>
            <div className="col-lg-2"></div>
          </div>
          <div className="row mt-3">
            <div
              className={
                windowWidth <= 500
                  ? "col-lg-4 mb-2 "
                  : "col-lg-4 img-carsoul"
              }
            >
              {/* <!-- Bordered Card --> */}
              <div
                className=""
                style={{ border: "none", backgroundColor: "transparent" }}
              >
                <div
                  className="card-header cardWidth d-flex flex-row "
                  style={{ border: "none" }}
                >
                  <a className="pmd-avatar-list-img" href="javascript:void(0);">
                    <img src={naturalgas} width="60" height="60"></img>
                  </a>
                  <div className="media-body" style={{ width: "150px" }}>
                    <h3 className="ch-title">1.3 {translations["Trillion"][props.language]} </h3>
                    <p className="card-subtitle" style={windowWidth <500 ?{textAlign:"start"}:{}}>
                    {translations["NaturalGas"][props.language]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                windowWidth <= 500
                  ? "col-lg-4 mb-2 "
                  : "col-lg-4 img-carsoul"
              }
            >
              {/* <!-- Bordered Card --> */}
              <div
                className=""
                style={{ border: "none", backgroundColor: "transparent" }}
              >
                <div
                  className="card-header cardWidth d-flex flex-row "
                  style={{ border: "none" }}
                >
                  <a className="pmd-avatar-list-img" href="javascript:void(0);">
                    <img src={mining} width="60" height="60"></img>
                  </a>
                  <div className="media-body" style={{ width: "150px" }}>
                    <h3 className="ch-title">184 {translations["Billion"][props.language]}</h3>
                    <p className="card-subtitle" style={windowWidth <500 ?{textAlign:"start"}:{}}>
                      {translations["TonOfCoal"][props.language]}</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                windowWidth <= 500
                  ? "col-lg-4 mb-2 "
                  : "col-lg-4 img-carsoul"
              }
            >
              {/* <!-- Bordered Card --> */}
              <div
                className=""
                style={{ border: "none", backgroundColor: "transparent" }}
              >
                <div
                  className="card-header cardWidth d-flex flex-row "
                  style={{ border: "none" }}
                >
                  <a className="pmd-avatar-list-img" href="javascript:void(0);">
                    <img src={electricity} width="60" height="60"></img>
                  </a>
                  <div className="media-body" style={{ width: "150px" }}>
                    <h3 className="ch-title">10,000+ {translations["Megawatts"][props.language]}</h3>
                    <p className="card-subtitle" style={windowWidth <500 ?{textAlign:"start"}:{}}>
                    {translations["ElectricityGeneration"][props.language]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={windowWidth <=500?"row mt-1":"row mt-5"}>
            <div
              className={
                windowWidth <= 500
                  ? "col-lg-4 mb-2 "
                  : "col-lg-4 img-carsoul"
              }
            >
              {/* <!-- Bordered Card --> */}
              <div
                className=""
                style={{ border: "none", backgroundColor: "transparent" }}
              >
                <div
                  className="card-header cardWidth d-flex flex-row "
                  style={{ border: "none" }}
                >
                  <a className="pmd-avatar-list-img" href="javascript:void(0);">
                    <img src={bait} width="60" height="60"></img>
                  </a>
                  <div className="media-body" style={{ width: "150px" }}>
                    <h3 className="ch-title">70% </h3>
                    <p className="card-subtitle" style={windowWidth <500 ?{textAlign:"start"}:{}}>
                    {translations["TotalFish"][props.language]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                windowWidth <= 500
                  ? "col-lg-4 mb-2 "
                  : "col-lg-4 img-carsoul"
              }
            >
              {/* <!-- Bordered Card --> */}
              <div
                className=""
                style={{ border: "none", backgroundColor: "transparent" }}
              >
                <div
                  className="card-header  cardWidth d-flex flex-row "
                  style={{ border: "none" }}
                >
                  <a className="pmd-avatar-list-img" href="javascript:void(0);">
                    <img src={thread} width="60" height="60"></img>
                  </a>
                  <div className="media-body" style={{ width: "150px" }}>
                    <h3 className="ch-title">600+</h3>
                    <p className="card-subtitle" style={windowWidth <500 ?{textAlign:"start"}:{}}>
                    {translations["TextileMills"][props.language]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                windowWidth <= 500
                  ? "col-lg-4 mb-2 "
                  : "col-lg-4 img-carsoul"
              }
            >
              <div
                className=""
                style={{ border: "none", backgroundColor: "transparent" }}
              >
                <div
                  className="card-header cardWidth d-flex flex-row "
                  style={{ border: "none" }}
                >
                  <a className="pmd-avatar-list-img" href="javascript:void(0);">
                    <img src={cement} width="60" height="60"></img>
                  </a>
                  <div className="media-body" style={{ width: "150px" }}>
                    <h3 className="ch-title">123 {translations["Million"][props.language]}</h3>
                    <p className="card-subtitle" style={windowWidth <500 ?{textAlign:"start"}:{}}>
                       {translations["TonOfCement"][props.language]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-12 d-flex justify-content-center mt-4">
              <a href="comingsoon.html">
                <Link to={"/Opportunity"}>
                  <button
                    style={{ width: "auto" }}
                    type="button"
                    className="InvestInSindhButton"
                  >
                    <span className="px-3">{translations["Explore"][props.language]}</span>
                  </button>
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default WhySindh;
