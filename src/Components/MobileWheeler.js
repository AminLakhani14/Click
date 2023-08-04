import React, { useEffect, useState } from "react";
import MobileCircleSeg from "./MobileCircleSeg";
import SVG from 'react-inlinesvg';
import asset1 from "../assets/asset1.svg";

const wheelerInitialState = {
  deg: 45,
  value: 45,
  color: "#A9A9A9",
  image: "Agriculture",
  Program: "Agriculture",
  Percentage: 50,
  Description: "Approx US$1.6 Billion (2019-2020)",
  wheat: "4 Million ",
  subweat: "Tons of Wheat",
  Rice: "1.9 Million ",
  subrice: "Tons of Rice",
  sugarcane: "4.2 Million",
  subsugarcane: "Tons of Sugarcane",
  cotton: "2.3 Million",
  subcotton: "Bales of Cotton",
};
function MobileWheeler(props) {
  const [data, setData] = useState({});
  console.log(data, "sdfsdfss");

  function SelectOption() {
    useEffect(() => {
      let output = document.getElementById("output");

      let dropdown = document.getElementById("segmentTitle");

      let selectedIndex = dropdown.selectedIndex;

      let selectedValue = dropdown.options[selectedIndex].text;
      output.innerHTML = "The selected value is " + selectedValue;
    });
  }

  const [wheelerFormData, setWheelerFormData] = useState({
    ...wheelerInitialState,
  });
  const getSegmentData = (data) => {
    try {
      if (data) {
        setWheelerFormData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log("Data", data);
  // const [isVisible2, setIsVisible2] = useState(true);

  // const toggleVisibility = () => {
  //   setIsVisible2(true);
  // };

  // const toggleVisibility2 = () => {
  //   setIsVisible2(false);
  // };
  return (
    <>
      <div
        className="p-4 bg-ringsss"
        style={props.isVisible2 === false ?{ backgroundImage: `url(${data.backgroundimage})`,height:"auto"}:{ backgroundImage: `url(${data.backgroundimage})` ,height:"auto"}}
      >
        <div className="">
          <div className="row ">
            <div className="col-12 ">
              <h1
                className="mainHeading"
     
              >
                Awaiting Opportunities
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 " style={{ display: "contents" }}>
              <p
                style={{
                  color: "#5f5f5f",
                  fontSize: "20px",
                }}
              >
                Sizeable and Attractive Opportunities available across all
                Sectors
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="row"
            style={{ display: "flex", alignItems: "inherit" }}
          >
            <div className="col-lg-6">
              <MobileCircleSeg
                getSegmentData={getSegmentData}
                setData={setData}
              />
            </div>
            <div className="col-lg-6" style={{display:"flex",justifyContent:"center"}}>
              <div
                id="pieText"
                className="col-sm-8 hide-text "
                style={{ float: "right" }}
              >
                <div className="mobileclick-box" style={props.isVisible2 === false?{height:"39px",width:"230px"}:{}}>
                  <div className="row"> 
                  {props.isVisible2 === false ?  
                  <div className="col-sm-12 up-arrow"
                  onClick={props.toggleVisibility}
                  >
                      <i
                        className="fa fa-angle-up"
                        style={{
                          color:`${data.boxColor}`,
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      ></i>
                    </div>:
                    <div className="col-sm-12 up-arrow"
                    onClick={props.toggleVisibility2}>
                      <i
                        className="fa fa-angle-down"
                        style={{
                          color:`${data.boxColor}`,
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      ></i>
                    </div>}
                  
                  </div>
                  {props.isVisible2 === true ? (
                    <div style={{userSelect: "none"}}>
                  <div className="row ">
                    <div className="col-6">
                      <label
                        id="segmentTitle"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          fontFamily: "Crimson Pro",
                          color: `${data.boxColor}`
                        }}
                      >
                        {wheelerFormData.Program}
                      </label>
                    </div>

                    <div className="col-6">
                      <label
                        className=""
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          fontFamily: "Crimson Pro",
                          color:`${data.boxColor}`,
                          marginLeft: "-14px",
                        }}
                      >
                        Sector Statistics
                      </label>
                    </div>
                    <div>
                      <div className="hr"></div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-10 ">
                      <h1
                        className=""
                        id=""
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          fontFamily: "Crimson Pro",
                          color:`${data.boxColor}`
                        }}
                      >
                        Value of Major Crops:
                      </h1>
                      <p
                        id="segmentText"
                        className=""
                        style={{
                          fontSize: "13px",
                          fontWeight: 400,
                          fontFamily: "Crimson Pro",
                          color:`${data.boxColor}`
                        }}
                      >
                        {/* Approx US$1.6 Billion (2019-2020) */}
                        {wheelerFormData.Description}
                      </p>
                    </div>
                    <div>
                      <div className="hr2"></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="row">
                      <div className="col-6">
                        <h1
                          id="box-title1"
                          style={{
                            fontSize: "16px",
                            fontWeight: 600,
                            fontFamily: "Crimson Pro",
                            color:`${data.boxColor}`
                          }}
                          className="heading-1"
                        >
                          {/* 4 Million */}
                          {wheelerFormData.wheat}
                        </h1>
                        <p
                          id="box-subtitle1"
                          style={{
                            fontSize: "13px",
                            fontWeight: 400,
                            fontFamily: "Crimson Pro",
                            color:`${data.boxColor}`
                          }}
                          className="phra-2"
                        >
                          {/* tons of wheat */}
                          {wheelerFormData.subweat}
                        </p>
                      </div>
                      <div className="col-6">
                        <h1
                          id="box-title2"
                          style={{
                            fontSize: "16px",
                            fontWeight: 600,
                            fontFamily: "Crimson Pro",
                            color:`${data.boxColor}`
                          }}
                          className="heading-1"
                        >
                          {/* 1.9 Million */}
                          {wheelerFormData.Rice}
                        </h1>
                        <p
                          id="box-subtitle2"
                          style={{
                            fontSize: "13px",
                            fontWeight: 400,
                            fontFamily: "Crimson Pro",
                            color:`${data.boxColor}`
                          }}
                          className="phra-2"
                        >
                          {/* tons of rice */}
                          {wheelerFormData.subrice}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <h1
                          id="box-title3"
                          style={{
                            fontSize: "16px",
                            fontWeight: 600,
                            fontFamily: "Crimson Pro",
                            color:`${data.boxColor}`
                          }}
                          className=""
                        >
                          {/* 4.2 Million */}
                          {wheelerFormData.sugarcane}
                        </h1>
                        <p
                          style={{
                            fontSize: "13px",
                            fontWeight: 400,
                            fontFamily: "Crimson Pro",
                            color:`${data.boxColor}`
                          }}
                          id="box-subtitle3"
                          className=""
                        >
                          {/* tons of sugarcane */}
                          {wheelerFormData.subsugarcane}
                        </p>
                      </div>
                      <div className="col-6 mb-3">
                        <h1
                          id="box-title4"
                          style={{
                            fontSize: "16px",
                            fontWeight: 600,
                            fontFamily: "Crimson Pro",
                            color:`${data.boxColor}`
                          }}
                          className=""
                        >
                          {/* 2.3 Million */}
                          {wheelerFormData.cotton}
                        </h1>
                        <p
                          id="box-subtitle4"
                          style={{
                            fontSize: "13px",
                            fontWeight: 400,
                            fontFamily: "Crimson Pro",
                            color:`${data.boxColor}`
                          }}
                          className=""
                        >
                          {/* bales of cotton */}
                          {wheelerFormData.subcotton}
                        </p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 mb-3">
                        <a href="comingsoon.html">
                          <button
                            type="button"
                            className="feedback"
                            style={{ width: "100%", fontSize: "13px",background:`${data.boxColor}`  }}
                          >
                            <span>Learn more about this Sector</span>
                          </button>
                        </a>
                        <br />
                      </div>
                      <div className="col-12 mb-2">
                        <a href="comingsoon.html">
                          <button
                            type="button"
                            className="feedback"
                            style={{ width: "100%", fontSize: "13px",background:`${data.boxColor}` }}
                          >
                            <span>View all Sectors</span>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  </div>
                   ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            {/* <Circle/> */}
            {/* <div className="col-sm-6 " id="pieChart"> </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default MobileWheeler;
