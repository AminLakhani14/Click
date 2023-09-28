import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import GenericHeader from "./genericHeader";

function ComingSoon() {

  return (
    <>
    <GenericHeader/>
    <div>
    <div style={{display: "flex",justifyContent:"center",height:"100vh",alignItems:"center"}}>
    <div style={{ width:"320px",textAlign:"center",height:"80px",}}>
    <h1 className="highlightable" style={{fontSize: "60px", marginTop: "10px",fontWeight:"700",color:"#054a91", fontFamily: "Crimson Pro"}}>coming soon</h1>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}
export default ComingSoon;
