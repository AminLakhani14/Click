import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import accessibility from "../assets/accessibility.png";
import sindh from "../assets/logo-sindh.png";
import pak from "../assets/pak.png";
import urdu from "../assets/urdu.png";
import click from "../assets/click-logo.png";
import "../Css/resource.css";
import GenericHeader from "./genericHeader";
import Gallery from "./Gallery";
import Footer from "./footer";
import AboutUsImg from "../assets/city.png"
import MobileHeaderGeneric from "./MobileHeaderGeneric";
export default function AboutUs() {
  const [isSticky, setIsSticky] = useState(false);
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
    const handleScroll = () => {
      if (window.scrollY > 480) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  let value = ">";
  return (
    <>
           {windowWidth <=500 ? <MobileHeaderGeneric/> : <GenericHeader />}

      <div className="siteHeader"style={{background: `url(${AboutUsImg})`}} >
        <h1 data-aos="fade-up"
        className="Investnow-h1">About Us</h1>
      </div>
      <div
        className="row"
        style={{
          height: "100px",
          backgroundColor: "#F7F7F7",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
      <Link
      to={"/home"}
      style={
        windowWidth < 500
          ? {
              color: "#720D1D",
              fontSize: "24px",
              textDecoration: "none",
            }
          : {
              color: "#720D1D",
              fontSize: "30px",
              textDecoration: "none",
            }
      }
    >
          <div>
            <h5
            style={
              windowWidth < 500
                ? { display: "contents", color: "black", fontSize: "24px" }
                : { display: "contents", color: "black", fontSize: "30px" }
            }
            >
              Home {value}
            </h5>
            About us
          </div>
        </Link>
      </div>
  
      <div className="shadow-sm bg-white choice-card aboutCard"  style={
        windowWidth < 500
          ? {height:"600px"}
          : { }
      }>
        <div className="body-box">
          <div
            className="row"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <h1 data-aos="fade-up" className="mainHeading">Vision</h1>
            <div
              className="col-lg-10"
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <p className="aboutUsParagraphh" data-aos="fade-up">
                The project aims to ensure the fulfillment of SDG (Sustainable
                Development Goal) 11,<br/>
                 <b>“Sustainable Cities & Communities”,</b>
                <br /> and <br />
                SDG 5,{" "}
                <b>
                  “Achieve Gender Equality and Empower all Women and Girls”.
                </b>
                <br /> Vision 2030
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <hr className="hrgrey" />
            </div>
          </div>
          <div
            className="row"
            style={{
              width: "100%",
              display: "flex",
              height:"600px",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <h1 className="mainHeading" data-aos="fade-up">Mission</h1>
            <div
              className="col-lg-10"
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <p className="aboutUsParagraphh" data-aos="fade-up">
                To improve urban management, service delivery and the business
                environment in Karachi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Gallery />
      <Footer />
    </>
  );
}
