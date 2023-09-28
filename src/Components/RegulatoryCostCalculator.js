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

const Drop2Data = (value) => {
  let array = [];
  let label = "";
  switch (value) {
    case "college":
      array = [
        // Urban Dropdown Data
        {
          id: "Urban",
          timeLineText: "10-12 Days",
          feeValue: "15000",
          validityYear: "3 Years",
          text: "Urban",
          value: "Urban",
        },
        // Rural Dropdown Data
        {
          id: "Rural",
          value: "Rural",
          text: "Rural",
          timeLineText: "10-12 Days",
          feeValue: "20000",
          validityYear: "3 Years",
        },
      ];
      label = "Area";
      break;
    case "labour":
      array = [
        // labour And Human Resource Department Dropdown Data
        {
          id: "Same",
          timeLineText: "10-12 Days",
          feeValue: "15000",
          validityYear: "3 Years",
          text: "Same",
          value: "Same",
        },
        {
          id: "labour",
          timeLineText: "10 days",
          feeValue: "",
          validityYear: "2 year",
          text: "10 Days",
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
          value: "SFA",
          timeLineText: "7 Days",
          feeValue: " ",
          validityYear: "as per schedule",
          text: "Registration and Licensing of Food Business Operator",
        },
      ];
      label = "Labour";
      break;
    case "MontToMatric":
      array = [
        {
          id: "MontToMatric",
          value: "MontToMatric",
          timeLineText: "30 Days",
          feeValue: "7000",
          validityYear: "as per schedule",
          text: "Institutions from Montessori up to Class-X",
        },
        {
          id: "MontToMatric",
          timeLineText: "30 Days",
          feeValue: "15000",
          validityYear: "as per schedule",
          value: "HigherAndSecondary",
          text: "Higher Secondary School",
        },
        {
          id: "MontToMatric",
          value: "OALevel",
          timeLineText: "30 Days",
          feeValue: "30000",
          validityYear: "as per schedule",
          text: 'Institutions of "O" & "A" Level',
        },
        {
          id: "MontToMatric",
          value: "HigherLearning",
          timeLineText: "30 Days",
          feeValue: "20000",
          validityYear: "as per schedule",
          text: "Degree awarding institutes and universities including Institutions having academic linkage / foreign collaboration/affiliation with any other institutions of higher learning",
        },
      ];
      label = "School Education and Literacy Department";
      break;
    case "Agriculture":
      array = [
        {
          id: "Agriculture",
          value: "Pesticides",
          timeLineText: "1 Month ",
          feeValue: "200000",
          validityYear: "as per schedule",
          text: "Distributor Registration / License for Pesticides ",
        },
        {
          id: "Agriculture",
          value: "fertilizers",
          timeLineText: "1 Month",
          feeValue: "50000",
          validityYear: "as per schedule",
          text: "Distributor Registration / License for fertilizers",
        },
        {
          id: "Agriculture",
          value: "ProductLicenseforFertilizerMicronutrients",
          timeLineText: "1 Month ",
          feeValue: "5000",
          validityYear: "as per schedule",
          text: " Product License for Fertilizer Micronutrients",
        },
        {
          id: "Agriculture",
          value: "Rs. 1,000 for Factories - A group",
          timeLineText: "1 Month Lab Fee",
          feeValue: "1000",
          validityYear: "as per schedule",
          text: 'Market Committee License "Retailer, Wholesaler, Factories" (Rs. 1,000 for Factories - A group)',
        },
        {
          id: "Agriculture",
          value: "Rs. 500 for wholesaler – B group ",
          timeLineText: "1 Month Lab Fee",
          feeValue: "500",
          validityYear: "as per schedule",
          text: 'Market Committee License "Retailer, Wholesaler, Factories" (Rs. 500 for wholesaler – B group)',
        },
        {
          id: "Agriculture",
          value: "Rs. 100 for Retailers – C group",
          timeLineText: "1 Month Lab Fee",
          feeValue: "100",
          validityYear: "as per schedule",
          text: 'Market Committee License "Retailer, Wholesaler, Factories" (Rs. 100 for Retailers – C group)',
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
          validityYear: "as per schedule",
          text: "License to sell Drugs by Way of Retail Sale (Form-6)",
        },
        {
          id: "HealthDepartment",
          value: "Wholesale",
          timeLineText: "3 Month",
          feeValue: "5000",
          validityYear: "as per schedule",
          text: "License to sell Drugs by Way of Wholesale 7A",
        },
        {
          id: "HealthDepartment",
          value: "Pharmacy",
          timeLineText: "3 Month",
          feeValue: "5000",
          validityYear: "as per schedule",
          text: "License to sell Drugs in Pharmacy (Form-8)",
        },
        {
          id: "HealthDepartment",
          value: "NarcoticsandOtherControlledDrugs",
          timeLineText: "3 Month",
          feeValue: "5000",
          validityYear: "as per schedule",
          text: "License to sell Narcotics and Other Controlled Drugs/ Substances (Form-9)",
        },
        {
          id: "HealthDepartment",
          value: "IndenterofDrugs",
          timeLineText: "3 Month",
          feeValue: "5000",
          validityYear: "as per schedule",
          text: "License to Manufacturer /Importer /Indenter of Drugs (Form-7)",
        },
      ];
      label = "Health Department";
      break;
    case "SindhHealthCareCommission":
      array = [
        {
          id: "SindhHealthCareCommission",
          value: "SindhHealthCareCommission",
          timeLineText: "30 Days",
          feeValue: "500",
          validityYear: "as per schedule",
          text: " Single specialty (i.e general practitioner, homeo, tibb, detist, nursing/ maternity home, laboratories, radiology centre etc.",
        },
        {
          id: "SindhHealthCareCommission",
          value: "BeddedMedical",
          timeLineText: "30 Days",
          feeValue: "2000",
          validityYear: "as per schedule",
          text: "2 1-24 bedded Medical Centre/ Hospital",
        },
        {
          id: "SindhHealthCareCommission",
          value: "AboveBeddedMedical",
          timeLineText: "30 Days",
          feeValue: "5000",
          validityYear: "as per schedule",
          text: " 25 and above bedded Hospital",
        },
        {
          id: "SindhHealthCareCommission",
          value: "AlreadyRegistered",
          timeLineText: "30 Days",
          feeValue: "1000",
          validityYear: "as per schedule",
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
          validityYear: "as per schedule",
          text: "Registration Certificate of Partnership Firm",
        },
        {
          id: "IndustriesAndCommerce",
          value: "RegistrationCertificateofAmendment",
          timeLineText: "5 Days",
          feeValue: "55",
          validityYear: "as per schedule",
          text: "Registration Certificate of Amendment/Dissolution /Rectification in Partnership Firm",
        },
        {
          id: "IndustriesAndCommerce",
          value: "RegistrationofNewBoiler",
          timeLineText: "10-15 Days",
          feeValue: "",
          validityYear: "as per schedule",
          text: "Registration of New Boiler",
        },
        {
          id: "IndustriesAndCommerce",
          value: "RegistrationofOldBoiler",
          timeLineText: "10-15 Days",
          feeValue: "",
          validityYear: "as per schedule",
          text: "Registration of Old Boiler",
        },
        {
          id: "IndustriesAndCommerce",
          value: "ApprovalofPlanandParticularsofNewBoiler",
          timeLineText: "10-15 Days",
          feeValue: "",
          validityYear: "as per schedule",
          text: "Approval of Plan and Particulars of Boilers Acceptable for Registration (New Boiler)",
        },
        {
          id: "IndustriesAndCommerce",
          value: "ApprovalofPlanandParticularsofUsedBoiler",
          timeLineText: "10-15 Days",
          feeValue: "",
          validityYear: "as per schedule",
          text: "Approval of Plan and Particulars of Boilers Acceptable for Registration (Used Boiler)",
        },
        {
          id: "IndustriesAndCommerce",
          value: "TransferofOwnership",
          timeLineText: "10-15 Days",
          feeValue: "",
          validityYear: "as per schedule",
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
          validityYear: "as per schedule",
          text: "License for Handling of Hazardous Substances",
        },
        {
          id: "SindhEnvironmentalProtection",
          value: "NonHazardousSubstances",
          timeLineText: "7 Days",
          feeValue: "50000",
          validityYear: "as per schedule",
          text: "License to Waste Contractor for Handling of Hazardous Substances and Non-Hazardous substances",
        },
        {
          id: "SindhEnvironmentalProtection",
          value: "ApprovalUnderSection17",
          timeLineText: "EC (15 days)  ▪ IEE (30 days) ▪ EIA (60 days)",
          feeValue: "1000",
          validityYear: "as per schedule",
          text: "Approval Under Section 17 (IEE/EIA/EC)",
        },
        {
          id: "SindhEnvironmentalProtection",
          value: "ApprovalofanEnvironmentalManagementPlan",
          timeLineText: "7-10 Days Up to 20 Million",
          feeValue: "50000",
          validityYear: "as per schedule",
          text: "Approval of an Environmental Management Plan 7-10 Days Up to 20 Million",
        },
        {
          id: "SindhEnvironmentalProtection",
          value: "ApprovalofanEnvironmentalManagementPlan",
          timeLineText: "7-10 Days Above 20 Million up to 100 Million",
          feeValue: "100000",
          validityYear: "as per schedule",
          text: "Approval of an Environmental Management Plan 7-10 Days Above 20 Million up to 100 Million",
        },
        {
          id: "SindhEnvironmentalProtection",
          value: "ApprovalofanEnvironmentalManagementPlan",
          timeLineText: "7-10 Days Above 100 Milliion up to 200 Million",
          feeValue: "200000",
          validityYear: "as per schedule",
          text: "Approval of an Environmental Management Plan 7-10 Days Above 100 Milliion up to 200 Million",
        },
        {
          id: "SindhEnvironmentalProtection",
          value: "ApprovalofanEnvironmentalManagementPlan",
          timeLineText: "7-10 Days Above 200 Million up to 500 Million",
          feeValue: "400000",
          validityYear: "as per schedule",
          text: "Approval of an Environmental Management Plan 7-10 Days Above 200 Million up to 500 Million",
        },
        {
          id: "SindhEnvironmentalProtection",
          value: "ApprovalofanEnvironmentalManagementPlan",
          timeLineText: "7-10 Days Above 500 Million",
          feeValue: "600000",
          validityYear: "as per schedule",
          text: "Approval of an Environmental Management Plan 7-10 Days Above 500 Million",
        },
        {
          id: "SindhEnvironmentalProtection",
          value: "ApprovalofanEnvironmentalManagementPlan",
          timeLineText:
            "7-10 Days Review fee for Environmental Checklist or EMP",
          feeValue: "40000",
          validityYear: "as per schedule",
          text: "Approval of an Environmental Management Plan Review fee for Environmental Checklist or EMP",
        },
        {
          id: "SindhEnvironmentalProtection",
          value: "CertificationofEnvironmentalLabSecurity",
          timeLineText: "7 Days Security Fee",
          feeValue: "20000",
          validityYear: "as per schedule",
          text: "Approval of an Environmental Management Plan 7 Days Security Fee",
        },
        {
          id: "SindhEnvironmentalProtection",
          value: "CertificationofEnvironmentalLabCertificate",
          timeLineText: "7 Days Certificate Fee",
          feeValue: "50000",
          validityYear: "as per schedule",
          text: "Approval of an Environmental Management Plan 7 Days Certificate Fee",
        },
        {
          id: "SindhEnvironmentalProtection",
          value: "ApprovalofHospitalWasteManagementPlan",
          timeLineText: "7 Days",
          feeValue: "50000",
          validityYear: "as per schedule",
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
          validityYear: "as per schedule",
          text: "Allotment of Land/ Plot",
        },
        {
          id: "SindhIndustrialTrading",
          value: "ApprovalofBuildingDrawing",
          timeLineText: "14 days",
          feeValue: "",
          validityYear: "as per schedule",
          text: "Approval of Building Drawing",
        },
        {
          id: "SindhIndustrialTrading",
          value: "ApprovalofCompletion(Block)Plan",
          timeLineText: "7 days",
          feeValue: "",
          validityYear: "as per schedule",
          text: "Approval of Completion (Block) Plan",
        },
        {
          id: "SindhIndustrialTrading",
          value: "CollectionOfAdditionalTradeFee",
          timeLineText: "14 days",
          feeValue: "",
          validityYear: "as per schedule",
          text: "Collection of Additional Trade Fee",
        },
        {
          id: "SindhIndustrialTrading",
          value: "Subdivision",
          timeLineText: "14 days",
          feeValue: "",
          validityYear: "as per schedule",
          text: "Subdivision/ Amalgamation/ Transfer/ Subletting/ Extension of Land or Plot/ Change in Constitution/ change in Constitution",
        },
        {
          id: "SindhIndustrialTrading",
          value: "IssuanceofLeaseDeed",
          timeLineText: "14 days",
          feeValue: "",
          validityYear: "as per schedule",
          text: "Issuance of Lease Deed",
        },
        {
          id: "SindhIndustrialTrading",
          value: "NOCforUtilities",
          timeLineText: "14 days",
          feeValue: "",
          validityYear: "as per schedule",
          text: "NOC for Utilities (Electricity, Gas, Cable, PTCL)",
        },
        {
          id: "SindhIndustrialTrading",
          value: "NOCforMortgage",
          timeLineText: "14 days",
          feeValue: "50000",
          validityYear: "as per schedule",
          text: "NOC for Mortgage",
        },
        {
          id: "SindhIndustrialTrading",
          value: "NOCforRoadCutting",
          timeLineText: "14 days",
          feeValue: "",
          validityYear: "as per schedule",
          text: "NOC for Road Cutting",
        },
        {
          id: "SindhIndustrialTrading",
          value: "NOCforcarparking",
          timeLineText: "14 days",
          feeValue: "",
          validityYear: "as per schedule",
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
          validityYear: "as per schedule",
          text: "Allotment Order of Land/ Plot",
        },
        {
          id: "SindhSamllIndustries",
          value: "ApprovalofDrawing",
          timeLineText: "5-10 Days",
          feeValue: "",
          validityYear: "as per schedule",
          text: "Approval of Drawing",
        },
        {
          id: "SindhSamllIndustries",
          value: "SubdivisionTransfer",
          timeLineText: "5-10 Days",
          feeValue: "",
          validityYear: "as per schedule",
          text: "Subdivision/Transfer/ Amalgamation/ Change in constitution (Corporate Setup)/ Change in Trade/ Subletting trade/ Conversion of plot from Industrial to Commercial/ CNG petroleum station/ Godowns & Distribution",
        },
        {
          id: "SindhSamllIndustries",
          value: "NOCforUtilitiesSI",
          timeLineText: "5-10 Days",
          feeValue: "",
          validityYear: "as per schedule",
          text: "NOC for Utilities (Electricity, Telephone, Gas, Water)",
        },
        {
          id: "SindhSamllIndustries",
          value: "NOCforRoadCuttingSI",
          timeLineText: "5-10 Days",
          feeValue: "",
          validityYear: "as per schedule",
          text: "NOC for Road Cutting",
        },
        {
          id: "SindhSamllIndustries",
          value: "IssuanceofLeaseDraftSI",
          timeLineText: "15-25 Days",
          feeValue: "",
          validityYear: "as per schedule",
          text: "Issuance of Lease Draft",
        },
        {
          id: "SindhSamllIndustries",
          value: "NOCforMortgageSI",
          timeLineText: "15-25 Days",
          feeValue: "",
          validityYear: "as per schedule",
          text: "NOC for Mortgage",
        },
        {
          id: "SindhSamllIndustries",
          value: "UnauthorizedConstructionSI",
          timeLineText: "15-25 Days",
          feeValue: "",
          validityYear: "as per schedule",
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
          timeLineText: "Same Day Per Page",
          feeValue: "300",
          validityYear: "as per schedule",
          text: "Issuance of the True Copy of Land Record",
        },
        {
          id: "BoardOfRevenue",
          value: "RegistrationofDocument",
          timeLineText: "10 Days",
          feeValue: "",
          validityYear: "as per schedule",
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
          timeLineText: "1 Day",
          feeValue: "",
          validityYear: "as per schedule",
        },
        {
          id: "DistrictMuncipal",
          value: "RoadCuttingPermission",
          text: "Road Cutting Permission",
          timeLineText: "7-10 Days",
          feeValue: "",
          validityYear: "as per schedule",
        },
        {
          id: "DistrictMuncipal",
          value: "PermissionforHoldingFairs",
          text: "NOC/Permission for Holding Fairs, Events, Tournaments, and other Public Gatherings at DMC Central's Jurisdiction",
          timeLineText: "1 Day",
          feeValue: "",
          validityYear: "as per schedule",
        },
        {
          id: "DistrictMuncipal",
          value: "PermissionforKeepingBuildingMaterial",
          text: "Permission for Keeping Building Material on Roads during Construction",
          timeLineText: "7-10 Days",
          feeValue: "",
          validityYear: "as per schedule",
        },
        {
          id: "DistrictMuncipal",
          value: "PermissionforSportsActivities",
          text: "NOC/Permission for Holding Different Kind of Sports Activities in Playgrounds, Gymnasium, Sports Complex & Facilities of DMC-Central",
          timeLineText: "1-2 Days",
          feeValue: "",
          validityYear: "as per schedule",
        },
        {
          id: "DistrictMuncipal",
          value: "PermissionforNurseriesandParks",
          text: "NOC/Permission for Establishment of Nurseries in parks, Playgrounds & Open spaces of DMC-Centra",
          timeLineText: "7-15 Days",
          feeValue: "",
          validityYear: "as per schedule",
        },
      ];
      label = "District Muncipal";
      break;
      case "KarachiWaterSewerageBoard":
        array=[
          {
            id: "KarachiWaterSewerageBoard",
            value: "SanctionLetterforWaterConnection(Consumer and Bulk)",
            timeLineText: "21 Days",
            feeValue: "",
            validityYear: "as per schedule",
            text: "Sanction Letter for Water Connection (Consumer and Bulk)",
          },
          // {
          //   id: "KarachiWaterSewerageBoard",
          //   value: "LicenseforSub-soilWaterSupply",
          //   timeLineText: "Varies",
          //   feeValue: "",
          //   validityYear: "as per schedule",
          //   text: `License for Sub-soil Water Supply `,
          // },
          {
            id: "KarachiWaterSewerageBoard",
            value: "(Non-refundable license fee per borehole Rs. 100,000/-)",
            timeLineText: "Varies",
            feeValue: "100000",
            validityYear: "as per schedule",
            text: `License for Sub-soil Water Supply (Non-refundable license fee per borehole Rs. 100,000/-) `,
          },
          {
            id: "KarachiWaterSewerageBoard",
            value: "(One-time advance security deposit per borehole Rs. 90,000/-)",
            timeLineText: "Varies",
            feeValue: "90000",
            validityYear: "as per schedule",
            text: `License for Sub-soil Water Supply (One-time advance security deposit per borehole Rs. 90,000/-) `,
          },
          {
            id: "KarachiWaterSewerageBoard",
            value: "(Monthly license fee per bore hole Rs. 30,000/-)",
            timeLineText: "Varies",
            feeValue: "30000",
            validityYear: "as per schedule",
            text: `License for Sub-soil Water Supply (Monthly license fee per bore hole Rs. 30,000/-) `,
          },
       ]
       label="Karachi Water & Sewerage Board";
       break;
       case "LocalGovernmentDepartment":
        array=[
          {
            id: "LocalGovernmentDepartment",
            value: "",
            timeLineText: "",
            feeValue: "",
            validityYear: "as per schedule",
            text: "",
        }
      ]
      label="Local Government Department";
      break;
      case "SindhRevenueBoard":
        array=[{
          id: "SindhRevenueBoard",
          value: "SindhSalesTaxonServices(SST)",
          timeLineText: "Same Day",
          feeValue: "Free of Cost",
          validityYear: "as per schedule",
          text: "Sindh Sales Tax on Services (SST)",
        }]
        label="Sindh Revenue Board";
        break;
        case "Excise,Taxation&NarcoticsControlDepartment":
          array=[{
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "MotorvehicleRegistration",
            timeLineText: "7 Days",
            feeValue: "",
            validityYear: "as per schedule",
            text: "Motor vehicle Registration",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "(Motorcycle Rs.200)",
            timeLineText: "7 Days",
            feeValue: "200",
            validityYear: "as per schedule",
            text: "Transfer on Motor vehicle (Motorcycle Rs.200)",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "(M/Cars, Jeeps, etc. up to 800 cc Engine Power Rs.800)",
            timeLineText: "7 Days",
            feeValue: "800",
            validityYear: "as per schedule",
            text: "Transfer on Motor vehicle (M/Cars, Jeeps, etc. up to 800 cc Engine Power Rs.800)",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "(M/Cars, Jeeps, etc. from 801 cc to 2,000 cc Engine Power Rs.1,000)",
            timeLineText: "7 Days",
            feeValue: "1000",
            validityYear: "as per schedule",
            text: "Transfer on Motor vehicle (M/Cars, Jeeps, etc. from 801 cc to 2,000 cc Engine Power Rs.1,000)",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "(Rickshaws Rs.400)",
            timeLineText: "7 Days",
            feeValue: "400",
            validityYear: "as per schedule",
            text: "Transfer on Motor vehicle (Rickshaws Rs.400)",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "(Tractors Rs.1,000)",
            timeLineText: "7 Days",
            feeValue: "1000",
            validityYear: "as per schedule",
            text: "Transfer on Motor vehicle (Tractors Rs.1,000)",
          },
        
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "(Big Vehicle Rs.1,500)",
            timeLineText: "7 Days",
            feeValue: "1500",
            validityYear: "as per schedule",
            text: "Alteration of Vehicle (Big Vehicle Rs.1,500)",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "(Small Vehicle Rs.1,250)",
            timeLineText: "7 Days",
            feeValue: "1250",
            validityYear: "as per schedule",
            text: "Alteration of Vehicle (Small Vehicle Rs.1,250)",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "MotorVehicleDealerLicense",
            timeLineText: "7 Days",
            feeValue: "7000",
            validityYear: "as per schedule",
            text: 'Motor Vehicle Dealer  License (Prescribed fee of Rs. 7,000 "32-A challan for")',
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "ProfessionalTaxRegistration",
            timeLineText: "Same Day",
            feeValue: "",
            validityYear: "as per schedule",
            text: "Professional Tax Registration",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "(Distillery License for intoxicating Liquor 30,000/- per annum)",
            timeLineText: "1 Month",
            feeValue: "30000",
            validityYear: "as per schedule",
            text: "Distillery License for Intoxicating Liquor (Distillery License for intoxicating Liquor 30,000 per annum)",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "(Establishment Charges 3,500,000/- per annum)",
            timeLineText: "1 Month",
            feeValue: "3500000",
            validityYear: "as per schedule",
            text: "Distillery License for Intoxicating Liquor (Establishment Charges 3,500,000 per annum)",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "(Manufacturing of PMFL License 30,000/- per annum)",
            timeLineText: "1 Month",
            feeValue: "30000",
            validityYear: "as per schedule",
            text: "Manufacturing of PMFL License (Manufacturing of PMFL License 30,000 per annum)",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "(Establishment Charges 3,500,000/- per annum)",
            timeLineText: "1 Month",
            feeValue: "3500000",
            validityYear: "as per schedule",
            text: "Manufacturing of PMFL License (Establishment Charges 3,500,000 per annum)",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "(Establishing a Brewery for Beer 30,000/- per annum)",
            timeLineText: "1 Month",
            feeValue: "30000",
            validityYear: "as per schedule",
            text: "Brewery License for Beer (Establishing a Brewery for Beer 30,000 per annum)",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "(Establishment Charges 35,00,000/- per annum)",
            timeLineText: "1 Month",
            feeValue: "3500000",
            validityYear: "as per schedule",
            text: "Brewery License for Beer (Establishment Charges 35,00,000 per annum)",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "TradeandImport",
            timeLineText: "1 Month",
            feeValue: "700000",
            validityYear: "as per schedule",
            text: "Trade and Import License for Portable Liquor (Wholesale) ",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "RetailOffLiquorLicense",
            timeLineText: "",
            feeValue: "500000",
            validityYear: "as per schedule",
            text: "Retail Off Liquor License",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "(Distillery License for manufacturing of Ethanol 30,000/- per annum)",
            timeLineText: "1 Month",
            feeValue: "30000",
            validityYear: "as per schedule",
            text: "Distillery License for Manufacturing of Ethanol (Distillery License for manufacturing of Ethanol 30,000 per annum)",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "(Establishment Fee 3,500,000/- per annum)",
            timeLineText: "1 Month",
            feeValue: "3500000",
            validityYear: "as per schedule",
            text: "Distillery License for Manufacturing of Ethanol (Establishment Fee 3,500,000 per annum)",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "SaleofRectifiedSpiritLicense",
            timeLineText: "1 Month",
            feeValue: "180000",
            validityYear: "as per schedule",
            text: "Sale of Rectified Spirit License",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "DenaturationofRectifiedSpiritLicense ",
            timeLineText: "1 Month",
            feeValue: "24000",
            validityYear: "as per schedule",
            text: "Denaturation of Rectified Spirit License (24,000/- per annum)",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "DenaturedSpiritLicenseforWholesale",
            timeLineText: "1 Month",
            feeValue: "30000",
            validityYear: "as per schedule",
            text: "Denatured Spirit License for Wholesale (30,000 per annum)",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "DenaturedSpiritLicenseforRetail",
            timeLineText: "1 Month",
            feeValue: "",
            validityYear: "as per schedule",
            text: "Denatured Spirit License for Retail",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "Intoxicants(Drugs)ManufacturingLicense",
            timeLineText: "1 Month",
            feeValue: "",
            validityYear: "as per schedule",
            text: "Intoxicants (Drugs) Manufacturing License",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "Intoxicants(Drugs)CommercialSaleLicense",
            timeLineText: "1 Month",
            feeValue: "25000",
            validityYear: "as per schedule",
            text: 'Intoxicants "Drugs" Commercial Sale License ( 25,000 per annum)',
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "PermitforHotelsforRetailSaleofIntoxicatingLiquor",
            timeLineText: "1 Month",
            feeValue: "",
            validityYear: "as per schedule",
            text: "Permit for Hotels for RetailSale of Intoxicating Liquor",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "Clublicense",
            timeLineText: "1 Month",
            feeValue: "60000",
            validityYear: "as per schedule",
            text: "Club license (60,000 per annum)",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "MethanolWholesaleLicenseforCommercialUse",
            timeLineText: "1 Month",
            feeValue: "30000",
            validityYear: "as per schedule",
            text: "Methanol Wholesale License for Commercial Use (30,000 per annum)",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "PermissiontoPurchaseandUseofMethanolSpiritinArtsorIndustries",
            timeLineText: "1 Month",
            feeValue: "3000",
            validityYear: "as per schedule",
            text: "Permission to Purchase and Use of Methanol Spirit in Arts or Industries (3,000 per annum)",
          },

          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "PermissiontouseRectifiedSpiritintheManufacturingofSpirituous/Medicinal/Homeopathic/ToiletPreparation",
            timeLineText: "1 Month",
            feeValue: "",
            validityYear: "as per schedule",
            text: "Permission to use Rectified Spirit in the Manufacturing of Spirituous / Medicinal / Homeopathic / Toilet Preparation",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "(Transport Permit for Beer 76/- Per Liter)",
            timeLineText: "3 Days",
            feeValue: "76",
            validityYear: "as per schedule",
            text: 'Transport Permit "Buyer of the PMFL, Beer, Denatured Spirit, Methanol" (Transport Permit for Beer Rs. 76 Per Liter)',
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "(Transport Permit for PMFL 2,160/- per Proof Gallon )",
            timeLineText: "3 Days",
            feeValue: "2160",
            validityYear: "as per schedule",
            text: 'Transport Permit "Buyer of the PMFL, Beer, Denatured Spirit, Methanol" (Transport Permit for PMFL Rs. 2,160 per Proof Gallon )',
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "(Transport Permit for Denatured Spirit 10/- per Bulk Gallon )",
            timeLineText: "3 Days",
            feeValue: "10",
            validityYear: "as per schedule",
            text: 'Transport Permit "Buyer of the PMFL, Beer, Denatured Spirit, Methanol" (Transport Permit for Denatured Spirit Rs. 10 per Bulk Gallon )',
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "(Vend Fee 6/- per Bulk Gallon)",
            timeLineText: "3 Days",
            feeValue: "6",
            validityYear: "as per schedule",
            text: 'Transport Permit "Buyer of the PMFL, Beer, Denatured Spirit, Methanol" (Vend Fee Rs. 6 per Bulk Gallon)',
          },
        
        
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "(Transport Permit for Methanol 10/- per bulk gallon )",
            timeLineText: "3 Days",
            feeValue: "10",
            validityYear: "as per schedule",
            text: 'Transport Permit "Buyer of the PMFL, Beer, Denatured Spirit, Methanol" (Transport Permit for Methanol Rs. 10 per bulk gallon )',
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "(Vend Fee 6/- per Bulk Gallon)",
            timeLineText: "3 Days",
            feeValue: "6",
            validityYear: "as per schedule",
            text: 'Transport Permit "Buyer of the PMFL, Beer, Denatured Spirit, Methanol" (Vend Fee Rs. 6 per Bulk Gallon )',
          },









          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "(fee challan of Rs. 60/-)",
            timeLineText: "1 Month",
            feeValue: "60",
            validityYear: "as per schedule",
            text: "Retail of Transport Permit (fee challan of Rs. 60)",
          },
      
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "(Transport Permit for Beer Rs.02/- per bottle of Beer)",
            timeLineText: "1 Month",
            feeValue: "2",
            validityYear: "as per schedule",
            text: "Retail of Transport Permit (Transport Permit for Beer Rs. 02 per bottle of Beer)",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "(Transport Permit for PMFL Rs.15/- per unit of PMFL)",
            timeLineText: "1 Month",
            feeValue: "15",
            validityYear: "as per schedule",
            text: "Retail of Transport Permit (Transport Permit for PMFL Rs. 15 per unit of PMFL)",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "(Transport Permit for Methanol Rs.10/- per bulk Gallon)",
            timeLineText: "1 Month",
            feeValue: "10",
            validityYear: "as per schedule",
            text: "Retail of Transport Permit (Transport Permit for Methanol Rs. 10 per bulk Gallon)",
          },
          {
            id: "Excise,Taxation&NarcoticsControlDepartment",
            value: "(Vend fee of Rs. 6 /- per bulk Gallon )",
            timeLineText: "1 Month",
            feeValue: "6",
            validityYear: "as per schedule",
            text: 'Retail of Transport Permit (Vend fee of Rs. 6 per bulk Gallon) "both collected together)"',
          },

        ] 
        label="Excise, Taxation & Narcotics Control Department";
        break;
        case "SindhEmployeesSocialSecurityInstitution(SESSI)":
          array=[{
            id: "SindhEmployeesSocialSecurityInstitution(SESSI)",
            value: "RegistrationofanEstablishments(R-1)",
            timeLineText: "Same Day",
            feeValue: "",
            validityYear: "as per schedule",
            text: "Registration of an Establishments (R-1)",
          }]
          label="Sindh Employees Social Security Institution (SESSI)";
          break;
          case "EnergyDepartment":
            array = [
              {
                id: "EnergyDepartment",
                value: "ElectricalContractorLicense",
                timeLineText: "",
                feeValue: "5000",
                validityYear: "as per schedule",
                text: "Electrical Contractor License",
              },
              {
                id: "EnergyDepartment",
                value: "CompetencyCertificateforWireman",
                timeLineText: "",
                feeValue: "250",
                validityYear: "as per schedule",
                text: "Competency Certificate for Wireman (Rs. 100 Late Fee 150)",
              },
              {
                id: "EnergyDepartment",
                value: "CompetencyCertificateforElectricSupervisor",
                timeLineText: "",
                feeValue: "1250",
                validityYear: "as per schedule",
                text: "Competency Certificate for Electric Supervisor (Rs. 500 Late Fee 750)",
              },
              {
                id: "EnergyDepartment",
                value: "ExplorationLicenseforCoal(Large Scale)",
                timeLineText: "100 Days",
                feeValue: "200000",
                validityYear: "as per schedule",
                text: "Exploration License for Coal (Large Scale) ",
              },
              {
                id: "EnergyDepartment",
                value: "MiningLease(Large Scale)",
                timeLineText: "",
                feeValue: "300000",
                validityYear: "as per schedule",
                text: "Mining Lease (Large Scale)",
              },
              {
                id: "EnergyDepartment",
                value: "ExplorationPermit(Small Scale)",
                timeLineText: "",
                feeValue: "100000",
                validityYear: "as per schedule",
                text: "Exploration Permit (Small Scale)",
              },
              {
                id: "EnergyDepartment",
                value: "MiningPermit(Small  Scale)",
                timeLineText: "",
                feeValue: "200000",
                validityYear: "as per schedule",
                text: "Mining Permit (Small  Scale) ",
              },
            ];
             label="Energy Department";
         break;
         case "KarachiMetropolitanCorporation(KMC)":
          array=[
            {
            id: "KarachiMetropolitanCorporation(KMC)",
            value: "Transfer/MutationofLand",
            timeLineText: "15 Days",
            feeValue: "",
            validityYear: "as per schedule",
            text: "Transfer/ Mutation of Land",
          },
          {
            id: "KarachiMetropolitanCorporation(KMC)",
            value: "NOCforSale",
            timeLineText: "15 Days",
            feeValue: "",
            validityYear: "as per schedule",
            text: "NOC for Sale",
          },
          {
            id: "KarachiMetropolitanCorporation(KMC)",
            value: "NOCforMortgage",
            timeLineText: "15 Days",
            feeValue: "",
            validityYear: "as per schedule",
            text: "NOC for Mortgage",
          },
          {
            id: "KarachiMetropolitanCorporation(KMC)",
            value: "Lease",
            timeLineText: "1 Month",
            feeValue: "",
            validityYear: "as per schedule",
            text: "Lease",
          },
          {
            id: "KarachiMetropolitanCorporation(KMC)",
            value: "Transfer/MutationofLandinOrangiTown",
            timeLineText: "1 Month",
            feeValue: "",
            validityYear: "as per schedule",
            text: "Transfer/ Mutation of Land in Orangi Town",
          },
          {
            id: "KarachiMetropolitanCorporation(KMC)",
            value: "AmalgamationandSubdivisionofLand",
            timeLineText: "15 Days",
            feeValue: "",
            validityYear: "as per schedule",
            text: "Amalgamation and Subdivision of Land",
          },
          {
            id: "KarachiMetropolitanCorporation(KMC)",
            value: "Transfer/MutationofLandinKatchiAbadi",
            timeLineText: "15 Days",
            feeValue: "",
            validityYear: "as per schedule",
            text: "Transfer / Mutation of Land in Katchi Abadi",
          },
          {
            id: "KarachiMetropolitanCorporation(KMC)",
            value: "NOCforSale",
            timeLineText: "15 Days",
            feeValue: "",
            validityYear: "as per schedule",
            text: "NOC for Sale",
          },
          {
            id: "KarachiMetropolitanCorporation(KMC)",
            value: "NOCforMortgage",
            timeLineText: "15 Days",
            feeValue: "",
            validityYear: "as per schedule",
            text: "NOC for Mortgage",
          },
          {
            id: "KarachiMetropolitanCorporation(KMC)",
            value: "Lease",
            timeLineText: "1 Month",
            feeValue: "",
            validityYear: "as per schedule",
            text: "Lease",
          },
          {
            id: "KarachiMetropolitanCorporation(KMC)",
            value: "AmalgamationandSubdivisionofLand",
            timeLineText: "15 Days",
            feeValue: "",
            validityYear: "as per schedule",
            text: "Amalgamation and Subdivision of Land",
          },
          {
            id: "KarachiMetropolitanCorporation(KMC)",
            value: "TemporaryNOCforLanduseforbeautificationoutsidethepremisesofprivateproperty",
            timeLineText: "15 Days",
            feeValue: "1",
            validityYear: "as per schedule",
            text: "Temporary NOC for Land use for beautification outside the premises of private property (Rs. 1 per sq Ft per day)",
          },
          {
            id: "KarachiMetropolitanCorporation(KMC)",
            value: "(District North Rs. 15000)",
            timeLineText: "15 Days",
            feeValue: "15000",
            validityYear: "as per schedule",
            text: "Temporary NOC for temporary installation of Generators outside the premises (District North Rs. 15000)",
          },
          {
            id: "KarachiMetropolitanCorporation(KMC)",
            value: "(District East Rs.10000)",
            timeLineText: "15 Days",
            feeValue: "10000",
            validityYear: "as per schedule",
            text: "Temporary NOC for temporary installation of Generators outside the premises (District East Rs.10000)",
          },
          {
            id: "KarachiMetropolitanCorporation(KMC)",
            value: "(District Centeral Rs.7500)",
            timeLineText: "15 Days",
            feeValue: "7500",
            validityYear: "as per schedule",
            text: "Temporary NOC for temporary installation of Generators outside the premises (District Centeral Rs.7500)",
          },
          {
            id: "KarachiMetropolitanCorporation(KMC)",
            value: "(District West Rs.5000)",
            timeLineText: "15 Days",
            feeValue: "5000",
            validityYear: "as per schedule",
            text: "Temporary NOC for temporary installation of Generators outside the premises (District West Rs.5000)",
          },
          {
            id: "KarachiMetropolitanCorporation(KMC)",
            value: "TemporaryNOCforkeepingbuildingmaterialsonroadsduringconstruction",
            timeLineText: "15 Days",
            feeValue: "",
            validityYear: "as per schedule",
            text: "Temporary NOC for keeping building materials on roads during construction",
          },
          {
            id: "KarachiMetropolitanCorporation(KMC)",
            value: "NOCforfilmandAdshootinginSafariParkandKarachiZoo",
            timeLineText: "15 Days",
            feeValue: "",
            validityYear: "as per schedule",
            text: "NOC for film and Ad shooting in Safari Park and Karachi Zoo",
          },
          {
            id: "KarachiMetropolitanCorporation(KMC)",
            value: "OutdoorAdvertisementonmajorBridgesandunderpass",
            timeLineText: "15 Days",
            feeValue: "",
            validityYear: "as per schedule",
            text: "Outdoor Advertisement on major Bridges and underpass",
          },
          {
            id: "KarachiMetropolitanCorporation(KMC)",
            value: "RoadCuttingPermission",
            timeLineText: "15 Days",
            feeValue: "",
            validityYear: "as per schedule",
            text: "Road Cutting Permission",
          },
          {
            id: "KarachiMetropolitanCorporation(KMC)",
            value: "NOCfororganizingtemporaryBachatBazars",
            timeLineText: "15 Days",
            feeValue: "57000",
            validityYear: "as per schedule",
            text: "NOC for organizing temporary Bachat Bazars (Rs. 57000 as a cost of the cabin)",
          },
          {
            id: "KarachiMetropolitanCorporation(KMC)",
            value: "ReservationofKMCSportsComplexesandplaygroundsinKarachiforSportsevents",
            timeLineText: "15 Days",
            feeValue: "4000",
            validityYear: "as per schedule",
            text: "Reservation of KMC Sports Complexes and playgrounds in Karachi for Sports events",
          },
          {
            id: "KarachiMetropolitanCorporation(KMC)",
            value: "NOCforSale",
            timeLineText: "15 Days",
            feeValue: "",
            validityYear: "as per schedule",
            text: "NOC for Sale",
          },
          {
            id: "KarachiMetropolitanCorporation(KMC)",
            value: "NOCforMortgage",
            timeLineText: "15 Days",
            feeValue: "",
            validityYear: "as per schedule",
            text: "NOC for Mortgage",
          },
          {
            id: "KarachiMetropolitanCorporation(KMC)",
            value: "PreLease",
            timeLineText: "15 Days",
            feeValue: "",
            validityYear: "as per schedule",
            text: "Pre-Lease",
          },
          {
            id: "KarachiMetropolitanCorporation(KMC)",
            value: "Lease",
            timeLineText: "15 Days",
            feeValue: "",
            validityYear: "as per schedule",
            text: "Lease",
          },
        ]
        label="Karachi Metropolitan Corporation (KMC)";
        break;
        case "DistrictMunicipalCorporation(DMC)":
          array=[
            {
              id: "DistrictMunicipalCorporation(DMC)",
              value: "TradeLicense",
              timeLineText: "1 Days",
              feeValue: "",
              validityYear: "as per schedule",
              text: "Trade License",
            },
            
             {
              id: "DistrictMunicipalCorporation(DMC)",
              value: "RoadCuttingPermission",
              timeLineText: "7-10 Days",
              feeValue: "",
              validityYear: "as per schedule",
              text: "Road Cutting Permission",
            },
            {
              id: "DistrictMunicipalCorporation(DMC)",
              value: "NOC/PermissionforHoldingFairs,Events,Tournaments,andotherPublicGatheringsatDMCCentra'sJurisdiction",
              timeLineText: "1 Days",
              feeValue: "",
              validityYear: "as per schedule",
              text: "NOC/Permission for Holding Fairs, Events, Tournaments, and other Public Gatherings at DMC Central's Jurisdiction",
            }, {
              id: "DistrictMunicipalCorporation(DMC)",
              value: "NOC/PermissionforHoldingFairs,Events,Tournaments,andotherPublicGatheringsatDMCCentral'sJurisdiction",
              timeLineText: "7-10 Days",
              feeValue: "",
              validityYear: "as per schedule",
              text: "NOC/Permission for Holding Fairs, Events, Tournaments, and other Public Gatherings at DMC Central's Jurisdiction",
            }, {
              id: "DistrictMunicipalCorporation(DMC)",
              value: "PermissionforKeepingBuildingMaterialonRoadsduringConstruction",
              timeLineText: "1-2 Days",
              feeValue: "",
              validityYear: "as per schedule",
              text: "Permission for Keeping Building Material on Roads during Construction",
            }, {
              id: "DistrictMunicipalCorporation(DMC)",
              value: "NOC/PermissionforHoldingDifferentKindofSportsActivitiesinPlaygrounds,Gymnasium,SportsComplex&FacilitiesofDMCCentral",
              timeLineText: "7-15 Days",
              feeValue: "",
              validityYear: "as per schedule",
              text: "NOC/Permission for Holding Different Kind of Sports Activities in Playgrounds, Gymnasium, Sports Complex & Facilities of DMC-Central",
            }, {
              id: "DistrictMunicipalCorporation(DMC)",
              value: "NOC/PermissionforEstablishmentofNurseriesinparks,Playgrounds&OpenspacesofDMCCentra",
              timeLineText: "7-15 Days",
              feeValue: "",
              validityYear: "as per schedule",
              text: "NOC/Permission for Establishment of Nurseries in parks, Playgrounds & Open spaces of DMC-Centra",
            },
          ]
          label="District Municipal Corporation (DMC)";
          break;
          case "SindhBuildingControlAuthority(SBCA)":
            array=[
              {
                id: "SindhBuildingControlAuthority(SBCA)",
              value: "ApprovalofproposedbuildingplanforCategory-I",
              timeLineText: "5 days for Cat-I 60 Days for Cat-II, III & IV",
              feeValue: "",
              validityYear: "as per schedule",
              text: "Approval of proposed building plan for Category-I"
              },
              {
                id: "SindhBuildingControlAuthority(SBCA)",
              value: "Approval of proposed building plan for Category-II,III,IV",
              timeLineText: "5 days for Cat-I & 60 Days for Cat-II, III & IV",
              feeValue: "",
              validityYear: "as per schedule",
              text: "Approval of proposed building plan for Category-II, III, IV"
              },
              {
                id: "SindhBuildingControlAuthority(SBCA)",
              value: "NoticeofCompletion(Category I to IV)",
              timeLineText: "5 days for Cat-I  & 60 Days for Cat-II, III & IV",
              feeValue: "",
              validityYear: "as per schedule",
              text: "Notice of Completion (Category I to IV)"
              },
              {
                id: "SindhBuildingControlAuthority(SBCA)",
              value: "AdditionalfloorChargesforCategory(I)/BettermentChargesforCategory(II, III & IV",
              timeLineText: "15 days for Cat I and 60 Days for Cat-II, III & IV",
              feeValue: "",
              validityYear: "as per schedule",
              text: "Additional floor Charges for Category (I) / Betterment Charges for Category (II, III & IV"
              },
              {
                id: "SindhBuildingControlAuthority(SBCA)",
              value: "RenewalofBuildingPlanforCategory(I To IV)",
              timeLineText: "15 days for Cat I and 60 Days for Cat-II, III & IV",
              feeValue: "",
              validityYear: "as per schedule",
              text: "Renewal of Building Plan for Category (I To IV)"
              },
              {
                id: "SindhBuildingControlAuthority(SBCA)",
              value: "Addition/Alteration/RevisionofBuildingPlanforCategory(I To IV)",
              timeLineText: "15 days for Cat I and 60 Days for Cat-II, III & IV",
              feeValue: "",
              validityYear: "as per schedule",
              text: "Addition / Alteration / Revision of Building Plan for Category (I To IV)"
              },
              {
                id: "SindhBuildingControlAuthority(SBCA)",
              value: "PermittoDemolishBuildingsforCategory(I To IV)",
              timeLineText: "15 Days",
              feeValue: "",
              validityYear: "as per schedule",
              text: "Permit to Demolish Buildings for Category (I To IV)"
              },
              {
                id: "SindhBuildingControlAuthority(SBCA)",
              value: "AttestationFee",
              timeLineText: "3 Days",
              feeValue: "",
              validityYear: "as per schedule",
              text: "Attestation Fee"
              },
              {
                id: "SindhBuildingControlAuthority(SBCA)",
              value: "COPYOFAPPROVEDBUILDINGPLAN",
              timeLineText: "3 Days",
              feeValue: "",
              validityYear: "as per schedule",
              text: "Copy Of Approved Building Plan"
              },
              {
                id: "SindhBuildingControlAuthority(SBCA)",
              value: "NOCforStructure(Vetting & Departmental)",
              timeLineText: "7 Days",
              feeValue: "",
              validityYear: "as per schedule",
              text: "NOC for Structure (Vetting & Departmental)"
              },
              {
                id: "SindhBuildingControlAuthority(SBCA)",
              value: "BuilderLicense",
              timeLineText: "3 Month",
              feeValue: "",
              validityYear: "as per schedule",
              text: "Builder License"
              },
              {
                id: "SindhBuildingControlAuthority(SBCA)",
              value: "DeveloperLicense",
              timeLineText: "1 Month",
              feeValue: "300000",
              validityYear: "as per schedule",
              text: "Developer License"
              },
              {
                id: "SindhBuildingControlAuthority(SBCA)",
              value: "Soil/MaterialTestingLaboratoriesLicense",
              timeLineText: "3 Month",
              feeValue: "10000",
              validityYear: "as per schedule",
              text: "Soil/ Material Testing Laboratories License"
              },
              {
                id: "SindhBuildingControlAuthority(SBCA)",
              value: "ArchitectureLicense (Rs.20000 for Cat A)",
              timeLineText: "20000 for Cat A 6000 For Cat B",
              feeValue: "20000",
              validityYear: "as per schedule",
              text: "Architecture License (Rs. 20000 for Cat A)"
              }
              ,
              {
                id: "SindhBuildingControlAuthority(SBCA)",
              value: "ArchitectureLicense (Rs. 6000 for Cat A )",
              timeLineText: "3 Month",
              feeValue: "6000",
              validityYear: "as per schedule",
              text: "Architecture License (Rs. 6000 for Cat B )"
              },
              {
                id: "SindhBuildingControlAuthority(SBCA)",
              value: "BuildingSupervisorLicense",
              timeLineText: "3 Month",
              feeValue: "6000",
              validityYear: "as per schedule",
              text: "Building Supervisor License"
              },
              {
                id: "SindhBuildingControlAuthority(SBCA)",
              value: "ProfessionalEngineeringLicense",
              timeLineText: "3 Month",
              feeValue: "6000",
              validityYear: "as per schedule",
              text: "Professional Engineering License"
              },
              {
                id: "SindhBuildingControlAuthority(SBCA)",
              value: "StructuralEngineerLicense",
              timeLineText: "3 Month",
              feeValue: "20000",
              validityYear: "as per schedule",
              text: "Structural Engineer License"
              },
              {
                id: "SindhBuildingControlAuthority(SBCA)",
              value: "TownPlannerLicense",
              timeLineText: "3 Month",
              feeValue: "10000",
              validityYear: "as per schedule",
              text: "Town Planner License"
              },
              {
                id: "SindhBuildingControlAuthority(SBCA)",
              value: "IssuanceoftheNOCforSale&Advertisement",
              timeLineText: "3 Month",
              feeValue: "500",
              validityYear: "as per schedule",
              text: "Issuance of the NOC for Sale & Advertisement"
              },
            ];
            label="Sindh Building Control Authority (SBCA)";
            break;
    default:
     array=[]
      break;
  }
  return { array, label };
};

