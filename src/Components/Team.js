import React, { useEffect, useState } from "react";
import GenericHeader from "./genericHeader";
import Footer from "./footer";
import "../Css/investnow.css";
import MobileHeaderGeneric from "./MobileHeaderGeneric";
import AboutUsImg from "../assets/city.png";
import membersDp from "../assets/membersDp.avif";
import Gallery from "./Gallery";
import TeamCards from "./TeamCards";

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
function Team() {
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
      <div className="" style={{ height: 133 }}></div>
      {/* <TeamCards/> */}
      <h1 className="highlightable" style={{ color: "whit" }}>
        Meet our Team
      </h1>
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
    </>
  );
}
export default Team;
