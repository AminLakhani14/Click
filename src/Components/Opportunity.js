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
import { useSelector } from "react-redux";
import { translations } from "../Transalation/Transalation";
import "aos/dist/aos.css";
import AOS from "aos";
function Opportunity() {
  let value = ">";
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const {language} = useSelector((state)=>state.language)
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
    ;
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
        <h1 data-aos="fade-up" className="Investnow-h1 highlightable">
        {translations["Opportunities"][language]}
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
          className="mainHeading highlightable"
          data-aos="fade-up"
        >
         {translations["opportunityhead1"][language]}
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
            className="InvestnowParagraphh highlightable"
            data-aos="fade-up"

            // className={`slide-in-left InvestnowParagraphh  ${
            //   isVisibleUnleash ? "" : "slide-out-left"
            // }`}
          >
           {translations["opportunitypara1"][language]}
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
          <label className="agriAndFoodHeading highlightable" data-aos="fade-up">
            {translations['AgricultureandFoodP'][language]}
          </label>
        </div>
      </div>
      <div className="dotsImage"></div>
      <div
        className="row"
        style={{ justifyContent: "center", marginTop: "-230px" }}
      >
        <div className="col-lg-5">
          <label data-aos="fade-up" className={" f-size highlightable"}>
            {translations['opportunitypara2'][language]}
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
        
        type="button"
        className="InvestInSindhButton"
         onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }}>
          <Link
            to={"/agriculture"}
            
            style={{textDecoration:"none", color:"white"}}
          >
            <span id="Agriculture" style={{ width: "179px", height: "33px" }}>
            {translations['LearnMore'][language]}
            </span>
          </Link>
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
          <label data-aos="fade-up" className={"agriAndFoodHeading highlightable"}>
           {translations['Poultry'][language]}
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
          <label data-aos="fade-up" className={"f-size highlightable"}>
            {translations["opportunitypara3"][language]}
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
                  {translations['LearnMore'][language]}
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
          <label data-aos="fade-up" className={"agriAndFoodHeading highlightable"}>
            {translations['frozenfoodandp'][language]}
          </label>
        </div>
      </div>
      <div className="dotsImage"></div>
      <div
        className="row"
        style={{ justifyContent: "center", marginTop: "-230px" }}
      >
        <div className="col-lg-5">
          <label data-aos="fade-up" className={"f-size highlightable"}>
           {translations['opportunitypara4'][language]}
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
                  {translations['LearnMore'][language]}{" "}
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
          <label data-aos="fade-up" className={"agriAndFoodHeading highlightable"}>
            {translations['LoanandGrant'][language]}
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
          <label data-aos="fade-up" className={"f-size highlightable"}>
          {translations['opportunitypara5'][language]}
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
                 {translations['LearnMore'][language]}{" "}
                </a>
              </Link>
            </span>
          </button>
        </div>
      </div>
      <div className="seizeOpportunity">
        <h1 data-aos="fade-up" className={"mainHeading highlightable"}>
        {translations['SeizeTheOpportunity'][language]}
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
          <button type="button"  className={language === "en"?"InvestInSindhButton":"InvestinSindhbuttonforUrduandSindhi"}>
            <span style={{ width: "179px", height: "33px" }}>
            {translations['InvestSindh'][language]}
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
