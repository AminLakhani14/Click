import React, { useEffect, useState } from "react";
import GenericHeader from "./genericHeader";
import Footer from "./footer";
import "../Css/investnow.css";
import style from "../Css/tutorial.module.css";
import MobileHeaderGeneric from "./MobileHeaderGeneric";
import { Link } from "react-router-dom";
import healthVideo from "../assets/tutorial/healthDepartment.mp4";
import schooleDepartmentVideo from "../assets/tutorial/schoolEducationAndLiteracyDepartment.mp4";
import sindhHealthcarevideo from "../assets/tutorial/sindhHealthcare.mp4";
import ICD_001 from "../assets/tutorial/ICD-001.mp4";
import Ld_001 from "../assets/tutorial/led-001.mp4";
import sepa_001 from "../assets/tutorial/sepa-001.mp4";
import SBCA_006 from "../assets/tutorial/SBCA-006.mp4";
import BOR_001 from "../assets/tutorial/BOR-001.mp4";
import DMC_001 from "../assets/tutorial/DMC-001.mp4";
import KMC_001 from "../assets/tutorial/KMC-001.mp4";
import NC_001 from "../assets/tutorial/NC-001.mp4";
import SMPA from "../assets/tutorial/SMPA.mp4";
//////////////////////THUMBNAIL/////////////////////
import schoolEducationDepartment from "../assets/thumbnail/schoolEducationaAndLitercaDepartment.png";
import healthDepartment from "../assets/thumbnail/healthDepartment.png";
import IndustriesAndCommerceDepartment from "../assets/thumbnail/IndustriesAndCommerceDepartmetn.png";
import labourDepartment from "../assets/thumbnail/labourDepartment.png";
import sindhHealthcare from "../assets/thumbnail/sindhHealthcare.png";
import CollegeEducationDepartment from "../assets/thumbnail/CollegeEducationDepartment.png";
import BoardOfRevenue from "../assets/thumbnail/BoardOfRevenue.png";
import sindhbuildingcontrol from "../assets/thumbnail/sindhbuildingcontrol.png";
import sindhEnviromentalProtection from "../assets/thumbnail/sindhEnviromentalProtection.png";
import sindhBoardRevenue from "../assets/thumbnail/sindhBoardRevenue.png";
import DistrictMunicipalCorporation from "../assets/thumbnail/DistrictMunicipalCorporation.png";
import KarachiMetopolitanCorporation from "../assets/thumbnail/KarachiMetopolitanCorporation.png";
import ExcieseTaxationAndNarcotics from "../assets/thumbnail/ExcieseTaxationAndNarcotics.png";
import SindhMasterPlan from "../assets/thumbnail/SindhMasterPlan.png";

