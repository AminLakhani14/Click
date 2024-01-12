import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
import ss9 from "../assets/ScreenShot/s.s9.png"
import ss10 from "../assets/ScreenShot/s.s10.png"
import ss11 from "../assets/ScreenShot/s.s11.png"
import ss12 from "../assets/ScreenShot/PRMI.png"
import ss13 from "../assets/ScreenShot/worldBank.png"
import ss14 from "../assets/ScreenShot/Monthly_report.png"
import ss15 from "../assets/ScreenShot/TradePolicy.png"
import ss16 from "../assets/ScreenShot/PAKISTANINVESTMENTPOLICY2023 .png"

import pdf1 from "../assets/DownloadDocument/Final_PRMI_Book_2_New.pdf"
import pdf2 from "../assets/DownloadDocument/Final_PRMI_Book_1.pdf"
import pdf3 from "../assets/DownloadDocument/wbgstudy.pdf"
import pdf4 from "../assets/DownloadDocument/RIE-REPORT.pdf"
import pdf5 from "../assets/DownloadDocument/pa-03-availing-of-the-net-metering-facility-impact-of-bois-reforms.pdf"
import pdf6 from "../assets/DownloadDocument/DRAP-Reforms-Evaluation-Final.pdf"
import pdf7 from "../assets/DownloadDocument/Minimum-Consensus-on-Key-Economic-Reforms.pdf"
import pdf8 from "../assets/DownloadDocument/Recommendations-on-National-Program-for-Digital-Transformation.pdf"
import pdf9 from "../assets/DownloadDocument/WEF_TheGlobalCompetitivenessReport2020.pdf"
import pdf10 from "../assets/DownloadDocument/FACT-SHEET---NHDR.pdf"
import pdf11 from "../assets/DownloadDocument/PAK.pdf"
import pdf12 from "../assets/DownloadDocument/PRMI.pptx"
import pdf13 from "../assets/DownloadDocument/WorldBank.pptm"
import pdf14 from "../assets/DownloadDocument/Monthly-report.pdf"
import pdf15 from "../assets/DownloadDocument/Tradepolicy.pdf"
import pdf16 from "../assets/DownloadDocument/FinalPakistanInvestmentPolicy.pdf"



import MobileHeaderGeneric from "./MobileHeaderGeneric";
import Footer from "./footer";
export default function Resource() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  debugger
  console.log( window.location.href)

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
      titlte:"From Swimming in Sand to High end Sustainable Growth – WBG",
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
    ,
    {
      screenShot:ss9,
      titlte:"The Global Competitiveness Report",
      pdf:pdf9
    }
    ,
    {
      screenShot:ss10,
      titlte:"Pakistan National Human Development Report",
      pdf:pdf10
    },
    {
      screenShot:ss11,
      titlte:"Ease of Doing Business",
      pdf:pdf11
    },
    {
      screenShot:ss12,
      titlte:"Reforms Activities in Sindh (PRMI)",
      pdf:pdf12
    },
    {
      screenShot:ss13,
      titlte:"Update on BE-Ready Project World Bank",
      pdf:pdf13
    },
    {
      screenShot:ss14,
      titlte:"Trade Development Authority Of Pakistan",
      pdf:pdf14
    },
    {
      screenShot:ss15,
      titlte:"Strategic Trade Policy Framework",
      pdf:pdf15,
      link:'https://tdap.gov.pk/wp-content/uploads/2022/01/STPF-2020-25-1.pdf'
    }
    ,
    {
      screenShot:ss16,
      titlte:"Pakistan Investment Policy 2023 ",
      pdf:pdf16,
      link:'https://invest.gov.pk/sites/default/files/inline-files/Final%20PIP%202023-cs.pdf'

    }
  ]
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
      {windowWidth <= 500 ? <MobileHeaderGeneric /> : <GenericHeader />}
            {windowWidth <= 500 ? (
                <div></div>
            ) : (
                <div style={{ height: "150px" }}></div>
            )}

<div className='container_fluid'>
                <div
                    className="row "
                >
                    <div
                        className="col-lg-12"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            position: "relative"
                        }}
                    >
                        <div className="" >
                            <h1 className={window.innerWidth <= 540 ? "introductionTitle mt-4 mb-4" : "introductionTitle mt-4"}>Downloads</h1>
                        </div>
                    </div>
                </div>

            </div>

      
     
 

       <div className="card_wrapper"
      >
       {
          arr.map((item)=>{
            return  <div  className="cardMain1 ">
            <div className="cardResource">
              <div className="cardInnerLeft">
                <img 
                style={{
                  boxShadow: '5px 8px 5px rgba(0, 0, 0, 0.2)'}} 
                  src={item?.screenShot}  
                   width="100%"
                   height="250px" />
              </div>
              <div className="cardInnerRight" style={{boxShadow: '5px 8px 5px rgba(0, 0, 0, 0.2)'}}>
                <h2 className="cardHeading" style={item?.link&& {height:113}}>
               {item?.titlte}
                </h2>
                {
                   item?.link &&  <button type="button" className="resourceButton mb-2">
                     <a href={item?.link} style={{color:"white",textDecoration:"none",marginBottom:"15px"}} target="_blank">View Link</a>
                   </button>
                }
                <button type="button" className="resourceButton">
                  <a href={item?.pdf} style={{color:"white",textDecoration:"none"}} target="_blank">View Documents</a>
                </button>
              </div>
            </div>
            
          </div>
          })
         }
       </div>
       <Footer/>
    </>
  );
}
