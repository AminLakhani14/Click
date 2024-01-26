import React, { useEffect, useMemo, useState } from "react";
import mapbackground from "../assets/mapbackground.png";
import "../Css/resource.css";
import GenericHeader from "./genericHeader";
import Footer from "./footer";
import cricle from "../assets/cricle.svg";
import MobileHeaderGeneric from "./MobileHeaderGeneric";
import { Tooltip } from "antd";
import karachimap from "../assets/karachimap.png";
import { InputLabel } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Deps = [
  "All",
  "Sindh Investment department",
  "Labour Department",
  "Local Government Department",
  "Excise, Taxation & Taxation",
  "Energy Department",
  "School Education Department",
  "Sindh Revenue Board",
  "College Department",
  "CS Sindh",
  "Sindh Environment Protection Agency",
  "Sindh Building Control Authority",
  "Industrial Department",
  "Sindh Food Authority",
  "Board of Revenue Sindh",
  "EDUCATION CITY",
  "SEDF",
  "Agriculture Department",
  "P&D",
  "CM Sindh",
  "SEZMC",
  "Sindh Employees Social Security Institution",
];

export default function Maps() {
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

  const [departmentDisplay, setDepartmentDisplay] = useState({});
  const [DepName, setDepName] = useState(["All"]);

  useEffect(() => {
    // Initialize departmentDisplay with all departments set to 1
    const initialDisplay = {};
    Deps.forEach((dep) => {
      initialDisplay[dep] = 1;
    });
    setDepartmentDisplay(initialDisplay);
    setDepName(["All", ...Deps]);
  }, []);

  const HandleChange = (event) => {
    const {
      target: { value: newValue },
    } = event;
    console.log(newValue);
    const updatedDisplay = { ...departmentDisplay };

    if (newValue.includes("All")) {
      if (DepName.includes("All")) {
        // Unselect all departments and "All"

        if (newValue[0] == "All" && newValue[1] != "All") {
          setDepName([]);
          Deps.forEach((dep) => {
            updatedDisplay[dep] = 0;
          });
        } else {
          setDepName(newValue.filter((dep) => dep !== "All" && dep !== ""));
          Deps.forEach((dep) => {
            updatedDisplay["All"] = 0;
            if (dep != "All") {
              updatedDisplay[dep] = newValue.includes(dep) ? 1 : 0;
            } else {
              updatedDisplay[dep] = 0;
            }
          });
        }
      } else {
        // Select all departments and "All"

        setDepName(["All", ...Deps]);
        Deps.forEach((dep) => {
          updatedDisplay[dep] = 1;
        });
      }
    } else {
      // For individual department checkboxes, update the corresponding flag
      Deps.forEach((dep) => {
        console.log("Indivisual func2");
        updatedDisplay[dep] = newValue.includes(dep) ? 1 : 0;
      });

      // Update individual department checkboxes
      setDepName(newValue.filter((dep) => dep !== "All" && dep !== ""));
    }

    if (newValue.length == 21) {
      console.log("fix all checbox");
      setDepName(["All", ...Deps]);
    }
    // Update the departmentDisplay state with the new object
    setDepartmentDisplay(updatedDisplay);
  };

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    // Restore scroll restoration to its default behavior
    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  const [isSticky, setIsSticky] = useState(false);
  const energyDepartment = (
    <div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.google.com/maps/place/Energy+Department+Government+of+Sindh/@24.8445678,67.0271153,15z/data=!4m6!3m5!1s0x3eb33ddfe14570af:0x328ab8ab9d6fcde9!8m2!3d24.8445678!4d67.0271153!16s%2Fg%2F11c2qq4gdv?entry=ttu"
        target="_blank"
      >
        Energy Department
      </a>
    </div>
  );
  const schoolEnergyDepartment = (
    <div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.google.com/maps/dir//Building+No.2,+Sindh+Secretariat,+Seecretary+School+Education+and+Literacy+Deprartment/@24.8553469,66.9364199,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb33fcd040fedb3:0x385765b971e1e193!2m2!1d67.0188214!2d24.8553695?entry=ttu"
        target="_blank"
      >
        School Education Department
      </a>
    </div>
  );
  //CM Sindh
  const CMSindh = (
    <div>
      {" "}
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.google.com/maps/dir//Chief+Minister+Inspection+Team,+Tughluq+House,+Burns+Road,+Karachi,+Karachi+City,+Sindh,+Pakistan/@24.8555877,66.977778,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb33f8c6914cebb:0x5b5917c5aa40143d!2m2!1d67.018978!2d24.8555155?entry=ttu"
        target="_blank"
      >
        CM Sindh
      </a>
    </div>
  );
  const SindhRevenueBoard = (
    <div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.google.com/maps/dir//Sindh+Revenue+Board+Karachi,+Shaheen+Complex,+3rd,+6th,+9th+and+12th+floor,+Civil+Lines,+Karachi,+Karachi+City,+Sindh,+Pakistan/@24.8509623,66.9782336,13z/data=!3m1!5s0x3eb33e0bb3bf44e7:0xde47060d5f31a781!4m8!4m7!1m0!1m5!1m1!1s0x3eb33e0a54d24ab3:0xa79dcdbd2b4625a!2m2!1d67.0194336!2d24.8508901?entry=ttu"
        target="_blank"
      >
        Sindh Revenue Board
      </a>
    </div>
  );
  //College Education Department
  const collegeEducationalDept = (
    <div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.google.com/maps/dir//College+Education+Department+Sindh,+3rd+Floor,+Building+No.+6,+Sindh+Secretariat,+Karachi+City,+Sindh/@24.8607343,67.0011364,15z/data=!4m17!1m7!3m6!1s0x3eb33fdd10bb1ea9:0x158a6fe8ced1af8c!2sCollege+Education+Department+Sindh!8m2!3d24.8607343!4d67.0011364!16s%2Fg%2F11h7fthx64!4m8!1m0!1m5!1m1!1s0x3eb33fdd10bb1ea9:0x158a6fe8ced1af8c!2m2!1d67.0011364!2d24.8607343!3e2?entry=ttu"
        target="_blank"
      >
        College Department
      </a>
    </div>
  );
  //CS Sindh
  const CSSindh = (
    <div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.google.com/maps/dir//Building+no+6+,Sindh+Secretariat,+Sharah+e+Kamal+Ataturk+road,+Karachi/@24.8546464,66.9764177,13z?entry=ttu"
        target="_blank"
      >
        CS Sindh
      </a>
    </div>
  );
  //Sindh Environmental Protection Agency (SEPA)
  const SindhEnvironmentalProtection = (
    <div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.google.com/maps/dir//Sindh+Environmental+Protection+Agency%D8%8C+ST-21%D8%8C,+Sector+23+Korangi+Industrial+Area,+Karachi,+Karachi+City,+Sindh%E2%80%AD/@24.8376612,67.0792909,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb33b946a825e95:0xe0803268ac5da982!2m2!1d67.1204909!2d24.837589?entry=ttu"
        target="_blank"
      >
        Sindh Environment Protection Agency
      </a>
    </div>
  );
  //Sindh Building Control Authority (SBCA)
  const SindhBuildingControl = (
    <div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.google.com/maps/dir//Sindh+Building+Control+Authority,+Karachi,+V3XF%2BX36%D8%8C+Civic+Center,+University+Road,+Pakistan,+Block+14+Gulshan-e-Iqbal,+Karachi,+Karachi+City,+Sindh,+Pakistan%E2%80%AD/@24.9162603,66.9835743,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb33edfa3ffffff:0xc9fe23f99230f894!2m2!1d67.0726369!2d24.8999093?entry=ttu"
        target="_blank"
      >
        Sindh Building Control Authority
      </a>
    </div>
  );
  //Sindh Industrial Trading Estate (S.I.T.E) Limited
  const SindhIndustrialTrading = (
    <div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.google.com/maps/dir//Directorate+of+Industries,+Trust+Wing,+Sindh+Govt.,+2nd+Floor,+State+Life+Building+No.+11,+Abdullah+Haroon+Rd,+Civil+Lines,+Karachi,+Karachi+City,+Sindh+74400,+Pakistan/@24.8544337,66.9871678,13z/data=!3m1!5s0x3eb33e741d2fccf1:0xc3b35a0e92558ed!4m8!4m7!1m0!1m5!1m1!1s0x3eb33f45b8e53693:0x1368d0053cc6b4b6!2m2!1d67.0283678!2d24.8543615?entry=ttu"
        target="_blank"
      >
        Industrial Department
      </a>
    </div>
  );
  //Sindh Food Authority
  const SindhFoodAut = (
    <div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.google.com/maps/dir//Sindh+Food+Authority,+Bunglow+No.+B,+12+Shahrah-e-Faisal+Rd,+Darwaish+Colony,+Karachi,+Karachi+City,+Sindh,+Pakistan/@24.8683205,67.0447531,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb3178521c0229d:0xb63bac5f451003f4!2m2!1d67.0859531!2d24.8682483?entry=ttu"
        target="_blank"
      >
        Sindh Food Authority
      </a>
    </div>
  );
  //Board of Revenue
  const BoardOfRevenue = (
    <div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.google.com/maps/dir//Board+of+Revenue+Government+of+Sindh,+Revenue+House%D8%8C+Street+4,+Block+6+Clifton,+Karachi,+Karachi+City,+Sindh+75400,+Pakistan%E2%80%AD/@24.8237707,66.9603356,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb33d8e61b350bf:0xffe390e263a1ef4!2m2!1d67.0079814!2d24.8171377?entry=ttu"
        target="_blank"
      >
        Board of Revenue Sindh
      </a>
    </div>
  );
  //Sindh Healthcare Commission
  const healthCareComm = (
    <div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.google.com/maps/dir//Sindh+Health+Care+Commision,+2nd+Floor,+Block+C,+Finance+and+Trade+Centre+(FTC,+Shahrah-e-Faisal+Rd,+Karachi+City,+Sindh,+Pakistan/@24.8584313,67.0109508,13z/data=!3m2!4b1!5s0x3eb33e81570b5473:0x5dc46c3300de7ce2!4m8!4m7!1m0!1m5!1m1!1s0x3eb33eec63544583:0xd50963284260903f!2m2!1d67.0521508!2d24.8583591?entry=ttu"
        target="_blank"
      >
        Sindh Healthcare Commission
      </a>
    </div>
  );
  //Health Department
  const healthDepartment = (
    <div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.google.com/maps/dir//6th+Floor,+Sindh+Secretariat+No+1+Kamal+Atta+Turk+Road,+Karachi/@24.8445621,66.9858298,13z?entry=ttu"
        target="_blank"
      >
        Health Department
      </a>
    </div>
  );
  // Karachi Metropolitan Corporation (KMC)
  const PnD = (
    <div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.google.com/maps/place/Planning+%26+Development+Board+P%26D/@24.8551845,67.0187683,15z/data=!4m6!3m5!1s0x3eb33e0c45093a7f:0x246f39c9901615e0!8m2!3d24.8551845!4d67.0187683!16s%2Fg%2F11fxxzx34h?entry=ttu"
        target="_blank"
      >
        P&D
      </a>
    </div>
  );
  //Sindh Employees Social Security Institution (SESSI)
  const SindhEmployeesSecurity = (
    <div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.google.com/maps/dir//Sindh+Employees+Social+Security+Institution,+W39W%2BQMW,+Block+6+Gulshan-e-Iqbal,+Karachi,+Karachi+City,+Sindh/@24.9195659,67.0555084,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb338ccfc2b6aeb:0xa6ff509e9dcfbb8e!2m2!1d67.0967767!2d24.9194184?entry=ttu"
        target="_blank"
      >
        Sindh Employees Social Security Institution
      </a>
    </div>
  );
  //Excise, Taxation & Narcotics Control Department
  const ExciseTaxation = (
    <div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.google.com/maps/place/Excise,+Taxation+and+Narcotics+Office/@24.9019807,66.9897299,13z/data=!4m19!1m12!4m11!1m3!2m2!1d67.0298987!2d24.9051725!1m6!1m2!1s0x3eb33fb10d12ad61:0x6fd8d95c9b0e645d!2sExcise,+Taxation+and+Narcotics+Office,+W22J%2BQ97,+Block+2+Nazimabad,+Karachi,+Karachi+City,+Sindh+74600,+Pakistan!2m2!1d67.0309275!2d24.9018854!3m5!1s0x3eb33fb10d12ad61:0x6fd8d95c9b0e645d!8m2!3d24.9019085!4d67.0309299!16s%2Fg%2F11btxjn654?entry=ttu"
        target="_blank"
      >
        Excise, Taxation & Narcotics
      </a>
    </div>
  );
  // Local Government Department
  const LocalGovernment = (
    <div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.google.com/maps/place/Sindh+Local+Government+Board/@24.8552247,67.0188027,15z/data=!4m6!3m5!1s0x3eb33f6ed1e753ed:0x76878ff665c09417!8m2!3d24.8552247!4d67.0188027!16s%2Fg%2F11t7ckmdjn?entry=ttu"
        target="_blank"
      >
        Local Government Department
      </a>
    </div>
  );
  // Labour Department
  const LabourDept = (
    <div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.google.com/maps/dir//G-2,+Labour+Department+Govternment+of+Sindh,+Dr+Ziauddin+Ahmed+Rd,+Civil+Lines+Kashmir+Mujahid+Colony,+Karachi,+Karachi+City,+Sindh,+Pakistan/@24.8445189,67.0244326,17z/data=!4m17!1m7!3m6!1s0x3eb33d0c71359303:0xe09b193e2f7f7f81!2sLabour+Department+Govternment+of+Sindh!8m2!3d24.8445141!4d67.0270075!16s%2Fg%2F11pfbn284r!4m8!1m0!1m5!1m1!1s0x3eb33d0c71359303:0xe09b193e2f7f7f81!2m2!1d67.0270075!2d24.8445141!3e2?entry=ttu"
        target="_blank"
      >
        Labour Department
      </a>
    </div>
  );
  // Agriculture Department
  const AgriculturalDept = (
    <div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.google.com/maps/dir//Agriculture+Department,+Tughluq+House,+Burns+Road,+Karachi,+Karachi+City,+Sindh+35432,+Pakistan/@24.8553503,67.0086422,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb33f075a55d52f:0x5da4d91c1011667e!2m2!1d67.0190461!2d24.8557118?entry=ttu"
        target="_blank"
      >
        Agriculture Department
      </a>
    </div>
  );
  // Sindh Investment Department
  const sindhInvestmentDept = (
    <div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.google.com/maps/place/Investment+Department,+Government+of+Sindh/@24.8580077,67.0521935,15z/data=!4m6!3m5!1s0x3eb33946cdddc7f7:0xf0cbdf3f38f7d9ea!8m2!3d24.8580077!4d67.0521935!16s%2Fg%2F11fq8_nzw_?entry=ttu"
        target="_blank"
      >
        Sindh Investment Department
      </a>
    </div>
  );
  // EODB
  const EODB = (
    <div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.google.com/maps/dir//06th+Floor,+Kohsar+Block,+Pak+Secretariat,+Islamabad+44000,+Pakistan/@33.6385974,72.9281374,11z/data=!3m1!4b1?entry=ttu"
        target="_blank"
      >
        EODB
      </a>
    </div>
  );
  // SEZMC
  const SEZMC = (
    <div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.google.com/maps/dir//Sindh+Economic+Zones+Management+Company,+2nd+Floor,+Bahria+Complex,+4+Khaliq-uz-Zaman+Rd,+Navy+Housing+Society,+Karachi,+Karachi+City,+Sindh+75600/@24.8242935,67.0438188,15z/data=!3m1!5s0x3eb33db483eff6c1:0x89c6a043a65c2549!4m17!1m7!3m6!1s0x3eb33d416f09ebc5:0x7b8637176395f22d!2sSindh+Economic+Zones+Management+Company!8m2!3d24.8242935!4d67.0438188!16s%2Fg%2F11ph6k221w!4m8!1m0!1m5!1m1!1s0x3eb33d416f09ebc5:0x7b8637176395f22d!2m2!1d67.0438188!2d24.8242935!3e2?entry=ttu"
        target="_blank"
      >
        SEZMC
      </a>
    </div>
  );
  // SEDF
  const SEDF = (
    <div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.google.com/maps/dir//Sindh+Enterprise+Development+Fund%DB%94+%D8%B3%D9%86%D8%AF%DA%BE+%D8%A7%D9%86%D9%B9%D8%B1%D9%BE%D8%B1%D8%A7%D8%A6%D8%B2+%DA%88%DB%8C%D9%88%DB%8C%D9%84%D9%BE%D9%85%D9%86%D9%B9+%D9%81%D9%86%DA%88%D8%8C+1st+Floor%D8%8C+Block+B%D8%8C+FTC+Building,+Sharah-e%D8%8C+Faisal,+Karachi+Cantonment,+Karachi,+Karachi+City,+Sindh%E2%80%AD/@24.8579708,67.0521455,15z/data=!3m1!5s0x3eb33e81570b5473:0xf6a34181a51c826a!4m17!1m7!3m6!1s0x3eb33e815914edc7:0x31f9936c3ca37baa!2zU2luZGggRW50ZXJwcmlzZSBEZXZlbG9wbWVudCBGdW5k25Qg2LPZhtiv2r4g2KfZhtm52LHZvtix2KfYptiyINqI24zZiNuM2YTZvtmF2YbZuSDZgdmG2og!8m2!3d24.8579708!4d67.0521455!16s%2Fg%2F11gdsnrmp3!4m8!1m0!1m5!1m1!1s0x3eb33e815914edc7:0x31f9936c3ca37baa!2m2!1d67.0521455!2d24.8579708!3e2?entry=ttu"
        target="_blank"
      >
        SEDF
      </a>
    </div>
  );
  // eduCity
  const eduCity = (
    <div>
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://www.google.com/maps/place/EDUCATION+CITY/@24.970613,67.362756,18z/data=!4m14!1m7!3m6!1s0x3eb3359169a8701d:0x23e87d599d29ae75!2sEDUCATION+CITY!8m2!3d24.9704911!4d67.3627396!16s%2Fg%2F11mx8d21cy!3m5!1s0x3eb3359169a8701d:0x23e87d599d29ae75!8m2!3d24.9704911!4d67.3627396!16s%2Fg%2F11mx8d21cy?hl=en&entry=ttu"
        target="_blank"
      >
        EDUCATION CITY
      </a>
    </div>
  );
  const options = ["Show", "Hide", "Center"];
  const [arrow, setArrow] = useState("Show");

  const mergedArrow = useMemo(() => {
    if (arrow === "Hide") {
      return false;
    }

    if (arrow === "Show") {
      return true;
    }

    return {
      pointAtCenter: true,
    };
  }, [arrow]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 480) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  let value = ">";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const [width, setWidth] = useState(690);
  const [widthMap, setWidthMap] = useState(690);

  const [marginTop, setMarginTop] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [counter, setCounter] = useState(0);
  const incrementWidth = () => {
    let increment = width + 10;
    let margintop = marginTop + 2;
    let marginleft = marginLeft - 1;
    let count = counter + 10;
    if (width <= 780) {
      setMarginLeft(marginleft);
      setWidth(increment);
      setMarginTop(margintop);
      setCounter(count);
    }
  };
  const DecrementWidth = () => {
    let increment = width - 10;
    let margintop = marginTop - 2;
    let marginleft = marginLeft + 1;
    let count = counter - 10;
    if (width >= 700) {
      setWidth(increment);
      setMarginTop(margintop);
      setCounter(count);
      setMarginLeft(marginleft);
    }
  };
  return (
    <>
      {windowWidth <= 500 ? <MobileHeaderGeneric /> : <GenericHeader />}

      <div
        className="row"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          paddingTop: window.innerWidth < 500 ? "22px" : "175px",
        }}
      >
        <h1 className="mainHeading">Discover Sindh</h1>
        <div
          className="col-lg-10"
          style={{
            display: "flex",
            textAlign: "justify",
          }}
        >
          <p className="aboutUsParagraphh">
            Your visual guide to the abundant opportunities that await in Sindh.
            Explore our interactive map, where each pinned marker represents a
            distinct sector brimming with potential. Whether you're interested
            in Agriculture, Manufacturing, Technology, or any other industry,
            our map will help you navigate through the diverse sectors of Sindh,
            providing valuable insights to fuel your investment decisions.
            Embark on a journey of discovery as you uncover the geographical
            landscape of opportunities in Sindh and chart a course towards
            success.
          </p>
        </div>
      </div>
      <div
        className="mt-3"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          className="zoominopts"
          // style={windowWidth <= 500 ?
          style={{
            display: "flex",
            justifyContent: "end",
            width: "380px",
            position: "absolute",
            zIndex: "1",
            gap: "5px",
            marginLeft: "500px",
          }}
        >
          <Tooltip
            overlayInnerStyle={{ borderRadius: "0px" }}
            color={"#0F5789"}
            placement="top"
            title={"Zoom In"}
            arrow={mergedArrow}
          >
            <div className="incrementButtonMap" onClick={incrementWidth}>
              +
            </div>
          </Tooltip>
          <div>
            <p className="mt-1">{counter}%</p>
          </div>
          <Tooltip
            overlayInnerStyle={{ borderRadius: "0px" }}
            color={"#0F5789"}
            placement="top"
            title={"Zoom Out"}
            arrow={mergedArrow}
          >
            <div className="incrementButtonMap" onClick={DecrementWidth}>
              -
            </div>
          </Tooltip>
        </div>
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            paddingBottom: "40px",
            marginTop: "-7.5px",
            marginLeft: windowWidth <= 500 ? "30px" : "",
          }}
        >
          <FormControl sx={{ m: 1, width: 300, zIndex: 2 }}>
            <InputLabel style={{ color: "black" }}>
              View All Departments
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              style={{ textAlign: "left" }}
              multiple
              value={DepName}
              onChange={HandleChange}
              input={<OutlinedInput label="View All Departments" />}
              renderValue={(selected) => {
                if (selected.includes("All")) {
                  return "All";
                }
                return selected.join(", ");
              }}
            >
              {Deps.map((Dep) => (
                <MenuItem key={Dep} value={Dep}>
                  <Checkbox
                    style={
                      window.innerWidth <= 500
                        ? {
                          width: "30%",
                        }
                        : {}
                    }
                    checked={DepName.includes(Dep)}
                  />
                  <ListItemText primary={Dep} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* </a> */}
        </div>
        <div
          style={{
            height: "850px",
            width: "900px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: window.innerWidth < 500 ? "-3rem" : "5rem",
            marginLeft: window.innerWidth < 500 ? "-22rem" : "",
            marginRight: window.innerWidth < 500 ? "-50px" : "320px",
          }}
        >
          <img
            className="mapbgheight"
            src={mapbackground}
            width={"800px"}
            height="950px"
          ></img>
          <div
            style={{
              position: "absolute",
              marginTop: "-75px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="mapheight"
              style={{ borderRadius: "377px" }}
              src={karachimap}
              width={width}
              height={width}
            ></img>
            <Tooltip
              overlayInnerStyle={{
                borderRadius: "0px",
                textDecoration: "underline",
              }}
              color={"#0F5789"}
              placement="top"
              title={schoolEnergyDepartment}
              arrow={mergedArrow}
            >
              <img
                style={{
                  position: "absolute",
                  marginTop: "23px",
                  marginLeft: "-104px",
                  display:
                    departmentDisplay["School Education Department"] === 1
                      ? "block"
                      : "none",
                }}
                className="cursorTooltip"
                src={cricle}
                width={"10px"}
                height="10px"
              ></img>
            </Tooltip>
            <Tooltip
              overlayInnerStyle={{
                borderRadius: "0px",
                textDecoration: "underline",
              }}
              color={"#0F5789"}
              placement="top"
              title={CMSindh}
              arrow={mergedArrow}
            >
              <img
                style={{
                  position: "absolute",
                  marginTop: `${160 + marginTop}px`,
                  marginLeft: `${-120 + marginLeft}px`,
                  display:
                    departmentDisplay["CM Sindh"] === 1 ? "block" : "none",
                }}
                src={cricle}
                className="cursorTooltip"
                width={"10px"}
                height="10px"
              ></img>
            </Tooltip>
            <Tooltip
              overlayInnerStyle={{
                borderRadius: "0px",
                textDecoration: "underline",
              }}
              color={"#0F5789"}
              placement="top"
              title={SindhRevenueBoard}
              arrow={mergedArrow}
            >
              <img
                style={{
                  position: "absolute",
                  marginTop: `${158 + marginTop}px`,
                  marginLeft: `${-50 + marginLeft}px`,
                  display:
                    departmentDisplay["Sindh Revenue Board"] === 1
                      ? "block"
                      : "none",
                }}
                className="cursorTooltip"
                src={cricle}
                width={"10px"}
                height="10px"
              ></img>
            </Tooltip>
            <Tooltip
              overlayInnerStyle={{
                borderRadius: "0px",
                textDecoration: "underline",
              }}
              color={"#0F5789"}
              placement="top"
              title={energyDepartment}
              arrow={mergedArrow}
            >
              <img
                style={{
                  position: "absolute",
                  marginTop: `${238 + marginTop}px`,
                  marginLeft: `${-38 + marginLeft}px`,
                  display:
                    departmentDisplay["Energy Department"] === 1
                      ? "block"
                      : "none",
                }}
                src={cricle}
                className="cursorTooltip"
                width={"10px"}
                height="10px"
              ></img>
            </Tooltip>
            <Tooltip
              overlayInnerStyle={{
                borderRadius: "0px",
                textDecoration: "underline",
              }}
              color={"#0F5789"}
              placement="top"
              title={collegeEducationalDept}
              arrow={mergedArrow}
            >
              <img
                style={{
                  position: "absolute",
                  marginTop: `${175 + marginTop}px`,
                  marginLeft: `${-100 + marginLeft}px`,
                  display:
                    departmentDisplay["College Department"] === 1
                      ? "block"
                      : "none",
                }}
                src={cricle}
                className="cursorTooltip"
                width={"10px"}
                height="10px"
              ></img>
            </Tooltip>
            <Tooltip
              overlayInnerStyle={{
                borderRadius: "0px",
                textDecoration: "underline",
              }}
              color={"#0F5789"}
              placement="top"
              title={CSSindh}
              arrow={mergedArrow}
            >
              <img
                style={{
                  position: "absolute",
                  marginTop: `${103 + marginTop}px`,
                  marginLeft: `${-164 + marginLeft}px`,
                  display:
                    departmentDisplay["CS Sindh"] === 1 ? "block" : "none",
                }}
                src={cricle}
                className="cursorTooltip"
                width={"10px"}
                height="10px"
              ></img>
            </Tooltip>
            <Tooltip
              overlayInnerStyle={{
                borderRadius: "0px",
                minWidth: "max-content",
                textDecoration: "underline",
              }}
              color={"#0F5789"}
              placement="top"
              title={SindhEnvironmentalProtection}
              arrow={mergedArrow}
            >
              <img
                style={{
                  position: "absolute",
                  marginTop: `${140 + marginTop}px`,
                  marginLeft: `${-162 + marginLeft}px`,
                  display:
                    departmentDisplay["Sindh Environment Protection Agency"] ===
                      1
                      ? "block"
                      : "none",
                }}
                src={cricle}
                className="cursorTooltip"
                width={"10px"}
                height="10px"
              ></img>
            </Tooltip>
            <Tooltip
              overlayInnerStyle={{
                borderRadius: "0px",
                minWidth: "max-content",
                textDecoration: "underline",
              }}
              color={"#0F5789"}
              placement="top"
              title={SindhBuildingControl}
              arrow={mergedArrow}
            >
              <img
                style={{
                  position: "absolute",
                  marginTop: `${149 + marginTop}px`,
                  marginLeft: `${-179 + marginLeft}px`,
                  display:
                    departmentDisplay["Sindh Building Control Authority"] === 1
                      ? "block"
                      : "none",
                }}
                src={cricle}
                className="cursorTooltip"
                width={"10px"}
                height="10px"
              ></img>
            </Tooltip>
            <Tooltip
              overlayInnerStyle={{
                borderRadius: "0px",
                textDecoration: "underline",
              }}
              color={"#0F5789"}
              placement="top"
              title={SindhIndustrialTrading}
              arrow={mergedArrow}
            >
              <img
                style={{
                  position: "absolute",
                  marginTop: `${189 + marginTop}px`,
                  marginLeft: `${-79 + marginLeft}px`,
                  display:
                    departmentDisplay["Industrial Department"] === 1
                      ? "block"
                      : "none",
                }}
                src={cricle}
                className="cursorTooltip"
                width={"10px"}
                height="10px"
              ></img>
            </Tooltip>
            <Tooltip
              overlayInnerStyle={{
                borderRadius: "0px",
                textDecoration: "underline",
              }}
              color={"#0F5789"}
              placement="top"
              title={SindhFoodAut}
              arrow={mergedArrow}
            >
              <img
                style={{
                  position: "absolute",
                  marginTop: `${201 + marginTop}px`,
                  marginLeft: `${-61 + marginLeft}px`,
                  display:
                    departmentDisplay["Sindh Food Authority"] === 1
                      ? "block"
                      : "none",
                }}
                src={cricle}
                className="cursorTooltip"
                width={"10px"}
                height="10px"
              ></img>
            </Tooltip>
            <Tooltip
              overlayInnerStyle={{
                borderRadius: "0px",
                textDecoration: "underline",
              }}
              color={"#0F5789"}
              placement="top"
              title={BoardOfRevenue}
              arrow={mergedArrow}
            >
              <img
                style={{
                  position: "absolute",
                  marginTop: `${200 + marginTop}px`,
                  marginLeft: `${-156 + marginLeft}px`,
                  display:
                    departmentDisplay["Board of Revenue Sindh"] === 1
                      ? "block"
                      : "none",
                }}
                src={cricle}
                className="cursorTooltip"
                width={"10px"}
                height="10px"
              ></img>
            </Tooltip>
            <Tooltip
              overlayInnerStyle={{
                borderRadius: "0px",
                textDecoration: "underline",
              }}
              color={"#0F5789"}
              placement="top"
              title={PnD}
              arrow={mergedArrow}
            >
              <img
                style={{
                  position: "absolute",
                  marginTop: `${259 + marginTop}px`,
                  marginLeft: `${-106 + marginLeft}px`,
                  display: departmentDisplay["P&D"] === 1 ? "block" : "none",
                }}
                src={cricle}
                className="cursorTooltip"
                width={"10px"}
                height="10px"
              ></img>
            </Tooltip>
            <Tooltip
              overlayInnerStyle={{
                borderRadius: "0px",
                textDecoration: "underline",
              }}
              color={"#0F5789"}
              placement="top"
              title={healthCareComm}
              arrow={mergedArrow}
            >
              <img
                style={{
                  position: "absolute",
                  marginTop: `${82 + marginTop}px`,
                  marginLeft: `${12 + marginLeft}px`,
                  display:
                    departmentDisplay["Sindh Healthcare Commission"] === 1
                      ? "block"
                      : "none",
                }}
                src={cricle}
                className="cursorTooltip"
                width={"10px"}
                height="10px"
              ></img>
            </Tooltip>
            <Tooltip
              overlayInnerStyle={{
                borderRadius: "0px",
                textDecoration: "underline",
              }}
              color={"#0F5789"}
              placement="top"
              title={healthDepartment}
              arrow={mergedArrow}
            >
              <img
                style={{
                  position: "absolute",
                  marginTop: `${108 + marginTop}px`,
                  marginLeft: `${19 + marginLeft}px`,
                  display:
                    departmentDisplay["Health Department"] === 1
                      ? "block"
                      : "none",
                }}
                src={cricle}
                className="cursorTooltip"
                width={"10px"}
                height="10px"
              ></img>
            </Tooltip>
            <Tooltip
              overlayInnerStyle={{
                borderRadius: "0px",
                minWidth: "max-content",
                textDecoration: "underline",
              }}
              color={"#0F5789"}
              placement="top"
              title={SindhEmployeesSecurity}
              arrow={mergedArrow}
            >
              <img
                style={{
                  position: "absolute",
                  marginTop: `${94 + marginTop}px`,
                  marginLeft: `${100 + marginLeft}px`,
                  display:
                    departmentDisplay[
                      "Sindh Employees Social Security Institution"
                    ] === 1
                      ? "block"
                      : "none",
                }}
                src={cricle}
                className="cursorTooltip"
                width={"10px"}
                height="10px"
              ></img>
            </Tooltip>
            <Tooltip
              overlayInnerStyle={{
                borderRadius: "0px",
                textDecoration: "underline",
              }}
              color={"#0F5789"}
              placement="top"
              title={ExciseTaxation}
              arrow={mergedArrow}
            >
              <img
                style={{
                  position: "absolute",
                  marginTop: `${63 + marginTop}px`,
                  marginLeft: `${236 + marginLeft}px`,
                  display:
                    departmentDisplay["Excise, Taxation & Taxation"] === 1
                      ? "block"
                      : "none",
                }}
                src={cricle}
                className="cursorTooltip"
                width={"10px"}
                height="10px"
              ></img>
            </Tooltip>
            <Tooltip
              overlayInnerStyle={{
                borderRadius: "0px",
                textDecoration: "underline",
              }}
              color={"#0F5789"}
              placement="top"
              title={LocalGovernment}
              arrow={mergedArrow}
            >
              <img
                style={{
                  position: "absolute",
                  marginTop: `${23 + marginTop}px`,
                  marginLeft: `${201 + marginLeft}px`,
                  display:
                    departmentDisplay["Local Government Department"] === 1
                      ? "block"
                      : "none",
                }}
                src={cricle}
                className="cursorTooltip"
                width={"10px"}
                height="10px"
              ></img>
            </Tooltip>
            <Tooltip
              overlayInnerStyle={{
                borderRadius: "0px",
                textDecoration: "underline",
              }}
              color={"#0F5789"}
              placement="top"
              title={LabourDept}
              arrow={mergedArrow}
            >
              <img
                style={{
                  position: "absolute",
                  marginTop: `${-25 + marginTop}px`,
                  marginLeft: `${129 + marginLeft}px`,
                  display:
                    departmentDisplay["Labour Department"] === 1
                      ? "block"
                      : "none",
                }}
                src={cricle}
                className="cursorTooltip"
                width={"10px"}
                height="10px"
              ></img>
            </Tooltip>
            <Tooltip
              overlayInnerStyle={{
                borderRadius: "0px",
                textDecoration: "underline",
              }}
              color={"#0F5789"}
              placement="top"
              title={AgriculturalDept}
              arrow={mergedArrow}
            >
              <img
                style={{
                  position: "absolute",
                  marginTop: `${146 + marginTop}px`,
                  marginLeft: `${126 + marginLeft}px`,
                  display:
                    departmentDisplay["Agriculture Department"] === 1
                      ? "block"
                      : "none",
                }}
                src={cricle}
                className="cursorTooltip"
                width={"10px"}
                height="10px"
              ></img>
            </Tooltip>
            <Tooltip
              overlayInnerStyle={{
                borderRadius: "0px",
                textDecoration: "underline",
              }}
              className="circle"
              color={"#0F5789"}
              placement="top"
              title={sindhInvestmentDept}
              arrow={mergedArrow}
            >
              <img
                style={{
                  position: "absolute",
                  marginTop: `${-125 + marginTop}px`,
                  marginLeft: `${20 + marginLeft}px`,
                  display:
                    departmentDisplay["Sindh Investment department"] === 1
                      ? "block"
                      : "none",
                }}
                src={cricle}
                className="cursorTooltip"
                width={"10px"}
                height="10px"
              ></img>
            </Tooltip>
            <Tooltip
              overlayInnerStyle={{
                borderRadius: "0px",
                textDecoration: "underline",
              }}
              color={"#0F5789"}
              placement="top"
              title={EODB}
              arrow={mergedArrow}
            >
              <img
                style={{
                  position: "absolute",
                  marginTop: `${150 + marginTop}px`,
                  marginLeft: `${160 + marginLeft}px`,
                  display: departmentDisplay["EODB"] === 1 ? "block" : "none",
                }}
                src={cricle}
                className="cursorTooltip"
                width={"10px"}
                height="10px"
              ></img>
            </Tooltip>
            <Tooltip
              overlayInnerStyle={{
                borderRadius: "0px",
                textDecoration: "underline",
              }}
              color={"#0F5789"}
              placement="top"
              title={SEZMC}
              arrow={mergedArrow}
            >
              <img
                style={{
                  position: "absolute",
                  marginTop: `${-16 + marginTop}px`,
                  marginLeft: `${-26 + marginLeft}px`,
                  display: departmentDisplay["SEZMC"] === 1 ? "block" : "none",
                }}
                src={cricle}
                className="cursorTooltip"
                width={"10px"}
                height="10px"
              ></img>
            </Tooltip>
            <Tooltip
              overlayInnerStyle={{
                borderRadius: "0px",
                textDecoration: "underline",
              }}
              color={"#0F5789"}
              placement="top"
              title={SEDF}
              arrow={mergedArrow}
            >
              <img
                style={{
                  position: "absolute",
                  marginTop: `${127 + marginTop}px`,
                  marginLeft: `${-98 + marginLeft}px`,
                  display: departmentDisplay["SEDF"] === 1 ? "block" : "none",
                }}
                src={cricle}
                className="cursorTooltip"
                width={"10px"}
                height="10px"
              ></img>
            </Tooltip>
            <Tooltip
              overlayInnerStyle={{
                borderRadius: "0px",
                textDecoration: "underline",
              }}
              color={"#0F5789"}
              placement="top"
              title={eduCity}
              arrow={mergedArrow}
            >
              <img
                style={{
                  position: "absolute",
                  marginTop: `${209 + marginTop}px`,
                  marginLeft: `${-98 + marginLeft}px`,
                  display:
                    departmentDisplay["EDUCATION CITY"] === 1
                      ? "block"
                      : "none",
                }}
                src={cricle}
                className="cursorTooltip"
                width={"10px"}
                height="10px"
              ></img>
            </Tooltip>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