const {
  parent_container,
  video_container,
  video,
  video_overlay,
  title_container,
  video_title,
  player,
  totlal_videos,
  full_videos,
} = style;
export const tutorial = [
  {
    id: 1,
    tutorial: healthVideo,
    department: "Health Department",
    thumbnail: healthDepartment,
    length: 3,
  },

  {
    id: 2,
    tutorial: ICD_001,
    department: "Industries and Commerce Department",
    thumbnail: IndustriesAndCommerceDepartment,
    length: 9,
  },
  {
    id: 3,
    tutorial: Ld_001,
    department: "Labour Department",
    thumbnail: labourDepartment,
    length: 2,
  },
  {
    id: 4,
    tutorial: sindhHealthcarevideo,
    department: "Sindh Healthcare Commission",
    thumbnail: sindhHealthcare,
    length: 1,
  },
  {
    id: 5,
    tutorial: schooleDepartmentVideo,
    department: "School Education and Literacy Department",
    thumbnail: schoolEducationDepartment,
    length: 1,
  },
  {
    id: 6,
    tutorial: schooleDepartmentVideo,
    department: "School Education and Literacy Department",
    thumbnail: CollegeEducationDepartment,
    length: 1,
  },
  {
    id: 7,
    tutorial: sepa_001,
    department: "Sindh Environmental Protection Agency (SEPA)",
    thumbnail: sindhEnviromentalProtection,
    length: 2,
  },
  {
    id: 8,
    tutorial: SBCA_006,
    department: "Sindh Building Control Authority (SBCA)",
    thumbnail: sindhbuildingcontrol,
    length: 7,
  },
  {
    id: 9,
    tutorial: BOR_001,
    department: "Board of Revenue",
    thumbnail: BoardOfRevenue,
    length: 1,
  },
  {
    id: 10,
    tutorial: BOR_001,
    department: "Sindh Board Revenue",
    thumbnail: sindhBoardRevenue,
    length: 1,
  },
  {
    id: 11,
    tutorial: DMC_001,
    department: "District Municipal Corporation (DMC)",
    thumbnail: DistrictMunicipalCorporation,
    length: 1,
  },
  {
    id: 12,
    tutorial: KMC_001,
    department: "Karachi Metropolitan Corporation (KMC)",
    thumbnail: KarachiMetopolitanCorporation,
    length: 1,
  },
  {
    id: 13,
    tutorial: NC_001,
    department: "Excise, Taxation &amp; Narcotics Control Department\n",
    thumbnail: ExcieseTaxationAndNarcotics,
    length: 1,
  },
  // This department is not adding in regulatory catalog

  // {
  //   id: 14,
  //   tutorial: SMPA,
  //   department: "Sindh Master PLan Authority",
  //   thumbnail: SindhMasterPlan,
  //   length: 1,
  // },
];
function Team() {
  const [hover, setHover] = useState(false);
  const [hoverID, sethoverID] = useState();
  const [playListLength, setplayListLength] = useState(0);
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
      {windowWidth >= 500 && <div className="" style={{ height: 120 }}></div>}

      <div
        className="row "
        style={{
          background: "",
        }}
      >
        <div
          className="col-lg-12"
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div className="">
            <h1 className={"tutorial"}>Tutorials</h1>
            <p
              className={
                window.innerWidth <= 540
                  ? "mobileparaforfeedback"
                  : "feedbackpara col-8 mb-5"
              }
              style={{
                fontSize:
                  window.innerWidth === 280 || window.innerWidth === 320
                    ? "17.5px"
                    : " ",
                textAlign: "center",
              }}
            >
              Project Implementation Unit CLICK has developed an interactive
              guide to registration of various licenses and permits required for
              doing business in Sindh. These tutorials provide a simple guide
              through the Regulatory requirements to obtain a specific business
              license or permit.
            </p>
          </div>
        </div>
      </div>
      <div className=""></div>
      <div className={parent_container}>
        <div className={video_container}>
          {tutorial?.map(({ id, department, thumbnail, length }, index) => {
            return (
              <>
                <div
                  className={video}
                  onMouseEnter={() => {
                    setHover(true);
                    sethoverID(index + 1);
                  }}
                  onMouseLeave={() => {
                    setHover(false);
                  }}
                >
                  <Link
                    to={`/watch/${department}/${id}`}
                    style={{ position: "relative" }}
                  >
                    {length > 1 && (
                      <div className={video_overlay}>
                        <p className={totlal_videos}>
                          {" "}
                          <i
                            class="fa-solid fa-play"
                            style={{ color: "white" }}
                          ></i>{" "}
                          {length} videos
                        </p>
                      </div>
                    )}
                    <div className={length > 1 && player}>
                      <img
                        src={thumbnail}
                        width={"100%"}
                        height={windowWidth >= 1400 ? 250 : 210}
                        style={{
                          position: "relative",
                          zIndex: -9999,
                          objectFit: "cover",
                          borderRadius: 5,
                        }}
                      />
                    </div>
                  </Link>
                  <div className={` ${title_container} `}>
                    <div className={video_title}>
                      <p className={full_videos}>{department}</p>
                      {length > 1 && (
                        <p
                          className={"full_videos"}
                          style={{
                            marginTop: -7,
                            marginBottom: 0,
                            fontSize: 14,
                            color: "#808080",
                          }}
                        >
                          {" "}
                          View All Videos
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Team;
