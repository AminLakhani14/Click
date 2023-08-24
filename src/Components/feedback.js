import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/header.css";
import "../Css/resource.css";
import Footer from "./footer";
import GenericHeader from "./genericHeader";
import "../Css/investnow.css";
import BG1 from "../assets/BG1.jpg";

import { Box, TextField, TextareaAutosize } from "@mui/material";
import MobileHeaderGeneric from "./MobileHeaderGeneric";

export default function FeedBack() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);
  const [enableAreas, setEnableAreas] = useState(true);
  const [areaDropdown, setAreaDropdown] = useState([
    { id: "Urban", text: "Urban" },
    { id: "Rural", text: "Rural" },
  ]);
  const [label, setLabel] = useState("Areas");

  const areas = [
    //College Education Department Dropdown
    { id: "Urban", value: "Urban", text: "Urban" },
    { id: "Urban", value: "Rural", text: "Rural" },
    //Labour
    {
      id: "labour",
      value: "labour",
      text: "Same",
    },
    {
      id: "labour",
      value: "labour",
      text: "10 Days",
    },
    //School Education and Literacy Department Dropdown
    {
      id: "MontToMatric",
      value: "MontToMatric",
      text: "Institutions from Montessori up to Class-X",
    },
    {
      id: "MontToMatric",
      value: "HigherAndSecondary",
      text: "Higher Secondary School",
    },
    {
      id: "MontToMatric",
      value: "OALevel",
      text: 'Institutions of "O" & "A" Level',
    },
    {
      id: "MontToMatric",
      value: "HigherLearning",
      text: "Degree awarding institutes and universities including Institutions having academic linkage / foreign collaboration/affiliation with any other institutions of higher learning",
    },
    //Agriculture Dropdown
    {
      id: "Agriculture",
      value: "BeddedMedical",
      text: "2 1-24 bedded Medical Centre/ Hospital",
    },
    {
      id: "Agriculture",
      value: "AboveBeddedMedical",
      text: " 25 and above bedded Hospital",
    },
    {
      id: "Agriculture",
      value: "AlreadyRegistered",
      text: "Any change in the already registered HCE",
    },
    //HealthDepartment Dropdown
    {
      id: "HealthDepartment",
      value: "HealthDepartment",
      text: "License to sell Drugs by Way of Retail Sale (Form-6)",
    },
    {
      id: "HealthDepartment",
      value: "Wholesale",
      text: "License to sell Drugs by Way of Wholesale 7A",
    },
    {
      id: "HealthDepartment",
      value: "Pharmacy",
      text: "License to sell Drugs in Pharmacy (Form-8)",
    },
    {
      id: "HealthDepartment",
      value: "NarcoticsandOtherControlledDrugs",
      text: "License to sell Narcotics and Other Controlled Drugs/ Substances (Form-9)",
    },
    {
      id: "HealthDepartment",
      value: "IndenterofDrugs",
      text: "License to Manufacturer /Importer /Indenter of Drugs (Form-7)",
    },
    //SindhHealthCareCommission Dropdown
    {
      id: "SindhHealthCareCommission",
      value: "SindhHealthCareCommission",
      text: " Single specialty (i.e general practitioner, homeo, tibb, detist, nursing/ maternity home, laboratories, radiology centre etc.",
    },
    {
      id: "SindhHealthCareCommission",
      value: "BeddedMedical",
      text: "2 1-24 bedded Medical Centre/ Hospital",
    },
    {
      id: "SindhHealthCareCommission",
      value: "AboveBeddedMedical",
      text: " 25 and above bedded Hospital",
    },
    {
      id: "SindhHealthCareCommission",
      value: "AlreadyRegistered",
      text: "Any change in the already registered HCE",
    },

    //IndustriesAndCommerce Dropdown
    {
      id: "IndustriesAndCommerce",
      value: "IndustriesAndCommerce",
      text: "Registration Certificate of Partnership Firm",
    },
    {
      id: "IndustriesAndCommerce",
      value: "RegistrationCertificateofAmendment",
      text: "Registration Certificate of Amendment/Dissolution /Rectification in Partnership Firm",
    },
    {
      id: "IndustriesAndCommerce",
      value: "RegistrationofNewBoiler",
      text: "Registration of New Boiler",
    },
    {
      id: "IndustriesAndCommerce",
      value: "RegistrationofOldBoiler",
      text: "Registration of Old Boiler",
    },
    {
      id: "IndustriesAndCommerce",
      value: "ApprovalofPlanandParticularsofNewBoiler",
      text: "Approval of Plan and Particulars of Boilers Acceptable for Registration (New Boiler)",
    },
    {
      id: "IndustriesAndCommerce",
      value: "ApprovalofPlanandParticularsofUsedBoiler",
      text: "Approval of Plan and Particulars of Boilers Acceptable for Registration (Used Boiler)",
    },
    {
      id: "IndustriesAndCommerce",
      value: "TransferofOwnership",
      text: "Transfer of Ownership",
    },
    //Sindh Environment Protection Department
    {
      id: "SindhEnvironmentalProtection",
      value: "SindhEnvironmentalProtection",
      text: "License for Handling of Hazardous Substances",
    },
    {
      id: "SindhEnvironmentalProtection",
      value: "NonHazardousSubstances",
      text: "License to Waste Contractor for Handling of Hazardous Substances and Non-Hazardous substances",
    },
    {
      id: "SindhEnvironmentalProtection",
      value: "ApprovalUnderSection17",
      text: "Approval Under Section 17 (IEE/EIA/EC)",
    },
    {
      id: "SindhEnvironmentalProtection",
      value: "ApprovalofanEnvironmentalManagementPlan",
      text: "Approval of an Environmental Management Plan",
    },
    {
      id: "SindhEnvironmentalProtection",
      value: "CertificationofEnvironmentalLab",
      text: "Certification of Environmental Lab",
    },
    {
      id: "SindhEnvironmentalProtection",
      value: "ApprovalofHospitalWasteManagementPlan",
      text: "Approval of Hospital Waste Management Plan",
    },
    //Sindh Industrial Trading Estate
    {
      id: "SindhIndustrialTrading",
      value: "SindhIndustrialTrading",
      text: "Allotment of Land/ Plot",
    },
    {
      id: "SindhIndustrialTrading",
      value: "ApprovalofBuildingDrawing",
      text: "Approval of Building Drawing",
    },
    {
      id: "SindhIndustrialTrading",
      value: "ApprovalofCompletion(Block)Plan",
      text: "Approval of Completion (Block) Plan",
    },
    {
      id: "SindhIndustrialTrading",
      value: "CollectionOfAdditionalTradeFee",
      text: "Collection of Additional Trade Fee",
    },
    {
      id: "SindhIndustrialTrading",
      value: "Subdivision",
      text: "Subdivision/ Amalgamation/ Transfer/ Subletting/ Extension of Land or Plot/ Change in Constitution/ change in Constitution",
    },
    {
      id: "SindhIndustrialTrading",
      value: "IssuanceofLeaseDeed",
      text: "Issuance of Lease Deed",
    },
    {
      id: "SindhIndustrialTrading",
      value: "NOCforUtilities",
      text: "NOC for Utilities (Electricity, Gas, Cable, PTCL)",
    },
    {
      id: "SindhIndustrialTrading",
      value: "NOCforMortgage",
      text: "NOC for Mortgage",
    },
    {
      id: "SindhIndustrialTrading",
      value: "NOCforRoadCutting",
      text: "NOC for Road Cutting",
    },
    {
      id: "SindhIndustrialTrading",
      value: "NOCforcarparking",
      text: "NOC for car parking/ beautification",
    },
    // Sindh Small Industries Corporation (SSIC)
    {
      id: "SindhSamllIndustries",
      value: "SindhSamllIndustries",
      text: "Allotment Order of Land/ Plot",
    },
    {
      id: "SindhSamllIndustries",
      value: "ApprovalofDrawing",
      text: "Approval of Drawing",
    },
    {
      id: "SindhSamllIndustries",
      value: "SubdivisionTransfer",
      text: "Subdivision/Transfer/ Amalgamation/ Change in constitution (Corporate Setup)/ Change in Trade/ Subletting trade/ Conversion of plot from Industrial to Commercial/ CNG petroleum station/ Godowns & Distribution",
    },
    {
      id: "SindhSamllIndustries",
      value: "NOCforUtilitiesSI",
      text: "NOC for Utilities (Electricity, Telephone, Gas, Water)",
    },
    {
      id: "SindhSamllIndustries",
      value: "NOCforRoadCuttingSI",
      text: "NOC for Road Cutting",
    },
    {
      id: "SindhSamllIndustries",
      value: "IssuanceofLeaseDraftSI",
      text: "Issuance of Lease Draft",
    },
    {
      id: "SindhSamllIndustries",
      value: "NOCforMortgageSI",
      text: "NOC for Mortgage",
    },
    {
      id: "SindhSamllIndustries",
      value: "UnauthorizedConstructionSI",
      text: "Un- authorized Construction",
    },
    //Board Of Revenue
    {
      id: "BoardOfRevenue",
      value: "BoardOfRevenue",
      text: "Issuance of the True Copy of Land Record",
    },
    {
      id: "BoardOfRevenue",
      value: "RegistrationofDocument",
      text: "Registration of Document",
    },
    //District Muncipal Corporation
    {
      id: "DistrictMuncipal",
      value: "DistrictMuncipal",
      text: "Trade License",
    },
    {
      id: "DistrictMuncipal",
      value: "RoadCuttingPermission",
      text: "Road Cutting Permission",
    },
    {
      id: "DistrictMuncipal",
      value: "PermissionforHoldingFairs",
      text: "NOC/Permission for Holding Fairs, Events, Tournaments, and other Public Gatherings at DMC Central's Jurisdiction",
    },
    {
      id: "DistrictMuncipal",
      value: "PermissionforKeepingBuildingMaterial",
      text: "Permission for Keeping Building Material on Roads during Construction",
    },
    {
      id: "DistrictMuncipal",
      value: "PermissionforSportsActivities",
      text: "NOC/Permission for Holding Different Kind of Sports Activities in Playgrounds, Gymnasium, Sports Complex & Facilities of DMC-Central",
    },
    {
      id: "DistrictMuncipal",
      value: "PermissionforNurseriesandParks",
      text: "NOC/Permission for Establishment of Nurseries in parks, Playgrounds & Open spaces of DMC-Centra",
    },
  ];
  const department = [
    { value: "Urban", text: "College Education Department" },
    { value: "labour", text: "Labour and Human Resources Department" },
    { value: "SFA", text: "Sindh Food Authority (SFA)" },
    { value: "HealthDepartment", text: "Health Department" },
    { value: "MontToMatric", text: "School Education and Literacy Department" },
    {
      value: "SindhHealthCareCommission",
      text: "Sindh Health Care Commission",
    },
    {
      value: "IndustriesAndCommerce",
      text: "Industries and Commerce Department",
    },
    {
      value: "SindhEnvironmentalProtection",
      text: "Sindh Environmental Protection Agency (SEPA)",
    },
    {
      value: "SindhBuildingControl",
      text: "Sindh Building Control Authority (SBCA)",
    },
    { value: "Agriculture", text: "Agriculture Department" },
    {
      value: "SindhIndustrialTrading",
      text: "Sindh Industrial Trading Estate (S.I.T.E) Limited",
    },
    {
      value: "SindhSamllIndustries",
      text: "Sindh Small Industries Corporation (SSIC)",
    },
    { value: "BoardOfRevenue", text: "Board of Revenue" },
    { value: "DistrictMuncipal", text: "District Municipal Corporation (DMC)" },
    {
      value: "KarachiMetropolitan",
      text: "Karachi Metropolitan Corporation (KMC)",
    },
    { value: "EnergyDepartment", text: "Energy Department" },
    {
      value: "SindhEmployeesSecurity",
      text: "Sindh Employees Social Security Institution (SESSI)",
    },
    {
      value: "ExciseTaxation",
      text: "Excise, Taxation & Narcotics Control Department",
    },
    { value: "SindhRevenueBoard", text: "Sindh Revenue Board" },
    { value: "LocalGovernment", text: "Local Government Department" },
    {
      value: "KarachiWaterAndSewerage",
      text: "Karachi Water &amp; Sewerage Board",
    },
  ];
  const handleDepartments = (e, param) => {
    debugger;
    const selectedValue = e.target.value;
    const departmentLabels = {
      Urban: "Areas",
      labour:"Labour",
      MontToMatric: "School Education and Literacy Department",
      SindhHealthCareCommission: "Sindh Health Care Commission",
      HealthDepartment: "Health Department",
      IndustriesAndCommerce: "Industries and Commerce Department",
      SindhEnvironmentalProtection: "Sindh Environmental Protection Agency",
      SindhIndustrialTrading:
        "Sindh Industrial Trading Estate (S.I.T.E) Limited",
      SindhSamllIndustries: "Sindh Small Industries Corporation (SSIC)",
      BoardOfRevenue: "Board of Revenue",
      DistrictMuncipal: "District Municipal Corporation (DMC)",
    };

    let filterData = [];
    let filterAreaData = [];
    let subData = [...areas];
    // let data = [...gridData];

    if (departmentLabels[selectedValue]) {
      setLabel(departmentLabels[selectedValue]);
      filterAreaData = subData.filter((x) => x.id === selectedValue);
      setAreaDropdown(filterAreaData);
      // filterData = data.filter((x) => x.id === selectedValue);
      setEnableAreas(true);
    } else if (selectedValue !== "") {
      setEnableAreas(false);
      // filterData = data.filter((x) => x.id === selectedValue);
    }

    // !param ? setChangeValue(filterData) : (filterData = filterData);
    return filterData;
  };
  const handleArea = (e) => {
    debugger;
    const selectedValue = e.target.value;
    let filterData = [];
    // if (selectedValue !== "") {
    //   filterData = data.filter((x) => x.id === selectedValue);
    // }
  };
  return (
    <>
      {windowWidth <= 500 ? <MobileHeaderGeneric /> : <GenericHeader />}
      {windowWidth <= 500 ? (
        <div></div>
      ) : (
        <div style={{ height: "150px" }}></div>
      )}

      <div
        className="row "
        style={{
          height: "330px",
          background: "#F5F5F5",
        }}
      >
        <div
          className="col-lg-12"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <p
            className={window.innerWidth < 500 ? "mobilePara" : "feedbackpara"}
          >
            We are always looking for ways to deliver an exceptional experience
            to our customers and investors. Your feedback is vital for us to
            achieve this goal. Please use the form below to share your insights
            and suggestions on how we can improve our services. We value your
            time and contribution in helping us grow and succeed. Thank you for
            your support and trust.
          </p>
        </div>
      </div>

      <div
        className="row justify-content-center feedbackMUI"
        style={{
          height: "700px",
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${BG1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="col-lg-9">
          <div className="row justify-content-center px-5 mt-5">
            <div className="col-lg-4">
              <TextField
                className="feedBackTextField"
                type="text"
                variant="outlined"
                placeholder="Enter your Name"
                label="Name"
                InputProps={{
                  style: { borderRadius: "30px", border: "none" }, // Remove the border
                }}
              />
            </div>
            <div className="col-lg-4">
              <TextField
                className="feedBackTextField"
                type="text"
                placeholder="Enter your Company Name"
                label="Company Name"
                InputProps={{
                  style: { borderRadius: "30px", border: "none" }, // Remove the border
                }}
              />
            </div>
            <div className="col-lg-4">
              <TextField
                className="feedBackTextField"
                type="text"
                placeholder="Enter your Address"
                label="Address"
                InputProps={{
                  style: { borderRadius: "30px", border: "none" }, // Remove the border
                }}
              />
            </div>
          </div>
          <div className="row justify-content-center px-5 mt-5">
            <div className="col-lg-4">
              <TextField
                className="feedBackTextField"
                type="text"
                placeholder="Enter your Country/City"
                label="Country-City"
                InputProps={{
                  style: { borderRadius: "30px", border: "none" }, // Remove the border
                }}
              />
            </div>
            <div className="col-lg-4">
              <TextField
                className="feedBackTextField"
                type="text"
                placeholder="Enter your Mobile Number"
                label="Mobile Number"
                InputProps={{
                  style: { borderRadius: "30px", border: "none" }, // Remove the border
                }}
              />
            </div>
            <div className="col-lg-4">
              <TextField
                className="feedBackTextField"
                type="text"
                placeholder="Enter your Email"
                label=" Email Address"
                // defaultValue={"Hello World"}
                InputProps={{
                  style: { borderRadius: "30px", border: "none" }, // Remove the border
                }}
              />
            </div>
          </div>
          <div className="row px-5 mt-5">
            <div className="col-lg-4">
              <TextField
                className="feedBackTextField"
                type="text"
                placeholder="Enter your Website link"
                label="Company Website"
                InputProps={{
                  style: { borderRadius: "30px", border: "none" }, // Remove the border
                }}
              />
            </div>
            <div className="col-lg-4 ">
              <select
                type="select"
                onChange={handleDepartments}
                className="textField"
                label="Department"
                style={{
                  height: "53.5px",
                  width: "100%", // Remove the extra "width:" here
                  color: "#757775",
                  paddingTop: "10px",
                  paddingRight: "30px", /* Add padding to the right side for the icon */
                  borderRadius: "25px",
                  fontFamily: "sans-serif",
                  padding: "10px",
                  position: "relative" /* Add relative positioning to the select element */
                }}
              >
                {department.map((Val, index) => {
                  return (
                    <option key={index} value={Val.value}>
                      {Val.text}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-lg-4 ">
              {enableAreas === true ? (<>
                <select
                  type="select"
                  onChange={handleArea}
                  className="textField"
                  label={label}
                  renderValue={areas[0]}
                  style={{
                    height: "53.5px",
                    width: "100%", // Remove the extra "width:" here
                    color: "#757775",
                    paddingTop: "10px",
                   borderRadius: "25px",
                    fontFamily: "sans-serif",
                    padding: "10px 36px 10px 10px",
                    position: "relative" /* Add relative positioning to the select element */
                  }}
                >
                  {areaDropdown.map((Val, index) => {
                    return (
                      <option key={index} value={Val.value}>
                        {Val.text}
                      </option>
                    );
                  })}
                </select>
              </>) : (
                <div className="col-lg-3"></div>
              )}
            </div>
          </div>
          <div
            className="row justify-content-center px-5 mt-5 "
            style={{ marginTop: "20px" }}
          >
            <div className="col-lg-12">
              <Box>
                <textarea
                  className={isTextareaFocused ? "textarea-focused" : ""}
                  style={{
                    borderRadius: "55px",
                    height: "100px",
                    color: "rgba(0, 0, 0, 0.87)",
                    padding: "20px",
                    width: "100%",
                    fontSize: "1.0rem",
                    fontWeight: "200",
                    fontFamily: "sans-serif",
                    resize: "none",
                    border: "none", // Remove the default border
                    outline: "none", // Remove the default outline
                    transition: "border-color 0.3s",
                  }}
                  placeholder="Give your valuable feedback here…"
                  onFocus={() => setIsTextareaFocused(true)}
                  onBlur={() => setIsTextareaFocused(false)}
                />
              </Box>
            </div>
          </div>
          <div
            style={{
              width: "170px",
              paddingBottom: "10px",
              paddingLeft: "6px",
              paddingTop: "50px",
              display: "flex",
              marginLeft: "60px",
            }}
          >
            <button type="button" className="feedbacksubmitButton">
              <span>Submit</span>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
