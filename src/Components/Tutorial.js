import React, { useEffect, useState } from "react";
import GenericHeader from "./genericHeader";
import Footer from "./footer";
import "../Css/investnow.css";
import "../Css/tutorial.css";
import MobileHeaderGeneric from "./MobileHeaderGeneric";
import AboutUsImg from "../assets/city.png";
import Gallery from "./Gallery";
import TeamCards from "./TeamCards";
import user from "../assets/Unknown_person.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";
import zain from "../assets/zain.png";
// import user from "../assets/logo-sindh.png"

import ReactPlayer from "react-player";
import healthVideo from "../assets/tutorial/healthDepartment.mp4";
import healthWholesale from "../assets/tutorial/heathDepartmentwholesale.mp4";
import regionalOffice from "../assets/tutorial/regionalDirectorOffice.mp4";
import schooleDepartmentVideo from "../assets/tutorial/schoolEducationAndLiteracyDepartment.mp4";
export const videos = [
  {
    id: 1,
    tutorial: healthVideo,
    department: "Health Department",
    license:'dummy license'
  },
  {
    id: 2,
    tutorial: regionalOffice,
    department: "Regional Director Office",
    license:'dummy license'
  },
  {
    id: 3,
    tutorial: schooleDepartmentVideo,
    department: "School Education and Literacy Department",
    license:'dummy license'
  },
  {
    id: 4,
    tutorial: schooleDepartmentVideo,
    department: "Health Department",
    license:'dummy license'
  },
  {
    id: 5,
    tutorial: regionalOffice,
    department: "Regional Director Office",
    license:'dummy license'
  },
  {
    id: 6,
    tutorial: schooleDepartmentVideo,
    department: "School Education and Literacy Department",
    license:'dummy license'
  },
  {
    id: 7,
    tutorial: healthVideo,
    department: "Health Department",
    license:'dummy license'
  },
  {
    id: 8,
    tutorial: regionalOffice,
    department: "Regional Director Office",
    license:'dummy license',
    
  },
  {
    id: 9,
    tutorial: schooleDepartmentVideo,
    department: "School Education and Literacy Department",
    license:'dummy license'
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
      <div className="" style={{ height: 133 }}></div>

      <div className="row g-0 mb-4 d-flex justify-content-center">
        <div className="d-flex justify-content-center ">
          {/* <Fade top> */}
          <h1 className="tutorial">Tutorials</h1>
          {/* </Fade> */}
        </div>
      </div>
      <div className=""></div>
      <div className="parent_container">
        
          <div className="video_container">
        {videos?.map(({ tutorial,department, id },index) => {
                        return <>
                        <div className="video" onMouseEnter={()=>{
                                   setHover(true)
                                   sethoverID(index+1)
                                }} onMouseLeave={()=>{
setHover(false)
                                }}>
                        <Link to={`/watch/${department}/${id}`} >
                          <div className="zain">
                          {/* <i class="fa-solid fa-list-music"></i> */}
                            {/* <p> <i class="fa-brands fa-playstation me-1"></i> 3 videos</p> */}
                          </div>
                                    <ReactPlayer
                                        url={tutorial}
                                        // controls={true}
                                        // playing={true}
                                        width={"100%"}
                                        height={windowWidth >=1400?250:210}
                                        light={<img src={zain}/>}
                                        playing={id==hoverID&& hover}
                                        className='player'
                                        style={{ border:'1px solid rgba(0, 0, 0, 0.12)',overflow: "hidden",borderRadius:5,margin:5,  boxShadow: "0 0.2rem 1rem rgba(0, 0, 0, 0.12)"}}
                                        // height={"100%"}
                                      

                                    />
                                    {/* <img src={zain} style={{borderRadius:5}} alt="" /> */}
                                   
                                   {/* <video  
                                   style={{overflow:'hidden'}}
                    width={"100%"}
                  loop muted
                     controls={true}
                     inlist={Footer}
                     >
                                    <source src={tutorial}></source>
                                   </video> */}
                         
                            </Link>
                            <div className="title_container ms-2">
                              {/* <div className="dp">
                                <img src={user} alt="" />
                              </div> */}
                              <div className="video_title"><p>{department}</p>
                              <p> view full playlist</p>
                              </div>
                          
                            </div>
                        
                        </div>

                        </>
                    })}
          </div>
      </div>
      
      {/* <div className="" style={{ height: 800 }}></div> */}
      <Footer />
    </>
  );
}
export default Team;
