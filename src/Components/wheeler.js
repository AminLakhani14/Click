import React, { useEffect, useState } from "react";
import "../Css/header.css";
import CircleSeg from "./practice";
import asset1 from "../assets/asset1.svg";
import SVG from 'react-inlinesvg';
import { translations } from "../Transalation/Transalation";
import { useSelector } from "react-redux";

function Wheeler(props) {
  const { language } = useSelector((state) => state.language)

  const wheelerInitialState = {
    deg: 45,
    value: 45,
    color: "#A9A9A9",
    image: "Agriculture",
    Program: translations["Agriculture"][language],
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
  const [data, setData] = useState({});
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
  const [isVisible2, setIsVisible2] = useState(true);

  const toggleVisibility = () => {
    setIsVisible2(true);
  };

  const toggleVisibility2 = () => {
    setIsVisible2(false);
  };

  // console.log("Data", data);

  console.log("wheeler", translations)


  return (
    <>
      <div
        className="bg-ring"
      >
        <SVG
          src={asset1}
          width={windowWidth <= 1440 ? 600 : 700}
          height={windowWidth <= 1440 ? 600 : 700}
          style={{
            position: "absolute"
          }}
          fill={data.boxColor}
          title="React"
        />
        <div className="body-box">
          <div className="row ">
            <div className="col-12 highlit-heading">
              <h1 className="mainHeading highlightable">
                {translations["Awaiting"][language]}</h1>
            </div>
          </div>
          <div className="row" style={{ marginTop: "-20px" }}>
            <div className="col-lg-2"></div>
            <div className="col-lg-8 ph-reason">
              <p className="paragraphGeneric highlightable" style={{ color: "#5f5f5f" }}>
                {translations["Attractives"][language]}
              </p>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
        <div className="container" style={{ position: "relative", zIndex: "1" }}>
          <div
            className="row"
            style={{ display: "flex", alignItems: "inherit" }}
          >
            <div className="col-lg-6">
              <CircleSeg translations={translations} language={language} getSegmentData={getSegmentData} setData={setData} />
            </div>
            <div className="col-lg-6">
              <div
                id="pieText"
                className="col-sm-9 hide-text "
                style={{ float: "right" }}
              >
                <div className="click-box">
                  <div className="row">
                    {isVisible2 === false ? (
                      <>
                        <div
                          className="col-sm-12 up-arrow"
                          onClick={toggleVisibility}
                        >
                          <i
                            className="fa fa-angle-up"
                            style={windowWidth <= 1440 ? {
                              color: `${data.boxColor}`,
                              marginTop: "10px",
                              fontSize: "24px",
                              fontWeight: "bold",
                              cursor: "pointer",
                            } : {
                              color: `${data.boxColor}`,
                              marginTop: "10px",
                              fontSize: "30px",
                              fontWeight: "bold",
                              cursor: "pointer",
                            }}
                          ></i>
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          className="col-sm-12 up-arrow"
                          onClick={toggleVisibility2}
                        >
                          <i
                            className="fa fa-angle-down"
                            style={windowWidth <= 1440 ? {
                              color: `${data.boxColor}`,
                              marginTop: "10px",
                              fontSize: "24px",
                              fontWeight: "bold",
                              cursor: "pointer",
                            } : {
                              color: `${data.boxColor}`,
                              marginTop: "10px",
                              fontSize: "30px",
                              fontWeight: "bold",
                              cursor: "pointer",
                            }}
                          ></i>
                        </div>
                      </>
                    )}
                  </div>
                  {isVisible2 === true ? (
                    <div style={{ userSelect: "none" }}>
                      <div className="row text-center">
                        <div className="col-sm-6">
                          <label
                            id="segmentTitle"
                            className="heading-1 highlightable"
                            style={windowWidth <= 1440 ? {
                              marginTop: "-11px",
                              color: `${data.boxColor}`
                            } : {
                              marginTop: "-11px",
                              color: `${data.boxColor}`
                            }}
                          >
                            {wheelerFormData.Program}
                          </label>
                        </div>

                        <div className="col-sm-6">
                          <h4 className="heading-1 highlightable" style={{ color: `${data.boxColor}` }}>{translations["SectorStatistics"][language]}</h4>
                        </div>
                        <div>
                          <div className="hr"></div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-10 ">
                          <h1 className="heading-1 highlightable" style={{ color: `${data.boxColor}` }} id="">
                            {translations["Crops"][language]}
                          </h1>
                          <p id="segmentText" style={{ color: `${data.boxColor}` }} className="phra-2 highlightable">
                            {/* Approx US$1.6 Billion (2019-2020) */}
                            {translations["Dollor"][language]}
                          </p>
                        </div>
                        <div>
                          <div className="hr2"></div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="row">
                          <div className="col-sm-6">
                            <h1 id="box-title1" style={{ color: `${data.boxColor}` }} className="heading-1 highlightable">
                              {/* 4 Million */}
                              {/* {wheelerFormData.wheat} */}
                              4{translations["Million"][language]}
                            </h1>
                            <p id="box-subtitle1" style={{ color: `${data.boxColor}` }} className="phra-2 highlightable">
                              {/* tons of wheat */}
                              {translations["Wheat"][language]}
                            </p>
                          </div>
                          <div className="col-sm-6">
                            <h1 id="box-title2" style={{ color: `${data.boxColor}` }} className="heading-1 highlightable">
                              {/* 1.9 Million */}
                              {/* {wheelerFormData.Rice} */}
                              1.9{translations["Million"][language]}
                            </h1>
                            <p id="box-subtitle2" style={{ color: `${data.boxColor}` }} className="phra-2 highlightable">
                              {/* tons of rice */}
                              {translations["Rice"][language]}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6">
                            <h1 id="box-title3" style={{ color: `${data.boxColor}` }} className="heading-1 highlightable">
                              {/* 4.2 Million */}
                              {/* {wheelerFormData.sugarcane} */}
                              4.2{translations["Million"][language]}

                            </h1>
                            <p id="box-subtitle3" style={{ color: `${data.boxColor}` }} className="phra-2 highlightable">
                              {/* tons of sugarcane */}
                              {translations["Sugarcane"][language]}
                            </p>
                          </div>
                          <div className="col-sm-6">
                            <h1 id="box-title4" style={{ color: `${data.boxColor}` }} className="heading-1 highlightable">
                              {/* 2.3 Million */}
                              {/* {wheelerFormData.cotton} */}
                              2.3{translations["Million"][language]}

                            </h1>
                            <p id="box-subtitle4" style={{ color: `${data.boxColor}` }} className="phra-2 highlightable">
                              {/* bales of cotton */}
                              {translations["Cotton"][language]}
                            </p>
                          </div>
                        </div>

                        <p className="highlightable" id="segmentText"></p>
                        <div className="row">
                          <div className="col-12 mb-3">
                            <a href="comingsoon.html">
                              <button
                                type="button"
                                className="feedback"
                                style={{ width: "100%", background: `${data.boxColor}` }}
                              >
                                <span>{translations["B1"][language]}</span>
                              </button>
                            </a>
                            <br />
                          </div>
                          <div className="col-12 mb-2">
                            <a href="comingsoon.html">
                              <button
                                type="button"
                                className="feedback"
                                style={{ width: "100%", background: `${data.boxColor}` }}
                              >
                                <span>{translations["B2"][language]}</span>
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
          </div>
        </div>
      </div>
    </>
  );
}
export default Wheeler;
