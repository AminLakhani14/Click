import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/header.css";
import "../Css/resource.css";
import Footer from "./footer";
import GenericHeader from "./genericHeader";
import "../Css/investnow.css";
import BG1 from "../assets/BG1.jpg";
import { useEffect } from "react";

import { Box, TextField, TextareaAutosize } from "@mui/material";
import MobileHeaderGeneric from "./MobileHeaderGeneric";

export default function FeedBack() {

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
  
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);
  let value = ">";

  return (
    <>
      {windowWidth <= 500 ? <MobileHeaderGeneric /> : <GenericHeader />}
      {windowWidth <= 500 ? (
        <div></div>
      ) : (
        <div style={{ height: "150px" }}></div>
      )}

      <div
        className="row "
        style={{
          height: "330px",
          background: "#F5F5F5",
        }}
      >
        <div
          className="col-lg-12"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <p
            className={window.innerWidth <= 540 ? "mobileparaforfeedback" : "feedbackpara"} style={{fontSize:window.innerWidth === 280 || window.innerWidth ===320 ? "17.5px": " "}}
          >
            We are always looking for ways to deliver an exceptional experience
            to our customers and investors. Your feedback is vital for us to
            achieve this goal. Please use the form below to share your insights
            and suggestions on how we can improve our services. We value your7.5
            time and contribution in helping us grow and succeed. Thank you for
            your support and trust.
          </p>
        </div>
      </div>

      <div
        className="row justify-content-center feedbackMUI"
        style={{
          height: window.innerWidth <= 912 ? "930px":"700px",
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${BG1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="col-lg-9" style={{height:window.innerWidth <= 912? "950px" :" ",marginTop: window.innerWidth >= 1024? "-49px": "30px"}} >
          <div className="row justify-content-center px-5 mt-5 gapbwfields">
            <div className="col-lg-4">
              <TextField
                className="feedBackTextField"
                type="text"
                variant="outlined"
                placeholder="Enter your Name"
                label="Name"
                InputProps={{
                  style: { borderRadius: "30px", border: "none" }, // Remove the border
                }}
              />
            </div>
            <div className="col-lg-4">
              <TextField
                className="feedBackTextField"
                type="text"
                placeholder="Enter your Company Name"
                label="Company Name"
                InputProps={{
                  style: { borderRadius: "30px", border: "none" }, // Remove the border
                }}
              />
            </div>
            <div className="col-lg-4">
              <TextField
                className="feedBackTextField"
                type="text"
                placeholder="Enter your Address"
                label="Address"
                InputProps={{
                  style: { borderRadius: "30px", border: "none" }, // Remove the border
                }}
              />
            </div>
          </div>
          <div className="row justify-content-center px-5  gapbwfields" style={{marginTop:window.innerWidth <= 912? "1.5rem": "3rem"}}>
            <div className="col-lg-4">
              <TextField
                className="feedBackTextField"
                type="text"
                placeholder="Enter your Country/City"
                label="Country-City"
                InputProps={{
                  style: { borderRadius: "30px", border: "none" }, // Remove the border
                }}
              />
            </div>
            <div className="col-lg-4">
              <TextField
                className="feedBackTextField"
                type="text"
                placeholder="Enter your Mobile Number"
                label="Mobile Number"
                InputProps={{
                  style: { borderRadius: "30px", border: "none" }, // Remove the border
                }}
              />
            </div>
            <div className="col-lg-4">
              <TextField
                className="feedBackTextField"
                type="text"
                placeholder="Enter your Email"
                label=" Email Address"
                // defaultValue={"Hello World"}
                InputProps={{
                  style: { borderRadius: "30px", border: "none" }, // Remove the border
                }}
              />
            </div>
          </div>
          <div className=  "row  px-5  gapbwfields" style={{marginTop:window.innerWidth <= 912? "1.5rem": "3rem"}}>
            <div className="col-lg-4">
              <TextField
                className="feedBackTextField"
                type="text"
                placeholder="Enter your Website link"
                label="Company Website"
                InputProps={{
                  style: { borderRadius: "30px", border: "none" }, // Remove the border
                }}
              />
            </div>
            <div className="col-lg-4 ">
              <select
                type="select"
                className="textField"
                style={{
                  height: "53.5px",
                  width: "100%", // Remove the extra "width:" here
                  color: "#757775",
                  paddingTop: "10px",
                  paddingRight: "30px", /* Add padding to the right side for the icon */
                  borderRadius: "25px",
                  fontFamily: "sans-serif",
                  padding: "10px",
                  position: "relative" /* Add relative positioning to the select element */
                }}
              >
                <option value="volvo">College Education Department</option>
                <option value="saab">
                  Labour and Human Resources Department
                </option>
                <option value="opel">Sindh Food Authority (SFA)</option>
                <option value="Health">Health Department</option>
                <option value="School">
                  School Education and Literacy Department
                </option>
                <option value="Care">Sindh Health Care Commission</option>
                <option value="Commerce">
                  Industries and Commerce Department
                </option>
                <option value="Environmental">
                  Sindh Environmental Protection Agency (SEPA)
                </option>
                <option value="Building">
                  Sindh Building Control Authority (SBCA)
                </option>
                <option value="Agriculture">Agriculture Department</option>
                <option value="Industrial">
                  Sindh Industrial Trading Estate (S.I.T.E) Limited
                </option>
                <option value="Corporation">
                  Sindh Small Industries Corporation (SSIC)
                </option>
                <option value="Revenue">Board of Revenue</option>
                <option value="Municipal">
                  District Municipal Corporation (DMC)
                </option>
                <option value="Metropolitan">
                  Karachi Metropolitan Corporation (KMC)
                </option>
                <option value="Energy">Energy Department</option>
                <option value="Security">
                  Sindh Employees Social Security Institution (SESSI)
                </option>
                <option value="Taxation">
                  Excise, Taxation &amp; Narcotics Control Department
                </option>
                <option value="Board">Sindh Revenue Board</option>
                <option value="Department">Local Government Department</option>
                <option value="Sewerage">
                  Karachi Water &amp; Sewerage Board{" "}
                </option>
              </select>
            </div>
          </div>
          <div
            className="row justify-content-center px-5 gapfields "
            style={{marginTop:window.innerWidth <= 912? "1rem": "3rem"}} 
          >
            <div className="col-lg-12">
              <Box>
                <textarea
                  className={isTextareaFocused ? "textarea-focused" : ""}
                  style={{
                    borderRadius: "55px",
                    height: "100px",
                    color: "rgba(0, 0, 0, 0.87)",
                    padding: "20px",
                    width: "100%",
                    fontSize: "1.0rem",
                    fontWeight: "200",
                    fontFamily: "sans-serif",
                    resize: "none",
                    border: "none", // Remove the default border
                    outline: "none", // Remove the default outline
                    transition: "border-color 0.3s",
                    overflow: "hidden",
                  }}
                  placeholder="Give your valuable feedback here…"
                  onFocus={() => setIsTextareaFocused(true)}
                  onBlur={() => setIsTextareaFocused(false)}
                />
              </Box>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt-4 tocentersubmitbutton" style={{marginLeft: window.innerWidth >= 1024? "52px": "0px"}} >
              <button type="button" className="submitButton">
                <span>Submit</span>
              </button>
            </div>
          </div>
          </div>
    
      </div>

      <Footer />
    </>
  );
}
