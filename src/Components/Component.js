import React, { useState, useRef, useEffect } from "react";
import GenericHeader from "./genericHeader";
import "../Css/resource.css";
import Footer from "./footer";
import MobileHeaderGeneric from "./MobileHeaderGeneric";



export default function Component() {
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
      {windowWidth <= 500 ? <MobileHeaderGeneric /> : <GenericHeader />}
      <div
        className="row"
        style={windowWidth < 500 ?
          {
            height: "760px",
            width: "100%",
            background: "#F5F5F5",
            display: "flex",
            justifyContent: "center",
          } :
          {
            height: "500px",
            width: "100%",
            background: "#F5F5F5",
            paddingTop: "155px",
            display: "flex",
            justifyContent: "center",
          }}

      >
        <div
          className="col-lg-8"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1
            className={"mainHeading highlightable"}
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center"
            }}
          >
            Streamlining and Integrating Business Regulations for City Competitiveness
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#595959",
              fontWeight: "550",
              lineHeight: "28px",
            }}
            className="highlightable highlightable"
          >
            In today's rapidly evolving global marketplace, cities are constantly seeking to enhance their competitiveness and attract investments. One key aspect that significantly impacts a city's business environment is the streamlining and integration of business regulations. By simplifying and harmonizing Regulatory frameworks, cities can create a more favorable and conducive ecosystem for businesses to thrive. This strategic approach reduces bureaucratic hurdles, improves transparency, and fosters innovation. Embracing a comprehensive strategy to streamline and integrate business regulations not only attracts local and foreign investments but also stimulates economic growth, job creation, and overall prosperity for the city and its residents.
          </p>
        </div>
      </div>


      <div className="footerTop">
        <Footer />
      </div>
    </>
  );
}
