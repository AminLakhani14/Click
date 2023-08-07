import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import { Button, FormControl, MenuItem, Select } from "@mui/material";
import "../Css/highlight.css";
import "../Css/resource.css";
import GenericHeader from "./genericHeader";
import Footer from "./footer";
import AboutUsImg from "../assets/city.png";
import MobileHeaderGeneric from "./MobileHeaderGeneric";
import RegulatoryCatalogCalculatorGrid from "./Grid/RegulatoryCatalogCalculatorGrid";
// import { Button } from "bootstrap";
const areas = [
  //College Education Department Dropdown
  { id: "Urban", value: "Urban", text: "Urban" },
  { id: "Urban", value: "Rural", text: "Rural" },
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
const areas1 = [
  //College Education Department Dropdown
  { id: "Urban", value: "Urban", text: "Urban" },
  { id: "Urban", value: "Rural", text: "Rural" },
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
const department1 = [
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
const gridData = [
  // Urban Dropdown Data
  {
    timeLineText: "10-12 Days",
    feeValue: "15000",
    validityYear: "3 Years",
    id: "Urban",
  },
  // Rural Dropdown Data
  {
    timeLineText: "10-12 Days",
    feeValue: "20000",
    validityYear: "3 Years",
    id: "Rural",
  },
  // labour And Human Resource Department Dropdown Data
  {
    timeLineText: "Same Day",
    feeValue: "",
    validityYear: "2 year",
    id: "labour",
  },
  {
    timeLineText: "10 days",
    feeValue: "",
    validityYear: "2 year",
    id: "labour",
  },
  // SFA Dropdown Data
  {
    timeLineText: "7 days",
    feeValue: "",
    validityYear: "",
    id: "SFA",
  },
  // Health Department Dropdown Data
  {
    timeLineText: "3 Month",
    feeValue: "5000",
    validityYear: "",
    id: "HealthDepartment",
  },
  {
    timeLineText: "3 Month",
    feeValue: "5000",
    validityYear: "",
    id: "Wholesale",
  },
  {
    timeLineText: "3 Month",
    feeValue: "5000",
    validityYear: "",
    id: "Pharmacy",
  },
  {
    timeLineText: "3 Month",
    feeValue: "5000",
    validityYear: "",
    id: "NarcoticsandOtherControlledDrugs",
  },
  {
    timeLineText: "3 Month",
    feeValue: "5000",
    validityYear: "",
    id: "IndenterofDrugs",
  },
  // School Education and Literacy Department Dropdown Data
  {
    timeLineText: "30 Days",
    feeValue: "7000",
    validityYear: "",
    id: "MontToMatric",
  },
  {
    timeLineText: "30 Days",
    feeValue: "15000",
    validityYear: "",
    id: "HigherAndSecondary",
  },
  {
    timeLineText: "30 Days",
    feeValue: "30000",
    validityYear: "",
    id: "OALevel",
  },
  {
    timeLineText: "30 Days",
    feeValue: "20000",
    validityYear: "",
    id: "HigherLearning",
  },
  // Sindh Health Care Commission Dropdown Data
  {
    timeLineText: "30 Days",
    feeValue: "500",
    validityYear: "",
    id: "SindhHealthCareCommission",
  },
  {
    timeLineText: "30 Days",
    feeValue: "2000",
    validityYear: "",
    id: "BeddedMedical",
  },
  {
    timeLineText: "30 Days",
    feeValue: "5000",
    validityYear: "",
    id: "AboveBeddedMedical",
  },
  {
    timeLineText: "30 Days",
    feeValue: "1000",
    validityYear: "",
    id: "AlreadyRegistered",
  },
  // Agriculture Dropdown Data
  {
    timeLineText: "1 Month Pesticide",
    feeValue: "200000",
    validityYear: "",
    id: "Agriculture",
  },
  {
    timeLineText: "1 Month Fertilizer",
    feeValue: "50000",
    validityYear: "",
    id: "Agriculture",
  },
  {
    timeLineText: "1 Month Lab Fee",
    feeValue: "5000",
    validityYear: "",
    id: "Agriculture",
  },
  {
    timeLineText: "7-10 days (for Factories - A group)",
    feeValue: "1000",
    validityYear: "",
    id: "Agriculture",
  },
  {
    timeLineText: "7-10 days (for wholesaler – B group)",
    feeValue: "500",
    validityYear: "",
    id: "Agriculture",
  },
  {
    timeLineText: "7-10 days (for Retailers – C group)",
    feeValue: "100",
    validityYear: "",
    id: "Agriculture",
  },
  // Industries And Commerce Department Dropdown Data
  {
    timeLineText: "3 Days",
    feeValue: "110",
    validityYear: "",
    id: "IndustriesAndCommerce",
  },
  {
    timeLineText: "5 Days",
    feeValue: "55",
    validityYear: "",
    id: "RegistrationCertificateofAmendment",
  },
  {
    timeLineText: "10-15 Days",
    feeValue: "S.R.O.88(I)/2008)",
    validityYear: "",
    id: "RegistrationofNewBoiler",
  },
  {
    timeLineText: "10-15 Days",
    feeValue: "S.R.O.88(I)/2008)",
    validityYear: "",
    id: "RegistrationofOldBoiler",
  },
  {
    timeLineText: "10-15 Days",
    feeValue: "S.R.O.88(I)/2008)",
    validityYear: "",
    id: "ApprovalofPlanandParticularsofNewBoiler",
  },
  {
    timeLineText: "10-15 Days",
    feeValue: "S.R.O.88(I)/2008)",
    validityYear: "",
    id: "ApprovalofPlanandParticularsofUsedBoiler",
  },
  {
    timeLineText: "10-15 Days",
    feeValue: "S.R.O.88(I)/2008)",
    validityYear: "",
    id: "TransferofOwnership",
  },
  // Sindh Environment Protection Agency Dropdown Data
  {
    timeLineText: "7 Days",
    feeValue: "50000",
    validityYear: "",
    id: "SindhEnvironmentalProtection",
  },
  {
    timeLineText: "7 Days",
    feeValue: "50000",
    validityYear: "",
    id: "NonHazardousSubstances",
  },
  {
    timeLineText: "EC (15 days)  ▪ IEE (30 days) ▪ EIA (60 days)",
    feeValue: "1000",
    validityYear: "",
    id: "ApprovalUnderSection17",
  },
  {
    timeLineText: "7-10 Days Up to 20 Million",
    feeValue: "50000",
    validityYear: "",
    id: "ApprovalofanEnvironmentalManagementPlan",
  },
  {
    timeLineText: "7-10 Days Above 20 Million up to 100 Million",
    feeValue: "100000",
    validityYear: "",
    id: "ApprovalofanEnvironmentalManagementPlan",
  },
  {
    timeLineText: "7-10 Days Above 100 Milliion up to 200Million",
    feeValue: "200000",
    validityYear: "",
    id: "ApprovalofanEnvironmentalManagementPlan",
  },
  {
    timeLineText: "7-10 Days Above 200 Million up to 500 Million",
    feeValue: "400000",
    validityYear: "",
    id: "ApprovalofanEnvironmentalManagementPlan",
  },
  {
    timeLineText: "7-10 Days Above 500 Million",
    feeValue: "600000",
    validityYear: "",
    id: "ApprovalofanEnvironmentalManagementPlan",
  },
  {
    timeLineText: "7-10 Days Review fee for Environmental Checklist or EMP",
    feeValue: "40000",
    validityYear: "",
    id: "ApprovalofanEnvironmentalManagementPlan",
  },
  {
    timeLineText: "7 Days Security Fee",
    feeValue: "20000",
    validityYear: "",
    id: "CertificationofEnvironmentalLab",
  },
  {
    timeLineText: "7 Days Certificate Fee",
    feeValue: "50000",
    validityYear: "",
    id: "CertificationofEnvironmentalLab",
  },
  {
    timeLineText: "7 Days",
    feeValue: "50000",
    validityYear: "",
    id: "ApprovalofHospitalWasteManagementPlan",
  },
  //Sindh Industrial Trading Estate Dropdown Data
  {
    timeLineText: "60 days",
    feeValue: "",
    validityYear: "",
    id: "SindhIndustrialTrading",
  },
  {
    timeLineText: "14 days",
    feeValue: "",
    validityYear: "",
    id: "ApprovalofBuildingDrawing",
  },
  {
    timeLineText: "7 days",
    feeValue: "",
    validityYear: "",
    id: "ApprovalofCompletion(Block)Plan",
  },
  {
    timeLineText: "14 days",
    feeValue: "",
    validityYear: "",
    id: "CollectionOfAdditionalTradeFee",
  },
  {
    timeLineText: "14 days",
    feeValue: "",
    validityYear: "",
    id: "Subdivision",
  },
  {
    timeLineText: "14 days",
    feeValue: "",
    validityYear: "",
    id: "IssuanceofLeaseDeed",
  },
  {
    timeLineText: "14 days",
    feeValue: "",
    validityYear: "",
    id: "NOCforUtilities",
  },
  {
    timeLineText: "14 days",
    feeValue: "50000",
    validityYear: "",
    id: "NOCforMortgage",
  },
  {
    timeLineText: "14 days",
    feeValue: "",
    validityYear: "",
    id: "NOCforRoadCutting",
  },
  {
    timeLineText: "14 days",
    feeValue: "",
    validityYear: "",
    id: "NOCforcarparking",
  },
  //Sindh Small Industries Corporation (SSIC) Dropdown Data
  {
    timeLineText: "15 Days",
    feeValue: "",
    validityYear: "",
    id: "SindhSamllIndustries",
  },
  {
    timeLineText: "5-10 Days",
    feeValue: "",
    validityYear: "",
    id: "ApprovalofDrawing",
  },
  {
    timeLineText: "5-10 Days",
    feeValue: "",
    validityYear: "",
    id: "SubdivisionTransfer",
  },
  {
    timeLineText: "5-10 Days",
    feeValue: "",
    validityYear: "",
    id: "NOCforUtilitiesSI",
  },
  {
    timeLineText: "5-10 Days",
    feeValue: "",
    validityYear: "",
    id: "NOCforRoadCuttingSI",
  },
  {
    timeLineText: "15-25 Days",
    feeValue: "",
    validityYear: "",
    id: "IssuanceofLeaseDraftSI",
  },
  {
    timeLineText: "15-25 Days",
    feeValue: "",
    validityYear: "",
    id: "NOCforMortgageSI",
  },
  {
    timeLineText: "15-25 Days",
    feeValue: "",
    validityYear: "",
    id: "UnauthorizedConstructionSI",
  },
  //Board Of Revenue Dropdown Data
  {
    timeLineText: "Same Day Per Page",
    feeValue: "300 ",
    validityYear: "",
    id: "BoardOfRevenue",
  },
  {
    timeLineText: "10 Days",
    feeValue: "",
    validityYear: "",
    id: "RegistrationofDocument",
  },
  //District Muncipal Corporation Dropdown Data
  {
    timeLineText: "1 day",
    feeValue: "",
    validityYear: "",
    id: "DistrictMuncipal",
  },
  {
    timeLineText: "7-10 days",
    feeValue: "",
    validityYear: "",
    id: "RoadCuttingPermission",
  },
  {
    timeLineText: "1 day",
    feeValue: "",
    validityYear: "",
    id: "PermissionforHoldingFairs",
  },
  {
    timeLineText: "7 to 10 days",
    feeValue: "",
    validityYear: "",
    id: "PermissionforHoldingFairs",
  },
  {
    timeLineText: "1 to 2 days",
    feeValue: "",
    validityYear: "",
    id: "PermissionforKeepingBuildingMaterial",
  },
  {
    timeLineText: "7 to 15 days",
    feeValue: "",
    validityYear: "",
    id: "PermissionforSportsActivities",
  },
  {
    timeLineText: "7 to 15 days",
    feeValue: "",
    validityYear: "",
    id: "PermissionforNurseriesandParks",
  },
];
export default function RegulatoryCatalogCalculator() {
  const [isSticky, setIsSticky] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(false);
  const [dropdowns, setDropdowns] = useState([]);
  const [enableAreas, setEnableAreas] = useState(true);
  const [enableAreas1, setEnableAreas1] = useState(true);
  const [changeValue, setChangeValue] = useState([
    {
      timeLineText: "10-12 Days",
      feeValue: "15000",
      validityYear: "3 Years",
      id: "Urban",
    },
  ]);
  const [areaDropdown, setAreaDropdown] = useState([
    { id: "Urban", text: "Urban" },
    { id: "Rural", text: "Rural" },
  ]);
  const [areaDropdown1, setAreaDropdown1] = useState([
    { id: "Urban", text: "Urban" },
    { id: "Rural", text: "Rural" },
  ]);
  const [label, setLabel] = useState("Areas");
  const [label1, setLabel1] = useState("Areas");
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

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const handleDepartments = (e, param) => {
    debugger;
    const selectedValue = e.target.value;
    const departmentLabels = {
      Urban: "Areas",
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
    let data = [...gridData];

    if (departmentLabels[selectedValue]) {
      setLabel(departmentLabels[selectedValue]);
      filterAreaData = subData.filter((x) => x.id === selectedValue);
      setAreaDropdown(filterAreaData);
      filterData = data.filter((x) => x.id === selectedValue);
      setEnableAreas(true);
    } else if (selectedValue !== "") {
      setEnableAreas(false);
      filterData = data.filter((x) => x.id === selectedValue);
    }

    !param ? setChangeValue(filterData) : (filterData = filterData);
    return filterData;
  };
  const handleSubDepartments = (e) => {
    debugger;
    const selectedValue = e.target.value;
    const departmentLabels = {
      Urban: "Areas",
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

    let filterAreaData = [];
    let subData = [...areas1];
    let data = [...gridData];
    let filterData = [];

    if (departmentLabels[selectedValue]) {
      setLabel1(departmentLabels[selectedValue]);
      filterAreaData = subData.filter((x) => x.id === selectedValue);
      setAreaDropdown1(filterAreaData);
      filterData = data.filter((x) => x.id === selectedValue);
      setEnableAreas1(true);
    } else if (selectedValue !== "") {
      setEnableAreas1(false);
      filterData = data.filter((x) => x.id === selectedValue);
    }
    const updatedDropdowns = [...dropdowns];
    updatedDropdowns[e] = value;
    setDropdowns(updatedDropdowns);
  };

  const handleArea = (e) => {
    debugger;
    let data = [...gridData];
    const selectedValue = e.target.value;
    let filterData = [];
    if (selectedValue !== "") {
      filterData = data.filter((x) => x.id === selectedValue);
    }
    setChangeValue(filterData);
  };
  const handleSubArea = (e) => {
    debugger;
    let data = [...gridData];
    const selectedValue = e.target.value;
    let filterData = [];
    if (selectedValue !== "") {
      filterData = data.filter((x) => x.id === selectedValue);
    }
    setChangeValue(filterData);
  };

  const addDropdown = () => {
    setDropdowns(prevDropdowns => [...prevDropdowns, '']);
  };
  const deleteDropdown = (index) => {
    const updatedDropdowns = dropdowns.filter((_, i) => i !== index);
    setDropdowns(updatedDropdowns);
  };
  return (
    <>
      {windowWidth <= 500 ? <MobileHeaderGeneric /> : <GenericHeader />}

      <div className="siteHeader" style={{ background: `url(${AboutUsImg})` }}>
        <h1
          className={`slide-in-left Investnow-h1 ${
            isVisible ? "" : "slide-out-left"
          }`}
        >
          Regulatory Catalog
        </h1>
      </div>
      <div className="row regulatoryCalculatorHead">
        <Link to={"/home"} className="linkFont">
          <div>
            <h5 className="linkFont2">Home {value}</h5>
            Regulatory Catalog
          </div>
        </Link>
      </div>

      <div
        className="shadow-sm bg-white  "
        style={{ paddingTop: "30px", height: "550px" }}
      >
        <div
          className="row"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <h1 className="mainHeading">Regulatory Tax Calculator</h1>
        </div>
        <div className="row justify-content-center mt-3 align-items-lg-start">
          <div className="col-lg-4" style={{ marginBottom: "20px" }}>
            <div style={{ display: "flex", gap: "15px" }}>
              {/*--------------- Primary Dropdown------------- */}
              <FormControl
                variant="outlined"
                size="small"
                className="dropdown-width"
              >
                <InputLabel htmlFor="outlined-age-native-simple">
                  Departments
                </InputLabel>
                <Select
                  onChange={handleDepartments}
                  native
                  label="Departments"
                  inputProps={{
                    name: "case",
                    id: "outlined-age-native-simple",
                  }}
                >
                  {department.map((Val, index) => {
                    return (
                      <option key={index} value={Val.value}>
                        {Val.text}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>
              <button
                className="update"
                style={{ width: "25%" }}
                onClick={addDropdown}
              >
                Add More
              </button>
            </div>
            <div className="row align-items-lg-start justify-content-center ">
              <div className="col-lg-12 px-0" style={{ marginTop: "20px" }}>
                {/*--------------- Primary Sub-Dropdown------------- */}
                {enableAreas === true ? (
                  <div style={{ display: "flex", gap: "15px" }}>
                    <FormControl
                      variant="outlined"
                      size="small"
                      onChange={handleArea}
                      className="dropdown-width"
                    >
                      <InputLabel htmlFor="outlined-age-native-simple">
                        {label}
                      </InputLabel>
                      <Select
                        native
                        label={label}
                        renderValue={areas[0]}
                        inputProps={{
                          name: "case",
                          id: "outlined-age-native-simple",
                        }}
                      >
                        {areaDropdown.map((Val, index) => {
                          return (
                            <option key={index} value={Val.value}>
                              {Val.text}
                            </option>
                          );
                        })}
                      </Select>
                    </FormControl>
                    <div style={{ width: "26%" }}></div>
                  </div>
                ) : (
                  <div className="col-lg-3"></div>
                )}
                {/*--------------- Secondary Dropdown------------- */}
                {dropdowns.map((_, index) => (
                  <div
                    key={index}
                    style={
                      enableAreas === true
                        ? {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "end",
                            marginTop: "20px",
                          }
                        : {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "end",
                          }
                    }
                  >
                      <div style={{ display: "flex", gap: "15px",width:"100%" }}>
                      <FormControl
                        variant="outlined"
                        size="small"
                        className="dropdown-width"
                      >
                        <InputLabel htmlFor="outlined-age-native-simple">
                          Departments
                        </InputLabel>
                        <Select
                          onChange={handleSubDepartments}
                          native
                          label="Departments"
                          inputProps={{
                            name: "case",
                            id: "outlined-age-native-simple",
                          }}
                        >
                          {department1.map((Val, index) => {
                            return (
                              <option key={index} value={Val.value}>
                                {Val.text}
                              </option>
                            );
                          })}
                        </Select>
                      </FormControl>
                      <button
                        className="update"
                        style={{ width: "25%" }}
                        onClick={() => deleteDropdown(index)}
                      >
                        Delete
                      </button>
                    </div>
                {/*--------------- Secondary Sub-Dropdown------------- */}
                    {enableAreas1 === true ? (
                      <div style={{ display: "flex", gap: "15px",width:"100%" }}>
                        <FormControl
                          variant="outlined"
                          size="small"
                          onChange={handleSubArea}
                          className="dropdown-width"
                          style={{ marginTop: "20px" }}
                        >
                          <InputLabel htmlFor="outlined-age-native-simple">
                            {label1}
                          </InputLabel>
                          <Select
                            native
                            label={label1}
                            renderValue={areas1[0]}
                            inputProps={{
                              name: "case",
                              id: "outlined-age-native-simple",
                            }}
                          >
                            {areaDropdown1.map((Val, index) => {
                              return (
                                <option key={index} value={Val.value}>
                                  {Val.text}
                                </option>
                              );
                            })}
                          </Select>
                        </FormControl>
                        <div style={{ width: "26%" }}></div>
                      </div>
                    ) : (
                      <div className="col-lg-3"></div>
                    )}
                  
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-5 ">
            <RegulatoryCatalogCalculatorGrid changeValue={changeValue} />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-5"></div>
          <div className="col-lg-4"></div>
        </div>
        <div className="row"></div>
      </div>
      <Footer />
    </>
  );
}
