import React from "react";
function MobileMarque() {
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
                  <span>Updates</span>
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
                PIU-CLICK LGD is soliciting applications for Procurement &
                Contracts Management Specialist & Manager Finance. Interested
                applicants should carefully read the vacancy announcement on our
                social media pages.
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MobileMarque;
