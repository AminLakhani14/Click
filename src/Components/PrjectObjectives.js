import React from 'react'
import MobileHeaderGeneric from './MobileHeaderGeneric'
import GenericHeader from './genericHeader'
import { useState } from 'react';
import { useEffect } from 'react';
import Footer from './footer';

const ProjectObjectives = () => {
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
    const para = [
        {
            text: " Boilers and Pressure Vessels Ordinance, 2002 (the “Boilers Ordinance”);"
        },
        {
            text: "Commission Regulations, 2017 (the “SHCC Regulations”); "
        },
        {
            text: " Drugs Act, 1976 (the “Drugs Act”) "
        },

        {
            text: "Hazardous Substances Rules, 2014 (the “HS Rules”);"
        },
        {
            text: " Import Policy Order, 2022;"
        },
        {
            text: "Pakistan Boiler Rules, 2009 (the “Pakistan Boiler Rules”) "
        },
        {
            text: " Shops and Commercial Establishments Act, 2015 (the “SCE Act”); "
        },
        {
            text: "Sindh Boiler Attendant and Boiler Engineer Rules, 1989 (the “Boiler Engineer/Attendant Rules”) "
        },

        {
            text: "Sindh Drugs Rules, 1979 (“Drug Rules”); "
        },
        {
            text: "Sindh Environmental Protection Act, 2014 (the “SEP Act”); "
        },
        {
            text: "Sindh Environmental Protection Agency (Environmental Assessment) Regulations, 2021 (the “SEPA Regulations”);  "
        },
        {
            text: "Sindh Environmental Quality Standards (Certification of Environmental Laboratories) Regulations, 2014 (the “Certification Regulations”);"
        },
        {
            text: " Sindh Factories Act, 2015 (the “SF Act”); "
        },
        {
            text: " Sindh Food Authority Act, 2017 (the “SFA Act”);"
        },
        {
            text: "Sindh Food Authority Regulations, 2018 (the “SFA Regulations”); "
        },
        {
            text: "Sindh Health Care Commission Act, 2013 (the “SHCC Act”); "
        },
        {
            text: "Sindh Hospital Waste Management Rules, 2014 (the “SHWM Rules”); "
        },

        {
            text: "Sindh Industrial Relations Act, 2013 (the “SIR Act”);"
        },
        {
            text: "Sindh Industrial Relations Rules, 2021 (the “SIR Rules”); "
        },
        {
            text: " Sindh Private Educational Institutions (Regulation And Control) Ordinance, 2001 (the “SPEI Ordinance”); "
        },

        {
            text: " .Sindh Private Educational Institutions (Regulation And Control) Rules, 2005 (the “SPEI Rules”); "
        },
        {
            text: "Sindh Prohibition of Non-degradable Plastic Products (Manufacturing, Sale and Usage) Rules, 2014;  "
        },
        {
            text: "Societies Registration Act, 1860 (the “SR Act”) "
        },
        {
            text: "Compressed Natural Gas (CNG) (Production and Marketing) Rules, 1992 (the “CNG Rules”); "
        },
        {
            text: "Motor Vehicle Dealers License Rules, 1989 (the “MVDL Rules”);"
        },
        {
            text: "Motor Vehicles Ordinance, 1965 (the “MV Ordinance”); "
        },
        {
            text: "Motor Vehicles Rules, 1969; "
        },
        {
            text: "Notification No. SO (IMP-III)/CMS/4(55) Misc-II/08 (the “SMCR Renewal Notification”);  "
        },
        {
            text: "Notification No. T.O/M&MDD/15-3/2021/334 (the “SMCR Fee Notification”);  "
        },
        {
            text: "Prohibition (Enforcement of Hadd) Order, 1979;  "
        },
        {
            text: "Provincial Employees’ Social, Security (Employees Returns and Records) Regulations, 1965 (the “SESSI Regulations”);  "
        },
        {
            text: " Sind Professions, Trades, Callings And Employment Tax Rules, 1976 (the “Professional Tax Rules”);"
        },
        {
            text: "Sindh Akbari Act, 1878; "
        },
        {
            text: "Sindh Coal Act, 2012, (the “Coal Act”);"
        },
        {
            text: "Sindh Coal Mine Rules, 2016 (the “Coal Rules”);"
        },
        {
            text: "Sindh Employees’ Social Security Act, 2016 (the “SESS Act”);"
        },
        {
            text: "Sindh Mining Concession Rules, 2002 (the “Concession Rules”);"
        },
        {
            text: "Sindh Prohibition Rules, 1979 (the “Prohibition Rules”); "
        },
        {
            text: "Sindh Sales Tax on Services Act, 2011 (the “SST Act”);  "
        },
        {
            text: "Sindh Sales Tax on Services Rules, 2011 (the “SST Rules”);  "
        },
        {
            text: "Thar Coal And Energy Board Act, 2011 (the “Thar Board Act”);  "
        },
        {
            text: "The Sindh (Prohibition of Taking Minerals Including RETI (Sand) and Bajri form any Land) Act, 2003 (the “Sand And Bajri Act”); "
        },
        {
            text: "The Sindh Finance Act, 1964 "
        }, {
            text: "The Sindh Finance Act, 1989."
        },
        {
            text: "Agricultural Pesticide Ordinance Act 1971 "
        },
        {
            text: "Agricultural Pesticide Rules (APR) 1973 "
        },

        {
            text: "Agriculture Market Produce Act 1939 and Rules 1940 "
        },
        {
            text: "Fertilizer Rules 1999  "
        },
        {
            text: "License of Market Committee relevant section of Act and Rules"
        },

        {
            text: "Sindh Fertilizer Control Act 1994 "
        },
        {
            text: "The Karachi Building & Town Planning Regulation 2002 along with Updated Notifications  "
        },
        {
            text: "Sindh People's Local Councils Land Rules 1975 "
        },
        {
            text: " Sindh Local Government Act 2013  "
        },
        {
            text: "Sindh KatchiAbadi Act 1987 "
        }, {
            text: "Building By Laws of S.I.T.E Limited 2008  "
        }, {
            text: "Procedure for Allotment of Plot, 1985  "
        }, {
            text: "Sindh Small Industries Corporation Act 1972 "
        },


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
                            <h1 className={window.innerWidth <= 540 ? "vision mt-4 mb-4" : "vision mt-4 mb-3"}>Vision </h1>
                            <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", textAlign: "center", }}>The project aims to ensure the fulfillment of SDG (Sustainable Development Goal) 11, and “Sustainable Cities & Communities”,
                                and
                                SDG 5, “Achieve Gender Equality and Empower all Women and Girls”.
                                Vision 2030, by streamlining and integrating the Business Regulations for City Competitiveness.
                            </p>
                            <h1 className={window.innerWidth <= 540 ?"catalog mt-4 mb-4":"catalog  mt-4 mb-3"}>Mission and Development Objectives  </h1>
                            <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", paddingLeft: window.innerWidth  <500 ?0:40, textAlign: "center", }}>To improve urban management, service delivery and the business environment in Karachi.  </p>
                            <br />

                            <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", textAlign: "center", }}>The component is oriented towards improving the business environment of Karachi, as opposed to other activities, owing to complementarities between the activities in this and other components of the project.

                                The Regulatory environment under which the private sector operates has a direct bearing on the other aspects of the investment climate, such as public infrastructure and public service delivery.
                                <br />
                                <br />
                                A more transparent, integrated, and streamlined Regulatory environment, therefore, would improve city competitiveness.
                                <br />
                                <br />

                                Increase the impact of public service delivery improvements on corresponding private sector investment and competitiveness.
                            </p>
                            <h1 className={window.innerWidth <= 540 ? "Progress mt-4 mb-4" : "Progress mb-3 mt-4"}>Progress </h1>
                            <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", paddingLeft: window.innerWidth  <500 ?0:40, textAlign: "center", }}><span style={{ fontWeight: "bold", textAlign: "center", }}>1.	DEVELOPMENT OF CONSOLIDATED BUSINESS REGISTRY (CBR) OF REGULATORY FRAMEWORK FOR KARACHI AND THE “BUSINESS PROCESS RE-ENGINEERING (BPR) OF 16 SELECTED KEY REGULATORY AGENCIES FOR SIMPLIFICATION, MODERNIZATION & DESIGNING IT SOLUTION FOR AUTOMATION INTO A SINDH BUSINESS ONE STOP SHOP (S-BOSS)”</span>
                                <br />
                                Contract Awarded to EY Ford Rhodes for developing the Following Components: </p>
                            <br />

                            <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", paddingLeft: window.innerWidth  <500 ?0:40, textAlign: "center", }}><span style={{ fontWeight: "bold", textAlign: "center", }}>(a)	Consolidated Business Registry (CBR): </span> The consolidated business register (CBR) has been developed and endorsed by key Regulatory departments. Cumulatively, 240+ Registrations, Licenses, Certificates (NOCs) and other Permits have been identified.  </p>
                            <br />

                            <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", paddingLeft: window.innerWidth  <500 ?0:40, textAlign: "center", }}><span style={{ fontWeight: "bold", textAlign: "center", }}>(b)	AS-IS Study& To-Be Study: </span>An “As-Is” study analyses the current state of the Regulatory process for acquiring the Registrations Licenses, Certificates (NOCs) and other permits. Typically, the analysis goal of putting together the current process map is to clarify exactly how the process works currently and chalk out the issues, challenges for the improvements in the system. Moreover, To-Be study makes the recommendations to bring efficiency in the Regulatory processes. the To-Be study recommends the reforms by which the key Regulatory departments/ agencies will be integrated and provide an optimized service delivery. So far, AS-IS mapping of 15 out of 16 Government Departments/agencies have been completed and endorsed and To-Be Study has been endorsed by 13 out of 16  Government Departments/agencies. </p>
                            <br />
                            <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", paddingLeft: window.innerWidth  <500 ?0:40, textAlign: "center", }}><span style={{ fontWeight: "bold", textAlign: "center", }}>(c)	Stakeholder Engagement Sessions:  </span> The series of stakeholder engagement meetings are underway; Karachi Chambers of commerce and Industries (KCCI), Federation of Pakistan chamber of commerce and Industries (FPCCI), Pakistan Business Council, Karachi (PBC), the Overseas Investors Chamber of Commerce and Industries (OICCI), Small and Medium Enterprise Development Authority (SMEDA) and Association of builders and Developers (ABAD) have been consulted  for their feedback at each stage of BPR through a feedback form shared by CLICK, SID PIU as well as the Interdepartmental engagement including Fedral Board of Revenue( FBR), Finance Department, GoS, NADRA, Securities & Exchange Commission of Pakistan has also been taken into consideration for the System design and integration of Sindh Busiess One Stop Shop (S-BOSS).   </p>
                            <br />
                            <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", paddingLeft: window.innerWidth  <500 ?0:40, textAlign: "center", }}><span style={{ fontWeight: "bold", textAlign: "center", }}>(d)	Development of Draft Regulatory Framework:  </span> Crafting an integrated legal framework for harmonizing 16 government departments is a crucial stride towards establishing an efficient 'One-Stop Shop' in Sindh, streamlining processes and enhancing ease of doing business."  </p>
                            <br />
                            <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", paddingLeft: window.innerWidth  <500 ?0:40, textAlign: "center", }}><span style={{ fontWeight: "bold", textAlign: "center", }}>2.	DEVELOPMENT OF IT INFRASTRUCTURE FOR OPERATIONALIZING SINDH BUSINESS ONE, DEVELOPMENT OF SOFTWARE SOLUTION/APPLICATIONS AND SYSTEM TRAINING” </span>
                                <br />

                                A centralized one-window operation to be called Sindh Business One Stop Shop (S-BOSS) will be established to act as a single interface between businesses and key Regulatory departments/agencies. The SOPs of selected Regulatory agencies will be automated and integrated into the portal.

                                The Sindh Business One Stop Shop (S-BOSS) will provide support to the Sindh Investment Department to improve the business environment for private sector investment by streamlining and integrating key Regulatory processes, through the development of an online portal and associated facilities to automate and integrate Regulatory processes of selected agencies. It will provide an easy, transparent, and less discretionally environment

                                The Sindh Business One stop shop (S-BOSS) will optimize the process of providing entrepreneur and investor services.
                            </p>
                            <br />
                            <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", paddingLeft: window.innerWidth  <500 ?0:40, textAlign: "center", }}><span style={{ fontWeight: "bold", textAlign: "center", }}>3.	CONDUCTING STUDY ON CONSTRAINTS FACED BY WOMEN BUSINESSES IN KARACHI  </span>
                                <br />
                                Contract Awarded to Institute of Business Administration –IBA, Karachi for conducting the study on identify constraints facing women-owned and managed businesses in Karachi in the existing Regulatory environment, and to propose improvements to facilitate these businesses and increase women’s participation in the formal economy especially as entrepreneurs. The Survey tools including Interview questions, Focus group discussions and Survey Questionnaire has been developed and the piloting of the project has also been initiated.
                                <br />

                                <i>The outcome of the study will enable the Government & Policy Planners to take action to facilitate women as a major contributor to the economic growth of the province.</i>

                            </p>
                            <br />
                            <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", paddingLeft: window.innerWidth  <500 ?0:40, textAlign: "center", }}><span style={{ fontWeight: "bold", textAlign: "center", }}>4.	CONDUCTING FEASIBILITY STUDY ON KARACHI INFRASTRUCTURE FUND </span>
                                <br />
                                Explore sources of infrastructure finance for the city, a feasibility study will be conducted for a proposed apex financial institution to address key constraints for channelling financing for the city’s infrastructure needs. A committee will be constituted for the  preparation of ToRs.
                                <br />
                                <i>The city is expanding exponentially. It needs proper planning to provide funds for the improvement of the city. Karachi can develop into a modern city with the required infrastructure..</i>
                            </p>
                            <br />
                            <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", paddingLeft: window.innerWidth  <500 ?0:40, textAlign: "center", }}><span style={{ fontWeight: "bold", textAlign: "center", }}>5.	MARKETING OF COMPETITIVENESS AND IMPROVED REGULATORY ENVIRONMENT  </span>
                                <br />
                                Development of website/ Web Portal to hoist Business Registration Directory, Statistics on Competitiveness of Karachi, Tutorial and Guides on Business Regulatory Framework, Tax Assessment tool and Feedback Management mechanism, Dashboard/ Portal, etc
                                <br />
                                Social Media Platforms For promoting CLICK, and SID initiatives, the most used social media channels X (formerly Twitter) & Facebook, LinkedIn, and Youtube accounts have been created and regularly updated. CLICK, SID posts updates on these channels to promote project interventions and project progress. The social media updates consist of static posts, slideshows, short videos, interviews, feedback, important meetings and recognition of national and international days etc
                            </p>
                            <h1 className={window.innerWidth <= 540 ? "introductionTitle mt-4 mb-4" : "introductionTitle  mb-3  mt-4"}>Execution Roadmap  </h1>
                            <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", paddingLeft: window.innerWidth  <500 ?0:40,  }}> 1{')'}	Development of Registry of Regulatory Framework for Karachi.</p>
                            <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", paddingLeft: window.innerWidth  <500 ?0:40,  }}> 2{')'}	BPR Consultancy for “Business process Re-Engineering of 16 Agencies for Simplification, Modernization and Designing IT Solution for Automation into a Sindh Business One Stop Shop (S-BoSS)”</p>
                            <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", paddingLeft: window.innerWidth  <500 ?0:40,  }}> 3{')'}	Engaging IT Firm for “Development of IT Infrastructure for Operationalizing S-BoSS, Development of Software Solution/Applications and System Training”</p>
                            <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", paddingLeft: window.innerWidth  <500 ?0:40,  }}> 4{')'}  Conducting Study on Constraints faced by Women Businesses in Karachi </p>
                            <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", paddingLeft: window.innerWidth  <500 ?0:40,  }}> 5{')'}	Conducting Study on Karachi Infrastructure fund feasibility.  </p>
                            <br />
                            <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", paddingLeft: window.innerWidth  <500 ?0:40,  }}> 6{')'}	Conducting Feasibility Study on Karachi Infrastructure Fund  </p>
                            <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", paddingLeft: window.innerWidth  <500 ?0:40,  }}> 7{')'}	Marketing of Competitiveness and Improved Regulatory Environment </p>
                            <h1 className={window.innerWidth <= 540 ? "introductionTitle mt-4 mb-4" : "introductionTitle mb-3 mt-4"}>Way Forward </h1>
                            <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", paddingLeft: window.innerWidth  <500 ?0:40, textAlign: "center" }}>Recruitment of IT firm for the operationalization of the Sindh Business One Stop Shop( S-BOSS) </p>
                            <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", paddingLeft: window.innerWidth  <500 ?0:40, textAlign: "center" }}>Following Laws have been reviewed and draft legal changes/updates are underway. </p>
                            <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", paddingLeft: window.innerWidth  <500 ?0:40, textAlign: "center" }}>For the purposes of the legal and Regulatory review, the following laws have been reviewed:</p>
                            <br />

                            {
                                para?.map(({ text }, id) => {
                                    return <p className={window.innerWidth <= 540 ? "mobileparaforfeedback mb-0" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", paddingLeft: window.innerWidth  <500 ?0:80, }}>{`${id + 1} ) ${text}`}</p>
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>

    )
}

export default ProjectObjectives