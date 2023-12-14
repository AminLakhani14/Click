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
import PDF1 from '../assets/DownloadDocument/CAREER_PROFILE_Asif_Karim.pdf';

const members = [
  
  
   { dp: anwarAli,
    // PDF: PDF,
    name: "Mr. Anwar Ali Shar, PAS",
    designation: "Project Director CLICK",
    email:"pd@business.gos.pk"
  },
    
  {
    dp: asifKhan,
    PDF: PDF1,
    name: "Mr. Asif Karim",
    designation: "Senior Manager (Business Process Regulation)",
    email:'asif.karim@business.gos.pk'
  },
 
  {
    dp: hiraPirzada,
    // PDF: PDF2,
    name: "Ms. Hira Pirzada",
    designation: "Communication Specialist",
    email:'hira.pirzada@business.gos.pk'
  },
  {
    dp: fatimaSaleem,
    // PDF: PDF3,
    name: "Ms. Fatima Saleem Butt",
    designation: "Legal Specialist",
    email:'fatima.saleem@business.gos.pk'

  },
  {
    dp: tahirAli,
    // PDF: PDF4,
    name: "Mr. Tahir Ali Khan",
    designation: "Senior Automation Specialist ",
    email:'tahir@business.gos.pk'
  }, 
  // {

  //   dp: user,
  //   name: "Mr. Mohammad Moosa",
  //   designation: "Deputy Finance Manager/ Accountant",
  // },
  {
    dp: user,
    // PDF: PDF5,
    name: "Mr. Irshad Siddiqui",
    designation: "Procurement Specialist",
    email:"irshad@business.gos.pk"
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
      {windowWidth <= 500 ? <div></div> :       <div className="" style={{ height: 133 }}></div>}
      {/* <div className="" style={{ height: 133 }}></div> */}
      {/* <div className="siteHeader" style={{ background: `url(${AboutUsImg})` }}> */}
        {/* <h1 className="highlightable" style={{ color: "white" }}>
          Meet our Team
        </h1>
        <p className="w-50 text-center text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam a
          reprehenderit pariatur quam accusamus fugiat hic quasi, odio excepturi
          ullam, at obcaecati. Ratione fugit exercitationem illo ullam
          aspernatur ipsam quos, velit tempore omnis, voluptates placeat sed
          assumenda sunt nulla suscipit amet maxime tempora, distinctio
          voluptas. Voluptate alias assumenda aut hic!
        </p> */}
        {/* <div className="card_container">
          
          <div className="cards">
           <div className="image_container">
            <img src={AboutUsImg} alt="" />
           </div>
           <div className="about_container">
            <div className="name">
              <h3>Mr. Asif Karim</h3>
            </div>
            <div className="socialmedia">
              email
            </div>
           </div>
           <div className="designation">
            <h4>Senior Manager Business Process Regulation (BPR)</h4>
           </div>
          </div>
        </div> */}
        {/* <Gallery/> */}
        {/* <div className="parent">
        <div className="card_container justify-content-between px-5 w-80">
  <div className="col-4 cards ">
    <div className="image_container">
            <img src={AboutUsImg} alt="" />
           </div>
           <div className="about_container">
            <div className="name">
              <h3>Mr. Asif Karim</h3>
            </div>
            <div className="socialmedia">
              email
            </div>
           </div>
           <div className="designation">
            <h4>Senior Manager Business Process Regulation (BPR)</h4>
           </div>
  </div>
  <div className="col-4 cards "></div>
  <div className="col-4 cards "></div>
</div>
        </div> */}
      {/* </div> */}

      {/* <div className="row">
        <div className="col-lg-4">
        <div className="box1">
        </div>
        </div>
        <div className="media-body col-lg-4">
        <h3 className="TeamCardHeader highlightable">Name</h3>
        <p className="TeamCardDesignation highlightable" style={{ fontWeight: "400", color: "rgb(163, 163, 163)" }}>
        Designation
        </p>
        <p className="TeamCardAbout highlightable">
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
        <h3 className="TeamCardHeader highlightable">Name</h3>
        <p className="TeamCardDesignation highlightable" style={{ fontWeight: "400", color: "rgb(163, 163, 163)" }}>
        Designation
        </p>
        <p className="TeamCardAbout highlightable">
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
        <h3 className="TeamCardHeader highlightable">Name</h3>
        <p className="TeamCardDesignation highlightable" style={{ fontWeight: "400", color: "rgb(163, 163, 163)" }}>
        Designation
        </p>
        <p className="TeamCardAbout highlightable">
        About the team member
        </p>
        </div>
        </div> */}

      {/* <TeamCards/> */}
      <h1 className="highlightable Meet MeetourTeam" style={{ color: "whit" }}>
          Meet our Team
        </h1>
<div className="">

</div>
      <div className="parent_container">
   
        <div className="card_containers">
      
          {members?.map((items,index) => {
            const {dp,PDF,name,designation}=items
            return (
              <>
                <div className="cards" key={index}>
                  <div className="img_container">
                    <img src={dp} alt="" />
                  </div>
                  <div className="members_information_container">
                    <div className="name">
                      <h5> <a href={PDF} target="_blank">{name}</a></h5>
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
 {/* <div className="" style={{height:300}}></div> */}
      <Footer />
    </>
  );
  
}
export default Team;
