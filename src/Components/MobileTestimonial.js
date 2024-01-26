import React, { useEffect, useState } from "react";
import "../Css/wheeler.css"
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
import { translations } from "../Transalation/Transalation";
import { useSelector } from "react-redux";

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
function MobileTestimonial(props) {
  const { language } = useSelector((state) => state.language)

  const array = [
    {
      id: "GndE",
      img: chinese,
      name: {
        en: 'Henry Lawrence "Larry" Culp, Jr',
        ur: 'ہنری لارنس "لیری" کلپ، جونیئر',
        sd: 'هينري لارنس "ليري" ڪلپ، جونيئر',
      },
      subtitle: {
        en: 'Chairman and Chief Executive Officer',
        ur: 'چیئرمین اور چیف ایگزیکٹو آفیسر',
        sd: 'چيئرمين ۽ چيف ايگزيڪيوٽو آفيسر',
      },
      desc: {
        en: `We have been impressed with the Sindh government's commitment to creating a favorable business environment in the province. Their efforts to improve infrastructure and streamline business regulations have made it easier for us to invest in the region, and we are excited about the opportunities that Sindh presents.`,
        ur: "ہم صوبے میں کاروبار کے لیے سازگار ماحول پیدا کرنے کے لیے حکومت سندھ کے عزم سے بہت متاثر ہوئے ہیں۔ انفراسٹرکچر کو بہتر بنانے اور کاروباری ضوابط کو ہموار کرنے کی ان کی کوششوں نے ہمارے لیے خطے میں سرمایہ کاری کو آسان بنا دیا ہے، اور ہم سندھ کے پیش کردہ مواقع کے بارے میں پرجوش ہیں",
        sd: 'اسان صوبي ۾ ڪاروباري ماحول پيدا ڪرڻ لاءِ سنڌ حڪومت جي عزم کان متاثر ٿيا آهيون. بنيادي ڍانچي کي بهتر بڻائڻ ۽ ڪاروباري ضابطن کي منظم ڪرڻ لاءِ انهن جي ڪوششن اسان لاءِ خطي ۾ سيڙپڪاري ڪرڻ کي آسان بڻائي ڇڏيو آهي، ۽ اسان انهن موقعن لاءِ پرجوش آهيون جيڪي سنڌ پيش ڪري رهيا آهن.',
      },
      mainImage: henry,
      altImage: chinese,
    },
    {
      id: "china",
      img: chinaMobile,
      name: {
        en: 'DONG Xin',
        ur: 'ڈونگ زین',
        sd: 'ڈونگ زین',
      },
      subtitle: {
        en: 'Executive Director and Chief Executive Officer',
        ur: 'ایگزیکٹو ڈائریکٹر اور چیف ایگزیکٹو آفیسر',
        sd: 'ايگزيڪيوٽو ڊائريڪٽر ۽ چيف ايگزيڪيوٽو آفيسر',
      },
      desc: {
        en: `The Sindh government's support for our project has been instrumental in its success. Their dedication to creating a favorable investment climate, combined with their commitment to sustainability and responsible business practices, have helped us to achieve our goals while contributing to the development of the region.`,
        ur: 'ہمارے منصوبے کی کامیابی میں سندھ حکومت کا تعاون اہم ہے۔ سرمایہ کاری کے لیے سازگار ماحول پیدا کرنے کے لیے ان کی لگن، پائیداری اور ذمہ دارانہ کاروباری طریقوں کے لیے ان کے عزم کے ساتھ مل کر، خطے کی ترقی میں اپنا حصہ ڈالتے ہوئے اپنے مقاصد کو حاصل کرنے میں ہماری مدد کرتی ہے',
        sd: 'اسان جي منصوبي لاءِ سنڌ حڪومت جي مدد ان جي ڪاميابي ۾ اهم ڪردار ادا ڪري رهي آهي. هڪ سازگار سيڙپڪار ماحول پيدا ڪرڻ لاءِ انهن جي وقف، استحڪام ۽ ذميوار ڪاروباري عملن جي انهن جي عزم سان گڏ، خطي جي ترقي ۾ حصو وٺندي اسان کي پنهنجا مقصد حاصل ڪرڻ ۾ مدد ڪئي آهي',
      },
      mainImage: dongxin,
      altImage: chinaMobile,
    },
    {
      id: "engroColor",
      img: engroColor,
      name: {
        en: 'Henry Lawrence "Larry" Culp, Jr',
        ur: 'ہنری لارنس "لیری" کلپ، جونیئر',
        sd: 'هينري لارنس "ليري" ڪلپ، جونيئر',
      },
      subtitle: {
        en: 'Chairman and Chief Executive Officer',
        ur: 'چیئرمین اور چیف ایگزیکٹو آفیسر',
        sd: 'چيئرمين ۽ چيف ايگزيڪيوٽو آفيسر',
      },
      desc: {
        en: `We have been impressed with the Sindh government's commitment to creating a favorable business environment in the province. Their efforts to improve infrastructure and streamline business regulations have made it easier for us to invest in the region, and we are excited about the opportunities that Sindh presents.`,
        ur: "ہم صوبے میں کاروبار کے لیے سازگار ماحول پیدا کرنے کے لیے حکومت سندھ کے عزم سے بہت متاثر ہوئے ہیں۔ انفراسٹرکچر کو بہتر بنانے اور کاروباری ضوابط کو ہموار کرنے کی ان کی کوششوں نے ہمارے لیے خطے میں سرمایہ کاری کو آسان بنا دیا ہے، اور ہم سندھ کے پیش کردہ مواقع کے بارے میں پرجوش ہیں",
        sd: 'اسان صوبي ۾ ڪاروباري ماحول پيدا ڪرڻ لاءِ سنڌ حڪومت جي عزم کان متاثر ٿيا آهيون. بنيادي ڍانچي کي بهتر بڻائڻ ۽ ڪاروباري ضابطن کي منظم ڪرڻ لاءِ انهن جي ڪوششن اسان لاءِ خطي ۾ سيڙپڪاري ڪرڻ کي آسان بڻائي ڇڏيو آهي، ۽ اسان انهن موقعن لاءِ پرجوش آهيون جيڪي سنڌ پيش ڪري رهيا آهن.',
      },
      mainImage: henry,
      altImage: engroColor,
    },
    {
      id: "dhColor",
      img: dhColor,
      name: {
        en: 'Henry Lawrence "Larry" Culp, Jr',
        ur: 'ہنری لارنس "لیری" کلپ، جونیئر',
        sd: 'هينري لارنس "ليري" ڪلپ، جونيئر',
      },
      subtitle: {
        en: 'Chairman and Chief Executive Officer',
        ur: 'چیئرمین اور چیف ایگزیکٹو آفیسر',
        sd: 'چيئرمين ۽ چيف ايگزيڪيوٽو آفيسر',
      },
      desc: {
        en: `We have been impressed with the Sindh government's commitment to creating a favorable business environment in the province. Their efforts to improve infrastructure and streamline business regulations have made it easier for us to invest in the region, and we are excited about the opportunities that Sindh presents.`,
        ur: "ہم صوبے میں کاروبار کے لیے سازگار ماحول پیدا کرنے کے لیے حکومت سندھ کے عزم سے بہت متاثر ہوئے ہیں۔ انفراسٹرکچر کو بہتر بنانے اور کاروباری ضوابط کو ہموار کرنے کی ان کی کوششوں نے ہمارے لیے خطے میں سرمایہ کاری کو آسان بنا دیا ہے، اور ہم سندھ کے پیش کردہ مواقع کے بارے میں پرجوش ہیں",
        sd: 'اسان صوبي ۾ ڪاروباري ماحول پيدا ڪرڻ لاءِ سنڌ حڪومت جي عزم کان متاثر ٿيا آهيون. بنيادي ڍانچي کي بهتر بڻائڻ ۽ ڪاروباري ضابطن کي منظم ڪرڻ لاءِ انهن جي ڪوششن اسان لاءِ خطي ۾ سيڙپڪاري ڪرڻ کي آسان بڻائي ڇڏيو آهي، ۽ اسان انهن موقعن لاءِ پرجوش آهيون جيڪي سنڌ پيش ڪري رهيا آهن.',
      },
      mainImage: henry,
      altImage: dhColor,
    }
  ]

  const [imgFormData, setimgFormData] = useState({ img: array[0]?.img, name: array[0]?.name, subtitle: array[0]?.subtitle, desc: array[0]?.desc, mainImage: array[0]?.mainImage })
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
      if (param && param !== "") {
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
      if (event) {
        let Id = event?.target?.id

        resetImageSlider(ID)
        if (imageMapColor.hasOwnProperty(Id)) {
          document.getElementById(Id).src = imageMapColor[Id];
        }

        let CloneArr = array //[...array];
        let data = CloneArr.filter(x => x.id === Id);
        setimgFormData(data[0])
        ID = Id;

      }

    } catch (error) {
      console.log(error)
    }
  }
  const handleArrowClick = () => {
    if (ID !== "GndE") {
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
          <div className="col-12 ">
            <h1 className="highlightable" style={{
              color: "#054a91", fontWeight: "700",
              fontFamily: "Crimson Pro !important",
              fontSize: "30px",
              marginLeft: "-30px"
            }}>{translations["Testimonials"][language]}</h1>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className={windowWidth <= 1024 ? "col-lg-12" : windowWidth <= 1440 ? "col-lg-8" : "col-lg-6"}>
            <Carousel
              show={1}
              slide={1}
              swiping={true}
              responsive={false}
              onRightArrowClick={handleArrowClick}
              onLeftArrowClick={handleArrowClick}
              leftArrow={
                <div
                  style={{
                    width: "65px",
                    marginTop: "13px",
                  }}
                >
                  <i id="left" className="fa-solid fa-angle-left"></i>
                </div>
              }
              rightArrow={
                <div
                  style={{
                    marginTop: "15px",
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
                <div className="item2 " onClick={clickCarouselImage}>
                  <img
                    id="china"
                    src={imageMapBW.china}
                    alt=""
                    width="95"
                    height="75"

                  ></img>
                </div>
                ‍
              </div>
              <div>
                <div className="item2 " onClick={clickCarouselImage}>
                  <img
                    id="engroColor"
                    src={imageMapBW.engroColor}
                    alt=""
                    width="75"
                    height="75"

                  ></img>
                </div>
              </div>
              <div>
                <div className="item2 " onClick={clickCarouselImage}>
                  <img
                    id="dhColor"
                    src={imageMapBW.dhColor}
                    alt=""
                    width="75"
                    height="75"

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
                  <h3 className="title highlightable">{imgFormData?.name[language]}</h3>
                  <p
                    className="card-subtitle highlightable"
                    style={
                      language === "ur" || language === "sd"
                        ? { display: "contents", fontWeight: "400", color: "rgb(163, 163, 163)" }
                        : { fontWeight: "400", color: "rgb(163, 163, 163)" }
                    }
                  >
                    {imgFormData?.subtitle[language]}
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <p className="sub-title highlightable"
                  style={
                    language === "ur" || language === "sd"
                      ? { textAlign: "end" }
                      : { textAlign: "inherit" }
                  }>
                  {imgFormData?.desc[language]}
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
export default MobileTestimonial;
