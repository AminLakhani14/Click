import React, { useEffect, useState } from "react";
import GenericHeader from "./genericHeader";
import Footer from "./footer";
import "../Css/investnow.css";
import MobileHeaderGeneric from "./MobileHeaderGeneric";
import AboutUsImg from "../assets/city.png";
import Gallery from "./Gallery";
import TeamCards from "./TeamCards";
import user from "../assets/teamsPic/irshad.jpg"
import hiraPirzada from '../assets/teamsPic/hiraPirzada.png';
import fatimaSaleem from '../assets/teamsPic/fatimaSaleem.png';
import anwarAli from '../assets/teamsPic/anwarAli.jpg';
import asifKhan from '../assets/teamsPic/asifKhan.png';
import tahirAli from '../assets/teamsPic/tahirAli.png';

const members = [


  {
    dp: anwarAli,
    name: "Mr. Anwar Ali Shar, PAS",
    designation: "Project Director",
    email: "pd@business.gos.pk"
  },

  {
    dp: asifKhan,
    name: "Mr. Asif Karim",
    designation: "Senior Manager BPR",
    email: 'asif.karim@business.gos.pk'
  },

  {
    dp: hiraPirzada,
    name: "Ms. Hira Pirzada",
    designation: "Communication Specialist",
    email: 'hira.pirzada@business.gos.pk'
  },
  {
    dp: fatimaSaleem,
    name: "Ms. Fatima Saleem Butt",
    designation: "Legal Specialist",
    email: 'fatima.saleem@business.gos.pk'

  },
  {
    dp: tahirAli,
    name: "Mr. Tahir Ali Khan",
    designation: "Senior Automation Specialist ",
    email: 'tahir@business.gos.pk'
  },
  // {

  //   dp: user,
  //   name: "Mr. Mohammad Moosa",
  //   designation: "Deputy Finance Manager/ Accountant",
  // },
  {
    dp: user,
    name: "Mr. Irshad Siddiqui",
    designation: "Procurement Specialist",
    email: "irshad@business.gos.pk"
  }

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
      {windowWidth <= 500 ? <div></div> : <div className="" style={{ height: 133 }}></div>}
      <h1 className="highlightable Meet MeetourTeam" style={{ color: "whit" }}>
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
                      <h5>{name}</h5>
                    </div>
                    <div className="emai_container">
                      <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${items?.email}`} target="_blank"><i class="fa-solid fa-envelope fa-beat-fade email"></i></a>
                    </div>
                  </div>
                  <div className="">{designation}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Team;
