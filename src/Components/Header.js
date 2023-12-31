import React, { useEffect, useState } from "react";
// import click from "../assets/click-logo1.png";
import Group8364 from "../assets/Group8364.png";
import accessibility from "../assets/accessibility.png";
import "../Css/header.css";
import "../Css/highlight.css";
import "../Css/investnow.css";
import sindh from "../assets/logo-sindh.png";
import pak from "../assets/pak.png";
import urdu from "../assets/urdu.png";
import Sindhi from "../assets/Sindhi.png";
import "../Css/resource.css";
import { ReactComponent as Face2 } from "../assets/facebook.svg";
import { ReactComponent as Face } from "../assets/facebookColor.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as TwitterColor } from "../assets/TwitterColor.svg";
import { ReactComponent as Youtube } from "../assets/youtube.svg";
import { ReactComponent as YoutubeColor } from "../assets/youtubeColor.svg";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { ReactComponent as LinkedInColor } from "../assets/linkedinColor.svg";
import { ReactComponent as Down } from "../assets/down.svg";
import { ReactComponent as Up } from "../assets/up.svg";
import { ReactComponent as DownColor } from "../assets/downColor.svg";
import { ReactComponent as UpColor } from "../assets/upColor.svg";
import design from "../assets/design.mp4";
import { Link } from "react-router-dom";
import GenericHeader from "./genericHeader";
import { Tooltip } from "antd";
import { useMemo } from "react";

