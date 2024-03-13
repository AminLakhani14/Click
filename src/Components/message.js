import React, { useEffect, useState } from "react";
import "../Css/wheeler.css";
import "../Css/header.css";
import CMsindh from "../assets/muradalishah.png";
import SecretaryInvestment from "../assets/teamsPic/SecretaryInvestment.JPG";
import mng2 from "../assets/teamsPic/anwarAli.jpg";
import quote from "../assets/quote.png";
import ChiefSecretarySindh from "../assets/ChiefSecretarySindh.png";
import { Carousel } from "@trendyol-js/react-carousel";
import { translations } from "../Transalation/Transalation";
import { useSelector } from "react-redux";

const imageMapColor = {
  // "qasim_Id": qasim,
  img2: SecretaryInvestment,
  img3: mng2,
  img4: CMsindh,
  img5: ChiefSecretarySindh,
};
const imageMapBW = {
  // "qasim_Id": qasimBW,
  img2: SecretaryInvestment,
  img3: mng2,
  img4: CMsindh,
  img5: ChiefSecretarySindh,
};

let ID = "qasim_Id";
function Message(props) {
  const { language } = useSelector((state) => state.language);

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
  const [innerWidth, innerHeight] = useState(window);
  // shahab
  const array = [
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
      id: "img2",
      img: SecretaryInvestment,
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
        sd: "اسان جي متحرڪ صوبي ۾ منافعي جي موقعن لاءِ پنهنجي گيٽ وي تي ڪلڪ ڪري سنڌ انويسٽمينٽ ويب سائيٽ متعارف ڪرايو. سنڌ جي وڏي وزير جي حيثيت ۾، مان سمجهان ٿو ته سيڙپڪاري جو اهم ڪردار معاشي ترقي کي هلائڻ ۾ ادا ڪندو آهي. هي جامع پليٽ فارم مختلف شعبن ۾ اختيارين سان ضروري معلومات، ترغيب، ۽ بي ترتيب رابطا فراهم ڪري ٿو. اسٽريٽجڪ سيڙپڪاري ذريعي سنڌ جي خوشحال مستقبل کي ترتيب ڏيڻ ۽ ان جي وسيع امڪانن کي کولڻ ۾ اسان سان شامل ٿيو.",
      },
    },
    {
      id: "img3",
      img: mng2,
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
        en: `Striding towards improving investment climate and city competitiveness, Government of Sindh is upgrading its E-Licensing portal Sindh Business Registration Portal (SBRP)---a pilot initiative to provide E-Licensing facility for four (04) major business registration approvals-- into Sindh Business One Stop Shop (S-BOSS) under CLICK project. \n\nS-BOSS would be an e-Licensing portal to provide online approvals of all registrations, licenses, certificates and other permits (RLCOs) required to register and operate business in Sindh. The 1st phase of the portal would be launched between July-Dec 2024 for 140 RLCOs.`,
        ur: "سرمایہ کاری کے ماحول اور شہر کی مسابقت کو بہتر بنانے کی طرف بڑھتے ہوئے، حکومت سندھ اپنے ای-لائسنسنگ پورٹل سندھ بزنس رجسٹریشن پورٹل (SBRP) کو اپ گریڈ کر رہی ہے --- چار (04) بڑی کاروباری رجسٹریشن کی منظوریوں کے لیے ای-لائسنسنگ کی سہولت فراہم کرنے کے لیے ایک پائلٹ اقدام ہے۔ کلک پروجیکٹ کے تحت سندھ بزنس ون اسٹاپ شاپ (S-BOSS)۔ \n\nS-BOSS ایک ای-لائسنسنگ پورٹل ہوگا جو سندھ میں کاروبار کو رجسٹر کرنے اور چلانے کے لیے درکار تمام رجسٹریشن، لائسنس، سرٹیفکیٹس اور دیگر اجازت ناموں (RLCOs) کی آن لائن منظوری فراہم کرے گا۔ پورٹل کا پہلا مرحلہ جولائی تا دسمبر 2024 کے درمیان 140 RLCOs کے لیے شروع کیا جائے گا۔",
        sd: "سيڙپڪاري جي ماحول ۽ شهر جي مقابلي کي بهتر بڻائڻ جي لاءِ، سنڌ حڪومت پنهنجي اي-لائسنسنگ پورٽل کي اپ گريڊ ڪري رهي آهي سنڌ بزنس رجسٽريشن پورٽل (SBRP)--- چئن (04) وڏن ڪاروباري رجسٽريشن جي منظورين لاءِ اي-لائسنسنگ جي سهولت فراهم ڪرڻ لاءِ هڪ پائلٽ اقدام- سنڌ بزنس ون اسٽاپ شاپ (S-BOSS) CLICK منصوبي تحت. \n\nS-BOSS هڪ اي-لائسنسنگ پورٽل هوندو جيڪو سڀني رجسٽريشنن، لائسنسن، سرٽيفڪيٽن ۽ ٻين اجازتن (RLCOs) جي آن لائن منظوري فراهم ڪري ٿو جيڪو سنڌ ۾ ڪاروبار کي رجسٽر ڪرڻ ۽ هلائڻ لاءِ گهربل آهي. پورٽل جو پهريون مرحلو 140 RLCOs لاءِ جولاءِ-ڊسمبر 2024 جي وچ ۾ شروع ڪيو ويندو.",
      },
    },
    {
      id: "img4",
      img: CMsindh,
      name: {
        en: "Murad Ali Shah",
        ur: "جسٹس (ر) مقبول باقر",
        sd: "جسٽس (رطس) مقبول باقر",
      },
      subtitle: {
        en: "Chief Minister of Sindh",
        ur: "چیف منسٹر سندھ",
        sd: "سنڌ جو چيف وزير",
      },
      desc: {
        en: `Government of Sindh attaches a high priority to investment facilitation which it believes will take the province onto a path of progress and socio-economic development and enable it to reach its potential. The creation of Sindh Investment Department is an endorsement of Sindh Government’s commitment to improving the investment climate in the province. Sindh Investment is tasked to develop investment opportunities for large, medium, and small investors, which includes technical assistance in conducting market research and feasibility studies.\n\n Sindh has been successful in signing joint venture project where the provincial government is committed to investing with a private sector company (Sindh Engro Coal Mining Company SECMC) on a US$ 1 billion coal mining project.\n\n Sindh Government has provided the legal structure for public-private collaborations by enacting Sindh Public-Private Partnership Act, 2010. The first successful PPP project, a joint venture between the Government of Sindh and Deokjae Construction Company of Korea, the Hyderabad - Mirpurkhas Dual Carriageway has been completed, marking the beginning of a new era of infrastructure development. On March 08, 2013 former President Asif Ali Zardari inaugurated this world-class dual carriageway. President Zardari also laid the foundation stone of the Jhirk-Mulla Katiar Bridge project which is completed in 2017, it links important cities of lower Sindh, another milestone in the development of Sindh through sound joint ventures. Sindh Enterprise Development Fund is another unique initiative whereby the government provides subsidies to private sector initiatives for value addition in agro-processing, fisheries, livestock, and dairy sectors.\n\n The Government of Sindh is actively pursuing its goal to bring prosperity to its people by creating jobs and economic opportunities by facilitating investment and business.`,
        ur: `حکومت سندھ سرمایہ کاری کی سہولت کو اعلیٰ ترجیح دیتی ہے جو اس کے خیال میں صوبے کو ترقی اور سماجی و اقتصادی ترقی کی راہ پر گامزن کرے گی اور اسے اپنی صلاحیتوں تک پہنچنے کے قابل بنائے گی۔ سندھ انویسٹمنٹ ڈیپارٹمنٹ کا قیام صوبے میں سرمایہ کاری کے ماحول کو بہتر بنانے کے لیے سندھ حکومت کے عزم کی توثیق ہے۔ سندھ انویسٹمنٹ کو بڑے، درمیانے اور چھوٹے سرمایہ کاروں کے لیے سرمایہ کاری کے مواقع تیار کرنے کا کام سونپا گیا ہے، جس میں مارکیٹ ریسرچ اور فزیبلٹی اسٹڈیز کے انعقاد میں تکنیکی مدد شامل ہے۔

 سندھ مشترکہ منصوبے پر دستخط کرنے میں کامیاب رہا ہے جہاں صوبائی حکومت نجی شعبے کی کمپنی (سندھ اینگرو کول مائننگ کمپنی SECMC) کے ساتھ 1 بلین امریکی ڈالر کے کوئلے کی کان کنی کے منصوبے پر سرمایہ کاری کرنے کے لیے پرعزم ہے۔
 
 سندھ حکومت نے سندھ پبلک پرائیویٹ پارٹنرشپ ایکٹ، 2010 نافذ کرکے پبلک پرائیویٹ تعاون کے لیے قانونی ڈھانچہ فراہم کیا ہے۔ پی پی پی کا پہلا کامیاب منصوبہ، حکومت سندھ اور کوریا کی ڈیوکجے کنسٹرکشن کمپنی کے درمیان مشترکہ منصوبہ، حیدرآباد - میرپورخاص ڈوئل کیریج وے بنیادی ڈھانچے کی ترقی کے ایک نئے دور کا آغاز کرتے ہوئے مکمل کر لیا گیا ہے۔ 08 مارچ 2013 کو سابق صدر آصف علی زرداری نے اس عالمی معیار کے ڈبل کیرج وے کا افتتاح کیا۔ صدر زرداری نے جھڑک ملا کٹیار پل منصوبے کا سنگ بنیاد بھی رکھا جو 2017 میں مکمل ہوا، یہ زیریں سندھ کے اہم شہروں کو آپس میں جوڑتا ہے، جو سندھ کی ترقی میں ایک اور سنگ میل کی حیثیت رکھتا ہے۔
 
 سندھ انٹرپرائز ڈویلپمنٹ فنڈ ایک اور منفرد اقدام ہے جس کے تحت حکومت زرعی پروسیسنگ، فشریز، لائیو اسٹاک اور ڈیری کے شعبوں میں ویلیو ایڈیشن کے لیے نجی شعبے کے اقدامات کو سبسڈی فراہم کرتی ہے۔
 
 حکومت سندھ سرمایہ کاری اور کاروبار کو آسان بنا کر روزگار کے مواقع اور معاشی مواقع پیدا کرکے اپنے لوگوں کی خوشحالی لانے کے اپنے مقصد کے لیے سرگرم عمل ہے۔`,
        sd: `سنڌ حڪومت سيڙپڪاري جي سهولتن کي اعليٰ ترجيح ڏئي ٿي جيڪا ان کي يقين ڏياري ٿي ته صوبي کي ترقي ۽ سماجي ۽ اقتصادي ترقي جي راهه تي گامزن ڪندي ۽ ان کي ان جي صلاحيت تائين پهچڻ جي قابل بڻائيندي. سنڌ انويسٽمينٽ ڊپارٽمينٽ جو قيام صوبي ۾ سيڙپڪاري جي ماحول کي بهتر بڻائڻ لاءِ سنڌ حڪومت جي عزم جي تصديق آهي. سنڌ انويسٽمينٽ کي وڏي، وچولي ۽ ننڍڙن سيڙپڪارن لاءِ سيڙپڪاري جا موقعا پيدا ڪرڻ جو ڪم ڏنو ويو آهي، جنهن ۾ مارڪيٽ ريسرچ ۽ فزيبلٽي اسٽڊيز ڪرڻ ۾ ٽيڪنيڪل مدد شامل آهي.

 سنڌ حڪومت جوائنٽ وينچر پروجيڪٽ تي صحيح ڪرڻ ۾ ڪامياب ٿي وئي آهي جتي صوبائي حڪومت خانگي شعبي جي ڪمپني (سنڌ اينگرو ڪول مائننگ ڪمپني SECMC) سان 1 بلين آمريڪي ڊالرن جي ڪوئلي جي مائننگ منصوبي تي سيڙپڪاري ڪرڻ لاءِ پرعزم آهي.
 
 سنڌ حڪومت پبلڪ پرائيويٽ پارٽنرشپ ايڪٽ 2010 ذريعي پبلڪ-پرائيويٽ پارٽنرشپ لاءِ قانوني ڍانچو مهيا ڪيو آهي. پهريون ڪامياب PPP پروجيڪٽ، سنڌ حڪومت ۽ ڪوريا جي ڊيوڪجي ڪنسٽرڪشن ڪمپني جي وچ ۾ گڏيل منصوبو، حيدرآباد-ميرپورخاص ڊبل ڪيريج وي. مڪمل ڪيو ويو آهي، بنيادي ڍانچي جي ترقي جي نئين دور جي شروعات کي نشان لڳايو. 08 مارچ 2013 تي اڳوڻي صدر آصف علي زرداري هن عالمي معيار جي ڊبل ڪيريج وي جو افتتاح ڪيو. صدر زرداري 2017ع ۾ مڪمل ٿيڻ واري جهرڪ-مولا کٽيار پل منصوبي جو پڻ پيڙهه جو پٿر رکيو، اهو هيٺئين سنڌ جي اهم شهرن کي ڳنڍيندو، گڏيل گڏيل منصوبن ذريعي سنڌ جي ترقي ۾ هڪ ٻيو سنگ ميل آهي.
 
 سنڌ انٽرپرائز ڊولپمينٽ فنڊ هڪ ٻيو منفرد قدم آهي جنهن تحت حڪومت زرعي پروسيسنگ، فشريز، لائيو اسٽاڪ ۽ ڊيري شعبن ۾ قدر ۾ اضافو ڪرڻ لاءِ نجي شعبي جي شروعاتن کي سبسڊي فراهم ڪري ٿي.
 
 سنڌ حڪومت سيڙپڪاري ۽ ڪاروبار ۾ سهولتون فراهم ڪري روزگار ۽ معاشي موقعا پيدا ڪري پنهنجي عوام جي خوشحالي لاءِ پنهنجي مقصد تي سرگرم عمل آهي.`,
      },
    },
    {
      id: "img5",
      img: ChiefSecretarySindh,
      name: {
        en: "Dr. Muhammad Fakhre Alam Irfan",
       ur:'ڈاکٹر محمد فخر عالم عرفان',
       sd:'ڊاڪٽر محمد فخر عالم عرفان'
      },
      subtitle: {
        en: "Chief Secretary, Sindh.",
       ur:'چیف سیکرٹری سندھ۔',
       sd:'چيف سيڪريٽري سنڌ.'
      },
      desc: {
        en: `Sindh is the most resilient and attractive investment destination for international and local investors. With Karachi as the financial capital of Pakistan and nucleus of major financial institutions and business houses, largely agricultural, industrial, and aquaculture base as well as emerging opportunities in the energy sector provides the province with an unmatched competitive advantage to attract investment. To capitalize on this competitive advantage, Sindh Investment Department has been established to strengthen a business-friendly environment in the province with efficient mechanisms of governance to enhance the comfort level of the investors by acting as a bridge between the Government and the business community.\n\nSindh Investment Department facilitates by offering the potential investors viable projects with basic technical knowledge. Through Sindh Enterprise Development Fund, the Government of Sindh has established a credit assistance window where the idea is to work closely with financial institutions and subsidize the interest rates for attracting investment in agro-based industries to support the rural economy of the province. The commencement of mega projects like Karachi Education City, Special Economic Zones, Textile City, Marble City, will provide immense employment opportunities and usher in a new era of economic activity in the province.\n\nWith prudent policies of the Government, new investment opportunities are emerging in Sindh every day making it a top choice for foreign and local investment including relocation of industries from the developed economies.\n\nThe Department looks forward to joining thousands of investors already benefiting from investment in Sindh as we offer a winning combination of advantages and opportunities to be your preferred investment destination.`,
        ur: `سندھ بین الاقوامی اور مقامی سرمایہ کاروں کے لیے سرمایہ کاری کا سب سے زیادہ لچکدار اور پرکشش مقام ہے۔ کراچی پاکستان کے مالیاتی دارالحکومت کے طور پر اور بڑے مالیاتی اداروں اور کاروباری گھرانوں کے مرکز کے طور پر، بڑی حد تک زرعی، صنعتی، اور آبی زراعت کی بنیاد کے ساتھ ساتھ توانائی کے شعبے میں ابھرتے ہوئے مواقع صوبے کو سرمایہ کاری کو راغب کرنے کے لیے بے مثال مسابقتی فائدہ فراہم کرتے ہیں۔ اس مسابقتی فائدہ سے فائدہ اٹھانے کے لیے، حکومت اور کاروباری برادری کے درمیان پل کا کام کرتے ہوئے سرمایہ کاروں کے آرام کی سطح کو بڑھانے کے لیے حکومتی نظام کے موثر میکانزم کے ساتھ صوبے میں کاروبار کے لیے سازگار ماحول کو مضبوط کرنے کے لیے محکمہ سرمایہ کاری سندھ قائم کیا گیا ہے۔

       محکمہ سرمایہ کاری سندھ ممکنہ سرمایہ کاروں کو بنیادی تکنیکی معلومات کے ساتھ قابل عمل منصوبوں کی پیشکش کر کے سہولت فراہم کرتا ہے۔ سندھ انٹرپرائز ڈویلپمنٹ فنڈ کے ذریعے حکومت سندھ نے کریڈٹ اسسٹنس ونڈو قائم کیا ہے جس کا خیال مالیاتی اداروں کے ساتھ مل کر کام کرنا ہے اور صوبے کی دیہی معیشت کو سہارا دینے کے لیے زرعی صنعتوں میں سرمایہ کاری کو راغب کرنے کے لیے شرح سود پر سبسڈی دینا ہے۔ کراچی ایجوکیشن سٹی، اسپیشل اکنامک زونز، ٹیکسٹائل سٹی، ماربل سٹی جیسے میگا پراجیکٹس کے آغاز سے روزگار کے بے پناہ مواقع میسر ہوں گے اور صوبے میں معاشی سرگرمیوں کے ایک نئے دور کا آغاز ہوگا۔
       
       حکومت کی دانشمندانہ پالیسیوں کی بدولت سندھ میں ہر روز سرمایہ کاری کے نئے مواقع ابھر رہے ہیں جو کہ ترقی یافتہ معیشتوں سے صنعتوں کی منتقلی سمیت غیر ملکی اور مقامی سرمایہ کاری کے لیے سرفہرست انتخاب بن رہے ہیں۔
       
       محکمہ پہلے سے ہی سندھ میں سرمایہ کاری سے مستفید ہونے والے ہزاروں سرمایہ کاروں میں شامل ہونے کا منتظر ہے کیونکہ ہم آپ کی ترجیحی سرمایہ کاری کی منزل بننے کے لیے فوائد اور مواقع کا ایک جیتنے والا مجموعہ پیش کرتے ہیں۔`,
        sd: `سنڌ عالمي ۽ مقامي سيڙپڪارن لاءِ سڀ کان وڌيڪ لچڪدار ۽ پرڪشش سيڙپڪار ملڪ آهي. ڪراچي پاڪستان جي مالياتي راڄڌاني جي حيثيت سان ۽ وڏن مالياتي ادارن ۽ ڪاروباري گهرن جو مرڪز هجڻ سان گڏ، وڏي پيماني تي زرعي، صنعتي ۽ آبي زراعت جو بنياد ۽ گڏوگڏ توانائي جي شعبي ۾ اڀرندڙ موقعا صوبي کي سيڙپڪاري کي راغب ڪرڻ لاءِ بي مثال مقابلي جو فائدو فراهم ڪري ٿو. ان مقابلي واري فائدي مان فائدو حاصل ڪرڻ لاءِ، سنڌ انويسٽمينٽ ڊپارٽمينٽ قائم ڪيو ويو آهي ته جيئن صوبي ۾ ڪاروبار لاءِ سازگار ماحول کي مضبوط ڪري، حڪومت ۽ ڪاروباري برادريءَ جي وچ ۾ پل جي حيثيت سان ڪم ڪندي سيڙپڪارن جي آرام جي سطح کي بهتر بنائڻ لاءِ حڪومت جي موثر ميکانيزم سان.

       سنڌ سيڙپڪاريءَ جو کاتو ممڪن سيڙپڪارن کي بنيادي ٽيڪنيڪل ڄاڻ سان قابل عمل منصوبا پيش ڪرڻ ۾ مدد ڪري ٿو. سنڌ انٽرپرائز ڊولپمينٽ فنڊ ذريعي، سنڌ حڪومت هڪ ڪريڊٽ اسسٽنٽ ونڊو قائم ڪيو آهي، جنهن جو خيال آهي ته مالياتي ادارن سان گڏجي ڪم ڪيو وڃي ۽ زرعي صنعتن ۾ سيڙپڪاري کي راغب ڪرڻ لاءِ سود جي شرحن تي سبسڊي ڏني وڃي ته جيئن صوبي جي ڳوٺاڻي معيشت کي هٿي وٺرائي سگهجي. ڪراچي ايجوڪيشن سٽي، اسپيشل اڪنامڪ زونز، ٽيڪسٽائيل سٽي، ماربل سٽي جهڙن ميگا پروجيڪٽس جي شروعات سان صوبي ۾ معاشي سرگرمين جي هڪ نئين دور جو آغاز ٿيندو ۽ روزگار جا وسيع موقعا فراهم ٿيندا.
       
       حڪومت جي دانشمندي وارين پاليسين سان سنڌ ۾ هر روز نوان سيڙپڪاري جا موقعا پيدا ٿي رهيا آهن، جنهن ڪري سنڌ کي پرڏيهي ۽ مقامي سيڙپڪاري لاءِ اعليٰ اختيار بڻايو ويو آهي، جنهن ۾ ترقي يافته معيشتن مان صنعتن جي منتقلي به شامل آهي.
       
       ڊپارٽمينٽ هزارين سيڙپڪارن سان شامل ٿيڻ جو منتظر آهي جيڪي اڳ ۾ ئي سنڌ ۾ سيڙپڪاري مان فائدو وٺي رهيا آهن جيئن اسان توهان جي ترجيحي سيڙپڪاري جي منزل ٿيڻ لاءِ فائدن ۽ موقعن جو هڪ کٽندڙ ميلاپ پيش ڪريون ٿا.`,
      },
    },
  ];

  const [imgFormData, setimgFormData] = useState({
    img: array[0]?.img,
    name: array[0]?.name,
    subtitle: array[0]?.subtitle,
    desc: array[0]?.desc,
  });
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
  };
  const clickCarouselImage = (event) => {
    try {
      if (event?.target?.id) {
        let Id = event?.target?.id;
        resetImageSlider(ID);
        // document.getElementById(Id).src = muradAli;  // when click image change

        if (imageMapColor.hasOwnProperty(Id)) {
          document.getElementById(Id).src = imageMapColor[Id];
        }
        let CloneArr = array;
        let data = CloneArr?.filter((x) => x?.id === Id);
        setimgFormData(data[0]);
        ID = Id;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleArrowClick = () => {
    if (ID !== "qasim_Id") {
      setTimeout(() => {
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
              <h1 className="mainHeading highlightable">
                {" "}
                {translations["Messages"][language]}
              </h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className={
                windowWidth >= 1900
                  ? "col-lg-2"
                  : windowWidth >= 1600
                    ? "col-lg-3"
                    : windowWidth >= 1400
                      ? "col-lg-3"
                      : windowWidth >= 1300
                        ? "col-lg-3"
                        : "col-lg-4"
              }
            >
              <Carousel
                show={2}
                slide={2}
                onRightArrowClick={handleArrowClick}
                onLeftArrowClick={handleArrowClick}
                responsive={windowWidth >= 1900 ? false : ""}
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
                <div>
                  {" "}
                  <div className="item " onClick={clickCarouselImage}>
                    <img
                      id="img2"
                      src={array[0]?.img}
                      alt=""
                      width="100"
                      height="100"
                      style={{
                        borderRadius: "45%",
                        maxWidth: "none",
                        objectFit: "cover",
                      }}
                    ></img>
                  </div>
                  ‍
                </div>
                <div>
                  <div className="item " onClick={clickCarouselImage}>
                    {" "}
                    <img
                      id="img3"
                      src={array[1]?.img}
                      alt=""
                      width="100"
                      height="100"
                      style={{
                        borderRadius: "50%",
                        maxWidth: "none",
                        objectFit: "cover",
                      }}
                    ></img>
                  </div>
                </div>
                <div>
                  <div className="item " onClick={clickCarouselImage}>
                    {" "}
                    <img
                      id="img4"
                      src={array[2]?.img}
                      alt=""
                      width="100"
                      height="100"
                      style={{
                        borderRadius: "50%",
                        maxWidth: "none",
                        objectFit: "cover",
                      }}
                    ></img>
                  </div>
                </div>
                <div>
                  <div className="item " onClick={clickCarouselImage}>
                    {" "}
                    <img
                      id="img5"
                      src={array[3]?.img}
                      alt=""
                      width="100"
                      height="100"
                      style={{
                        borderRadius: "50%",
                        maxWidth: "none",
                        objectFit: "cover",
                      }}
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
                src={imgFormData?.img}
                alt=""
                width={windowWidth <= 1400 ? "320" : "500"}
                height={windowWidth <= 1400 ? "320" : "500"}
                style={{
                  border: "0",
                  borderRadius: "275px",
                  objectFit: "cover",
                }}
              ></img>
            </div>
            <div
              className="col-lg-8"
              style={
                windowWidth <= 1440
                  ? { marginTop: "15px" }
                  : { marginTop: "0px", minHeight: 400 }
              }
            >
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
                    <div className="">
                      <h3 className="title highlightable">
                        {imgFormData?.name[language]}
                      </h3>
                    </div>
                    <p
                      className="card-subtitle highlightable"
                      style={
                        language === "ur" || language === "sd"
                          ? {
                            display: "contents",
                            fontWeight: "400",
                            color: "rgb(163, 163, 163)",
                          }
                          : { fontWeight: "400", color: "rgb(163, 163, 163)" }
                      }
                    >
                      {imgFormData?.subtitle[language]}
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
                    <span
                      dangerouslySetInnerHTML={{
                        __html: imgFormData?.desc[language],
                      }}
                      style={{ whiteSpace: "pre-line" }}
                    ></span>
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
