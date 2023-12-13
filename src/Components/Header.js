
import React, { useEffect, useRef, useState } from "react";
// import click from "../assets/click-logo1.png";
import Group8364 from "../assets/Group8364.png";
import accessibility from "../assets/accessibility.png";
import "../Css/header.css";
import "../Css/highlight.css";
import "../Css/investnow.css";
import sindh from "../assets/logo-sindh.png";
import English from "../assets/English.png";
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
import { translations } from "../Transalation/Transalation";
import { useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import Search from "antd/es/input/Search";
import { handleSearch, searchText } from "../Route";


function Header(props) {
const {language} = useSelector((state)=>state.language)

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
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 195) {
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



  // const handleSearch = () => {
  //   const searchText = searchTextRef.current.value;
  //   const elements = document.getElementsByClassName('highlightable');

  //   for (const element of elements) {
  //     const text = element.textContent || element.innerText;
  //     const matchIndex = text.indexOf(searchText);

  //     if (matchIndex !== -1) {
  //       const beforeText = text.substring(0, matchIndex);
  //       const matchText = text.substring(
  //         matchIndex,
  //         matchIndex + searchText.length
  //       );
  //       const afterText = text.substring(matchIndex + searchText.length);

  //       // Apply bold style to the matching text
  //       const styledHTML = `
  //         ${beforeText}<span class="bold">${matchText}</span>${afterText}
  //       `;
  //       element.innerHTML = styledHTML;

  //       // Scroll to the element
  //       element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  //       console.log(matchText)

  //       return; // Stop searching after finding the first match
  //     } else {
  //       // Reset the element's innerHTML if no match is found
  //       element.innerHTML = text;
  //     }
  //   }
  // };
  console.log("naem",props.HeaderSearch)
  console.log("text",props.Text)

  const [searchInput, setSearchInput] = useState('');
  const SearchBox = ( 
    <div
      className="d-flex justify-content-between"
      style={{ width: "325px", height: "60px" }}
    >
      <input
          type="text"
          id="searchText"
          style={{ width: "240px", maxWidth: "240px", height: "60px" }}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="update" onClick={handleSearch}>Search</button>
    </div>
  );



  return (
    <>
    <div
          style={{
            position: "relative",
            // height: "400px",
            // width: "100vw",
            zIndex: 9999,
            paddingRight: "13px",
            paddingTop: 5,

            // paddingBottom:10
            backgroundColor:"transparent"
          }}
        >
          <div className="boxshadowNavBar2">
            <div className="row">
              <div className="col-lg-6 l-side px-5">
                <div
                  style={
                    // windowWidth <= 1440
                    //   ? { width: "21%", height: "130px" }
                    //   : { width: "16%", height: "150px" }
                    windowWidth <= 1366
                    ? {
                      // marginLeft: "15px",
                      marginRight: "-4px",
                      // marginTop: "39px",
                    }
                    : {
                      marginLeft: "22px",
                      marginRight: "7px",
                      // marginTop: "39px",
                    }
                  }
                >
                  <a href="https://www.sindh.gov.pk/" target="_blank">
                  <img
                    src={sindh}
                    alt=""
                    className="marginDPI"
                    width={windowWidth <= 1440 ? "95" : "115"}
                    height={windowWidth <= 1440 ? "115" : "135"}
                  />
                </a>
                </div>
                <div className="vl"></div>
                <img
                  className="clickMainHeaderLogo"
                  style={{ marginLeft: "10px" }}
                  src={Group8364}
                  alt=""
                ></img>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 r-side  " style={{marginTop:-22}}>
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
                  src={language === "ur" ? English : urdu}
                  alt=""
                  onClick={props.toggleLanguage}
                  // style={{ marginLeft: "20px", marginRight: "20px" }}
                  style={language == "ur" ?{height:"10px",width:"50px",marginLeft: "20px", marginRight: "20px"}:{marginLeft: "20px", marginRight: "20px"}}
                />
                <img
                  className="headerLogoImages"
                  src={language === "sd" ? English : Sindhi}
                  // src={Sindhi}
                  alt=""
                  onClick={props.SindhitoggleLanguage}
                  // style={{ marginLeft: "20px", marginRight: "20px" }}
                  style={language == "sd" ?{height:"10px",width:"50px",marginLeft: "20px", marginRight: "20px"}:{marginLeft: "20px", marginRight: "20px"}}
                />
                <a href="comingsoon.html">
                  <button type="button" className="login">
                    <span>{translations["Login"][language]}</span>
                  </button>
                </a>
                &nbsp;&nbsp;
                <Link to={"/feedback"} style={{ textDecoration: "none" }}>
                  <button type="button" className="feedback">
                    <span>
                      {translations["Feedback"][language]}
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            {isSticky === true ? (
              <div style={{ position: "relative", zIndex: "99999999999" }}>
                <GenericHeader toggleLanguage={props.toggleLanguage} SindhitoggleLanguage={props.SindhitoggleLanguage} handleSearch={props.handleSearch}  searchTextRef={props.searchTextRef}/>
              </div>
            ) : 
            (
              // <div className={`header `}>
              //   <div className={"row "}>
              //     <div
              //       className={" navbar boxshadowNavBar justify-content-end"}
              //       style={{ width: "100%", paddingRight: "8px" }}
              //     >
              //       <ul
              //         style={
              //           language === "ur" || language === "sd"
              //             ? {
              //               display: "flex",
              //               marginBottom: "0px",
              //               flexDirection: "row-reverse",
              //             }
              //             : { marginBottom: "0px" }
              //         }
              //       >
              //         <li>
              //           <a
              //             href="comingsoon.html"
              //             title="Home Page"
              //             className={"link"}
              //           >
              //             <Link className={"link"} to={"/home"}>
              //               {translations["home"][language]}
              //             </Link>
              //           </a>
              //         </li>
              //         <li>
              //           <a
              //             href="comingsoon.html"
              //             title="Home Page"
              //             className={"link"}
              //           >
              //             <Link className={"link"} to={"/WhySindh"}>
              //               {
              //                 translations["sindhATglance"][
              //                 language
              //                 ]
              //               }
              //             </Link>
              //           </a>
              //         </li>
              //         <li>
              //           <a title="" className={"link"}>
              //             <Link className="link" to={"/InvestNow"}>
              //               {translations["InvestNow"][language]}
              //             </Link>
              //           </a>
              //         </li>
              //         <li>
              //           <div
              //             class="dropdown"
              //             style={
              //               language === "ur" || language === "sd"
              //                 ? {
              //                   display: "flex",
              //                   flexDirection: "row-reverse",
              //                 }
              //                 : {}
              //             }
              //           >
              //             <span
              //               style={{
              //                 marginRight: "5px",
              //                 textDecoration: "none",
              //               }}
              //               className={"link"}
              //             >
              //               <Link className={"link"} to={"/Opportunity"}>
              //                 {
              //                   translations["Opportunities"][
              //                   language
              //                   ]
              //                 }
              //               </Link>
              //             </span>
              //             <i
              //               // style={{ marginTop: "0px", marginLeft: "0px" }}
              //               class="dropbtn iconDown hover-rotate fa fa-chevron-right"
              //               style={
              //                 language === "ur" ||
              //                   language === "sd"
              //                   ? {
              //                     marginTop: "5px", marginRight: "3px"
              //                   }
              //                   : {
              //                     marginTop: "0px", marginLeft: "0px"
              //                   }
              //               }
              //             ></i>
              //             <div
              //               class="dropdown-content"
              //               style={
              //                 language === "ur" || language === "sd"
              //                   ? { marginTop: "30px" }
              //                   : {}
              //               }
              //             >
              //               <div
              //                 class="nested-dropdown"
              //                 style={{ width: "100%" }}
              //               >
              //                 <span
              //                   style={
              //                     language === "ur" ||
              //                       language === "sd"
              //                       ? {
              //                         display: "flex",
              //                         width: "100%",
              //                         flexDirection: "row-reverse",
              //                       }
              //                       : {
              //                         display: "flex",
              //                         position: "relative",
              //                         width: "100%",
              //                       }
              //                   }
              //                 >
              //                   <a
              //                     // style={{
              //                     //   width: "300px",
              //                     //   paddingLeft: "15px",
              //                     //   height: "40px",
              //                     //   paddingTop: "8px",
              //                     // }}
              //                     style={
              //                       language === "ur" ||
              //                         language === "sd"
              //                         ? {
              //                           width: "210px",
              //                           paddingLeft: "15px",
              //                           height: "40px",
              //                           paddingTop: "8px",
              //                           display: "flex",
              //                           flexDirection: "row-reverse",
              //                         }
              //                         : {
              //                           width: "300px",
              //                           paddingLeft: "15px",
              //                           height: "40px",
              //                           paddingTop: "8px",
              //                         }
              //                     }
              //                     href="#"
              //                   >
              //                     <Link
              //                       className={"link"}
              //                       to={"/manufacturing"}
              //                       onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}
              //                     >
              //                       {
              //                         translations["Manufacturing"][
              //                         language
              //                         ]
              //                       }
              //                     </Link>
              //                   </a>
              //                   <i
              //                     style={
              //                       language === "ur" ||
              //                         language === "sd"
              //                         ? {
              //                           marginTop: "10px",
              //                           marginLeft: "0px",
              //                           position: "absolute",
              //                           left: "10px",
              //                           display: "flex",
              //                           flexDirection: "row-reverse",
              //                         }
              //                         : {
              //                           marginTop: "10px",
              //                           marginLeft: "0px",
              //                           position: "absolute",
              //                           right: "15px",
              //                         }
              //                     }
              //                     class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
              //                   ></i>
              //                 </span>
              //                 <div
              //                   class="dropdown-content nested-content nested-right"
              //                   style={{ width: "200px" }}
              //                 >
              //                   <Link className={""} to={"/manufacturing#expertform"}>
              //                     <a href="#" >
              //                       {
              //                         translations["Talktoexpert"][
              //                         language
              //                         ]
              //                       }
              //                     </a>
              //                   </Link>
              //                 </div>
              //               </div>

              //               <div
              //                 class="nested-dropdown"
              //                 style={{ width: "100%" }}
              //               >
              //                 <span
              //                   style={
              //                     language === "ur" ||
              //                       language === "sd"
              //                       ? {
              //                         display: "flex",
              //                         width: "100%",
              //                         flexDirection: "row-reverse",
              //                       }
              //                       : {
              //                         display: "flex",
              //                         position: "relative",
              //                         width: "100%",
              //                       }
              //                   }
              //                 >
              //                   <a
              //                     style={
              //                       language === "ur" ||
              //                         language === "sd"
              //                         ? {
              //                           width: "210px",
              //                           paddingLeft: "15px",
              //                           height: "40px",
              //                           paddingTop: "8px",
              //                           display: "flex",
              //                           flexDirection: "row-reverse",
              //                         }
              //                         : {
              //                           width: "300px",
              //                           paddingLeft: "15px",
              //                           height: "40px",
              //                           paddingTop: "8px",
              //                         }
              //                     }
              //                     href="#"
              //                   >
              //                     <Link onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }} className={"link"} to={"/textile"}>
              //                       {
              //                         translations["Textile"][
              //                         language
              //                         ]
              //                       }
              //                     </Link>
              //                   </a>
              //                   <i
              //                     style={
              //                       language === "ur" ||
              //                         language === "sd"
              //                         ? {
              //                           marginTop: "10px",
              //                           marginLeft: "0px",
              //                           position: "absolute",
              //                           left: "10px",
              //                           display: "flex",
              //                           flexDirection: "row-reverse",
              //                         }
              //                         : {
              //                           marginTop: "10px",
              //                           marginLeft: "0px",
              //                           position: "absolute",
              //                           right: "15px",
              //                         }
              //                     }
              //                     class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
              //                   ></i>
              //                 </span>
              //                 <div
              //                   class="dropdown-content nested-content nested-right"
              //                   style={{ width: "200px", marginTop: "40px" }}
              //                 >
              //                   <Link className={""} to={"/textile#expertform"}>
              //                     <a  href="#">
              //                       {
              //                         translations["Talktoexpert"][
              //                         language
              //                         ]
              //                       }
              //                     </a>
              //                   </Link>
              //                 </div>
              //               </div>

              //               <div
              //                 class="nested-dropdown"
              //                 style={{ width: "100%" }}
              //               >
              //                 <span
              //                   style={
              //                     language === "ur" ||
              //                       language === "sd"
              //                       ? {
              //                         display: "flex",
              //                         width: "100%",
              //                         flexDirection: "row-reverse",
              //                       }
              //                       : {
              //                         display: "flex",
              //                         position: "relative",
              //                         width: "100%",
              //                       }
              //                   }
              //                 >
              //                   <a
              //                     style={
              //                       language === "ur" ||
              //                         language === "sd"
              //                         ? {
              //                           width: "210px",
              //                           paddingLeft: "15px",
              //                           height: "40px",
              //                           paddingTop: "8px",
              //                           display: "flex",
              //                           flexDirection: "row-reverse",
              //                         }
              //                         : {
              //                           width: "300px",
              //                           paddingLeft: "15px",
              //                           height: "40px",
              //                           paddingTop: "8px",
              //                         }
              //                     }
              //                     href="#"
              //                   >
              //                     <Link
              //                       onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}
              //                       className={"link"} to={"/tourism"}>
              //                       {
              //                         translations["Tourism"][
              //                         language
              //                         ]
              //                       }
              //                     </Link>
              //                   </a>
              //                   <i
              //                     style={
              //                       language === "ur" ||
              //                         language === "sd"
              //                         ? {
              //                           marginTop: "10px",
              //                           marginLeft: "0px",
              //                           position: "absolute",
              //                           left: "10px",
              //                           display: "flex",
              //                           flexDirection: "row-reverse",
              //                         }
              //                         : {
              //                           marginTop: "10px",
              //                           marginLeft: "0px",
              //                           position: "absolute",
              //                           right: "15px",
              //                         }
              //                     }
              //                     class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
              //                   ></i>
              //                 </span>
              //                 <div
              //                   class="dropdown-content nested-content nested-right"
              //                   style={{ width: "200px", marginTop: "80px" }}
              //                 >
              //                   <Link className={""} to={"/tourism#expertform"} >
              //                     <a  href="#">
              //                       {
              //                         translations["Talktoexpert"][
              //                         language
              //                         ]
              //                       }
              //                     </a>
              //                   </Link>
              //                 </div>
              //               </div>

              //               <div
              //                 class="nested-dropdown"
              //                 style={{ width: "100%" }}
              //               >
              //                 <span
              //                   style={
              //                     language === "ur" ||
              //                       language === "sd"
              //                       ? {
              //                         display: "flex",
              //                         width: "100%",
              //                         flexDirection: "row-reverse",
              //                       }
              //                       : {
              //                         display: "flex",
              //                         position: "relative",
              //                         width: "100%",
              //                       }
              //                   }
              //                 >
              //                   <a
              //                     style={
              //                       language === "ur" ||
              //                         language === "sd"
              //                         ? {
              //                           width: "210px",
              //                           paddingLeft: "15px",
              //                           height: "40px",
              //                           paddingTop: "8px",
              //                           display: "flex",
              //                           flexDirection: "row-reverse",
              //                         }
              //                         : {
              //                           width: "300px",
              //                           paddingLeft: "15px",
              //                           height: "40px",
              //                           paddingTop: "8px",
              //                         }
              //                     }
              //                     href="#"
              //                   >
              //                     <Link
              //                       onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}
              //                       className={"link"} to={"/agriculture"}>
              //                       {
              //                         translations["Agriculture"][
              //                         language
              //                         ]
              //                       }
              //                     </Link>
              //                   </a>
              //                   <i
              //                     style={
              //                       language === "ur" ||
              //                         language === "sd"
              //                         ? {
              //                           marginTop: "10px",
              //                           marginLeft: "0px",
              //                           display: "flex",
              //                           flexDirection: "row-reverse",
              //                           position: "absolute",
              //                           left: "10px",
              //                         }
              //                         : {
              //                           marginTop: "10px",
              //                           marginLeft: "0px",
              //                           position: "absolute",
              //                           right: "15px",
              //                         }
              //                     }
              //                     class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
              //                   ></i>
              //                 </span>
              //                 <div
              //                   class="dropdown-content nested-content nested-right"
              //                   style={{ width: "200px", marginTop: "120px" }}
              //                 >
              //                   <Link className={""} to={"/agriculture#expertform"}>
              //                     <a  href="#"  >
              //                       {
              //                         translations["Talktoexpert"][
              //                         language
              //                         ]
              //                       }
              //                     </a>
              //                   </Link>
              //                 </div>
              //               </div>

              //               <div
              //                 class="nested-dropdown"
              //                 style={{ width: "100%" }}
              //               >
              //                 <span
              //                   style={
              //                     language === "ur" ||
              //                       language === "sd"
              //                       ? {
              //                         display: "flex",
              //                         width: "100%",
              //                         flexDirection: "row-reverse",
              //                       }
              //                       : {
              //                         display: "flex",
              //                         position: "relative",
              //                         width: "100%",
              //                       }
              //                   }
              //                 >
              //                   <a
              //                     style={
              //                       language === "ur" ||
              //                         language === "sd"
              //                         ? {
              //                           width: "210px",
              //                           paddingLeft: "15px",
              //                           height: "40px",
              //                           paddingTop: "8px",
              //                           display: "flex",
              //                           flexDirection: "row-reverse",
              //                         }
              //                         : {
              //                           width: "300px",
              //                           paddingLeft: "15px",
              //                           height: "40px",
              //                           paddingTop: "8px",
              //                         }
              //                     }
              //                     href="#"
              //                   >
              //                     <Link
              //                       onClick={() => {
              //                         window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              //                       }} className={"link"} to={"/education"}>
              //                       {
              //                         translations["Education"][
              //                         language
              //                         ]
              //                       }
              //                     </Link>
              //                   </a>
              //                   <i
              //                     style={
              //                       language === "ur" ||
              //                         language === "sd"
              //                         ? {
              //                           marginTop: "10px",
              //                           marginLeft: "0px",
              //                           position: "absolute",
              //                           left: "10px",
              //                           display: "flex",
              //                           flexDirection: "row-reverse",
              //                           position: "absolute",
              //                           left: "10px",
              //                         }
              //                         : {
              //                           marginTop: "10px",
              //                           marginLeft: "0px",
              //                           position: "absolute",
              //                           right: "15px",
              //                         }
              //                     }
              //                     class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
              //                   ></i>
              //                 </span>
              //                 <div
              //                   class="dropdown-content nested-content nested-right"
              //                   style={{ width: "200px", marginTop: "160px" }}
              //                 >
              //                   <Link className={""} to={"/education#expertform"}>
              //                     <a  href="#">
              //                       {
              //                         translations["Talktoexpert"][
              //                         language
              //                         ]
              //                       }
              //                     </a>
              //                   </Link>
              //                 </div>
              //               </div>

              //               <div
              //                 class="nested-dropdown"
              //                 style={{ width: "100%" }}
              //               >
              //                 <span
              //                   style={
              //                     language === "ur" ||
              //                       language === "sd"
              //                       ? {
              //                         display: "flex",
              //                         width: "100%",
              //                         flexDirection: "row-reverse",
              //                       }
              //                       : {
              //                         display: "flex",
              //                         position: "relative",
              //                         width: "100%",
              //                       }
              //                   }
              //                 >
              //                   <a
              //                     style={
              //                       language === "ur" ||
              //                         language === "sd"
              //                         ? {
              //                           width: "210px",
              //                           paddingLeft: "15px",
              //                           height: "40px",
              //                           paddingTop: "8px",
              //                           display: "flex",
              //                           flexDirection: "row-reverse",
              //                         }
              //                         : {
              //                           width: "300px",
              //                           paddingLeft: "15px",
              //                           height: "40px",
              //                           paddingTop: "8px",
              //                         }
              //                     }
              //                     href="#"
              //                   >
              //                     <Link
              //                       onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}
              //                       className={"link"} to={"/energy"}>
              //                       {
              //                         translations["Energy"][
              //                         language
              //                         ]
              //                       }
              //                     </Link>
              //                   </a>
              //                   <i
              //                     style={
              //                       language === "ur" ||
              //                         language === "sd"
              //                         ? {
              //                           marginTop: "10px",
              //                           marginLeft: "0px",
              //                           position: "absolute",
              //                           left: "10px",
              //                           display: "flex",
              //                           flexDirection: "row-reverse",
              //                         }
              //                         : {
              //                           marginTop: "10px",
              //                           marginLeft: "0px",
              //                           position: "absolute",
              //                           right: "15px",
              //                         }
              //                     }
              //                     class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
              //                   ></i>
              //                 </span>
              //                 <div
              //                   class="dropdown-content nested-content nested-right"
              //                   style={{ width: "200px", marginTop: "200px" }}
              //                 >
              //                   <Link  className={""} to={"/energy#expertform"}>
              //                     <a href="#">
              //                       {
              //                         translations["Talktoexpert"][
              //                         language
              //                         ]
              //                       }
              //                     </a>
              //                   </Link>
              //                 </div>
              //               </div>

              //               <div
              //                 class="nested-dropdown"
              //                 style={{ width: "100%" }}
              //               >
              //                 <span
              //                   style={
              //                     language === "ur" ||
              //                       language === "sd"
              //                       ? {
              //                         display: "flex",
              //                         width: "100%",
              //                         flexDirection: "row-reverse",
              //                       }
              //                       : {
              //                         display: "flex",
              //                         position: "relative",
              //                         width: "100%",
              //                       }
              //                   }
              //                 >
              //                   <a
              //                     style={
              //                       language === "ur" ||
              //                         language === "sd"
              //                         ? {
              //                           width: "210px",
              //                           paddingLeft: "15px",
              //                           height: "40px",
              //                           paddingTop: "8px",
              //                           display: "flex",
              //                           flexDirection: "row-reverse",
              //                         }
              //                         : {
              //                           width: "300px",
              //                           paddingLeft: "15px",
              //                           height: "40px",
              //                           paddingTop: "8px",
              //                         }
              //                     }
              //                     href="#"
              //                   >
              //                     <Link onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }} className={"link"} to={"/health"}>
              //                       {
              //                         translations["Health"][
              //                         language
              //                         ]
              //                       }
              //                     </Link>
              //                   </a>
              //                   <i
              //                     style={
              //                       language === "ur" ||
              //                         language === "sd"
              //                         ? {
              //                           marginTop: "10px",
              //                           marginLeft: "0px",
              //                           display: "flex",
              //                           position: "absolute",
              //                           left: "10px",
              //                           flexDirection: "row-reverse",
              //                         }
              //                         : {
              //                           marginTop: "10px",
              //                           marginLeft: "0px",
              //                           position: "absolute",
              //                           right: "15px",
              //                         }
              //                     }
              //                     class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
              //                   ></i>
              //                 </span>
              //                 <div
              //                   class="dropdown-content nested-content nested-right"
              //                   style={{ width: "200px", marginTop: "240px" }}
              //                 >
              //                   <Link  className={""} to={"/health#expertform"}>
              //                     <a  href="#">
              //                       {
              //                         translations["Talktoexpert"][
              //                         language
              //                         ]
              //                       }
              //                     </a>
              //                   </Link>
              //                 </div>
              //               </div>

              //               <div
              //                 class="nested-dropdown"
              //                 style={{ width: "100%" }}
              //               >
              //                 <span
              //                   style={
              //                     language === "ur" ||
              //                       language === "sd"
              //                       ? {
              //                         display: "flex",
              //                         width: "100%",
              //                         flexDirection: "row-reverse",
              //                       }
              //                       : {
              //                         display: "flex",
              //                         position: "relative",
              //                         width: "100%",
              //                       }
              //                   }
              //                 >
              //                   <a
              //                     style={
              //                       language === "ur" ||
              //                         language === "sd"
              //                         ? {
              //                           width: "210px",
              //                           paddingLeft: "15px",
              //                           height: "40px",
              //                           paddingTop: "8px",
              //                           display: "flex",
              //                           flexDirection: "row-reverse",
              //                         }
              //                         : {
              //                           width: "300px",
              //                           paddingLeft: "15px",
              //                           height: "40px",
              //                           paddingTop: "8px",
              //                         }
              //                     }
              //                     href="#"
              //                   >
              //                     <Link
              //                       onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}
              //                       className={"link"}
              //                       to={"/informationtech"}

              //                     >
              //                       {
              //                         translations[
              //                         "InformationTechnology"
              //                         ][language]
              //                       }
              //                     </Link>
              //                   </a>
              //                   <i
              //                     style={
              //                       language === "ur" ||
              //                         language === "sd"
              //                         ? {
              //                           marginTop: "10px",
              //                           marginLeft: "0px",
              //                           display: "flex",
              //                           position: "absolute",
              //                           left: "10px",
              //                           flexDirection: "row-reverse",
              //                         }
              //                         : {
              //                           marginTop: "10px",
              //                           marginLeft: "0px",
              //                           position: "absolute",
              //                           right: "15px",
              //                         }
              //                     }
              //                     class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
              //                   ></i>
              //                 </span>
              //                 <div
              //                   class="dropdown-content nested-content nested-right"
              //                   style={{ width: "200px", marginTop: "280px" }}
              //                 >
              //                   <Link  className={""}  to={"/informationtech#expertform"}>
              //                     <a  href="#">
              //                       {
              //                         translations["Talktoexpert"][
              //                         language
              //                         ]
              //                       }
              //                     </a>
              //                   </Link>
              //                 </div>
              //               </div>
              //             </div>
              //           </div>
              //         </li>
              //         <li>
              //           <a title="" className={"link"}>
              //             <Link className="link" to={"/NewsAndInformation"}>
              //               {
              //                 translations["NewsInformation"][
              //                 language
              //                 ]
              //               }
              //             </Link>
              //           </a>
              //         </li>
              //         <li>
              //           <div
              //             class="dropdown"
              //             style={
              //               language === "ur" || language === "sd"
              //                 ? {
              //                   display: "flex",
              //                   flexDirection: "row-reverse",
              //                 }
              //                 : {}
              //             }
              //           >
              //             <span
              //               style={{
              //                 marginRight: "5px",
              //                 textDecoration: "none",
              //               }}
              //               className={"link"}
              //             >
              //               {translations["Resources"][language]}
              //             </span>
              //             <i
              //               // style={{ marginTop: "0px", marginLeft: "0px" }}
              //               style={
              //                 language === "ur" ||
              //                   language === "sd"
              //                   ? {
              //                     marginTop: "5px", marginRight: "5px"
              //                   }
              //                   : {
              //                     marginTop: "0px", marginLeft: "0px"
              //                   }
              //               }
              //               class=" dropbtn iconDown hover-rotate fa fa-chevron-right"
              //             ></i>
              //             <div
              //               class="dropdown-content"
              //               style={
              //                 language === "ur" || language === "sd"
              //                   ? { marginTop: "30px" }
              //                   : {}
              //               }
              //             >
              //               <Link className={""} to={"/resource"}>
              //                 <a target="_blank" href="">
              //                   {/* <Link className="link" to={"/ComingSoon"}> */}
              //                   {translations["Download"][language]}
              //                 </a>
              //               </Link>
              //               <Link className={""} to={"/regulatorycatalog"}>
              //                 <a href="#">
              //                   {
              //                     translations["RegulatoryCatalog"][
              //                     language
              //                     ]
              //                   }
              //                 </a>
              //               </Link>
              //             </div>
              //           </div>
              //         </li>
              //         <li>
              //           <div
              //             class="dropdown"
              //             style={
              //               language === "ur" || language === "sd"
              //                 ? {
              //                   display: "flex",
              //                   flexDirection: "row-reverse",
              //                 }
              //                 : {}
              //             }
              //           >
              //             <span
              //               style={{
              //                 marginRight: "5px",
              //                 textDecoration: "none",
              //               }}
              //               className={"link"}
              //             >
              //               {" "}
              //               {translations["Aboutus"][language]}
              //             </span>
              //             <i
              //               // style={{ marginTop: "5px", marginRight: "5px",}}
              //               style={
              //                 language === "ur" ||
              //                   language === "sd"
              //                   ? {
              //                     marginTop: "5px", marginRight: "5px"
              //                   }
              //                   : {
              //                     marginTop: "0px", marginLeft: "0px"
              //                   }
              //               }
              //               class="dropbtn iconDown hover-rotate fa fa-chevron-right"
              //             ></i>
              //             <div
              //               class="dropdown-content"
              //               style={
              //                 language === "ur" || language === "sd"
              //                   ? { marginTop: "30px" }
              //                   : {}
              //               }
              //             >
              //               <Link className="" to={"/aboutus"}>
              //                 <a
              //                   target="_blank"
              //                   href=""
              //                   style={
              //                     language === "ur" ||
              //                       language === "sd"
              //                       ? {
              //                         display: "flex",
              //                         flexDirection: "row-reverse",
              //                         marginRight: "-16px",
              //                       }
              //                       : {}
              //                   }
              //                 >
              //                   {translations["Vision"][language]}
              //                 </a>
              //               </Link>
              //               <div
              //                 class="nested-dropdown"
              //                 style={{ width: "100%" }}
              //               >
              //                 <span
              //                   style={
              //                     language === "ur" ||
              //                       language === "sd"
              //                       ? {
              //                         display: "flex",
              //                         flexDirection: "row-reverse",
              //                         width: "100%",
              //                       }
              //                       : {
              //                         display: "flex",
              //                         position: "relative",
              //                         width: "100%",
              //                       }
              //                   }
              //                 >
              //                   <a
              //                     style={
              //                       language === "ur" ||
              //                         language === "sd"
              //                         ? {
              //                           width: "88%",
              //                           paddingLeft: "30px",
              //                           height: "40px",
              //                           paddingTop: "8px",
              //                           display: "flex",
              //                           flexDirection: "row-reverse",
              //                         }
              //                         : {
              //                           width: "100%",
              //                           paddingLeft: "30px",
              //                           height: "40px",
              //                           paddingTop: "8px",
              //                         }
              //                     }
              //                     href="#"
              //                   >
              //                     {
              //                       translations["Components"][
              //                       language
              //                       ]
              //                     }
              //                   </a>
              //                   <i
              //                     // style={{
              //                     //   marginTop: "10px",
              //                     //   marginLeft: "0px",
              //                     //   position: "absolute",
              //                     //   right: "15px",
              //                     // }}
              //                     style={
              //                       language === "ur" ||
              //                         language === "sd"
              //                         ? {
              //                           marginTop: "10px",
              //                           marginLeft: "0px",
              //                           display: "flex",
              //                           flexDirection: "row-reverse",
              //                         }
              //                         : {
              //                           marginTop: "10px",
              //                           marginLeft: "0px",
              //                           position: "absolute",
              //                           right: "15px",
              //                         }
              //                     }
              //                     class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
              //                   ></i>
              //                 </span>
              //                 <div
              //                   class="dropdown-content nested-content nested-right"
              //                   style={{ left: "auto" }}
              //                 >
              //                   <Link className={""} to={"/Component"}>
              //                     <a href="#">
              //                       {
              //                         translations["CLICKSID"][
              //                         language
              //                         ]
              //                       }
              //                     </a>
              //                   </Link>
              //                   <Link className={""} to={"/Team"}>
              //                     <a href="#">
              //                       {
              //                         translations["OurTeam"][
              //                         language
              //                         ]
              //                       }
              //                     </a>
              //                   </Link>
              //                 </div>
              //               </div>
              //               <Link className={""} to={"/Team"}>
              //                 <a
              //                   href="#"
              //                   style={
              //                     language === "ur" ||
              //                       language === "sd"
              //                       ? {
              //                         display: "flex",
              //                         flexDirection: "row-reverse",
              //                         marginRight: "-16px",
              //                       }
              //                       : {}
              //                   }
              //                 >
              //                   {translations["CLICKSID"][language]}
              //                 </a>
              //               </Link>
              //             </div>
              //           </div>
              //         </li>

              //         <li>
              //           <a href="comingsoon.html" title="" className={"link"}>
              //             <Link className="link" to={"/Maps"}>
              //               {translations["Maps"][language]}
              //             </Link>
              //           </a>
              //         </li>
              //         <li>
              //           <a  title="" width="10">
              //             <Tooltip
              //               overlayInnerStyle=
              //               {{ borderRadius: "0px",
              //               width: "350px",
              //               minWidth: "350px",
              //                position: "relative",
              //                right: "100px"}}
              //               color={"#Ffffff"}
              //               placement="bottomLeft"
              //               title={SearchBox}
              //               arrow={mergedArrow}
              //             >
              //               <i
              //                 className="fa-sharp fa-solid fa-magnifying-glass"
              //                 style={
              //                   isSticky
              //                     ? { color: "#000000" }
              //                     : { color: "#ffffff" }
              //                 }
              //               ></i>
              //             </Tooltip>
              //           </a>
              //         </li>
              //       </ul>
              //     </div>
              //   </div>
              // </div>
              
              <div className={`header `}>
              <div className={"row "}>
                <div
                  className={" navbar boxshadowNavBar justify-content-end"}
                  style={language === "ur" || language === "sd"?{marginTop:-46}:{ width: "100%", paddingRight: "0px", marginTop:-52,}}
                >
                  <ul
                    style={
                      language === "ur" || language === "sd"
                        ? {
                          display: "flex",
                          marginBottom: "0px",
                          flexDirection: "row-reverse",
                         
                        }
                        : { marginBottom: "0px" ,paddingRight:10,marginTop:10}
                    }
                  >
                    <li>
                      <a
                        href="comingsoon.html"
                        title="Home Page"
                        className={"link"}
                      >
                        <Link className={"link"} to={"/home"}>
                          {translations["home"][language]}
                        </Link>
                      </a>
                    </li>
                    
                    <li>
                      <a
                        href="comingsoon.html"
                        title="Home Page"
                        className={"link"}
                      >
                        <Link className={"link"} to={"/feedback"}>
                          {
                            translations["Feedback"][
                            language
                            ]
                          }
                        </Link>
                      </a>
                    </li>
                    {/* <li>
                      <a title="" className={"link"}>
                        <Link className="link" to={"/regulatorycatalog"}>
                          {translations["InteractiveRegularity"][language]}
                        </Link>
                      </a>
                    </li> */}
                    <li>
                    <div
                        class="dropdown"
                        style={
                          language === "ur" || language === "sd"
                            ? {
                              display: "flex",
                              flexDirection: "row-reverse",
                            }
                            : {
                              marginRight:10
                            }
                        }
                      >
                        <span
                          style={{
                            marginRight: "5px",
                            textDecoration: "none",
                          }}
                          className={"link"}
                        >
                          {" "}
                          {translations["InteractiveRegularity"][language]}
                        </span>
                        <i
                          // style={{ marginTop: "5px", marginRight: "5px",}}
                          style={
                            language === "ur" ||
                              language === "sd"
                              ? {
                                marginTop: "5px", marginRight: "5px"
                              }
                              : {
                                marginTop: "0px", marginLeft: "3px",
                                marginRight:-7
                              }
                          }
                          class="dropbtn iconDown hover-rotate fa fa-chevron-right"
                        ></i>
                        <div
                          class="dropdown-content"
                          style={
                            language === "ur" || language === "sd"
                              ? { marginTop: "30px" }
                              : {
                                marginLeft:0
                              }
                          }
                        >
                         
                          {/* <div
                            class="nested-dropdown"
                            style={{ width: "100%" }}
                          >
                            <span
                              style={
                                language === "ur" ||
                                  language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    width: "100%",
                                  }
                                  : {
                                    display: "flex",
                                    position: "relative",
                                    width: "100%",
                                  }
                              }
                            >
                              <a
                                style={
                                  language === "ur" ||
                                    language === "sd"
                                    ? {
                                      width: "88%",
                                      paddingLeft: "30px",
                                      height: "40px",
                                      paddingTop: "8px",
                                      display: "flex",
                                      flexDirection: "row-reverse",
                                    }
                                    : {
                                      width: "100%",
                                      paddingLeft: "30px",
                                      height: "40px",
                                      paddingTop: "8px",
                                    }
                                }
                                href="#"
                              >
                                {
                                  translations["Components"][
                                  language
                                  ]
                                }
                              </a>
                              <i
                                // style={{
                                //   marginTop: "10px",
                                //   marginLeft: "0px",
                                //   position: "absolute",
                                //   right: "15px",
                                // }}
                                style={
                                  language === "ur" ||
                                    language === "sd"
                                    ? {
                                      marginTop: "10px",
                                      marginLeft: "0px",
                                      display: "flex",
                                      flexDirection: "row-reverse",
                                    }
                                    : {
                                      marginTop: "10px",
                                      marginLeft: "0px",
                                      position: "absolute",
                                      right: "15px",
                                    }
                                }
                                class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
                              ></i>
                            </span>
                            <div
                              class="dropdown-content nested-content nested-right"
                              style={{ left: "auto" }}
                            >
                              <Link className={""} to={"/Component"}>
                                <a href="#">
                                  {
                                    translations["CLICKSID"][
                                    language
                                    ]
                                  }
                                </a>
                              </Link>
                              <Link className={""} to={"/Team"}>
                                <a href="#">
                                  {
                                    translations["OurTeam"][
                                    language
                                    ]
                                  }
                                </a>
                              </Link>
                            </div>
                          </div> */}
                       <Link className="" to={"/Maps"}>
                            <a
                              target="_blank"
                              href=""
                              style={
                                language === "ur" ||
                                  language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    marginRight: "-16px",
                                  }
                                  : {}
                              }
                            >
                              {translations["Maps"][language]}
                            </a>
                          </Link>
                         
                          <Link className={""} to={"/regulatorycatalog"}>
                            <a
                              href="#"
                              style={
                                language === "ur" ||
                                  language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    marginRight: "-16px",
                                  }
                                  : {}
                              }
                            >
                              {translations["RegulatoryCatalog"][language]}
                            </a>
                          </Link>
                          <Link className={""} to={"/RegulatoryCatalogCalculator"}>
                            <a
                              href="#"
                              style={
                                language === "ur" ||
                                  language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    marginRight: "-16px",
                                  }
                                  : {}
                              }
                            >
                              {translations["calculatorButton"][language]}
                            </a>
                          </Link>
                          <Link className="" to={"/Dashboard"}>
                            <a
                              target="_blank"
                              href=""
                              style={
                                language === "ur" ||
                                  language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    marginRight: "-16px",
                                  }
                                  : {}
                              }
                            >
                              {translations["statistics"][language]}
                            </a>
                          </Link>
                          <Link className="" to={"/tutorial"}>
                            <a
                              target="_blank"
                              href=""
                              style={
                                language === "ur" ||
                                  language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    marginRight: "-16px",
                                  }
                                  : {}
                              }
                            >
                              {translations["Tutorial"][language]}
                            </a>
                          </Link>
                          {/* <Link className={""} to={"/resource"}>
                            <a
                              href="#"
                              style={
                                language === "ur" ||
                                  language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    marginRight: "-16px",
                                  }
                                  : {}
                              }
                            >
                              {translations["Downloads"][language]}
                            </a>
                          </Link>
                          <Link className={""} to={"/Team"}>
                            <a
                              href="#"
                              style={
                                language === "ur" ||
                                  language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    marginRight: "-16px",
                                  }
                                  : {}
                              }
                            >
                              {translations["Team"][language]}
                            </a>
                          </Link>
                          <Link className={""} to={""}>
                            <a
                              href="#"
                              style={
                                language === "ur" ||
                                  language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    marginRight: "-16px",
                                  }
                                  : {}
                              }
                            >
                              {translations["Contactus"][language]}
                            </a>
                          </Link> */}
                        </div>
                      </div>
                    </li>
                    <li>
                      <a
                        href="https://business.gov.pk/home_prmi/"
                        title="Home Page"
                        className={"link"}
                        target="_blank"
                      >
                        {/* <Link className={"link"} to={"/home"}> */}
                          {"PRMI"}
                        {/* </Link> */}
                      </a>
                    </li>
                    <li>
                    <div
                        class="dropdown"
                        style={
                          language === "ur" || language === "sd"
                            ? {
                              display: "flex",
                              flexDirection: "row-reverse",
                            }
                            : {}
                        }
                      >
                        <span
                          style={{
                            marginRight: "5px",
                            textDecoration: "none",
                          }}
                          className={"link"}
                        >
                          {" "}
                          {translations["Aboutus"][language]}
                        </span>
                        <i
                          // style={{ marginTop: "5px", marginRight: "5px",}}
                          style={
                            language === "ur" ||
                              language === "sd"
                              ? {
                                marginTop: "5px", marginRight: "5px"
                              }
                              : {
                                marginTop: "0px", marginLeft: "3px",
                                marginRight:10
                              }
                          }
                          class="dropbtn iconDown hover-rotate fa fa-chevron-right"
                        ></i>
                        <div
                          class="dropdown-content"
                          style={
                            language === "ur" || language === "sd"
                              ? { marginTop: "30px" }
                              : {
                                marginLeft:-100
                              }
                          }
                        >
                     
                          {/* <div
                            class="nested-dropdown"
                            style={{ width: "100%" }}
                          >
                            <span
                              style={
                                language === "ur" ||
                                  language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    width: "100%",
                                  }
                                  : {
                                    display: "flex",
                                    position: "relative",
                                    width: "100%",
                                  }
                              }
                            >
                              <a
                                style={
                                  language === "ur" ||
                                    language === "sd"
                                    ? {
                                      width: "88%",
                                      paddingLeft: "30px",
                                      height: "40px",
                                      paddingTop: "8px",
                                      display: "flex",
                                      flexDirection: "row-reverse",
                                    }
                                    : {
                                      width: "100%",
                                      paddingLeft: "30px",
                                      height: "40px",
                                      paddingTop: "8px",
                                    }
                                }
                                href="#"
                              >
                                {
                                  translations["Components"][
                                  language
                                  ]
                                }
                              </a>
                              <i
                                // style={{
                                //   marginTop: "10px",
                                //   marginLeft: "0px",
                                //   position: "absolute",
                                //   right: "15px",
                                // }}
                                style={
                                  language === "ur" ||
                                    language === "sd"
                                    ? {
                                      marginTop: "10px",
                                      marginLeft: "0px",
                                      display: "flex",
                                      flexDirection: "row-reverse",
                                    }
                                    : {
                                      marginTop: "10px",
                                      marginLeft: "0px",
                                      position: "absolute",
                                      right: "15px",
                                    }
                                }
                                class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
                              ></i>
                            </span>
                            <div
                              class="dropdown-content nested-content nested-right"
                              style={{ left: "auto" }}
                            >
                              <Link className={""} to={"/Component"}>
                                <a href="#">
                                  {
                                    translations["CLICKSID"][
                                    language
                                    ]
                                  }
                                </a>
                              </Link>
                              <Link className={""} to={"/Team"}>
                                <a href="#">
                                  {
                                    translations["OurTeam"][
                                    language
                                    ]
                                  }
                                </a>
                              </Link>
                            </div>
                          </div> */}
                          <Link className="" to={"/introduction"}>
                            <a
                              target="_blank"
                              href=""
                              style={
                                language === "ur" ||
                                  language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    marginRight: "-16px",
                                  }
                                  : {}
                              }
                            >
                              {translations["Introduction"][language]}
                            </a>
                          </Link>
                          <Link className={""} to={"/projectobjectives"}>
                            <a
                              href="#"
                              style={
                                language === "ur" ||
                                  language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    marginRight: "-16px",
                                  }
                                  : {}
                              }
                            >
                              {translations["projectobjectives"][language]}
                            </a>
                          </Link>
                          <Link className={""} to={"/acheivement"}>
                            <a
                              href="#"
                              style={
                                language === "ur" ||
                                  language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    marginRight: "-16px",

                                  }
                                  : {}
                              }
                            >
                              {translations["Achievements"][language]}
                            </a>
                          </Link>
                          <Link className={""} to={"/Team"}>
                            <a
                              href="#"
                              style={
                                language === "ur" ||
                                  language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    marginRight: "-16px",
                                  }
                                  : {}
                              }
                            >
                              {translations["Team"][language]}
                            </a>
                          </Link>
                          <Link className={""} to={"/resource"}>
                            <a
                              href="#"
                              style={
                                language === "ur" ||
                                  language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    marginRight: "-16px",
                                  }
                                  : {}
                              }
                            >
                              {translations["Downloads"][language]}
                            </a>
                          </Link>
                          <Link className={""} to={"/contactUs"}>
                            <a
                              href="#"
                              style={
                                language === "ur" ||
                                  language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    marginRight: "-16px",
                                  }
                                  : {}
                              }
                            >
                              {translations["Contactus"][language]}
                            </a>
                          </Link>
                        </div>
                      </div>
                    </li>
                    {/* <li>
                      <a title="" className={"link"}>
                        <Link className="link" to={"/NewsAndInformation"}>
                          {
                            translations["NewsInformation"][
                            language
                            ]
                          }
                        </Link>
                      </a>
                    </li> */}
                    {/* <li>
                      <div
                        class="dropdown"
                        style={
                          language === "ur" || language === "sd"
                            ? {
                              display: "flex",
                              flexDirection: "row-reverse",
                            }
                            : {}
                        }
                      >
                        <span
                          style={{
                            marginRight: "5px",
                            textDecoration: "none",
                          }}
                          className={"link"}
                        >
                          {translations["Resources"][language]}
                        </span>
                        <i
                          style={
                            language === "ur" ||
                              language === "sd"
                              ? {
                                marginTop: "5px", marginRight: "5px"
                              }
                              : {
                                marginTop: "0px", marginLeft: "0px"
                              }
                          }
                          class=" dropbtn iconDown hover-rotate fa fa-chevron-right"
                        ></i>
                        <div
                          class="dropdown-content"
                          style={
                            language === "ur" || language === "sd"
                              ? { marginTop: "30px" }
                              : {}
                          }
                        >
                          <Link className={""} to={"/resource"}>
                            <a target="_blank" href="">
                              {translations["Download"][language]}
                            </a>
                          </Link>
                          <Link className={""} to={"/regulatorycatalog"}>
                            <a href="#">
                              {
                                translations["RegulatoryCatalog"][
                                language
                                ]
                              }
                            </a>
                          </Link>
                        </div>
                      </div>
                    </li> */}
                    {/* <li>
                      <div
                        class="dropdown"
                        style={
                          language === "ur" || language === "sd"
                            ? {
                              display: "flex",
                              flexDirection: "row-reverse",
                            }
                            : {}
                        }
                      >
                        <span
                          style={{
                            marginRight: "5px",
                            textDecoration: "none",
                          }}
                          className={"link"}
                        >
                          {" "}
                          {translations["Aboutus"][language]}
                        </span>
                        <i
                          // style={{ marginTop: "5px", marginRight: "5px",}}
                          style={
                            language === "ur" ||
                              language === "sd"
                              ? {
                                marginTop: "5px", marginRight: "5px"
                              }
                              : {
                                marginTop: "0px", marginLeft: "0px"
                              }
                          }
                          class="dropbtn iconDown hover-rotate fa fa-chevron-right"
                        ></i>
                        <div
                          class="dropdown-content"
                          style={
                            language === "ur" || language === "sd"
                              ? { marginTop: "30px" }
                              : {}
                          }
                        >
                          <Link className="" to={"/aboutus"}>
                            <a
                              target="_blank"
                              href=""
                              style={
                                language === "ur" ||
                                  language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    marginRight: "-16px",
                                  }
                                  : {}
                              }
                            >
                              {translations["Vision"][language]}
                            </a>
                          </Link>
                          <div
                            class="nested-dropdown"
                            style={{ width: "100%" }}
                          >
                            <span
                              style={
                                language === "ur" ||
                                  language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    width: "100%",
                                  }
                                  : {
                                    display: "flex",
                                    position: "relative",
                                    width: "100%",
                                  }
                              }
                            >
                              <a
                                style={
                                  language === "ur" ||
                                    language === "sd"
                                    ? {
                                      width: "88%",
                                      paddingLeft: "30px",
                                      height: "40px",
                                      paddingTop: "8px",
                                      display: "flex",
                                      flexDirection: "row-reverse",
                                    }
                                    : {
                                      width: "100%",
                                      paddingLeft: "30px",
                                      height: "40px",
                                      paddingTop: "8px",
                                    }
                                }
                                href="#"
                              >
                                {
                                  translations["Components"][
                                  language
                                  ]
                                }
                              </a>
                              <i
                                // style={{
                                //   marginTop: "10px",
                                //   marginLeft: "0px",
                                //   position: "absolute",
                                //   right: "15px",
                                // }}
                                style={
                                  language === "ur" ||
                                    language === "sd"
                                    ? {
                                      marginTop: "10px",
                                      marginLeft: "0px",
                                      display: "flex",
                                      flexDirection: "row-reverse",
                                    }
                                    : {
                                      marginTop: "10px",
                                      marginLeft: "0px",
                                      position: "absolute",
                                      right: "15px",
                                    }
                                }
                                class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
                              ></i>
                            </span>
                            <div
                              class="dropdown-content nested-content nested-right"
                              style={{ left: "auto" }}
                            >
                              <Link className={""} to={"/Component"}>
                                <a href="#">
                                  {
                                    translations["CLICKSID"][
                                    language
                                    ]
                                  }
                                </a>
                              </Link>
                              <Link className={""} to={"/Team"}>
                                <a href="#">
                                  {
                                    translations["OurTeam"][
                                    language
                                    ]
                                  }
                                </a>
                              </Link>
                            </div>
                          </div>
                          <Link className={""} to={"/Team"}>
                            <a
                              href="#"
                              style={
                                language === "ur" ||
                                  language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    marginRight: "-16px",
                                  }
                                  : {}
                              }
                            >
                              {translations["CLICKSID"][language]}
                            </a>
                          </Link>
                        </div>
                      </div>
                    </li> */}

                    {/* <li>
                      <a href="comingsoon.html" title="" className={"link"}>
                        <Link className="link" to={"/Maps"}>
                          {translations["Maps"][language]}
                        </Link>
                      </a>
                    </li> */}
                    <li style={{marginLeft:10}}>
                      <a  title="" width="10">
                        <Tooltip
                          overlayInnerStyle=
                          {{ borderRadius: "0px",
                          width: "350px",
                          minWidth: "350px",
                           position: "relative",
                           right: "100px"
                           }}
                          color={"#Ffffff"}
                          placement="bottomLeft"
                          title={SearchBox}
                          arrow={mergedArrow}
                        >
                          <i
                            className="fa-sharp fa-solid fa-magnifying-glass"
                            style={
                              isSticky
                                ? { color: "" }
                                : { color: "black" }
                            }
                          ></i>
                        </Tooltip>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            )
            }
          </div>
       

          {/* <div className="row sticky-icon"></div> */}
          {/* <h1>zain</h1> */}
        </div>
      <div className="container-fluid" style={{ overflowX: "hidden", position:'relative'}}>
        <div className="" style={{ position:"absolute",zIndex:999}}>
        <div
            className=" px-5"
            style={
              language === "ur" || language === "sd"
                ? { display: "flex", justifyContent: "end" }
                : {}
            }
          >
            <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12 marginTopHeader">
              <h1
                className="hero-heading highlightable"
                style={
                  language === "en"
                    ? { textAlign: "start" }
                    : language === "ur" || language === "sd"
                      ? { textAlign: "end" }
                      : { textAlign: "inherit" }
                }
              >
                {translations["hero-heading"][language]}
              </h1>
            </div>
          </div>

          <div
            className=" px-5 "
            style={
              language === "ur" || language === "sd"
                ? { display: "flex", justifyContent: "end", textAlign: "end" }
                : { textAlign: "inherit" }
            }
          >
            <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12">
              <h2 className="subHeroHeading highlightable">
                {translations["subHeroHeading"][language]}
              </h2>
              <div className="row mt-5 ">
                <div
                  className="col-lg-11 col-md-7 col-sm-7 col-xs-12 px-0"
                  style={
                    language === "ur"
                      ? { display: "flex", justifyContent: "end" }
                      : {}
                  }
                >
                  <Link className={""} to={"/regulatorycatalog"}>
                    <button type="button" className="feedback highlightable">
                      <span>
                        {translations["investButton"][language]}
                      </span>
                    </button>
                  </Link>
                  <Link className={""} to={"/RegulatoryCatalogCalculator"}>
                    <button type="button" className="feedback">
                      <span>
                        {translations["calculatorButton"][language]}
                      </span>
                    </button>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 hero-button2 p-2"></div>
              </div>
            </div>
          </div>

          {isSticky === false ? (
            <div
              className={
                language === "ur" || language === "sd"
                  ? "Nonsticky-icon"
                  : "sticky-icon"
              }>
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
            <div className={
              language === "ur" || language === "sd"
                ? "Nonsticky-icon"
                : "sticky-icon"
            }>
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
        </div>
        <video autoPlay loop muted>
          <source src={design} type="video/mp4" />
          Your Browser Does Not Support The Video Tag.
        </video>
        
        
        <div className=" pt-2 pb-4 g-0" style={{position:"relative"}}>
        <div
              className="col-lg-12 updates"
              style={
                language === "ur" || language === "sd"
                  ? {
                    // paddingRight: "60px",
                    // position: "relative",
                    // // height: "96vh",
                    // display: "flex",
                    // alignItems: "end",
                    // display: "flex",
                    // flexDirection: "row-reverse",
                    position: "fixed",
                    bottom:-5.5,
                    // height: "96vh",
                    // paddingRight: "60px",
                    // right:200,
                    display: "flex",
                    flexDirection: "row-reverse",
                    // justifyContent:'start',
                    marginLeft: language === "ur" || language === "sd" ?-42:0,
                    alignItems: "end",
                    zIndex:99999,
                    paddingBottom:0
                  }
                  : windowWidth <= 1440
                    ? {
                      position: "fixed",
                      bottom:-5.5,
                      // height: "96vh",
                      display: "flex",
                      alignItems: "end",
                      zIndex:99999,
                      paddingBottom:0,
                      marginLeft: language === "ur" || language === "sd" ?0:50,
                      
                    }
                    : {
                      position: "relative",
                      height: "97vh",
                      display: "flex",
                      alignItems: "end",
                      
                    }
              }
            >
              <a
                href="comingsoon.html"
                className={
                  language === "ur" || language === "sd"
                    ? "LanguageUpdateHeader"
                    : "UpdateHeader"
                }
              >
                <button type="button" className="update">
                  <span>{translations["Updates"][language]}</span>
                </button>
              </a>
              {language === "ur" || language === "sd" ? (
                <marquee className="marque" direction="right">
                  {translations["Headline"][language]}
                </marquee>
              ) : (
                ""
              )}
              {language === "en" ? (
                <marquee className="marque" direction="left">
                  {translations["Headline"][language]}
                </marquee>
              ) : (
                ""
              )}
            </div>
        </div>
      </div >
    </>
  );
}
export default Header;