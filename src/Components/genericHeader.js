import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import accessibility from "../assets/accessibility.png";
import "../Css/header.css";
import sindh from "../assets/logo-sindh.png";
import pak from "../assets/pak.png";
import urdu from "../assets/urdu.png";
import "../Css/resource.css";
import click from "../assets/click-logo1.png";
import cardImage from "../assets/cardresource1.png";
import { setLanguage } from "../Redux/Reducer/languageSlice";

import Sindhi from "../assets/Sindhi.png";
import English from "../assets/English.png";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { Tooltip } from "antd";
import { handleSearch } from "../Route";
import { translations } from "../Transalation/Transalation";

export default function GenericHeader(props) {
  const [isSticky, setIsSticky] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [childLanguage, setchildLanguage] = useState({});

  






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
  }, []);
  function gototop(){
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
  }
   
  const {language} = useSelector((state)=>state.language)
  const dispatch = useDispatch()

  const toggleLanguage = () => {
    if (language == 'ur') {
      dispatch(setLanguage('en'));
    } else {
      dispatch(setLanguage('ur'));
    }

  };

  const SindhitoggleLanguage = () => {
    if (language == 'sd') {
      dispatch(setLanguage('en'));
    } else {
      dispatch(setLanguage('sd'));
    }

  };
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
    <div
    data-aos="fade-down"
      className={"genericheader  sticky fade-up "}
      style={{ flexDirection: "column" }}
    >
      <div className={""} style={{ width: "100%" }}>
        <div className={"navbar"}>
          <div className="navbarLeft">
            <a href="https://www.sindh.gov.pk/" target="" style={{ display: "flex" }}>
              <img className=" navlogo1" src={sindh} alt=""></img>
              </a>
              <div
                className="vl"
                style={
                  windowWidth <= 1366
                    ? {
                      marginLeft: "15px",
                      marginRight: "-4px",
                      marginTop: "39px",
                    }
                    : {
                      marginLeft: "22px",
                      marginRight: "7px",
                      marginTop: "39px",
                    }
                }
              ></div>
              <Link to={"/home"}>

              <img src={click} alt="" className="navlogo2"></img>
              </Link>
          </div>
          <div className="navbarRight d-flex justify-content-end" >
            <ul>
              <div className="r-side d-inline" >
                <img
                  className="headerLogoImages"
                  src={language === "ur" ? English : urdu}
                  style={language == "ur" ?{height:"10px",width:"50px",marginLeft: "20px", marginRight: "20px"}:{marginLeft: "20px", marginRight: "20px"}}                  
                  alt=""
                  onClick={toggleLanguage}
                  // style={{ marginLeft: "20px", marginRight: "20px" }}
                />
                <img
                  className="headerLogoImages"
                  src={language === "sd" ? English : Sindhi}
                  // src={Sindhi}
                  alt=""
                  onClick={SindhitoggleLanguage}
                  style={language == "sd" ?{height:"10px",width:"50px",marginLeft: "20px", marginRight: "20px"}:{marginLeft: "20px", marginRight: "20px"}}
                />
              </div>
              {/* <li className="HeaderPaddingRight">
                <a href="comingsoon.html" title="Home Page" className={"link2"}>
                  <Link className={"link2"} to={"/home"}>
                    {" "}
                    Home
                  </Link>
                </a>
              </li>
              <li className="HeaderPaddingRight">
                <a href="comingsoon.html" title="Home Page" className={"link2"}>
                  <Link className={"link2"} to={"/feedback"}>
                    Feedback
                  </Link>
                </a>
              </li>
              <li className="HeaderPaddingRight">
                <a target="blank" title="" className={"link2"}>
                  <Link className="link2" to={"/InvestNow"}>
                  Interactive Regulatory Directory
                  </Link>
                </a>
              </li>
              <li className="HeaderPaddingRight">
                <div class="dropdown">
                  <span
                    style={{ marginRight: "5px", textDecoration: "none" }}
                    className={"link2"}
                  >
                    <Link className={"link2"} to={"/Opportunity"}>
                      Sectors and Opportunities
                    </Link>
                  </span>
                  <i
                    style={{ marginTop: "0px", marginLeft: "0px" }}
                    class="dropbtn  hover-rotate fa fa-chevron-right"
                  ></i>
                  <div class="dropdown-content">
                    <div class="nested-dropdown" style={{ width: "100%" }}>
                      <span
                        style={{
                          display: "flex",
                          position: "relative",
                          width: "100%",
                        }}
                      >
                        <a
                        onClick={gototop}
                          style={{
                            width: "300px",
                            paddingLeft: "15px",
                            height: "40px",
                            paddingTop: "8px",
                          }}
                          href="#"
                        >
                         <Link  onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }} className={"link"} to={"/manufacturing"}>
                      
                          Manufacturing
                        </Link>
                        </a>
                        <i
                          style={{
                            marginTop: "10px",
                            marginLeft: "0px",
                            position: "absolute",
                            right: "15px",
                          }}
                          class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
                        ></i>
                      </span>
                      <div
                        class="dropdown-content nested-content nested-right"
                        style={{ width: "200px" }}
                      >
                        <Link  className={""} to={"/manufacturing#expertform"}>
                          <a  href="#">Talk to expert </a>
      
                        </Link>
                      </div>
                    </div>

                    <div class="nested-dropdown" style={{ width: "100%" }}>
                      <span
                        style={{
                          display: "flex",
                          position: "relative",
                          width: "100%",
                        }}
                      >
                        <a
                          style={{
                            width: "300px",
                            paddingLeft: "15px",
                            height: "40px",
                            paddingTop: "8px",
                          }}
                          href="#"
                        >
                          <Link onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }} className={"link"} to={"/textile"}>
                            Textile
                          </Link>
                        </a>
                        <i
                          style={{
                            marginTop: "10px",
                            marginLeft: "0px",
                            position: "absolute",
                            right: "15px",
                          }}
                          class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
                        ></i>
                      </span>
                      <div
                        class="dropdown-content nested-content nested-right"
                        style={{ width: "200px", marginTop: "40px" }}
                      >
                       <Link className={""} to="/textile#expertform">
                          <a  href="#">Talk to expert </a>
                        </Link>
                      </div>
                    </div>

                    <div class="nested-dropdown" style={{ width: "100%" }}>
                      <span
                        style={{
                          display: "flex",
                          position: "relative",
                          width: "100%",
                        }}
                      >
                        <a
                          style={{
                            width: "300px",
                            paddingLeft: "15px",
                            height: "40px",
                            paddingTop: "8px",
                          }}
                          href="#"
                        >
                          <Link onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }} className={"link"} to={"/tourism"}>
                            Tourism
                          </Link>
                        </a>
                        <i
                          style={{
                            marginTop: "10px",
                            marginLeft: "0px",
                            position: "absolute",
                            right: "15px",
                          }}
                          class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
                        ></i>
                      </span>
                      <div
                        class="dropdown-content nested-content nested-right"
                        style={{ width: "200px", marginTop: "80px" }}
                      >
                         <Link className={""} to={"/tourism#expertform"}>
                          <a  href="#">Talk to expert </a>
                        </Link>
                      </div>
                    </div>

                    <div class="nested-dropdown" style={{ width: "100%" }}>
                      <span
                        style={{
                          display: "flex",
                          position: "relative",
                          width: "100%",
                        }}
                      >
                        <a
                          style={{
                            width: "300px",
                            paddingLeft: "15px",
                            height: "40px",
                            paddingTop: "8px",
                          }}
                          href="#"
                        >
                          <Link onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }} className={"link"} to={"/agriculture"}>
                            Agriculture
                          </Link>
                        </a>
                        <i
                          style={{
                            marginTop: "10px",
                            marginLeft: "0px",
                            position: "absolute",
                            right: "15px",
                          }}
                          class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
                        ></i>
                      </span>
                      <div
                        class="dropdown-content nested-content nested-right"
                        style={{ width: "200px", marginTop: "120px" }}
                      >
                        <Link className={""} to={"/agriculture#expertform"}>
                          <a  href="">Talk to expert </a>
                        </Link>
                      </div>
                    </div>

                    <div class="nested-dropdown" style={{ width: "100%" }}>
                      <span
                        style={{
                          display: "flex",
                          position: "relative",
                          width: "100%",
                        }}
                      >
                        <a
                          style={{
                            width: "300px",
                            paddingLeft: "15px",
                            height: "40px",
                            paddingTop: "8px",
                          }}
                          href="#"
                        >
                          <Link onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }} className={"link"} to={"/education"}>
                            Education
                          </Link>
                        </a>
                        <i
                          style={{
                            marginTop: "10px",
                            marginLeft: "0px",
                            position: "absolute",
                            right: "15px",
                          }}
                          class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
                        ></i>
                      </span>
                      <div
                        class="dropdown-content nested-content nested-right"
                        style={{ width: "200px", marginTop: "160px" }}
                      >
                         <Link  className={""} to={"/education#expertform"}>
                          <a   href="#">Talk to expert </a>
                        </Link>
                      </div>
                    </div>

                    <div class="nested-dropdown" style={{ width: "100%" }}>
                      <span
                        style={{
                          display: "flex",
                          position: "relative",
                          width: "100%",
                        }}
                      >
                        <a
                          style={{
                            width: "300px",
                            paddingLeft: "15px",
                            height: "40px",
                            paddingTop: "8px",
                          }}
                          href="#"
                        >
                          <Link onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }} className={"link"} to={"/energy"}>
                            Energy
                          </Link>
                        </a>
                        <i
                          style={{
                            marginTop: "10px",
                            marginLeft: "0px",
                            position: "absolute",
                            right: "15px",
                          }}
                          class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
                        ></i>
                      </span>
                      <div
                        class="dropdown-content nested-content nested-right"
                        style={{ width: "200px", marginTop: "200px" }}
                      >
                        <Link  className={""} to={"/energy#expertform"}>
                          <a href="#">Talk to expert </a>
                        </Link>
                      </div>
                    </div>

                    <div class="nested-dropdown" style={{ width: "100%" }}>
                      <span
                        style={{
                          display: "flex",
                          position: "relative",
                          width: "100%",
                        }}
                      >
                        <a
                          style={{
                            width: "300px",
                            paddingLeft: "15px",
                            height: "40px",
                            paddingTop: "8px",
                          }}
                          href="#"
                        >
                          <Link onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }} className={"link"} to={"/health"}>
                            Health
                          </Link>
                        </a>
                        <i
                          style={{
                            marginTop: "10px",
                            marginLeft: "0px",
                            position: "absolute",
                            right: "15px",
                          }}
                          class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
                        ></i>
                      </span>
                      <div
                        class="dropdown-content nested-content nested-right"
                        style={{ width: "200px", marginTop: "240px" }}
                      >
                        <Link   className={""} to={"/health#expertform"}>
                          <a  href="#">Talk to expert </a>
                        </Link>
                      </div>
                    </div>

                    <div class="nested-dropdown" style={{ width: "100%" }}>
                      <span
                        style={{
                          display: "flex",
                          position: "relative",
                          width: "100%",
                        }}
                      >
                        <a
                          style={{
                            width: "300px",
                            paddingLeft: "15px",
                            height: "40px",
                            paddingTop: "8px",
                          }}
                          href="#"
                        >
                          <Link onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }} className={"link"} to={"/informationtech"}>
                            Information Technology
                          </Link>
                        </a>
                        <i
                          style={{
                            marginTop: "10px",
                            marginLeft: "0px",
                            position: "absolute",
                            right: "15px",
                          }}
                          class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
                        ></i>
                      </span>
                      <div
                        class="dropdown-content nested-content nested-right"
                        style={{ width: "200px", marginTop: "280px" }}
                      >
                       <Link  className={""} to={"/informationtech#expertform"}>
                          <a  href="#">Talk to expert </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="HeaderPaddingRight">
                <a href="comingsoon.html" title="" className={"link2"}>
                  <Link className="link2" to={"/NewsAndInformation"}>
                    News & Info
                  </Link>
                </a>
              </li>
              <li className="HeaderPaddingRight">
                <div class="dropdown">
                  <span
                    style={{ marginRight: "5px" }}
                    title=""
                    className={"link2"}
                  >
                    Resources
                  </span>
                  <i
                    style={{ marginTop: "0px", marginLeft: "0px" }}
                    class=" dropbtn hover-rotate fa fa-chevron-right"
                  ></i>
                  <div class="dropdown-content">
                    <Link className={""} to={"/resource"}>
                      <a target="_blank" href="">
                        Download
                      </a>
                    </Link>
                    <Link className={""} to={"/regulatorycatalog"}>
                      <a href="#">Regulatory Catalog</a>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="HeaderPaddingRight">
                <div class="dropdown">
                  <span
                    style={{ marginRight: "5px", textDecoration: "none" }}
                    className={"link2"}
                  >
                    About us
                  </span>
                  <i
                    style={{ marginTop: "0px", marginLeft: "0px" ,}}
                    class="dropbtn hover-rotate fa fa-chevron-right"
                  ></i>
                  <div class="dropdown-content">
                    <Link className="" to={"/aboutus"}>
                      <a target="_blank" href="">
                        Vision
                      </a>
                    </Link>
                    <div class="nested-dropdown" style={{ width: "100%" }}>
                      <span
                        style={{
                          display: "flex",
                          position: "relative",
                          width: "100%",
                        }}
                      >
                        <a
                          style={{
                            width: "100%",
                            paddingLeft: "30px",
                            height: "40px",
                            paddingTop: "8px",
                          }}
                          href="#"
                        >
                          Components
                        </a>
                        <i
                          style={{
                            marginTop: "10px",
                            marginLeft: "0px",
                            position: "absolute",
                            right: "15px",
                          }}
                          class="dropbtn unique-iconDown unique-hover-rotate component fa fa-chevron-right"
                        ></i>
                      </span>
                      <div class="dropdown-content nested-content nested-right">
                        <Link className={""} to={"/Component"}>
                          <a href="#">CLICK SID</a>
                        </Link>
                        <Link className={""} to={"/Team"}>
                          <a href="#">Our Team</a>
                        </Link>
                      </div>
                    </div>
                    <Link className={""} to={"/Team"}>
                      <a href="#">CLICK SID</a>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="HeaderPaddingRight">
                <a href="comingsoon.html" title="" className={"link2"}>
                  <Link className="link2" to={"/Maps"}>
                    Maps
                  </Link>
                </a>
              </li>
              <li className="HeaderPaddingRight">
                <a title="" width="10">
                  <Tooltip
                    overlayInnerStyle=
                    {{
                      borderRadius: "0px",
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
                     style={{ color: "#000000" }}
                    ></i>
                  </Tooltip>
                </a>
              </li> */}
              <li className="HeaderPaddingRight">
                <a href="comingsoon.html" title="Home Page" className={"link2"}>
                  <Link className={"link2"} to={"/home"}>
                    {" "}
                    Home
                  </Link>
                </a>
              </li>
              <li className="HeaderPaddingRight">
                <a href="comingsoon.html" title="Home Page" className={"link2"}>
                  <Link className={"link2"} to={"/feedback"}>
                    Feedback
                  </Link>
                </a>
              </li>
              <li className="HeaderPaddingRight ">
                <div class="dropdown"   style={{ marginRight: "10px" }}>
                  <span
                    style={{ marginRight: "5px" }}
                    title=""
                    className={"link2"}
                  >
                  Regulatory Directory
                  </span>
                  <i
                    style={{ marginTop: "0px", marginLeft: "3px" }}
                    class=" dropbtn hover-rotate fa fa-chevron-right"
                  ></i>
                  <div class="dropdown-content">
                  <Link className={""} to={"/Maps"}>
                      <a href="#"> Maps  </a>
                    </Link>
                    <Link className={""} to={"/regulatorycatalog"}>
                      <a href="#">Regulatory Catalog </a>
                    </Link>
                    <Link className={""} to={"/RegulatoryCatalogCalculator"}>
                      <a target="_blank" href="">
                      Regulatory Cost Calculator
                      </a>
                    </Link>
                
               
                    <Link className={""} to={"/Dashboard"}>
                      <a href="#">Sindh Statistics</a>
                    </Link>
                    <Link className={""} to={"/tutorial"}>
                      <a href="#">Tutorials</a>
                    </Link>
                  </div>
                </div>
              </li>
              {/* <li className="HeaderPaddingRight">
                <div class="dropdown">
                  <span
                    style={{ marginRight: "5px" }}
                    title=""
                    className={"link2"}
                  >
                    PRMI
                  </span>
                  <i
                    style={{ marginTop: "0px", marginLeft: "3px" }}
                    class=" dropbtn hover-rotate fa fa-chevron-right"
                  ></i>
                  <div class="dropdown-content">
                    <Link className={""} to={""}>
                      <a target="_blank" href="">
                       Introduction
                      </a>
                    </Link>
                    <Link className={""} to={""}>
                      <a href="#"> Project Objectives </a>
                    </Link>
                    <Link className={""} to={""}>
                      <a href="#"> Achievements  </a>
                    </Link>
                    <Link className={""} to={"/Team"}>
                      <a href="#"> Team </a>
                    </Link>
                    <Link className={""} to={"/resource"}>
                      <a href="#"> Downloads</a>
                    </Link>
                    <Link className={""} to={""}>
                      <a href="#"> Contact us</a>
                    </Link>
                    
                  </div>
                </div>
              </li> */}
                            <li className="HeaderPaddingRight ">
                <div class="dropdown"   style={{ marginRight: "10px" }}>
                  <span
                    style={{ marginRight: "5px" }}
                    title=""
                    className={"link2"}
                  >
                   Business Facilitation
                  </span>
                  <i
                    style={{ marginTop: "0px", marginLeft: "3px" }}
                    class=" dropbtn hover-rotate fa fa-chevron-right"
                  ></i>
                  <div class="dropdown-content">
                      <a style={{ fontWeight:"bold",}} href="https://smeda.org/index.php?option=com_content&view=article&id=146&Itemid=676" target="_blank"> GUIDS  </a>
                      <a   style={{marginLeft:'10px'}}    href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=122&Itemid=308" target="_blank">Pre-Feasibility Studies </a>
                      <a  style={{marginLeft:'10px'}}  target="_blank"       href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=164&Itemid=981">
                      Business Guides
                      </a>
               
                      <a   style={{marginLeft:'10px'}}     href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=7&Itemid=363">Commercial Contracts (English)</a>
                      <a    style={{marginLeft:'10px'}}       href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=7&Itemid=363">CommercialContracts(Urdu)</a>
                      <a style={{marginLeft:'10px'}}  target="_blank"       href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=15&Itemid=138">
                      Regulatory Procedures
                      </a>
                      <a style={{ fontWeight:"bold"}} target="_blank" href="">
                      REPORTS
                      </a>
                      <a style={{marginLeft:'10px'}}  target="_blank"     href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=40&Itemid=742">
                      Cluster Profiles
                      </a>
                      <a style={{marginLeft:'10px'}}  target="_blank"  href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=186&Itemid=1024">
                      District Economic Profiles
                      </a>
                      <a style={{marginLeft:'10px'}}  target="_blank"   href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=28&Itemid=139">
                      Sector Briefs
                      </a>

                      <a style={{marginLeft:'10px'}}  target="_blank"     href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=188&Itemid=1027">
                      Study Reports
                      </a>
                      <a style={{marginLeft:'10px'}}  target="_blank"      href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=168&Itemid=996">
                      Trade Analysis Series
                      </a>
                  </div>
                </div>
              </li>
              <li className="HeaderPaddingRight">
                <a href="https://business.gov.pk/home_prmi/" title="Home Page" target="_blank" className={"link2"}>
                   PRMI
                </a>
              </li>
              <li className="HeaderPaddingRight">
                <div class="dropdown">
                  <span
                    style={{ marginRight: "5px" }}
                    title=""
                    className={"link2"}
                  >
                    About Us
                  </span>
                  <i
                    style={{ marginTop: "0px", marginLeft: "3px" }}
                    class=" dropbtn hover-rotate fa fa-chevron-right"
                  ></i>
                  <div class="dropdown-content">
                    <Link className={""} to={"/introduction"}>
                      <a target="_blank" href="">
                       Introduction
                      </a>
                    </Link>
                    <Link className={""} to={"/projectobjectives"}>
                      <a href="#"> Project Objectives </a>
                    </Link>
                    <Link className={""} to={"/acheivement"}>
                      <a href="#"> Achievements  </a>
                    </Link>
                    <Link className={""} to={"/Team"}>
                      <a href="#"> Team </a>
                    </Link>
                    <Link className={""} to={"/resource"}>
                      <a href="#"> Downloads</a>
                    </Link>
                    <Link className={""} to={"/contactUs"}>
                      <a href="#"> Contact us</a>
                    </Link>
                    
                  </div>
                </div>
              </li>
              <li className="HeaderPaddingRight ms-4">
                <a title="" width="10">
                  <Tooltip
                    overlayInnerStyle=
                    {{
                      borderRadius: "0px",
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
                     style={{ color: "#000000" }}
                    ></i>
                  </Tooltip>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}