import React, { useEffect, useState } from "react";
import GenericHeader from "./genericHeader";
import Footer from "./footer";
import { Link } from "react-router-dom";
import "../Css/investnow.css";
import KarachiPort from "../assets/KarachiPort.jpg";
import agriAndFood from "../assets/agriAndFood.png";
import Poultry from "../assets/Poultry.png";
import frozenFood from "../assets/frozenFood.png";
import loan from "../assets/loan.png";
import MobileHeaderGeneric from "./MobileHeaderGeneric";
import { useNavigate } from "react-router-dom";
import sindhAssembly from "../assets/sindhAssemblywomen.png";
import "aos/dist/aos.css";
import AOS from "aos";
function Opportunity() {
  let value = ">";
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

  const navigate = useNavigate();

  const OpenGenericOpportunity = (e) => {
    debugger;
    let obj = {
      mainImage: "",
      mainHeading: "",
      mainText: "",
      image1: "",
      image1Heading: "",
      image1List: [],
      image2: "",
      image2Heading: "",
      image2List: [],
      image2Text: "",
    };
    if (e.target.id === "Agriculture") {
      obj.mainImage = agriAndFood;
      obj.mainHeading = "Agriculture And Food Processing";
      obj.mainText =
        "As a province blessed with fertile lands, a favorable climate, and a deep-rooted agricultural heritage, Sindh stands as a thriving hub for agricultural production and food processing. From bountiful harvests of crops, fruits, and vegetables to a robust livestock sector, Sindh offers a diverse range of agricultural products. With a focus on innovation, sustainability, and value addition, the agriculture and food processing industry in Sindh presents an enticing landscape for investment and entrepreneurial endeavors. Join us on this journey as we explore the vibrant tapestry of Sindh's agricultural abundance and discover the untapped opportunities that lie within.";
      obj.image1 = sindhAssembly;
      obj.image1Heading =
        "Opportunities in the Agriculture & Food Processing Sector";
      obj.image1List = [
        "Abundant Agricultural Resources: Sindh boasts rich and fertile lands, a favorable climate, and ample water resources, making it ideal for agricultural production. The region is known for growing a wide variety of crops, including wheat, rice, cotton, sugarcane, fruits, and vegetables, offering a diverse range of investment opportunities.",
        "Value Addition Through Food Processing: Sindh presents significant opportunities for value addition through food processing. By leveraging modern processing techniques, packaging, and quality control measures, businesses can enhance the value and shelf life of agricultural produce, catering to both domestic and international markets.",
        "Access to Growing Consumer Markets: With a large and growing population, both within Sindh and in neighboring regions, the agriculture and food processing sector in Sindh has access to a vast consumer market. There is a growing demand for high-quality and processed agricultural products, providing a lucrative avenue for investment and expansion.",
        "Technological Advancements and Modern Farming Practices: Sindh has embraced technological advancements and modern farming practices to enhance productivity, efficiency, and sustainability in the agriculture sector. This includes the adoption of precision agriculture techniques, irrigation management systems, and the integration of smart farming technologies, offering investors the opportunity to leverage cutting-edge practices.",
        "Government Support and Incentives: The Sindh government has introduced various initiatives, schemes, and incentives to support and promote the agriculture and food processing sector. These include subsidies for modern machinery, financial assistance for infrastructure development, access to credit facilities, and specialized training programs, creating a conducive environment for business growth.",
        "Export Potential: Sindh's agriculture and food processing sector has significant export potential. With the ability to meet international quality standards, businesses can tap into global markets and benefit from increasing demand for high-quality agricultural products and processed food items.",
        "Sustainable Practices and Organic Farming: There is a growing trend towards sustainable agriculture and organic farming practices. Sindh provides ample opportunities for businesses to capitalize on the increasing consumer preference for organic and sustainable food products, positioning themselves as leaders in the industry.",
        "Collaboration and Research Opportunities: Sindh offers collaborative opportunities between the government, industry stakeholders, and research institutions. By fostering partnerships and supporting research and development initiatives, the sector benefits from innovation, knowledge exchange, and the development of new technologies.",
      ];
      obj.image2 = sindhAssembly;
      obj.image2Heading = "Government Initiatives and Support";
      obj.image2List = [
        "Abundant Agricultural Resources: Sindh boasts rich and fertile lands, a favorable climate, and ample water resources, making it ideal for agricultural production. The region is known for growing a wide variety of crops, including wheat, rice, cotton, sugarcane, fruits, and vegetables, offering a diverse range of investment opportunities.",
        "Value Addition Through Food Processing: Sindh presents significant opportunities for value addition through food processing. By leveraging modern processing techniques, packaging, and quality control measures, businesses can enhance the value and shelf life of agricultural produce, catering to both domestic and international markets.",
        "Access to Growing Consumer Markets: With a large and growing population, both within Sindh and in neighboring regions, the agriculture and food processing sector in Sindh has access to a vast consumer market. There is a growing demand for high-quality and processed agricultural products, providing a lucrative avenue for investment and expansion.",
        "Technological Advancements and Modern Farming Practices: Sindh has embraced technological advancements and modern farming practices to enhance productivity, efficiency, and sustainability in the agriculture sector. This includes the adoption of precision agriculture techniques, irrigation management systems, and the integration of smart farming technologies, offering investors the opportunity to leverage cutting-edge practices.",
        "Government Support and Incentives: The Sindh government has introduced various initiatives, schemes, and incentives to support and promote the agriculture and food processing sector. These include subsidies for modern machinery, financial assistance for infrastructure development, access to credit facilities, and specialized training programs, creating a conducive environment for business growth.",
        "Export Potential: Sindh's agriculture and food processing sector has significant export potential. With the ability to meet international quality standards, businesses can tap into global markets and benefit from increasing demand for high-quality agricultural products and processed food items.",
        "Sustainable Practices and Organic Farming: There is a growing trend towards sustainable agriculture and organic farming practices. Sindh provides ample opportunities for businesses to capitalize on the increasing consumer preference for organic and sustainable food products, positioning themselves as leaders in the industry.",
        "Collaboration and Research Opportunities: Sindh offers collaborative opportunities between the government, industry stakeholders, and research institutions. By fostering partnerships and supporting research and development initiatives, the sector benefits from innovation, knowledge exchange, and the development of new technologies.",
      ];
      obj.image2Text =
        "The Sindh government is committed to fostering a thriving agriculture and food processing sector by implementing proactive measures and offering comprehensive support to businesses. Recognizing the pivotal role of this sector in the province's economic growth, the government has introduced various initiatives to facilitate investment, promote innovation, and ensure sustainability.";
    } else if (e.target.id === "Poultry") {
      obj.mainImage = agriAndFood;
      obj.text = "Poultry Values";
      obj.heading = "";
    } else if (e.target.id === "FrozenFood") {
      obj.mainImage = agriAndFood;
      obj.text = "Frozen Food";
      obj.heading = "";
    } else if (e.target.id === "LoanAndGrant") {
      obj.mainImage = agriAndFood;
      obj.text = "Loan And Grant Values";
      obj.heading = "";
    }
    navigate("/Sectors", { state: obj });
  };
  return (
    <>
      {windowWidth <= 500 ? <MobileHeaderGeneric /> : <GenericHeader />}
      {windowWidth <= 500 ? <div></div> : <div></div>}

      <div
        style={{ background: `url(${KarachiPort})` }}
        className={
          windowWidth < 500 ? "MobileOppurSiteMain3" : "SiteMain3"
        }
      >
        <h1 data-aos="fade-up" className="Investnow-h1">
          Opportunities
        </h1>
      </div>
      <div className="row breadCrumb">
        <Link
          to={"/home"}
          style={
            windowWidth < 500
              ? {
                  color: "#720D1D",
                  fontSize: "24px",
                  textDecoration: "none",
                }
              : {
                  color: "#720D1D",
                  fontSize: "30px",
                  textDecoration: "none",
                }
          }
        >
          <div>
            <h5
              style={
                windowWidth < 500
                  ? { display: "contents", color: "black", fontSize: "24px" }
                  : { display: "contents", color: "black", fontSize: "30px" }
              }
            >
              Home {value}
            </h5>
            Opportunities
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
        <h1
          // className={
          //   windowWidth < 500
          //     ?
          //     `newslide-in-left mobilemainHeading  ${
          //       ismobileVisibleUnleash ? "" : "newslide-out-left"
          //     }`
          //     :
          //     `slide-in-left mainHeading  ${
          //       isVisibleUnleash ? "" : "slide-out-left"
          //     }`
          // }
          className="mainHeading"
          data-aos="fade-up"
        >
          Explore Lucrative Opportunities in Sindh
        </h1>
        <div
          className="col-lg-10"
          style={{
            display: "flex",
            justifyContent: "left",
            textAlign: "left",
          }}
        >
          <p
            className="InvestnowParagraphh"
            data-aos="fade-up"

            // className={`slide-in-left InvestnowParagraphh  ${
            //   isVisibleUnleash ? "" : "slide-out-left"
            // }`}
          >
            Explore a myriad of exciting opportunities in Sindh, Pakistan's
            vibrant province. From thriving industries to emerging sectors,
            Sindh offers a fertile ground for investment, innovation, and
            growth, presenting a gateway to unparalleled prospects and a pathway
            to prosperity.
          </p>
        </div>
      </div>
      <div className="row my-5" style={{ justifyContent: "center" }}>
        <div
          data-aos="fade-down-right"
          className="col-lg-9 descriptionImage"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),url(${agriAndFood})`,
          }}
        >
          <label className="agriAndFoodHeading" data-aos="fade-up">
            Agriculture & Food Processing{" "}
          </label>
        </div>
      </div>
      <div className="dotsImage"></div>
      <div
        className="row"
        style={{ justifyContent: "center", marginTop: "-230px" }}
      >
        <div className="col-lg-5">
          <label data-aos="fade-up" className={" f-size"}>
            Harvest Success in Sindh's Bountiful Fields. Dive into the fertile
            agricultural landscape of Sindh and explore the vast potential for
            investment and growth in the agriculture and food processing
            sectors, where abundant resources, favorable climate, and a rich
            farming heritage converge to create a recipe for success.
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
          <button
            onClick={OpenGenericOpportunity}
            type="button"
            className="InvestInSindhButton"
          >
            <span id="Agriculture" style={{ width: "179px", height: "33px" }}>
              Learn More
            </span>
          </button>
        </div>
      </div>
      <div className="row my-5" style={{ justifyContent: "center" }}>
        <div
          data-aos="fade-down-right"
          className={" col-lg-9 descriptionImage"}
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),url(${Poultry})`,
          }}
        >
          <label data-aos="fade-up" className={"agriAndFoodHeading"}>
            Poultry
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
          <label data-aos="fade-up" className={"f-size"}>
            Flock to Profitable Ventures in Sindh's Poultry Industry. Capitalize
            on the booming demand for poultry products in Sindh as we offer you
            a gateway to tap into a thriving industry supported by
            state-of-the-art facilities, advanced farming techniques, and a
            strong market presence. Explore the potential for sustainable growth
            and profitability in the poultry sector and seize the opportunity to
            feather your business's success.
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
          {/* <a href="comingsoon.html"> */}
          <button
            // onClick={OpenGenericOpportunity}
            // onClick={navigate('Poultry')}
            //

            type="button"
            className="InvestInSindhButton"
          >
            <span style={{ width: "179px", height: "33px" }}>
              <Link
                style={{ textDecoration: "none" }}
                className={""}
                to={"/poultry"}
              >
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="src/Components/poultry.js"
                >
                  {" "}
                  Learn More
                </a>
              </Link>
            </span>
          </button>
          {/* </a> */}
        </div>
      </div>
      <div className="row my-5" style={{ justifyContent: "center" }}>
        <div
          data-aos="fade-down-right"
          className={" col-lg-9 descriptionImage"}
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),url(${frozenFood})`,
          }}
        >
          <label data-aos="fade-up" className={"agriAndFoodHeading"}>
            Frozen food & Processing
          </label>
        </div>
      </div>
      <div className="dotsImage"></div>
      <div
        className="row"
        style={{ justifyContent: "center", marginTop: "-230px" }}
      >
        <div className="col-lg-5">
          <label data-aos="fade-up" className={"f-size"}>
            Unleash the Potential of Sindh's Frozen Food Industry. Discover the
            lucrative prospects of frozen food and processing in Sindh, where
            cutting-edge facilities, quality standards, and a growing market
            demand converge to create a recipe for success. Capitalize on this
            opportunity to meet the evolving needs of consumers and carve your
            niche in the thriving frozen food industry.
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
          <button
            // onClick={OpenGenericOpportunity}
            type="button"
            className="InvestInSindhButton"
          >
            <span style={{ width: "179px", height: "33px" }}>
              <Link
                style={{ textDecoration: "none" }}
                className={""}
                to={"/frozenfood"}
              >
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="src/Components/frozenfood.js"
                >
                  Learn More{" "}
                </a>
              </Link>
            </span>
          </button>
        </div>
      </div>
      <div className="row my-5" style={{ justifyContent: "center" }}>
        <div
          data-aos="fade-down-right"
          className={" col-lg-9 descriptionImage"}
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),url(${loan})`,
          }}
        >
          <label data-aos="fade-up" className={"agriAndFoodHeading"}>
            Loan & Grant Facilitation
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
          <label data-aos="fade-up" className={"f-size"}>
            Unlock Financial Support for Your Business Ambitions in Sindh.
            Navigate the financial landscape with ease as we provide
            comprehensive assistance in securing loans and grants, connecting
            you to the right resources and institutions that foster
            entrepreneurship and fuel growth. Take advantage of our facilitation
            services to access the funding you need and propel your business
            forward in Sindh.
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
          <button
            // onClick={OpenGenericOpportunity}
            type="button"
            className="InvestInSindhButton"
          >
            <span style={{ width: "179px", height: "33px" }}>
              <Link
                style={{ textDecoration: "none" }}
                className={""}
                to={"/loan"}
              >
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="src/Components/Loan.js"
                >
                  Learn More{" "}
                </a>
              </Link>
            </span>
          </button>
        </div>
      </div>
      <div className="seizeOpportunity">
        <h1 data-aos="fade-up" className={"mainHeading"}>
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
          {/* <a href="comingsoon.html"> */}
          <button type="button" className="InvestInSindhButton">
            <span style={{ width: "179px", height: "33px" }}>
              Invest in Sindh
            </span>
          </button>
          {/* </a> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Opportunity;
