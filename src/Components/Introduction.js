import React from 'react'
import MobileHeaderGeneric from './MobileHeaderGeneric'
import GenericHeader from './genericHeader'
import { useState } from 'react';
import { useEffect } from 'react';
import Footer from './footer';

const Introduction = () => {
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
            {windowWidth <= 500 ? (
                <div></div>
            ) : (
                <div style={{ height: "150px" }}></div>
            )}
            <div className='container_fluid'>
                <div
                    className="row "
                    style={{
                        // height: "250px",
                        background: "",
                        // backgroundColor:"red"
                    }}
                >
                    <div
                        className="col-lg-12"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            // textAlign:"justify",
                            // margin: "auto",
                            position: "relative"
                        }}
                    >
                        <div className="" >
                            <h1 className={window.innerWidth <= 540 ? "introductionTitle mt-4 mb-4" : "introductionTitle mt-4"}>Introduction</h1>
                            <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", }}>The Project is functionalized to support improvement in livability and competitiveness of Karachi by enhancing institutional performance and supporting activities for supporting private sector investment. The main objective is to enhance efficiencies in Sindh’s business Regulatory environment. Through this activity, Regulatory requirements across multiple agencies will be streamlined, made consistent, and automated where possible.  A centralized business one-stop-shop (S-BOSS) will be developed to integrate the streamlined Regulatory requirements for Sindh.
                                The Project Implementation Unit, Investment Department Government of Sindh is providing support to improve the business environment for private sector investment by streamlining and integrating key Regulatory processes, through:
                            </p>
                            <br />
                            {/* <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", fontWeight: "bold" ,display:'inline'}}>(A) Regulatory reform and simplification:   </p> */}
                            <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", paddingLeft:window.innerWidth <500?0:40 ,}}><span style={{fontWeight: "bold" ,}}>(A) Regulatory reform and simplification:</span> This will entail the preparation of a consolidated Register of business licenses, permits, and “No-Objection Certificates” (NOCs) applicable for starting and doing business in Karachi at the provincial and local levels. The Register will identify redundant licenses / permits / NOCs.  </p>
                            <br />






                             {/* <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", fontWeight: "bold" }}>(B) Regulatory process mapping and re-engineering:   </p> */}
                            <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", paddingLeft:window.innerWidth <500?0:40 }}><span style={{fontWeight: "bold" ,}}>(B) Regulatory process mapping and re-engineering:</span> This will be followed by a process mapping of licenses, permits, and NOCs issued by ten key Regulatory agencies to re-engineer existing processes and develop standard operating procedures (SOPs) to streamline these processes and make them transparent and less discretionary. This will also identify specific Regulatory changes to help level the playing field for registration and operations for women-owned businesses in Karachi. </p>
                            <br />






                            
                            {/* <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", fontWeight: "bold" }}>(C)  Architecture and Design: Sindh   </p> */}
                            <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", paddingLeft:window.innerWidth <500?0:40 }}><span style={{fontWeight: "bold" ,}}>(C) Architecture and Design: Sindh </span> Sindh One Stop Shop (S-BOSS) will be established to act as a single interface between businesses and key Regulatory agencies. SID will support the automation of SOPs of selected Regulatory agencies and integrate these into the portal. This process will use existing inter-agency coordination mechanisms in place as part of Sindh’s DB reforms program under implementation. The SBP will upgrade the recently-launched Bank-financed Sindh Business Registration Portal (S-BOSS) to enable not only streamlined registration but facilitation of all approvals, licenses, and permits for ongoing business operations. </p>
                            <br />

                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>

    )
}

export default Introduction