const Drop1Data = [
  { value: "college", text: "College Education Department" },
  { value: "labour", text: "Labour and Human Resources Department" },
  { value: "SFA", text: "Sindh Food Authority (SFA)" },
  { value: "Agriculture", text: "Agriculture Department" },
  { value: "HealthDepartment", text: "Health Department" },
  { value: "MontToMatric", text: "School Education and Literacy Department" },
  { value: "SindhHealthCareCommission", text: "Sindh Healthcare Commission" },
  { value: "IndustriesAndCommerce", text: "Industries And Commerce" },
  {value: "SindhEnvironmentalProtection", text: "Sindh Environmental Protection", },
  {value: "SindhIndustrialTrading",text: "Sindh Industrial Trading Estate (S.I.T.E) Limited",},
  {value: "SindhSamllIndustries",text: "Sindh Small Industries Corporation (SSIC)",},
  { value: "BoardOfRevenue", text: "Board of Revenue" },
  { value: "DistrictMuncipal", text: "District Muncipal" },
  {value:"KarachiWaterSewerageBoard",text:"Karachi Water & Sewerage Board "},
  {value:"LocalGovernmentDepartment",text:"Local Government Department"},
  {value :"SindhRevenueBoard",text:"Sindh Revenue Board"},
  {value:"Excise,Taxation&NarcoticsControlDepartment",text:"Excise, Taxation & Narcotics Control Department"},
  {value:"SindhEmployeesSocialSecurityInstitution(SESSI)",text:"Sindh Employees Social Security Institution (SESSI) "},
  {value:"EnergyDepartment",text:"Energy Department"},
  {value:"KarachiMetropolitanCorporation(KMC)",text:"Karachi Metropolitan Corporation (KMC)"},
  {value:"DistrictMunicipalCorporation(DMC)",text:"District Municipal Corporation (DMC)"},
  {value:"SindhBuildingControlAuthority(SBCA)",text:"Sindh Building Control Authority (SBCA)"}
];

