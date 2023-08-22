import React, { useEffect, useState } from "react";
import '../Css/header.css'
import { translations } from "../Transalation/Transalation";
import { useSelector } from "react-redux";
function StatisticsBar(props) {
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
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);


  useEffect(() => {
    counter(0, 47);
    counter1(0, 35);
    counter2(0, 4);

  }, []);
  const counter = (minimum, maximum) => {
    let timeoutId;
    for (let i = minimum; i <= maximum; i++) {
      timeoutId = setTimeout(() => {
        setCount(i);
        if (i === maximum) {
          clearTimeout(timeoutId); // Stop further iterations when maximum is reached
        }
      }, 100 * (i - minimum));
    }
  };


  const counter1 = (minimum, maximum) => {
    let timeoutId;
    for (let i = minimum; i <= maximum; i++) {
      timeoutId = setTimeout(() => {
        setCount1(i);
        if (i === maximum) {
          clearTimeout(timeoutId); // Stop further iterations when maximum is reached
        }
      }, 100 * (i - minimum));
    }
  };



  const counter2 = (minimum, maximum) => {
    let timeoutId;
    for (let i = minimum; i <= maximum; i++) {
      timeoutId = setTimeout(() => {
        setCount2(i);
        if (i === maximum) {
          clearTimeout(timeoutId); // Stop further iterations when maximum is reached
        }
      }, 100 * (i - minimum));
    }
  };

  return (
    <>
      <div className=" bg-white" >
        <div className="body-box mt-3" style={{ height: "150px" }}>
          <div className="row ">
            <div className="col-12 mb-3">
              <h1 className="mainHeading"
                style={
                  windowWidth < 500
                    ? {
                    }
                    : {
                      display: "flex",
                      justifyContent: "center"
                    }
                }
              >{translations["statistics"][language]}</h1>
            </div>
          </div>
          <div className="row mb-5 user" style={{ backgroundColor: "#ffffff", marginTop: "-22px" }}>
            <div
              className={
                windowWidth < 500
                  ?
                  "px-0"
                  :
                  "col-lg-3"
              }
              style={windowWidth < 500 ? { width: "34%" } : {}}
            >
              <h2 className="heading2">{count}{translations["Million"][language]} +</h2>
              <p className="paragraphGeneric">{translations["sindhpeople"][language]}</p>
            </div>
            <div className={
              windowWidth < 500
                ?
                "px-0"
                :
                "col-lg-3"
            }
              style={windowWidth < 500 ? { width: "34%" } : {}}>
              <h2 className="heading2">${count1} {translations["Billion"][language]} </h2>
              <p className="paragraphGeneric">{translations["GDP"][language]}</p>
            </div>
            <div className={
              windowWidth < 500
                ?
                "px-0 mt-4"
                :
                "col-lg-3"
            }
              style={windowWidth < 500 ? { width: "32%" } : {}}
            >
              <h2 className="heading2">{count2} {translations["Million"][language]}</h2>
              <p className="paragraphGeneric">{translations["Services"][language]}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default StatisticsBar;
