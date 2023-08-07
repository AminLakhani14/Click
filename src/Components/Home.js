import React, { useEffect, useState } from "react";
import Header from "./Header";
import Marque from './marque';
import StatisticsBar from "./statisticsBar";
import Wheeler from "./wheeler";
import Highlights from "./highlights";
import WhySindh from "./whySindh";
import Message from "./message";
import Testimonial from "./testimonial";
import Gallery from "./Gallery";
import Footer from "./footer";
import MobileHome from "./MobileHeader";
import MobileMarque from "./MobileMarque";
import MobileWheeler from "./MobileWheeler";
import MobileMessage from "./MobileMessage";
import MobileTestimonial from "./MobileTestimonial";
import MobileGallery from "./MobileGallery";
function Home(props) {
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
  const [isVisible2, setIsVisible2] = useState(true);

  const toggleVisibility = () => {
    setIsVisible2(true);
  };

  const toggleVisibility2 = () => {
    setIsVisible2(false);
  };

  const [language, setLanguage] = useState('en');

  // Function to toggle language between English, Urdu, and Sindhi
  const toggleLanguage = () => {
    if (language === 'en') {
      setLanguage('ur');
    } else if (language === 'ur') {
      setLanguage('sd');
    } else {
      setLanguage('en');
    }
  };
    // setIsUrdu((prevIsUrdu) => !prevIsUrdu);
  

  // Object containing English and Urdu translations
  const translations = {
    'hero-heading': {
      en: 'Discover the Riches of Sindh\nInvest in a Thriving Future',
      ur: 'سندھ کے دولت مند ہنر افزائی کریں۔ ایک خوشحال مستقبل میں سرمایہ کاری کریں۔',
      sd: 'سنڌ جي ڀرتي آهيو\nڀرتي ۾ سرمايو ڪريو',
    },
    'subHeroHeading': {
      en: 'Explore the Province of Sindh and Discover its many assets and Potential for Growth and Investment',
      ur: 'سندھ کے صوبے کا کھیتریں اور اس کی بے شمار خوبصورتیوں کو دریافت کریں اور ترقی اور سرمایہ کاری کے لئے اس کے ممکنات کا پتہ لگائیں۔',
      sd: 'سنڌ جي صوبائي ڪھيتريءَ ڏسو ۽ اهو جي بہت سان ھُڪرپئِوءَ ۽ مواد قوت پڇائيو آهي۔',
    },
    'investButton': {
      en: 'Invest Now',
      ur: 'ابھی سرمایہ کاری کریں',
      sd: 'هاڻي سرمايو ڪريو',
    },
    'calculatorButton': {
      en: 'Regulatory Cost Calculator',
      ur: 'ریگولیٹری لاگت کی کیلکولیٹر',
      sd: 'رائيٽورائي ڪارن ڪيلڪوليٽر',
    },
    'Login': {
      en: 'Login',
      ur: 'لاگ ان',
      sd: 'لاگ ان',
    },
    'Feedback': {
      en: 'Feedback',
      ur: 'تاثرات ',
      sd: 'رائے ',
    },

    'home': {
      en: 'Home',
      ur: 'گھر',
      sd: 'گھر',
    },
    'sindhATglance':{
      en: 'Sindh at a Glance',
      ur: 'سندھ کا مختصر جائزہ',
      sd:  'سنڌ جي خلاصو ۾',
    },
    'InvestNow':{
      en: 'Invest Now',
      ur: 'ابھی سرمایہ کاری کریں',
      sd:  'هلن سپرو جون لاگڻو',
    },
    'Manufacturing':{
      en: 'Manufacturing',
      ur: 'تعمیراتی ',
      sd:  'ٽکاري ',
    },
    'Health':{
      en: 'Health',
      ur: 'صحت',
      sd:  'صحت',
    }, 
    'InformationTechnology':{
      en: 'InformationTechnology',
      ur: 'معلوماتی تکنالوجی',
      sd:  'انفارميشن ٿيڪنالاجي',
    },
     'Energy':{
      en: 'Energy',
      ur: 'توانائی',
      sd:  'انرجي',
    }, 
    'Education':{
      en: 'Education',
      ur: 'تعلیم',
      sd:  'تعلیم',
    }, 
    'Agriculture':{
      en: 'Agriculture',
      ur: 'زراعت',
      sd:  'زرعت',
    },
    'Textile':{
      en: 'Textile',
      ur: 'کپڑا',
      sd:  'ٽيڪسٽائل',
    },
    'Tourism':{
      en: 'Tourism',
      ur: 'سياحت',
      sd:  'سياحت',
    },
    'Talktoexpert':{
      en: 'Talk to expert',
      ur: 'ماہر سے بات کریں',
      sd:  'ماھر سان ٽوڪ',
    },
    'Opportunities':{
      en: 'Sector & Opportunities',
      ur: ' شعبہ اور مواقع',
      sd:  'سيڪٽرز ۽ موقعون',
    },
    'NewsInformation':{
      en: 'News & Information',
      ur: 'خبروں اور معلومات',
      sd:  'خبريون ۽ انفارميشن ',
    },
    'Resources':{
      en: 'Resources',
      ur: 'وسائل',
      sd:  'وسائل',
    },
    'Download':{
      en: 'Download',
      ur: 'ڈاؤن لوڈ',
      sd:  'ڊائون لوڊ ڪريو ',
    },
    'RegulatoryCatalog':{
      en: 'Regulatory Catalog',
      ur: ' رولز اور قانون کا تلاشی ریکارڈ',
      sd: 'ريگوليٽري ڪيٽيلاگ',
    },
    'Aboutus':{
      en: 'About us',
      ur: 'ہمارے بارے میں',
      sd: 'اسان جي باريءَ',
    },
    'Vision':{
      en: 'Vision',
      ur: 'وژن',
      sd:  'ويژن',
    },
    'Components':{
      en: 'Components',
      ur: 'اجزاء',
      sd:  'اجزاء',
    },
    'CLICKSID':{
      en: 'CLICK SID',
      ur: 'کلک کریں سڈ',
      sd: 'ڪلڪ ڪريو سڊ',
    },
     'OurTeam':{
      en: 'Our Team',
      ur: 'ہماری ٹیم',
      sd: 'اسان جي ٽيم',
    },
     'Maps':{
      en: 'Maps',
      ur: 'نقشے ',
      sd:  'نقشون ',
    },
    'Updates':{
      en: 'Updates',
      ur: 'اپ ڈیٹس',
      sd:  'اپ ڊيٽس',
    },
    'Headline':{
      en: 'PIU-CLICK LGD is soliciting applications for Procurement &Contracts Management Specialist & Manager Finance. Interestedapplicants should carefully read the vacancy announcement on our social media pages.',
      ur: 'PIU-CLICK LGD خرید و فری برتاری اختصاصیت اور مینیجر مالیت کے لئے درخواستیں طلب کر رہا ہے۔ دلچسپی رکھنے والے امیدواروں کو ہماری سوشل میڈیا صفحات پر خالی طلب کا اعلان میں دیکھنا چاہئے۔',
      sd: "PIU-CLICK LGD خريد ۽ فري برتاري اختصاصيت ۽ منيجر ماليت لاءِ درخواستن تلب ڪرڻ ۾ آهي۔ دلچسپي رکندڙ اميدوارن کي ۾ جون آعلان ٽڪرائي سوشل ميڊيا صفحن ۾ وڄيڻ چاهيو ويندو.",
    },

  };

  return (
    <>
     {windowWidth <=500 ?<MobileHome language={language} setLanguage={setLanguage} toggleLanguage={toggleLanguage} translations={translations} />:
     <Header  language={language} setLanguage={setLanguage} toggleLanguage={toggleLanguage} translations={translations}/>
    }
    {windowWidth <=500 ?<MobileMarque language={language} setLanguage={setLanguage} toggleLanguage={toggleLanguage} translations={translations}/>:""
    // <Marque />
   }
     <StatisticsBar language={language} setLanguage={setLanguage} toggleLanguage={toggleLanguage} translations={translations}/>
     {windowWidth <=500 ?<MobileWheeler  isVisible2={isVisible2} toggleVisibility={toggleVisibility} toggleVisibility2={toggleVisibility2}/>:
     <Wheeler />
    }
     <Highlights/>
     <WhySindh />
     {windowWidth <=500 ?<MobileMessage />:
     <Message />}
     {windowWidth <=500 ?<MobileTestimonial />:
     <Testimonial />}

     {windowWidth <=500 ?<MobileGallery />:
     <Gallery />}
     
     <Footer isVisible2={isVisible2}/>
    </>
  );
}
export default Home;
