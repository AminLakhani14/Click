import React, { useState ,useRef } from "react";
import GenericHeader from "./genericHeader";
import "../Css/resource.css";
import DemoGrid from "./Grid/demoGrid";
import Footer from "./footer";
import { jqx } from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";
import DetailModal from "./DetailModal";
import { Modal } from "bootstrap";

const arr = [

    {
      sNo: 2,
      issuingDepartment: "College Education Department",
      rlcoID: "CED-001",
      details: "Registration of Privately Managed Colleges ",
      type: "Registration",
      // prevailing:
        // "The Sindh Private Education Institutions (Regulations &amp; Control) Ordinance 2001- Amended Act 2003.",
      // jurisdiction: "Sindh",
      timeLine: "10-12 Days",
      fee: "As per Schedule",
      // officials:
        // "1. Director, Directorate of Inspection /Registration of Private Colleges Sindh Karachi (Ex-Officio) Chairman \n02 Deputy Director (M&amp;E) Directorate of M&amp;E of Colleges Sindh Karachi Member \n03 Deputy Director (Inspection) Directorate General of Colleges Sindh, Karachi Member \n04 Retired Additional Director Karachi Membe\n05. Retired Additional Director Karachi (Member)",
      // validity: "3 Years"                   ,
      // renewalFee:
        // "Urban Intermediate Rs.12500\nRural Intermedate Rs.6250\n\nUrban Degree Awarding Rs.15000\nRural Degree awarding Rs.7500",
    },
    {
      sNo: 3,
      issuingDepartment: "Labour and Human Resources Department",
      rlcoID: "LD-001",
      details: "Registration of Shops &amp; Establishment",
      type: "Registration",
      // prevailing: "The Sindh Shops &amp; Establishment Act,2015",
      // jurisdiction: "Sindh",
      fee: "As per Schedule",
      timeLine: "Same Day",
      // officials: "Regional Director Labour/Deputy Chief Inspector",
      // validity: "2 year",                   
      // renewalFee:"",
    },
    {
      sNo: 4,
      issuingDepartment: "Labour and Human Resources Department",
      rlcoID: "LD-002",
      details: "Registration of Factories",
      type: "Registration",
      fee: "As per Schedule",
      // prevailing: "Sindh Factories Act, 2015",
      // jurisdiction: "Sindh",
      timeLine: "10 days",
      // officials: "1. Joint Director Labour \n2.Labour Inspector",
      // validity: "2 year",                   
    },
    {
      sNo: 5,
      issuingDepartment: "Sindh Food Authority (SFA)",
      rlcoID: "SFA-001",
      details: "Registration and Licensing \nof Food Business Operator",
      type: "Registration",
      // prevailing: " Sindh Food Authority Act, 2016.",
      // jurisdiction: "Sindh",
      timeLine: "7 days",
      fee: "As per Schedule",
      // officials:
        // "1 .Licensing In-charge (Licensing &amp; Registration Wing) \n2. Director Licensing &amp; Registration \n3. Deputy Director Operations \n4. Food Safety Officer \n5. Director General (SFA)",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 6,
      issuingDepartment: "Health Department",
      rlcoID: "HD-001",
      details: "License to sell Drugs by Way of Retail Sale (Form-6)",
      type: "License",
      // prevailing:
        // "1. The Drugs Act,1976. \n2. Sindh Drugs Rules, 1979 amended 2010.",
      // jurisdiction: "Sindh",
      timeLine: "3 Month",
      fee: "Rs.5000",
      // officials:
        // "1 .Licensing Authority (Secretary Health has delegated authority to District Health Officer) \n2. Provincial Inspector Drugs",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 7,
      issuingDepartment: "Health Department",
      rlcoID: "HD-002",
      details: "License to sell Drugs by Way of Wholesale 7A",
      type: "License",
      // prevailing:
        // "1. The Drugs Act,1976. \n2. Sindh Drugs Rules, 1979 amended 2010.",
      // jurisdiction: "Sindh",
      timeLine: "3 Month",
      fee: "Rs.5000",
      // officials:
        // "1 .Licensing Authority (Secretary Health has delegated authority to District Health Officer) \n2. Provincial Inspector Drugs",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 8,
      issuingDepartment: "Health Department",
      rlcoID: "HD-003",
      details: "License to sell Drugs in Pharmacy (Form-8)",
      type: "License",
      // prevailing:
        // "1. The Drugs Act,1976. \n2. Sindh Drugs Rules, 1979 amended 2010.",
      // jurisdiction: "Sindh",
      timeLine: "3 Month",
      fee: "Rs.5000",
      // officials:
        // "1 .Licensing Authority (Secretary Health has delegated authority to District Health Officer) \n2. Provincial Inspector Drugs",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 9,
      issuingDepartment: "Health Department",
      rlcoID: "HD-004",
      details:
        "License to sell Narcotics and Other Controlled Drugs/ Substances (Form-9)",
      type: "License",
      // prevailing:
        // "1. The Drugs Act,1976. \n2. Sindh Drugs Rules, 1979 amended 2010.",
      // jurisdiction: "Sindh",
      timeLine: "3 Month",
      fee: "Rs.5000",
      officials:
        "1 .Licensing Authority (Secretary Health has delegated authority to District Health Officer) \n2. Provincial Inspector Drugs",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 10,
      issuingDepartment: "Health Department",
      rlcoID: "HD-005",
      details: "License to Manufacturer /Importer /Indenter of Drugs (Form-7)",
      type: "License",
      // prevailing:
        // "1. The Drugs Act,1976. \n2. Sindh Drugs Rules, 1979 amended 2010.",
      // jurisdiction: "Sindh",
      timeLine: "3 Month",
      fee: "Rs.5000",
      officials:
        "1 .Licensing Authority (Secretary Health has delegated authority to District Health Officer) \n2. Provincial Inspector Drugs",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 11,
      issuingDepartment: "School Education and Literacy Department",
      rlcoID: "SELD-001",
      details: "Registration of Privately Managed Schools",
      type: "Registration",
      // prevailing:
        // "The Sindh Private Education Institutions (Regulations &amp; Control) Ordinance 2001and Amended Act 2003. \nThe Sindh Private Education Institutions (Regulations &amp; Control) Rules, 2005 and Amended Rules, 2020",
      // jurisdiction: "Sindh",
      timeLine: "30 Days",
      fee: "As per Schedule",
      // officials:
      //   "1. Reception desk \n2. Assistant Director \n3 Deputy Direction (M&amp;E and Inspections) \n4. Additional Director/ Chairman Inspection Committee \n5. Section Officer (Secretariate) \n6. Secretary, Education &amp; Literacy",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 12,
      issuingDepartment: "Sindh Health Care Commission",
      rlcoID: "SHCC-001",
      details: "Registration &amp; Licensing of Healthcare Establishments",
      type: "Registration",
      // prevailing: "Registration &amp; Licensing of Healthcare Establishments",
      // jurisdiction: "Sindh",
      timeLine: "30 Days",
      fee: "As per Schedule",
      // officials:
        // "1. Assistant (L&amp;A) \n2. Assistant/ Deputy Director L&amp;A \n3. Director L&amp;A \n4. Inspection Team \n5. CE0",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 13,
      issuingDepartment: "Industries and Commerce Department",
      rlcoID: "ICD-001",
      details: "Registration Certificate of Partnership Firm",
      type: "Registration",
      // prevailing: "Partnership Act, 1932",
      // jurisdiction: "Sindh",
      timeLine: "3 Days",
      fee: "Rs.110",
      // officials: "1. Junior Clerk/ Assistant \n2.Registrar",
      // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 14,
      issuingDepartment: "",
      rlcoID: "ICD-002",
      details:
        "Registration Certificate of Amendment/Dissolution /Rectification in Partnership Firm",
      type: "Registration",
      // prevailing: "Partnership Act, 1932",
      // jurisdiction: "Sindh",
      timeLine: "5 days",
      fee: "Rs.55",
      // officials:
        // "Dispatcher \n▪ Public Dealing Officer \n▪ Superintendent \n▪ Registrar",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 15,
      issuingDepartment: "",
      rlcoID: "ICD-003",
      details: "Registration of New Boiler",
      type: "Registration",
      // prevailing:
        // "Boiler Act, 1923. Sindh Boiler Rules, 1941.\nThe Boiler and Pressure Vessel Ordinance, 2002. \nThe Pakistan Boiler Rules, 2009.",
      // jurisdiction: "Sindh",
      timeLine: "10-15 Days",
      fee: "S.R.O.88(I)/2008)",
      // officials:
        // "Office Superintendent \n▪ Boiler Inspector \n▪ Chief Inspector Boile",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 16,
      issuingDepartment: "",
      rlcoID: "ICD-004",
      details: "Registration of Old Boiler",
      type: "Registration",
      // prevailing:
        // "Boiler Act, 1923. Sindh Boiler Rules, 1941.\nThe Boiler and Pressure Vessel Ordinance, 2002. \nThe Pakistan Boiler Rules, 2009.",
      // jurisdiction: "Sindh",
      timeLine: "10-15 Days",
      fee: "S.R.O.88(I)/2008)",
      // officials:
      //   "Office Superintendent \n▪ Boiler Inspector \n▪ Chief Inspector Boile",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 17,
      issuingDepartment: "",
      rlcoID: "ICD-005",
      details:
        "Approval of Plan and Particulars of Boilers Acceptable for Registration (New Boiler)",
      type: "Other",
      // prevailing:
        // "The Boiler and Pressure Vessel Ordinance, 2002.\nThe Pakistan Boiler Rules, 2009. \nImport Policy, 2016",
      // jurisdiction: "Sindh",
      timeLine: "10-15 Days",
      fee: "S.R.O.88(I)/2008)",
      // officials:
      //   "Office Superintendent \n▪ Boiler Inspector \n▪ Chief Inspector Boile",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 18,
      issuingDepartment: "",
      rlcoID: "ICD-006",
      details:
        "Approval of Plan and Particulars of Boilers Acceptable for Registration (Used Boiler)",
      type: "Other",
      // prevailing:
        // "The Boiler and Pressure Vessel Ordinance, 2002.\nThe Pakistan Boiler Rules, 2009. \nImport Policy, 2016",
      // jurisdiction: "Sindh",
      timeLine: "10-15 Days",
      fee: "S.R.O.88(I)/2008)",
      // officials:
      //   "Office Superintendent \n▪ Boiler Inspector \n▪ Chief Inspector Boile",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 19,
      issuingDepartment: "",
      rlcoID: "ICD-007",
      details: "Transfer of Ownership",
      type: "Other",
      // prevailing: "The Pakistan Boiler Rules, 2009.",
      // jurisdiction: "Sindh",
      timeLine: "10-15 Days",
      fee: "S.R.O.88(I)/2008)",
      // officials:
      //   "Office Superintendent \n▪ Boiler Inspector \n▪ Chief Inspector Boile",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 20,
      issuingDepartment: "Sindh Environmental Protection Agency (SEPA)",
      rlcoID: "SEPA-001",
      details: "License for Handling of Hazardous Substances",
      type: "License",
      // prevailing:
        // "The Sindh Environmental Protection Act, 2014. \nHazardous Substances Rules, 2014",
      // jurisdiction: "Sindh",
      timeLine: "7 Days",
      fee: "Rs.50000",
      // officials:
      //   "Director/ Deputy Director \nAssistant Director \nEnvironmental Inspector ▪ DG (SEPA)  \nExpert Committee",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 21,
      issuingDepartment: "",
      rlcoID: "SEPA-002",
      details:
        "License to Waste Contractor for Handling of Hazardous Substances and Non-Hazardous substances",
      type: "License",
      // prevailing:
      //   "The Sindh Environmental Protection Act, 2014. \nHazardous Substances Rules, 2014",
      // jurisdiction: "Sindh",
      timeLine: "7 days",
      fee: "Rs.50000",
      // officials:
      //   "Director/ Deputy Director \nAssistant Director \nEnvironmental Inspector ▪ DG (SEPA)  \nExpert Committee",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 22,
      issuingDepartment: "",
      rlcoID: "SEPA-003",
      details: "Approval Under Section 17 (IEE/EIA/EC)",
      type: "Other",
      // prevailing:
      //   "1. The Sindh Environmental Protection Act, 2014. 2. Sindh Environmental Protection Agency (Environmental Assessment) Regulations, 2021.",
      // jurisdiction: "Sindh",
      timeLine: "EC (15 days) \n▪ IEE (30 days) \n▪ EIA (60 days)",
      fee: "Up to 20 Million Rs.50,000 \nAbove 20 Million up to 100 Million Rs.100,000 \nAbove 100 Milliion up to 200Million Rs.200,000 \nAbove 200 Million up to 500 Million Rs.400,000 \nAbove 500 Million Rs.600,000\nReview fee for Environmental Checklist or EMP is\nPKR 40,000.\n",
      // officials:
      //   "Director/ Deputy Director \nAssistant Director \nEnvironmental Inspector ▪ DG (SEPA)  \nExpert Committee",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 23,
      issuingDepartment: "",
      rlcoID: "SEPA-004",
      details: "Approval of an Environmental Management Plan",
      type: "Other",
      // prevailing: "The Sindh Environmental Protection Act, 2014.",
      // jurisdiction: "Sindh",
      timeLine: "7-10 Days",
      fee: "PKR 40,000",
      // officials:
      //   "Director/ Deputy Director \nDeputy Director (Chemist) \nDeputy Director (Microbiologist) \nDG (SEPA)",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 24,
      issuingDepartment: "",
      rlcoID: "SEPA-005",
      details: "Certification of Environmental Lab",
      type: "Certifcate",
      // prevailing:
      //   "1. The Sindh Environmental Protection Act, 2014. \n2. Sindh Environmental Quality Standards (Certification of Environmental Laboratories) Regulations, 2014.",
      // jurisdiction: "Sindh",
      timeLine: "7 Days",
      fee: "Rs.20000 Security Fee\nRs.50000 Certificate Fee",
      // officials:
      //   "Director/ Deputy Director \nAssistant Director \nEnvironmental Inspector ▪ DG (SEPA)  \nExpert Committee",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 25,
      issuingDepartment: "",
      rlcoID: "SEPA-006",
      details: "Approval of Hospital Waste Management Plan",
      type: "Other",
      // prevailing:
      //   "The Sindh Environmental Protection Act, 2014.\nHospital Waste Management Rule,2014.",
      // jurisdiction: "Sindh",
      timeLine: "7 days",
      fee: "Rs.50000",
      // officials:
      //   "Director/ Deputy Director \nAssistant Director \nEnvironmental Inspector ▪ DG (SEPA)  \nExpert Committee",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 26,
      issuingDepartment: "Sindh Building Control Authority (SBCA)",
      rlcoID: "SBCA-001 (A)",
      details: "Approval of proposed building plan for Category-I",
      type: "Other",
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002",
      // jurisdiction: "Karachi",
      timeLine: "5 days for Cat-I \n&amp; 60 Days for Cat-II, III &amp; IV",
      fee: "Residential area category I. I-A. II. III. IX &amp; X.  Rs.15 PSF\nArea category IV. V. VI. VII &amp;. VIII Rs.11 PSF\nCommercial Public Sale Projects\nArea Cat I. I-A. II. III. IX &amp; X Rs.20 PSF\nArea CatI V.V. VII. VII&amp; VIII Rs.16 PSF\nIndustrial Scrutiny fee for industrial plot, which \nis situated beyond 50km from \nMunicipal Limit All Cat: Rs.18 Rs.1\nAmanities Rs.11 PSF",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility) \nDeputy Director \nDirector",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 27,
      issuingDepartment: "",
      rlcoID: "SBCA-001 (B)",
      details: "Approval of proposed building plan for Category-II, III, IV",
      type: "Other",
      // prevailing:
      //   "Karachi Building &amp;Town Planning Regulations, 2002 Amended up to Date. 2021",
      // jurisdiction: "Karachi",
      timeLine: "5 days for Cat-I \n&amp; 60 Days for Cat-II, III &amp; IV",
      fee: "Residential area category I. I-A. II. III. IX &amp; X.  Rs.15 PSF\nArea category IV. V. VI. VII &amp;. VIII Rs.11 PSF\nCommercial Public Sale Projects\nArea Cat I. I-A. II. III. IX &amp; X Rs.20 PSF\nArea CatI V.V. VII. VII&amp; VIII Rs.16 PSF\nIndustrial Scrutiny fee for industrial plot, which \nis situated beyond 50km from \nMunicipal Limit All Cat: Rs.18 Rs.1\nAmanities Rs.11 PSF",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility) \nDeputy Director \nDirector",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 28,
      issuingDepartment: "",
      rlcoID: "SBCA-002",
      details: "Notice of Completion (Category I to IV",
      type: "Other",
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002",
      // jurisdiction: "Karachi",
      timeLine: "5 days for Cat-I \n&amp; 60 Days for Cat-II, III &amp; IV",
      fee: "Residential area category I. I-A. II. III. IX &amp; X.  Rs.15 PSF\nArea category IV. V. VI. VII &amp;. VIII Rs.11 PSF\nCommercial Public Sale Projects\nArea Cat I. I-A. II. III. IX &amp; X Rs.20 PSF\nArea CatI V.V. VII. VII&amp; VIII Rs.16 PSF\nIndustrial Scrutiny fee for industrial plot, which \nis situated beyond 50km from \nMunicipal Limit All Cat: Rs.18 Rs.1\nAmanities Rs.11 PSF",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility) \nBuilder Inspector \nDeputy Director \nDirector \nDirector General (SBCA)",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 29,
      issuingDepartment: "",
      rlcoID: "SBCA-003",
      details:
        "Additional floor Charges for Category (I) / Betterment Charges for Category (II, III &amp; IV",
      type: "Other",
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002.",
      // jurisdiction: "Karachi",
      timeLine: "15 days for Cat I \nand 60 Days for Cat-II, III &amp; IV",
      fee: "Cat A-l Rs. 5000/- \nCat : 2 I 5000/- 3 II 2500/- 4 III 2500/- 5 IV 1500/- 6 V 700/- 7 VI 700/-",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility) \nBuilder Inspector \nDeputy Director \nDirector \nDirector General (SBCA)",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 30,
      issuingDepartment: "",
      rlcoID: "SBCA-004",
      details: "Renewal of Building Plan for Category (I To IV",
      type: "Other",
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002.",
      // jurisdiction: "Karachi",
      timeLine: "15 days for Cat I \nand 60 Days for Cat-II, III &amp; IV",
      fee: "The registration fee for different categories of building plan is defined. Fee ranges from PKR 1.00 per sq ft. to\nPKR. 20.00 per sq ft.\nSee Page 32  of EY Sprint 3 As Is",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility)\nDeputy Director \nDirector",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 31,
      issuingDepartment: "",
      rlcoID: "SBCA-005",
      details:
        "Addition / Alteration / Revision of Building Plan for Category (I To IV)",
      type: "Other",
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002.",
      // jurisdiction: "Karachi",
      timeLine: "15 days for Cat I \nand 60 Days for Cat-II, III &amp; IV",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility)\nDeputy Director \nDirector",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 32,
      issuingDepartment: "",
      rlcoID: "SBCA-006",
      details: "Permit to Demolish Buildings for Category (I To IV)",
      type: "Other",
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002.",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility) \nBuilder Inspector \nDeputy Director \nDirector \nDirector General (SBCA)",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 33,
      issuingDepartment: "",
      rlcoID: "SBCA-007",
      details: "Attestation Fee",
      type: "Other",
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002.",
      // jurisdiction: "Karachi",
      timeLine: "3 Days",
      // officials: "Deputy Director\nAssistant Director (Technical)",
      // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 34,
      issuingDepartment: "",
      rlcoID: "SBCA-008",
      details: "COPY OF APPROVED BUILDING PLAN",
      type: "Other",
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002.",
      // jurisdiction: "Karachi",
      timeLine: "3 Days",
      // officials: "Deputy Director\nAssistant Director (Technical)",
      // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 35,
      issuingDepartment: "",
      rlcoID: "SBCA-009",
      details: "NOC for Structure (Vetting &amp; Departmental)",
      type: "Other",
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002.",
      // jurisdiction: "Karachi",
      timeLine: "7 Days",
      // officials:
      //   "Licensing Section Engineer \nIT Section \nAssistant Director\nLicensed Proof Engineer \nDirector",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 36,
      issuingDepartment: "",
      rlcoID: "SBCA-010",
      details: "Builder License",
      type: "License",
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002.",
      // jurisdiction: "Karachi",
      timeLine: "3 Month",
      // officials:
      //   "Assistant Director (Licensing Section) \nDeputy Director \nDirector Licensing \nLicensing Committee",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 37,
      issuingDepartment: "",
      rlcoID: "SBCA-011",
      details: "Developer License",
      type: "License",
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002.",
      // jurisdiction: "Karachi",
      timeLine: "1 Month",
      fee: "Rs.300,000",
      // officials:
      //   "Assistant Director (Licensing Section) \nDeputy Director\nDirector Licensing \nLicensing Committee",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 38,
      issuingDepartment: "",
      rlcoID: "SBCA-012",
      details: "Soil/ Material Testing \nLaboratories License\r",
      type: "License",
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002.",
      // jurisdiction: "Karachi",
      timeLine: "3 Month",
      fee: "Rs.10000",
      // officials:
      //   "Assistant Director (Licensing Section) \nDeputy Director\nDirector Licensing \nLicensing Committee",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 39,
      issuingDepartment: "",
      rlcoID: "SBCA-013",
      details: "Architecture License",
      type: "License",
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002.",
      // jurisdiction: "Karachi",
      timeLine: "3 Month",
      fee: "Rs.20000 for Cat A \nRs.6000 For Cat B",
      // officials:
      //   "Assistant Director (Licensing Section) \nDeputy Director\nDirector Licensing \nLicensing Committee",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 40,
      issuingDepartment: "",
      rlcoID: "SBCA-014",
      details: "Building Supervisor License",
      type: "License",
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002.",
      // jurisdiction: "Karachi",
      timeLine: "3 Month",
      fee: "Rs.6000",
      // officials:
      //   "Assistant Director (Licensing Section) \nDeputy Director\nDirector Licensing \nLicensing Committee",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 41,
      issuingDepartment: "",
      rlcoID: "SBCA-015",
      details: "Professional Engineering License",
      type: "License",
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002.",
      // jurisdiction: "Karachi",
      timeLine: "3 Month",
      fee: "Rs.6000",
      // officials:
      //   "Assistant Director (Licensing Section) \nDeputy Director\nDirector Licensing \nLicensing Committee",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 42,
      issuingDepartment: "",
      rlcoID: "SBCA-016",
      details: "Structural Engineer License",
      type: "License",
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002.",
      // jurisdiction: "Karachi",
      timeLine: "3 Month",
      fee: "Rs.20000 ",
      // officials:
      //   "Assistant Director (Licensing Section) \nDeputy Director\nDirector Licensing \nLicensing Committee",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 43,
      issuingDepartment: "",
      rlcoID: "SBCA-017",
      details: "Town Planner License",
      type: "License",
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002.",
      // jurisdiction: "Karachi",
      timeLine: "3 Month",
      fee: "Rs.10000",
      // officials:
      //   "Assistant Director (Licensing Section) \nDeputy Director\nDirector Licensing \nLicensing Committee",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 44,
      issuingDepartment: "",
      rlcoID: "SBCA-018",
      details: "Issuance of the NOC for Sale &amp; Advertisement",
      type: "Other",
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002.",
      // jurisdiction: "Karachi",
      timeLine: "1 Month",
      fee: "Rs.500",
      // officials:
      //   "Builder/Developer \nConcerned Department/ Town Planning \nAssistant Director \nDeputy Director\nDirector \nDirector General",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 45,
      issuingDepartment: "Agriculture Department",
      rlcoID: "AD-001",
      details:
        "Distributor Registration / License (for both Pesticides and fertilizers)",
      type: "Registration",
      // prevailing:
      //   "Pest control Ordinance, 1971 and Rules 1973.\nSindh Fertilizer Control Act, 1994 and Rules, 1999.",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Pesticide Rs.200,000/- \nFertilizer Rs. 50,000/-",
      // officials:
      //   "Secretary (Agriculture) \nDirector General (DG) \nTechnical Committee \nSub Committee (Inspector) of Technical Committee",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 46,
      issuingDepartment: "",
      rlcoID: "AD-002",
      details: "Product License for Fertilizer Micronutrients",
      type: "License",
      // prevailing: "Sindh Fertilizer. Control Act, 1994 and Rules, 1999.",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Rs.5000 Lab Fee",
      // officials:
      //   "Director General\nRegistration Officer\nLaboratory Director General \nRegistration Officer \nLaboratory",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 47,
      issuingDepartment: "",
      rlcoID: "AD-003",
      details: "Market Committee License (Retailer, Wholesaler, Factories)",
      type: "License",
      // prevailing:
      //   "Agricultural Produce Markets Act, 1939. \nAgricultural Produce Market Rules, 1940.",
      // jurisdiction: "Sindh",
      timeLine: "7-10 days",
      fee: "Rs. 1,000 (for Factories - A group) \nRs. 500 (for wholesaler – B group) \nRs. 100 (for Retailers – C group)",
      // officials:
      //   "Concerned Circle In-charge \nInspector \nLicense In-charge \nSecretary (Market Committee)\nChairman (Market Committee)\n",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 48,
      issuingDepartment: "Sindh Industrial Trading Estate (S.I.T.E) Limited",
      rlcoID: "ICD-008 (A)",
      details: "Allotment of Land/ Plot",
      type: "Other",
      // prevailing: "By Laws",
      // jurisdiction: "Sindh",
      timeLine: "60 days",
      fee:"",
      // officials: "Committee \nMD \nEstate Engineer",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 49,
      issuingDepartment: "",
      rlcoID: "ICD-008 (B)",
      details: "Approval of Building Drawing",
      type: "Other",
      // prevailing:
      //   "Bylaws/ Outline of revised building Bylaws of S.I.T.E Limited",
      // jurisdiction: "Sindh",
      timeLine: "14 days",
      fee:"",
      // officials:
      //   "Draft man\nEstate Engineer\nAssistant Engineer \nDeputy Chief Engineer\nChief Enginee",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 50,
      issuingDepartment: "",
      rlcoID: "ICD-008 (C)",
      details: "Approval of Completion (Block) Plan",
      type: "Other",
      // prevailing: "By Laws",
      // jurisdiction: "Sindh",
      timeLine: "7 days",
      fee:"",
      // officials:
      //   "Draft man\nEstate Engineer\nAssistant Engineer \nDeputy Chief Engineer\nChief Enginee",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 51,
      issuingDepartment: "",
      rlcoID: "ICD-009",
      details: "Collection of Additional Trade Fee",
      type: "Other",
      // prevailing: "By Laws",
      // jurisdiction: "Sindh",
      timeLine: "14 days",
      fee:"",
      // officials:
      //   "Office Superintendent \nAD/ DD/ (Admin)\nDirector (Admin) \nSecretary \nMD",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 52,
      issuingDepartment: "",
      rlcoID: "ICD-010",
      details:
        "Subdivision/ Amalgamation/ Transfer/ Subletting/ Extension of Land or Plot/ Change in Constitution/ change in Constitution",
      type: "Other",
      // prevailing: "By Laws",
      // jurisdiction: "Sindh",
      timeLine: "14 days",
      fee:"",
      // officials:
      //   "Office Superintendent\nAD/ DD/ (Admin) \nFinance Department \nAssistant Engineer \nDirector (Admin) \nSecretary \nMD",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 53,
      issuingDepartment: "",
      rlcoID: "ICD-011",
      details: "Issuance of Lease Deed",
      type: "Other",
      prevailing: "By Laws",
      // jurisdiction: "Sindh",
      timeLine: "14 days",
      fee:"",
      officials:
        "Office Superintendent\nDirector (Admin)/ Law Officer \nRegistrar Office \nSecretary \nMD",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 54,
      issuingDepartment: "",
      rlcoID: "ICD-012",
      details: "NOC for Utilities (Electricity, Gas, Cable, PTCL)",
      type: "Other",
      prevailing: "By Laws",
      // jurisdiction: "Sindh",
      timeLine: "14 days",
      fee:"",
      officials:
        "Office Superintendent \nAD/DD (Admin) \nDirector (Admin)\nEstate Engineer/ Assistant Engineer \nDeputy Chief Engineer \nSecretary \nMD/ Chief Engineer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 55,
      issuingDepartment: "",
      rlcoID: "ICD-013",
      details: "NOC for Mortgage",
      type: "Other",
      prevailing: "By Laws",
      // jurisdiction: "Sindh",
      timeLine: "14 days",
      fee:"",
      officials:
        "Office Superintendent\nAD/ DD (Admin) \nDirector (Admin) \nSecretary MD",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 56,
      issuingDepartment: "",
      rlcoID: "ICD-014",
      details: "NOC for Road Cutting",
      type: "Other",
      prevailing: "By Laws",
      // jurisdiction: "Sindh",
      timeLine: "14 days",
      fee:"",
      officials:
        "Office Superintendent \nAD/DD (Admin) \nDirector (Admin) \nEstate Engineer/ Assistant Engineer \nDeputy Chief Engineer \nSecretary \nMD/ Chief Enginee",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 57,
      issuingDepartment: "",
      rlcoID: "ICD-015",
      details: "NOC for car parking/ beautification",
      type: "Other",
      prevailing: "By Laws",
      // jurisdiction: "Sindh",
      timeLine: "14 days",
      fee:"",
      officials:
        "Office Superintendent \nAD/DD (Admin) \nDirector (Admin) \nEstate Engineer/ Assistant Engineer \nDeputy Chief Engineer \nSecretary \nMD/ Chief Enginee",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 58,
      issuingDepartment: "Sindh Small Industries Corporation (SSIC)",
      rlcoID: "ICD-016",
      details: "Allotment Order of Land/ Plot",
      type: "Other",
      prevailing:
        "SSIC Act, 1972 \nBuilding By-laws/ Procedure for allotment of land/plot in the Small Industries Estate, 1985",
      // jurisdiction: "Sindh",
      timeLine: "15 Days",
      fee:"",
      officials:
        "Estate Officer\nRegional Director (RD) \nDirector (E&amp;I) \nDirector (Admin) \nDirector (Civil)\nAssistant Engineer \nDeputy MD \nMD",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 59,
      issuingDepartment: "",
      rlcoID: "ICD-017",
      details: "Approval of Drawing",
      type: "Other",
      prevailing:
        "SSIC Act, 1972 \nBuilding By-laws/ Procedure for allotment of land/plot in the Small Industries Estate, 1985",
      // jurisdiction: "Sindh",
      timeLine: "5-10 Days",
      fee:"",
      officials:
        "Estate Officer \nRegional Director (RD) \nAssistant Director/ Deputy Director (E&amp;I) \nDirector (Civil)  \nAssistant Engineer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 60,
      issuingDepartment: "",
      rlcoID: "ICD-018",
      details:
        "Subdivision/Transfer/ Amalgamation/ Change in constitution (Corporate Setup)/ Change in Trade/ Subletting trade/ Conversion of plot from Industrial to Commercial/ CNG petroleum station/ Godowns &amp; Distribution",
      type: "Other",
      prevailing:
        "SSIC Act, 1972 \nBuilding By-laws/ Procedure for allotment of land/plot in the Small Industries Estate, 1985",
      // jurisdiction: "Sindh",
      timeLine: "5-10 Days",
      fee:"",
      officials:
        "Estate Officer \nAssistant Director/ Deputy Director (E&amp;I) \nRegional Director (RD) \nDirector (Admin)\nDeputy MD \nMD",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 61,
      issuingDepartment: "",
      rlcoID: "ICD-019",
      details: "NOC for Utilities (Electricity, Telephone, Gas, Water)",
      type: "Other",
      prevailing:
        "SSIC Act, 1972 \nBuilding By-laws/ Procedure for allotment of land/plot in the Small Industries Estate, 1985",
      // jurisdiction: "Sindh",
      timeLine: "5-10 Days",
      fee:"",
      officials:
        "Estate Officer\nAssistant Director/ Deputy Director (E&amp;I) \nRegional Director (RD)",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 62,
      issuingDepartment: "",
      rlcoID: "ICD-020",
      details: "NOC for Road Cutting",
      type: "Other",
      prevailing:
        "SSIC Act, 1972 \nBuilding By-laws/ Procedure for allotment of land/plot in the Small Industries Estate, 1985",
      // jurisdiction: "Sindh",
      timeLine: "5-10 Days",
      fee:"",
      officials:
        "Estate Officer \nAssistant Director/ Deputy Director (E&amp;I) \nRegional Director (RD)",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 63,
      issuingDepartment: "",
      rlcoID: "ICD-021",
      details: "Issuance of Lease Draft",
      type: "Other",
      prevailing:
        "SSIC Act, 1972 \nBuilding By-laws/ Procedure for allotment of land/plot in the Small Industries Estate, 1985",
      // jurisdiction: "Sindh",
      timeLine: "15-25 Days",
      fee:"",
      officials:
        "Estate Officer\nAssistant Director/ Deputy Director (E&amp;I) \nRegional Director (RD) \nDC Office",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 64,
      issuingDepartment: "",
      rlcoID: "ICD-022",
      details: "NOC for Mortgage",
      type: "Other",
      prevailing:
        "SSIC Act, 1972 \nBuilding By-laws/ Procedure for allotment of land/plot in the Small Industries Estate, 1985",
      // jurisdiction: "Sindh",
      timeLine: "15-25 Days",
      fee:"",
      officials:
        "Estate Officer \nAssistant Director/ Deputy Director (E&amp;I) \nRegional Director (RD)",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 65,
      issuingDepartment: "",
      rlcoID: "ICD-023",
      details: "Un- authorized Construction",
      type: "Other",
      prevailing:
        "SSIC Act, 1972 \nBuilding By-laws/ Procedure for allotment of land/plot in the Small Industries Estate, 1985",
      // jurisdiction: "Sindh",
      timeLine: "15-25 Days",
      fee:"",
      officials:
        "Estate Officer \nAssistant Director/ Deputy Director (E&amp;I) \nRegional Director (RD)",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 66,
      issuingDepartment: "Board of Revenue",
      rlcoID: "BOR-001",
      details: "Issuance of the True Copy of Land Record",
      type: "Other",
      prevailing: "Land revenue Act, 1967",
      // jurisdiction: "Sindh",
      timeLine: "Same Day",
      fee: "Rs.300 Per Page",
      officials: "Data Processing Assistant \nManager (People Services Center)",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 67,
      issuingDepartment: "",
      rlcoID: "BOR-004",
      details: "Registration of Document",
      type: "Other",
      prevailing: "Stamp Act, 1899 \nRegistration Act, 1908",
      // jurisdiction: "Sindh",
      timeLine: "10 Days",
      fee:"",
      officials:
        "Sub-Registrar \nData Process Assistant \nInspector \nDigital Scanning Unit (DSU) \nBank",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 68,
      issuingDepartment: "District Municipal Corporation (DMC)",
      rlcoID: "DMC– 001",
      details: "Trade License",
      type: "Other",
      prevailing:
        "1 Sindh Local Government Act, 2013 \n2 Sindh Councils (Imposition, Assessment, Collection and Administration of Taxes, Rates, Toll and Fee) Rules-2016",
      // jurisdiction: "Sindh",
      timeLine: "1 day",
      fee:"",
      officials: "Director (Trade)",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 69,
      issuingDepartment: "",
      rlcoID: "DMC-002",
      details: "Road Cutting Permission",
      type: "Other",
      prevailing:
        "1 Sindh Local Government Act, 2013 \n2 Sindh Councils (Imposition, Assessment, Collection and Administration of Taxes, Rates, Toll and Fee) Rules-2016",
      // jurisdiction: "Sindh",
      timeLine: "7-10 days",
      fee:"",
      officials:
        "Administrator Municipal Commissioner \nConcerned Executive Engineer \nConcerned Road Cutting In-charge \nConcerned Area Inspector",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 70,
      issuingDepartment: "",
      rlcoID: "DMC-003",
      details:
        "NOC/Permission for Holding Fairs, Events, Tournaments, and other Public Gatherings at DMC Central's Jurisdiction",
      type: "Other",
      prevailing:
        "1 Sindh Local Government Act, 2013 \n2 Sindh Councils (Imposition, Assessment, Collection and Administration of Taxes, Rates, Toll and Fee) Rules-2016",
      // jurisdiction: "Sindh",
      timeLine: "1 day",
      fee:"",
      officials:
        "Administrator \nMunicipal Commissioner \nConcerned Executive Engineer \nConcerned Road Cutting In-charge \nConcerned Area Inspector",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 71,
      issuingDepartment: "",
      rlcoID: "DMC-004",
      details:
        "NOC/Permission for Holding Fairs, Events, Tournaments, and other Public Gatherings at DMC Central's Jurisdiction",
      type: "Other",
      prevailing:
        "1 Sindh Local Government Act, 2013 \n2 Sindh Councils (Imposition, Assessment, Collection and Administration of Taxes, Rates, Toll and Fee) Rules-2016",
      // jurisdiction: "Sindh",
      timeLine: "7 to 10 days",
      fee:"",
      officials:
        "Administrator \nMunicipal Commissioner \nConcerned Director (Advertising) \nConcerned Area Inspector",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 72,
      issuingDepartment: "",
      rlcoID: "DMC-005",
      details:
        "Permission for Keeping Building Material on Roads during Construction",
      type: "Other",
      prevailing:
        "1 Sindh Local Government Act, 2013 \n2 Sindh Councils (Imposition, Assessment, Collection and Administration of Taxes, Rates, Toll and Fee) Rules-2016",
      // jurisdiction: "Sindh",
      timeLine: "1 to 2 days",
      fee:"",
      officials:
        "Administrator\nMunicipal Commissioner \nDirector (Tax) \nConcerned Area Inspector",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 73,
      issuingDepartment: "",
      rlcoID: "DMC-006",
      details:
        "NOC/Permission for Holding Different Kind of Sports Activities in Playgrounds, Gymnasium, Sports Complex &amp; Facilities of DMC-Central",
      type: "Other",
      prevailing:
        "1 Sindh Local Government Act, 2013 \n2 Sindh Councils (Imposition, Assessment, Collection and Administration of Taxes, Rates, Toll and Fee) Rules-2016",
      // jurisdiction: "Sindh",
      timeLine: "7 to 15 days",
      fee:"",
      officials:
        "Administrator \nMunicipal Commissioner \nConcerned Director (Sports, Culture and Recreation) \nConcerned Area Inspector",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 74,
      issuingDepartment: "",
      rlcoID: "DMC-007",
      details:
        "NOC/Permission for Establishment of Nurseries in parks, Playgrounds &amp; Open spaces of DMC-Centra",
      type: "Other",
      prevailing:
        "1 Sindh Local Government Act, 2013 \n2 Sindh Councils (Imposition, Assessment, Collection and Administration of Taxes, Rates, Toll and Fee) Rules-2016",
      // jurisdiction: "Sindh",
      timeLine: "7 to 15 days",
      fee:"",
      officials:
        "Administrator \nMunicipal Commissioner \nDirector (Parks) \nConcerned Deputy Director",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 75,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      rlcoID: "KMC-001",
      details: "Transfer/ Mutation of Land",
      type: "Other",
      prevailing:
        "Sindh Local Government Act 2013\n\nThe Sindh People’s\nLocal Council (Land) Rules 1975",
      // jurisdiction: "Karachi",
      timeLine: "15 days",
      fee: "Mutation of land fee is 2% of the Sale Deed.",
      officials:
        "▪ Director Land\n▪ Concerned Additional Director\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Assistant Accounts Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 76,
      issuingDepartment: "",
      rlcoID: "KMC-002",
      details: "NOC for Sale",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 days",
      fee: "The fee is according to Council Resolution (CR)\n by the department and authorized by the Administrator.",
      officials:
        "▪ Director Land\n▪ Concerned Additional Director\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 77,
      issuingDepartment: "",
      rlcoID: "KMC-003",
      details: "NOC for Mortgage",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 days",
      fee: "The Registration fee is according to Council Resolution (CR) notified by the department and authorized by the\n\nAdministrator.",
      officials:
        "▪ Director Land\n▪ Concerned Additional Director\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 78,
      issuingDepartment: "",
      rlcoID: "KMC-004",
      details: "Lease",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "1 month",
      fee: "The Registration fee is in accordance with Council Resolution (CR) notified by the department and authorized by\n\nthe Administrator.",
      officials:
        "▪ Director Land\n▪ Concerned Additional Director\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Land Inspector/ Surveyor\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 79,
      issuingDepartment: "",
      rlcoID: "KMC-005",
      details: "Transfer/ Mutation of Land in Orangi Town",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 days",
      fee: "Mutation of land fee is 4% of Sale Deed.",
      officials:
        "▪ Project Director\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 80,
      issuingDepartment: "",
      rlcoID: "KMC-006",
      details: "NOC for Sale",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 days",
      fee: "Residential Rs.1000\nCommercial Rs.2000",
      officials:
        "▪ Project Director\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 81,
      issuingDepartment: "",
      rlcoID: "KMC-007",
      details: "NOC for Mortgage",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 days",
      fee: "Residential Rs.10,000\nResidential Cum Commercial Rs.15,000\nCommercial Rs.20,000",
      officials:
        "▪ Project Director\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 82,
      issuingDepartment: "",
      rlcoID: "KMC-008",
      details: "Pre-Lease",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "1 month",
      fee: "See slab on page 351-352 of EY Report",
      officials:
        "▪ Project Director\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 83,
      issuingDepartment: "",
      rlcoID: "KMC-009",
      details: "Lease",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "1 month",
      fee: "See slab on page 358-359 of Ey report",
      officials:
        "▪ Project Director\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 84,
      issuingDepartment: "",
      rlcoID: "KMC-010",
      details: "Amalgamation and Subdivision of Land",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 days",
      fee: "Residential Per Sq Yard Rs.100\nCommerical per sq yard Rs.200",
      officials:
        "▪ Project Director\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 85,
      issuingDepartment: "",
      rlcoID: "KMC–011",
      details: "Transfer / Mutation of Land in Katchi Abadi",
      type: "Other",
      prevailing:
        "The Sindh Katchi Abadi Act 1987\n\nThe Sindh People\nLocal Council (Land)\nRules, 1975",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "Mutation of land fee is 4% of Sale Deed.",
      officials:
        "▪ Director Katchi Abadi\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Land Surveyor/Inspector\n▪ Scrutiny Committee\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 86,
      issuingDepartment: "",
      rlcoID: "KMC-012",
      details: "NOC for Sale",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "Resedential Rs.1000\nCommercial Rs.2000",
      officials:
        "▪ Director Katchi Abadi\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Land Surveyor/Inspector\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 87,
      issuingDepartment: "",
      rlcoID: "KMC-013",
      details: "NOC for Mortgage",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "Residential Rs.10,000\nResidential Cum Commercial Rs.15,000\nCommercial Rs.20,000",
      officials:
        "▪ Director Katchi Abadi\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Land Surveyor/Inspector\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 88,
      issuingDepartment: "",
      rlcoID: "KMC-014",
      details: "Lease",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "1 Month",
      fee: "Page 386 of EY Report As is Sprint 3",
      officials:
        "▪ Director Katchi Abadi\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Land Surveyor/Inspector\n▪ Scrutiny Committee\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 89,
      issuingDepartment: "",
      rlcoID: "KMC-015",
      details: "Amalgamation and Subdivision of Land",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "Residential Per Sq Yard Rs.100\nCommerical per sq yard Rs.200",
      officials:
        "▪ Director Katchi Abadi\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Land Surveyor/Inspector\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 90,
      issuingDepartment: "",
      rlcoID: "KMC-016",
      details:
        "Temporary NOC for Land use for beautification\noutside the premises of private property ",
      type: "Other",
      prevailing: "Sindh Local Government Act-2013",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "Rs.1 Per Sq Ft Per Day",
      officials:
        "▪ Director Anti Encroachment\n▪ Concerned Deputy Director\n▪ Inspector\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 91,
      issuingDepartment: "",
      rlcoID: "KMC-017",
      details:
        "Temporary NOC for temporary installation of\nGenerators outside the premises",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "District Nort Rs.15000\nDistrict East Rs.10000\nDistrict Centeral Rs.7500\nDistrict West Rs.5000",
      officials:
        "▪ Director Anti Encroachment\n▪ Concerned Deputy Director\n▪ Inspector\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 92,
      issuingDepartment: "",
      rlcoID: "KMC-018",
      details:
        "Temporary NOC for keeping building\nmaterials on roads during construction",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "Commercial Building &amp; Complex\nOn Streed Rs.10 Per Sq Ft\nOn Footpath Rs.5 Per Sq Ft\n\nResedential\nOn street Rs.5 Per Sq Ft\nOn Footpath Rs.3 Per Sq Ft",
      officials:
        "▪ Director Anti Encroachment\n▪ Concerned Deputy Director\n▪ Inspector\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 93,
      issuingDepartment: "",
      rlcoID: "KCM-019",
      details: "NOC for film and Ad shooting in Safari Park\nand Karachi Zoo",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "Karachi Zoo &amp; Park Rs.7000 Per Hour\nSecurity Deposit Rs.25000\n\nIn Karachi Zoo Rs.10,000 Per Hour\nSecurity Deposit Rs.50,000\n\nKarachi Safari Park Rs.7,000\nSecuirty Deposit Rs.25000",
      officials:
        "▪ Director Safari Park/ Karachi Zoo\n▪ Concerned Additional Director\n▪ Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 94,
      issuingDepartment: "",
      rlcoID: "KMC-020",
      details: "Outdoor Advertisement on major Bridges and underpass",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "See Page 418-419-420 of EY Sprint 3 As Is report",
      officials:
        "▪ Director Advertisement\n▪ Metropolitan Commissioner\n▪ Deputy Director\n▪ Inspector\n▪ Engineering Department\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 95,
      issuingDepartment: "",
      rlcoID: "KMC-021",
      details: "Road Cutting Permission",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "See Page 427 of Ey Sprint 3 As is report",
      officials:
        "▪ Director General (Technical Services)\n▪ Concerned Chief Engineer \n▪ Superintendent Engineer (Engineering Department)\n▪ Executive Engineer (Engineering Department)\n▪ Assistant Executive Engineer \n▪ Superintendent Engineer (Quality Control)\n▪ Executive Engineer (Quality Control)\n▪ Account Branch",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 96,
      issuingDepartment: "",
      rlcoID: "KMC-022",
      details: "NOC for organizing temporary Bachat Bazars",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "Rs.57000 as a cost of the cabin",
      officials:
        "▪ Senior Director (E&amp;IP Department)\n▪ Director (E&amp;IP Department)\n▪ Executive Director\n▪ Assistant Director\n▪ Inspector\n▪ Account Branch",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 97,
      issuingDepartment: "",
      rlcoID: "KMC-023",
      details:
        "Reservation of KMC Sports Complexes and playgrounds in\nKarachi for Sports events",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "Rs.4000 Per Match Per day",
      officials: "▪ Assistant Account Officer\n▪ Director (Culture and Sports)",
      // validity: "",                   
      // renewalFee:""
    },

    {
      sNo: 98,
      issuingDepartment: "Energy Department",
      rlcoID: "ED-001\n",
      details: "Electrical Contractor License",
      type: "License",
      prevailing:
        "Sindh Electricity Rules 1937\n OPP-5/6-73, dated 1982\nunder Rule 48 of Sind \nElectricity Rules 1937",
      // jurisdiction: "Sindh",
      timeLine: "NA",
      fee: "Rs.5,000",
      officials: "Electric Inspector",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 99,
      issuingDepartment: "",
      rlcoID: "ED-002\n",
      details: "Competency Certificate for Wireman",
      type: "Certificate",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "NA",
      fee: "Rs.100 \nLate Fee: Rs.150",
      officials: "Electric Inspector",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 100,
      issuingDepartment: "",
      rlcoID: "ED-003\n",
      details: "Competency Certificate for Electric Supervisor",
      type: "Certificate",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "NA",
      fee: "Rs.500\nLate Fee Rs.750",
      officials: "Electric Inspector",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 101,
      issuingDepartment: "",
      rlcoID: "ED-004",
      details: "Exploration License for Coal (Large Scale) ",
      type: "License",
      prevailing:
        "Sindh Coal Act 2012 / Sindh \nCoal Mining Concession \nRules 2020 (Updated)",
      // jurisdiction: "Sindh",
      timeLine: "100 Days",
      fee: "Rs.200,000",
      officials: "The Deputy Director/ Assistant Director",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 102,
      issuingDepartment: "",
      rlcoID: "ED-005",
      details: "Mining Lease (Large Scale)",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "NA",
      fee: "Rs.300,000",
      officials: "The Deputy Director/ Assistant Director",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 103,
      issuingDepartment: "",
      rlcoID: "ED-006",
      details: "Exploration Permit (Small Scale)",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "NA",
      fee: "Rs.100,000",
      officials: "The Deputy Director/ Assistant Director",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 104,
      issuingDepartment: "",
      rlcoID: "ED-007",
      details: "Mining Permit (Small  Scale) ",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "NA",
      fee: "Rs.200,000",
      officials: "The Deputy Director/ Assistant Director",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 105,
      issuingDepartment: "Sindh Employees Social Security Institution (SESSI) ",
      rlcoID: "SESSI-001",
      details: "Registration of an Establishments (R-1)\n",
      type: "Registration",
      prevailing: "Sindh Employees SocialSecurityAct,2016, amended \n2018",
      // jurisdiction: "Sindh",
      timeLine: "Same Day",
      fee:"",
      officials: "▪ Director C&amp;B\n▪ Director IT\n",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 106,
      issuingDepartment:
        "Excise, Taxation &amp; Narcotics Control Department\n",
      rlcoID: "ET&amp;NC-001",
      details: "Motor vehicle Registration",
      type: "Registration",
      prevailing: "Motor Vehicle Registration Act, 1965",
      // jurisdiction: "Sindh",
      timeLine: "7 days",
      fee: "Page 55 of EY AS IS Sprint 2",
      officials:
        "▪ Counter In-Charge\n▪ Head Cashier \n▪ Motor Registration Authority\n▪ Staff from Card Section\n▪ Staff from Return File Section\n▪ Staff from Scanning Section",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 107,
      issuingDepartment: "",
      rlcoID: "ET&amp;NC-002",
      details: "Transfer on Motor vehicle",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "7 days",
      fee: "Motorcycle Rs.200/-\nM/Cars, Jeeps, etc. up to 800 cc Engine Power Rs.800/-\nM/Cars, Jeeps, etc. from 801 cc to 2,000 cc Engine Power Rs.1,000/-\nRickshaws Rs.400/-\nTractors Rs.1,000/",
      officials:
        '"▪ Counter In-Charge\n▪ Head Cashier \n▪ Motor Registration Authority\n▪ Staff from Card Section\n▪ Staff from Return File Section\n▪ Staff from Scanning Section"',
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 108,
      issuingDepartment: "",
      rlcoID: "ET&amp;NC-003",
      details: "Alteration of Vehicle",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "7 days",
      fee: "Big Vehicle Rs.1,500/-\nSmall Vehicle Rs.1,250/-",
      officials:
        '▪ Counter In-Charge\n▪ Head Cashier \n▪ Motor Registration Authority\n▪ Staff from Card Section\n▪ Staff from Return File Section\n▪ Staff from Scanning Section"""',
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 109,
      issuingDepartment: "",
      rlcoID: "ET&amp;NC-004",
      details: "Motor Vehicle Dealer  License",
      type: "License",
      prevailing: "Sindh Motor Vehicles Dealers License Rules, 1989",
      // jurisdiction: "Sindh",
      timeLine: "7 days",
      fee: "Prescribed fee of Rs. 7,000/- (32-A challan for)",
      officials: "▪ Motor Registration Authority\n▪ Counter In-Charge (AETO)",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 110,
      issuingDepartment: "",
      rlcoID: "ET&amp;NC-005",
      details: "Professional Tax Registration\n",
      type: "Registration",
      prevailing:
        "▪ Sindh Finance Act 1964\n▪ Sindh Professions, Trades, Calling &amp; Employment \nTax  Rules, 1976",
      // jurisdiction: "Sindh",
      timeLine: "Same Day",
      fee: "See page 64-65 of Sprint 2 EY AS is REport",
      officials:
        "▪ Chief Minister, Sindh\n▪ Chief Secretary/ Secretary \n▪ Section Officer \n▪ Director General Excise \n▪ Regional Director \n▪ Concerned District Officer\n▪ Concerned Assistant ETO/Concerned Inspector",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 111,
      issuingDepartment: "",
      rlcoID: "ET&amp;NC-006",
      details: "Distillery License for Intoxicating Liquor",
      type: "License",
      prevailing:
        "▪ Prohibition (Enforcement of Hadd) Order 1979\n▪ Sindh Prohibition Rules 1979",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Distillery License for intoxicating Liquor 30,000/- per annum\nEstablishment Charges 3,500,000/- per annum\n",
      officials:
        "▪ Chief Minister, Sindh\n▪ Chief Secretary/ Secretary \n▪ Section Officer \n▪ Director General Excise \n▪ Regional Director \n▪ Concerned District Officer\n▪ Concerned Assistant ETO/Concerned Inspector",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 112,
      issuingDepartment: "",
      rlcoID: "ET&amp;NC-007",
      details: "Manufacturing of PMFL License\n",
      type: "License",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Manufacturing of PMFL License 30,000/- per annum\nEstablishment Charges 3,500,000/- per annum",
      officials:"",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 113,
      issuingDepartment: "",
      rlcoID: "ET&amp;NC-008",
      details: "Brewery License for Beer",
      type: "License",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Establishing a Brewery for Beer 30,000/- per annum\nEstablishment Charges 35,00,000/- per annum",
      officials:"",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 114,
      issuingDepartment: "",
      rlcoID: "ET&amp;NC-009",
      details:
        "Trade and Import License for Portable Liquor (Wholesale) \nNote: At present, there is a complete ban on the grant \n/ issuance of new liquor \nlicenses in the Province of \nSindh.",
      type: "License",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Trade and Import License for Potable Liquor \n(Wholesale) Rs. 7,000,000/-\n",
      officials:"",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 115,
      issuingDepartment: "",
      rlcoID: "ET&amp;NC-010",
      details:
        "Retail Off Liquor License \nNote: At present, there is a complete ban on the grant \n/ issuance of new liquor license in the Province of Sindh.",
      type: "License",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Retail off Liquor License 5,000,000/-\n",
      officials:"",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 116,
      issuingDepartment: "",
      rlcoID: "ET&amp;NC-011",
      details: "Distillery License for Manufacturing of Ethanol\n",
      type: "License",
      prevailing:
        "▪ The Sindh Abkari act 1878\n▪ Sindh Excise Manual Volume-I\n",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Distillery License for manufacturing of Ethanol 30,000/- per annum\nEstablishment Fee 3,500,000/- per annum\n",
      officials:
        "▪ Regional Director \n▪ District Officer (DO)/ETO\n▪ Assistant ETO/ Inspector \n▪ Director General (DG) Excise",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 117,
      issuingDepartment: "",
      rlcoID: "ET&amp;NC-012",
      details: "Sale of Rectified Spirit License\n",
      type: "License",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Sale of Rectified Spirit License 180,000/- per annum",
      officials:"",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 118,
      issuingDepartment: "",
      rlcoID: "ET&amp;NC-013",
      details: "Denaturation of Rectified Spirit License ",
      type: "License",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Denaturation of Rectified Spirit License 24,000/- per annum",
      officials:"",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 119,
      issuingDepartment: "",
      rlcoID: "ET&amp;NC-014",
      details: "Denatured Spirit License for Wholesale",
      type: "License",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Denatured Spirit License for Wholesale Rs.30,000/- per annum",
      officials:"",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 120,
      issuingDepartment: "",
      rlcoID: "ET&amp;NC-015",
      details: "Denatured Spirit License for Retail",
      type: "License",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Denatured Spirit License for Retail-Sale 2400/- per anum (License fee) and \n2400/- per anum (Bottling Fee)",
      officials:"",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 121,
      issuingDepartment: "",
      rlcoID: "ET&amp;NC-016",
      details: "Intoxicants (Drugs) Manufacturing License",
      type: "License",
      prevailing:
        '"▪ Prohibition (Enforcement of Hadd) Order 1979\n▪ Sindh Prohibition Rules 1979"\n\n\n\n',
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Denatured Spirit License for Retail-Sale 2400/- per anum (License fee) and \n2400/- per anum (Bottling Fee)",
      officials:"",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 122,
      issuingDepartment: "",
      rlcoID: "ET&amp;NC-017",
      details: "Intoxicants (Drugs) Commercial Sale License",
      type: "License",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Intoxicants (Drugs) Commercial Sale License 25,000/- per annum",
      officials:"",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 123,
      issuingDepartment: "",
      rlcoID: "ET&amp;NC-018",
      details: "Permit for Hotels for RetailSale of Intoxicating Liquor\n",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Permit for Hotels for Retail Sale of \nIntoxicating Liquor Average rent one day X 100\n",
      officials:
        '▪ Chief Minister, Sindh\n▪ Chief Secretary/ Secretary \n▪ Section Officer \n▪ Director General Excise \n▪ Regional Director \n▪ Concerned District Officer\n▪ Concerned Assistant ETO/Concerned Inspector"\n\n\n\n',
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 124,
      issuingDepartment: "",
      rlcoID: "ET&amp;NC-019",
      details: "Club license",
      type: "License",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Club License 60,000/- per annum",
      officials:
        '▪ Chief Minister, Sindh\n▪ Chief Secretary/ Secretary \n▪ Section Officer \n▪ Director General Excise \n▪ Regional Director \n▪ Concerned District Officer\n▪ Concerned Assistant ETO/Concerned Inspector"\n\n\n\n',
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 125,
      issuingDepartment: "",
      rlcoID: "ET&amp;NC-020",
      details: "Methanol Wholesale License for Commercial Use",
      type: "License",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Methanol Wholesale License for Commercial Use 30,000/- per annum",
      officials:
        "▪ Regional Director \n▪ District Officer (DO)/ETO\n▪ Assistant ETO/ Inspector\n▪ Director General (DG) Excise\n",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 126,
      issuingDepartment: "",
      rlcoID: "ET&amp;NC-021",
      details:
        "Permission to Purchase and Use of Methanol Spirit \nin Arts or Industries\n",
      type: "Other",
      prevailing:
        '"▪ The Sindh Abkari act 1878\n▪ Sindh Excise Manual Volume-I\n\n\n',
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Permission to Purchase and Use of Methanol Spirit \nin Arts or Industry 3,000/- per annum",
      officials:
        "▪ Regional Director \n▪ District Officer (DO)/ETO\n▪ Assistant ETO/ Inspector \n▪ Director General (DG) Excise",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 127,
      issuingDepartment: "",
      rlcoID: "ET&amp;NC-022",
      details:
        "Permission to use Rectified Spirit in the Manufacturing \nof Spirituous / Medicinal / Homeopathic / Toilet Preparation",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Permission to use Rectified Spirit in the \nManufacturing of Spirituous / Medicinal/ Toilet \nPreparation\n15,000/- per annum\nPermission to use Rectified Spirit in the \nManufacturing Homeopathic Medicine Preparation 600/- per annum \nEstablishment Charges 3,500,000/- per anum",
      officials:
        "▪ Regional Director \n▪ District Officer (DO)/ETO\n▪ Assistant ETO/ Inspector \n▪ Director General (DG) Excise",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 128,
      issuingDepartment: "",
      rlcoID: "ET&amp;NC-023",
      details:
        "Transport Permit (Buyer of the PMFL, Beer, Denatured \nSpirit, Methanol)",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "3 Days",
      fee: "Transport Permit for Beer 76/- Per Liter \nTransport Permit for PMFL 2,160/- per Proof Gallon \nTransport Permit for Denatured Spirit 10/- per Bulk Gallon \nVend Fee 6/- per Bulk Gallon Transport Permit for Methanol \n10/- per bulk gallon \nVend Fee 6/- per Bulk Gallon",
      officials:
        "▪ District Officer \n▪ Deputy Director \n▪ Director \n▪ Director General",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 129,
      issuingDepartment: "",
      rlcoID: "ET&amp;NC-023 B",
      details:
        "Retail of Transport Permit (buyer of the PMFL, \nBeer, Denatured Spirit, Methanol)",
      type: "Other",
      prevailing:
        '"▪ The Sindh Abkari act 1878\n▪ Sindh Excise Manual Volume-I\n\n\n',
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "fee challan of Rs. 60/-\nTransport Permit for Beer Rs.02/- per bottle of Beer\nTransport Permit for PMFL Rs.15/- per unit of PMFL\nTransport Permit for Methanol Rs.10/- per bulk Gallon and Vend fee of \nRs. 6 /- per bulk Gallon (both collected together)",
      officials:
        "▪ District Officer \n▪ Deputy Director \n▪ Director \n▪ Director General",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 130,
      issuingDepartment: "Sindh Revenue Board",
      rlcoID: "SRB-001",
      details: "Sindh Sales Tax on Services (SST)\n\n",
      type: "Registration",
      prevailing:
        "▪ . Sindh Sales Tax on Services Act, 2011\n▪ Sales Tax on Services Rules, 2011",
      // jurisdiction: "Sindh",
      timeLine: "Same Day",
      fee: "Free of cost",
      officials: "▪ Deputy Commissioner (IT)",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 131,
      issuingDepartment: "Local Government Department",
      rlcoID: "",
      details: "",
      type: "",
      prevailing:"",
      // jurisdiction: "",
      timeLine: "",
      fee:"",
      officials:"",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 132,
      issuingDepartment: "Karachi Water &amp; Sewerage Board ",
      rlcoID: "KWSB-001",
      details: "Sanction Letter for Water Connection (Consumer and Bulk)",
      type: "Other",
      prevailing:
        "Karachi Water and Sewerage Board Standard \nOperating Procedures 2016 ",
      // jurisdiction: "Karachi",
      timeLine: 21,
      fee: "The fee depends on various factors like:\n▪ Size of the plot\n▪ Story of the building\n▪ Type of connection (consumer / bulk / industrial)\n▪ Size of the flat\nFollowing charges are paid by the consumer at the time of issuance of the Sanction Letter:\n▪ Water Charges\n▪ Security Deposit\n▪ Sewerage Charge\n",
      officials:
        "▪ DMD Technical Services\n▪ SUB- Engineer \n▪ RRG Department\n▪ MD KWSB",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 133,
      rlcoID: "KWSB-002",
      details: "License for Sub-soil Water Supply",
      type: "License",
      prevailing:
        "Sub-Soil Water (Extraction and Consumption) \nRegulations 2018",
      // jurisdiction: "Karachi",
      timeLine: "Varies",
      fee: "Non-refundable license fee per borehole Rs. 100,000/-\nOne-time advance security deposit per borehole Rs. 90,000/-\nMonthly license fee per bore hole Rs. 30,000/-\r",
      officials:
        "▪ Superintending Engineer\n▪ Committee\n▪ Sub- Engineer \n▪ RRG Department\n▪ MD KWSB\n",
        // validity: "",                   
        // renewalFee:""
    },
  ];

