import React, { useState } from "react";
import "../Css/header.css";
import "../Css/resource.css";
import Footer from "./footer";
import GenericHeader from "./genericHeader";
import ContactUsForm from "./ContactUsForm";
import "../Css/investnow.css";
import { useEffect } from "react";
import MobileHeaderGeneric from "./MobileHeaderGeneric";

export default function ContactUs() {
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

  return (
    <>
      {windowWidth <= 500 ? <MobileHeaderGeneric /> : <GenericHeader />}
      {windowWidth <= 500 ? (
        <div></div>
      ) : (
        <div style={{ height: "150px" }}></div>
      )}

      <div
        className="row "
        style={{
          height: "100px",
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
            margin: "auto",
            position: "relative",
          }}
        >
          <div className="">
            <h1
              className={
                window.innerWidth <= 540 ? "contactus mt-4 mb-0" : "contactus"
              }
            >
              Contact Us
            </h1>
          </div>
        </div>
      </div>
      <div className="mt5">
        <ContactUsForm />
      </div>
      <div
        style={
          windowWidth < 500
            ? {}
            : {
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
              // textAlign:"justify",
              margin: "auto",
              position: "relative",
            }
        }
      >
        <h3
          style={{
            color: "#054a91",
            marginTop: 10,
          }}
        >
          Was this information helpful?
        </h3>
        <div
          style={
            windowWidth < 500
              ? { display: "flex", justifyContent: "center" }
              : {
                display: "flex",
              }
          }
        >
          <button
            style={{
              borderRadius: 50,
              width: 60,
              marginLeft: 10,
            }}
            type="submit"
            className="submit_button"
          >
            Yes
          </button>
          <button
            style={{
              borderRadius: 50,
              width: 60,
              marginLeft: 10,
            }}
            className="submit_button"
          >
            No
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
