import React, { useEffect, useState } from "react";
import "../Css/wheeler.css";
import "../Css/header.css";
import clickLogo from "../assets/click-logo.png";
import infoLogo from "../assets/infoaccess.png";
import { TextField } from "@mui/material";
function Footer(props) {
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
      <footer className={
          window.innerWidth <= 500
            ? "footerTop"
            : "mt-5"
        } >
        <div 
         className={
          window.innerWidth <= 1440
            ? "body-boxfootersmall"
            : "body-boxfooter"
        }
        >
          <div className="row mt-4">
            <div className="col-lg-5">
              <img
                src={clickLogo}
                alt=""
                width="300"
                style={windowWidth <=1440 ?{ marginTop: "-40px", marginBottom: "-40px"}:{ marginTop: "-40px", marginBottom: "-40px",marginLeft:"-56px" }}

              ></img>
              <p
              className={
                window.innerWidth <= 1366
                  ? "sub-footertitle"
                  : "sub-title"
              }
                style={windowWidth <500 ?{marginLeft:"0px"}:windowWidth <=1440?{ marginLeft: "45px" ,textAlign:"inherit"}:{ textAlign:"inherit" }}
              >
                Your one-stop source for investment opportunities in Sindh,
                Pakistan. Our platform connects you with the latest information
                on the business environment, policies, and incentives available
                in the region.
              </p>
            </div>
            </div>
            <div 
            style={windowWidth <=1440 ?{paddingLeft:"45px",alignItems:"baseline"}:{alignItems:"baseline" }}
            className="row mt-5">
            <div className="col-md-3 footertext" style={windowWidth <500?{textAlign:"inherit" }:{ marginTop: "-50px",textAlign:"inherit"  }}>
              <h3 
               className={
                window.innerWidth <= 1366
                  ? "mobileheading"
                  : "heading"
              }
               style={windowWidth <500?{}:{textAlign:"inherit"}}>Related Links</h3>
              <a href="http://lgdsindh.gov.pk/" target="_blank" className="resource-link">
                <span 
                className={
                  window.innerWidth <= 1366
                    ? "sub-footertitle ft-links"
                    :  "sub-title ft-links"
                }>
                  Local Government Deparment
                </span>
              </a>
              <br />
              <a href="https://www.srb.gos.pk/home/index.jsp" target="_blank" className="resource-link">
                <span className={
                  window.innerWidth <= 1366
                    ? "sub-footertitle ft-links"
                    :  "sub-title ft-links"
                }>
                  Sindh Revenue Board
                </span>
              </a>{" "}
              <br />
              <a href="http://www.sbca.gos.pk/" target="_blank" className="resource-link">
                <span  className={
                  window.innerWidth <= 1366
                    ? "sub-footertitle ft-links"
                    :  "sub-title ft-links"
                }>
                  Sindh Building Control Authority
                </span>
              </a>{" "}
              <br />
              <a href="http://shcc.org.pk/" target="_blank" className="resource-link">
                <span  className={
                  window.innerWidth <= 1366
                    ? "sub-footertitle ft-links"
                    :  "sub-title ft-links"
                }>
                  Sindh Healthcare Commission
                </span>
              </a>
              <br />
              <a href="https://epa.sindh.gov.pk/" target="_blank" className="resource-link">
                <span  className={
                  window.innerWidth <= 1366
                    ? "sub-footertitle ft-links"
                    :  "sub-title ft-links"
                }>
                  Sindh Environment Protection Agency
                </span>
              </a>
              <br />
              <a href="https://sfa.gos.pk/" target="_blank" className="resource-link">
                <span  className={
                  window.innerWidth <= 1366
                    ? "sub-footertitle ft-links"
                    :  "sub-title ft-links"
                }>
                  Sindh Food Authority
                </span>
              </a>
              <br/>
              <a href="https://college.sindh.gov.pk/" target="_blank" className="resource-link">
                <span  className={
                  window.innerWidth <= 1366
                    ? "sub-footertitle ft-links"
                    :  "sub-title ft-links"
                }>College Department</span>
              </a>
            </div>
            <div className="col-lg-3 footertext" style={windowWidth <500?{textAlign:"inherit" }:{ marginTop: "-50px",textAlign:"inherit"  }}>
              <h3 className={
                window.innerWidth <= 1366
                  ? "mobileheading"
                  : "heading"
              } style={windowWidth <500?{}:{textAlign:"inherit"}}>Related Links</h3>
              <a href="https://sfa.gos.pk/" target="_blank" className="resource-link">
                <span  className={
                  window.innerWidth <= 1366
                    ? "sub-footertitle ft-links"
                    :  "sub-title ft-links"
                }>
                 Sindh Food Authority
                </span>
              </a>
              <br />
              <a href="https://sindhinvestment.gos.pk/" target="_blank" className="resource-link">
                <span  className={
                  window.innerWidth <= 1366
                    ? "sub-footertitle ft-links"
                    :  "sub-title ft-links"
                }>Sindh Investment Department</span>
              </a>
              <br />
              <a href="https://industries.sindh.gov.pk/" target="_blank" className="resource-link">
                <span  className={
                  window.innerWidth <= 1366
                    ? "sub-footertitle ft-links"
                    :  "sub-title ft-links"
                }>
                  Industrial Department
                </span>
              </a>
              <br />
              <a href="https://agri.sindh.gov.pk/" target="_blank" className="resource-link">
                <span  className={
                  window.innerWidth <= 1366
                    ? "sub-footertitle ft-links"
                    :  "sub-title ft-links"
                }>
                  Agriculture Department
                </span>
              </a>
              <br />
              <a href="http://www.sindhenergy.gov.pk/" target="_blank" className="resource-link">
                <span  className={
                  window.innerWidth <= 1366
                    ? "sub-footertitle ft-links"
                    :  "sub-title ft-links"
                }>Energy Department</span>
              </a>
              <br />
              <a href="http://www.sindheducation.gov.pk/" target="_blank" className="resource-link">
                <span  className={
                  window.innerWidth <= 1366
                    ? "sub-footertitle ft-links"
                    :  "sub-title ft-links"
                }>
                  School Education Department
                </span>
              </a>
              <br/>
              <a href="https://sindhhealth.gov.pk/" target="_blank" className="resource-link">
                <span  className={
                  window.innerWidth <= 1366
                    ? "sub-footertitle ft-links"
                    :  "sub-title ft-links"
                }>Health Department</span>
              </a>
              
            </div>
            <div 
            className="col-lg-3 ">
              <h3 className={
                window.innerWidth <= 1366
                  ? "mobileheading"
                  : "heading"
              } style={windowWidth <500?{paddingTop:"16px"}:{paddingTop:"16px",textAlign:"initial",marginTop:"-56px"}}>Contact</h3>
              <address
                className={
                  window.innerWidth <= 1366
                    ? "sub-footertitle"
                    : "sub-title"
                }
                style={
                  windowWidth < 500
                    ? {
                        marginBottom: "60px",
                      }
                    : {
                        marginBottom: "0px",
                      }
                }
              >
                1st Floor, FTC Building, <br />
                Main Shahrah-e-Faisal Rd, Block A Faisal Cantonment,
                <br />
                Karachi, Karachi City, Sindh
              </address>
              <p
                 className={
                  window.innerWidth <= 1366
                    ? "sub-footertitle"
                    : "sub-title"
                }
                style={
                  windowWidth < 500
                    ? {
                        marginTop: "-50px",
                        paddingBottom: "80px",
                      }
                    : {textAlign:"inherit"}
                }
              >
                +92 21 99218874 <br />
                +92 21 99218875 <br />
                info@business.gos.pk
              </p>
            </div>
            <div 
            className={
              window.innerWidth <= 1366
                ? "col-lg-1 footertext"
                : "col-lg-3"
            }
             style={windowWidth < 500?{marginTop: "-90px" }:{ marginTop: "-120px" }}>
              <h3 className={
                window.innerWidth <= 1366
                  ? "mobileheading"
                  : "heading"
              }style={windowWidth <500?{}:{textAlign:"inherit"}}>Resources</h3>
              <a href="comingsoon.html" className="resource-link">
                <span 
                className={
                  window.innerWidth <= 1366
                    ? "sub-footertitle ft-links"
                    : "sub-title ft-links"
                }
               >Presentations</span>
              </a>
              <br />
              <a href="comingsoon.html" className="resource-link">
                <span  className={
                  window.innerWidth <= 1366
                    ? "sub-footertitle ft-links"
                    : "sub-title ft-links"
                }>Notifications</span>
              </a>
              <br />
              <a href="comingsoon.html" className="resource-link">
                <span  className={
                  window.innerWidth <= 1366
                    ? "sub-footertitle ft-links"
                    : "sub-title ft-links"
                }>Downloads </span>
              </a>{" "}
              <br />
              <a href="comingsoon.html" className="resource-link">
                <span  className={
                  window.innerWidth <= 1366
                    ? "sub-footertitle ft-links"
                    : "sub-title ft-links"
                }>Regulatory catalog</span>
              </a>
            </div>
            <form action="" style={windowWidth < 500 ?{marginBottom:"-30px",marginTop:"20px"}:{}}>
              <div className="row" style={windowWidth < 500 ?{gap:"20px"}:{marginTop:"15px"}}>
                <div
                  className={windowWidth <500?"col-lg-6":windowWidth <=1366?"col-lg-3":"col-lg-2"}
                  style={
                    windowWidth < 500
                      ? {
                          marginLeft: "5px",
                        }
                      : {paddingLeft:"45px"}
                  }
                >
                  <TextField
                    id="outlined-controlled"
                    style={{ width: "100%" }}
                    size="small"
                    label="Email"
                    placeholder="Enter email address"
                  />
                  {/* <input type="email" placeholder="Enter email address" /> */}
                </div>

                <div className={windowWidth <=1440?"col-lg-3":"col-lg-2 mt-2"}>
                  <a href="comingsoon.html">
                    <button type="button" className="feedback ft-btn">
                      <span>Sign up for Newsletter</span>
                    </button>
                  </a>
                </div>
                <div className="col-lg-2"></div>
                {/* <div className="col-lg-2 " style={windowWidth < 500 ?{ zIndex: "99999" ,marginTop:"-23px"}:{ zIndex: "99999" }}>
                  <a
                    href="https://www.facebook.com/Clicksindh?mibextid=ZbWKwL"
                    target="_blank"
                  >
                    <span className="ft-icon">
                      <i className="fab fa-facebook-f"></i>
                    </span>
                  </a>

                  <a
                    href="https://twitter.com/ClickSindh?t=8K_w3Bl-z1SgSvedJykmsQ&s=08"
                    target="_blank"
                  >
                    <span className="ft-icon">
                      <i className="fa-brands fa-twitter"></i>
                    </span>
                  </a>

                  <a
                    style={{ textDecoration: "none" }}
                    href="https://youtube.com/@clicksindhinvestmentdepart1679"
                    target="_blank"
                  >
                    {" "}
                    <span className="ft-icon">
                      <i className="fa-brands fa-youtube"></i>
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/competitive-and-livable-city-of-karachi-click/"
                    target="_blank"
                  >
                    <span className="ft-icon">
                      <i
                        className="fa-brands fa-linkedin"
                        style={{
                          color: "#0073a4",
                          backgroundColor: "transparent",
                        }}
                      ></i>
                    </span>
                  </a>
                </div> */}
              </div>
            </form>
          </div>
        </div>












        <div className="row mb-3">
        <div
          class=" mt-1"
          style={{ border: '1px solid #c4c4c4',width: '100%',marginTop:'1px'}}>
          </div>
      </div>

        <div className="row mt-3 marginBtm" 
        // style={windowWidth < 500?{marginBottom:"26%"}:windowWidth < 390 ?{marginBottom:"12%"}:{}}
         >
          <div
            className="col-12 mb-2 copy-right"
            style={{
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <div>
              <p style={windowWidth < 500 ?{fontWeight: "bold", fontSize:"10px"}:{ fontWeight: "bold", marginTop: "11px" }}>
                Version 0.07.07.0023
              </p>
            </div>
            <div
              style={
                windowWidth <= 600
                  ? { width: "50%", textAalign: "start" }
                  : { width: "55%", textAlign: "end" }
              }
            >
              <p
                className="sub-title "
                style={windowWidth < 500?{marginTop: "0px" }:{ fontWeight: "bold", marginTop: "11px" }}
              >
                Copyright © 2023, All Rights are Reserved.
              </p>
            </div>
            <div
              style={
                windowWidth <= 600
                  ? {
                      display: "flex",
                      marginRight: "-27px",
                      width: "54%",
                      justifyContent: "right",
                    }
                  : {
                      display: "flex",
                      marginRight: "-90px",
                      width: "40%",
                      justifyContent: "end",
                    }
              }
            >
              <p
                className="sub-title "
                style={windowWidth < 500?{marginTop: "0px" }:{ fontWeight: "bold", marginTop: "10px" }}
              >
                Powered by Infoaccess
              </p>
              <img
                style={{ marginTop: "1px" }}
                src={infoLogo}
                alt=""
                width={windowWidth < 500?"80":"115"}
                height="50"
              ></img>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
