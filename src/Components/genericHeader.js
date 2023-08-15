import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import accessibility from "../assets/accessibility.png";
import "../Css/header.css";
import sindh from "../assets/logo-sindh.png";
import pak from "../assets/pak.png";
import urdu from "../assets/urdu.png";
import "../Css/resource.css";
import click from "../assets/click-logo1.png";
import cardImage from "../assets/cardresource1.png";
import Sindhi from "../assets/Sindhi.png";
import English from "../assets/English.png";

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
 
function toggle(){
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  window.scrollTo(2800, 2800);

  // Restore scroll restoration to its default behavior
  return () => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }
  };
}

  
  


  return (
    <div
      className={"genericheader  sticky  "}
      style={{ flexDirection: "column" }}
    >
      <div className={""} style={{ width: "100%" }}>
        <div className={"navbar"}>
          <div className="navbarLeft">
            <Link to={"/home"} style={{ display: "flex" }}>
              <img className=" navlogo1" src={sindh} alt=""></img>
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
              <img src={click} alt="" className="navlogo2"></img>
            </Link>
          </div>
          <div className="navbarRight">
            <ul>
            <div className="r-side d-inline">
              <img
                  className="headerLogoImages"
                  src={props.language === "ur" ? English : urdu}
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
                  <Link className={"link2"} to={"/WhySindh"}>
                    {" "}
                    Why Sindh
                  </Link>
                </a>
              </li>
              <li className="HeaderPaddingRight">
                <a target="blank" title="" className={"link2"}>
                  <Link className="link2" to={"/InvestNow"}>
                    Invest now
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
                          style={{
                            width: "300px",
                            paddingLeft: "15px",
                            height: "40px",
                            paddingTop: "8px",
                          }}
                          href="#"
                        >
                          <Link  className={"link"} to={"/manufacturing"}>
                          
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
                        <Link className={""} to={"/manufacturing"}>
                          <a  onClick={toggle} href="#">Talk to expert </a>
      
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
                          <Link className={"link"} to={"/textile"}>
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
                        <Link className={""} to={"/textile"}>
                          <a onClick={toggle} href="#">Talk to expert </a>
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
                          <Link className={"link"} to={"/tourism"}>
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
                        <Link className={""} to={"/tourism"}>
                          <a onClick={toggle} href="#">Talk to expert </a>
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
                          <Link className={"link"} to={"/agriculture"}>
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
                        <Link className={""} to={"/agriculture"}>
                          <a  onClick={toggle} href="#">Talk to expert </a>
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
                          <Link className={"link"} to={"/education"}>
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
                        <Link onClick={toggle} className={""} to={"/education"}>
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
                          <Link className={"link"} to={"/energy"}>
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
                        <Link onClick={toggle} className={""} to={"/energy"}>
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
                          <Link className={"link"} to={"/health"}>
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
                        <Link  onClick={toggle} className={""} to={"/health"}>
                          <a onClick={toggle} href="#">Talk to expert </a>
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
                          <Link className={"link"} to={"/informationtech"}>
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
                        <Link onClick={toggle} className={""} to={"/informationtech"}>
                          <a href="#">Talk to expert </a>
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
                    style={{ marginTop: "0px", marginLeft: "0px" }}
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
                <a href="comingsoon.html" title="" width="10">
                  <i
                    className="fa-sharp fa-solid fa-magnifying-glass"
                    style={{ color: "#000000" }}
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
