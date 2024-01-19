import React from "react";
import Newproject from "../assets/design.mp4";
import sindh from "../assets/logo-sindh.png";
import click from "../assets/click-logo.png";
import accessibility from "../assets/accessibility.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "../Css/newcss.css";
import $ from "jquery";
import English from "../assets/English.png";
import urdu from "../assets/urdu.png";
import Sindhi from "../assets/Sindhi.png";
import { translations } from "../Transalation/Transalation";
import { useSelector } from "react-redux";
import InvestmentDepartment from "../assets/DownloadDocument/CompetitivenessofSindh.pdf"

function MobileHome(props) {
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
  const [toggleMenu, setToggleMenu] = useState(true);
  const [screenWidth, setscreenWidth] = useState(window.innerWidth);
  const [dropdownStates, setDropdownStates] = useState([
    false, // For "Sectors and Opportunities"
    false, // For "Manufacturing"
    false, // For "Textile"
    false, // For "Tourism"
    false, // For "Agriculture"
    false, // For "Eduction"
    false, // For "Energy"
    false, // For "Health"
    false, // For "Information Technology
  ]);

  const handleLabelTextClick = (index) => {
    // Proceed with redirection
    if (index === 0) {
      window.location.href = "/#/Opportunity";
    }
  };


  const handleIconClick = (index) => {
    debugger
    // Toggle the dropdown state
    let newDropdownStates = [...dropdownStates];
    newDropdownStates[index] = !newDropdownStates[index];
    setDropdownStates(newDropdownStates);
  };

  const [isAbout, setIsAbout] = useState(false);

  const handleAbout = () => {
    setIsAbout(!isAbout);
  }

  const closeDropdown = (index) => {
    debugger
    
    // Close the dropdown
    const newDropdownStates = [...dropdownStates];
    newDropdownStates[index] = false;
    setDropdownStates(newDropdownStates);
  };

  useEffect(() => {
    const changewidth = () => {
      setscreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changewidth);
    return () => {
      window.removeEventListener("resize", changewidth);
    };
  }, []);

  useEffect(() => {
    // DOM ready
    $(function () {
      // If a link has a dropdown, add sub menu toggle.
      $("nav ul li a:not(:only-child)").click(function (e) {
        $(this).siblings(".nav-dropdown").toggle();
        // Close one dropdown when selecting another
        $(".nav-dropdown").not($(this).siblings()).hide();
        e.stopPropagation();
      });
      // Clicking away from dropdown will remove the dropdown className
      $("html").click(function () {
        $(".nav-dropdown").hide();
      });
      // Toggle open and close nav styles on click
      $("#nav-toggle").click(function () {
        $("nav ul").slideToggle();
      });
      // Hamburger to X toggle
      $("#nav-toggle").on("click", function () {
        this.classList.toggle("active");
      });
    });
  }, []);

  return (
    <>
      <div
        className={"mobileheader  sticky  "}
        style={{ flexDirection: "column", marginBottom: "250px" }}
      >
        <div className={"navbar"}>
          <div
            className="navbarLeft"
            style={{ position: "absolute", top: "0", zIndex: "11" }}
          >
            <Link to={"/home"} style={{ display: "flex" }}>
              <img className=" navlogo1" src={sindh} alt="" width="35%"></img>
              <div
                className="vl"
                style={{
                  marginLeft: "22px",
                  marginRight: "7px",
                  marginTop: "39px",
                }}
              ></div>
              <img
                src={click}
                alt=""
                width="60%"
                className="navlogo2"
                style={{ marginLeft: "-14px" }}
              ></img>
            </Link>
          </div>
          <div className="navbarRight" style={{ marginTop: "12px" }}>
            <div
              className=""
              style={
                windowWidth <= 500
                  ? {
                    marginTop: "15px",
                    marginBottom: "-4px",
                    width: "90%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }
                  : {
                    marginLeft: "80px",
                    marginTop: "15px",
                    marginBottom: "-4px",
                  }
              }
            >
                <img
                  className="headerLogoImages"
                  src={language === "ur" ? English : urdu}
                  alt=""
                  onClick={props.toggleLanguage}
                  // style={{ marginLeft: "20px", marginRight: "20px" }}
                  style={language == "ur" ?{height:"20px",width:"50px",marginLeft: "20px", marginRight: "20px",marginTop:5}:{marginLeft: "20px", marginRight: "20px"}}
                />
                <img
                  className="headerLogoImages"
                  src={language === "sd" ? English : Sindhi}
                  // src={Sindhi}
                  alt=""
                  onClick={props.SindhitoggleLanguage}
                  // style={{ marginLeft: "20px", marginRight: "20px" }}
                  style={language == "sd" ?{height:"20px",width:"50px",marginLeft: "20px", marginRight: "20px",marginTop:5}:{marginLeft: "20px", marginRight: "20px"}}
                />
              <a href="comingsoon.html" title="" width="10">
                <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
              </a>
            </div>
            <div className={`header `}>
              <div className={"row"}>
                <div className={" navbar justify-content-end"}>
                  {(toggleMenu || screenWidth > 500) && (
                    <nav style={{ marginTop: "30px" }}>
                      <label
                        for="drop"
                        className="toggle highlightable"
                        style={{ background: "white" }}
                      >
                        <i
                          style={{ Top: "-25px" }}
                          // onClick={toggleNav}
                          //   onClick={showtoggleNav}
                          className="fa-solid fa-bars toggleMenu"
                        ></i>
                      </label>
                      <input type="checkbox" id="drop" />
                      <ul
                        className="menu">
                        <li
                          style={
                            language === "ur" || language === "sd"
                              ? {
                                display: "flex",
                                flexDirection: "row-reverse",
                                borderBottom: "1px solid transparent !important",
                              }
                              : { borderBottom: "1px solid transparent !important" }
                          }
                        >
                          <Link className="link toggle2" to={"/home"}>
                            {translations["home"][language]}
                          </Link>
                        </li>
                        <li
                          style={
                            language === "ur" || language === "sd"
                              ? {
                                display: "flex",
                                flexDirection: "row-reverse",
                                borderBottom: "1px solid transparent !important",
                              }
                              : { borderBottom: "1px solid transparent !important" }
                          }
                        >
                          <Link className="link toggle2" to={"/feedback"}>
                          {
                            translations["Feedback"][
                            language
                            ]
                          }
                          </Link>
                        </li>
                        <li
                          style={
                            language === "ur" || language === "sd"
                              ? {
                                display: "flex",
                                flexDirection: "row-reverse",
                                borderBottom: "1px solid transparent !important",
                              }
                              : { borderBottom: "1px solid transparent !important" }
                          }
                        >
                          {/* <Link className="link toggle2" to={"/regulatorycatalog"}>
                          {translations["Interactiveregulatory"][language]}
                          </Link> */}
                          <li style={
                            language === "ur" || language === "sd"
                              ? {
                                textAlign:"right",
                              }
                              : { }
                          } className="">
                          <label for="drop-2" className="d-flex toggle toggle2 highlightable"
                          style={
                            language === "ur" || language === "sd"
                              ? {
                                display: "flex",
                                flexDirection: "row-reverse",
                              }
                              : { }
                          }
                          >
                            <Link to={""} 
                            style={{ width: "212px", padding: "0px", fontSize: "20px" }}>
                               {translations["Interactiveregulatory"][language]}
                            </Link>
                            {dropdownStates[11] ? (
                              <span
                              className="minus"
                                style={
                                  language === "ur" || language === "sd"
                                    ? {
                                      display: "flex",
                                      marginLeft: "-70px",
                                    }
                                    : { display: "contents" }
                                }
                                onClick={() => handleIconClick(11)} // Click on icon to open/close the dropdown
                                onMouseEnter={() => handleIconClick(11)} // Hover on icon to open/close the dropdown
                                onMouseLeave={() => closeDropdown(11)} // Leave ico icon to close the dropdown
                              ></span>
                            ) : (
                              <span
                                className="plus"
                                style={
                                  language === "ur" || language === "sd"
                                    ? {
                                      display: "flex",
                                      marginLeft: "-70px",
                                    }
                                    : { display: "contents" }
                                }
                                onClick={() => handleIconClick(11)} // Click on icon to open/close the dropdown
                                onMouseEnter={() => handleIconClick(11)} // Hover on icon to open/close the dropdown
                                onMouseLeave={() => closeDropdown(11)} // Leave ico icon eave icon to close the dropdown
                              ></span>
                            )}
                          </label>
                          <input type="checkbox" id="drop-2" />
                          <ul>
                            <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }
                            >
                              <Link 
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                              className="link toggle2 mobilenesteddropdowntoggle2" to={"/RegulatoryCatalogCalculator"}>
                               {translations["calculatorButton"][language]}
                              </Link>
                            </li>

                            <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }
                            >
                              <Link 
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                              className="link toggle2 mobilenesteddropdowntoggle2" to={"/regulatorycatalog"}>
                                   {translations["RegulatoryCatalog"][language]}
                              </Link>
                            </li> 
                            <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }
                            >
                              <Link 
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                              className="link toggle2 mobilenesteddropdowntoggle2" to={"/Maps"}>
                               {translations["Maps"][language]}
                              </Link>
                            </li>
                            <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }
                            >
                              <Link 
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                              className="link toggle2 mobilenesteddropdowntoggle2" to={"/Dashboard"}>
                                {translations["statistics"][language]}
                              </Link>
                            </li>
                            <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }
                            >
                              <Link 
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                              className="link toggle2 mobilenesteddropdowntoggle2" to={"/tutorial"}>
                                {translations["Tutorial"][language]}
                              </Link>
                            </li>
                          </ul>
                        </li>
                        </li>
                        <li style={
                            language === "ur" || language === "sd"
                              ? {
                                textAlign:"right",
                              }
                              : { }
                          } >
                          <label
                          
                            for="drop-4"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  display: "flex",
                                  flexDirection: "row-reverse",
                                }
                                : { }
                            }
                            className="d-flex toggle toggle2 highlightable">
                            <a  style={{ width: "212px", padding: "0px", fontSize: "20px" }}>
                            {translations["BusinessFacilitation"][language]}
                            </a>
                            {dropdownStates[12] ? (
                              <span
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    marginLeft: "-70px",
                                  }
                                  : { display: "contents" }
                              }
                                className="minus"
                                onClick={() => closeDropdown(12)} // Click on icon to open/close the dropdown
                                onMouseEnter={() => handleIconClick(12)} // Hover on icon to open/close the dropdown
                                onMouseLeave={() => closeDropdown(12)} // Leave icon to close the dropdown
                              ></span>
                            ) : (
                              <span
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    marginLeft: "-70px",
                                  }
                                  : { display: "contents" }
                              }
                                className="plus"
                                onClick={() => handleIconClick(12)} // Click on icon to open/close the dropdown
                                onMouseEnter={() => handleIconClick(12)} // Hover on icon to open/close the dropdown
                                onMouseLeave={() => closeDropdown(12)} // Leave ico/ Leave icon to close the dropdown
                              ></span>
                            )}
                          </label>
                          <input type="checkbox" id="drop-4" />
                          <ul>
                            <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }
                            >
                              <a 
                               target="_blank"
                               href="https://smeda.org/index.php?option=com_content&view=article&id=146&Itemid=676"
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                              className="link toggle2 mobilenesteddropdowntoggle2" to={"/introduction"}>
                                {translations["Guids"][language]}
                              </a>
                            </li>

                            <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }
                            >
                              <a 
                                target="_blank"
                                href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=122&Itemid=308"
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                              className="link toggle2 mobilenesteddropdowntoggle2" to={"/projectobjectives"}>
                                 {translations["PreFeasibilityStudies"][language]}
                              </a>
                            </li> 
                            <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }
                            >
                              <a 
                               target="_blank"
                               href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=164&Itemid=981"
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                              className="link toggle2 mobilenesteddropdowntoggle2" to={"/acheivement"}>
                                {translations["BusinessGuides"][language]}
                              </a>
                            </li>
                            <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }
                            >
                              <a 
                                target="_blank"
                                href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=7&Itemid=363"
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                              className="link toggle2 mobilenesteddropdowntoggle2" to={"/resource"}>
                                {translations["CommercialContracts(English)"][language]}
                              </a>
                            </li>
                            
                             <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }
                            >
                              <a 
                               target="_blank"
                               href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=7&Itemid=363"
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                              className="link toggle2 mobilenesteddropdowntoggle2" to={"/Team"}>
                                      {translations["CommercialContracts(Urdu)"][language]}
                              </a>
                            </li>
                            <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }
                            >
                              <a 
                                target="_blank"
                                href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=15&Itemid=138"
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                              className="link toggle2 mobilenesteddropdowntoggle2" to={"/faqs"}>
                                      {translations["RegulatoryProcedures"][language]}
                              </a>
                            </li>
                            <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }>
                              <a
                                 target="_blank"
                                 href="https://tipp.gov.pk/"
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                                className="link toggle2 mobilenesteddropdowntoggle2"
                              >
                               {translations["TradeInformationPortal"][language]}
                              </a>
                            </li>
                            <li>
                            <a
                              target="_blank"
                              href={InvestmentDepartment}
                              style={
                                language === "ur" ||
                                  language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    marginRight: "-16px",
                                  }
                                  : {
                                    marginLeft:"10px"

                                  }
                              }
                            >
                              {translations["InvestmentDepartment"][language]}
                            </a>
                            </li>
                           
                            <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }>
                              <a
                                 target="_blank"
                                 href=""
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                                className="link toggle2 mobilenesteddropdowntoggle2"
                              >
                               {translations["Reports"][language]}
                              </a>
                            </li>
                            <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }>
                              <a
                              target="_blank"
                              href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=40&Itemid=742"
                             style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                                className="link toggle2 mobilenesteddropdowntoggle2"
                              >
                               {translations["ClusterProfiles"][language]}
                              </a>
                            </li>
                            <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }>
                              <a
                              target="_blank"
                              href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=186&Itemid=1024"
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                                className="link toggle2 mobilenesteddropdowntoggle2"
                              >
                               {translations["DistrictEconomicProfiles"][language]}
                              </a>
                            </li>
                            <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }>
                              <a
                              target="_blank"
                              href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=28&Itemid=139"
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                                className="link toggle2 mobilenesteddropdowntoggle2"
                              >
                               {translations["SectorBriefs"][language]}
                              </a>
                            </li>
                            <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }>
                              <a
                               target="_blank"
                               href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=188&Itemid=1027"
                               style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                                className="link toggle2 mobilenesteddropdowntoggle2"
                              >
                               {translations["StudyReports"][language]}
                              </a>
                            </li>
                            <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }>
                              <a
                              target="_blank"
                              href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=168&Itemid=996"
                               style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                                className="link toggle2 mobilenesteddropdowntoggle2"
                              >
                               {translations["TradeAnalysisSeries"][language]}
                              </a>
                            </li>
                          </ul>
                        </li>
                      
                        {/* <li style={
                            language === "ur" || language === "sd"
                              ? {
                                textAlign:"right",
                              }
                              : { }
                                }>
                          <label
                            htmlFor="drop-5"
                            className={`d-flex toggle toggle2 highlightable`}
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  display: "flex",
                                  flexDirection: "row-reverse",
                                }
                                : { }
                            }
                          >
                            <Link to={"/manufacturing"} style={{ width: "212px", padding: "0px", fontSize: "20px" }}>
                              {
                                translations["Opportunities"][
                                language
                                ]
                              }
                            </Link>
                            {dropdownStates[0] ? (
                              <span
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                  }
                                  : { display: "contents" }
                              }
                                className="minus"
                                onClick={() => handleIconClick(0)} // Click on icon to open/close the dropdown
                                onMouseEnter={() => handleIconClick(0)} // Hover on icon to open/close the dropdown
                                onMouseLeave={() => closeDropdown(0)} // Leave icon to close the dropdown
                              ></span>
                            ) : (
                              <span
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    marginLeft: "-70px",
                                  }
                                  : { display: "contents" }
                              }
                                className="plus"
                                onClick={() => handleIconClick(0)} // Click on icon to open/close the dropdown
                                onMouseEnter={() => handleIconClick(0)} // Hover on icon to open/close the dropdown
                                onMouseLeave={() => closeDropdown(0)} // Leave ico/ Leave icon to close the dropdown
                              ></span>
                            )}
                          </label>

                          <input type="checkbox" id="drop-5" />
                          <ul>
                            <li
                              className="borderline">
                              <label
                              className="highlightable"
                                style={
                                  language === "ur" || language === "sd"
                                    ? {
                                      display: "flex",
                                      flexDirection: "row-reverse",
                                      textAlign: "right",
                                      marginLeft: "0px",
                                    }
                                    : {}
                                }
                                htmlFor="drop-6"
                                className="d-flex mobiledropdowntoggle toggle toggle2"
                              >
                                <Link to={"/manufacturing"} style={{ width: "195px", padding: "0px" }}>
                                  {
                                    translations["Manufacturing"][
                                    language
                                    ]
                                  }
                                </Link>
                                {dropdownStates[1] ? (
                                  <span
                                  style={
                                    language === "ur" || language === "sd"
                                      ? {
                                        display: "flex",
                                        marginRight: "115px",
                                      }
                                      : { display: "contents" }
                                  }
                                    className="minus"
                                    onClick={() => handleIconClick(1)} // Click on icon to open/close the dropdown
                                    onMouseEnter={() => handleIconClick(1)} // Hover on icon to open/close the dropdown
                                    onMouseLeave={() => closeDropdown(1)} // Leave ico icon to close the dropdown
                                  ></span>
                                ) : (
                                  <span
                                    className="plus"
                                    style={
                                      language === "ur" || language === "sd"
                                        ? {
                                          display: "flex",
                                          marginRight: "115px",
                                        }
                                        : { display: "contents" }
                                    }
                                    onClick={() => handleIconClick(1)} // Click on icon to open/close the dropdown
                                    onMouseEnter={() => handleIconClick(1)} // Hover on icon to open/close the dropdown
                                    onMouseLeave={() => closeDropdown(1)} // Leave ico icon eave icon to close the dropdown
                                  ></span>
                                )}

                              </label>
                              <input type="checkbox" id="drop-6" />
                              <ul>
                                <li className="b-none borderline"
                                style={
                                  language === "ur" || language === "sd"
                                    ? {
                                      textAlign: "right"
                                    }
                                    : {}
                                }
                                >
                                  <Link
                                    className="link toggle2 mobilenesteddropdowntoggle"
                                    to={"/aboutus"}
                                    style={
                                      language === "ur" || language === "sd"
                                        ? {
                                          display: "flex",
                                          flexDirection: "row-reverse",
                                          textAlign: "right"
                                        }
                                        : {}
                                    }
                                  >
                                    {
                                      translations["Talktoexpert"][
                                      language
                                      ]
                                    }
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className=""
                             >
                              <label
                                for="drop-7"
                                className="d-flex mobiledropdowntoggle toggle toggle2 highlightable"
                                style={
                                  language === "ur" || language === "sd"
                                    ? {
                                      display: "flex",
                                      flexDirection: "row-reverse",
                                      textAlign: "right",
                                      marginLeft: "0px",
                                    }
                                    : {}
                                }
                              >
                                <Link to={"/textile"} style={{ width: "195px", padding: "0px" }}>
                                  {
                                    translations["Textile"][
                                    language
                                    ]
                                  }
                                </Link>
                                {dropdownStates[2] ? (
                                  <span
                                    className="minus"
                                    style={
                                      language === "ur" || language === "sd"
                                        ? {
                                          display: "flex",
                                          marginRight: "115px",
                                        }
                                        : { display: "contents" }
                                    }
                                    onClick={() => handleIconClick(2)} // Click on icon to open/close the dropdown
                                    onMouseEnter={() => handleIconClick(2)} // Hover on icon to open/close the dropdown
                                    onMouseLeave={() => closeDropdown(2)} eave icon to close the dropdown
                                  ></span>
                                ) : (
                                  <span
                                  style={
                                    language === "ur" || language === "sd"
                                      ? {
                                        display: "flex",
                                        marginRight: "115px",
                                      }
                                      : { display: "contents" }
                                  }
                                    className="plus"
                                    onClick={() => handleIconClick(2)} // Click on icon to open/close the dropdown
                                    onMouseEnter={() => handleIconClick(2)} // Hover on icon to open/close the dropdown
                                    onMouseLeave={() => closeDropdown(2)} // Leave icon to close the dropdown
                                  ></span>
                                )}
                              </label>
                              <input type="checkbox" id="drop-7" />
                              <ul>
                                <li className="b-none borderline">
                                  <Link
                                  style={
                                    language === "ur" || language === "sd"
                                      ? {
                                        display: "flex",
                                        flexDirection: "row-reverse",
                                        textAlign: "right"
                                      }
                                      : {}
                                  }
                                    className="link toggle2 mobilenesteddropdowntoggle"
                                    to={"/aboutus"}
                                  >
                                    {
                                      translations["Talktoexpert"][
                                      language
                                      ]
                                    }
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign:"right,"
                                }
                                : {}
                            }>
                              <label
                                for="drop-8"
                                className="d-flex mobiledropdowntoggle toggle toggle2 highlightable"
                                style={
                                  language === "ur" || language === "sd"
                                    ? {
                                      display: "flex",
                                      flexDirection: "row-reverse",
                                      textAlign: "right",
                                      marginLeft: "0px",
                                    }
                                    : {}
                                }
                              >
                                <Link to={"/tourism"} style={{ width: "195px", padding: "0px" }}>
                                  {
                                    translations["Tourism"][
                                    language
                                    ]
                                  }
                                </Link>
                                {dropdownStates[3] ? (
                                  <span
                                  style={
                                    language === "ur" || language === "sd"
                                      ? {
                                        display: "flex",
                                        marginRight: "115px",
                                      }
                                      : { display: "contents" }
                                  }
                                    className="minus"
                                    onClick={() => handleIconClick(3)} // Click on icon to open/close the dropdown
                                    onMouseEnter={() => handleIconClick(3)} // Hover on icon to open/close the dropdown
                                    onMouseLeave={() => closeDropdown(3)} // Leave icon to close the dropdown
                                  ></span>
                                ) : (
                                  <span
                                  style={
                                    language === "ur" || language === "sd"
                                      ? {
                                        display: "flex",
                                        marginRight: "115px",
                                      }
                                      : { display: "contents" }
                                  }
                                    className="plus"
                                    onClick={() => handleIconClick(3)} // Click on icon to open/close the dropdown
                                    onMouseEnter={() => handleIconClick(3)} // Hover on icon to open/close the dropdown
                                    onMouseLeave={() => closeDropdown(3)} // Leave icon to close the dropdown
                                  ></span>
                                )}
                              </label>
                              <input type="checkbox" id="drop-8" />
                              <ul>
                                <li className="b-none borderline">
                                  <Link
                                    className="link toggle2 mobilenesteddropdowntoggle"
                                    to={"/aboutus"}
                                    style={
                                      language === "ur" || language === "sd"
                                        ? {
                                          display: "flex",
                                          flexDirection: "row-reverse",
                                          textAlign: "right"
                                        }
                                        : {}
                                    }
                                  >
                                    {
                                      translations["Talktoexpert"][
                                      language
                                      ]
                                    }
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li  style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign:"right,"
                                }
                                : { }
                            }>
                              <label
                                for="drop-9"
                                className="d-flex mobiledropdowntoggle toggle toggle2 highlightable"
                                style={
                                  language === "ur" || language === "sd"
                                    ? {
                                      display: "flex",
                                      flexDirection: "row-reverse",
                                      textAlign: "right",
                                      marginLeft: "0px",
                                    }
                                    : { }
                                }
                              >
                                <Link to={"/agriculture"} style={{ width: "195px", padding: "0px" }}>
                                  {
                                      translations["Agriculture"][
                                        language
                                      ]
                                    }
                                </Link>
                                {dropdownStates[4] ? (
                                  <span
                                  style={
                                    language === "ur" || language === "sd"
                                      ? {
                                        display: "flex",
                                        marginRight: "115px",
                                      }
                                      : { display: "contents" }
                                  }
                                    className="minus"
                                    onClick={() => handleIconClick(4)} // Click on icon to open/close the dropdown
                                    onMouseEnter={() => handleIconClick(4)} // Hover on icon to open/close the dropdown
                                    onMouseLeave={() => closeDropdown(4)} // Leave icon to close the dropdown
                                  ></span>
                                ) : (
                                  <span
                                    className="plus"
                                    style={
                                      language === "ur" || language === "sd"
                                        ? {
                                          display: "flex",
                                          marginRight: "115px",
                                        }
                                        : { display: "contents" }
                                    }
                                    onClick={() => handleIconClick(4)} // Click on icon to open/close the dropdown
                                    onMouseEnter={() => handleIconClick(4)} // Hover on icon to open/close the dropdown
                                    onMouseLeave={() => closeDropdown(4)} // Leave icon to close the dropdown
                                  ></span>
                                )}
                              </label>
                              <input type="checkbox" id="drop-9" />
                              <ul>
                                <li className="b-none borderline">
                                  <Link
                                    className="link toggle2 mobilenesteddropdowntoggle"
                                    to={"/aboutus"}
                                    style={
                                      language === "ur" || language === "sd"
                                        ? {
                                          display: "flex",
                                          flexDirection: "row-reverse",
                                          textAlign: "right"
                                        }
                                        : {}
                                    }
                                  >
                                    {
                                      translations["Talktoexpert"][
                                      language
                                      ]
                                    }
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li  style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign:"right,"
                                }
                                : { }
                            }>
                              <label
                                for="drop-10"
                                className="d-flex mobiledropdowntoggle toggle toggle2 highlightable" 
                                style={
                                  language === "ur" || language === "sd"
                                    ? {
                                      display: "flex",
                                      flexDirection: "row-reverse",
                                      textAlign: "right",
                                      marginLeft: "0px",
                                    }
                                    : { }
                                }
                              >
                                <Link to={"/education"} style={{ width: "195px", padding: "0px" }}>
                                {
                                      translations["Education"][
                                        language
                                      ]
                                    }
                                </Link>
                                {dropdownStates[5] ? (
                                  <span
                                    className="minus"
                                    style={
                                      language === "ur" || language === "sd"
                                        ? {
                                          display: "flex",
                                          marginRight: "115px",
                                        }
                                        : { display: "contents" }
                                    }
                                    onClick={() => handleIconClick(5)} // Click on icon to open/close the dropdown
                                    onMouseEnter={() => handleIconClick(5)} // Hover on icon to open/close the dropdown
                                    onMouseLeave={() => closeDropdown(5)} // Leave icon to close the dropdown
                                  ></span>
                                ) : (
                                  <span
                                    className="plus"
                                    style={
                                      language === "ur" || language === "sd"
                                        ? {
                                          display: "flex",
                                          marginRight: "115px",
                                        }
                                        : { display: "contents" }
                                    }
                                    onClick={() => handleIconClick(5)} // Click on icon to open/close the dropdown
                                    onMouseEnter={() => handleIconClick(5)} // Hover on icon to open/close the dropdown
                                    onMouseLeave={() => closeDropdown(5)} // Leave icon to close the dropdown
                                  ></span>
                                )}
                              </label>
                              <input type="checkbox" id="drop-10" />
                              <ul>
                                <li className="b-none borderline">
                                  <Link
                                    className="link toggle2 mobilenesteddropdowntoggle"
                                    to={"/aboutus"}
                                    style={
                                      language === "ur" || language === "sd"
                                        ? {
                                          display: "flex",
                                          flexDirection: "row-reverse",
                                          textAlign: "right"
                                        }
                                        : {}
                                    }
                                  >
                                    {
                                      translations["Talktoexpert"][
                                      language
                                      ]
                                    }
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right",
                                }
                                : { }
                            }>
                              <label
                                for="drop-11"
                                className="d-flex mobiledropdowntoggle toggle toggle2 highlightable"
                                style={
                                  language === "ur" || language === "sd"
                                    ? {
                                      display: "flex",
                                      flexDirection: "row-reverse",
                                      textAlign:"right",
                                      marginLeft: "0px",
                                    }
                                    : { }
                                }
                              >
                                <Link to={"/energy"} style={{ width: "195px", padding: "0px" }}>
                                   {
                                      translations["Energy"][
                                        language
                                      ]
                                    }
                                </Link>
                                {dropdownStates[6] ? (
                                  <span
                                    className="minus"
                                    style={
                                      language === "ur" || language === "sd"
                                        ? {
                                          display: "flex",
                                          marginRight: "115px",
                                        }
                                        : { display: "contents" }
                                    }
                                    onClick={() => handleIconClick(6)} // Click on icon to open/close the dropdown
                                    onMouseEnter={() => handleIconClick(6)} // Hover on icon to open/close the dropdown
                                    onMouseLeave={() => closeDropdown(6)} // Leave icon to close the dropdown
                                  ></span>
                                ) : (
                                  <span
                                    className="plus"
                                    style={
                                      language === "ur" || language === "sd"
                                        ? {
                                          display: "flex",
                                          marginRight: "115px",
                                        }
                                        : { display: "contents" }
                                    }
                                    onClick={() => handleIconClick(6)} // Click on icon to open/close the dropdown
                                    onMouseEnter={() => handleIconClick(6)} // Hover on icon to open/close the dropdown
                                    onMouseLeave={() => closeDropdown(6)} // Leave icon to close the dropdown
                                  ></span>
                                )}
                              </label>
                              <input type="checkbox" id="drop-11" />
                              <ul>
                                <li 
                                style={
                                      language === "ur" || language === "sd"
                                        ? {
                                          textAlign: "right"
                                        }
                                        : {}
                                    } className="b-none borderline">
                                  <Link
                                  style={
                                    language === "ur" || language === "sd"
                                      ? {
                                        display: "flex",
                                        flexDirection: "row-reverse",
                                        textAlign: "right"
                                      }
                                      : {}
                                  }
                                    className="link toggle2 mobilenesteddropdowntoggle"
                                    to={"/aboutus"}
                                  >
                                    {
                                      translations["Talktoexpert"][
                                      language
                                      ]
                                    }
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : { }
                            }>
                              <label
                                for="drop-12"
                                className="d-flex mobiledropdowntoggle toggle toggle2 highlightable"
                                style={
                                  language === "ur" || language === "sd"
                                    ? {
                                      display: "flex",
                                      flexDirection: "row-reverse",
                                      textAlign: "right",
                                      marginLeft: "0px",
                                    }
                                    : { }
                                }
                                onClick={() => handleLabelTextClick(7)}
                              >
                                <Link to={"/health"} style={{ width: "195px", padding: "0px" }}>
                                {
                                      translations["Health"][
                                        language
                                      ]
                                    }
                                </Link>
                                {dropdownStates[7] ? (
                                  <span style={
                                    language === "ur" || language === "sd"
                                      ? {
                                        display: "flex",
                                        marginRight: "115px",
                                      }
                                      : { display: "contents" }
                                  }
                                    className="minus"
                                    onClick={() => handleIconClick(7)} // Click on icon to open/close the dropdown
                                    onMouseEnter={() => handleIconClick(7)} // Hover on icon to open/close the dropdown
                                    onMouseLeave={() => closeDropdown(7)} // Leave icon to close the dropdown
                                  ></span>
                                ) : (
                                  <span
                                  style={
                                    language === "ur" || language === "sd"
                                      ? {
                                        display: "flex",
                                        marginRight: "115px",
                                      }
                                      : { display: "contents" }
                                  }
                                    className="plus"
                                    onClick={() => handleIconClick(7)} // Click on icon to open/close the dropdown
                                    onMouseEnter={() => handleIconClick(7)} // Hover on icon to open/close the dropdown
                                    onMouseLeave={() => closeDropdown(7)} // Leave icon to close the dropdown
                                  ></span>
                                )}
                              </label>
                              <input type="checkbox" id="drop-12" />
                              <ul>
                                <li style={
                                      language === "ur" || language === "sd"
                                        ? {
                                          textAlign: "right"
                                        }
                                        : {}
                                    } className="b-none borderline">
                                  <Link
                                    className="link toggle2 mobilenesteddropdowntoggle"
                                    to={"/aboutus"}
                                  >
                                    {
                                      translations["Talktoexpert"][
                                      language
                                      ]
                                    }
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li  className="b-none " 
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : { }
                            }
                            >
                              <label
                                for="drop-13"
                                className="d-flex mobiledropdowntoggle toggle toggle2 highlightable"
                                style={
                                  language === "ur" || language === "sd"
                                    ? {
                                      display: "flex",
                                      flexDirection: "row-reverse",
                                      textAlign: "right",
                                      marginLeft: "0px",
                                    }
                                    : {}
                                }
                              >
                                <Link to={"/informationtech"} 
                                style={
                                  language === "ur" || language === "sd"
                                    ? {
                                      width: "195px",
                                       padding: "0px" ,
                                      marginLeft: "-30px",
                                    }
                                    : {width: "195px", padding: "0px" }
                                }>
                                {
                                      translations[
                                        "InformationTechnology"
                                      ][language]
                                    }
                                </Link>
                                {dropdownStates[8] ? (
                                  <span style={
                                    language === "ur" || language === "sd"
                                      ? {
                                        display: "flex",
                                        marginRight: "115px",
                                      }
                                      : { display: "contents" }
                                  }
                                    className="minus"
                                    onClick={() => handleIconClick(8)} // Click on icon to open/close the dropdown
                                    onMouseEnter={() => handleIconClick(8)} // Hover on icon to open/close the dropdown
                                    onMouseLeave={() => closeDropdown(8)} // Leave icon to close the dropdown
                                  ></span>
                                ) : (
                                  <span style={
                                    language === "ur" || language === "sd"
                                      ? {
                                        display: "flex",
                                        marginRight: "115px",
                                      }
                                      : { display: "contents" }
                                  }
                                    className="plus"
                                    onClick={() => handleIconClick(8)} // Click on icon to open/close the dropdown
                                    onMouseEnter={() => handleIconClick(8)} // Hover on icon to open/close the dropdown
                                    onMouseLeave={() => closeDropdown(8)} // Leave icon to close the dropdown
                                  ></span>
                                )}
                              </label>
                              <input type="checkbox" id="drop-13" />
                              <ul>
                                <li style={
                                  language === "ur" || language === "sd"
                                    ? {
                                      textAlign: "right"
                                    }
                                    : {}
                                } className="b-none borderline">
                                  <Link
                                  style={
                                    language === "ur" || language === "sd"
                                      ? {
                                        display: "flex",
                                        flexDirection: "row-reverse",
                                        textAlign: "right"
                                      }
                                      : {}
                                  }
                                    className="link toggle2 mobilenesteddropdowntoggle"
                                    to={"/aboutus"}
                                  >
                                    {
                                      translations["Talktoexpert"][
                                      language
                                      ]
                                    }
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li> */}
                        {/* <li
                      style={
                        language === "ur" || language === "sd"
                          ? {
                            display: "flex",
                            flexDirection: "row-reverse",
                            borderBottom: "1px solid transparent !important",
                          }
                          : { borderBottom: "1px solid transparent !important" }
                      }
                        >
                          <Link
                            className="link toggle2"
                            to={"/NewsAndInformation"}
                          >
                           {
                              translations["NewsInformation"][
                                language
                              ]
                            }
                          </Link>
                        </li> */}
                        {/* <li style={
                            language === "ur" || language === "sd"
                              ? {
                                textAlign:"right",
                              }
                              : { }
                          } className="">
                          <label for="drop-2" className="d-flex toggle toggle2 highlightable"
                          style={
                            language === "ur" || language === "sd"
                              ? {
                                display: "flex",
                                flexDirection: "row-reverse",
                              }
                              : { }
                          }
                          >
                            <Link to={""} 
                            style={{ width: "212px", padding: "0px", fontSize: "20px" }}>
                               {translations["Aboutus"][language]}
                            </Link>
                            {dropdownStates[11] ? (
                              <span
                              className="minus"
                                style={
                                  language === "ur" || language === "sd"
                                    ? {
                                      display: "flex",
                                      marginLeft: "-70px",
                                    }
                                    : { display: "contents" }
                                }
                                onClick={() => handleIconClick(11)} // Click on icon to open/close the dropdown
                                onMouseEnter={() => handleIconClick(11)} // Hover on icon to open/close the dropdown
                                onMouseLeave={() => closeDropdown(11)} // Leave ico icon to close the dropdown
                              ></span>
                            ) : (
                              <span
                                className="plus"
                                style={
                                  language === "ur" || language === "sd"
                                    ? {
                                      display: "flex",
                                      marginLeft: "-70px",
                                    }
                                    : { display: "contents" }
                                }
                                onClick={() => handleIconClick(11)} // Click on icon to open/close the dropdown
                                onMouseEnter={() => handleIconClick(11)} // Hover on icon to open/close the dropdown
                                onMouseLeave={() => closeDropdown(11)} // Leave ico icon eave icon to close the dropdown
                              ></span>
                            )}
                          </label>
                          <input type="checkbox" id="drop-2" />
                          <ul>
                            <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }
                            >
                              <Link 
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                              className="link toggle2 mobilenesteddropdowntoggle2" to={""}>
                                {translations["Introduction"][language]}
                              </Link>
                            </li>

                            <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }
                            >
                              <Link 
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                              className="link toggle2 mobilenesteddropdowntoggle2" to={""}>
                                 {translations["projectobjectives"][language]}
                              </Link>
                            </li> 
                            <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }
                            >
                              <Link 
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                              className="link toggle2 mobilenesteddropdowntoggle2" to={""}>
                                {translations["Achievements"][language]}
                              </Link>
                            </li>
                            <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }
                            >
                              <Link 
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                              className="link toggle2 mobilenesteddropdowntoggle2" to={"/resource"}>
                                {translations["Downloads"][language]}
                              </Link>
                            </li>
                            
                             <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }
                            >
                              <Link 
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                              className="link toggle2 mobilenesteddropdowntoggle2" to={"/Team"}>
                                      {translations["Team"][language]}
                              </Link>
                            </li>
                            <li className="b-none"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }>
                              <Link
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                                className="link toggle2 mobilenesteddropdowntoggle2"
                                to={""}
                              >
                               {translations["Contactus"][language]}
                              </Link>
                            </li>
                          </ul>
                        </li> */}
                          <li
                          style={
                            language === "ur" || language === "sd"
                              ? {
                                display: "flex",
                                flexDirection: "row-reverse",
                                borderBottom: "1px solid transparent !important",
                              }
                              : { borderBottom: "1px solid transparent !important" }
                          }
                        >
                           <a
                          href="https://business.gov.pk/home_prmi/"
                          title="Home Page"
                          className="link toggle2"
                          target="_blank"
                      >
                          {"PRMI"}
                      </a>
                        </li>
                        <li style={
                            language === "ur" || language === "sd"
                              ? {
                                textAlign:"right",
                              }
                              : { }
                          } >
                          <label
                          
                            for="drop-3"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  display: "flex",
                                  flexDirection: "row-reverse",
                                }
                                : { }
                            }
                            className="d-flex toggle toggle2 highlightable">
                            <Link to={"/aboutus"} style={{ width: "212px", padding: "0px", fontSize: "20px" }}>
                            {translations["Aboutus"][language]}
                            </Link>
                            {/* {dropdownStates[9] ? ( */}
                            {dropdownStates[14] ? (
                                <span
                                style={{display:"contents"}}
                                  className="minus"
                                  onClick={() => handleIconClick(14)} // Click on icon to open/close the dropdown
                                  onMouseEnter={() => handleIconClick(14)} // Hover on icon to open/close the dropdown
                                   onMouseLeave={() => closeDropdown(14)} // Leave icon to close the dropdown
                                ></span>
                              ) : (
                                <span 
                                style={{display:"contents"}}
                                  className="plus"
                                  onClick={() => handleIconClick(14)} // Click on icon to open/close the dropdown
                                  onMouseEnter={() => handleIconClick(14)} // Hover on icon to open/close the dropdown
                                  onMouseLeave={() => closeDropdown(14)} // Leave ico/ Leave icon to close the dropdown
                                ></span>
                              )}
                          </label>
                          <input type="checkbox" id="drop-3" />
                          <ul>
                            <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }
                            >
                              <Link 
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                              className="link toggle2 mobilenesteddropdowntoggle2" to={"/introduction"}>
                                {translations["Introduction"][language]}
                              </Link>
                            </li>

                            <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }
                            >
                              <Link 
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                              className="link toggle2 mobilenesteddropdowntoggle2" to={"/projectobjectives"}>
                                 {translations["projectobjectives"][language]}
                              </Link>
                            </li> 
                            <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }
                            >
                              <Link 
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                              className="link toggle2 mobilenesteddropdowntoggle2" to={"/acheivement"}>
                                {translations["Achievements"][language]}
                              </Link>
                            </li>
                            <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }
                            >
                              <Link 
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                              className="link toggle2 mobilenesteddropdowntoggle2" to={"/resource"}>
                                {translations["Downloads"][language]}
                              </Link>
                            </li>
                            
                             <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }
                            >
                              <Link 
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                              className="link toggle2 mobilenesteddropdowntoggle2" to={"/Team"}>
                                      {translations["Team"][language]}
                              </Link>
                            </li>
                            <li className="borderline"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }
                            >
                              <Link 
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                              className="link toggle2 mobilenesteddropdowntoggle2" to={"/faqs"}>
                                      {translations["FAQ"][language]}
                              </Link>
                            </li>
                            <li className="b-none"
                            style={
                              language === "ur" || language === "sd"
                                ? {
                                  textAlign: "right"
                                }
                                : {}
                            }>
                              <Link
                              style={
                                language === "ur" || language === "sd"
                                  ? {
                                    display: "flex",
                                    flexDirection: "row-reverse",
                                    textAlign: "right"
                                  }
                                  : {}
                              }
                                className="link toggle2 mobilenesteddropdowntoggle2"
                                to={"/contactUs"}
                              >
                               {translations["Contactus"][language]}
                              </Link>
                            </li>
                          </ul>
                        </li>
                        {/* <li
                          style={
                            language === "ur" || language === "sd"
                              ? {
                                display: "flex",
                                flexDirection: "row-reverse",
                              }
                              : { }
                          }
                        >
                          <Link className="link toggle2" to={"/Maps"}>
                            {
                              translations["Maps"][
                              language
                              ]
                            }
                          </Link>
                        </li> */}
                      </ul>
                    </nav>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", top: "122px", zIndex: "-1" }}>
            <video style={{ width: "104%" }} autoPlay loop muted>
              <source src={Newproject} type="video/mp4" />
              Your Browser Does Not Support The Video Tag.
            </video>

            <div
              className="row"
              style={{
                textAlign: "center",
                position: "relative",
                bottom: "204px",
              }}
            >
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                <h6
                  style={{
                    fontSize: "25px",
                    color: "white",
                    fontWeight: "600",
                    width: "100%",
                  }}
                >
                  {translations["hero-heading"][language]}
                </h6>
              </div>
            </div>
            <div
              className="row"
              style={{
                position: "relative",
                bottom: "213px",
              }}
            >
              <div>
                <p
                className="highlightable hero_para"
                  style={{
                    fontSize: "16px",
                    color: "white",
                    fontWeight: "400",
                  }}
                >
                  {translations["subHeroHeading"][language]}
                </p>
                <div className="row">
                  <div
                    className="col-lg-6 col-md-6 col-sm-6 col-xs-12 "
                    style={
                      language === "ur" ||
                        language === "sd"
                        ? {
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginTop: "-20px"
                        }
                        : {
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }
                    }>
                    <Link className={""} to={"/investnow"}>
                      <button type="button" className="feedback">
                        <span>{translations["investButton"][language]}</span>
                      </button>
                    </Link>
                  </div>
                  <div
                    className="col-lg-6 col-md-6 col-sm-6 col-xs-12  p-2"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <a href="comingsoon.html">
                      <button type="button" className="feedback">
                        <span>{translations["calculatorButton"][language]}</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MobileHome;
