import React, { useEffect, useState } from "react";
import GenericHeader from "./genericHeader";
import Footer from "./footer";
import { Link } from "react-router-dom";
import "../Css/investnow.css";
import whySindh from "../assets/whysindhMain.png";
import GateWayImage from "../assets/GROWTH.png";
import EconomicPowerHouse from "../assets/EconomicPowerHouse.png";
import buildingBridge from "../assets/buildingBridge.png";
import diverseHorizon from "../assets/diverseHorizon.png";
import MobileHeaderGeneric from "./MobileHeaderGeneric";
function WhySindhMain() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    // Restore scroll restoration to its default behavior
    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  let value = ">";
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

      <div style={{ background: `url(${whySindh})` }} className="siteHeader">
        <h1 data-aos="fade-up" className="Investnow-h1">
          Why Sindh
        </h1>
      </div>
      <div className="row breadCrumb">
        <Link
          to={"/home"}
          style={{ color: "#720D1D", fontSize: "30px", textDecoration: "none" }}
        >
          <div>
            <h5
              style={{ display: "contents", color: "black", fontSize: "30px" }}
            >
              Home {value}
            </h5>
            Why Sindh
          </div>
        </Link>
      </div>
      <div
        className="row"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "35px",
        }}
      >
        <h1 data-aos="fade-up"
          className={
            windowWidth < 500
              ? "mobilemainHeading"
              : "mainHeading"
          }
        >
          Discover the Advantages of Sindh
        </h1>
        <div
          className="col-lg-10"
          style={{
            display: "flex",
            justifyContent: "left",
            textAlign: "left",
          }}
        >
          <p data-aos="fade-up"
            className={
              windowWidth < 500
                ? "mobilePara"
                :  "InvestnowParagraphh" 
            }
          >
            Uncover the remarkable advantages that Sindh, Pakistan's vibrant
            province, holds for investors and businesses alike. Sindh boasts a
            strategic location, serving as a key trade route between East and
            West, providing access to a vast consumer market. Its thriving
            industries, including textiles, manufacturing, agriculture, and
            services, offer ample investment opportunities. With a skilled
            workforce, supportive government policies, and a growing
            infrastructure, Sindh provides a conducive business environment.
            Explore this section to learn more about the favorable tax
            incentives, abundant resources, and cultural richness that make
            Sindh an enticing destination for those seeking growth,
            profitability, and a strong competitive edge.
          </p>
        </div>
      </div>
      <div className="row my-5" style={{ justifyContent: "center" }}>
        <div data-aos="fade-down-right"
             className={
              windowWidth < 500
                ? "descriptionImage"
                : "col-lg-9 descriptionImage"}
          style={{ background: `url(${GateWayImage})` }}
        >
          <label className={"agriAndFoodHeading"}
            data-aos="fade-up"
          >
            Gateway to Growth
          </label>
        </div>
      </div>
      <div className="dotsImage"></div>
      <div
        className="row"
        style={{ justifyContent: "center", marginTop: "-230px" }}
      >
        <div className="col-lg-5">
          <label
            className={"f-size"}
            data-aos="fade-up"
          >
            Unlocking Opportunities through Sindh's Strategic Location, Sindh
            has a strategic geographical location, serving as a major gateway
            between Central Asia, the Middle East, and South Asia. It provides
            access to important trade routes, including the Arabian Sea, making
            it an ideal location for businesses looking to establish connections
            and expand their market reach.
          </label>
        </div>
      </div>
      <div className="row mt-5">
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <a href="comingsoon.html">
            <button type="button" className="InvestInSindhButton">
              <span style={{ width: "179px", height: "33px" }}>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  className={""}
                  to={"/gateway"}
                >
                  <span style={{ textDecoration: "none", color: "white" }}>
                    Learn More{" "}
                  </span>
                </Link>
              </span>
            </button>
          </a>
        </div>
      </div>
      <div className="row my-5" style={{ justifyContent: "center" }}>
        <div data-aos="fade-down-right"
             className={
              windowWidth < 500
                ? "descriptionImage"
                : "col-lg-9 descriptionImage"}
          style={{ background: `url(${EconomicPowerHouse})` }}
        >
          <label
            className={"agriAndFoodHeading"}
            data-aos="fade-up"
          >
            Economic Powerhouse
          </label>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <div className="dotsPoultry"></div>
      </div>
      <div
        className="row"
        style={{ justifyContent: "center", marginTop: "-230px" }}
      >
        <div className="col-lg-5">
          <label
          className={"f-size"}
          data-aos="fade-up"
          >
            Sindh's Thriving Sectors Drive Investment Potential, Sindh is one of
            the most economically significant provinces in Pakistan. It boasts a
            diverse economy, with thriving sectors such as agriculture,
            manufacturing, services, and finance. The province's economic growth
            is driven by its vibrant cities like Karachi, which is the financial
            and commercial hub of Pakistan.
          </label>
        </div>
      </div>
      <div className="row mt-5">
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <a href="comingsoon.html">
            <button type="button" className="InvestInSindhButton">
              <span style={{ width: "179px", height: "33px" }}>
                {" "}
                <Link
                  style={{ textDecoration: "none" }}
                  className={""}
                  to={"/economicP"}
                >
                  <span style={{ textDecoration: "none", color: "white" }}>
                    {" "}
                    Learn More{" "}
                  </span>
                </Link>
              </span>
            </button>
          </a>
        </div>
      </div>
      <div className="row my-5" style={{ justifyContent: "center" }}>
        <div
         
          className={
            windowWidth < 500
              ? "descriptionImage"
              : "col-lg-9 descriptionImage"}
              data-aos="fade-down-right"
          style={{ background: `url(${buildingBridge})` }}
        >
          <label 
          className={"agriAndFoodHeading"}
          data-aos="fade-up"
          >
            Building Bridges to Success
          </label>
        </div>
      </div>
      <div className="dotsImage"></div>
      <div
        className="row"
        style={{ justifyContent: "center", marginTop: "-230px" }}
      >
        <div className="col-lg-5">
          <label
           className={"f-size "}
           data-aos="fade-up">
            Sindh's Infrastructure Development Attracts Investors, Sindh has
            been focusing on improving its infrastructure to facilitate business
            activities and attract investments. There have been significant
            investments in transportation, including road networks, ports, and
            airports, which enhance connectivity within the province and with
            the rest of the country.
          </label>
        </div>
      </div>
      <div className="row mt-5">
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <a href="comingsoon.html">
            <button type="button" className="InvestInSindhButton">
            <span style={{ width: "179px", height: "33px" }}>
                <Link
                  style={{ textDecoration: "none" }}
                  className={""}
                  to={"/buildingbridges"}
                >
                  <span style={{ textDecoration: "none", color: "white" }}>
                    Learn More{" "}
                  </span>
                </Link>
              </span>
            </button>
          </a>
        </div>
      </div>
      <div className="row my-5" style={{ justifyContent: "center" }}>
        <div 
           className={
            windowWidth < 500
              ? "descriptionImage"
              : "col-lg-9 descriptionImage"}
              data-aos="fade-down-right"
          style={{ background: `url(${diverseHorizon})` }}
        >
          <label
          className="agriAndFoodHeading" data-aos="fade-up"
          >
            Diverse Horizons
          </label>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <div className="dotsPoultry"></div>
      </div>
      <div
        className="row"
        style={{ justifyContent: "center", marginTop: "-230px" }}
      >
        <div className="col-lg-5">
          <label
          className="f-size" data-aos="fade-up"
          >
            Exploring Lucrative Investment Opportunities in Sindh's Sectors,
            Sindh offers a range of investment opportunities across various
            sectors. For instance, the agriculture sector presents opportunities
            in crop cultivation, livestock farming, and fisheries. The
            manufacturing sector is expanding, with potential investments in
            textiles, garments, chemicals, and engineering goods. Additionally,
            the province provides a favorable environment for investment in
            sectors such as information technology, renewable energy, and real
            estate.
          </label>
        </div>
      </div>
      <div className="row mt-5" style={{ marginBottom: "65px" }}>
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <a href="comingsoon.html">
            <button type="button" className="InvestInSindhButton">
            <Link
                style={{ textDecoration: "none" }}
                className={""}
                to={"/diversehorizon"}
              >
                <span style={{ textDecoration: "none", color: "white" }}>
                  {" "}
                  Learn More{" "}
                </span>
              </Link>
            </button>
          </a>
        </div>
      </div>
      <div className="seizeOpportunity">
        <h1 data-aos="fade-up"
          className={
            windowWidth < 500
              ? "mobilemainHeading"
              : "mainHeading"
          }
        >
          Seize the Opportunity
        </h1>
        <div
          className="mt-2"
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <a href="comingsoon.html">
            <button type="button" className="InvestInSindhButton">
              <span style={{ width: "179px", height: "33px" }}>
                Invest in Sindh
              </span>
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default WhySindhMain;
