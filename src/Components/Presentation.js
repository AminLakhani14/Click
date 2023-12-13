import React, { useEffect, useState } from "react";
import "../Css/header.css";
import "../Css/resource.css";
import GenericHeader from "./genericHeader";
import ss12 from "../assets/ScreenShot/PRMI.png"
import ss13 from "../assets/ScreenShot/worldBank.png"
import pdf12 from "../assets/DownloadDocument/PRMI.pptx"
import pdf13 from "../assets/DownloadDocument/WorldBank.pptm"
import MobileHeaderGeneric from "./MobileHeaderGeneric";
export default function Presentation() {
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
    let arr = [

        {
            screenShot: ss12,
            titlte: "Reforms Activities in Sindh (PRMI)",
            pdf: pdf12
        },
        {
            screenShot: ss13,
            titlte: "Update on BE-Ready Project World Bank",
            pdf: pdf13
        }
    ]
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
                            <h1 className={window.innerWidth <= 540 ? "introductionTitle mt-4 mb-4" : "introductionTitle mt-4"}>Presentation</h1>
                        </div>
                    </div>
                </div>

            </div>
            <div className="card_wrapper"
            style={{paddingTop:"0px !important"}}
            >
                {
                    arr.map((item) => {
                        return <div className="cardMain1 ">
                            <div className="cardResource">
                                <div className="cardInnerLeft">
                                    <img
                                        style={{
                                            boxShadow: '5px 8px 5px rgba(0, 0, 0, 0.2)'
                                        }}
                                        src={item.screenShot}
                                        width="100%"
                                        height="250px" />
                                </div>
                                <div className="cardInnerRight" style={{ boxShadow: '5px 8px 5px rgba(0, 0, 0, 0.2)' }}>
                                    <h2 className="cardHeading" >
                                        {item.titlte}
                                    </h2>
                                    <button type="button" className="resourceButton">
                                        <a href={item.pdf} style={{ color: "white", textDecoration: "none" }} target="_blank">View Documents</a>
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
