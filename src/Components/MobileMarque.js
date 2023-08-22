import React from "react";
import { translations } from "../Transalation/Transalation";
import { useSelector } from "react-redux";
function MobileMarque(props) {
  const {language} = useSelector((state)=>state.language)

  return (
    <>
      <div
        className=" pt-2 pb-4 "
        style={{ backgroundColor: "#f7f7f7", zIndex: -1, position: "relative",marginTop: "-58px" }}
      >
        <div className="body-box">
          <div className="row">
            <div className="col-lg-2 updates"
            style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start"
            }}>
              <a href="comingsoon.html">
                <button type="button" className="feedback">
                  <span>{translations['Updates'][language]}
                  </span>
                </button>
              </a>
            </div>
            <div className="col-lg-10"
            style={{
                paddingLeft: "90px",
                marginTop: "-35px",
            }}
            >
              <marquee>
              {translations['Headline'][language]}
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MobileMarque;
