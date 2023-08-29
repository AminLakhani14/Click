import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import accessibility from "../assets/accessibility.png";
import "../Css/header.css";
import sindh from "../assets/logo-sindh.png";
import pak from "../assets/pak.png";
import urdu from "../assets/urdu.png";
import "../Css/resource.css";
import click from "../assets/click-logo.png";
import cardImage from "../assets/cardresource1.png";
import businesscard1 from "../assets/businesscard1.jpg";
import ListofLegalDocuments from "../assets/ListofLegalDocumentsSBOSS.pdf";
import GenericHeader from "./genericHeader";
import { green } from "@mui/material/colors";
export default function Resource() {
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
      <Link to={"/team"}></Link>
      <GenericHeader />
      <div
        className="row"
        style={{
          height: "240px",
          width: "100%",
          background: "#F5F5F5",
          paddingTop: "130px",
        }}
      >
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <h1 className="mainHeading" style={{display:'flex', justifyContent:'center'}}>Download</h1>
        </div>
        <div className="col-lg-2"></div>
      </div>
      <div className="row">
        {windowWidth <= 1024 ? (
          <></>
        ) : (
          <div
            className={windowWidth <= 1440 ? "col-lg-1" : "col-lg-2"}
          ></div>
        )}
        <div
          className={
            windowWidth <= 1024
              ? "col-lg-12"
              : windowWidth <= 1440 || windowWidth >= 1140
              ? "col-lg-10"
              : "col-lg-8"
          }
        >
    
          <div  className="cardMain1">
            <div className="cardResource">
              <div className="cardInnerLeft">
                <img style={{boxShadow: '5px 8px 5px rgba(0, 0, 0, 0.2)'}} src={businesscard1} width="100%" height="250px"></img>
              </div>
              <div className="cardInnerRight" style={{boxShadow: '5px 8px 5px rgba(0, 0, 0, 0.2)'}}>
                <h2 className="cardHeading" >
                List of Legal Documents
                </h2>
                <button type="button" className="resourceButton">
                  <span>View Documents</span>
                </button>
              </div>
            </div>
            <div className="cardResource">
              <div className="cardInnerLeft">
                <img style={{boxShadow: '5px 8px 5px rgba(0, 0, 0, 0.2)'}} src={cardImage} width="100%" height="250px"></img>
              </div>
              <div className="cardInnerRight" style={{boxShadow: '5px 8px 5px rgba(0, 0, 0, 0.2)'}}>
                <h2 className="cardHeading">Pakistan Regulatory Guidebook</h2>
                <button type="button" className="resourceButton">
                  <span>View Documents</span>
                </button>
              </div>
            </div>
            <div className="cardResource">
              <div className="cardInnerLeft">
                <img style={{boxShadow: '5px 8px 5px rgba(0, 0, 0, 0.2)'}}  src={cardImage} width="100%" height="250px"></img>
              </div>
              <div className="cardInnerRight" style={{boxShadow: '5px 8px 5px rgba(0, 0, 0, 0.2)'}}>
                <h2 className="cardHeading">
                  From Swimming in Sand to High and Sustainable Growth – WBG
                </h2>
                <button type="button" className="resourceButton">
                  <span>View Documents</span>
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {windowWidth <= 1024 ? (
          <></>
        ) : (
          <div
            className={windowWidth <= 1440 ? "col-lg-1" : "col-lg-2"}
          ></div>
        )}
        <div
          className={
            windowWidth <= 1024
              ? "col-lg-12"
              : windowWidth <= 1440 || windowWidth >= 1140
              ? "col-lg-10"
              : "col-lg-8"
          }
        >
          <div className="cardMain1">
            <div className="cardResource">
              <div className="cardInnerLeft">
                <img src={businesscard1} width="100%" height="250px"></img>
              </div>
              <div className="cardInnerRight">
                <h2 className="cardHeading">
                 List of Legal Documents
                </h2>
                <button type="button" className="resourceButton">
                  <Link
                to="route"
                onClick={(event) => { event.preventDefault(); window.open(ListofLegalDocuments); }}>
                  <span style={{color:'white'}}>View Documents</span> 
                  </Link>
                </button>
              </div>
            </div>
            <div className="cardResource">
              <div className="cardInnerLeft">
                <img src={cardImage} width="100%" height="250px"></img>
              </div>
              <div className="cardInnerRight">
                <h2 className="cardHeading">Pakistan Regulatory Guidebook</h2>
                <button type="button" className="resourceButton">
                  <span>View Documents</span>
                </button>
              </div>
            </div>
            <div className="cardResource">
              <div className="cardInnerLeft">
                <img src={cardImage} width="100%" height="250px"></img>
              </div>
              <div className="cardInnerRight">
                <h2 className="cardHeading">
                  From Swimming in Sand to High and Sustainable Growth – WBG
                </h2>
                <button type="button" className="resourceButton">
                  <span>View Documents</span>
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
