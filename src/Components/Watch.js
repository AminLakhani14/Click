import React from "react";
import GenericHeader from "./genericHeader";
import { useState } from "react";
import { useEffect } from "react";
import MobileHeaderGeneric from "./MobileHeaderGeneric";
import membersDp from "../assets/membersDp.avif";
import Footer from "./footer";
import "../Css/watch.css";
import user from "../assets/Unknown_person.jpg";

import ReactPlayer from "react-player";
import healthVideo from "../assets/tutorial/healthDepartment.mp4";
import healthWholesale from "../assets/tutorial/heathDepartmentwholesale.mp4";
import regionalOffice from "../assets/tutorial/regionalDirectorOffice.mp4";
import schooleDepartmentVideo from "../assets/tutorial/schoolEducationAndLiteracyDepartment.mp4";
import video5 from "../assets/ld002.mp4";
import video6 from "../assets/led-001.mp4";
import video7 from "../assets/design.mp4";
import zain from "../assets/zain.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { videos } from "./Tutorial"; 


export const members = [
  {
    id:1,
    tutorial: healthVideo,
    title: "Health Department",
  },
  {
    id:2,
    tutorial: regionalOffice,
    title: "Regional Director Office",
  },
  {
    id:3,
    tutorial: schooleDepartmentVideo,
    title: "School Education and Literacy Department",
  },
];
const Watch = () => {
  debugger
  let {id,department}=  useParams()
const [departmentFilter, setdepartmentFilter] = useState(videos)
useEffect(()=>{
  let    filterd=departmentFilter?.filter((item)=>{
    return department==item?.department ? item :undefined 
  })
setdepartmentFilter(filterd)
},[])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedVideo, setSelectedVideo] = useState(members[0].id)
  console.log("🚀 ~ file: Tutorial.js:41 ~ Tutorial ~ selectedVideo:", selectedVideo)
  // const [play, setplay] = useState(false)
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
  });


  // const [filtervideo,setfiltervideo]=useState(members)
  const [play, setplay] = useState(true)
  console.log(id)

  const [filtervideo,setfiltervideo]=useState([])
  useEffect(()=>{
     let zain= departmentFilter?.filter((item)=>{
          return item?.id==id?item:undefined
      })
      setfiltervideo(zain)
  },[id])

useEffect(()=>{
  setplay(true)
})
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
          <div className="main_video">
         {filtervideo?.map(({ tutorial, department,license,id }) => {
                        return <>
                            {/* <Link to={`/tutorial/${id}`}> */}
                                {/* <div className={["Video_box"]}> */}
                                    <ReactPlayer
                                        url={tutorial}
                                        controls={true}
                                        // playing={true}
                                        width={"100%"}
                                        // height={"490px"}
                                        style={{border:'1px solid rgba(0, 0, 0, 0.12)',overflow: "hidden",borderRadius:10,boxShadow: "0 0.2rem 1rem rgba(0, 0, 0, 0.12)"}}
                                        height={500}
                                        // light={<img src={zain}/>}
                                        playing={play}
                                        pip={true}
                                        // volume={false}

                                    />
                                   <div className="video_discription">
                                   <h1 class="text-2xl lg:text-3xl flex font-semibold">{department}</h1>
                                      <p class="text-bold">{license}</p>
                                   </div>
                                {/* </div> */}
                            {/* </Link> */}

                        </>
                    })}
          </div>
          <div className="side_video">
        {departmentFilter?.map(({ tutorial,department,license, id }) => {
                        return <>
                            <Link to={`/watch/${department}/${id}`}>
                                    {/* <ReactPlayer
                                        url={tutorial}
                                        // controls={true}
                                        // playing={true}
                                        width={"100%"}
                                        // height={210}
                                        light={<img src={zain}/>}
                                        playing={false}
                                        style={{ border:'1px solid rgba(0, 0, 0, 0.12)',overflow: "hidden",borderRadius:5,margin:5,  boxShadow: "0 0.2rem 1rem rgba(0, 0, 0, 0.12)"}}
                                        height={"100%"}
                                      

                                    /> */}
                                    <img src={zain} style={{borderRadius:5}} alt="" />
                                   
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
                            <div className="title_container">
                              {/* <div className="dp">
                                <img src={user} alt="" />
                              </div> */}
                              <div className="video_title">
                              <h6>{department}</h6>
                              <p>{license}</p>
                             
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
};

export default Watch;
