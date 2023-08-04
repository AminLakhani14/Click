import React, { useEffect, useState } from "react";
import GenericHeader from "./genericHeader";
import computer from "../assets/computer.svg";
import feedback from "../assets/feedback.svg";
import Footer from "./footer";
import { Link } from "react-router-dom";
import "../Css/investnow.css";
import Bank from "../assets/bank.png";
import openAccount from "../assets/openAccount.png";
import letter from "../assets/letter.png";
import investNowImg from "../assets/ship.png";
import MobileHeaderGeneric from "./MobileHeaderGeneric";
import "aos/dist/aos.css";

function InvestNow() {
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

  return (
    <>
      {windowWidth <= 500 ? <MobileHeaderGeneric /> : <GenericHeader />}
      {windowWidth <= 500 ? (
        <div></div>
      ) : (
        <div style={{ height: "150px" }}></div>
      )}
      <div style={{ background: `url(${investNowImg})` }} className="SiteMain2">
        <h1 data-aos="fade-up" className="Investnow-h1">
          Invest now
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
            Invest now
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
          window.innerWidth < 500
            ? "mobilemainHeading"
            : 
            "mainHeading"
        }>
          Unleash Growth and Opportunity
        </h1>
        <div
          className="col-lg-10"
          style={{
            display: "flex",
            justifyContent: "left",
            textAlign: "left",
          }}
        >
          <p data-aos="fade-up" className={
              window.innerWidth < 500
                ? "mobilePara"
                : "InvestnowParagraphh"
            }>
            Welcome to the world of endless possibilities in Sindh, Pakistan.
            This page is your gateway to exploring the vast potential that
            awaits investors like you. Sindh offers a strategic location, a
            thriving business ecosystem, and a rich cultural heritage that sets
            the stage for remarkable growth. With abundant resources, a skilled
            workforce, and favorable investment policies, Sindh presents a
            landscape teeming with opportunities across various sectors. Whether
            you seek to expand your existing ventures or embark on new ventures,
            investing in Sindh can be the catalyst for your success. Join us on
            this journey of growth, innovation, and prosperity as we unlock the
            boundless opportunities together.
          </p>
        </div>
      </div>
      <div className="stageDiv">
        <div data-aos="fade-up" className="stageTextColor">
          Stage 1
        </div>
        <div data-aos="fade-up" className="stageTextColor">
          Stage 2
        </div>
        <div data-aos="fade-up" className="stageTextColor">
          Stage 3
        </div>
      </div>
      <div class="container text-center">
        <div class="steps-container">
          <div class="steps">
            <div class="steps__item z4"></div>
            <div class="steps__item z3"></div>
            <div class="steps__item z2 steps__item--active"></div>
          </div>
        </div>
      </div>
      <div className="row" style={{ justifyContent: "center" }}>
        <div className="col-lg-4">
          <div className="investNowCard">
            <img data-aos="fade-up" src={Bank} width="100" height="100"></img>
            <label data-aos="fade-up" className="stageTextColor">
              Register Your Company
            </label>
            <label data-aos="fade-up" className="secondaryLabelColor">
              The first step in launching your business in Sindh is to register
              your company.
            </label>
            <Link
              data-aos="fade-up"
              to={"/home"}
              style={{
                color: "#720D1D",
                fontSize: "20px",
              }}
            >
              Register
            </Link>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="investNowCard">
            <img
              data-aos="fade-up"
              src={openAccount}
              width="100"
              height="100"
            ></img>
            <label data-aos="fade-up" className="stageTextColor">
              Open a Bank Account
            </label>
            <label data-aos="fade-up" className="secondaryLabelColor">
              The next vital step in establishing your business in Sindh is to
              open a bank account.
            </label>
            <Link
              data-aos="fade-up"
              to={"/home"}
              style={{
                color: "#720D1D",
                fontSize: "20px",
              }}
            >
              Register
            </Link>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="investNowCard">
            <img data-aos="fade-up" src={letter} width="100" height="100"></img>
            <label data-aos="fade-up" className="stageTextColor">
              Apply for a STRN
            </label>
            <label data-aos="fade-up" className="secondaryLabelColor">
              Ensure compliance and broaden your market reach by applying for a
              Sales Tax Registration Number (SPRL).
            </label>
            <Link
              data-aos="fade-up"
              to={"/home"}
              style={{
                color: "#720D1D",
                fontSize: "20px",
              }}
            >
              Apply for STRN
            </Link>
          </div>
        </div>
      </div>

      <div className="row">
        <div
           style={
            window.innerWidth < 500
              ? 
              { textAlign: "center",
              justifyContent: "center",
              display: "flex",
              marginTop:"20px"
            }
              : 
              { textAlign: "center",
              justifyContent: "center",
              display: "flex", }
          }
        >
          <a href="comingsoon.html">
            <button type="button" className="InvestInSindhButton">
              <span style={{ width: "179px", height: "33px" }}>
                Invest in Sindh
              </span>
            </button>
          </a>
        </div>
      </div>
      <div className="Investorbackground row" style={{ marginTop: "80px" }}>
        <h1 data-aos="fade-up" className="mainHeading"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          Investor’s Guide
        </h1>
        <div className="width-25">
          <div data-aos="fade-down-right" className="box"></div>
        </div>
        <div className="width-25">
          <div data-aos="fade-down-right" className="box"></div>
        </div>
        <div className="width-25">
          <div data-aos="fade-down-right" className="box"></div>
        </div>
        <div className="width-25">
          <div data-aos="fade-down-right" className="box"></div>
        </div>
      </div>

      <div
        className="row"
        style={{ marginTop: "100px", justifyContent: "center" }}
      >
        <div
          className="col-lg-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="cardInvest">
            <div className="cardInvestLeft">
              <img width="100%" height="150px"></img>
            </div>
            <div className="cardInvestRight">
              <h2 className="cardInvestHeading">Publication Title</h2>
              <p className="cardInvestPara">Short description...</p>
            </div>
          </div>
        </div>

        <div
          className="col-lg-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="cardInvest">
            <div className="cardInvestLeft">
              <img width="100%" height="150px"></img>
            </div>
            <div className="cardInvestRight">
              <h2 className="cardInvestHeading">Publication Title</h2>
              <p className="cardInvestPara">Short description...</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="row"
        style={
          window.innerWidth <= 500
            ? { justifyContent: "center" }
            : { marginTop: "60px", justifyContent: "center" }
        }
      >
        <div
          className="col-lg-4 "
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="cardInvest">
            <div className="cardInvestLeft">
              <img width="100%" height="150px"></img>
            </div>
            <div className="cardInvestRight">
              <h2 className="cardInvestHeading">Publication Title</h2>
              <p className="cardInvestPara">Short description...</p>
            </div>
          </div>
        </div>

        <div
          className="col-lg-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="cardInvest">
            <div className="cardInvestLeft">
              <img width="100%" height="150px"></img>
            </div>
            <div className="cardInvestRight">
              <h2 className="cardInvestHeading">Publication Title</h2>
              <p className="cardInvestPara">Short description...</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <a href="comingsoon.html">
            <button type="button" className="publicationButton">
              <span>View More Publications</span>
            </button>
          </a>
        </div>
      </div>
      <div className="row justify-content-center highs">
        <div
          className="col-lg-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <li className="muju">
            <div className="img">
              <img
                src={computer}
                alt="img"
                draggable="false"
                width={"80px"}
                height={"80px"}
              ></img>
            </div>
            <p data-aos="fade-up" className="muju__name">
              Request Information
            </p>
          </li>
        </div>
        <div
          className="col-lg-3 margin-top"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <li className="muju">
            <div className="img">
              <img
                src={feedback}
                alt="img"
                draggable="false"
                width={"80px"}
                height={"80px"}
              ></img>
            </div>
            <p data-aos="fade-up" className="muju__name">
              Share Your Feedback
            </p>
          </li>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default InvestNow;
