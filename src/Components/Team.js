import React, { useEffect, useState } from "react";
import GenericHeader from "./genericHeader";
import Footer from "./footer";
import "../Css/investnow.css";
import MobileHeaderGeneric from "./MobileHeaderGeneric";
import AboutUsImg from "../assets/city.png"

function Team() {
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
    {windowWidth <=500 ? <MobileHeaderGeneric/> : <GenericHeader />}

    <div className="siteHeader" style={{background: `url(${AboutUsImg})`}} >
      <h1 style={{color:"white"}}>
        Meet our Team</h1>
    </div>

   
        <div className="row">
        <div className="col-lg-4">
        <div className="box1">
        </div>
        </div>
        <div className="media-body col-lg-4">
        <h3 className="TeamCardHeader">Name</h3>
        <p className="TeamCardDesignation" style={{ fontWeight: "400", color: "rgb(163, 163, 163)" }}>
        Designation
        </p>
        <p className="TeamCardAbout">
        About the team member
        </p>
        </div>
        </div>

        <div className="row">
        <div className="col-lg-4">
        <div className="box1">
        </div>
        </div>
        <div className="media-body col-lg-4">
        <h3 className="TeamCardHeader">Name</h3>
        <p className="TeamCardDesignation" style={{ fontWeight: "400", color: "rgb(163, 163, 163)" }}>
        Designation
        </p>
        <p className="TeamCardAbout">
        About the team member
        </p>
        </div>
        </div>

        <div className="row">
        <div className="col-lg-4">
        <div className="box1">
        </div>
        </div>
        <div className="media-body col-lg-4">
        <h3 className="TeamCardHeader">Name</h3>
        <p className="TeamCardDesignation" style={{ fontWeight: "400", color: "rgb(163, 163, 163)" }}>
        Designation
        </p>
        <p className="TeamCardAbout">
        About the team member
        </p>
        </div>
        </div>


      <Footer />
    </>
  );
}
export default Team;
