import React from "react";
import GenericHeader from "./genericHeader";
import { useState } from "react";
import { useEffect } from "react";
import MobileHeaderGeneric from "./MobileHeaderGeneric";
import membersDp from "../assets/membersDp.avif";
import Footer from "./footer";
const members = [

  {
    dp: membersDp,
    name: "Mr. Irshad Siddiqui",
    designation: "Procurement Specialist",
  },
  {
    dp: membersDp,
    name: "Mr. Asif Karim",
    designation: "Senior Manager",
  },
  {
    dp: membersDp,
    name: "Mr. Tahir Ali Khan",
    designation: "Senior Automation Specialist ",
  },

  {
    dp: membersDp,
    name: "Ms. Hira Pirzada",
    designation: "Communication Specialist",
  },
  {
    dp: membersDp,
    name: "Ms. Fatima Saleem Butt",
    designation: "Legal Specialist",
  },
  {
    dp: membersDp,
    name: "Mr. Mohammad Moosa",
    designation: "Deputy Finance Manager/ Accountant",
  },
  {
    dp: membersDp,
    name: "Mr. Anwar Ali Shar, PAS",
    designation: "Mr. Anwar Ali Shar, PAS",
  },
];
const Tutorial = () => {
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
      <div className="parent_con  px-md-5  px-2">
        <div className="statistics ">
          <div className="row g-0 mb-4 d-flex justify-content-center">
            <div className="d-flex justify-content-center ">
              {/* <Fade top> */}
              <h1 className="tutorial">Tutorials</h1>
              {/* </Fade> */}
            </div>
          </div>
      <div className="">
      </div>
      <div className="parent_container">
        <div className="card_containers">
          {members?.map((items) => {
            const { dp, name, designation } = items
            return (
              <>
                <div className="cards">
                  <div className="img_container">
                    <img src={dp} alt="" />
                  </div>
                  <div className="members_information_container">
                    <div className="name">
                      <h3>{name}</h3>
                    </div>
                    <div className="emai_container">
                      <i class="fa-solid fa-envelope fa-beat-fade email"></i>
                    </div>
                  </div>
                  <div className="">{designation}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="" style={{ height: 800 }}></div>
      <Footer />
        </div>
      </div>
    </>
  );
};

export default Tutorial;