export default function RegulatoryCatalogue() {
  const gridRef = useRef(null);
  const [dataForGrid, setdataForGrid] = useState(arr)
  const [dataForGridClone,] = useState(arr)

  const [openModal,setOpenModal] = useState(false)

  const openDetailModal = () => {
    setOpenModal(true)
  }

  const closeDetailModal = () => {
    setOpenModal(false)
  }


  const filterData = (event) => {
    try {
        debugger;
        let filterValue = event.target.value;
        if (filterValue.trim() !== "") {

          // Filter the data based on the specified value in all columns
          const getFilterData = arr.filter(item => {
            return Object.values(item).some(value => {
              if (typeof value === "string" && value.toLowerCase().includes(filterValue.toLowerCase())) {
                return true;
              }
              return false;
            });
          });
          if(getFilterData.length !== 0) {
              setdataForGrid(getFilterData);
          }else{
            setdataForGrid([]);
          }
        }
        else {
            setdataForGrid(dataForGridClone);
        }
    } catch (error) {
      console.log(error);
    }
  };
// Assuming you have an array of objects called 'data' containing your data

// Specify the value you want to filter


// Print the filtered data
  return (
    <>
   {openModal && <DetailModal openDetailModal={openDetailModal} closeDetailModal={closeDetailModal}/>}
      <GenericHeader />
      <div
        className="row"
        style={{
          height: "240px",
          width: "100%",
          background: "#F5F5F5",
          paddingTop: "155px",
        }}
      >
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <h1 className="mainHeading">RLCOs</h1>
        </div>
        <div className="col-lg-2"></div>
      </div>
      <div
        className="row"
        style={{
          height: "209px",
          width: "100%",
          background: "#Ffffff",
        }}
      >
        <div className="col-lg-2"></div>
        <div
          className="col-lg-8"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              fontSize: "24px",
              color: "#054a91",
              fontWeight: "700",
              marginTop: "-20px",
            }}
          >
            Stock taking of Registrations, Licenses, Certificates and Other
            permits (RLCOs)
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#595959",
              fontWeight: "550",
              lineHeight: "28px",
            }}
          >
            In order to undertake review & reform of laws, by-laws, rules &
            regulations, an exercise to collect all existing RLCO requirements
            at the Federal, Provincial and Municipal levels has been initiated.
            <br />
            Following is an initial list of RLCOs identified so far, and it will
            continue to grow through an iterative and on-going process.
            <br /> We would appreciate if you can provide us your input to help
            us validate and improve our data collection efforts.
          </p>
        </div>
        <div className="col-lg-2"></div>
      </div>
      <div className="row">
        <div
          className="col-lg-10"
          style={{ display: "flex", justifyContent: "end" }}
        >
          <p
            style={{
              fontSize: "20px",
              color: "#000000",
              fontWeight: "700",
              lineHeight: "28px",
            }}
          >
            Search
          </p>
        </div>
        <div className="col-lg-2">
          <input
            className="regulatoryTextField"
            type="text"
            placeholder=""
            onChange={filterData}
          />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-lg-12">
          <DemoGrid ref={gridRef} data={dataForGrid}  setOpenModal={setOpenModal} openModal={openModal}/>
        </div>
      </div>
      <Footer />
    </>
  );
}
 