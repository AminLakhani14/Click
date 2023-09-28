import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import accessibility from "../assets/accessibility.png";
import "../Css/header.css";
import sindh from "../assets/logo-sindh.png";
import pak from "../assets/pak.png";
import urdu from "../assets/urdu.png";
import "../Css/resource.css";
import click from "../assets/click-logo.png";
import cardImage from "../assets/cardresource1.png";
import businesscard1 from "../assets/businesscard1.jpg";
import ListofLegalDocuments from "../assets/ListofLegalDocumentsSBOSS.pdf";
import GenericHeader from "./genericHeader";
import { green } from "@mui/material/colors";
import ss1 from "../assets/ScreenShot/s.s1.png"
import ss2 from "../assets/ScreenShot/s.s2.png"
import ss3 from "../assets/ScreenShot/s.s3.png"
import ss4 from "../assets/ScreenShot/s.s4.png"
import ss5 from "../assets/ScreenShot/s.s5.png"
import ss6 from "../assets/ScreenShot/s.s6.png"
import ss7 from "../assets/ScreenShot/s.s7.png"
import ss8 from "../assets/ScreenShot/s.s8.png"

import pdf1 from "../assets/DownloadDocument/Final_PRMI_Book_2_New.pdf"
import pdf2 from "../assets/DownloadDocument/Final_PRMI_Book_1.pdf"
import pdf3 from "../assets/DownloadDocument/wbgstudy.pdf"
import pdf4 from "../assets/DownloadDocument/RIE-REPORT.pdf"
import pdf5 from "../assets/DownloadDocument/pa-03-availing-of-the-net-metering-facility-impact-of-bois-reforms.pdf"
import pdf6 from "../assets/DownloadDocument/DRAP-Reforms-Evaluation-Final.pdf"
import pdf7 from "../assets/DownloadDocument/Minimum-Consensus-on-Key-Economic-Reforms.pdf"
import pdf8 from "../assets/DownloadDocument/Recommendations-on-National-Program-for-Digital-Transformation.pdf"
export default function Resource() {
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
  let arr=[
    {
      screenShot:ss1,
      titlte:"Principle based Regulatory Framework",
      pdf:pdf1
    },
    {
      screenShot:ss2,
      titlte:"Pakistan Regulatory Guidebook",
      pdf:pdf2
    },
    {
      screenShot:ss3,
      titlte:"From Swimming in Sand to High and Sustainable Growth – WBG",
      pdf:pdf3
    },
    {
      screenShot:ss4,
      titlte:"Reducing Regulatory Burden – RIE Report",
      pdf:pdf4
    },
    {
      screenShot:ss5,
      titlte:"PIDE Analytics",
      pdf:pdf5
    },
    {
      screenShot:ss6,
      titlte:" DRAP – Assessment of Reforms",
      pdf:pdf6
    },
    {
      screenShot:ss7,
      titlte:"Minimum Consensus on Key Economic Reforms",
      pdf:pdf7
    },
    {
      screenShot:ss8,
      titlte:"Recommendations on National Program for Digital Transformations",
      pdf:pdf8
    }
  ]
  return (
    // <>
    //   <Link to={"/team"}></Link>
    //   <GenericHeader />
    //   <div
    //     className="row"
    //     style={{
    //       height: "240px",
    //       width: "100%",
    //       background: "#F5F5F5",
    //       paddingTop: "130px",
    //     }}
    //   >
    //     <div className="col-lg-2"></div>
    //     <div className="col-lg-8">
    //       <h1 className="mainHeading" style={{display:'flex', justifyContent:'center'}}>Download</h1>
    //     </div>
    //     <div className="col-lg-2"></div>
    //   </div>


    //   <div className="row">
    //     {windowWidth <= 1024 ? (
    //       <></>
    //     ) : (
    //       <div
    //         className={windowWidth <= 1440 ? "col-lg-1" : "col-lg-2"}
    //       ></div>
    //     )}
    //     <div
    //       className={
    //         windowWidth <= 1024
    //           ? "col-lg-12"
    //           : windowWidth <= 1440 || windowWidth >= 1140
    //           ? "col-lg-10"
    //           : "col-lg-8"
    //       }
    //     >
    
    //       <div  className="cardMain1">
    //         <div className="cardResource">
    //           <div className="cardInnerLeft">
    //             <img style={{boxShadow: '5px 8px 5px rgba(0, 0, 0, 0.2)'}} src={businesscard1} width="100%" height="250px"></img>
    //           </div>
    //           <div className="cardInnerRight" style={{boxShadow: '5px 8px 5px rgba(0, 0, 0, 0.2)'}}>
    //             <h2 className="cardHeading" >
    //             List of Legal Documents
    //             </h2>
    //             <button type="button" className="resourceButton">
    //               <span>View Documents</span>
    //             </button>
    //           </div>
    //         </div>
    //         <div className="cardResource">
    //           <div className="cardInnerLeft">
    //             <img style={{boxShadow: '5px 8px 5px rgba(0, 0, 0, 0.2)'}} src={cardImage} width="100%" height="250px"></img>
    //           </div>
    //           <div className="cardInnerRight" style={{boxShadow: '5px 8px 5px rgba(0, 0, 0, 0.2)'}}>
    //             <h2 className="cardHeading">Pakistan Regulatory Guidebook</h2>
    //             <button type="button" className="resourceButton">
    //               <span>View Documents</span>
    //             </button>
    //           </div>
    //         </div>
    //         <div className="cardResource">
    //           <div className="cardInnerLeft">
    //             <img style={{boxShadow: '5px 8px 5px rgba(0, 0, 0, 0.2)'}}  src={cardImage} width="100%" height="250px"></img>
    //           </div>
    //           <div className="cardInnerRight" style={{boxShadow: '5px 8px 5px rgba(0, 0, 0, 0.2)'}}>
    //             <h2 className="cardHeading">
    //               From Swimming in Sand to High and Sustainable Growth – WBG
    //             </h2>
    //             <button type="button" className="resourceButton">
    //               <span>View Documents</span>
    //             </button>
    //           </div>{" "}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="row">
    //     {windowWidth <= 1024 ? (
    //       <></>
    //     ) : (
    //       <div
    //         className={windowWidth <= 1440 ? "col-lg-1" : "col-lg-2"}
    //       ></div>
    //     )}
    //     <div
    //       className={
    //         windowWidth <= 1024
    //           ? "col-lg-12"
    //           : windowWidth <= 1440 || windowWidth >= 1140
    //           ? "col-lg-10"
    //           : "col-lg-8"
    //       }
    //     >
    //       <div className="cardMain1">
    //         <div className="cardResource">
    //           <div className="cardInnerLeft">
    //             <img src={businesscard1} width="100%" height="250px"></img>
    //           </div>
    //           <div className="cardInnerRight">
    //             <h2 className="cardHeading">
    //              List of Legal Documents
    //             </h2>
    //             <button type="button" className="resourceButton">
    //               <Link
    //             to="route"
    //             onClick={(event) => { event.preventDefault(); window.open(ListofLegalDocuments); }}>
    //               <span style={{color:'white'}}>View Documents</span> 
    //               </Link>
    //             </button>
    //           </div>
    //         </div>
    //         <div className="cardResource">
    //           <div className="cardInnerLeft">
    //             <img src={cardImage} width="100%" height="250px"></img>
    //           </div>
    //           <div className="cardInnerRight">
    //             <h2 className="cardHeading">Pakistan Regulatory Guidebook</h2>
    //             <button type="button" className="resourceButton">
    //               <span>View Documents</span>
    //             </button>
    //           </div>
    //         </div>
    //         <div className="cardResource">
    //           <div className="cardInnerLeft">
    //             <img src={cardImage} width="100%" height="250px"></img>
    //           </div>
    //           <div className="cardInnerRight">
    //             <h2 className="cardHeading">
    //               From Swimming in Sand to High and Sustainable Growth – WBG
    //             </h2>
    //             <button type="button" className="resourceButton">
    //               <span>View Documents</span>
    //             </button>
    //           </div>{" "}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
      <Link to={"/team"}></Link>
      <GenericHeader />
      <div
        className="row"
        style={{
          height: "240px",
          width: "100%",
          background: "#F5F5F5",
          paddingTop: "130px",
        }}
      >
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <h1 className="mainHeading" style={{display:'flex', justifyContent:'center'}}>Download</h1>
        </div>
        <div className="col-lg-2"></div>
      </div>

      
      <div className="row">
        {windowWidth <= 1024 ? (
          <></>
        ) : (
          <div
            className={windowWidth <= 1440 ? "col-lg-1" : "col-lg-2"}
          ></div>
        )}
        <div
          className={
            windowWidth <= 1024
              ? "col-lg-12"
              : windowWidth <= 1440 || windowWidth >= 1140
              ? "col-lg-10"
              : "col-lg-8"
          }
        >
    
        
        </div>
        
      </div>
      {/* <div className="row">
        {windowWidth <= 1024 ? (
          <></>
        ) : (
          <div
            className={windowWidth <= 1440 ? "col-lg-1" : "col-lg-2"}
          ></div>
        )}
        <div
          className={
            windowWidth <= 1024
              ? "col-lg-12"
              : windowWidth <= 1440 || windowWidth >= 1140
              ? "col-lg-10"
              : "col-lg-8"
          }
        >
          <div className="cardMain1">
            <div className="cardResource">
              <div className="cardInnerLeft">
                <img src={businesscard1} width="100%" height="250px"></img>
              </div>
              <div className="cardInnerRight">
                <h2 className="cardHeading">
                 List of Legal Documents
                </h2>
                <button type="button" className="resourceButton">
                  <Link
                to="route"
                onClick={(event) => { event.preventDefault(); window.open(ListofLegalDocuments); }}>
                  <span style={{color:'white'}}>View Documents</span> 
                  </Link>
                </button>
              </div>
            </div>
            <div className="cardResource">
              <div className="cardInnerLeft">
                <img src={cardImage} width="100%" height="250px"></img>
              </div>
              <div className="cardInnerRight">
                <h2 className="cardHeading">Pakistan Regulatory Guidebook</h2>
                <button type="button" className="resourceButton">
                  <span>View Documents</span>
                </button>
              </div>
            </div>
            <div className="cardResource">
              <div className="cardInnerLeft">
                <img src={cardImage} width="100%" height="250px"></img>
              </div>
              <div className="cardInnerRight">
                <h2 className="cardHeading">
                  From Swimming in Sand to High and Sustainable Growth – WBG
                </h2>
                <button type="button" className="resourceButton">
                  <span>View Documents</span>
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
      </div> */}
       <div className="d-flex" style={{display:'flex',flexWrap:"wrap",width:"100%",backgroundColor:"y",justifyContent:"center",paddingTop:50}}>
       {
          arr.map((item)=>{
            return  <div  className="cardMain1 ">
            <div className="cardResource">
              <div className="cardInnerLeft">
                <img style={{boxShadow: '5px 8px 5px rgba(0, 0, 0, 0.2)'}} src={item.screenShot} width="100%" height="250px"></img>
              </div>
              <div className="cardInnerRight" style={{boxShadow: '5px 8px 5px rgba(0, 0, 0, 0.2)'}}>
                <h2 className="cardHeading" >
               {item.titlte}
                </h2>
                <button type="button" className="resourceButton">
                  <a href={item.pdf} style={{color:"white",textDecoration:"none"}} target="_blank">View Documents</a>
                </button>
              </div>
            </div>
            
          </div>
          })
         }
       </div>
    </>
  );
}
