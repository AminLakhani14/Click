import React, { useState ,useRef } from "react";
import GenericHeader from "./genericHeader";
import "../Css/resource.css";
import Footer from "./footer";
import DetailModal from "./DetailModal";


export default function Component() {
 

  return (
    <>
      <GenericHeader />
      <div
        className="row"
        style={{
            height: "500px",
          width: "100%",
          background: "#F5F5F5",
          paddingTop: "155px",
          display: "flex",
          justifyContent:"center",
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
          className={"mainHeading"}
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign:"center"
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
          >
          In today's rapidly evolving global marketplace, cities are constantly seeking to enhance their competitiveness and attract investments. One key aspect that significantly impacts a city's business environment is the streamlining and integration of business regulations. By simplifying and harmonizing regulatory frameworks, cities can create a more favorable and conducive ecosystem for businesses to thrive. This strategic approach reduces bureaucratic hurdles, improves transparency, and fosters innovation. Embracing a comprehensive strategy to streamline and integrate business regulations not only attracts local and foreign investments but also stimulates economic growth, job creation, and overall prosperity for the city and its residents.
          </p>
        </div>
      </div>

    
      <Footer />
    </>
  );
}
 