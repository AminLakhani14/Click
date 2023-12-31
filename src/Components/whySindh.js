import React, { useEffect, useState } from "react";
import naturalgas from "../assets/natural-gas.png";
import mining from "../assets/mining.png";
import electricity from "../assets/electricity.png";
import bait from "../assets/bait.png";
import thread from "../assets/thread.png";
import cement from "../assets/cement.png";
import "../Css/header.css";
import { Link } from "react-router-dom";
function WhySindh() {
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
               Sindh at a Glance
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
                Favourable Environment, Strategic Location, Growing Economy,
                Natural Resources, Investment Opportunities, And Supportive
                Government Policies.
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
                    <h3 className="ch-title">1.3 Trillion </h3>
                    <p className="card-subtitle" style={windowWidth <500 ?{textAlign:"start"}:{}}>
                      Cubic Feet of Natural Gas Production
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
                    <h3 className="ch-title">184 Billion</h3>
                    <p className="card-subtitle" style={windowWidth <500 ?{textAlign:"start"}:{}}>Tonnes of Coal Reserves</p>
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
                    <h3 className="ch-title">10,000+ Megawatts</h3>
                    <p className="card-subtitle" style={windowWidth <500 ?{textAlign:"start"}:{}}>
                      Of Electricity Generation Capacity
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
                      Of Pakistan's Total Fish Production
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
                      Textile Mills with over 300,000 workers
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
                    <h3 className="ch-title">123 Million</h3>
                    <p className="card-subtitle" style={windowWidth <500 ?{textAlign:"start"}:{}}>Tonnes of Cement Production</p>
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
                    <span className="px-3">Explore Opportunities</span>
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
