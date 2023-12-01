import React, { useEffect, useState } from "react";
import GenericHeader from "./genericHeader";
import Footer from "./footer";
import "../Css/investnow.css";
// import "../Css/tutorial.css";
import style from "../Css/tutorial.module.css"
import MobileHeaderGeneric from "./MobileHeaderGeneric";
import AboutUsImg from "../assets/city.png";
import Gallery from "./Gallery";
import TeamCards from "./TeamCards";
import user from "../assets/Unknown_person.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";

// import user from "../assets/logo-sindh.png"

import ReactPlayer from "react-player";
import healthVideo from "../assets/tutorial/healthDepartment.mp4";
import CED_001 from "../assets/tutorial/CED_001.mp4";
import healthWholesale from "../assets/tutorial/heathDepartmentwholesale.mp4";
import regionalOffice from "../assets/tutorial/regionalDirectorOffice.mp4";
import schooleDepartmentVideo from "../assets/tutorial/schoolEducationAndLiteracyDepartment.mp4";
import sindhHealthcarevideo from "../assets/tutorial/sindhHealthcare.mp4";
import ICD_001 from "../assets/tutorial/ICD-001.mp4"
import Ld_001 from "../assets/tutorial/led-001.mp4"
import ICD_002 from "../assets/tutorial/ICD-002.mp4"
//////////////////////THUMBNAIL/////////////////////
import schoolEducationDepartment from "../assets/thumbnail/schoolEducationaAndLitercaDepartment.png"
import healthDepartment from "../assets/thumbnail/healthDepartment.png"
import IndustriesAndCommerceDepartment from "../assets/thumbnail/IndustriesAndCommerceDepartmetn.png"
import labourDepartment from "../assets/thumbnail/labourDepartment.png"
import sindhHealthcare from "../assets/thumbnail/sindhHealthcare.png"
import CollegeEducationDepartment from "../assets/thumbnail/CollegeEducationDepartment.png"


const {parent_container,video_container,video,zainn,title_container,video_title,player,totlal_videos,full_videos}=style
export const tutorial = [
  {
    id: 1,
    tutorial: healthVideo,
    department: "Health Department",
    license:'dummy license',
    thumbnail:healthDepartment,
    length:3
  },
 
  {
    id: 2,
    tutorial: ICD_001,
    department: "Industries and Commerce Department",
    license:'dummy license',
    thumbnail:IndustriesAndCommerceDepartment,
    length:7
  },
  {
    id: 3,
    tutorial: Ld_001,
    department: "Labour Department",
    license:'dummy license',
    thumbnail:labourDepartment,
    length:2
  },
  {
    id: 4,
    tutorial: sindhHealthcarevideo,
    department: "Sindh Healthcare Commission",
    license:'dummy license',
    thumbnail:sindhHealthcare,
    length:1
  },
  {
    id:5,
    tutorial: schooleDepartmentVideo,
    department: "School Education and Literacy Department",
    license:'dummy license',
    thumbnail:schoolEducationDepartment,
    length:1
  },
  {
    id:6,
    tutorial: schooleDepartmentVideo,
    department: "School Education and Literacy Department",
    license:'dummy license',
    thumbnail:CollegeEducationDepartment,
    length:1
  },
];
function Team() {
  const [ hover ,setHover]=useState(false)
  const [hoverID,sethoverID]=useState()
  const [playListLength, setplayListLength] = useState(0)
//   const {id}=useParams()
//   // const [filtervideo,setfiltervideo]=useState(videos)
//   const [play, setplay] = useState(true)
//   console.log(id)

//   const [filtervideo,setfiltervideo]=useState([])
//   useEffect(()=>{
//      let zain= videos?.filter((item)=>{
//           return item.id==id?item:null
//       })
//       setfiltervideo(zain)
//   },[id])

// useEffect(()=>{
//   setplay(true)
// })


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
      {windowWidth >=500 && <div className="" style={{ height: 150 }}></div>}

      <div
        className="row "
        style={{
          // height: "250px",
          background: "",
          // backgroundColor:"red"
        }}
      >
        <div
          className="col-lg-12"
          style={{
            display: "flex",
            justifyContent: "center",
            // marginTop: "33px",
            // textAlign:"justify",
            // margin:"auto",
            position:"relative"
          }}
        >
       <div className="" >
       <h1 className={"tutorial"}>Tutorials</h1>
         <p
            className={window.innerWidth <= 540 ? "mobileparaforfeedback" : "feedbackpara col-8 mb-5"} style={{fontSize:window.innerWidth === 280 || window.innerWidth ===320 ? "17.5px": " ",textAlign:"center",}}
          >
          Project Implementation Unit CLICK has developed an interactive guide to registration of various licenses and permits required for doing business in Sindh. These tutorials provide a simple guide through the regulatory requirements to obtain a specific business license or permit.
          </p>
       </div>
        </div>
      </div>
      {/* <div className="row g-0 mb-4 d-flex justify-content-center">
        <div className="d-flex justify-content-center ">
          <h1 className="tutorial">Tutorials</h1>
        </div>
      </div> */}
      <div className=""></div>
      <div className={parent_container}>
        
          <div className={video_container}>
        {tutorial?.map(({ id,  tutorial,department,thumbnail,length},index) => {
                        return <>
                        <div className={video} onMouseEnter={()=>{
                                   setHover(true)
                                   sethoverID(index+1)
                                }} onMouseLeave={()=>{
                                 setHover(false)
                                }}>
                        <Link to={`/watch/${department}/${id}`} >
                         {length >1 &&  <div className={zainn}>
                          {/* <i class="fa-solid fa-list-music"></i> */}
                            <p className={totlal_videos}> <i class="fa-solid fa-play"  style={{color:"white"}}></i> {length} videos</p>
                          </div>}
                                    {/* <ReactPlayer
                                        url={tutorial}
                                        // controls={true}
                                        // playing={true}
                                        width={"100%"}
                                        // height={windowWidth >=1400?250:210}
                                        height={200}
                                        light={<img src={zain} style={{position:"relative",zIndex:-9999}}/>}
                                        playing={id==hoverID&& hover}
                                        className={player}
                                        style={{ border:'1px solid rgba(0, 0, 0, 0.12)',overflow: "hidden",borderRadius:5,margin:5,  boxShadow: "0 0.2rem 1rem rgba(0, 0, 0, 0.12)"}}
                                        // height={"100%"}
                                      

                                    /> */}
                                    <div className={length >1 && player}>

                                    <img src={thumbnail}
                                        width={"100%"}
                                        height={windowWidth >=1400?250:210}
                                    
                                    style={{position:"relative",zIndex:-9999,objectFit:"cover",borderRadius:5}} />
                                    </div>
                            </Link>
                            <div className={` ${title_container} `}>
                              <div className={video_title}><p className={full_videos}>{department}</p>
                              {length >1 && <p className={"full_videos"} style={{marginTop:-7,marginBottom:0,fontSize:14,color:"#808080"}}> View All Videos</p>}
                              </div>
                          
                            </div>
                        
                        </div>

                        </>
                    })}
          </div>
      </div>
      <Footer />
    </>
  );
}
export default Team;
