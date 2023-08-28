import React, { useEffect, useState } from "react";
import GenericHeader from "./genericHeader";
import Footer from "./footer";
import { Link, useLocation } from "react-router-dom";
import "../Css/investnow.css";
import "../Css/textField.css";
import agriAndFood from "../assets/agriAndFood.png";
import MobileHeaderGeneric from "./MobileHeaderGeneric";
import TextField from "@mui/material/TextField";
import sindhAssembly from "../assets/sindhAssemblywomen.png";
import buildingBridge from "../assets/buildingBridge.png";
import energybg from "../assets/energybg.png";

function Energy(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const loc = useLocation();
  useEffect(() => {
    let lm  = document.getElementById(loc.hash.slice(1));
    
    if (lm) {
      lm.scrollIntoView({ behavior: 'smooth' });
    }
    else
    {
      window.scrollTo({top:0, left:0, behavior:'smooth'})
      }
  }, [loc])
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
 
  const [isVisible, setIsVisible] = useState(false);
  const [parentData, setParentData] = useState();
  const [showFullText, setShowFullText] = useState(false);
  const handleLearnMoreClick = () => {
    setShowFullText(!showFullText);
    setShowFullText2(false);
  };
  const [showFullText2, setShowFullText2] = useState(false);
  const handleLearnMoreClick2 = () => {
    setShowFullText2(!showFullText2);
    setShowFullText(false);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);
  let value = ">";
  const location = useLocation();
  useEffect(() => {
    debugger;
    const data = location.state;
    setParentData(data);
  }, [location]);
  const imageList = [
    "Abundant Agricultural Resources: Sindh boasts rich and fertile lands, a favorable climate, and ample water resources, making it ideal for agricultural production. The region is known for growing a wide variety of crops, including wheat, rice, cotton, sugarcane, fruits, and vegetables, offering a diverse range of investment opportunities.",
    "Value Addition Through Food Processing: Sindh presents significant opportunities for value addition through food processing. By leveraging modern processing techniques, packaging, and quality control measures, businesses can enhance the value and shelf life of agricultural produce, catering to both domestic and international markets.",
    "Access to Growing Consumer Markets: With a large and growing population, both within Sindh and in neighboring regions, the agriculture and food processing sector in Sindh has access to a vast consumer market. There is a growing demand for high-quality and processed agricultural products, providing a lucrative avenue for investment and expansion.",
    "Technological Advancements and Modern Farming Practices: Sindh has embraced technological advancements and modern farming practices to enhance productivity, efficiency, and sustainability in the agriculture sector. This includes the adoption of precision agriculture techniques, irrigation management systems, and the integration of smart farming technologies, offering investors the opportunity to leverage cutting-edge practices.",
    "Government Support and Incentives: The Sindh government has introduced various initiatives, schemes, and incentives to support and promote the agriculture and food processing sector. These include subsidies for modern machinery, financial assistance for infrastructure development, access to credit facilities, and specialized training programs, creating a conducive environment for business growth.",
    "Export Potential: Sindh's agriculture and food processing sector has significant export potential. With the ability to meet international quality standards, businesses can tap into global markets and benefit from increasing demand for high-quality agricultural products and processed food items.",
    "Sustainable Practices and Organic Farming: There is a growing trend towards sustainable agriculture and organic farming practices. Sindh provides ample opportunities for businesses to capitalize on the increasing consumer preference for organic and sustainable food products, positioning themselves as leaders in the industry.",
    "Collaboration and Research Opportunities: Sindh offers collaborative opportunities between the government, industry stakeholders, and research institutions. By fostering partnerships and supporting research and development initiatives, the sector benefits from innovation, knowledge exchange, and the development of new technologies.",
  ];
  const imageList2 = [
    "Abundant Agricultural Resources: Sindh boasts rich and fertile lands, a favorable climate, and ample water resources, making it ideal for agricultural production. The region is known for growing a wide variety of crops, including wheat, rice, cotton, sugarcane, fruits, and vegetables, offering a diverse range of investment opportunities.",
    "Value Addition Through Food Processing: Sindh presents significant opportunities for value addition through food processing. By leveraging modern processing techniques, packaging, and quality control measures, businesses can enhance the value and shelf life of agricultural produce, catering to both domestic and international markets.",
    "Access to Growing Consumer Markets: With a large and growing population, both within Sindh and in neighboring regions, the agriculture and food processing sector in Sindh has access to a vast consumer market. There is a growing demand for high-quality and processed agricultural products, providing a lucrative avenue for investment and expansion.",
    "Technological Advancements and Modern Farming Practices: Sindh has embraced technological advancements and modern farming practices to enhance productivity, efficiency, and sustainability in the agriculture sector. This includes the adoption of precision agriculture techniques, irrigation management systems, and the integration of smart farming technologies, offering investors the opportunity to leverage cutting-edge practices.",
    "Government Support and Incentives: The Sindh government has introduced various initiatives, schemes, and incentives to support and promote the agriculture and food processing sector. These include subsidies for modern machinery, financial assistance for infrastructure development, access to credit facilities, and specialized training programs, creating a conducive environment for business growth.",
    "Export Potential: Sindh's agriculture and food processing sector has significant export potential. With the ability to meet international quality standards, businesses can tap into global markets and benefit from increasing demand for high-quality agricultural products and processed food items.",
    "Sustainable Practices and Organic Farming: There is a growing trend towards sustainable agriculture and organic farming practices. Sindh provides ample opportunities for businesses to capitalize on the increasing consumer preference for organic and sustainable food products, positioning themselves as leaders in the industry.",
    "Collaboration and Research Opportunities: Sindh offers collaborative opportunities between the government, industry stakeholders, and research institutions. By fostering partnerships and supporting research and development initiatives, the sector benefits from innovation, knowledge exchange, and the development of new technologies.",
  ];
  return (
    <>
      {window.innerWidth <= 500 ? <MobileHeaderGeneric /> : <GenericHeader />}
      {window.innerWidth <= 500 ? (
        <div></div>
      ) : (
        <div style={{ height: "150px" }}></div>
      )}

      <div
        style={{ background: `url(${buildingBridge})` }}
        className="SiteMain2"
      >
        <h1
          className={`slide-in-left Investnow-h1 ${
            isVisible ? "" : "slide-out-left"
          }`}
        >
          Energy
        </h1>
      </div>
      <div className="row breadCrumb">
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%",  flexDirection:(window.innerWidth>= 280) && (window.innerWidth <=320)? "column": "row"   }}
        >
          <Link
            to={"/home"}
            style={{
              color: "#720D1D",
              fontSize: (window.innerWidth>= 280) && (window.innerWidth <=320)? "0px": "30px",
              textDecoration: "none",
            }}
          >
            <h5
              style={{ display: "contents", color: "black", fontSize: window.innerWidth <= 500? "20px": "30px" }}
            >
              Home {value}
            </h5>
          </Link>
          <Link
            to={"/Opportunity"}
            style={{
              color: "#720D1D",
              fontSize: (window.innerWidth>= 280) && (window.innerWidth <=320)? "0px": "30px",
              textDecoration: "none",
            }}
          >
            <h4
              style={{ display: "contents", color: "black", fontSize:window.innerWidth <= 500? "20px": "30px",}}
            >
              Opportunities {value}
            </h4>
          </Link>
          {/* <Link
            to={"/home"}
            style={{
              color: "#720D1D",
              fontSize: "30px",
              textDecoration: "none",
            }}
          > */}
          <div style={ {paddingTop:(window.innerWidth >= 280 && window.innerWidth <= 320)?"4px":
              (window.innerWidth <= 500)? "19px":
            "9px" }}>
            <h4
              style={{
                display: "contents",
                cursor: "pointer",
                color: "#720D1D",
                fontSize: window.innerWidth <= 500? "20px": "30px",
              }}
            >
              Energy
            </h4>
          </div>
          {/* </Link> */}
        </div>
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
        <h1 className="mainHeading">Agriculture And Food Processing</h1>
        <div
          className="col-lg-10"
          style={{
            display: "flex",
            justifyContent: "left",
            textAlign: "left",
          }}
        >
          <p className="InvestnowParagraphh">
            As a province blessed with fertile lands, a favorable climate, and a
            deep-rooted agricultural heritage, Sindh stands as a thriving hub
            for agricultural production and food processing. From bountiful
            harvests of crops, fruits, and vegetables to a robust livestock
            sector, Sindh offers a diverse range of agricultural products. With
            a focus on innovation, sustainability, and value addition, the
            agriculture and food processing industry in Sindh presents an
            enticing landscape for investment and entrepreneurial endeavors.
            Join us on this journey as we explore the vibrant tapestry of
            Sindh's agricultural abundance and discover the untapped
            opportunities that lie within.
          </p>
        </div>
      </div>
      <div className="row my-5" style={{ justifyContent: "center" }}>
        <div
          className="col-lg-9 descriptionImage"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${sindhAssembly})`,
          }}
        >
          <label className="agriAndFoodHeading">
            Opportunities in the Agriculture & Food Processing Sector
          </label>
        </div>
      </div>
      <div className="dotsImage"></div>
      <div
        className="row"
        style={{ justifyContent: "center", marginTop: "-150px" }}
      >
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <ul
            className="circle-list f-size"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {imageList
              ?.slice(0, showFullText ? imageList.length : 2)
              .map((item, index) => {
                const splitIndex = item.indexOf(":");
                const beforeText = item.slice(0, splitIndex + 1);
                const afterText = item.slice(splitIndex + 1);

                return (
                  <li className="p-0" key={index}>
                    <span className="before-text">{beforeText}</span>
                    {afterText}
                  </li>
                );
              })}
          </ul>
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
            onClick={handleLearnMoreClick}
          >
            <span style={{ width: "179px", height: "33px" }}>
              {showFullText ? "Read Less" : "Read More"}
            </span>
          </button>
        </div>
      </div>
      <div className="row my-5" style={{ justifyContent: "center" }}>
        <div
          className="col-lg-9 descriptionImage"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${sindhAssembly})`,
          }}
        >
          <label className="agriAndFoodHeading">
            Government Initiatives and Support
          </label>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <div className="dotsPoultry"></div>
      </div>
      <div
        className="row"
        style={{ justifyContent: "center", marginTop: "-150px" }}
      >
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <label className="f-size" style={{ marginBottom: "25px" }}>
            The Sindh government is committed to fostering a thriving
            agriculture and food processing sector by implementing proactive
            measures and offering comprehensive support to businesses.
            Recognizing the pivotal role of this sector in the province's
            economic growth, the government has introduced various initiatives
            to facilitate investment, promote innovation, and ensure
            sustainability.
          </label>
          <ul
            className="circle-list f-size"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {imageList2
              ?.slice(0, showFullText2 ? imageList2.length : 2)
              .map((item, index) => {
                const splitIndex = item.indexOf(":");
                const beforeText = item.slice(0, splitIndex + 1);
                const afterText = item.slice(splitIndex + 1);

                return (
                  <li className="p-0" key={index}>
                    <span className="before-text">{beforeText}</span>
                    {afterText}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="row mt-5 mb-5">
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
            onClick={handleLearnMoreClick2}
          >
            <span id="expertform"   style={{ width: "179px", height: "33px" }}>
              {showFullText2 ? "Read Less" : "Read More"}
            </span>
          </button>
        </div>
      </div>
      <div
        className="row justify-content-center divheight "
        style={{
          background: "#F7F7F7",
          height: "710px",
          alignItems: "baseline",
        }}
      >
        <label
          className="mainHeading"
          style={{
            display: "flex",
            justifyContent: "center",
        textAlign:"center",
            paddingTop: "50px",
            marginBottom: "75px",
          }}
        >
          {" "}
          Contact Our Energy Expert
        </label>
        <div
          className="col-lg-12 sectorMUI"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${energybg})`,backgroundSize: "cover",
            backgroundPosition: window.innerWidth <= 500 ? "center" : " " , 
            height: window.innerWidth <= 500 ? "760px" :
            window.innerWidth === 540? 700: 
            window.innerWidth >= 768 && window.innerWidth <= 912? 
            "700px":"600px", 
            backgroundRepeat: "no-repeat",
            marginTop: "-20px",
            padding: "60px 60px 0px 60px",
          }}
        >
          <div className="row sectornestedscreens"  style={{ marginTop:window.innerWidth >= 1024? "48px ":  "-16px" }}>
            <div className="col-lg-4">
              {/* <div class="textField"> */}
                <TextField
                  id="outlined-controlled"
                  style={{ width: "100%" }}
                  className="feedBackTextField"
                  label="Name"
                  size="small"
                  InputProps={{
                    style: { borderRadius: "30px", border: "none" }, // Remove the border
                  }}
                  placeholder="Enter your name"
                />
              {/* </div> */}
            </div>
            <div className="col-lg-4">
              {/* <div class="textField"> */}
                <TextField
                  id="outlined-controlled"
                  style={{ width: "100%" }}
                  className="feedBackTextField"
                  InputProps={{
                    style: { borderRadius: "30px", border: "none" }, // Remove the border
                  }}
                  label="Company Name"
                  size="small"
                  placeholder="Enter your company name"
                />
              {/* </div> */}
            </div>
            <div className="col-lg-4">
              <TextField
                id="outlined-controlled"
                style={{ width: "100%" }}
                className="feedBackTextField"
                label="Job Title"
                InputProps={{
                  style: { borderRadius: "30px", border: "none" }, // Remove the border
                }}
                size="small"
                placeholder="Enter your job title"
              />
            </div>
          </div>
          <div className="row mt-4 sectornestedscreens">
            <div className="col-lg-4">
              {/* <div class="textField"> */}
                <TextField
                className="feedBackTextField"
                  id="outlined-controlled"
                  style={{ width: "100%" }}
                  size="small"
                  label="Email"
                  InputProps={{
                    style: { borderRadius: "30px", border: "none" }, // Remove the border
                  }}
                  placeholder="Enter your Email"
                />
              {/* </div> */}
            </div>
            <div className="col-lg-4">
              {/* <div class="textField"> */}
                <TextField
                className="feedBackTextField"
                  id="outlined-controlled"
                  style={{ width: "100%" }}
                  size="small"
                  label="Phone"
                  InputProps={{
                    style: { borderRadius: "30px", border: "none" }, // Remove the border
                  }}
                  placeholder="92123567901"
                />
              {/* </div> */}
            </div>
            <div className="col-lg-4">
              {/* <div class="textField"> */}
                <TextField
                className="feedBackTextField"
                  id="outlined-controlled"
                  style={{ width: "100%" }}
                  size="small"
                  InputProps={{
                    style: { borderRadius: "30px", border: "none" }, // Remove the border
                  }}
                  label="Subject"
                  placeholder="Write your feedback subject"
                />
              {/* </div> */}
            </div>
          </div>
          <div className="row  sectornestedscreens"style={{marginTop:"0.3rem"}} >
            <div className="col-lg-12 mt-4">
              {/* <div class="textField"> */}
                <TextField
                  id="outlined-controlled"
                  size="small"
                 className="feedBackTextField"
                  style={{
                    width: "100%",
                    borderRadius: "38px",
                    marginLeft:"0px",
                    marginTop:"-4px"
                  }}
                  label="Message"
                  multiline
                  rows={4}
                  InputProps={{
                    style: { borderRadius: "30px", border: "none" }, // Remove the border
                  }}
                  placeholder="Write your feedback subject"
                />
              </div>
            {/* </div> */}
          </div>
          <div className="row">
            <div className="col-lg-12 mt-4 tocentersubmitbutton">
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
export default Energy;
