
import React from "react";
import sindh from "../assets/logo-sindh.png";
import click from "../assets/click-logo.png";
import accessibility from "../assets/accessibility.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "../Css/newcss.css";
import InvestmentDepartment from "../assets/DownloadDocument/CompetitivenessofSindh.pdf"

function MobileHeaderGeneric() {
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
  const handleIconClick = (index) => {
    // Toggle the dropdown state
    const newDropdownStates = [...dropdownStates];
    newDropdownStates[index] = !newDropdownStates[index];
    setDropdownStates(newDropdownStates);
  };

  const closeDropdown = (index) => {
    // Close the dropdown
    const newDropdownStates = [...dropdownStates];
    newDropdownStates[index] = false;
    setDropdownStates(newDropdownStates);
  };

  useEffect(() => {
    const changewidth = () => {
      setscreenWidth(windowWidth);
    };
    window.addEventListener("resize", changewidth);
    return () => {
      window.removeEventListener("resize", changewidth);
    };
  }, []);
  return (
    <>
      <div
        className={"mobileheader   "}
      >
        <div className={"navbar mt-6"}>
          <div
            className="col-lg-6 navbarLeft"
            style={{ position: "absolute", top: "0" }}
          >
            <Link to={"/home"} style={{ display: "flex" }}>
              <img className=" navlogo1" src={sindh} alt="" width="35%"></img>
              <div
                className="vl"
              ></div>
              <img
                src={click}
                alt=""
                width="60%"
                className="navlogo2"
              ></img>
            </Link>
          </div>
          <div className="genericnavbarRights">
            <div
              className=""
              style={{
                marginTop: "15px",
                marginBottom: "-4px",
                width: "90%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <img
                className="accessibility"
                src={accessibility}
                alt=""
                width="25"
                style={{ marginLeft: "10px", marginRight: 10 }}
              />
              <a href="comingsoon.html" title="" width="10">
                <i className="fa-sharp fa-solid fa-magnifying-glass me-2"></i>
              </a>
            </div>
            <div className={`header `}>
              <div className={"row"}>
                <div className={" navbar justify-content-end"}>
                  {(toggleMenu || screenWidth > 500) && (
                    <nav style={{ marginTop: "30px" }}>
                      <label
                        for="drop"
                        className="toggle"
                        style={{ background: "white" }}
                      >
                        <i
                          style={{ Top: "-25px" }}
                          className="fa-solid fa-bars toggleMenu"
                        ></i>
                      </label>
                      <input type="checkbox" id="drop" />
                      <ul className="menu">
                        <li
                          style={{
                            borderBottom: "1px solid transparent !important",
                          }}
                        >
                          <Link className="link toggle2" to={"/home"}>
                            Home
                          </Link>
                        </li>
                        <li
                          style={{
                            borderBottom: "1px solid transparent !important",
                          }}
                        >
                          <Link className="link toggle2" to={"/feedback"}>
                            Feedback
                          </Link>
                        </li>
                        <li className="">
                          <label for="drop-2" className="d-flex toggle toggle2">
                            <Link to={"/regulatorycatalog"} style={{ width: "212px", padding: "0px", fontSize: "20px" }}>
                              Interactive Regulatory Directory
                            </Link>
                            {dropdownStates[11] ? (
                              <span
                                style={{ display: "contents" }}
                                className="minus"
                                onClick={() => handleIconClick(11)} // Click on icon to open/close the dropdown
                                onMouseEnter={() => handleIconClick(11)} // Hover on icon to open/close the dropdown
                                onMouseLeave={() => closeDropdown(11)} // Leave ico icon to close the dropdown
                              ></span>
                            ) : (
                              <span
                                className="plus"
                                style={{ display: "contents" }}
                                onClick={() => handleIconClick(11)} // Click on icon to open/close the dropdown
                                onMouseEnter={() => handleIconClick(11)} // Hover on icon to open/close the dropdown
                                onMouseLeave={() => closeDropdown(11)} // Leave ico icon eave icon to close the dropdown
                              ></span>
                            )}
                          </label>
                          <input type="checkbox" id="drop-2" />
                          <ul>
                            <li className="borderline">
                              <Link className="link toggle2 mobilenesteddropdowntoggle2" to={"/RegulatoryCatalogCalculator"}>
                                Regulatory Cost Calculator
                              </Link>
                            </li>
                            <li className="borderline">
                              <Link className="link toggle2 mobilenesteddropdowntoggle2" to={"/regulatorycatalog"}>
                                Regulatory Catalog
                              </Link>
                            </li>
                            <li className="borderline">
                              <Link className="link toggle2 mobilenesteddropdowntoggle2" to={"/Maps"}>
                                Maps
                              </Link>
                            </li>
                            <li className="borderline">
                              <Link className="link toggle2 mobilenesteddropdowntoggle2" to={"/Dashboard"}>
                                Sindh Statistics
                              </Link>

                            </li>
                            <li className="borderline">
                              <Link className="link toggle2 mobilenesteddropdowntoggle2" to={"/tutorial"}>
                                Tutorials
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <label
                            for="drop-4"
                            className="d-flex toggle toggle2">
                            <a style={{ width: "212px", padding: "0px", fontSize: "20px" }}>
                              Business Facilitation
                            </a>
                            {dropdownStates[12] ? (
                              <span
                                style={{ display: "contents" }}
                                className="minus"
                                onClick={() => handleIconClick(12)} // Click on icon to open/close the dropdown
                                onMouseEnter={() => handleIconClick(12)} // Hover on icon to open/close the dropdown
                                onMouseLeave={() => closeDropdown(12)} // Leave icon to close the dropdown
                              ></span>
                            ) : (
                              <span
                                style={{ display: "contents" }}
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
                            >
                              <a
                                target="_blank"
                                href="https://smeda.org/index.php?option=com_content&view=article&id=146&Itemid=676"
                                className="link toggle2 mobilenesteddropdowntoggle2" to={"/introduction"}>
                                GUIDS
                              </a>
                            </li>
                            <li className="borderline"
                            >
                              <a
                                target="_blank"
                                href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=122&Itemid=308"
                                className="link toggle2 mobilenesteddropdowntoggle2" to={"/projectobjectives"}>
                                Pre-Feasibility Studies
                              </a>
                            </li>
                            <li className="borderline"
                            >
                              <a
                                target="_blank"
                                href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=164&Itemid=981"
                                className="link toggle2 mobilenesteddropdowntoggle2" to={"/acheivement"}>
                                Business Guides
                              </a>
                            </li>
                            <li className="borderline"
                            >
                              <a
                                target="_blank"
                                href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=7&Itemid=363"
                                className="link toggle2 mobilenesteddropdowntoggle2" to={"/resource"}>
                                Commercial Contracts (English)
                              </a>
                            </li>
                            <li className="borderline"
                            >
                              <a
                                target="_blank"
                                href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=7&Itemid=363"
                                className="link toggle2 mobilenesteddropdowntoggle2" to={"/Team"}>
                                Commercial Contracts (Urdu)
                              </a>
                            </li>
                            <li className="borderline"
                            >
                              <a
                                target="_blank"
                                href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=15&Itemid=138"
                                className="link toggle2 mobilenesteddropdowntoggle2" to={"/faqs"}>
                                Regulatory Procedures
                              </a>
                            </li>
                            <li className="borderline"
                            >
                              <a
                                target="_blank"
                                href="https://tipp.gov.pk/"
                                className="link toggle2 mobilenesteddropdowntoggle2"
                              >
                                Trade Information Portal
                              </a>
                            </li>
                            <li>
                              <a
                                target="_blank"
                                href={InvestmentDepartment}
                                className="link toggle2 mobilenesteddropdowntoggle2"
                              >
                                Investment Department
                              </a>
                            </li>
                            <li className="borderline"
                            >
                              <a
                                target="_blank"
                                href=""
                                className="link toggle2 mobilenesteddropdowntoggle2"
                              >
                                REPORTS
                              </a>
                            </li>

                            <li className="borderline"
                            >
                              <a
                                target="_blank"
                                href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=40&Itemid=742"
                                className="link toggle2 mobilenesteddropdowntoggle2"
                              >
                                Cluster Profiles
                              </a>
                            </li>
                            <li className="borderline"
                            >
                              <a
                                target="_blank"
                                href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=186&Itemid=1024"
                                className="link toggle2 mobilenesteddropdowntoggle2"
                              >
                                District Economic Profiles
                              </a>
                            </li>
                            <li className="borderline"
                            >
                              <a
                                target="_blank"
                                href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=28&Itemid=139"
                                className="link toggle2 mobilenesteddropdowntoggle2"
                              >
                                Sector Briefs
                              </a>
                            </li>
                            <li className="borderline"
                            >
                              <a
                                target="_blank"
                                href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=188&Itemid=1027"
                                className="link toggle2 mobilenesteddropdowntoggle2"
                              >
                                Study Reports
                              </a>
                            </li>
                            <li className="borderline"
                            >
                              <a
                                target="_blank"
                                href="https://smeda.org/index.php?option=com_phocadownload&view=category&id=168&Itemid=996"
                                className="link toggle2 mobilenesteddropdowntoggle2"
                              >
                                Trade Analysis Series
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          style={{
                            borderBottom: "1px solid transparent !important",
                          }}
                        >
                          <a
                            href="https://business.gov.pk/home_prmi/"
                            className="link toggle2"
                            target="_blank"
                          >
                            {"PRMI"}
                          </a>
                        </li>
                        <li>
                          <label
                            for="drop-3"
                            className="d-flex toggle toggle2">
                            <Link to={"/aboutus"} style={{ width: "212px", padding: "0px", fontSize: "20px" }}>
                              About Us
                            </Link>
                            {dropdownStates[9] ? (
                              <span
                                style={{ display: "contents" }}
                                className="minus"
                                onClick={() => handleIconClick(9)} // Click on icon to open/close the dropdown
                                onMouseEnter={() => handleIconClick(9)} // Hover on icon to open/close the dropdown
                                onMouseLeave={() => closeDropdown(9)} // Leave icon to close the dropdown
                              ></span>
                            ) : (
                              <span
                                style={{ display: "contents" }}
                                className="plus"
                                onClick={() => handleIconClick(9)} // Click on icon to open/close the dropdown
                                onMouseEnter={() => handleIconClick(9)} // Hover on icon to open/close the dropdown
                                onMouseLeave={() => closeDropdown(9)} // Leave ico/ Leave icon to close the dropdown
                              ></span>
                            )}
                          </label>
                          <input type="checkbox" id="drop-3" />
                          <ul>
                            <li className="borderline">
                              <Link className="link toggle2 mobilenesteddropdowntoggle2" to={"/introduction"}>
                                Introduction
                              </Link>
                            </li>
                            <li className="borderline">
                              <Link className="link toggle2 mobilenesteddropdowntoggle2" to={"/projectobjectives"}>
                                project objectives
                              </Link>
                            </li>
                            <li className="borderline">
                              <Link className="link toggle2 mobilenesteddropdowntoggle2" to={"/acheivement"}>
                                Achievements
                              </Link>
                            </li>
                            <li className="borderline">
                              <Link className="link toggle2 mobilenesteddropdowntoggle2" to={"/resource"}>
                                Downloads
                              </Link>
                            </li>
                            <li className="borderline">
                              <Link className="link toggle2 mobilenesteddropdowntoggle2" to={"/Team"}>
                                Team
                              </Link>
                            </li>

                            <li className="b-none">
                              <Link
                                className="link toggle2 mobilenesteddropdowntoggle2"
                                to={"/contactUs"}
                              >
                                Contact us
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MobileHeaderGeneric;
