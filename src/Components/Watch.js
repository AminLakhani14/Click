import React from "react";
import GenericHeader from "./genericHeader";
import { useState } from "react";
import { useEffect } from "react";
import MobileHeaderGeneric from "./MobileHeaderGeneric";
import Footer from "./footer";
import "../Css/watch.css";
import ReactPlayer from "react-player";
import schooleDepartmentVideo from "../assets/tutorial/schoolEducationAndLiteracyDepartment.mp4";
import schoolEducationDepartment from "../assets/thumbnail/schoolEducationaAndLitercaDepartment.png";
import licenseToManufactureDrug from "../assets/tutorial/LIcensetomanufacturedrug.mp4";
import licenseToSaleDrugByWholeSale from "../assets/tutorial/LIcensetosaledrugbyholesale.mp4";
import LIcensetosaledrugbytretail from "../assets/tutorial/LIcensetosaledrugbytretail.mp4";
import Ld_001 from "../assets/tutorial/led-001.mp4";
import Ld_002 from "../assets/tutorial/ld002.mp4";
import SRB_001 from "../assets/tutorial/SRB-001.mp4";
import CED_001 from "../assets/tutorial/CED_001.mp4";
import ICD_001 from "../assets/tutorial/ICD-001.mp4";
import ICD_002 from "../assets/tutorial/ICD-002.mp4";
import ICD_003 from "../assets/tutorial/ICD-003.mp4";
import ICD_004 from "../assets/tutorial/ICD-004.mp4";
import ICD_005 from "../assets/tutorial/ICD-005.mp4";
import ICD_006 from "../assets/tutorial/ICD-006.mp4";
import ICD_007 from "../assets/tutorial/ICD-007.mp4";
import sindhHealthcarevideo from "../assets/tutorial/sindhHealthcare.mp4";
import sepa_001 from "../assets/tutorial/sepa-001.mp4";
import sepa_003 from "../assets/tutorial/sepa-003.mp4";
import SBCA_001_B from "../assets/tutorial/SBCA-001(B).mp4";
import SBCA_006 from "../assets/tutorial/SBCA-006.mp4";
import SBCA_002 from "../assets/tutorial/SBCA-002.mp4";
import SBCA_003 from "../assets/tutorial/SBCA-003.mp4";
import SBCA_004 from "../assets/tutorial/SBCA-004.mp4";
import SBCA_005 from "../assets/tutorial/SBCA-005.mp4";
import SBCA_007 from "../assets/tutorial/SBCA-007.mp4";
import BOR_001 from "../assets/tutorial/BOR-001.mp4";
import { Link, useParams } from "react-router-dom";
import sindhHealthcare from "../assets/thumbnail/sindhHealthcare.png";
import CollegeEducationDepartment from "../assets/thumbnail/CollegeEducationDepartment.png";
import healthDepartment from "../assets/thumbnail/healthDepartment.png";
import labourDepartment from "../assets/thumbnail/labourDepartment.png";
import IndustriesAndCommerceDepartment from "../assets/thumbnail/IndustriesAndCommerceDepartmetn.png"
import BoardOfRevenue from "../assets/thumbnail/BoardOfRevenue.png"
import sindhbuildingcontrol from "../assets/thumbnail/sindhbuildingcontrol.png"
import sindhEnviromentalProtection from "../assets/thumbnail/sindhEnviromentalProtection.png"
import sindhBoardRevenue from "../assets/thumbnail/sindhBoardRevenue.png"


