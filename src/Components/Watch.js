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
import schoolEducationDepartment from "../assets/thumbnail/schoolEducationaAndLitercaDepartment.png";

import licenseToManufactureDrug from "../assets/tutorial/LIcensetomanufacturedrug.mp4";
import licenseToSaleDrugByWholeSale from "../assets/tutorial/LIcensetosaledrugbyholesale.mp4";
import LIcensetosaledrugbytretail from "../assets/tutorial/LIcensetosaledrugbytretail.mp4";
import Ld_001 from "../assets/tutorial/led-001.mp4";
import Ld_002 from "../assets/tutorial/ld002.mp4";

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
import SBCA_006 from "../assets/tutorial/SBCA-006.mp4";
import BOR_001 from "../assets/tutorial/BOR-001.mp4";
import { Link, useParams } from "react-router-dom";
import { ahmer } from "./Tutorial";

import sindhHealthcare from "../assets/thumbnail/sindhHealthcare.png";
import CollegeEducationDepartment from "../assets/thumbnail/CollegeEducationDepartment.png";
import healthDepartment from "../assets/thumbnail/healthDepartment.png";
import labourDepartment from "../assets/thumbnail/labourDepartment.png";
import IndustriesAndCommerceDepartment from "../assets/thumbnail/IndustriesAndCommerceDepartmetn.png"
import BoardOfRevenue from "../assets/thumbnail/BoardOfRevenue.png"
import sindhbuildingcontrol from "../assets/thumbnail/sindhbuildingcontrol.png"
import sindhEnviromentalProtection from "../assets/thumbnail/sindhEnviromentalProtection.png"


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
  },{
    id: 8,
    tutorial: SBCA_006,
    department: "Sindh Building Control Authority (SBCA)",
    license: "Permit to Demolish Buildings for Catergory(1-4)",
    thumbnail: sindhbuildingcontrol,
  },{
    id: 9,
    tutorial: BOR_001,
    department: "Board of Revenue",
    license: "Issuance Of True Copy Of Land Record",
    thumbnail: BoardOfRevenue,
  },
  {
    id: 10,
    tutorial: licenseToSaleDrugByWholeSale,
    department: "Health Department",
    license: "License to sell Drugs by Way of Retail Sale (Form-6)",
    thumbnail: healthDepartment,
  },
  {
    id: 11,
    tutorial: LIcensetosaledrugbytretail,
    department: "Health Department",
    license: "License to sell Drugs by Way of Wholesale 7A",
    thumbnail: healthDepartment,
  },

  {
    id: 12,
    tutorial: ICD_002,
    department: "Industries and Commerce Department",
    license: "Registration Certificate of Amendment/Dissolution /Rectification in Partnership Firm",
    thumbnail: IndustriesAndCommerceDepartment,
  },

  {
    id: 13,
    tutorial: Ld_002,
    department: "Labour Department",
    license: "Registration of Factories",
    thumbnail: labourDepartment,
    length: 2,
  },
  
  {
    id: 14,
    tutorial: ICD_003,
    department: "Industries and Commerce Department",
    license: "Registration of New Boiler",
    thumbnail: IndustriesAndCommerceDepartment,
  },
  {
    id: 15,
    tutorial: ICD_004,
    department: "Industries and Commerce Department",
    license: "Registration of Old Boiler",
    thumbnail: IndustriesAndCommerceDepartment,
  },
  {
    id: 16,
    tutorial: ICD_005,
    department: "Industries and Commerce Department",
    license: "Approval of Plan and Particulars of Boilers Acceptable for Registration (New Boiler)",
    thumbnail: IndustriesAndCommerceDepartment,
  },
  {
    id: 17,
    tutorial: ICD_006,
    department: "Industries and Commerce Department",
    license: "Approval of Plan and Particulars of Boilers Acceptable for Registration (Used Boiler)",
    thumbnail: IndustriesAndCommerceDepartment,
  },
  {
    id: 18,
    tutorial: ICD_007,
    department: "Industries and Commerce Department",
    license: "Transfer of Ownership",
    thumbnail: IndustriesAndCommerceDepartment,
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
    let zain = departmentFilter?.filter((item) => {
      return item?.id == id ? item : undefined;
    });
    setfiltervideo(zain);
  }, [id]);

  useEffect(() => {
    setplay(true);
  });
  return (
    <>
      {windowWidth <= 500 ? <MobileHeaderGeneric /> : <GenericHeader />}
      {windowWidth >=500 && <div className="" style={{ height: 133 }}></div>}


      <div className="row g-0 mb-4 d-flex justify-content-center">
        <div className="d-flex justify-content-center ">
          <h1 className="tutorial">Tutorials</h1>
        </div>
      </div>
      <div className=""></div>
      <div className="parent_container">
        <div className="main_video">
          {filtervideo?.map(({ tutorial, department, license, id }) => {
            return (
              <>
                <ReactPlayer
                  url={tutorial}
                  controls={true}
                  width={"100%"}
                  height={windowWidth <=500?200 :windowWidth  >= 1020 ? 500 : windowWidth >=1400 && 600}

                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.12)",
                    overflow: "hidden",
                    borderRadius: 10,
                    boxShadow: "0 0.2rem 1rem rgba(0, 0, 0, 0.12)",
                  }}
                  // height={500}
                  // light={<img src={zain}/>}
                  playing={play}
                  pip={true}
                />
                <div className="video_discription">
                  <h1 class="text-2xl lg:text-3xl flex font-semibold">
                    {department}
                  </h1>
                  <p class=""style={{color:'red!important'}}>{license}</p>
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
                        onClick={()=>{
                          window.scrollTo(0,0)
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
