

import React, { useState } from "react";
import "../Css/header.css";
import "../Css/resource.css";
import "../Css/investnow.css";
import { useEffect } from "react";
import { Fade } from "react-reveal";
import {  FormControl,  Select } from "@mui/material";


import { TextField} from "@mui/material";
import TextArea from "antd/es/input/TextArea";
import { Formik, Form, ErrorMessage } from 'formik';
import { areas ,Drop1Data} from "./constant";
import * as Yup from 'yup';
// import Drop2Data, { Dropdown } from "../Components/RegulatoryCostCalculator"
export const Drop2Data = (value) => {
  let array = [];
  let label = "";
  switch (value) {
    case "college":
      array = [
        // Registration of Privately Managed Colleges (Urban) Dropdown Data
        {
          id: "Registration of Privately Managed Colleges (Urban)",
          timeLineText: "10-12 Days",
          feeValue: "15000",
          validityYear: "3 Years",
          departments:"Registration of Privately Managed Colleges (Urban)",
          text: "Registration of Privately Managed Colleges (Urban)",
          value: "Registration of Privately Managed Colleges (Urban)",
        },
        // Registration of Privately Managed Colleges (Rural) Dropdown Data
        {
          id: "Registration of Privately Managed Colleges (Rural)",
          value: "Registration of Privately Managed Colleges (Rural)",
          text: "Registration of Privately Managed Colleges (Rural)",
          timeLineText: "10-12 Days",
          feeValue: "20000",
          validityYear: "3 Years",
          departments:"Registration of Privately Managed Colleges (Rural)",
        },
      ];
      label = "Area";
      break;
    case "labour":
      array = [
        // labour And Human Resource Department Dropdown Data
        {
          id: "labour",
          timeLineText: "10-12 Days",
          feeValue: "15000",
          validityYear: "3 Years",
          departments:"Registration of Shops & Establishment(Same Day)",
          text: "Registration of Shops & Establishment (Same Day)",
          value: "Registration of Shops & Establishment (Same Day)",
        },
        {
          id: "labour",
          timeLineText: "10 days",
          feeValue: "",
          validityYear: "2 year",
          departments:"Registration of Factories(10 Days)",
          text: "Registration of Factories (10 Day)",
          value: "10 Days",
        },
      ];
      label = "Labour";
      break;
    case "SFA":
      array = [
        // labour And Human Resource Department Dropdown Data
        {
          id: "SFA",
          timeLineText: "7 Days",
          feeValue: "500",
          validityYear: "",
          departments:"Registration and Licensing of Food Business Operator",
          text: "SFA",
          value: "SFA",
        },
      ];
      label = "SFA";
      break;
    case "Agriculture":
      array = [
        {
          id: "Agriculture",
          value: "Pesticides",
          timeLineText: "1 Month Pesticide",
          feeValue: "200000",
          validityYear: "",
          departments:"Distributor Registration / License (for Pesticides)",
          text: "Distributor Registration / License (for Pesticides)",
        },
        {
          id: "Agriculture",
          value: "Fertilizer",
          timeLineText: "1 Month Fertilizer",
          feeValue: "50000",
          validityYear: "",
          departments:"Distributor Registration / License (for Fertilizer)",
          text: "Distributor Registration / License (for Fertilizer)",
        },
        {
          id: "Agriculture",
          value: "Micronutrients",
          timeLineText: "1 Month Lab Fee",
          feeValue: "5000",
          validityYear: "",
          departments:"Product License for Fertilizer Micronutrients",
          text: "Product License for Fertilizer Micronutrients",
        },
    
        {
          id: "Agriculture",
          value: "Factories",
          timeLineText: "1 Month Lab Fee",
          feeValue: "1000",
          validityYear: "",
          departments:"Market Committee License For Factories(Group-A)",
          text: "Market Committee License For Factories(Group-A)",
        },    
        {
          id: "Agriculture",
          value: "WholeSaler",
          timeLineText: "1 Month Lab Fee",
          feeValue: "500",
          validityYear: "",
          departments:"Market Committee License For Wholesaler(Group-B)",
          text: "Market Committee License For Wholesaler(Group-B)",
        },
        {
          id: "Agriculture",
          value: "Retailer",
          timeLineText: "1 Month Lab Fee",
          feeValue: "100",
          validityYear: "",
          departments:"Market Committee License For Retailer(Group-C)",
          text: "Market Committee License For Retailer(Group-C)",
        }, 
      ];
      label = "Agriculture";
      break;
    case "HealthDepartment":
      array = [
        {
          id: "HealthDepartment",
          value: "HealthDepartment",
          timeLineText: "3 Month",
          feeValue: "5000",
          validityYear: "",
          departments:"License to sell Drugs by Way of Retail Sale (Form-6)",
          text: "License to sell Drugs by Way of Retail Sale (Form-6)",
        },
        {
          id: "HealthDepartment",
          value: "Wholesale",
          timeLineText: "3 Month",
          feeValue: "5000",
          validityYear: "",
          departments:"License to sell Drugs by Way of Wholesale 7A",
          text: "License to sell Drugs by Way of Wholesale 7A",
        },
        {
          id: "HealthDepartment",
          value: "Pharmacy",
          timeLineText: "3 Month",
          feeValue: "5000",
          validityYear: "",
          departments:"License to sell Drugs in Pharmacy (Form-8)",
          text: "License to sell Drugs in Pharmacy (Form-8)",
        },
        {
          id: "HealthDepartment",
          value: "NarcoticsandOtherControlledDrugs",
          timeLineText: "3 Month",
          feeValue: "5000",
          validityYear: "",
          departments:"License to sell Narcotics and Other Controlled Drugs/ Substances (Form-9)",
          text: "License to sell Narcotics and Other Controlled Drugs/ Substances (Form-9)",
        },
        {
          id: "HealthDepartment",
          value: "IndenterofDrugs",
          timeLineText: "3 Month",
          feeValue: "5000",
          validityYear: "",
          departments:"License to Manufacturer /Importer /Indenter of Drugs (Form-7)",
          text: "License to Manufacturer /Importer /Indenter of Drugs (Form-7)",
        },
      ];
      label = "Health Department";
      break;
    case "MontToMatric":
        array = [
          {
            id: "MontToMatric",
            value: "MontToMatric",
            timeLineText: "30 Days",
            feeValue: "7000",
            validityYear: "",
            departments:"",
            text: "Institutions from Montessori up to Class-X",
          },
          {
            id: "MontToMatric",
            timeLineText: "30 Days",
            feeValue: "15000",
            validityYear: "",
            departments:"",
            value: "HigherAndSecondary",
            text: "Higher Secondary School",
          },
          {
            id: "MontToMatric",
            value: "OALevel",
            timeLineText: "30 Days",
            feeValue: "30000",
            validityYear: "",
            departments:"",
            text: 'Institutions of "O" & "A" Level',
          },
          {
            id: "MontToMatric",
            value: "HigherLearning",
            timeLineText: "30 Days",
            feeValue: "20000",
            validityYear: "",
            departments:"",
            text: "Degree awarding institutes and universities including Institutions having academic linkage / foreign collaboration/affiliation with any other institutions of higher learning",
          },
        ];
        label = "School Education and Literacy Department";
        break;
    case "SindhHealthCareCommission":
      array = [
        {
          id: "SindhHealthCareCommission",
          value: "SindhHealthCareCommission",
          timeLineText: "30 Days",
          feeValue: "500",
          validityYear: "",
          departments:"",
          text: " Single specialty (i.e general practitioner, homeo, tibb, detist, nursing/ maternity home, laboratories, radiology centre etc.",
        },
        {
          id: "SindhHealthCareCommission",
          value: "BeddedMedical",
          timeLineText: "30 Days",
          feeValue: "2000",
          validityYear: "",
          departments:"",
          text: "2 1-24 bedded Medical Centre/ Hospital",
        },
        {
          id: "SindhHealthCareCommission",
          value: "AboveBeddedMedical",
          timeLineText: "30 Days",
          feeValue: "5000",
          validityYear: "",
          departments:"",
          text: " 25 and above bedded Hospital",
        },
        {
          id: "SindhHealthCareCommission",
          value: "AlreadyRegistered",
          timeLineText: "30 Days",
          feeValue: "1000",
          validityYear: "",
          departments:"",
          text: "Any change in the already registered HCE",
        },
      ];
      label = "Sindh Healthcare Commission";
      break;
    case "IndustriesAndCommerce":
      array = [
        {
          id: "IndustriesAndCommerce",
          value: "IndustriesAndCommerce",
          timeLineText: "3 Days",
          feeValue: "110",
          validityYear: "",
          departments:"",
          text: "Registration Certificate of Partnership Firm",
        },
        {
          id: "IndustriesAndCommerce",
          value: "RegistrationCertificateofAmendment",
          timeLineText: "5 Days",
          feeValue: "55",
          validityYear: "",
          departments:"",
          text: "Registration Certificate of Amendment/Dissolution /Rectification in Partnership Firm",
        },
        {
          id: "IndustriesAndCommerce",
          value: "RegistrationofNewBoiler",
          timeLineText: "10-15 Days",
          feeValue: "S.R.O.88(I)/2008)",
          validityYear: "",
          departments:"",
          text: "Registration of New Boiler",
        },
        {
          id: "IndustriesAndCommerce",
          value: "RegistrationofOldBoiler",
          timeLineText: "10-15 Days",
          feeValue: "S.R.O.88(I)/2008)",
          validityYear: "",
          departments:"",
          text: "Registration of Old Boiler",
        },
        {
          id: "IndustriesAndCommerce",
          value: "ApprovalofPlanandParticularsofNewBoiler",
          timeLineText: "10-15 Days",
          feeValue: "S.R.O.88(I)/2008)",
          validityYear: "",
          departments:"",
          text: "Approval of Plan and Particulars of Boilers Acceptable for Registration (New Boiler)",
        },
        {
          id: "IndustriesAndCommerce",
          value: "ApprovalofPlanandParticularsofUsedBoiler",
          timeLineText: "10-15 Days",
          feeValue: "S.R.O.88(I)/2008)",
          validityYear: "",
          departments:"",
          text: "Approval of Plan and Particulars of Boilers Acceptable for Registration (Used Boiler)",
        },
        {
          id: "IndustriesAndCommerce",
          value: "TransferofOwnership",
          timeLineText: "10-15 Days",
          feeValue: "S.R.O.88(I)/2008)",
          validityYear: "",
          departments:"",
          text: "Transfer of Ownership",
        },
      ];
      label = "Industries And Commerce";
      break;
    case "SindhEnvironmentalProtection":
      array = [
        {
          id: "License for Handling of Hazardous Substances",
          value: "License for Handling of Hazardous Substances",
          timeLineText: "7 Days",
          feeValue: "50000",
          validityYear: "",
          departments:"",
          text: "License for Handling of Hazardous Substances",
        },
        {
          id: "SindhEnvironmentalProtection",
          value: "NonHazardousSubstances",
          timeLineText: "7 Days",
          feeValue: "50000",
          validityYear: "",
          departments:"",
          text: "License to Waste Contractor for Handling of Hazardous Substances and Non-Hazardous substances",
        },
        {
          id: "SindhEnvironmentalProtection",
          value: "ApprovalUnderSection17",
          timeLineText: "EC (15 days)  ▪ IEE (30 days) ▪ EIA (60 days)",
          feeValue: "1000",
          validityYear: "",
          departments:"",
          text: "Approval Under Section 17 (IEE/EIA/EC)",
        },
        {
          id: "SindhEnvironmentalProtection",
          value: "ApprovalofanEnvironmentalManagementPlan",
          timeLineText: "7-10 Days Up to 20 Million",
          feeValue: "50000",
          validityYear: "",
          departments:"",
          text: "Approval of an Environmental Management Plan 7-10 Days Up to 20 Million",
        },
        {
          id: "SindhEnvironmentalProtection",
          value: "ApprovalofanEnvironmentalManagementPlan",
          timeLineText: "7-10 Days Above 20 Million up to 100 Million",
          feeValue: "100000",
          validityYear: "",
          departments:"",
          text: "Approval of an Environmental Management Plan 7-10 Days Above 20 Million up to 100 Million",
        },
        {
          id: "SindhEnvironmentalProtection",
          value: "ApprovalofanEnvironmentalManagementPlan",
          timeLineText: "7-10 Days Above 100 Milliion up to 200 Million",
          feeValue: "200000",
          validityYear: "",
          departments:"",
          text: "Approval of an Environmental Management Plan 7-10 Days Above 100 Milliion up to 200 Million",
        },
        {
          id: "SindhEnvironmentalProtection",
          value: "ApprovalofanEnvironmentalManagementPlan",
          timeLineText: "7-10 Days Above 200 Million up to 500 Million",
          feeValue: "400000",
          validityYear: "",
          departments:"",
          text: "Approval of an Environmental Management Plan 7-10 Days Above 200 Million up to 500 Million",
        },
        {
          id: "SindhEnvironmentalProtection",
          value: "ApprovalofanEnvironmentalManagementPlan",
          timeLineText: "7-10 Days Above 500 Million",
          feeValue: "600000",
          validityYear: "",
          departments:"",
          text: "Approval of an Environmental Management Plan 7-10 Days Above 500 Million",
        },
        {
          id: "SindhEnvironmentalProtection",
          value: "ApprovalofanEnvironmentalManagementPlan",
          timeLineText:
            "7-10 Days Review fee for Environmental Checklist or EMP",
          feeValue: "40000",
          validityYear: "",
          departments:"",
          text: "Approval of an Environmental Management Plan Review fee for Environmental Checklist or EMP",
        },
        {
          id: "SindhEnvironmentalProtection",
          value: "CertificationofEnvironmentalLabSecurity",
          timeLineText: "7 Days Security Fee",
          feeValue: "20000",
          validityYear: "",
          departments:"",
          text: "Approval of an Environmental Management Plan 7 Days Security Fee",
        },
        {
          id: "SindhEnvironmentalProtection",
          value: "CertificationofEnvironmentalLabCertificate",
          timeLineText: "7 Days Certificate Fee",
          feeValue: "50000",
          validityYear: "",
          departments:"",
          text: "Approval of an Environmental Management Plan 7 Days Certificate Fee",
        },
        {
          id: "SindhEnvironmentalProtection",
          value: "ApprovalofHospitalWasteManagementPlan",
          timeLineText: "7 Days",
          feeValue: "50000",
          validityYear: "",
          departments:"",
          text: "Approval of Hospital Waste Management Plan",
        },
      ];
      label = "Sindh Environmental Protection";
      break;
    case "SindhIndustrialTrading":
      array = [
        {
          id: "SindhIndustrialTrading",
          value: "SindhIndustrialTrading",
          timeLineText: "60 days",
          feeValue: "",
          validityYear: "",
          departments:"",
          text: "Allotment of Land/ Plot",
        },
        {
          id: "SindhIndustrialTrading",
          value: "ApprovalofBuildingDrawing",
          timeLineText: "14 days",
          feeValue: "",
          validityYear: "",
          departments:"",
          text: "Approval of Building Drawing",
        },
        {
          id: "SindhIndustrialTrading",
          value: "ApprovalofCompletion(Block)Plan",
          timeLineText: "7 days",
          feeValue: "",
          validityYear: "",
          departments:"",
          text: "Approval of Completion (Block) Plan",
        },
        {
          id: "SindhIndustrialTrading",
          value: "CollectionOfAdditionalTradeFee",
          timeLineText: "14 days",
          feeValue: "",
          validityYear: "",
          departments:"",
          text: "Collection of Additional Trade Fee",
        },
        {
          id: "SindhIndustrialTrading",
          value: "Subdivision",
          timeLineText: "14 days",
          feeValue: "",
          validityYear: "",
          departments:"",
          text: "Subdivision/ Amalgamation/ Transfer/ Subletting/ Extension of Land or Plot/ Change in Constitution/ change in Constitution",
        },
        {
          id: "SindhIndustrialTrading",
          value: "IssuanceofLeaseDeed",
          timeLineText: "14 days",
          feeValue: "",
          validityYear: "",
          departments:"",
          text: "Issuance of Lease Deed",
        },
        {
          id: "SindhIndustrialTrading",
          value: "NOCforUtilities",
          timeLineText: "14 days",
          feeValue: "",
          validityYear: "",
          departments:"",
          text: "NOC for Utilities (Electricity, Gas, Cable, PTCL)",
        },
        {
          id: "SindhIndustrialTrading",
          value: "NOCforMortgage",
          timeLineText: "14 days",
          feeValue: "50000",
          validityYear: "",
          departments:"",
          text: "NOC for Mortgage",
        },
        {
          id: "SindhIndustrialTrading",
          value: "NOCforRoadCutting",
          timeLineText: "14 days",
          feeValue: "",
          validityYear: "",
          departments:"",
          text: "NOC for Road Cutting",
        },
        {
          id: "SindhIndustrialTrading",
          value: "NOCforcarparking",
          timeLineText: "14 days",
          feeValue: "",
          validityYear: "",
          departments:"",
          text: "NOC for car parking/ beautification",
        },
      ];
      label = "Sindh Industrial Trading";
      break;
    case "SindhSamllIndustries":
      array = [
        {
          id: "SindhSamllIndustries",
          value: "SindhSamllIndustries",
          timeLineText: "15 Days",
          feeValue: "",
          validityYear: "",
          departments:"",
          text: "Allotment Order of Land/ Plot",
        },
        {
          id: "SindhSamllIndustries",
          value: "ApprovalofDrawing",
          timeLineText: "5-10 Days",
          feeValue: "",
          validityYear: "",
          departments:"",
          text: "Approval of Drawing",
        },
        {
          id: "SindhSamllIndustries",
          value: "SubdivisionTransfer",
          timeLineText: "5-10 Days",
          feeValue: "",
          validityYear: "",
          departments:"",
          text: "Subdivision/Transfer/ Amalgamation/ Change in constitution (Corporate Setup)/ Change in Trade/ Subletting trade/ Conversion of plot from Industrial to Commercial/ CNG petroleum station/ Godowns & Distribution",
        },
        {
          id: "SindhSamllIndustries",
          value: "NOCforUtilitiesSI",
          timeLineText: "5-10 Days",
          feeValue: "",
          validityYear: "",
          departments:"",
          text: "NOC for Utilities (Electricity, Telephone, Gas, Water)",
        },
        {
          id: "SindhSamllIndustries",
          value: "NOCforRoadCuttingSI",
          timeLineText: "5-10 Days",
          feeValue: "",
          validityYear: "",
          departments:"",
          text: "NOC for Road Cutting",
        },
        {
          id: "SindhSamllIndustries",
          value: "IssuanceofLeaseDraftSI",
          timeLineText: "15-25 Days",
          feeValue: "",
          validityYear: "",
          departments:"",
          text: "Issuance of Lease Draft",
        },
        {
          id: "SindhSamllIndustries",
          value: "NOCforMortgageSI",
          timeLineText: "15-25 Days",
          feeValue: "",
          validityYear: "",
          departments:"",
          text: "NOC for Mortgage",
        },
        {
          id: "SindhSamllIndustries",
          value: "UnauthorizedConstructionSI",
          timeLineText: "15-25 Days",
          feeValue: "",
          validityYear: "",
          departments:"",
          text: "Un- authorized Construction",
        },
      ];
      label = "Sindh Samll Industries";
      break;
    case "BoardOfRevenue":
      array = [
        {
          id: "BoardOfRevenue",
          value: "BoardOfRevenue",
          timeLineText: "Registration of Shops & Establishment (Same Day) Day Per Page",
          feeValue: "300",
          validityYear: "",
          departments:"",
          text: "Issuance of the True Copy of Land Record",
        },
        {
          id: "BoardOfRevenue",
          value: "RegistrationofDocument",
          timeLineText: "10 Days",
          feeValue: "",
          validityYear: "",
          departments:"",
          text: "Registration of Document",
        },
      ];
      label = "Board of Revenue";
      break;
    case "DistrictMuncipal":
      array = [
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
      label = "District Muncipal";
      break;
    default:
      array = [];
      break;
  }
  return { array, label };
};


const getDropdown2Object = (arr, id) => {
  const selectedOption = Drop2Data(arr)?.array.find((val) => val.value === id);
  return selectedOption;
};
export const Dropdown = (props) => {
  const [selectedValue, setSelectedValue] = React.useState("");
  const [changeValue, setChangeValue] = useState([
    {
      timeLineText: "10-12 Days",
      feeValue: "15000",
      validityYear: "3 Years",
      departments:"Registration of Privately Managed Colleges (Urban)",
      id: "Registration of Privately Managed Colleges (Urban)",
    },
  ]);
  const handleChange = (event) => {
    debugger;
    setSelectedValue(event.target.value);
    let arr = [...props.arr];
    arr.splice(props.ind, 1, event.target.value);
    props.setArr(arr);

    let ar = [...props.arr2];
    ar.splice(props.ind, 1, Drop2Data(event.target.value)?.array[0] ?? "");
    props.setArr2(ar);
  };

  return (
    <Fade left>
      <FormControl variant="outlined" size="small" className="dropdown-width col-12" >
       <h4>Department</h4>
       <Select
        onChange={handleChange}
        style={{ width: "96%",}}
        native
        id="my-select"
        value={props.val}
        inputProps={{
          name: "case",
          id: "outlined-age-native-simple",
        }}
      >
        {Drop1Data.map((val, ind) => {
          return <option value={val.value}>{val.text}</option>;
        })}
      </Select>
    </FormControl>
    </Fade>
  );
};
export const Dropdown1 = (props) => {
  const [selectedValue, setSelectedValue] = React.useState("");
  const handleChange = (event) => {
    debugger;
    setSelectedValue(event.target.value);
    let arr = [...props.arr];
    arr.splice(
      props.ind,
      1,
      getDropdown2Object(props.arr1, event.target.value) ?? ""
    );
    props.setArr(arr);
  };

  return (
    <Fade right>
      <FormControl
      variant="outlined"
      size="small"
      onChange={handleChange}
      className="dropdown-width col-12 "
    >
      <h4>License</h4>
      <Select
        native
        style={{ width: "96%",}}
        defaultValue={selectedValue}
        value={selectedValue}
        onChange={handleChange}
        inputProps={{
          name: "case",
          id: "outlined-age-native-simple",
        }}
      >
        {Drop2Data(props.arr1)?.array.map((val, ind) => {
          return <option value={val.value}>{val.text}</option>;
        })}
      </Select>
    </FormControl>
    </Fade>
  );
};
const Basic = () => (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}

      
      </Formik>
    </div>
  );
 const FeedBackForm=()=> {

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
  
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);
  const [enableAreas, setEnableAreas] = useState(true);
  const [arr1, setArr1] = React.useState(["college"]);
  const [areaDropdown, setAreaDropdown] = useState([
    { id: "Urban", text: "Urban" },
    { id: "Rural", text: "Rural" },
  ]);
  const [arr2, setArr2] = React.useState([
    {
      id: "Registration of Privately Managed Colleges (Urban)",
      timeLineText: "10-12 Days",
      feeValue: "15000",
      validityYear: "3 Years",
      departments:"Registration of Privately Managed Colleges (Urban)",
      text: "Registration of Privately Managed Colleges (Urban)",
      value: "Registration of Privately Managed Colleges (Urban)",
    },
  ]);

  const [label, setLabel] = useState("Areas");


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
      <div className="row g-0 pt-2 justify-content-center w-100">
        {/* <Basic/> */}
        <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <div
            className="col-md-8 ps-md-3 px-3 justify-content-center  "
            style={{ backgroundColor: "re" }}
          >
              {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        })=>{

        }}
            <Form>
              <div
                className="row g-0 justify-content-between"
                style={{ width: "100%", backgroundColor: "yel" }}
              >
                <Fade left>
                  <div className="col-sm-6">
                    <h4> Name</h4>
                    <TextField
                      placeholder="Enter Your First Name"
                      size="small"
                      style={{ width: "96%" }}
                      inputProps={{ maxLength: 50 }}
                    />
                  </div>
                </Fade>
                <Fade right>
                  <div className="col-md-6">
                    <h4> Company Name</h4>
                    <TextField
                      placeholder="Enter Your Company Name"
                      size="small"
                      style={{ width: "96%" }}
                      inputProps={{ maxLength: 50 }}
                    />
                  </div>
                </Fade>
              </div>
              <div className="row g-0" style={{ width: "100%" }}>
                <Fade top>
                  <div className="col">
                    <h4>Address</h4>
                    <TextField
                      placeholder="Enter Your Address"
                      size="small"
                      style={{ width: "98%" }}
                      inputProps={{ maxLength: 200 }}
                    />
                  </div>
                </Fade>
                {/* <div className="col-md-6" >
       <h4>Country / City</h4>
       <TextField
         placeholder="Enter Your Country / City"
         size="small"
         style={{width:"96%",}}
       />
      </div> */}
              </div>
              <div className="row g-0" style={{ width: "100%" }}>
                <Fade left>
                  <div className="col-md-6">
                    <h4>Country / City</h4>
                    <TextField
                      placeholder="Enter Your Country / City"
                      size="small"
                      style={{ width: "96%" }}
                      inputProps={{ maxLength: 100 }}
                    />
                  </div>
                </Fade>
                <Fade right>
                  <div className="col-md-6">
                    <h4>Mobile Number</h4>
                    <TextField
                      placeholder="Enter Your  Moble Number"
                      size="small"
                      style={{ width: "96%" }}
                      type="number"
                      InputProps={{
                        inputProps: {
                          min: 0, // Set the minimum value
                          max: 100, // Set the maximum value
                        },
                      }}
                    />
                  </div>
                </Fade>
                {/* <div className="col-md-6" >
    <h4>
    Email
    </h4>
    <TextField
      placeholder="Enter Your Email Address"
      size="small"
      style={{width:"96%",}}
  />
    </div> */}
              </div>
              <div className="row g-0" style={{ width: "100%" }}>
                {/* <Dropdown
    /> */}
                <Fade left>
                  <div className="col-md-6">
                    <h4>Email</h4>
                    <Form>
                      <TextField
                        placeholder="Enter Your Email Address"
                        size="small"
                        style={{ width: "96%" }}
                        // type="email"
                        name="email"
                        // value={}
                      />
                      <ErrorMessage name="email" />
                    </Form>
                  </div>
                </Fade>
                <Fade right>
                  <div className="col-md-6">
                    <h4>Company Website</h4>
                    <TextField
                      placeholder="Enter Your Company Website"
                      size="small"
                      style={{ width: windowWidth <= 500 ? "100%" : "96%" }}
                    />
                  </div>
                </Fade>
              </div>
              <div
                className="row g-0 "
                style={{
                  width: "100%",
                  marginBottom: 20,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {arr1.map((val, ind) => {
                  return (
                    <>
                      <div
                        className="col-md-6"
                        style={
                          {
                            //  width:"48%"
                          }
                        }
                      >
                        <Dropdown
                          ind={ind}
                          arr={arr1}
                          setArr={setArr1}
                          arr2={arr2}
                          setArr2={setArr2}
                          val={val}
                          label={false}
                        />
                        <div className="col-md-6"></div>
                      </div>

                      <div className="col-md-6">
                        {arr1[ind] !== "SFA" && (
                          <>
                            {" "}
                            <Dropdown1
                              ind={ind}
                              arr={arr2}
                              setArr={setArr2}
                              arr1={val}
                              label={false}
                            />
                          </>
                        )}
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="row g-0" style={{ width: "100%" }}>
                <Fade left>
                  <div className="col">
                    <TextArea
                      rows={4}
                      placeholder="Enter Your Feedback"
                      style={{
                        width: windowWidth <= 500 ? "100%" : "98%",
                        fontSize: 18,
                      }}
                    />
                  </div>
                </Fade>
              </div>
              <div className="row g-0">
                <div className="col-sm-12 mt-4 tocentersubmitbutton">
                  <button type="submit" className="submit_button ">
                    <span>Submit</span>
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </Formik>
      </div>
    </>
  );
};

export default FeedBackForm;