export const videos = [
  {
    id: 1,
    tutorial: licenseToManufactureDrug,
    department: "Health Department",
    license: "License to manufacture Drugs",
    thumbnail: healthDepartment,
  },
  {
    id: 2,
    tutorial: ICD_001,
    department: "Industries and Commerce Department",
    license: "Registration Certificate of Partnership Firm",
    thumbnail: schoolEducationDepartment,
  },
  {
    id: 3,
    tutorial: Ld_001,
    department: "Labour Department",
    license: "Registration of Shops & Establishment",
    thumbnail: labourDepartment,
    length: 2,
  },
  {
    id: 4,
    tutorial: sindhHealthcarevideo,
    department: "Sindh Healthcare Commission",
    license: "Registration & Licensing of Healthcare Establishments",
    thumbnail: sindhHealthcare,
    length: 2,
  },
  {
    id: 5,
    tutorial: schooleDepartmentVideo,
    department: "School Education and Literacy Department",
    license: "Registration of Privately Managed Schools",
    thumbnail: schoolEducationDepartment,
  },
  {
    id: 6,
    tutorial: CED_001,
    department: "College Education Department",
    license: "Registration of Privately Managed Colleges ",
    thumbnail: CollegeEducationDepartment,
  },
  {
    id: 7,
    tutorial: sepa_001,
    department: "Sindh Environmental Protection Agency (SEPA)",
    license: "License For Handling Of Hazardous Substance",
    thumbnail: sindhEnviromentalProtection,
  }, {
    id: 8,
    tutorial: SBCA_006,
    department: "Sindh Building Control Authority (SBCA)",
    license: "Permit to Demolish Buildings for Catergory(1-4)",
    thumbnail: sindhbuildingcontrol,
  }, {
    id: 9,
    tutorial: BOR_001,
    department: "Board of Revenue",
    license: "Issuance Of True Copy Of Land Record",
    thumbnail: BoardOfRevenue,
  },
  {
    id: 10,
    tutorial: SRB_001,
    department: "Sindh Board Revenue",
    license: "Sindh Sales Tax on Services (SST)",
    thumbnail: sindhBoardRevenue,
  },
  {
    id: 11,
    tutorial: licenseToSaleDrugByWholeSale,
    department: "Health Department",
    license: "License to sell Drugs by Way of Retail Sale (Form-6)",
    thumbnail: healthDepartment,
  },
  {
    id: 12,
    tutorial: LIcensetosaledrugbytretail,
    department: "Health Department",
    license: "License to sell Drugs by Way of Wholesale 7A",
    thumbnail: healthDepartment,
  },

  {
    id: 13,
    tutorial: ICD_002,
    department: "Industries and Commerce Department",
    license: "Registration Certificate of Amendment/Dissolution /Rectification in Partnership Firm",
    thumbnail: IndustriesAndCommerceDepartment,
  },

  {
    id: 14,
    tutorial: Ld_002,
    department: "Labour Department",
    license: "Registration of Factories",
    thumbnail: labourDepartment,
    length: 2,
  },

  {
    id: 15,
    tutorial: ICD_003,
    department: "Industries and Commerce Department",
    license: "Registration of New Boiler",
    thumbnail: IndustriesAndCommerceDepartment,
  },
  {
    id: 16,
    tutorial: ICD_004,
    department: "Industries and Commerce Department",
    license: "Registration of Old Boiler",
    thumbnail: IndustriesAndCommerceDepartment,
  },
  {
    id: 17,
    tutorial: ICD_005,
    department: "Industries and Commerce Department",
    license: "Approval of Plan and Particulars of Boilers Acceptable for Registration (New Boiler)",
    thumbnail: IndustriesAndCommerceDepartment,
  },
  {
    id: 18,
    tutorial: ICD_006,
    department: "Industries and Commerce Department",
    license: "Approval of Plan and Particulars of Boilers Acceptable for Registration (Used Boiler)",
    thumbnail: IndustriesAndCommerceDepartment,
  },
  {
    id: 19,
    tutorial: ICD_007,
    department: "Industries and Commerce Department",
    license: "Transfer of Ownership",
    thumbnail: IndustriesAndCommerceDepartment,
  },
  {
    id: 20,
    tutorial: SBCA_007,
    department: "Sindh Building Control Authority (SBCA)",
    license: "Attestation Of Fee",
    thumbnail: sindhbuildingcontrol,
  }, {
    id: 21,
    tutorial: SBCA_002,
    department: "Sindh Building Control Authority (SBCA)",
    license: "Notice of Completion (I-IV)",
    thumbnail: sindhbuildingcontrol,
  },
  {
    id: 22,
    tutorial: SBCA_003,
    department: "Sindh Building Control Authority (SBCA)",
    license: "ADditional Floor Charges For Category I Betterment Charges For Category(II, III & IV)",
    thumbnail: sindhbuildingcontrol,
  },
  {
    id: 23,
    tutorial: SBCA_001_B,
    department: "Sindh Building Control Authority (SBCA)",
    license: "Approval Of Building Plan For Category (II, III & IV)",
    thumbnail: sindhbuildingcontrol,
  },
  {
    id: 24,
    tutorial: SBCA_004,
    department: "Sindh Building Control Authority (SBCA)",
    license: "Renewal of Building Plan for Category (I To IV)",
    thumbnail: sindhbuildingcontrol,
  },
  {
    id: 25,
    tutorial: SBCA_005,
    department: "Sindh Building Control Authority (SBCA)",
    license: "Addition / Alteration / Revision of Building Plan for Category (I To IV)",
    thumbnail: sindhbuildingcontrol,
  },
  {
    id: 26,
    tutorial: sepa_003,
    department: "Sindh Environmental Protection Agency (SEPA)",
    license: "Approval Under Section 17 (IEE,EIA,EC)",
    thumbnail: sindhEnviromentalProtection,
  },

];

