import React, {useEffect, useState} from "react";
import "../Css/wheeler.css";
import "../Css/header.css";
import qasim from "../assets/qasim.png";
import qasimBW from "../assets/qasimBW.jpeg";
import mng1 from "../assets/teamsPic/MohammadMureedRahimoon.jpg";
import mng2 from "../assets/teamsPic/anwarAli.jpg";
import mng2BW from "../assets/mng2BW.jpeg";
import quote from "../assets/quote.png";
import muradAli from "../assets/muradalishah.png";
import muradalishahBW from "../assets/muradalishahBW.jpeg";
import { Carousel } from "@trendyol-js/react-carousel";
import { translations } from "../Transalation/Transalation";
import { useSelector } from "react-redux";

const imageMapColor = {
  "qasim_Id": qasim,
  "img2": mng1,
  "img3": mng2,
  "img4": muradAli
};  
const imageMapBW = {
  "qasim_Id": qasimBW,
  "img2": mng1,
  "img3": mng2BW,
  "img4": muradalishahBW
};

let ID = "qasim_Id"
function Message(props) {
  const {language} = useSelector((state)=>state.language)

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
  const [innerWidth,innerHeight] = useState(window)
  // shahab
  const array =[
    // {
    //   id: "qasim_Id",
    //   img:qasim,
    //   // name:"Syed Qasim Naveed Qamar",
    //   name: {
    //     en: "Syed Qasim Naveed Qamar",
    //     ur: "سید قاسم نوید قمر",
    //     sd: "سيد قاسم نويد قمر",
    //   },
    //   subtitle: {
    //     en: "Special Assistant to Chief Minister for Investment and Public Private Partnerships",
    //     ur: "وزیراعظم کے خصوصی معاون برائے سرمایہ کاری اور عوامی نجی شراکت",
    //     sd: "سردار سرکار جو انویسٽمينٽ ۽ عوامي نجي شراڪت جي لاءِ خصوصي معاون",
    //   },
    //   desc: {
    //     en: `Introducing the Sindh Investment website by CLICK, your gateway to profitable opportunities in our vibrant province. As Chief Minister of Sindh, I understand the crucial role investments play in driving economic growth. This comprehensive platform provides essential information, incentives, and seamless connections with authorities across various sectors. Join us in shaping a prosperous future for Sindh through strategic investments and unlocking its immense potential.`,
    //     ur: "کلک پر سندھ انویسٹمنٹ ویب سائٹ کا مشہوری پذیر کریں، آپ کے منافع کی ممکنات کی راہ کھولنے والے آپ کے دروازے کے طور پر. سندھ کے وزیراعلیٰ کے طور پر، میں سمجھتا ہوں کہ سرمایہ کاری کی کردار اقتصادی ترقی کو بڑھانے میں کردار ادا کرتی ہے۔ یہ مکمل پلیٹ فارم ضروری معلومات، مراعات، اور مختلف شعبوں میں اختیارات کے ساتھ بے رکاوٹ رابطے فراہم کرتا ہے. ہمارے ساتھ آئیں اور سندھ کے لئے ایک خوشحال مستقبل کو شکل دینے میں استراتیجی سرمایہ کاری کے ذریعے اور اس کے عظیم ممکنات کو کھولنے میں شامل ہوں",
    //     sd: "اسان جي متحرڪ صوبي ۾ منافعي جي موقعن لاءِ پنهنجي گيٽ وي تي ڪلڪ ڪري سنڌ انويسٽمينٽ ويب سائيٽ متعارف ڪرايو. سنڌ جي وڏي وزير جي حيثيت ۾، مان سمجهان ٿو ته سيڙپڪاري جو اهم ڪردار معاشي ترقي کي هلائڻ ۾ ادا ڪندو آهي. هي جامع پليٽ فارم مختلف شعبن ۾ اختيارين سان ضروري معلومات، ترغيب، ۽ بي ترتيب رابطا فراهم ڪري ٿو. اسٽريٽجڪ سيڙپڪاري ذريعي سنڌ جي خوشحال مستقبل کي ترتيب ڏيڻ ۽ ان جي وسيع امڪانن کي کولڻ ۾ اسان سان شامل ٿيو."
    //   },
    // },
    {
      id:"img2",
      img:mng1,
      name: {
        en: "Mohammad Mureed Rahimoon",
        ur: "تمیز الدین خیرو",
        sd: "تميز الدين ڪيريو",
      },
      subtitle: {
        en: "Secretary Investment, Government of Sindh",
        ur: "سیکرٹری سرمایہ کاری حکومت سندھ",
        sd: "سيڪريٽري سيڙپڪاري، سنڌ حڪومت",
      },
      desc: {
        en: `Introducing the Sindh Investment website by CLICK, your gateway to profitable opportunities in our vibrant province. As Chief Minister of Sindh, I understand the crucial role investments play in driving economic growth. This comprehensive platform provides essential information, incentives, and seamless connections with authorities across various sectors. Join us in shaping a prosperous future for Sindh through strategic investments and unlocking its immense potential.`,
        ur: "کلک پر سندھ انویسٹمنٹ ویب سائٹ کا مشہوری پذیر کریں، آپ کے منافع کی ممکنات کی راہ کھولنے والے آپ کے دروازے کے طور پر. سندھ کے وزیراعلیٰ کے طور پر، میں سمجھتا ہوں کہ سرمایہ کاری کی کردار اقتصادی ترقی کو بڑھانے میں کردار ادا کرتی ہے۔ یہ مکمل پلیٹ فارم ضروری معلومات، مراعات، اور مختلف شعبوں میں اختیارات کے ساتھ بے رکاوٹ رابطے فراہم کرتا ہے. ہمارے ساتھ آئیں اور سندھ کے لئے ایک خوشحال مستقبل کو شکل دینے میں استراتیجی سرمایہ کاری کے ذریعے اور اس کے عظیم ممکنات کو کھولنے میں شامل ہوں",
        sd: "اسان جي متحرڪ صوبي ۾ منافعي جي موقعن لاءِ پنهنجي گيٽ وي تي ڪلڪ ڪري سنڌ انويسٽمينٽ ويب سائيٽ متعارف ڪرايو. سنڌ جي وڏي وزير جي حيثيت ۾، مان سمجهان ٿو ته سيڙپڪاري جو اهم ڪردار معاشي ترقي کي هلائڻ ۾ ادا ڪندو آهي. هي جامع پليٽ فارم مختلف شعبن ۾ اختيارين سان ضروري معلومات، ترغيب، ۽ بي ترتيب رابطا فراهم ڪري ٿو. اسٽريٽجڪ سيڙپڪاري ذريعي سنڌ جي خوشحال مستقبل کي ترتيب ڏيڻ ۽ ان جي وسيع امڪانن کي کولڻ ۾ اسان سان شامل ٿيو."
      },
    },
    {
      id:"img3",
      img:mng2,
      name: {
        en: "Anwar Ali Shar",
        ur: "تمیز الدین خیرو",
        sd: "تميز الدين ڪيريو",
      },
      subtitle: {
        en: "Project Director CLICK, Investment Department Government of Sindh.",
        ur: "پراجیکٹ ڈائریکٹر کلک کریں، محکمہ سرمایہ کاری حکومت سندھ۔",
        sd: "پراجيڪٽ ڊائريڪٽر انويسٽمينٽ ڊپارٽمينٽ حڪومت سنڌ تي ڪلڪ ڪريو.",
      },
      desc: {
        en: `Introducing the Sindh Investment website by CLICK, your gateway to profitable opportunities in our vibrant province. As Chief Minister of Sindh, I understand the crucial role investments play in driving economic growth. This comprehensive platform provides essential information, incentives, and seamless connections with authorities across various sectors. Join us in shaping a prosperous future for Sindh through strategic investments and unlocking its immense potential.`,
        ur: "کلک پر سندھ انویسٹمنٹ ویب سائٹ کا مشہوری پذیر کریں، آپ کے منافع کی ممکنات کی راہ کھولنے والے آپ کے دروازے کے طور پر. سندھ کے وزیراعلیٰ کے طور پر، میں سمجھتا ہوں کہ سرمایہ کاری کی کردار اقتصادی ترقی کو بڑھانے میں کردار ادا کرتی ہے۔ یہ مکمل پلیٹ فارم ضروری معلومات، مراعات، اور مختلف شعبوں میں اختیارات کے ساتھ بے رکاوٹ رابطے فراہم کرتا ہے. ہمارے ساتھ آئیں اور سندھ کے لئے ایک خوشحال مستقبل کو شکل دینے میں استراتیجی سرمایہ کاری کے ذریعے اور اس کے عظیم ممکنات کو کھولنے میں شامل ہوں",
        sd: "اسان جي متحرڪ صوبي ۾ منافعي جي موقعن لاءِ پنهنجي گيٽ وي تي ڪلڪ ڪري سنڌ انويسٽمينٽ ويب سائيٽ متعارف ڪرايو. سنڌ جي وڏي وزير جي حيثيت ۾، مان سمجهان ٿو ته سيڙپڪاري جو اهم ڪردار معاشي ترقي کي هلائڻ ۾ ادا ڪندو آهي. هي جامع پليٽ فارم مختلف شعبن ۾ اختيارين سان ضروري معلومات، ترغيب، ۽ بي ترتيب رابطا فراهم ڪري ٿو. اسٽريٽجڪ سيڙپڪاري ذريعي سنڌ جي خوشحال مستقبل کي ترتيب ڏيڻ ۽ ان جي وسيع امڪانن کي کولڻ ۾ اسان سان شامل ٿيو."

      },
    },
  ]

  const [imgFormData, setimgFormData] = useState({img: array[0]?.img, name: array[0]?.name, subtitle: array[0]?.subtitle, desc: array[0]?.desc })
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
       ;
      if(event) {
        let Id = event?.target?.id
        resetImageSlider(ID)
        // document.getElementById(Id).src = muradAli;  // when click image change
       
        if (imageMapColor.hasOwnProperty(Id)) {
          document.getElementById(Id).src = imageMapColor[Id];
        }
        let CloneArr = array 
        let data= CloneArr?.filter(x=> x?.id === Id);
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
      // document.getElementById("qasim_Id").src = imageMapBW["qasim_Id"];
      document.getElementById(ID).src = imageMapColor[ID];
     }, 600);
    }   
  };
  return (
    <>
      <div className="">
        <div className="body-box mb-5">
          <div className="row">
            <div className="col-12 highlit-heading">
              <h1 className="mainHeading highlightable"> {translations["Messages"][language]}</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            {/* <div className={windowWidth >= 1900?"col-lg-3":windowWidth >=1600?"col-lg-4":windowWidth >=1400?"col-lg-4": windowWidth >=1300?"col-lg-3":"col-lg-6"}> */}
            <div className={windowWidth >= 1900?"col-lg-2":windowWidth >=1600?"col-lg-3":windowWidth >=1400?"col-lg-3": windowWidth >=1300?"col-lg-3":"col-lg-6"}>

              <Carousel
                show={2}
                slide={1}
                swiping={false}
                onRightArrowClick={handleArrowClick}
              onLeftArrowClick={handleArrowClick}
                responsive={windowWidth >=1900?false:""}
                leftArrow={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "84px",
                      marginTop: "30px",
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
                      marginTop: "30px",
                      paddingRight: "50px",
                    }}
                  >
                    <i id="right" className="fa-solid fa-angle-right"></i>
                  </div>
                }
              >
                {/* <div>
                  {" "}
                  <div className="item" onClick={clickCarouselImage}>
                    <img
                    id="qasim_Id"
                      src={array[0].img}
                      // src={qasimBW}
                      alt=""
                      width="100"
                      height="100"
                      style={{ borderRadius: "45%" }}
                    ></img>
                  </div>
                </div> */}
                <div>
                  {" "}
                  <div className="item "  onClick={clickCarouselImage}>
                    <img
                    id="img2"
                    //  src={array[1].img}
                    src={array[0]?.img}
                      alt=""
                      width="100"
                      height="100"
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
                     src={array[1]?.img}

                      // src={mng2BW}
                      alt=""
                      width="100"
                      height="100"
                      style={{ borderRadius: "50%" }}
                    ></img>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
          <div className="col-lg-4"></div>
          <div className="row">
            {/* shahab */}
            <div className="col-lg-4 mag-image">
              <img
                // src={qasim}
                src={imgFormData?.img}
                alt=""
                width={windowWidth <=1400?"320":"500"}
                height={windowWidth <=1400?"320":"500"}
                style={{ border: "0", borderRadius: "275px" }}
              ></img>
            </div>
            <div className="col-lg-8" style={windowWidth <=1440?{marginTop:"15px"}:{marginTop:"-120px"}}>
              {/* <!-- Bordered Card --> */}
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
                  <div className="media-body">
                    {/* <h3 className="title">Syed Qasim Naveed Qamar </h3> */}
                    <h3 className="title highlightable">{imgFormData.name[language]}</h3>
                    <p
                      className="card-subtitle highlightable"
                      style={
                        language === "ur" || language === "sd"
                          ? { display: "contents", fontWeight: "400", color: "rgb(163, 163, 163)" }
                          : {fontWeight: "400", color: "rgb(163, 163, 163)" }
                      }
                    >
                     {imgFormData.subtitle[language]}
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <p 
                   className={
                    language === "ur" || language === "sd"
                      ? "sub-title paragraphAlign"
                      : "sub-title text-md-start highlightable"
                  }
                  >
                  {imgFormData.desc[language]}
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
export default Message;
