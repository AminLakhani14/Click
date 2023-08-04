import React, {useEffect, useState} from "react";
import "../Css/wheeler.css"
// import Group255 from "../assets/Group 255.png"
import "../Css/wheeler.css";
import chinese from "../assets/china.png";
import chinaMobile from "../assets/chinaMobileColor.png";
import chinaMobileBlack from "../assets/chinamobileblack.png";
import engroColor from "../assets/engrocolor.png";
import engroBlack from "../assets/engroblack.png";
import dhColor from "../assets/dhcolor.png";
import dhBlack from "../assets/dhblack.png";
import quote from "../assets/quote.png";
import henry from "../assets/henry.png"
import dongxin from "../assets/dongxin.png";
import { Carousel } from "@trendyol-js/react-carousel";
import licensed from "../assets/licensed-img.png"
import chineseBW from "../assets/chinaBW.png";

const imageMapColor = {
  "GndE": chinese,
  "china": chinaMobile,
  "engroColor": engroColor,
  "dhColor": dhColor
};  
const imageMapBW = {
  "GndE": chineseBW,
  "china": chinaMobileBlack,
  "engroColor": engroBlack,
  "dhColor": dhBlack
};
let ID = "GndE"
function Testimonial() {
    const array =[
        {
          id: "GndE",
          img:chinese,
          name:'Henry Lawrence "Larry" Culp, Jr',
          subtitle:" Chairman and Chief Executive Officer",
          desc:`We have been impressed with the Sindh government's commitment to creating a favorable business environment in the province. Their efforts to improve infrastructure and streamline business regulations have made it easier for us to invest in the region, and we are excited about the opportunities that Sindh presents.`,
          mainImage:henry,
          altImage:chinese,
        },
        {
          id:"china",
          img:chinaMobile,
          name:'DONG Xin',
          subtitle:"Executive Director and Chief Executive Officer",
          desc:`The Sindh government's support for our project has been instrumental in its success. Their dedication to creating a favorable investment climate, combined with their commitment to sustainability and responsible business practices, have helped us to achieve our goals while contributing to the development of the region.`,
          mainImage:dongxin,
          altImage:chinaMobile,
        },
        {
          id:"engroColor",
          img:engroColor,
          name:'Henry Lawrence "Larry" Culp, Jr',
          subtitle:"Chairman and Chief Executive Officer",
          desc:`We have been impressed with the Sindh government's commitment to creating a favorable business environment in the province. Their efforts to improve infrastructure and streamline business regulations have made it easier for us to invest in the region, and we are excited about the opportunities that Sindh presents.`,
          mainImage:henry,
          altImage:engroColor,
        },
        {
          id:"dhColor",
          img:dhColor,
          name:'Henry Lawrence "Larry" Culp, Jr',
          subtitle:"Chairman and Chief Executive Officer",
          desc:`We have been impressed with the Sindh government's commitment to creating a favorable business environment in the province. Their efforts to improve infrastructure and streamline business regulations have made it easier for us to invest in the region, and we are excited about the opportunities that Sindh presents.`,
          mainImage:henry,
          altImage:dhColor,
        }
      ]
    
    const [imgFormData, setimgFormData] = useState({img: array[0]?.img, name: array[0]?.name, subtitle: array[0]?.subtitle, desc: array[0]?.desc ,mainImage: array[0]?.mainImage})
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      // Function to update the windowWidth state when the resize event occurs
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      // Attach the event listener
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    const resetImageSlider = (param) => {
      try {
        if(param && param !== "") {      
          if (imageMapBW.hasOwnProperty(param)) {
            document.getElementById(param).src = imageMapBW[param];
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    const clickCarouselImage = (event) => {
      try {
        debugger;
        if(event) {
          let Id = event?.target?.id

          resetImageSlider(ID)             
          if (imageMapColor.hasOwnProperty(Id)) {
            document.getElementById(Id).src = imageMapColor[Id];
          }

          let CloneArr = array //[...array];
          let data= CloneArr.filter(x=> x.id === Id);
          setimgFormData(data[0])
          ID= Id;
  
        }
  
      } catch (error) {
        console.log(error)
      }
    }
    const handleArrowClick = () => {
      if(ID !== "GndE") {
       setTimeout(() => {
        document.getElementById("GndE").src = imageMapBW["GndE"];
        document.getElementById(ID).src = imageMapColor[ID];
       }, 600);
      }   
    };
  return <>
    <div className="shadow p-5 bg-set">
        <div className="body-box">
            <div className="row">
                <div className="col-12 highlit-heading">
                    <h1 className="mainHeading" >
                        Testimonials
                    </h1>
                </div>
            </div>
             <div className="row justify-content-center">
            <div className={windowWidth <=1024?"col-lg-12":windowWidth <=1440?"col-lg-8":"col-lg-6"}>
              <Carousel
                show={3}
                slide={1}
                swiping={true}
                responsive={false}
                onRightArrowClick={handleArrowClick}
                onLeftArrowClick={handleArrowClick}
                leftArrow={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "84px",
                      marginTop: "13px",
                      paddingLeft: "15px",
                    }}
                  >
                    <i id="left" className="fa-solid fa-angle-left"></i>
                  </div>
                }
                rightArrow={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "15px",
                      paddingRight: "50px",
                    }}
                  >
                    <i id="right" className="fa-solid fa-angle-right"></i>
                  </div>
                }
              >
                <div>
                  <div className="item2" onClick={clickCarouselImage}>
                    <img
                    id="GndE"
                    src={imageMapColor.GndE}
                      alt=""
                      width="75"
                      height="75"
                      
                    ></img>
                  </div>
                </div>
                <div>
                  <div className="item2 "  onClick={clickCarouselImage}>
                    <img
                    id="china"
                      // src={imageMapColor.GndE}
                      src={imageMapBW.china}
                      alt=""
                      width="200"
                      height="75"
                      
                    ></img>
                  </div>
                  ‍
                </div>
                <div>
                  <div className="item2 "  onClick={clickCarouselImage}>
                    <img
                     id="engroColor"
                      // src={array[2].img}
                      src={imageMapBW.engroColor}
                      alt=""
                      width="120"
                      height="75"
                      
                    ></img>
                  </div>
                </div>
                <div>
                  <div className="item2 "  onClick={clickCarouselImage}>
                    <img
                     id="dhColor"
                      // src={array[3].img}
                      src={imageMapBW.dhColor}
                      alt=""
                      width="90"
                      height="75"
                      
                    ></img>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
          <div className="col-lg-4"></div>
          <div className="row">
            <div className="col-lg-4 mag-image">
              <img
               
                src={imgFormData?.mainImage}
                alt=""
                width="150"
                height="150"
                style={{ border: "0", borderRadius: "125px" }}
              ></img>
            </div>
            <div className="col-lg-8">
              <div
                className=" "
                style={{
                  border: "none",
                  borderRadius: "0",

                }}
              >
                <div
                  className="card-header d-flex flex-row "
                  style={{ border: "none" }}
                >
                  <a className="pmd-avatar-list-img" href="javascript:void(0);">
                    <img src={quote} width="60" height="60"></img>
                  </a>
                  <div className="media-body">
                    <h3 className="title">{imgFormData?.name} </h3>
                    <p
                      className="card-subtitle"
                      style={{ fontWeight: "400", color: "rgb(163, 163, 163)" }}
                    >
                     {imgFormData?.subtitle}
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="sub-title" style={{textAlign:"inherit"}}>
                    {imgFormData?.desc}
                  </p>
                </div>
              </div>
            </div>
          </div> 


        
            <div className="row mt-3">
                <div className="col-lg-3">

                </div>
                <div className="col-lg-6 vedio-content">
                    <img src={licensed} alt="" width="100%"></img>
                </div>
                <div className="col-lg-3">

                </div>
            </div>
        </div>
    </div>
  </>;
}
export default Testimonial;
