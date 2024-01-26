import React, { useEffect, useState } from "react";
import { Link, } from "react-router-dom";
import "../Css/header.css";
import sindh from "../assets/logo-sindh.png";
import urdu from "../assets/urdu.png";
import "../Css/resource.css";
import click from "../assets/click-logo1.png";
import { setLanguage } from "../Redux/Reducer/languageSlice";
import Sindhi from "../assets/Sindhi.png";
import English from "../assets/English.png";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { Tooltip } from "antd";
import { handleSearch } from "../Route";
import InvestmentDepartment from "../assets/DownloadDocument/CompetitivenessofSindh.pdf"


export default function GenericHeader(props) {
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
  function gototop() {
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

  const { language } = useSelector((state) => state.language)
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
      style={{ width: "325px", height: "60px", }}
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
        <div className={"navbar row"}>
          <div className=" col-lg-2 navbarLeft">
            <Link to={"/home"}>

              <img src={click} alt="" className="navlogo2"></img>
            </Link>
          </div>
          <div className="col-lg-10" style={{ display: "flex", alignItems: 'baseline', justifyContent: "end" }}>
            <div className=" navbaright d-flex " >
              <ul className="p-0">
                <div className="r-side d-inline" >
                  <img
                    className="headerLogoImages"
                    src={language === "ur" ? English : urdu}
                    style={language == "ur" ? { height: "10px", width: "50px", marginLeft: "20px", marginRight: "20px" } : { marginLeft: "20px", marginRight: "20px" }}
                    alt=""
                    onClick={toggleLanguage}
                  />
                  <img
                    className="headerLogoImages"
                    src={language === "sd" ? English : Sindhi}
                    alt=""
                    onClick={SindhitoggleLanguage}
                    style={language == "sd" ? { height: "10px", width: "50px", marginLeft: "20px", marginRight: "20px" } : { marginLeft: "20px", marginRight: "20px" }}
                  />
                </div>
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
                  <div class="dropdown" style={{ marginRight: "10px" }}>
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
                <li className="HeaderPaddingRight ">
                  <div class="dropdown" style={{ marginRight: "10px" }}>
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
                      <a style={{ fontWeight: "bold", }} href="https://smeda.org/index.php?option=com_content&view=article&id=146&Itemid=676" target="_blank"> GUIDES  </a>
                      <a style={{ marginLeft: '10px' }} href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=122&Itemid=308" target="_blank">Pre-Feasibility Studies </a>
                      <a style={{ marginLeft: '10px' }} target="_blank" href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=164&Itemid=981">
                        Business Guides
                      </a>

                      <a style={{ marginLeft: '10px' }} href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=7&Itemid=363">Commercial Contracts (English)</a>
                      <a style={{ marginLeft: '10px' }} href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=7&Itemid=363">CommercialContracts(Urdu)</a>
                      <a style={{ marginLeft: '10px' }} target="_blank" href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=15&Itemid=138">
                        Regulatory Procedures
                      </a>
                      <a style={{ marginLeft: '10px' }} target="_blank" href="https://tipp.gov.pk/">
                        Trade Information Portal
                      </a>
                      <a style={{ marginLeft: '10px' }} target="_blank" href={InvestmentDepartment}>
                        Investment in Sindh
                      </a>
                      <a style={{ fontWeight: "bold" }} target="_blank" href="">
                        REPORTS
                      </a>
                      <a style={{ marginLeft: '10px' }} target="_blank" href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=40&Itemid=742">
                        Cluster Profiles
                      </a>
                      <a style={{ marginLeft: '10px' }} target="_blank" href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=186&Itemid=1024">
                        District Economic Profiles
                      </a>
                      <a style={{ marginLeft: '10px' }} target="_blank" href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=28&Itemid=139">
                        Sector Briefs
                      </a>

                      <a style={{ marginLeft: '10px' }} target="_blank" href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=188&Itemid=1027">
                        Study Reports
                      </a>
                      <a style={{ marginLeft: '10px' }} target="_blank" href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=168&Itemid=996">
                        Trade Analysis Series
                      </a>
                      <a style={{ marginLeft: '10px' }} target="_blank" href="https://tipp.gov.pk/?r=site/display&id=230">
                        Trade Statsitics
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
                      </Link>  <Link className={""} to={"/faqs"}>
                        <a href="#"> FAQ</a>
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
                      zIndex={9999}
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
            <div className=" pe-4">
              <img className=" navlogo1" src={sindh} alt=""></img>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}