const getDropdown2Object = (arr, id) => {
  const selectedOption = Drop2Data(arr)?.array.find((val) => val.value === id);
  return selectedOption;
};
const Dropdown = (props) => {
  const [selectedValue, setSelectedValue] = React.useState("");
  const [changeValue, setChangeValue] = useState([
    {
      timeLineText: "10-12 Days",
      feeValue: "15000",
      validityYear: "3 Years",
      id: "Urban",
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
    <FormControl variant="outlined" size="small" className="dropdown-width">
      <InputLabel
        shrink={true}
        style={{
          background: "white",
          width: "107px",
          paddingLeft: "9px",
          marginLeft: "-5px",
        }}
        htmlFor="my-select"
      >
        Departments
      </InputLabel>
      <Select
        onChange={handleChange}
        style={{ width: "480px" }}
        native
        labelId="my-select"
        id="my-select"
        value={props.val}
        label="Departments"
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
  );
};
const Dropdown1 = (props) => {
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
    <FormControl
      variant="outlined"
      size="small"
      onChange={handleChange}
      className="dropdown-width"
    >
      <InputLabel htmlFor="outlined-age-native-simple"></InputLabel>
      <Select
        native
        style={{ width: "480px" }}
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
  );
};
export default function RegulatoryCatalogCalculator(props) {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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
  const [arr1, setArr1] = React.useState(["college"]);
  console.log(
    "🚀 ~ file: RegulatoryCostCalculator.js:768 ~ RegulatoryCatalogCalculator ~ arr1:",
    arr1
  );
  const [arr2, setArr2] = React.useState([
    {
      id: "Urban",
      timeLineText: "10-12 Days",
      feeValue: "15000",
      validityYear: "3 Years",
      text: "Urban",
      value: "Urban",
    },
  ]);

  const clickAdd = () => {
    if (arr1.length > 5) return;
    let arr = [...arr1];
    arr.push("college");
    setArr1(arr);
    let ar = [...arr2];
    ar.push({
      id: "Urban",
      timeLineText: "10-12 Days",
      feeValue: "15000",
      validityYear: "3Years",
      text: "Urban",
      value: "Urban",
    });
    setArr2(ar);
  };
  const DeleteItems = (id) => {
    console.log(id);

    arr1.splice(id, 1);
    // const getindex = arr1.findIndex((x) => x.id === id )

    const UpdatedArray2 = arr2.filter((val, ind) => {
      return ind !== id;
    });

    setArr2(UpdatedArray2);
  };
  return (
    <>
      {windowWidth <= 500 ? <MobileHeaderGeneric /> : <GenericHeader />}

      <div className="siteHeader" style={{ background: `url(${AboutUsImg})` }}>
        <h1
          className={`slide-in-left Investnow-h1 highlightable ${
            isVisible ? "" : "slide-out-left"
          }`}
        >
          Regulatory Cost Calculator
        </h1>
      </div>
      <div className="row regulatoryCalculatorHead">
        <Link to={"/home"} className="linkFont">
          <div>
            <h5 className="linkFont2 highlightable">Home {value}</h5>
            Regulatory Calculator
          </div>
        </Link>
      </div>

      <div
        className="shadow-sm bg-white  "
        style={{ paddingTop: "30px", height: "auto",paddingBottom:"50px" }}
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
          <h1 className="mainHeading highlightable">Regulatory Cost Calculator</h1>
        </div>
        <div className="row justify-content-center mt-3 align-items-lg-start">
          <div
            className="col-lg-4"
            style={{
              marginBottom: "20px",
              gap: "20px",
              justifyContent: "end",
              display: "flex",
            }}
          >
            <div
              style={{ display: "flex", gap: "15px", flexDirection: "column" }}
            >
              {arr1.map((val, ind) => {
                return (
                  <>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "15px",
                      }}
                    >
                      <Dropdown
                        ind={ind}
                        arr={arr1}
                        setArr={setArr1}
                        arr2={arr2}
                        setArr2={setArr2}
                        val={val}
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "20px",
                        }}
                      >
                        {ind == 0 && (
                          <button
                            className="update"
                            style={{ width: "100px", height: "39px" }}
                            onClick={clickAdd}
                          >
                            Add More
                          </button>
                        )}

                        {ind > 0 ? (
                          <button
                            className="update"
                            style={{ width: "100px", height: "39px" }}
                            onClick={() => DeleteItems(ind)}
                          >
                            {" "}
                            Delete
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>

                    {arr1[ind] !== "SFA" && (
                      <>
                        {" "}
                        <Dropdown1
                          ind={ind}
                          arr={arr2}
                          setArr={setArr2}
                          arr1={val}
                        />
                      </>
                    )}
                  </>
                );
              })}
            </div>
          </div>

          <div className="col-lg-5 ">
            <RegulatoryCatalogCalculatorGrid changeValue={arr2} />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