const Watch = () => {

  let { id, department } = useParams();
  const [departmentFilter, setdepartmentFilter] = useState(videos);
  useEffect(() => {
    let filterd = departmentFilter?.filter((item) => {
      return department == item?.department ? item : undefined;
    });
    setdepartmentFilter(filterd);
  }, [id]);
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
  });
  const [play, setplay] = useState(true);
  console.log(id);

  const [filtervideo, setfiltervideo] = useState(videos);
  useEffect(() => {
    let filteredVideoWithId = departmentFilter?.filter((item) => {
      return item?.id == id ? item : undefined;
    });
    setfiltervideo(filteredVideoWithId);
  }, [id]);

  useEffect(() => {
    setplay(true);
  }, []);
  return (
    <>
      {windowWidth <= 500 ? <MobileHeaderGeneric /> : <GenericHeader />}
      {windowWidth >= 500 && <div className="" style={{ height: 120 }}></div>}
      <div className=""></div>
      <div className="parent_container mt-5">
        <div className="main_video">
          {filtervideo?.map(({ tutorial, department, thumbnail, license, id }) => {
            return (
              <>
                <ReactPlayer
                  url={tutorial}
                  controls={true}
                  width={"100%"}
                  height={windowWidth <= 500 ? 200 : windowWidth >= 1020 ? 500 : windowWidth >= 1400 && 600}
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.12)",
                    overflow: "hidden",
                    borderRadius: 10,
                    boxShadow: "0 0.2rem 1rem rgba(0, 0, 0, 0.12)",
                  }}
                  light={<img style={{ height: "100%", width: '100%' }} src={thumbnail} />}
                  playing={play}
                  autoPlay={true}
                />
                <div className="video_discription">
                  <h1 class="text-2xl lg:text-3xl flex font-semibold">
                    {department}
                  </h1>
                  <p class="" style={{ color: 'red!important' }}>{license}</p>
                </div>
              </>
            );
          })}
        </div>
        {departmentFilter.length > 1 && (
          <div className="side_video">
            {departmentFilter?.map(
              ({ tutorial, department, license, thumbnail, id }) => {
                return (
                  <>
                    <Link to={`/watch/${department}/${id}`}>
                      <img
                        width={"100%"}
                        height={windowWidth >= 1400 ? 250 : 210}
                        src={thumbnail}
                        style={{ borderRadius: 5, objectFit: "cover" }}
                        alt=""
                        onClick={() => {
                          window.scrollTo(0, 0)
                        }}
                      />
                    </Link>
                    <div className="title_container">
                      <div className="video_title">
                        <h6>{department}</h6>
                        <p>{license}</p>
                      </div>
                    </div>
                  </>
                );
              }
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Watch;
