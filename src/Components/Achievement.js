import React from "react";
import MobileHeaderGeneric from "./MobileHeaderGeneric";
import GenericHeader from "./genericHeader";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "./footer";

const Achievement = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        // Function to update the windowWidth state when the resize event occurs
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        // Attach the event listener
        window.addEventListener("resize", handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const para = [
        {
            text: " Drug (Pharmacy) License Validity extended from 2 to 5 years",
        },
        {
            text: " Auto Workshop License validity extended from 1 to 3 years",
        },
        {
            text: "Fisheries License Validity extended from 1 to 3 years.",
        },
        {
            text: " Online & Timely registration of partnerships within seven (07) days",
        },
        {
            text: " Online portal for building plan approvals.",
        },

        {
            text: "20% to 10% reduced Apprenticeship requirement for SMEs",
        },
        {
            text: " Special Commercial bench to expedite commercial dispute resolution",
        },
        {
            text: " Alternate Dispute Resolution introduced via amended CPC; Arbitrators onboard;",
        },
        {
            text: " Online Case Management System introduced.",
        },
        {
            text: " Multiple inspections/assessments eliminated by SESSI.",
        },
        {
            text: "Multiple inspections eliminated by SBCA",
        },
        {
            text: "Timely Drug License issuance enforced;",
        },
        {
            text: " Time-based issuance of NOCs/Permits for Construction Permits",
        },
        {
            text: " Time for environmental assessment reduced by SEPA. ",
        },
        {
            text: "Reduction in frequency of assessments/audits by SESSI.",
        },
        {
            text: " Automatic NTN registration of partners /businesses",
        },
        {
            text: " Elimination Obsolete requirements of Spittoon in Factories Act 1934",
        },
        {
            text: " Elimination Obsolete requirements of Whitewashing of rooms in Factories Act 1934",
        },
        {
            text: " Fixing timelines for registration of factories within 14 days in Factories Act 1934",
        },
    ];

    return (
        <>
            {windowWidth <= 500 ? <MobileHeaderGeneric /> : <GenericHeader />}
            {windowWidth <= 500 ? (
                <div></div>
            ) : (
                <div style={{ height: "120px" }}></div>
            )}
            <div className="container_fluid">
                <div
                    className="row "
                    style={{
                        background: "",
                    }}
                >
                    <div
                        className="col-lg-12"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            position: "relative",
                        }}
                    >
                        <div className="">
                            <h1
                                className={
                                    window.innerWidth <= 540
                                        ? "introductionTitle mt-4 mb-4"
                                        : "introductionTitle mt-4"
                                }
                            >
                                Achievement
                            </h1>
                            <p
                                className={
                                    window.innerWidth <= 540
                                        ? " mb-0"
                                        : "feedbackpara col-8"
                                }
                                style={{
                                    fontSize:
                                        window.innerWidth === 280 || window.innerWidth === 320
                                            ? "17.5px"
                                            : " ",
                                    textAlign: "center",
                                }}
                            >
                                CLICK Sindh Investment Department Sub Component 3.1
                            </p>
                            <p
                                className={
                                    window.innerWidth <= 540
                                        ? " mb-0"
                                        : "feedbackpara col-8"
                                }
                                style={{
                                    fontSize:
                                        window.innerWidth === 280 || window.innerWidth === 320
                                            ? "17.5px"
                                            : " ",
                                    fontWeight: "bold",
                                }}
                            >
                                STREAMLINING AND INTEGRATING BUSINESS REGULATIONS FOR CITY
                                COMPETITIVENESS
                            </p>
                            <br />
                            <p
                                className={
                                    window.innerWidth <= 540
                                        ? " mb-0"
                                        : "feedbackpara col-8"
                                }
                                style={{
                                    fontSize:
                                        window.innerWidth === 280 || window.innerWidth === 320
                                            ? "17.5px"
                                            : " ",
                                    fontWeight: "bold",
                                }}
                            >
                                (A) MAPPING OF BUSINESS REGISTRATION PROCEDURES:{" "}
                            </p>
                            <p
                                className={
                                    window.innerWidth <= 540
                                        ? " mb-0"
                                        : "feedbackpara col-8"
                                }
                                style={{
                                    fontSize:
                                        window.innerWidth === 280 || window.innerWidth === 320
                                            ? "17.5px"
                                            : " ",
                                    paddingLeft: 40,
                                }}
                            >
                                Existing and proposed design (Sindh Business One Stop Shop) of
                                132+ Registrations, Licenses, Certificates and Other Permits
                                required for registering and doing business in Sindh completed.{" "}
                            </p>
                            <p
                                className={
                                    window.innerWidth <= 540
                                        ? " mb-0"
                                        : "feedbackpara col-8"
                                }
                                style={{
                                    fontSize:
                                        window.innerWidth === 280 || window.innerWidth === 320
                                            ? "17.5px"
                                            : " ",
                                    fontWeight: "bold",
                                }}
                            >
                                (B) TRANSPARENCY IN PUBLIC SECTOR REGULATORY FRAMEWORK:
                            </p>
                            <p
                                className={
                                    window.innerWidth <= 540
                                        ? " mb-0"
                                        : "feedbackpara col-8"
                                }
                                style={{
                                    fontSize:
                                        window.innerWidth === 280 || window.innerWidth === 320
                                            ? "17.5px"
                                            : " ",
                                    paddingLeft: 40,
                                }}
                            >
                                Online repository of Regulatory knowledge base established at
                                www.business.gos.pk to facilitate entrepreneurs in exploring
                                business and investment opportunities in Sindh.{" "}
                            </p>
                            <p
                                className={
                                    window.innerWidth <= 540
                                        ? " mb-0"
                                        : "feedbackpara col-8"
                                }
                                style={{
                                    fontSize:
                                        window.innerWidth === 280 || window.innerWidth === 320
                                            ? "17.5px"
                                            : " ",
                                    fontWeight: "bold",
                                }}
                            >
                                {" "}
                                (C) SIMPLIFICATION AND MODERNIZATION OF REGULATORY FRAMEWORK IN
                                SINDH:{" "}
                            </p>
                            <p
                                className={
                                    window.innerWidth <= 540
                                        ? " mb-0"
                                        : "feedbackpara col-8"
                                }
                                style={{
                                    fontSize:
                                        window.innerWidth === 280 || window.innerWidth === 320
                                            ? "17.5px"
                                            : " ",
                                    paddingLeft: 40,
                                }}
                            >
                                President of Pakistan and Prime Minister Office (BoI) awards
                                appreciation to GoS for making 19 obsolete and redundant
                                Regulatory laws, rules, etc., simplified and automation of key
                                obstacle areas in Regulatory framework of Sindh
                            </p>
                            {para?.map(({ text }, id) => {
                                return (
                                    <p
                                        className={
                                            window.innerWidth <= 540
                                                ? " mb-0"
                                                : "feedbackpara col-8"
                                        }
                                        style={{
                                            fontSize:
                                                window.innerWidth === 280 || window.innerWidth === 320
                                                    ? "17.5px"
                                                    : " ",
                                            paddingLeft: 40,
                                        }}
                                    >
                                        {`${id + 1} )`}
                                        {text}
                                    </p>
                                );
                            })}
                            <p
                                className={
                                    window.innerWidth <= 540
                                        ? " mb-0"
                                        : "feedbackpara col-8"
                                }
                                style={{
                                    fontSize:
                                        window.innerWidth === 280 || window.innerWidth === 320
                                            ? "17.5px"
                                            : " ",
                                    fontWeight: "bold",
                                }}
                            >
                                {" "}
                                WAY FORWARD:
                            </p>
                            <br />
                            <div className="ps-5">
                                <p
                                    className={
                                        window.innerWidth <= 540
                                            ? " mb-0"
                                            : "feedbackpara col-8"
                                    }
                                    style={{
                                        fontSize:
                                            window.innerWidth === 280 || window.innerWidth === 320
                                                ? "17.5px"
                                                : " ",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {" "}
                                    (A) ESTABLISHING SINDH BUSINESS ONE STOP SHOP (S-BOSS){" "}
                                </p>
                                <p
                                    className={
                                        window.innerWidth <= 540
                                            ? " mb-0"
                                            : "feedbackpara col-8"
                                    }
                                    style={{
                                        fontSize:
                                            window.innerWidth === 280 || window.innerWidth === 320
                                                ? "17.5px"
                                                : " ",
                                        paddingLeft: 40,
                                    }}
                                >
                                    Operationalization of Sindh business One Stop Shop (S-BoSS)—A
                                    portal to provide online licensing of 132 approvals, NOCs,
                                    registrations and permits to business community during next FY
                                    2023-24, to enhance international competitiveness score of
                                    Pakistan in terms of Regulatory ease in doing business in the
                                    upcoming BE-Ready Report of World Bank.
                                </p>
                                <p
                                    className={
                                        window.innerWidth <= 540
                                            ? " mb-0"
                                            : "feedbackpara col-8"
                                    }
                                    style={{
                                        fontSize:
                                            window.innerWidth === 280 || window.innerWidth === 320
                                                ? "17.5px"
                                                : " ",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {" "}
                                    (B) STUDY ON CONSTRAINTS FACED BY WOMEN-RUN BUSINESS IN
                                    KARACHI
                                </p>
                                <p
                                    className={
                                        window.innerWidth <= 540
                                            ? " mb-0"
                                            : "feedbackpara col-8"
                                    }
                                    style={{
                                        fontSize:
                                            window.innerWidth === 280 || window.innerWidth === 320
                                                ? "17.5px"
                                                : " ",
                                        paddingLeft: 40,
                                    }}
                                >
                                    {" "}
                                    (B) STUDY ON CONSTRAINTS FACED BY WOMEN-RUN BUSINESS IN
                                    KARACHI
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Achievement;
