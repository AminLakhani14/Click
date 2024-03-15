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
import AD_001 from "../assets/tutorial/AD-001.mp4";
import AD_002 from "../assets/tutorial/AD-002.mp4";
import ICD_001 from "../assets/tutorial/ICD-001.mp4";
import ICD_002 from "../assets/tutorial/ICD-002.mp4";
import ICD_003 from "../assets/tutorial/ICD-003.mp4";
import ICD_004 from "../assets/tutorial/ICD-004.mp4";
import ICD_005 from "../assets/tutorial/ICD-005.mp4";
import ICD_006 from "../assets/tutorial/ICD-006.mp4";
import ICD_007 from "../assets/tutorial/ICD-007.mp4";
import ICD_008A from "../assets/tutorial/ICD-008A.mp4";
import ICD_016 from "../assets/tutorial/ICD-016.mp4";
import sindhHealthcarevideo from "../assets/tutorial/sindhHealthcare.mp4";
import sepa_001 from "../assets/tutorial/sepa-001.mp4";
import sepa_003 from "../assets/tutorial/sepa-003.mp4";
import sepa_004 from "../assets/tutorial/sepa-004.mp4";
import sepa_005 from "../assets/tutorial/sepa-005.mp4";
import sepa_006 from "../assets/tutorial/sepa-005.mp4";
import SBCA_001_B from "../assets/tutorial/SBCA-001(B).mp4";
import SBCA_006 from "../assets/tutorial/SBCA-006.mp4";
import SBCA_002 from "../assets/tutorial/SBCA-002.mp4";
import SBCA_003 from "../assets/tutorial/SBCA-003.mp4";
import SBCA_004 from "../assets/tutorial/SBCA-004.mp4";
import SBCA_005 from "../assets/tutorial/SBCA-005.mp4";
import SBCA_007 from "../assets/tutorial/SBCA-007.mp4";
import BOR_001 from "../assets/tutorial/BOR-001.mp4";
import DMC_001 from "../assets/tutorial/DMC-001.mp4";
import KMC_001 from "../assets/tutorial/KMC-001.mp4";
import NC_001 from "../assets/tutorial/NC-001.mp4";
import KMC_013 from "../assets/tutorial/KMC-013.mp4";
import KMC_005 from "../assets/tutorial/KMC-005.mp4";
import KMC_022 from "../assets/tutorial/KMC-022.mp4";
import KMC_019 from "../assets/tutorial/KMC-019.mp4";
import KMC_017 from "../assets/tutorial/KMC-017.mp4";
import KMC_016 from "../assets/tutorial/KMC-016.mp4";
import KMC_021 from "../assets/tutorial/KMC-021.mp4";
import KMC_NOC_FOR_SALE from "../assets/tutorial/KMC-NOC-for-sale.mp4";
import ICD_012 from "../assets/tutorial/ICD-012.mp4";
import ICD_015 from "../assets/tutorial/ICD-015.mp4";
import ICD_014 from "../assets/tutorial/ICD-014.mp4";
import ICD_023 from "../assets/tutorial/ICD-023.mp4";
import ICD_009 from "../assets/tutorial/ICD-009.mp4";




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
import DistrictMunicipalCorporation from "../assets/thumbnail/DistrictMunicipalCorporation.png";
import KarachiMetopolitanCorporation from "../assets/thumbnail/KarachiMetopolitanCorporation.png";
import ExcieseTaxationAndNarcotics from "../assets/thumbnail/ExcieseTaxationAndNarcotics.png";
import AgricultureDepartment from "../assets/thumbnail/AgricultureDepartment.png";
import sindhIndustrialTradingEstateAgency from "../assets/thumbnail/sindhIndustrialTradingEstateAgency.png";




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
    thumbnail: IndustriesAndCommerceDepartment,
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
    tutorial: DMC_001,
    department: "District Municipal Corporation (DMC)",
    license: "Trade License",
    thumbnail: DistrictMunicipalCorporation,
  },
  {
    id: 12,
    tutorial: KMC_001,
    department: "Karachi Metropolitan Corporation (KMC)",
    license:'Transfer Mutation Of Land',
    thumbnail: KarachiMetopolitanCorporation,
    length: 1,
  },
  {
    id: 13,
    tutorial: NC_001,
    department: "Excise, Taxation &amp; Narcotics Control Department\n",
    license:'Registering a Motor Vehicle',
    thumbnail: ExcieseTaxationAndNarcotics,
    length: 1,
  },
  {
    id: 14,
    tutorial: AD_001,
    department: "Agriculture Department",
    license:'Distributor Registration / License (for both Pesticides and fertilizers)',
    thumbnail: AgricultureDepartment,
    length: 1,
  },
  {
    id: 15,
    tutorial: ICD_012,
    department: "Sindh Industrial Trading Estate (S.I.T.E) Limited",
    license:'NOC For Utilities',
    thumbnail: sindhIndustrialTradingEstateAgency,
    length: 1,
  },
  {
    id: 16,
    tutorial: LIcensetosaledrugbytretail,
    department: "Health Department",
    license: "License to sell Drugs by Way of Retail Sale (Form-6)",
    thumbnail: healthDepartment,
  },
  {
    id: 17,
    tutorial: licenseToSaleDrugByWholeSale,
    department: "Health Department",
    license: "License to sell Drugs by Way of Wholesale 7A",
    thumbnail: healthDepartment,
  },

  {
    id: 18,
    tutorial: ICD_002,
    department: "Industries and Commerce Department",
    license: "Registration Certificate of Amendment/Dissolution /Rectification in Partnership Firm",
    thumbnail: IndustriesAndCommerceDepartment,
  },

  {
    id: 19,
    tutorial: Ld_002,
    department: "Labour Department",
    license: "Registration of Factories",
    thumbnail: labourDepartment,
    length: 2,
  },

  {
    id: 20,
    tutorial: ICD_003,
    department: "Industries and Commerce Department",
    license: "Registration of New Boiler",
    thumbnail: IndustriesAndCommerceDepartment,
  },
  {
    id: 21,
    tutorial: ICD_004,
    department: "Industries and Commerce Department",
    license: "Registration of Old Boiler",
    thumbnail: IndustriesAndCommerceDepartment,
  },
  {
    id: 22,
    tutorial: ICD_005,
    department: "Industries and Commerce Department",
    license: "Approval of Plan and Particulars of Boilers Acceptable for Registration (New Boiler)",
    thumbnail: IndustriesAndCommerceDepartment,
  },
  {
    id: 23,
    tutorial: ICD_006,
    department: "Industries and Commerce Department",
    license: "Approval of Plan and Particulars of Boilers Acceptable for Registration (Used Boiler)",
    thumbnail: IndustriesAndCommerceDepartment,
  },
  {
    id: 24,
    tutorial: ICD_007,
    department: "Industries and Commerce Department",
    license: "Transfer of Ownership",
    thumbnail: IndustriesAndCommerceDepartment,
  },
  {
    id: 25,
    tutorial: SBCA_007,
    department: "Sindh Building Control Authority (SBCA)",
    license: "Attestation Of Fee",
    thumbnail: sindhbuildingcontrol,
  }, {
    id: 26,
    tutorial: SBCA_002,
    department: "Sindh Building Control Authority (SBCA)",
    license: "Notice of Completion (I-IV)",
    thumbnail: sindhbuildingcontrol,
  },
  {
    id: 27,
    tutorial: SBCA_003,
    department: "Sindh Building Control Authority (SBCA)",
    license: "ADditional Floor Charges For Category I Betterment Charges For Category(II, III & IV)",
    thumbnail: sindhbuildingcontrol,
  },
  {
    id: 28,
    tutorial: SBCA_001_B,
    department: "Sindh Building Control Authority (SBCA)",
    license: "Approval Of Building Plan For Category (II, III & IV)",
    thumbnail: sindhbuildingcontrol,
  },
  {
    id: 29,
    tutorial: SBCA_004,
    department: "Sindh Building Control Authority (SBCA)",
    license: "Renewal of Building Plan for Category (I To IV)",
    thumbnail: sindhbuildingcontrol,
  },
  {
    id: 30,
    tutorial: SBCA_005,
    department: "Sindh Building Control Authority (SBCA)",
    license: "Addition / Alteration / Revision of Building Plan for Category (I To IV)",
    thumbnail: sindhbuildingcontrol,
  },
  {
    id: 31,
    tutorial: sepa_003,
    department: "Sindh Environmental Protection Agency (SEPA)",
    license: "Approval Under Section 17 (IEE,EIA,EC)",
    thumbnail: sindhEnviromentalProtection,
  },
  {
    id: 32,
    tutorial: ICD_016,
    department: "Industries and Commerce Department",
    license: "Allotment Order",
    thumbnail: IndustriesAndCommerceDepartment,
  },
  {
    id: 33,
    tutorial: ICD_008A,
    department: "Industries and Commerce Department",
    license: "Allotment Order Of Land",
    thumbnail: IndustriesAndCommerceDepartment,
  },
  {
    id: 34,
    tutorial: sepa_004,
    department: "Sindh Environmental Protection Agency (SEPA)",
    license: "Approval of an Environmental Management Plan",
    thumbnail: sindhEnviromentalProtection,
  },
  {
    id: 35,
    tutorial: sepa_005,
    department: "Sindh Environmental Protection Agency (SEPA)",
    license: "Certification of Environmental Plan",
    thumbnail: sindhEnviromentalProtection,
  },
  {
    id: 36,
    tutorial: sepa_006,
    department: "Sindh Environmental Protection Agency (SEPA)",
    license: "Approval of Hospital Waste Management Plan",
    thumbnail: sindhEnviromentalProtection,
  },
  {
    id: 37,
    tutorial: AD_002,
    department: "Agriculture Department",
    license:'License for Fertilizer Nutrients',
    thumbnail: AgricultureDepartment,
    length: 1,
  },
  {
    id: 38,
    tutorial: KMC_013,
    department: "Karachi Metropolitan Corporation (KMC)",
    license:'License for Fertilizer Nutrients',
    thumbnail: KarachiMetopolitanCorporation,
    length: 1,
  },
  {
    id: 39,
    tutorial: KMC_022,
    department: "Karachi Metropolitan Corporation (KMC)",
    license:'NOC for organizing temporary Bachat Bazars',
    thumbnail: KarachiMetopolitanCorporation,
    length: 1,
  },
  {
    id: 40,
    tutorial: KMC_019,
    department: "Karachi Metropolitan Corporation (KMC)",
    license:'NOC For Film',
    thumbnail: KarachiMetopolitanCorporation,
    length: 1,
  },
  {
    id: 41,
    tutorial: KMC_017,
    department: "Karachi Metropolitan Corporation (KMC)",
    license:"Temporary NOC for temporary installation of\nGenerators outside the premises",
    thumbnail: KarachiMetopolitanCorporation,
    length: 1,
  },
  {
    id: 42,
    tutorial: KMC_021,
    department: "Karachi Metropolitan Corporation (KMC)",
    license:"Road Cutting Permission",
    thumbnail: KarachiMetopolitanCorporation,
    length: 1,
  },
  {
    id: 43,
    tutorial: KMC_NOC_FOR_SALE,
    department: "Karachi Metropolitan Corporation (KMC)",
    license:"NOC For Sale",
    thumbnail: KarachiMetopolitanCorporation,
    length: 1,
  },
  {
    id: 44,
    tutorial: ICD_015,
    department: "Sindh Industrial Trading Estate (S.I.T.E) Limited",
    license:'NOC For Beautification Or Car Parking',
    thumbnail: sindhIndustrialTradingEstateAgency,
    length: 1,
  },
  {
    id: 45,
    tutorial: ICD_014,
    department: "Sindh Industrial Trading Estate (S.I.T.E) Limited",
    license:'NOC For Road Cutting',
    thumbnail: sindhIndustrialTradingEstateAgency,
    length: 1,
  },
  {
    id: 46,
    tutorial: ICD_023,
    department: "Sindh Industrial Trading Estate (S.I.T.E) Limited",
    license:'Approval For UnAuthorized Construction',
    thumbnail: sindhIndustrialTradingEstateAgency,
    length: 1,
  },
  {
    id: 47,
    tutorial: KMC_016,
    department: "Karachi Metropolitan Corporation (KMC)",
    license:"NOC For Land Use",
    thumbnail: KarachiMetopolitanCorporation,
    length: 1,
  },
  {
    id: 48,
    tutorial: ICD_009,
    department: "Sindh Industrial Trading Estate (S.I.T.E) Limited",
    license:'Collection of Additional Trade Fee',
    thumbnail: sindhIndustrialTradingEstateAgency,
    length: 1,
  },
  {
    id: 49,
    tutorial: KMC_005,
    department: "Karachi Metropolitan Corporation (KMC)",
    license:"Transfer / Mutuation Of Land in Orangi Town",
    thumbnail: KarachiMetopolitanCorporation,
    length: 1,
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
                        // onClick={() => {
                        //   window.scrollTo(0, 0)
                        // }}
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
