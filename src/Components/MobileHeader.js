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

function MobileHome() {
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
            style={{ position: "absolute", top: "0",zIndex:"11" }}
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
                className="accessibility"
                src={accessibility}
                alt=""
                width="25"
                height="25"
                style={{marginTop:"3px"}}
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
                     className="toggle"
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
                       <Link className="link toggle2" to={"/WhySindh"}>
                       Sindh at a Glance
                       </Link>
                     </li>
                     <li
                       style={{
                         borderBottom: "1px solid transparent !important",
                       }}
                     >
                       <Link className="link toggle2" to={"/InvestNow"}>
                         Invest now
                       </Link>
                     </li>
                     <li>
                     <label
                     htmlFor="drop-5"
                     className={`d-flex toggle toggle2`}
                   >
                   <Link to={"/manufacturing"} style={{width:"212px",padding:"0px",fontSize:"20px"}}>
                     Sectors and Opportunities
                     </Link>
                     {dropdownStates[0] ? (
                       <span
                       style={{display:"contents"}}
                         className="minus"
                         onClick={() => handleIconClick(0)} // Click on icon to open/close the dropdown
                         onMouseEnter={() => handleIconClick(0)} // Hover on icon to open/close the dropdown
                          onMouseLeave={() => closeDropdown(0)} // Leave icon to close the dropdown
                       ></span>
                     ) : (
                       <span 
                       style={{display:"contents"}}
                         className="plus"
                         onClick={() => handleIconClick(0)} // Click on icon to open/close the dropdown
                         onMouseEnter={() => handleIconClick(0)} // Hover on icon to open/close the dropdown
                         onMouseLeave={() => closeDropdown(0)} // Leave ico/ Leave icon to close the dropdown
                       ></span>
                     )}
                   </label>

                       <input type="checkbox" id="drop-5" />
                       <ul>
                         <li className="borderline">
                         <label
                         htmlFor="drop-6"
                         className="d-flex mobiledropdowntoggle toggle toggle2"
                       >
                       <Link to={"/manufacturing"} style={{width:"195px",padding:"0px"}}>
                         Manufacturing
                         </Link>
                         {dropdownStates[1] ? (
                           <span
                           style={{display:"contents"}}
                             className="minus"
                             onClick={() => handleIconClick(1)} // Click on icon to open/close the dropdown
                             onMouseEnter={() => handleIconClick(1)} // Hover on icon to open/close the dropdown
                             onMouseLeave={() => closeDropdown(1)} // Leave ico icon to close the dropdown
                           ></span>
                         ) : (
                           <span
                             className="plus"
                           style={{display:"contents"}}
                             onClick={() => handleIconClick(1)} // Click on icon to open/close the dropdown
                             onMouseEnter={() => handleIconClick(1)} // Hover on icon to open/close the dropdown
                             onMouseLeave={() => closeDropdown(1)} // Leave ico icon eave icon to close the dropdown
                           ></span>
                         )}
                       
                       </label>
                           <input type="checkbox" id="drop-6" />
                           <ul>
                             <li className="b-none borderline">
                               <Link
                                 className="link toggle2 mobilenesteddropdowntoggle"
                                 to={"/aboutus"}
                               >
                                 Talk to Expert
                               </Link>
                             </li>
                           </ul>
                         </li>
                         <li className="">
                           <label
                             for="drop-7"
                             className="d-flex mobiledropdowntoggle toggle toggle2"
                           >
                             <Link to={"/textile"} style={{width:"195px",padding:"0px"}}>
                             Textile
                             </Link>
                             {dropdownStates[2] ? (
                                 <span
                                   className="minus"
                                   style={{display:"contents"}}
                                   onClick={() => handleIconClick(2)} // Click on icon to open/close the dropdown
                                       onMouseEnter={() => handleIconClick(2)} // Hover on icon to open/close the dropdown
                                   onMouseLeave={() => closeDropdown(2)} eave icon to close the dropdown
                                 ></span>
                               ) : (
                                 <span
                                     style={{display:"contents"}}
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
                                 className="link toggle2 mobilenesteddropdowntoggle"
                                 to={"/aboutus"}
                               >
                                 Talk to Expert
                               </Link>
                             </li>
                           </ul>
                         </li>
                         <li className="">
                           <label
                             for="drop-8"
                             className="d-flex mobiledropdowntoggle toggle toggle2"
                           >
                              <Link to={"/tourism"} style={{width:"195px",padding:"0px"}}>
                             Tourism 
                         </Link>
                             {dropdownStates[3] ? (
                                 <span
                                   style={{display:"contents"}}
                                   className="minus"
                                   onClick={() => handleIconClick(3)} // Click on icon to open/close the dropdown
                                   onMouseEnter={() => handleIconClick(3)} // Hover on icon to open/close the dropdown
                                   onMouseLeave={() => closeDropdown(3)} // Leave icon to close the dropdown
                                 ></span>
                               ) : (
                                 <span
                                   style={{display:"contents"}}
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
                               >
                                 Talk to Expert
                               </Link>
                             </li>
                           </ul>
                         </li>
                         <li className="">
                           <label
                             for="drop-9"
                             className="d-flex mobiledropdowntoggle toggle toggle2"
                           >
                            <Link to={"/agriculture"} style={{width:"195px",padding:"0px"}}>
                             Agriculture  
                             </Link>
                             {dropdownStates[4] ? (
                                 <span
                                 style={{display:"contents"}}
                                   className="minus"
                                   onClick={() => handleIconClick(4)} // Click on icon to open/close the dropdown
                                   onMouseEnter={() => handleIconClick(4)} // Hover on icon to open/close the dropdown
                                   onMouseLeave={() => closeDropdown(4)} // Leave icon to close the dropdown
                                 ></span>
                               ) : (
                                 <span
                                   className="plus"
                                 style={{display:"contents"}}
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
                               >
                                 Talk to Expert
                               </Link>
                             </li>
                           </ul>
                         </li>
                         <li className="">
                           <label
                             for="drop-10"
                             className="d-flex mobiledropdowntoggle toggle toggle2"
                           >
                           <Link to={"/education"} style={{width:"195px",padding:"0px"}}>
                             Eduction  
                             </Link>
                             {dropdownStates[5] ? (
                                 <span
                                   className="minus"
                                 style={{display:"contents"}}
                                   onClick={() => handleIconClick(5)} // Click on icon to open/close the dropdown
                                   onMouseEnter={() => handleIconClick(5)} // Hover on icon to open/close the dropdown
                                   onMouseLeave={() => closeDropdown(5)} // Leave icon to close the dropdown
                                 ></span>
                               ) : (
                                 <span
                                   className="plus"
                                   style={{display:"contents"}}
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
                               >
                                 Talk to Expert
                               </Link>
                             </li>
                           </ul>
                         </li>
                         <li className="">
                           <label
                             for="drop-11"
                             className="d-flex mobiledropdowntoggle toggle toggle2"
                           >
                           <Link to={"/energy"} style={{width:"195px",padding:"0px"}}>
                             Energy 
                             </Link>
                             {dropdownStates[6] ? (
                                 <span
                                   className="minus"
                                   style={{display:"contents"}}
                                   onClick={() => handleIconClick(6)} // Click on icon to open/close the dropdown
                                   onMouseEnter={() => handleIconClick(6)} // Hover on icon to open/close the dropdown
                                   onMouseLeave={() => closeDropdown(6)} // Leave icon to close the dropdown
                                 ></span>
                               ) : (
                                 <span
                                   className="plus"
                                   style={{display:"contents"}}
                                   onClick={() => handleIconClick(6)} // Click on icon to open/close the dropdown
                                   onMouseEnter={() => handleIconClick(6)} // Hover on icon to open/close the dropdown
                                   onMouseLeave={() => closeDropdown(6)} // Leave icon to close the dropdown
                                 ></span>
                               )}
                           </label>
                           <input type="checkbox" id="drop-11" />
                           <ul>
                             <li className="b-none borderline">
                               <Link
                                 className="link toggle2 mobilenesteddropdowntoggle"
                                 to={"/aboutus"}
                               >
                                 Talk to Expert
                               </Link>
                             </li>
                           </ul>
                         </li>
                         <li className="">
                           <label
                             for="drop-12"
                             className="d-flex mobiledropdowntoggle toggle toggle2"
                             onClick={() => handleLabelTextClick(7)}
                           >
                           <Link to={"/health"} style={{width:"195px",padding:"0px"}}>
                             Health 
                             </Link>
                             {dropdownStates[7] ? (
                                 <span style={{display:"contents"}}
                                   className="minus"
                                   onClick={() => handleIconClick(7)} // Click on icon to open/close the dropdown
                                   onMouseEnter={() => handleIconClick(7)} // Hover on icon to open/close the dropdown
                                   onMouseLeave={() => closeDropdown(7)} // Leave icon to close the dropdown
                                 ></span>
                               ) : (
                                 <span 
                                 style={{display:"contents"}}
                                   className="plus"
                                   onClick={() => handleIconClick(7)} // Click on icon to open/close the dropdown
                                   onMouseEnter={() => handleIconClick(7)} // Hover on icon to open/close the dropdown
                                   onMouseLeave={() => closeDropdown(7)} // Leave icon to close the dropdown
                                 ></span>
                               )}
                           </label>
                           <input type="checkbox" id="drop-12" />
                           <ul>
                             <li className="b-none borderline">
                               <Link
                                 className="link toggle2 mobilenesteddropdowntoggle"
                                 to={"/aboutus"}
                               >
                                 Talk to Expert
                               </Link>
                             </li>
                           </ul>
                         </li>
                         <li className="b-none ">
                           <label
                             for="drop-13"
                             className="d-flex mobiledropdowntoggle toggle toggle2"
                           >
                             <Link to={"/informationtech"} style={{width:"195px",padding:"0px"}}>
                             Information Technology  
                             </Link>
                             {dropdownStates[8] ? (
                                 <span style={{display:"contents"}}
                                   className="minus"
                                   onClick={() => handleIconClick(8)} // Click on icon to open/close the dropdown
                                   onMouseEnter={() => handleIconClick(8)} // Hover on icon to open/close the dropdown
                                   onMouseLeave={() => closeDropdown(8)} // Leave icon to close the dropdown
                                 ></span>
                               ) : (
                                 <span style={{display:"contents"}}
                                   className="plus"
                                   onClick={() => handleIconClick(8)} // Click on icon to open/close the dropdown
                                   onMouseEnter={() => handleIconClick(8)} // Hover on icon to open/close the dropdown
                                   onMouseLeave={() => closeDropdown(8)} // Leave icon to close the dropdown
                                 ></span>
                               )}
                           </label>
                           <input type="checkbox" id="drop-13" />
                           <ul>
                             <li className="b-none borderline">
                               <Link
                                 className="link toggle2 mobilenesteddropdowntoggle"
                                 to={"/aboutus"}
                               >
                                 Talk to Expert
                               </Link>
                             </li>
                           </ul>
                         </li>
                       </ul>
                     </li>
                     <li
                       style={{
                         borderBottom: "1px solid transparent !important",
                       }}
                     >
                       <Link
                         className="link toggle2"
                         to={"/NewsAndInformation"}
                       >
                         News & Information
                       </Link>
                     </li>
                     <li className="">
                       <label for="drop-2" className="d-flex toggle toggle2">
                       <Link to={"/resource"} style={{width:"212px",padding:"0px",fontSize:"20px"}}>
                         Resources 
                         </Link>
                         {dropdownStates[11] ? (
                             <span
                             style={{display:"contents"}}
                               className="minus"
                               onClick={() => handleIconClick(11)} // Click on icon to open/close the dropdown
                               onMouseEnter={() => handleIconClick(11)} // Hover on icon to open/close the dropdown
                               onMouseLeave={() => closeDropdown(11)} // Leave ico icon to close the dropdown
                             ></span>
                           ) : (
                             <span
                               className="plus"
                             style={{display:"contents"}}
                               onClick={() => handleIconClick(11)} // Click on icon to open/close the dropdown
                               onMouseEnter={() => handleIconClick(11)} // Hover on icon to open/close the dropdown
                               onMouseLeave={() => closeDropdown(11)} // Leave ico icon eave icon to close the dropdown
                             ></span>
                           )}
                       </label>
                       <input type="checkbox" id="drop-2" />
                       <ul>
                         <li className="borderline">
                           <Link className="link toggle2 mobilenesteddropdowntoggle2" to={"/resource"}>
                             Download
                           </Link>
                         </li>
                         <li className="b-none">
                           <Link
                             className="link toggle2 mobilenesteddropdowntoggle2"
                             to={"/regulatorycatalog"}
                           >
                             Regulatory Catalog
                           </Link>
                         </li>
                       </ul>
                     </li>
                     <li>
                       <label 
                       for="drop-3"
                        className="d-flex toggle toggle2">
                         <Link to={"/aboutus"} style={{width:"212px",padding:"0px",fontSize:"20px"}}>
                         About Us 
                          </Link>
                          {dropdownStates[9] ? (
                             <span
                             style={{display:"contents"}}
                               className="minus"
                               onClick={() => handleIconClick(9)} // Click on icon to open/close the dropdown
                               onMouseEnter={() => handleIconClick(9)} // Hover on icon to open/close the dropdown
                                onMouseLeave={() => closeDropdown(9)} // Leave icon to close the dropdown
                             ></span>
                           ) : (
                             <span 
                             style={{display:"contents"}}
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
                           <Link className="link toggle2 mobilenesteddropdowntoggle2" to={"/aboutus"}>
                             Vision
                           </Link>
                         </li>
                         <li className="">
                           <label for="drop-4" className="d-flex toggle toggle2 mobiledropdowntoggle">
                         <Link to={"/Component"} style={{width:"195px",padding:"0px",marginLeft:"8px"}}>
                           Component 
                         </Link>
                         {dropdownStates[10] ? (
                             <span
                             style={{display:"contents"}}
                               className="minus"
                               onClick={() => handleIconClick(10)} // Click on icon to open/close the dropdown
                               onMouseEnter={() => handleIconClick(10)} // Hover on icon to open/close the dropdown
                               onMouseLeave={() => closeDropdown(10)} // Leave ico icon to close the dropdown
                             ></span>
                           ) : (
                             <span
                               className="plus"
                             style={{display:"contents"}}
                               onClick={() => handleIconClick(10)} // Click on icon to open/close the dropdown
                               onMouseEnter={() => handleIconClick(10)} // Hover on icon to open/close the dropdown
                               onMouseLeave={() => closeDropdown(10)} // Leave ico icon eave icon to close the dropdown
                             ></span>
                           )}
                           </label>
                           <input type="checkbox" id="drop-4" />
                           <ul>
                             <li className="borderline">
                               <Link
                                 className="link toggle2 mobilenesteddropdowntoggle"
                                 to={"/aboutus"}
                               >
                                 CLICK SID
                               </Link>
                             </li>
                             <li className="b-none">
                               <Link
                                 className="link toggle2 mobilenesteddropdowntoggle"
                                 to={"/aboutus"}
                               >
                                 Our Team
                               </Link>
                             </li>
                           </ul>
                         </li>
                         <li className="b-none">
                         <label for="drop-4" className="d-flex toggle toggle2 mobiledropdowntoggle">
                           <Link style={{width:"195px",padding:"0px",marginLeft:"8px"}} to={"/aboutus"}>
                             NEW Component
                           </Link>
                           </label>
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
                  Discover the Riches of Sindh Invest in a Thriving Future
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
                  style={{
                    fontSize: "16px",
                    color: "white",
                    fontWeight: "400",
                  }}
                >
                  Explore The Province Of Sindh And Discover Its Many Assets And
                  Potential For Growth And Investment
                </p>
                <div className="row">
                  <div
                    className="col-lg-6 col-md-6 col-sm-6 col-xs-12 "
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Link className={""} to={"/investnow"}>
                      <button type="button" className="feedback">
                        <span>Invest now</span>
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
                        <span>Regulatory Cost Calculator</span>
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
