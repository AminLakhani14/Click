import React, {useState} from "react";
import "../Css/wheeler.css";
import qasim from "../assets/qasim.png";
import qasimBW from "../assets/qasimBW.jpeg";
import mng1 from "../assets/mng1.png";
import mng1BW from "../assets/mng1BW.jpeg";
import mng2 from "../assets/mng2.png";
import mng2BW from "../assets/mng2BW.jpeg";
import quote from "../assets/quote.png";
import muradAli from "../assets/muradalishah.png";
import muradalishahBW from "../assets/muradalishahBW.jpeg";
import { Carousel } from "@trendyol-js/react-carousel";

const imageMapColor = {
  "qasim_Id": qasim,
  "img2": mng1,
  "img3": mng2,
  "img4": muradAli
};  
const imageMapBW = {
  "qasim_Id": qasimBW,
  "img2": mng1BW,
  "img3": mng2BW,
  "img4": muradalishahBW
};

let ID = "qasim_Id"
function  MobileMessage() {
  const [innerWidth,innerHeight] = useState(window)
  // shahab
  const array =[
    {
      id: "qasim_Id",
      img:qasim,
      name:"Syed Qasim Naveed Qamar",
      subtitle:" Special Assistant to Chief Minister for Investment and Public Private Partnerships",
      desc:`The purpose of Local Government Department of Sindh and Competitive & Livable City of Karachi- CLICK Project is to  provide an organized system where councils exercise their  power and responsibilities to work together for peace, order
      and good governance of their municipal districts and this is
      what we are working together. Local Government Sindh is
      design with the purpose of creating order in ways that serve
      our general public democratically, it serves a two-fold
      purpose. No political system is considered complete and
      democratic if it does not have a system of strong Local
      Government.`,
    },
    {
      id:"img2",
      img:mng1,
      name:"Syed Qasim Naveed Qamar",
      subtitle:"Special Assistant to Chief Minister for Investment and Public Private Partnerships",
      desc:`The purpose of Local Government Department of Sindh and Competitive & Livable City of Karachi- CLICK Project is to  provide an organized system where councils exercise their  power and responsibilities to work together for peace, order
      and good governance of their municipal districts and this is
      what we are working together. Local Government Sindh is
      design with the purpose of creating order in ways that serve
      our general public democratically, it serves a two-fold
      purpose. No political system is considered complete and
      democratic if it does not have a system of strong Local
      Government.`,
    },
    {
      id:"img3",
      img:mng2,
      name:"Syed Qasim Naveed Qamar",
      subtitle:"Special Assistant to Chief Minister for Investment and Public Private Partnerships",
      desc:`The purpose of Local Government Department of Sindh and Competitive & Livable City of Karachi- CLICK Project is to  provide an organized system where councils exercise their  power and responsibilities to work together for peace, order
      and good governance of their municipal districts and this is
      what we are working together. Local Government Sindh is
      design with the purpose of creating order in ways that serve
      our general public democratically, it serves a two-fold
      purpose. No political system is considered complete and
      democratic if it does not have a system of strong Local
      Government.`,
    },
    {
      id:"img4",
      img:muradAli,
      name:"Syed Qasim Naveed Qamar",
      subtitle:" Special Assistant to Chief Minister for Investment and Public Private Partnerships",
      desc:`The purpose of Local Government Department of Sindh and Competitive & Livable City of Karachi- CLICK Project is to  provide an organized system where councils exercise their  power and responsibilities to work together for peace, order
      and good governance of their municipal districts and this is
      what we are working together. Local Government Sindh is
      design with the purpose of creating order in ways that serve
      our general public democratically, it serves a two-fold
      purpose. No political system is considered complete and
      democratic if it does not have a system of strong Local
      Government.`,
    }
  ]

  const [imgFormData, setimgFormData] = useState({img: array[0].img, name: array[0].name, subtitle: array[0].subtitle, desc: array[0].desc })
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
        // document.getElementById(Id).src = muradAli;  // when click image change
       
        if (imageMapColor.hasOwnProperty(Id)) {
          document.getElementById(Id).src = imageMapColor[Id];
        }
        let CloneArr = array 
        let data= CloneArr.filter(x=> x.id === Id);
        setimgFormData(data[0])
        ID= Id;
      }

    } catch (error) {
      console.log(error)
    }
  }
  const handleArrowClick = () => {
    if(ID !== "qasim_Id") {
     setTimeout(() => {
      document.getElementById("qasim_Id").src = imageMapBW["qasim_Id"];
      document.getElementById(ID).src = imageMapColor[ID];
     }, 600);
    }   
  };
  return (
    <>
      <div className="pt-5 px-2">
        <div className="body-box">
          <div className="row">
            <div className="col-12 ">
            <h1 style={{color: "#054a91", fontWeight: "700",
                    fontFamily: "Crimson Pro !important",
                    fontSize: "30px",
                    marginLeft: "-30px"
               }}>Messages</h1>
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <div style={{width:"70%"}}>
              <Carousel
                show={1}
                slide={1}
                swiping={true}
                onRightArrowClick={handleArrowClick}
              onLeftArrowClick={handleArrowClick}
                leftArrow={
                  <div
                    style={{
                      width: "62px",
                      marginTop: "33px",
                    }}
                  >
                    <i id="left" className="fa-solid fa-angle-left"></i>
                  </div>
                }
                rightArrow={
                  <div
                    style={{
                      marginTop: "33px",
                      marginRight: "0px"
                    }}
                  >
                    <i id="right" className="fa-solid fa-angle-right"></i>
                  </div>
                }
              >
                <div>
                  {" "}
                  <div className="item" onClick={clickCarouselImage}>
                    <img
                    id="qasim_Id"
                      src={array[0].img}
                      // src={qasimBW}
                      alt=""
                      width="110"
                      height="110"
                      style={{ borderRadius: "45%",display:"flex",justifyContent:"center" }}
                    ></img>
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="item "  onClick={clickCarouselImage}>
                    <img
                    id="img2"
                    //  src={array[1].img}
                    src={mng1BW}
                      alt=""
                      width="110"
                      height="110"
                      style={{ borderRadius: "45%" }}
                    ></img>
                  </div>
                  ‍
                </div>
                <div>
                  <div className="item "  onClick={clickCarouselImage}>
                    {" "}
                    <img
                     id="img3"
                      // src={array[2].img}
                      src={mng2BW}
                      alt=""
                      width="110"
                      height="110"
                      style={{ borderRadius: "45%" }}
                    ></img>
                  </div>
                </div>
                <div>
                  <div className="item "  onClick={clickCarouselImage}>
                    {" "}
                    <img
                     id="img4"
                      // src={array[3].img}
                      src={muradalishahBW}
                      alt=""
                      width="110"
                      height="110"
                      style={{ borderRadius: "45%" }}
                    ></img>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
          <div className="col-lg-4"></div>
          <div className="row">
            <div className="col-lg-8">
              <div
                className=" "
                style={{
                  border: "none",
                  borderRadius: "0",
                  background: "#ffffff",
                }}
              >
                <div
                  className="card-header d-flex flex-row "
                  style={{ border: "none" }}
                >
                  <a className="pmd-avatar-list-img" href="javascript:void(0);">
                    <img src={quote} width="60" height="60"></img>
                  </a>
                  <div className="media-body" style={{width:"304px"}}>
                    {/* <h3 className="title">Syed Qasim Naveed Qamar </h3> */}
                    <h3 className="title">{imgFormData.name} </h3>
                    <p
                      className="card-subtitle"
                      style={{ fontWeight: "400", color: "rgb(163, 163, 163)",textAlign:"left"}}
                    >
                     {imgFormData.subtitle}
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="sub-title">
                    {imgFormData.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MobileMessage;
