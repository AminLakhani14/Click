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
import { useSelector } from "react-redux";
function WhySindh(props) {
  const {language} = useSelector((state)=>state.language)

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
        style={windowWidth < 500?{ backgroundSize: "100%  ", height: "750px"}:{ backgroundSize: "100%", height: "495px" }}
      >
        <div className="body-box" style={windowWidth <500 ?{ marginTop: "-33px" }:{ marginTop: "-70px" }}>
          <div className="row ">
            <div className="col-12 ">
              <h1
                className="mainHeading highlightable"
                style={
                  windowWidth < 500
                    ? {
                      fontSize:25
                    }
                    : {
                        marginBottom: "6px",
                        display: "flex",
                        justifyContent: "center",
                      }
                }
              >
              {translations["sindhATglance"][language]}
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
                className={["favorite highlightable",windowWidth<500 ?"mob_favorite":{}].join(" ")}
              >
                {translations["FavourEnvironment"][language]}
              </p>
            </div>
            <div className="col-lg-2"></div>
          </div>
          <div className={["row mt-5 ",windowWidth <500 ? "home_resource_1":{}].join(" ")} >
            <div
              className={
                windowWidth <= 500
                  ? "col-lg-4 mb-2  "
                  : "col-lg-4 img-carsoul"
              }
             
            >
              {/* <!-- Bordered Card --> */}
              <div
                // className="home_resource"
                style={{ border: "none", backgroundColor: "transparent" }}
              >
                <div
                  className="card-header cardWidth  d-flex flex-row "
                  style={windowWidth< 500? {marginTop:"20px"}:{ border: "none" ,}}
                >
                  <a className="pmd-avatar-list-img" href="javascript:void(0);">
                    <img src={naturalgas} 
                    style={windowWidth<500 ? {width:"40px",height:"40px"}:{width:"60px",height:"60pxb"}} ></img>
                  </a>
                  <div className="media-body" style={{ width: "150px" }}>
                    <h3 className={["ch-title",windowWidth<500&&"mob_ch_title"].join(" ")} >1.3 {translations["Trillion"][language]} </h3>
                    <p className="card-subtitle highlightable" style={windowWidth <500 ?{textAlign:"start",fontSize:"10px"}:{}}>
                    {translations["NaturalGas"][language]}
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
                    <img src={mining} style={windowWidth<500 ? {width:"40px",height:"40px"}:{width:"60px",height:"60pxb"}}></img>
                  </a>
                  <div className="media-body" style={{ width: "150px" }}>
                    <h3 className={["ch-title",windowWidth<500?"mob_ch_title":''].join(" ")}>184 {translations["Billion"][language]}</h3>
                    <p className="card-subtitle highlightable" style={windowWidth <500 ?{textAlign:"start",fontSize:"10px"}:{}}>
                      {translations["TonOfCoal"][language]}</p>
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
                    <img src={electricity} style={windowWidth<500 ? {width:"40px",height:"40px"}:{width:"60px",height:"60pxb"}}></img>
                  </a>
                  <div className="media-body" style={{ width: "150px" }}>
                    <h3 className={["ch-title",windowWidth<500?"mob_ch_title":''].join(" ")}>10,000+ {translations["Megawatts"][language]}</h3>
                    <p className="card-subtitle highlightable" style={windowWidth <500 ?{textAlign:"start",fontSize:"10px"}:{}}>
                    {translations["ElectricityGeneration"][language]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={windowWidth <=500?"row  home_resource ":"row mt-5"}>
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
                    <img src={bait} style={windowWidth<500 ? {width:"40px",height:"40px"}:{width:"60px",height:"60pxb"}}></img>
                  </a>
                  <div className="media-body" style={{ width: "150px" }}>
                    <h3 className={["ch-title",windowWidth<500?"mob_ch_title":''].join(" ")}>70% </h3>
                    <p className="card-subtitle highlightable" style={windowWidth <500 ?{textAlign:"start",fontSize:"10px"}:{}}>
                    {translations["TotalFish"][language]}
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
                    <img src={thread} style={windowWidth<500 ? {width:"40px",height:"40px"}:{width:"60px",height:"60pxb"}}></img>
                  </a>
                  <div className="media-body" style={{ width: "150px" }}>
                    <h3 className={["ch-title",windowWidth<500?"mob_ch_title":""].join(" ")}>600+</h3>
                    <p className="card-subtitle highlightable" style={windowWidth <500 ?{textAlign:"start",fontSize:"10px"}:{}}>
                    {translations["TextileMills"][language]}
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
                    <img src={cement} style={windowWidth<500 ? {width:"40px",height:"40px"}:{width:"60px",height:"60pxb"}}></img>
                  </a>
                  <div className="media-body" style={{ width: "150px" }}>
                    <h3 className={["ch-title",windowWidth<500?"mob_ch_title":""].join(" ")}>123 {translations["Million"][language]}</h3>
                    <p className="card-subtitle highlightable" style={windowWidth <500 ?{textAlign:"start",fontSize:"10px"}:{}}>
                       {translations["TonOfCement"][language]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row " >
            <div className="col-lg-12 d-flex justify-content-center mt-4" >
              <a href="comingsoon.html">
                <Link to={"/Opportunity"}>
                  <button
                    style={windowWidth < 500 ?{fontSize:"16px",width:"100%",
                    height:"32px",
                    // marginTop:"-20px"
                  
                  }:{ width: "auto" }}
                    type="button"
                    className="InvestInSindhButton"
                  >
                    <span className="px-3">{translations["Explore"][language]}</span>
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