function Header(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnterFaceBook = () => {
    setIsHovered(true);
  };

  const handleMouseLeaveFacebook = () => {
    setIsHovered(false);
  };
  const [isHoveredTwitter, setIsHoveredTwitter] = useState(false);

  const handleMouseEnterTwitter = () => {
    setIsHoveredTwitter(true);
  };

  const handleMouseLeaveTwitter = () => {
    setIsHoveredTwitter(false);
  };
  const [isHoveredYoutube, setIsHoveredYoutube] = useState(false);

  const handleMouseEnterYoutube = () => {
    setIsHoveredYoutube(true);
  };

  const handleMouseLeaveYoutube = () => {
    setIsHoveredYoutube(false);
  };
  const [isHoveredLinkedIn, setIsHoveredLinkedIn] = useState(false);

  const handleMouseEnterLinkedIn = () => {
    setIsHoveredLinkedIn(true);
  };

  const handleMouseLeaveLinkedIn = () => {
    setIsHoveredLinkedIn(false);
  };
  const [showAllDivs, setShowAllDivs] = useState(false);
  const handleClick = () => {
    setShowAllDivs(true);
  };
  const handleClose = () => {
    setShowAllDivs(false);
  };

  useEffect(() => {
    // Function to add event listeners when the component mounts
    const addEventListeners = () => {
      const nestedDropdown = document.querySelector(".nested-dropdown");
      const nestedContent = document.querySelector(".nested-content");

      // Check if the elements exist before adding event listeners
      if (nestedDropdown && nestedContent) {
        nestedDropdown.addEventListener("mouseover", function () {
          nestedContent.style.display = "block";
        });

        nestedDropdown.addEventListener("mouseout", function () {
          nestedContent.style.display = "none";
        });
      }
    };

    // Call the function to add event listeners when the component mounts
    addEventListeners();

    // Clean up the event listeners when the component unmounts
    return () => {
      const nestedDropdown = document.querySelector(".nested-dropdown");
      const nestedContent = document.querySelector(".nested-content");

      if (nestedDropdown && nestedContent) {
        nestedDropdown.removeEventListener("mouseover", function () {
          nestedContent.style.display = "block";
        });

        nestedDropdown.removeEventListener("mouseout", function () {
          nestedContent.style.display = "none";
        });
      }
    };
  }, []); // Empty dependency array ensures this useEffect runs only once after component mount

  // ... the rest of your code ...

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
  const [arrow, setArrow] = useState("Show");

  const mergedArrow = useMemo(() => {
    if (arrow === "Hide") {
      return false;
    }
    if (arrow === "Show") {
      return true;
    }
    return {
      pointAtCenter: true,
    };
  }, [arrow]);
  const [fontSize, setFontSize] = useState({
    heroHeading: 60,
    subHeroHeading: 40,
    subHeroHeadingResponsive: 25,
    mainHeading: 30,
    heading: 32,
    genericParagraph: 16,
    circleFont: 9,
    heading1: 24,
    heading1responsive: 20,
    phra: 15,
    cardHeading: 35,
    cardHeadingResponsive: 30,
    higParagraphResponsive: 16,
    higParagraph: 20,
    subtitleResponsive: 18,
  });
  const [increaseCount, setIncreaseCount] = useState(0);
  const [decreaseCount, setDecreaseCount] = useState(0);
  const increaseFontSize = () => {
    if (increaseCount < 4) {
      setIncreaseCount((prevCount) => prevCount + 1);
      setDecreaseCount(0);
      setFontSize((prevSize) => {
        const newHeroHeading = prevSize.heroHeading + 1;
        const newSubHeroHeading = prevSize.subHeroHeading + 1;
        const newSubHeroHeadingResponsive =
          prevSize.subHeroHeadingResponsive + 1;
        const newMainHeading = prevSize.mainHeading + 1;
        const newHeading = prevSize.heading + 1;
        const newgenericParagraph = prevSize.genericParagraph + 1;
        const newCircleFont = prevSize.circleFont + 1;
        const newHeading1 = prevSize.heading1 + 1;
        const newHeading1Responsive = prevSize.heading1responsive + 1;
        const newPhra = prevSize.phra + 1;
        const newCardHeading = prevSize.cardHeading + 1;
        const newCardHeadingResponsive = prevSize.cardHeadingResponsive + 1;
        const newHighParagraph = prevSize.higParagraph + 1;
        const newHigParagraphResponsive = prevSize.higParagraphResponsive + 1;
        const newSubtitleResponsive = prevSize.subtitleResponsive + 1;
        document.documentElement.style.setProperty(
          "--hero-font-size",
          `${newHeroHeading}px`
        );
        document.documentElement.style.setProperty(
          "--sub-Hero-Heading",
          `${newSubHeroHeading}px`
        );
        document.documentElement.style.setProperty(
          "--sub-Hero-Heading-Responsive",
          `${newSubHeroHeadingResponsive}px`
        );
        document.documentElement.style.setProperty(
          "--main-heading",
          `${newMainHeading}px`
        );
        document.documentElement.style.setProperty(
          "--heading-2",
          `${newHeading}px`
        );
        document.documentElement.style.setProperty(
          "--generic-Header",
          `${newgenericParagraph}px`
        );
        document.documentElement.style.setProperty(
          "--circle-font",
          `${newCircleFont}px`
        );
        document.documentElement.style.setProperty(
          "--heading-1",
          `${newHeading1}px`
        );
        document.documentElement.style.setProperty(
          "--heading-1-Responsive",
          `${newHeading1Responsive}px`
        );
        document.documentElement.style.setProperty("--phra-2", `${newPhra}px`);
        document.documentElement.style.setProperty(
          "--card-heading-font",
          `${newCardHeading}px`
        );
        document.documentElement.style.setProperty(
          "--card-heading-font-responsive",
          `${newCardHeadingResponsive}px`
        );
        document.documentElement.style.setProperty(
          "--hig-paragraph",
          `${newHigParagraphResponsive}px`
        );
        document.documentElement.style.setProperty(
          "--font-size",
          `${newHighParagraph}px`
        );
        document.documentElement.style.setProperty(
          "--subtitle-responsive",
          `${newSubtitleResponsive}px`
        );
        return {
          heroHeading: newHeroHeading,
          subHeroHeading: newSubHeroHeading,
          subHeroHeadingResponsive: newSubHeroHeadingResponsive,
          mainHeading: newMainHeading,
          heading: newHeading,
          genericParagraph: newgenericParagraph,
          circleFont: newCircleFont,
          heading1: newHeading1,
          heading1responsive: newHeading1Responsive,
          phra: newPhra,
          cardHeading: newCardHeading,
          cardHeadingResponsive: newCardHeadingResponsive,
          higParagraphResponsive: newHigParagraphResponsive,
          higParagraph: newHighParagraph,
          subtitleResponsive: newSubtitleResponsive,
        };
      });
    }
  };
  const decreaseFontSize = () => {
    if (decreaseCount < 4) {
      setDecreaseCount((prevCount) => prevCount + 1);
      setIncreaseCount(0);
      setFontSize((prevSize) => {
        const newHeroHeading = prevSize.heroHeading - 1;
        const newSubHeroHeading = prevSize.subHeroHeading - 1;
        const newSubHeroHeadingResponsive =
          prevSize.subHeroHeadingResponsive - 1;
        const newMainHeading = prevSize.mainHeading - 1;
        const newHeading = prevSize.heading - 1;
        const newgenericParagraph = prevSize.genericParagraph - 1;
        const newCircleFont = prevSize.circleFont - 1;
        const newHeading1 = prevSize.heading1 - +1;
        const newHeading1Responsive = prevSize.heading1responsive - 1;
        const newPhra = prevSize.phra - 1;
        const newCardHeading = prevSize.cardHeading - 1;
        const newCardHeadingResponsive = prevSize.cardHeadingResponsive - 1;
        const newHigParagraphResponsive = prevSize.higParagraphResponsive - 1;
        const newHighParagraph = prevSize.higParagraph - 1;
        const newSubtitleResponsive = prevSize.subtitleResponsive + 1;
        document.documentElement.style.setProperty(
          "--hero-font-size",
          `${newHeroHeading}px`
        );
        document.documentElement.style.setProperty(
          "--sub-Hero-Heading",
          `${newSubHeroHeading}px`
        );
        document.documentElement.style.setProperty(
          "--sub-Hero-Heading-Responsive",
          `${newSubHeroHeadingResponsive}px`
        );
        document.documentElement.style.setProperty(
          "--main-heading",
          `${newMainHeading}px`
        );
        document.documentElement.style.setProperty(
          "--heading-2",
          `${newHeading}px`
        );
        document.documentElement.style.setProperty(
          "--generic-Header",
          `${newgenericParagraph}px`
        );
        document.documentElement.style.setProperty(
          "--circle-font",
          `${newCircleFont}px`
        );
        document.documentElement.style.setProperty(
          "--heading-1",
          `${newHeading1}px`
        );
        document.documentElement.style.setProperty(
          "--heading-1-Responsive",
          `${newHeading1Responsive}px`
        );
        document.documentElement.style.setProperty(
          "--card-heading-font",
          `${newCardHeading}px`
        );
        document.documentElement.style.setProperty(
          "--card-heading-font-responsive",
          `${newCardHeadingResponsive}px`
        );
        document.documentElement.style.setProperty(
          "--hig-paragraph",
          `${newHigParagraphResponsive}px`
        );
        document.documentElement.style.setProperty(
          "--font-size",
          `${newHighParagraph}px`
        );
        document.documentElement.style.setProperty(
          "--subtitle-responsive",
          `${newSubtitleResponsive}px`
        );
        return {
          heroHeading: newHeroHeading,
          subHeroHeading: newSubHeroHeading,
          subHeroHeadingResponsive: newSubHeroHeadingResponsive,
          mainHeading: newMainHeading,
          heading: newHeading,
          genericParagraph: newgenericParagraph,
          circleFont: newCircleFont,
          heading1: newHeading1,
          heading1responsive: newHeading1Responsive,
          phra: newPhra,
          cardHeading: newCardHeading,
          cardHeadingResponsive: newCardHeadingResponsive,
          higParagraphResponsive: newHigParagraphResponsive,
          higParagraph: newHighParagraph,
          subtitleResponsive: newSubtitleResponsive,
        };
      });
    }
  };
  const resetFontSize = () => {
    setIncreaseCount(0);
    setDecreaseCount(0);
    setFontSize({
      heroHeading: 60,
      subHeroHeading: 40,
      subHeroHeadingResponsive: 25,
      mainHeading: 30,
      heading: 32,
      genericParagraph: 16,
      circleFont: 9,
      heading1: 24,
      heading1responsive: 20,
      phra: 15,
      cardHeading: 35,
      cardHeadingResponsive: 30,
      higParagraphResponsive: 16,
      higParagraph: 20,
      subtitleResponsive: 18,
    });
    document.documentElement.style.setProperty("--hero-font-size", "60px");
    document.documentElement.style.setProperty("--sub-Hero-Heading", "40px");
    document.documentElement.style.setProperty(
      "--sub-Hero-Heading-Responsive",
      "25px"
    );
    document.documentElement.style.setProperty("--main-heading", "30px");
    document.documentElement.style.setProperty("--heading-2", "32px");
    document.documentElement.style.setProperty("--generic-Header", "16px");
    document.documentElement.style.setProperty("--circle-font", "9px");
    document.documentElement.style.setProperty("--heading-1", "24px");
    document.documentElement.style.setProperty(
      "--heading-1-Responsive",
      "20px"
    );
    document.documentElement.style.setProperty("--phra-2", "15px");
    document.documentElement.style.setProperty("--card-heading-font", "35px");
    document.documentElement.style.setProperty(
      "--card-heading-font-responsive",
      "30px"
    );
    document.documentElement.style.setProperty("--hig-paragraph", "16px");
    document.documentElement.style.setProperty("--font-size", "20px");
    document.documentElement.style.setProperty("--subtitle-responsive", "18px");
  };
  const schoolEnergyDepartment = (
    <div
      className="d-flex justify-content-center flex-column"
      style={{ width: "200px", height: "140px" }}
    >
      <h2 className="TooltipText">Accessibility</h2>
      <div className="d-flex justify-content-between">
        <h2 className="TooltipSubText2">Font Size</h2>
        <h2 className="TooltipSubText" onClick={decreaseFontSize}>
          A -
        </h2>
        <h2 className="TooltipSubText" onClick={resetFontSize}>
          A
        </h2>
        <h2 className="TooltipSubText" onClick={increaseFontSize}>
          A +
        </h2>
      </div>
    </div>
  );

  // const [isUrdu, setIsUrdu] = useState(false);

  // // Function to toggle language between English and Urdu
  // const toggleLanguage = () => {
  //   setIsUrdu((prevIsUrdu) => !prevIsUrdu);
  // };

  // // Object containing English and Urdu translations
  // const translations = {
  //   'hero-heading': {
  //     en: 'Discover the Riches of Sindh\nInvest in a Thriving Future',
  //     ur: 'سندھ کے دولت مند ہنر افزائی کریں۔ ایک خوشحال مستقبل میں سرمایہ کاری کریں۔',
  //   },
  //   'subHeroHeading': {
  //     en: 'Explore the Province of Sindh and Discover its many assets and Potential for Growth and Investment',
  //     ur: 'سندھ کے صوبے کا کھیتریں اور اس کی بے شمار خوبصورتیوں کو دریافت کریں اور ترقی اور سرمایہ کاری کے لئے اس کے ممکنات کا پتہ لگائیں۔',
  //   },
  //   'investButton': {
  //     en: 'Invest Now',
  //     ur: 'ابھی سرمایہ کاری کریں',
  //   },
  //   'calculatorButton': {
  //     en: 'Regulatory Cost Calculator',
  //     ur: 'ریگولیٹری لاگت کی کیلکولیٹر',
  //   },
  // };


  return (
    <>
      <div className="container-fluid" style={{ overflowX: "hidden" }}>
        <video autoPlay loop muted>
          <source src={design} type="video/mp4" />
          Your Browser Does Not Support The Video Tag.
        </video>
        <div
          style={{
            position: "absolute",
            height: "98vh",
            width: "100vw",
            zIndex: "1",
            paddingRight: "13px",
          }}
        >
          <div className="boxshadowNavBar2">
            <div className="row">
              <div className="col-lg-6 l-side px-5">
                <div
                  style={
                    windowWidth <= 1440
                      ? { width: "21%", height: "130px" }
                      : { width: "16%", height: "150px" }
                  }
                >
                  <img
                    src={sindh}
                    alt=""
                    className="marginDPI"
                    width={windowWidth <= 1440 ? "95" : "115"}
                    height={windowWidth <= 1440 ? "115" : "135"}
                  />
                </div>
                <div className="vl"></div>
                <img
                  className="clickMainHeaderLogo"
                  style={{ marginLeft: "10px" }}
                  src={Group8364}
                  alt=""
                ></img>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 r-side ">
                <Tooltip
                  overlayInnerStyle={{ borderRadius: "0px" }}
                  color={"#Ffffff"}
                  placement="bottom"
                  title={schoolEnergyDepartment}
                  arrow={mergedArrow}
                >
                  <img
                    className="headerLogoImages"
                    src={accessibility}
                    alt=""
                    style={{ cursor: "pointer" }}
                  />
                </Tooltip>
                {/* <img
                  className="headerLogoImages"
                  src={pak}
                  alt=""
                  style={{ marginLeft: "20px" }}
                /> */}
                 <img
                  className="headerLogoImages"
                  src={urdu}
                  alt=""
                  onClick={props.toggleLanguage}
                  style={{ marginLeft: "20px", marginRight: "20px" }}
                /> 
                <img
                className="headerLogoImages"
                src={Sindhi}
                alt=""
                onClick={props.toggleLanguage}
                style={{ marginLeft: "20px", marginRight: "20px" }}
              /> 
                <a href="comingsoon.html">
                  <button type="button" className="login">
                    <span>{props.translations['Login'][props.language]}
                    </span>
                  </button>
                </a>
                &nbsp;&nbsp;
                <Link to={"/feedback"} style={{ textDecoration: "none" }}>
                  <button type="button" className="feedback">
                    <span>{props.translations['Feedback'][props.language]}
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            {isSticky === true ? (
              <div style={{ position: "relative", zIndex: "99999999999" }}>
                <GenericHeader />
              </div>
            ) : (
              <div className={`header `}>
              <div className={"row "}>
                <div className={" navbar boxshadowNavBar justify-content-end"} style={{width:"100%",paddingRight:"8px"}}>
                  <ul style={props.language === 'ur' || props.language === 'sd'? {display:"flex", marginBottom: "0px",flexDirection:"row-reverse"}:{ marginBottom: "0px" }}>
                    <li>
                      <a
                        href="comingsoon.html"
                        title="Home Page"
                        className={"link"}
                      >
                        <Link className={"link"} to={"/home"}>
                        {props.translations['home'][props.language]}
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a
                        href="comingsoon.html"
                        title="Home Page"
                        className={"link"}
                      >
                        <Link className={"link"} to={"/WhySindh"}>
                        {props.translations['sindhATglance'][props.language]}
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a title="" className={"link"}>
                        <Link className="link" to={"/InvestNow"}>
                        {props.translations['InvestNow'][props.language]}
                        </Link>
                      </a>
                    </li>
                    <li>
                        <div class="dropdown"  style={props.language === 'ur' || props.language === 'sd'? {display:"flex",flexDirection:"row-reverse"}:{}}>
                          <span
                            style={{
                              marginRight: "5px",
                              textDecoration: "none",
                            }}
                            className={"link"}
                          >
                            <Link className={"link"} to={"/Opportunity"}>
                            {props.translations['Opportunities'][props.language]}
                            </Link>
                          </span>
                          <i
                            style={{ marginTop: "0px", marginLeft: "0px" }}
                            class="dropbtn iconDown hover-rotate fa fa-chevron-right"
                          ></i>
                          <div class="dropdown-content" style={props.language === 'ur' || props.language === 'sd'? {marginTop:"30px"}:{}}>
                            <div
                              class="nested-dropdown"
                              style={{ width: "100%" }}
                            >
                              <span
                                style={props.language === 'ur' || props.language === 'sd' ? {display: "flex",width: "100%",flexDirection:"row-reverse"}:{display: "flex",position: "relative", width: "100%"}}
                              >
                                <a
                                  // style={{
                                  //   width: "300px",
                                  //   paddingLeft: "15px",
                                  //   height: "40px",
                                  //   paddingTop: "8px",
                                  // }}
                                  style={props.language === 'ur' || props.language === 'sd' ? { width: "210px",paddingLeft: "15px",height: "40px",paddingTop: "8px",display: "flex",flexDirection:"row-reverse"}:{ width: "300px",paddingLeft: "15px",height: "40px",paddingTop: "8px"}}
                                  href="#"
                                >
                                  <Link className={"link"} to={"/manufacturing"}>
                                 {props.translations['Manufacturing'][props.language]}
                                  </Link>
                                </a>
                                <i
                                  style={props.language === 'ur' || props.language === 'sd' ? {marginTop: "10px",marginLeft: "0px",position: "absolute",left:"10px",display:"flex",flexDirection:"row-reverse"}:{marginTop: "10px",marginLeft: "0px",position: "absolute",right: "15px"}}
                                  class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
                                ></i>
                              </span>
                              <div
                                class="dropdown-content nested-content nested-right"
                                style={{ width: "200px" }}
                              >
                                <Link className={""} to={"/ComingSoon"}>
                                  <a href="#">
                                 {props.translations['Talktoexpert'][props.language]}
                                 </a>
                                </Link>
                              </div>
                            </div>

                            <div
                              class="nested-dropdown"
                              style={{ width: "100%" }}
                            >
                              <span
                                style={props.language === 'ur' || props.language === 'sd' ? {display: "flex",width: "100%",flexDirection:"row-reverse"}:{display: "flex",position: "relative", width: "100%"}}
                              >
                                <a
                                  style={props.language === 'ur' || props.language === 'sd' ? { width: "210px",paddingLeft: "15px",height: "40px",paddingTop: "8px",display: "flex",flexDirection:"row-reverse"}:{ width: "300px",paddingLeft: "15px",height: "40px",paddingTop: "8px"}}

                                  href="#"
                                >
                                  <Link className={"link"} to={"/textile"}>
                                  {props.translations['Textile'][props.language]}
                                  </Link>
                                </a>
                                <i
                                  style={props.language === 'ur' || props.language === 'sd' ? {marginTop: "10px",marginLeft: "0px",position: "absolute",left:"10px",display:"flex",flexDirection:"row-reverse"}:{marginTop: "10px",marginLeft: "0px",position: "absolute",right: "15px"}}
                                  class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
                                ></i>
                              </span>
                              <div
                                class="dropdown-content nested-content nested-right"
                                style={{ width: "200px", marginTop: "40px" }}
                              >
                                <Link className={""} to={"/ComingSoon"}>
                                  <a href="#">{props.translations['Talktoexpert'][props.language]}
                                  </a>
                                </Link>
                              </div>
                            </div>

                            <div
                              class="nested-dropdown"
                              style={{ width: "100%" }}
                            >
                              <span
                                style={props.language === 'ur' || props.language === 'sd' ? {display: "flex",width: "100%",flexDirection:"row-reverse"}:{display: "flex",position: "relative", width: "100%"}}

                              >
                                <a
                                  style={props.language === 'ur' || props.language === 'sd' ? { width: "210px",paddingLeft: "15px",height: "40px",paddingTop: "8px",display: "flex",flexDirection:"row-reverse"}:{ width: "300px",paddingLeft: "15px",height: "40px",paddingTop: "8px"}}
                                  href="#"
                                >
                                <Link className={"link"} to={"/tourism"}>
                                {props.translations['Tourism'][props.language]}
                                </Link>
                                </a>
                                <i
                                  style={props.language === 'ur' || props.language === 'sd' ? {marginTop: "10px",marginLeft: "0px",position: "absolute",left:"10px",display:"flex",flexDirection:"row-reverse"}:{marginTop: "10px",marginLeft: "0px",position: "absolute",right: "15px"}}
                                  class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
                                ></i>
                              </span>
                              <div
                                class="dropdown-content nested-content nested-right"
                                style={{ width: "200px", marginTop: "80px" }}
                              >
                                <Link className={""} to={"/ComingSoon"}>
                                  <a href="#">{props.translations['Talktoexpert'][props.language]}
                                  </a>
                                </Link>
                              </div>
                            </div>

                            <div
                              class="nested-dropdown"
                              style={{ width: "100%" }}
                            >
                              <span
                                style={props.language === 'ur' || props.language === 'sd' ? {display: "flex",width: "100%",flexDirection:"row-reverse"}:{display: "flex",position: "relative", width: "100%"}}
                              >
                                <a
                                  style={props.language === 'ur' || props.language === 'sd' ? { width: "210px",paddingLeft: "15px",height: "40px",paddingTop: "8px",display: "flex",flexDirection:"row-reverse"}:{ width: "300px",paddingLeft: "15px",height: "40px",paddingTop: "8px"}}
                                  href="#"
                                >
                                  <Link className={"link"} to={"/agriculture"}>
                                {props.translations['Agriculture'][props.language]}
                                </Link>
                                </a>
                                <i
                                  style={props.language === 'ur' || props.language === 'sd' ? {marginTop: "10px",marginLeft: "0px",display:"flex",flexDirection:"row-reverse",position: "absolute",left:"10px"}:{marginTop: "10px",marginLeft: "0px",position: "absolute",right: "15px"}}

                                  class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
                                ></i>
                              </span>
                              <div
                                class="dropdown-content nested-content nested-right"
                                style={{ width: "200px", marginTop: "120px" }}
                              >
                                <Link className={""} to={"/ComingSoon"}>
                                  <a href="#">{props.translations['Talktoexpert'][props.language]}</a>
                                </Link>
                              </div>
                            </div>

                            <div
                              class="nested-dropdown"
                              style={{ width: "100%" }}
                            >
                              <span
                                style={props.language === 'ur' || props.language === 'sd' ? {display: "flex",width: "100%",flexDirection:"row-reverse"}:{display: "flex",position: "relative", width: "100%"}}
                              >
                                <a
                                  style={props.language === 'ur' || props.language === 'sd' ? { width: "210px",paddingLeft: "15px",height: "40px",paddingTop: "8px",display: "flex",flexDirection:"row-reverse"}:{ width: "300px",paddingLeft: "15px",height: "40px",paddingTop: "8px"}}
                                  href="#"
                                >
                                  <Link className={"link"} to={"/education"}>
                                {props.translations['Education'][props.language]}
                                </Link>
                                </a>
                                <i
                                style={props.language === 'ur' || props.language === 'sd' ? {marginTop: "10px",marginLeft: "0px",position: "absolute",left:"10px",display:"flex",flexDirection:"row-reverse",position: "absolute",left:"10px"}:{marginTop: "10px",marginLeft: "0px",position: "absolute",right: "15px"}}
                                  class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
                                ></i>
                              </span>
                              <div
                                class="dropdown-content nested-content nested-right"
                                style={{ width: "200px", marginTop: "160px" }}
                              >
                                <Link className={""} to={"/ComingSoon"}>
                                  <a href="#">{props.translations['Talktoexpert'][props.language]}</a>
                                </Link>
                              </div>
                            </div>

                            <div
                              class="nested-dropdown"
                              style={{ width: "100%" }}
                            >
                              <span
                              style={props.language === 'ur' || props.language === 'sd' ? {display: "flex",width: "100%",flexDirection:"row-reverse"}:{display: "flex",position: "relative", width: "100%"}}
                              >
                                <a
                                style={props.language === 'ur' || props.language === 'sd' ? { width: "210px",paddingLeft: "15px",height: "40px",paddingTop: "8px",display: "flex",flexDirection:"row-reverse"}:{ width: "300px",paddingLeft: "15px",height: "40px",paddingTop: "8px"}}
                                  href="#"
                                >
                                  <Link className={"link"} to={"/energy"}>
                                {props.translations['Energy'][props.language]}
                                </Link>
                                </a>
                                <i
                                  style={props.language === 'ur' || props.language === 'sd' ? {marginTop: "10px",marginLeft: "0px",position: "absolute",left:"10px",display:"flex",flexDirection:"row-reverse"}:{marginTop: "10px",marginLeft: "0px",position: "absolute",right: "15px"}}
                                  class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
                                ></i>
                              </span>
                              <div
                                class="dropdown-content nested-content nested-right"
                                style={{ width: "200px", marginTop: "200px" }}
                              >
                                <Link className={""} to={"/ComingSoon"}>
                                  <a href="#">{props.translations['Talktoexpert'][props.language]}</a>
                                </Link>
                              </div>
                            </div>

                            <div
                              class="nested-dropdown"
                              style={{ width: "100%" }}
                            >
                              <span
                              style={props.language === 'ur' || props.language === 'sd' ? {display: "flex",width: "100%",flexDirection:"row-reverse"}:{display: "flex",position: "relative", width: "100%"}}
                              >
                                <a
                                style={props.language === 'ur' || props.language === 'sd' ? { width: "210px",paddingLeft: "15px",height: "40px",paddingTop: "8px",display: "flex",flexDirection:"row-reverse"}:{ width: "300px",paddingLeft: "15px",height: "40px",paddingTop: "8px"}}
                                  href="#"
                                >
                                  <Link className={"link"} to={"/health"}>
                                {props.translations['Health'][props.language]}
                                </Link>
                                </a>
                                <i
                                style={props.language === 'ur' || props.language === 'sd' ? {marginTop: "10px",marginLeft: "0px",display:"flex",position: "absolute",left:"10px",flexDirection:"row-reverse"}:{marginTop: "10px",marginLeft: "0px",position: "absolute",right: "15px"}}
                                  class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
                                ></i>
                              </span>
                              <div
                                class="dropdown-content nested-content nested-right"
                                style={{ width: "200px", marginTop: "240px" }}
                              >
                                <Link className={""} to={"/ComingSoon"}>
                                  <a href="#">{props.translations['Talktoexpert'][props.language]}</a>
                                </Link>
                              </div>
                            </div>

                            <div
                              class="nested-dropdown"
                              style={{ width: "100%" }}
                            >
                              <span
                              style={props.language === 'ur' || props.language === 'sd' ? {display: "flex",width: "100%",flexDirection:"row-reverse"}:{display: "flex",position: "relative", width: "100%"}}
                              >
                                <a
                                style={props.language === 'ur' || props.language === 'sd' ? { width: "210px",paddingLeft: "15px",height: "40px",paddingTop: "8px",display: "flex",flexDirection:"row-reverse"}:{ width: "300px",paddingLeft: "15px",height: "40px",paddingTop: "8px"}}
                                  href="#"
                                >
                                  <Link className={"link"} to={"/informationtech"}>
                                  {props.translations['InformationTechnology'][props.language]}
                                </Link>
                                </a>
                                <i
                                style={props.language === 'ur' || props.language === 'sd' ? {marginTop: "10px",marginLeft: "0px",display:"flex",position: "absolute",left:"10px",flexDirection:"row-reverse"}:{marginTop: "10px",marginLeft: "0px",position: "absolute",right: "15px"}}
                                  class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
                                ></i>
                              </span>
                              <div
                                class="dropdown-content nested-content nested-right"
                                style={{ width: "200px", marginTop: "280px" }}
                              >
                                <Link className={""} to={"/ComingSoon"}>
                                  <a href="#">{props.translations['Talktoexpert'][props.language]}</a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    <li>
                      <a title="" className={"link"}>
                        <Link className="link" to={"/NewsAndInformation"}>
                        {props.translations['NewsInformation'][props.language]}
                        </Link>
                      </a>
                    </li>
                    <li>
                      <div class="dropdown" style={props.language === 'ur' || props.language === 'sd'? {display:"flex",flexDirection:"row-reverse"}:{}}>
                        <span
                          style={{ marginRight: "5px", textDecoration: "none" }}
                          className={"link"}
                        >
                        {props.translations['Resources'][props.language]}
                        </span>
                        <i
                          style={{ marginTop: "0px", marginLeft: "0px" }}
                          class=" dropbtn iconDown hover-rotate fa fa-chevron-right"
                        ></i>
                        <div class="dropdown-content" style={props.language === 'ur' || props.language === 'sd'? {marginTop:"30px"}:{}}>
                          <Link className={""} to={"/resource"}>
                            <a target="_blank" href="">
                              {/* <Link className="link" to={"/ComingSoon"}> */}
                              {props.translations['Download'][props.language]}
                            </a>
                          </Link>
                          <Link className={""} to={"/regulatorycatalog"}>
                            <a href="#">
                            {props.translations['RegulatoryCatalog'][props.language]}
                            </a>
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="dropdown" style={props.language === 'ur' || props.language === 'sd'? {display:"flex",flexDirection:"row-reverse"}:{}}>
                        <span
                          style={{ marginRight: "5px", textDecoration: "none" }}
                          className={"link"}
                        > {props.translations['Aboutus'][props.language]}
                        </span>
                        <i
                          style={{ marginTop: "0px", marginLeft: "0px" }}
                          class="dropbtn iconDown hover-rotate fa fa-chevron-right"
                        ></i>
                        <div class="dropdown-content" style={props.language === 'ur' || props.language === 'sd'? {marginTop:"30px"}:{}}>
                          <Link className="" to={"/aboutus"}>
                            <a target="_blank" href="" style={props.language === 'ur' || props.language === 'sd' ? {display:"flex",flexDirection:"row-reverse",marginRight:"-16px"}:{}} >
                            {props.translations['Vision'][props.language]}
                            </a>
                          </Link>
                          <div
                            class="nested-dropdown"
                            style={{ width: "100%" }}
                          >
                            <span
                              style={props.language === 'ur' || props.language === 'sd'? {display: "flex",flexDirection:"row-reverse",width: "100%",}:{display: "flex",position: "relative",width: "100%"}}
                            >
                              <a
                              style={props.language === 'ur' || props.language === 'sd'? {width: "88%",paddingLeft: "30px",height: "40px",paddingTop: "8px",display:"flex",flexDirection:"row-reverse"}:{width: "100%",paddingLeft: "30px",height: "40px",paddingTop: "8px"}}

                                href="#"
                              >
                              {props.translations['Components'][props.language]}
                              </a>
                              <i
                                // style={{
                                //   marginTop: "10px",
                                //   marginLeft: "0px",
                                //   position: "absolute",
                                //   right: "15px",
                                // }}
                              style={props.language === 'ur' || props.language === 'sd'? {marginTop: "10px",marginLeft: "0px",display:"flex",flexDirection:"row-reverse"}:{marginTop: "10px",marginLeft: "0px",position: "absolute",right:"15px"}}

                                class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
                              ></i>
                            </span>
                            <div class="dropdown-content nested-content nested-right" style={{left:"auto"}}>
                              <Link className={""} to={"/Component"}>
                                <a href="#">{props.translations['CLICKSID'][props.language]}
                                </a>
                              </Link>
                              <Link className={""} to={"/Team"}>
                                <a href="#">{props.translations['OurTeam'][props.language]}
                                </a>
                              </Link>
                            </div>
                          </div>
                          <Link className={""} to={"/Team"}>
                            <a href="#" style={props.language === 'ur' || props.language === 'sd' ? {display:"flex",flexDirection:"row-reverse",marginRight:"-16px"}:{}}>{props.translations['CLICKSID'][props.language]}</a>
                          </Link>
                        </div>
                      </div>
                    </li>

                    <li>
                      <a href="comingsoon.html" title="" className={"link"}>
                        <Link className="link" to={"/Maps"}>
                        {props.translations['Maps'][props.language]}
                        </Link>
                      </a>
                    </li>
                    <li>
                      <a href="comingsoon.html" title="" width="10">
                        <i
                          className="fa-sharp fa-solid fa-magnifying-glass"
                          style={
                            isSticky
                              ? { color: "#000000" }
                              : { color: "#ffffff" }
                          }
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            )}
          </div>
          <div className=" px-5" style={props.language === 'ur' || props.language === 'sd'? {display:"flex",justifyContent:"end"}:{}}>
            <div
              className="col-lg-7 col-md-6 col-sm-12 col-xs-12 marginTopHeader"
            >
              <h1 className="hero-heading" 
              style={props.language === 'en' ? {textAlign:"start"}:props.language === 'ur' || props.language === 'sd' ?{textAlign:"end"}:{textAlign:"inherit"}}>
              {props.translations['hero-heading'][props.language]}
            </h1>
            </div>
          </div>

          <div className=" px-5 " style={props.language === 'ur' || props.language === 'sd' ? {display:"flex",justifyContent:"end",textAlign:"end"}:{textAlign:"inherit"}}>
            <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12">
            <h2 className="subHeroHeading">
            {props.translations['subHeroHeading'][props.language]}
          </h2>
              <div className="row mt-5 " >
                <div className="col-lg-11 col-md-7 col-sm-7 col-xs-12 px-0" style={props.language === 'ur' ? {display:"flex",justifyContent:"end"}:{}}>
                  <Link className={""} to={"/investnow"}>
                    <button type="button" className="feedback">
                      <span>
                      {props.translations['investButton'][props.language]}
                      </span>
                    </button>
                  </Link>
                  <Link className={""} to={"/RegulatoryCatalogCalculator"}>
                    <button type="button" className="feedback">
                    <span>
                    {props.translations['calculatorButton'][props.language]}
                    </span>
                    </button>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 hero-button2 p-2"></div>
              </div>
            </div>
          </div>

          {isSticky === false ? (
            <div className="sticky-icon">
              <a href="" target="_blank" className="">
                {" "}
                <div>
                  {isHovered ? (
                    <Face
                      style={{
                        height: "57px",
                        width: "57px",
                        marginBottom: "-12px",
                      }}
                      onMouseLeave={handleMouseLeaveFacebook}
                    />
                  ) : (
                    <Face2 onMouseEnter={handleMouseEnterFaceBook} />
                  )}
                </div>{" "}
              </a>
              <a
                href="https://twitter.com/ClickSindh?t=8K_w3Bl-z1SgSvedJykmsQ&s=08"
                target="_blank"
              >
                <div style={{ marginBottom: "-12px" }}>
                  {isHoveredTwitter ? (
                    <TwitterColor onMouseLeave={handleMouseLeaveTwitter} />
                  ) : (
                    <Twitter onMouseEnter={handleMouseEnterTwitter} />
                  )}
                </div>{" "}
              </a>

              <a
                href="https://www.linkedin.com/company/competitive-and-livable-city-of-karachi-click/"
                target="_blank"
              >
                <div style={{ marginBottom: "-12px" }}>
                  {isHoveredLinkedIn ? (
                    <LinkedInColor
                      style={{ height: "50px", width: "50px" }}
                      onMouseLeave={handleMouseLeaveLinkedIn}
                    />
                  ) : (
                    <LinkedIn onMouseEnter={handleMouseEnterLinkedIn} />
                  )}
                </div>{" "}
              </a>

              <a
                href="https://youtube.com/@clicksindhinvestmentdepart1679"
                target="_blank"
              >
                {showAllDivs === true ? (
                  <div style={{ marginBottom: "-11px" }}>
                    {isHoveredYoutube ? (
                      <YoutubeColor onMouseLeave={handleMouseLeaveYoutube} />
                    ) : (
                      <Youtube
                        style={{ height: "45px", width: "45px" }}
                        onMouseEnter={handleMouseEnterYoutube}
                      />
                    )}
                  </div>
                ) : (
                  ""
                )}
              </a>
              <a>
                {showAllDivs === true ? (
                  <div onClick={handleClose}>
                    <Up />
                  </div>
                ) : (
                  <div onClick={handleClick}>
                    <Down />
                  </div>
                )}
              </a>
            </div>
          ) : (
            <div className="sticky-icon">
              <a href="" target="_blank" className="">
                {" "}
                <div>
                  <Face
                    style={{
                      height: "57px",
                      width: "57px",
                      marginBottom: "-12px",
                    }}
                  />
                </div>
              </a>
              <a
                href="https://twitter.com/ClickSindh?t=8K_w3Bl-z1SgSvedJykmsQ&s=08"
                target="_blank"
              >
                <div style={{ marginBottom: "-12px" }}>
                  <TwitterColor onMouseLeave={handleMouseLeaveTwitter} />
                </div>{" "}
              </a>

              <a
                href="https://www.linkedin.com/company/competitive-and-livable-city-of-karachi-click/"
                target="_blank"
              >
                <div style={{ marginBottom: "-12px" }}>
                  <LinkedInColor style={{ height: "50px", width: "50px" }} />
                </div>{" "}
              </a>

              <a
                href="https://youtube.com/@clicksindhinvestmentdepart1679"
                target="_blank"
              >
                {showAllDivs === true ? (
                  <div style={{ marginBottom: "-11px" }}>
                    <YoutubeColor onMouseLeave={handleMouseLeaveYoutube} />
                  </div>
                ) : (
                  ""
                )}
              </a>
              <a>
                {showAllDivs === true ? (
                  <div onClick={handleClose}>
                    <UpColor />
                  </div>
                ) : (
                  <div onClick={handleClick}>
                    <DownColor />
                  </div>
                )}
              </a>
            </div>
          )}

          {/* <div className="row sticky-icon"></div> */}
        </div>
        <div className=" pt-2 pb-4 ">
          <div className="">
            <div
              className="col-lg-12 updates mx-5"
              style={
                windowWidth <= 1440?{position: "relative",
                height: "96vh",
                display: "flex",
                alignItems: "end",}:
                {
                position: "relative",
                height: "97vh",
                display: "flex",
                alignItems: "end",
              }}
            >
              <a
                href="comingsoon.html"
                className={props.language === 'ur' || props.language === 'sd'? "LanguageUpdateHeader":"UpdateHeader" }
              >
                <button type="button" className="update">
                  <span>{props.translations['Updates'][props.language]}</span>
                </button>
              </a>
              <marquee className="marque">
              {props.translations['Headline'][props.language]}
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
