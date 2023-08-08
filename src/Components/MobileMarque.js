import React from "react";
function MobileMarque(props) {
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
                  <span>{props.translations['Updates'][props.language]}
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
              {props.translations['Headline'][props.language]}
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MobileMarque;
