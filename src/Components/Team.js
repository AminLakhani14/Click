import React, { useEffect, useState } from "react";
import GenericHeader from "./genericHeader";
import Footer from "./footer";
import "../Css/investnow.css";
import MobileHeaderGeneric from "./MobileHeaderGeneric";
import user from "../assets/teamsPic/irshad.jpg"
import hiraPirzada from '../assets/teamsPic/hiraPirzada.png';
import fatimaSaleem from '../assets/teamsPic/fatimaSaleem.png';
import anwarAli from '../assets/teamsPic/anwarAli.jpg';
import asifKhan from '../assets/teamsPic/asifKhan.png';
import tahirAli from '../assets/teamsPic/tahirAli.png';
import PDF1 from '../assets/DownloadDocument/CAREER_PROFILE_Asif_Karim.pdf';
const members = [


  {
    dp: anwarAli,
    name: "Mr. Anwar Ali Shar, PAS",
    designation: "Project Director CLICK",
    email: "pd@business.gos.pk"
  },

  {
    dp: asifKhan,
    name: "Mr. Asif Karim",
    designation: "Senior Manager BPR",
    email: 'asif.karim@business.gos.pk',
    link: PDF1,
  },
  {
    dp: tahirAli,
    name: "Mr. Tahir Ali Khan",
    designation: "Senior Automation Specialist ",
    email: 'tahir@business.gos.pk',
    link: "https://www.linkedin.com/in/tahirakhan/"
  },
  {
    dp: user,
    name: "Mr. Irshad Siddiqui",
    designation: "Procurement Specialist",
    email: "irshad@business.gos.pk"
  },
  {
    dp: hiraPirzada,
    name: "Ms. Hira Pirzada",
    designation: "Communication Specialist",
    email: 'hira.pirzada@business.gos.pk',
    link: 'https://www.linkedin.com/in/hira-pirzada-01109b1a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    dp: fatimaSaleem,
    name: "Ms. Fatima Saleem Butt",
    designation: "Legal Specialist",
    email: 'fatima.saleem@business.gos.pk'

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
      {windowWidth <= 500 ? <div></div> : <div className="" style={{ height: 150 }}></div>}
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
                      <a href={items?.link} className={items.link && "teams_social_link"}>
                        <h5>{name}</h5>
                      </a>
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
