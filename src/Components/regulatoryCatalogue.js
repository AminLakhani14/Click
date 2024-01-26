import React, { useState ,useRef,useEffect } from "react";
import GenericHeader from "./genericHeader";
import "../Css/resource.css";
import DemoGrid from "./Grid/demoGrid";
import Footer from "./footer";
import { jqx } from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";
import DetailModal from "./DetailModal";
import { Modal } from "bootstrap";
import SindhFoodAuthorityAct2016 from"../assets/PDF/SindhFoodAuthority/SindhFoodAuthorityAct2016.pdf"
import sindh from "../assets/sindhkatciabadiact1987.pdf"
import BuildingBylaws from "../assets/PDF/Site/BuildingBylaws.pdf"
import TheHazardousSubstancesRule2014 from "../assets/PDF/SEPA/TheHazardousSubstancesRule2014.pdf"
import collegeDepartment from "../assets/Documents/collegeDepartment.PNG"
import labourAndHumanResource from "../assets/Documents/labourAndHumanResource.PNG"
import sindhFood from "../assets/Documents/SindhFood.PNG"
import HealthDepartment from "../assets/Documents/HealthDepartment.PNG"
import SchoolEducationAndLiteracy from "../assets/Documents/SchoolEducationAndLiteracy.PNG"
import SindhHeathCare from "../assets/Documents/SindhHealthCare.PNG"
import IndustrieAndCommerce from "../assets/Documents/IndustrieAndCommerce.PNG"
import SindhEnviromentalProtection from "../assets/Documents/SindhEnviromentalProtection.PNG"
import HealthCareTable from "../assets/Documents/HealthCareTable.PNG"
import MobileHeaderGeneric from "./MobileHeaderGeneric";
//////////////////////////

import collegeDepartmentMaps from "../assets/mapS.S/collegeDepartment.png"
import LabourDepartmentMaps from "../assets/mapS.S/LabourDepartment.png"
import  SindhFoodAuthorityMaps from "../assets/mapS.S/SindhFoodAuthority.png"
import SchoolEducationMaps from "../assets/mapS.S/SchoolEducation.png"
import IndustrialDepartmentMaps from "../assets/mapS.S/IndustrialDepartment.png"
import SindhEnvironmentProtectionMaps from "../assets/mapS.S/SindhEnviromentalprotection.png"
import SindhHealthCareCommission from "../assets/mapS.S/Sindh Health Care Commission.png"
import KarachiWaterSewerageBoard from "../assets/mapS.S/Karachi Water Sewerage Board .png" 
import SindhRevenueBoard from "../assets/mapS.S/Sindh Revenue Board.png"
import SindhEmployeesSocialSecurityInstitution from "../assets/mapS.S/Sindh Employees Social Security Institution (SESSI).png" 

///////////////tutorial///////////
 import healthVideo from "../assets/tutorial/healthDepartment.mp4"
 import healthVideowholesle from "../assets/tutorial/heathDepartmentwholesale.mp4"
 import ld_002 from "../assets/ld002.mp4"
 import CED_001 from "../assets/tutorial/CED_001.mp4"
import schooleDepartmentVideo from "../assets/tutorial/schoolEducationAndLiteracyDepartment.mp4";
import ld_001 from "../assets/tutorial/led-001.mp4";
import ICD_001 from "../assets/tutorial/ICD-001.mp4"
import ICD_002 from "../assets/tutorial/ICD-002.mp4"
import ICD_003 from "../assets/tutorial/ICD-003.mp4";
import ICD_004 from "../assets/tutorial/ICD-004.mp4";
import ICD_005 from "../assets/tutorial/ICD-005.mp4";
import ICD_006 from "../assets/tutorial/ICD-006.mp4";
import ICD_007 from "../assets/tutorial/ICD-007.mp4";
import licenseToManufactureDrug from "../assets/tutorial/LIcensetomanufacturedrug.mp4";
import licenseToSaleDrugByWholeSale from "../assets/tutorial/LIcensetosaledrugbyholesale.mp4"
import LIcensetosaledrugbytretail from "../assets/tutorial/LIcensetosaledrugbytretail.mp4"
import sindhHealthcarevideo from "../assets/tutorial/sindhHealthcare.mp4";
import sepa_001 from "../assets/tutorial/sepa-001.mp4";
import sepa_003 from "../assets/tutorial/sepa-003.mp4";
import SBCA_002 from "../assets/tutorial/SBCA-002.mp4";
import SBCA_006 from "../assets/tutorial/SBCA-006.mp4";
import SBCA_007 from "../assets/tutorial/SBCA-007.mp4";
import BOR_001 from "../assets/tutorial/BOR-001.mp4";
import SBCA_003 from "../assets/tutorial/SBCA-003.mp4";
import SBCA_001_B from "../assets/tutorial/SBCA-001(B).mp4";
import SBCA_004 from "../assets/tutorial/SBCA-004.mp4";
import SRB_001 from "../assets/tutorial/SRB-001.mp4";
import SBCA_005 from "../assets/tutorial/SBCA-005.mp4";






 
const arr = [

    {
      sNo: 2,
      issuingDepartment: "College Education Department",
      rlcoID: "CED-001",
      details: "Registration of Privately Managed Colleges ",
      type: "Registration",
      timeLine: "10-12 Days",
      fee: "Urban - Rural Rs.15000 \n Degree Awarding Urban - Rural Rs.20000",
      documentname: "Companies Act 2017",
      documenttype: "Law / Rules / Regulations	",
      address: "3rd Floor, Building No. 6, Sindh Secretariat, Karachi City, Sindh",
      contactno: "(021) 99222230",
      downloaddocument: `${process.env.PUBLIC_URL}../assets/sindhkatciabadiact1987.pdf`,
      pdf:sindh,
      video:CED_001,
      logo:collegeDepartment,
      l1:"▪ Form-A (with all proforma's. etc. security, census, authority) and covering letter;",
      l2:"▪ Paid fee challan as per the following fee schedule;",
      l3:"▪ Inspection report;",
      l4:"▪ Admission policy;",
      l5:"▪ Admission committee;",
      l6:"▪ Curricular and Co-Curricular activities; ",
      l7:"▪ List of teaching staff with the appointment order, degree, salary, designation, and qualification;",
      l8:"▪ List of Non-teaching staff with the appointment order, degree, salary, designation, and qualification",
      l9:"▪ Detail of Management Committee (MC) with name & designation;",
      l10:"▪ Record of 10 % free ship student list, with name, father Name, contact no. & address of students as Affidavit on stamp paper of PKR 50 or 100 (with  03 copies);",
      l11:"▪ Board of Governors",
      l12:"▪ Income and Expenditure;",
      table:"",
      map:collegeDepartmentMaps,
      location:"https://www.google.com/maps/dir//College+Education+Department+Sindh,+3rd+Floor,+Building+No.+6,+Sindh+Secretariat,+Karachi+City,+Sindh/@24.8607343,67.0011364,15z/data=!4m17!1m7!3m6!1s0x3eb33fdd10bb1ea9:0x158a6fe8ced1af8c!2sCollege+Education+Department+Sindh!8m2!3d24.8607343!4d67.0011364!16s%2Fg%2F11h7fthx64!4m8!1m0!1m5!1m1!1s0x3eb33fdd10bb1ea9:0x158a6fe8ced1af8c!2m2!1d67.0011364!2d24.8607343!3e2?entry=ttu"
    },
    {
      sNo: 3,
      issuingDepartment: "Labour and Human Resources Department",
      rlcoID: "LD-001",
      details: "Registration of Shops &amp; Establishment",
      type: "Registration",
    
      // prevailing: "The Sindh Shops &amp; Establishment Act,2015",
      // jurisdiction: "Sindh",
      address: "Block No 86, Sindh Secretariat IV-B, Court Road, Karachi.",
      contactno: "0324-2554748",
      fee: "As per Schedule",
      timeLine: "Same Day",
      documentname: "Amendment",
      documenttype: "Law / Rules / Regulations	",
      downloaddocument: `${process.env.PUBLIC_URL}../assets/sindhkatciabadiact1987.pdf`,
      video:ld_002,
      pdf: {
        BuildingBylaws: BuildingBylaws
      },
      logo:labourAndHumanResource,

      l1:"▪ Name of the establishment, if any;",
      l2:"▪ Postal address of the establishment; ",
      l3:"▪ Full name of the employer (including father's name); ",
      l4:"▪ Full name of the manager, if any (including father's name); ",
      l5:"▪ Category of the establishment, i.e., whether a shop, industrial establishment, commercial establishment, residential hotel, restaurant, eating house,theatre or other place of public amusement or entertainment;",
      l6:"▪ Total number of employees (state separately the number of men, women and/or young persons, if any); and ",
      l7:"▪ Date on which the establishment commenced its work. ",
      map:LabourDepartmentMaps,
      location:"https://www.google.com/maps/dir//G-2,+Labour+Department+Govternment+of+Sindh,+Dr+Ziauddin+Ahmed+Rd,+Civil+Lines+Kashmir+Mujahid+Colony,+Karachi,+Karachi+City,+Sindh,+Pakistan/@24.8445189,67.0244326,17z/data=!4m17!1m7!3m6!1s0x3eb33d0c71359303:0xe09b193e2f7f7f81!2sLabour+Department+Govternment+of+Sindh!8m2!3d24.8445141!4d67.0270075!16s%2Fg%2F11pfbn284r!4m8!1m0!1m5!1m1!1s0x3eb33d0c71359303:0xe09b193e2f7f7f81!2m2!1d67.0270075!2d24.8445141!3e2?entry=ttu"
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
      address: "Block No 86, Sindh Secretariat IV-B, Court Road, Karachi.",
      contactno: "0324-2554748",
      // officials: "1. Joint Director Labour \n2.Labour Inspector",
      // validity: "2 year", 
      documentname: "Amendment 2",
          documenttype: "Law / Rules / Regulations	",
      downloaddocument: `${process.env.PUBLIC_URL}../assets/sindhkatciabadiact1987.pdf`,                
      logo:labourAndHumanResource,
     video:ld_001,
      l1:"▪ Name of the establishment, if any;",
      l2:"▪ Postal address of the establishment; ",
      l3:"▪ Full name of the employer (including father's name); ",
      l4:"▪ Full name of the manager, if any (including father's name); ",
      l5:"▪ Category of the establishment, i.e., whether a shop, industrial establishment, commercial establishment, residential hotel, restaurant, eating house,theatre or other place of public amusement or entertainment;",
      l6:"▪ Total number of employees (state separately the number of men, women and/or young persons, if any); and ",
      l7:"▪ Date on which the establishment commenced its work. ",
      map:LabourDepartmentMaps,
      location:"https://www.google.com/maps/dir//G-2,+Labour+Department+Govternment+of+Sindh,+Dr+Ziauddin+Ahmed+Rd,+Civil+Lines+Kashmir+Mujahid+Colony,+Karachi,+Karachi+City,+Sindh,+Pakistan/@24.8445189,67.0244326,17z/data=!4m17!1m7!3m6!1s0x3eb33d0c71359303:0xe09b193e2f7f7f81!2sLabour+Department+Govternment+of+Sindh!8m2!3d24.8445141!4d67.0270075!16s%2Fg%2F11pfbn284r!4m8!1m0!1m5!1m1!1s0x3eb33d0c71359303:0xe09b193e2f7f7f81!2m2!1d67.0270075!2d24.8445141!3e2?entry=ttu"

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
      documentname: "Sindh Food Authority Act 2016",
      documenttype: "Law / Rules / Regulations	",
      address: "Plot B, 12, Sindhi Muslim Cooperative Housing Society Block A Sindhi Muslim CHS (SMCHS), Karachi, Karachi City, Sindh",
      contactno: "(021) 99330164",
      downloaddocument: `${process.env.PUBLIC_URL}../assets/sindhkatciabadiact1987.pdf`,                
      pdf:SindhFoodAuthorityAct2016,
      logo:sindhFood,
      l1:"▪ Copy of CNIC;",
      l2:"▪ Documents of the property/tenancy agreement or affidavit showing ownership;",
      l3:"▪ Previous registration certificate (if any) with any authority;",
      l4:"▪ Copy of Challan form;",
      l5:"▪ Lab testing reports (where required as per SOPs); and",
      l6:"▪ Medical reports of the staff/food handlers (where required as per SOPs).",
      map:SindhFoodAuthorityMaps,
      location:"https://www.google.com/maps/dir//Sindh+Food+Authority,+Bunglow+No.+B,+12+Shahrah-e-Faisal+Rd,+Darwaish+Colony,+Karachi,+Karachi+City,+Sindh,+Pakistan/@24.8683205,67.0447531,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb3178521c0229d:0xb63bac5f451003f4!2m2!1d67.0859531!2d24.8682483?entry=ttu"
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
      fee: "Rs.6000",
      documenttype: "Law / Rules / Regulations	",
      logo:HealthDepartment,
      video:LIcensetosaledrugbytretail,
      address: "6th Floor, Sindh Secretariat No 1 Kamal Atta Turk Road, Karachi",
      contactno: "(021) 99222012",
      l1:"▪ Attested copy of the qualified person (Dispenser / Compounder / B. Pharmacy/ Pharm-D);",
      l2:"▪ Photocopy (attested) of C.N.I.C of the proprietor and qualified person;",
      l3:"▪ Four attested photographs of the qualified person (Dispenser/ Compounder/ B. Pharmacy/ Pharm-D);",
      l4:"▪ Affidavit by the proprietor and qualified person to inform the Inspector of Drugs as soon as either of the party ceases to have interest in the license issued under the rules;",
      l5:"▪ Attested photocopy of the registration issued by the CCI and in case of Indenter/ Importer;",
      l6:"▪ Rent /receipt/agreement (attested);",
      l7:"▪ Treasury challan for Rs. 5,000; and",
      l8:"▪ Copy of NTN No.",
    
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
      documenttype: "Law / Rules / Regulations	",
      timeLine: "3 Month",
      fee: "Rs.5000",
      address: "6th Floor, Sindh Secretariat No 1 Kamal Atta Turk Road, Karachi",
      contactno: "(021) 99222012",
      logo:HealthDepartment,
      video:licenseToSaleDrugByWholeSale,
      l1:"▪ Attested copy of the qualified person (Dispenser / Compounder / B. Pharmacy/ Pharm-D);",
      l2:"▪ Photocopy (attested) of C.N.I.C of the proprietor and qualified person;",
      l3:"▪ Four attested photographs of the qualified person (Dispenser/ Compounder/ B. Pharmacy/ Pharm-D);",
      l4:"▪ Affidavit by the proprietor and qualified person to inform the Inspector of Drugs as soon as either of the party ceases to have interest in the license issued under the rules;",
      l5:"▪ Attested photocopy of the registration issued by the CCI and in case of Indenter/ Importer;",
      l6:"▪ Rent /receipt/agreement (attested);",
      l7:"▪ Treasury challan for Rs. 5,000; and",
      l8:"▪ Copy of NTN No."
    },
    {
      sNo: 8,
      issuingDepartment: "Health Department",
      rlcoID: "HD-003",
      details: "License to sell Drugs in Pharmacy (Form-8)",
      type: "License",
      documenttype: "Law / Rules / Regulations	",

      // prevailing:
        // "1. The Drugs Act,1976. \n2. Sindh Drugs Rules, 1979 amended 2010.",
      // jurisdiction: "Sindh",
      timeLine: "3 Month",
      fee: "Rs.5000",
      address: "6th Floor, Sindh Secretariat No 1 Kamal Atta Turk Road, Karachi",
      contactno: "(021) 99222012",
      logo:HealthDepartment,
      l1:"▪ Attested copy of the qualified person (Dispenser / Compounder / B. Pharmacy/ Pharm-D);",
      l2:"▪ Photocopy (attested) of C.N.I.C of the proprietor and qualified person;",
      l3:"▪ Four attested photographs of the qualified person (Dispenser/ Compounder/ B. Pharmacy/ Pharm-D);",
      l4:"▪ Affidavit by the proprietor and qualified person to inform the Inspector of Drugs as soon as either of the party ceases to have interest in the license issued under the rules;",
      l5:"▪ Attested photocopy of the registration issued by the CCI and in case of Indenter/ Importer;",
      l6:"▪ Rent /receipt/agreement (attested);",
      l7:"▪ Treasury challan for Rs. 5,000; and",
      l8:"▪ Copy of NTN No."

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
      documenttype: "Law / Rules / Regulations	",
      logo:HealthDepartment,
      address: "6th Floor, Sindh Secretariat No 1 Kamal Atta Turk Road, Karachi",
      contactno: "(021) 99222012",

      // prevailing:
        // "1. The Drugs Act,1976. \n2. Sindh Drugs Rules, 1979 amended 2010.",
      // jurisdiction: "Sindh",
      timeLine: "3 Month",
      fee: "Rs.5000",
      officials: "1 .Licensing Authority (Secretary Health has delegated authority to District Health Officer) \n2. Provincial Inspector Drugs",
        l1:"▪ Attested copy of the qualified person (Dispenser / Compounder / B. Pharmacy/ Pharm-D);",
        l2:"▪ Photocopy (attested) of C.N.I.C of the proprietor and qualified person;",
        l3:"▪ Four attested photographs of the qualified person (Dispenser/ Compounder/ B. Pharmacy/ Pharm-D);",
        l4:"▪ Affidavit by the proprietor and qualified person to inform the Inspector of Drugs as soon as either of the party ceases to have interest in the license issued under the rules;",
        l5:"▪ Attested photocopy of the registration issued by the CCI and in case of Indenter/ Importer;",
        l6:"▪ Rent /receipt/agreement (attested);",
        l7:"▪ Treasury challan for Rs. 5,000; and",
        l8:"▪ Copy of NTN No."
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
      address: "6th Floor, Sindh Secretariat No 1 Kamal Atta Turk Road, Karachi",
      contactno: "(021) 99222012",
      officials:
        "1 .Licensing Authority (Secretary Health has delegated authority to District Health Officer) \n2. Provincial Inspector Drugs",
        // validity: "",                   
      //  renewalFee:""
      documenttype: "Law / Rules / Regulations	",
      logo:HealthDepartment,
      video:licenseToManufactureDrug,
      l1:"▪ Attested copy of the qualified person (Dispenser / Compounder / B. Pharmacy/ Pharm-D);",
      l2:"▪ Photocopy (attested) of C.N.I.C of the proprietor and qualified person;",
      l3:"▪ Four attested photographs of the qualified person (Dispenser/ Compounder/ B. Pharmacy/ Pharm-D);",
      l4:"▪ Affidavit by the proprietor and qualified person to inform the Inspector of Drugs as soon as either of the party ceases to have interest in the license issued under the rules;",
      l5:"▪ Attested photocopy of the registration issued by the CCI and in case of Indenter/ Importer;",
      l6:"▪ Rent /receipt/agreement (attested);",
      l7:"▪ Treasury challan for Rs. 5,000; and",
      l8:"▪ Copy of NTN No."


    },
    {
      sNo: 11,
      issuingDepartment: "School Education and Literacy Department (Institutions from Montessori up to Class-X)",
      rlcoID: "SELD-001",
      details: "Registration of Privately Managed Schools",
      type: "Registration",
      // prevailing:
        // "The Sindh Private Education Institutions (Regulations &amp; Control) Ordinance 2001and Amended Act 2003. \nThe Sindh Private Education Institutions (Regulations &amp; Control) Rules, 2005 and Amended Rules, 2020",
      // jurisdiction: "Sindh",
      timeLine: "30 Days",
      fee: "Rs.7,000",
      documenttype: "Law / Rules / Regulations	",
      address: "School Education & Literacy Department Government of Sindh 1st. Floor, Tughlaq House Sindh Secretariat, Saddar Karachi",
      contactno: "(021) 99211227",
      logo:SchoolEducationAndLiteracy,
      video:schooleDepartmentVideo,
      l1:"▪ Form-A and covering letter;",
      l2:"▪ Treasury challan original and (03) copies (Head of account: C-02818) in the favor of Secretary, Education & Literacy Department in accordance with following fee schedule;",
      l3:"▪ Society registration certificate with bylaws/ trust paper/ private limited or individual CNIC;",
      l4:"▪ If the owned building, then the property documents and other details of ownership. If rented building, then copy of rent agreement (attested by first class Magistrate);",
      l5:"▪ Floor-wise building map;",
      l6:"▪ Teacher-wise/ class-wise Timetable; ",
      l7:"▪ Present class-wise enrolment",
      l8:"▪ List of teaching and non- teaching staff with name, father name, qualification, designation, date of appointment and salary;",
      l9:"▪ Class-wise list of textbooks; ",
      l10:"▪ List of library books;",
      l11:"▪ List of furniture;",
      l12:"▪ List of practical Lab equipment (physics, chemistry, biology & computer);",
      map:SchoolEducationMaps,
      location:"https://www.google.com/maps/dir//Building+No.2,+Sindh+Secretariat,+Seecretary+School+Education+and+Literacy+Deprartment/@24.8553469,66.9364199,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb33fcd040fedb3:0x385765b971e1e193!2m2!1d67.0188214!2d24.8553695?entry=ttu"
      // officials:
      //   "1. Reception desk \n2. Assistant Director \n3 Deputy Direction (M&amp;E and Inspections) \n4. Additional Director/ Chairman Inspection Committee \n5. Section Officer (Secretariate) \n6. Secretary, Education &amp; Literacy",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 11,
      issuingDepartment: "School Education and Literacy Department (Higher Secondary School)",
      rlcoID: "SELD-001",
      details: "Registration of Privately Managed Schools",
      type: "Registration",
      // prevailing:
        // "The Sindh Private Education Institutions (Regulations &amp; Control) Ordinance 2001and Amended Act 2003. \nThe Sindh Private Education Institutions (Regulations &amp; Control) Rules, 2005 and Amended Rules, 2020",
      // jurisdiction: "Sindh",
      timeLine: "30 Days",
      fee: "Rs.15,000",
      documenttype: "Law / Rules / Regulations	",
      address: "School Education & Literacy Department Government of Sindh 1st. Floor, Tughlaq House Sindh Secretariat, Saddar Karachi",
      contactno: "(021) 99211227",
      logo:SchoolEducationAndLiteracy,
      video:schooleDepartmentVideo,
      l1:"▪ Form-A and covering letter;",
      l2:"▪ Treasury challan original and (03) copies (Head of account: C-02818) in the favor of Secretary, Education & Literacy Department in accordance with following fee schedule;",
      l3:"▪ Society registration certificate with bylaws/ trust paper/ private limited or individual CNIC;",
      l4:"▪ If the owned building, then the property documents and other details of ownership. If rented building, then copy of rent agreement (attested by first class Magistrate);",
      l5:"▪ Floor-wise building map;",
      l6:"▪ Teacher-wise/ class-wise Timetable; ",
      l7:"▪ Present class-wise enrolment",
      l8:"▪ List of teaching and non- teaching staff with name, father name, qualification, designation, date of appointment and salary;",
      l9:"▪ Class-wise list of textbooks; ",
      l10:"▪ List of library books;",
      l11:"▪ List of furniture;",
      l12:"▪ List of practical Lab equipment (physics, chemistry, biology & computer);",
      map:SchoolEducationMaps,
      location:"https://www.google.com/maps/dir//Building+No.2,+Sindh+Secretariat,+Seecretary+School+Education+and+Literacy+Deprartment/@24.8553469,66.9364199,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb33fcd040fedb3:0x385765b971e1e193!2m2!1d67.0188214!2d24.8553695?entry=ttu"
      // officials:
      //   "1. Reception desk \n2. Assistant Director \n3 Deputy Direction (M&amp;E and Inspections) \n4. Additional Director/ Chairman Inspection Committee \n5. Section Officer (Secretariate) \n6. Secretary, Education &amp; Literacy",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 11,
      issuingDepartment: "School Education and Literacy Department (Institutions of \"O\" & \"A\" Level)",
      rlcoID: "SELD-001",
      details: "Registration of Privately Managed Schools",
      type: "Registration",
      // prevailing:
        // "The Sindh Private Education Institutions (Regulations &amp; Control) Ordinance 2001and Amended Act 2003. \nThe Sindh Private Education Institutions (Regulations &amp; Control) Rules, 2005 and Amended Rules, 2020",
      // jurisdiction: "Sindh",
      timeLine: "30 Days",
      fee: "Rs.30,000",
      documenttype: "Law / Rules / Regulations	",
      address: "School Education & Literacy Department Government of Sindh 1st. Floor, Tughlaq House Sindh Secretariat, Saddar Karachi",
      contactno: "(021) 99211227",
      logo:SchoolEducationAndLiteracy,
      video:schooleDepartmentVideo,
      l1:"▪ Form-A and covering letter;",
      l2:"▪ Treasury challan original and (03) copies (Head of account: C-02818) in the favor of Secretary, Education & Literacy Department in accordance with following fee schedule;",
      l3:"▪ Society registration certificate with bylaws/ trust paper/ private limited or individual CNIC;",
      l4:"▪ If the owned building, then the property documents and other details of ownership. If rented building, then copy of rent agreement (attested by first class Magistrate);",
      l5:"▪ Floor-wise building map;",
      l6:"▪ Teacher-wise/ class-wise Timetable; ",
      l7:"▪ Present class-wise enrolment",
      l8:"▪ List of teaching and non- teaching staff with name, father name, qualification, designation, date of appointment and salary;",
      l9:"▪ Class-wise list of textbooks; ",
      l10:"▪ List of library books;",
      l11:"▪ List of furniture;",
      l12:"▪ List of practical Lab equipment (physics, chemistry, biology & computer);",
      map:SchoolEducationMaps,
      location:"https://www.google.com/maps/dir//Building+No.2,+Sindh+Secretariat,+Seecretary+School+Education+and+Literacy+Deprartment/@24.8553469,66.9364199,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb33fcd040fedb3:0x385765b971e1e193!2m2!1d67.0188214!2d24.8553695?entry=ttu"
      // officials:
      //   "1. Reception desk \n2. Assistant Director \n3 Deputy Direction (M&amp;E and Inspections) \n4. Additional Director/ Chairman Inspection Committee \n5. Section Officer (Secretariate) \n6. Secretary, Education &amp; Literacy",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 11,
      issuingDepartment: "School Education and Literacy Department (Degree awarding institutes and universities including Institutions having academic linkage / foreign collaboration/affiliation with any other institutions of higher learning)",
      rlcoID: "SELD-001",
      details: "Registration of Privately Managed Schools",
      type: "Registration",
      // prevailing:
        // "The Sindh Private Education Institutions (Regulations &amp; Control) Ordinance 2001and Amended Act 2003. \nThe Sindh Private Education Institutions (Regulations &amp; Control) Rules, 2005 and Amended Rules, 2020",
      // jurisdiction: "Sindh",
      timeLine: "30 Days",
      fee: "Rs.20,000",
      documenttype: "Law / Rules / Regulations	",
      address: "School Education & Literacy Department Government of Sindh 1st. Floor, Tughlaq House Sindh Secretariat, Saddar Karachi",
      contactno: "(021) 99211227",
      logo:SchoolEducationAndLiteracy,
      video:schooleDepartmentVideo,
      l1:"▪ Form-A and covering letter;",
      l2:"▪ Treasury challan original and (03) copies (Head of account: C-02818) in the favor of Secretary, Education & Literacy Department in accordance with following fee schedule;",
      l3:"▪ Society registration certificate with bylaws/ trust paper/ private limited or individual CNIC;",
      l4:"▪ If the owned building, then the property documents and other details of ownership. If rented building, then copy of rent agreement (attested by first class Magistrate);",
      l5:"▪ Floor-wise building map;",
      l6:"▪ Teacher-wise/ class-wise Timetable; ",
      l7:"▪ Present class-wise enrolment",
      l8:"▪ List of teaching and non- teaching staff with name, father name, qualification, designation, date of appointment and salary;",
      l9:"▪ Class-wise list of textbooks; ",
      l10:"▪ List of library books;",
      l11:"▪ List of furniture;",
      l12:"▪ List of practical Lab equipment (physics, chemistry, biology & computer);",
      map:SchoolEducationMaps,
      location:"https://www.google.com/maps/dir//Building+No.2,+Sindh+Secretariat,+Seecretary+School+Education+and+Literacy+Deprartment/@24.8553469,66.9364199,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb33fcd040fedb3:0x385765b971e1e193!2m2!1d67.0188214!2d24.8553695?entry=ttu"
      // officials:
      //   "1. Reception desk \n2. Assistant Director \n3 Deputy Direction (M&amp;E and Inspections) \n4. Additional Director/ Chairman Inspection Committee \n5. Section Officer (Secretariate) \n6. Secretary, Education &amp; Literacy",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 12,
      issuingDepartment: "Sindh Health Care Commission ( Single specialty (i.e general practitioner, homeo, tibb, detist, nursing/ maternity home, laboratories, radiology centre etc.) (Category III & IV))",
      rlcoID: "SHCC-001",
      details: "Registration &amp; Licensing of Healthcare Establishments",
      type: "Registration",
      timeLine: "30 Days",
      fee: "Rs.500",
      address: "2nd Floor, Block C, FTC Building, Shahrah-e-Faisal, Karachi",
      contactno: "(021) 38656000",
      logo:SindhHeathCare,
      video:sindhHealthcarevideo,
      l1:"▪ Copy of CNIC; ",
      l2:"▪ Copy of Degree/Diploma; ",
      l3:"▪ Copy of updated registration with relevant council (PMDC/PNC/NCH/NCT);",
      l4:"▪ HCE staff list;",
      l5:"▪ HCE Equipment and Machinery list; ",
      l6:"▪ Affidavit on stamp paper (sample available in the application form);",
      l7:"▪ Pay order / demand draft in the name of the Sindh Health Care Commission for the registration fee as specified in below table;",
      table:HealthCareTable,
      map:SindhHealthCareCommission,
      location:"https://www.google.com/maps/place/Sindh+Health+Care+Commision/@24.8583639,67.0495759,17z/data=!3m2!4b1!5s0x3eb33e81570b5473:0x5dc46c3300de7ce2!4m6!3m5!1s0x3eb33eec63544583:0xd50963284260903f!8m2!3d24.8583591!4d67.0521508!16s%2Fg%2F11f3wcyn1p?entry=ttu"
 
    },
    {
      sNo: 12,
      issuingDepartment: "Sindh Health Care Commission (1-24 bedded Medical Centre/ Hospital (Category II-B))",
      rlcoID: "SHCC-001",
      details: "Registration &amp; Licensing of Healthcare Establishments",
      type: "Registration",
      timeLine: "30 Days",
      fee: "Rs.2,000",
      address: "2nd Floor, Block C, FTC Building, Shahrah-e-Faisal, Karachi",
      contactno: "(021) 38656000",
      logo:SindhHeathCare,
      video:sindhHealthcarevideo,

      l1:"▪ Copy of CNIC; ",
      l2:"▪ Copy of Degree/Diploma; ",
      l3:"▪ Copy of updated registration with relevant council (PMDC/PNC/NCH/NCT);",
      l4:"▪ HCE staff list;",
      l5:"▪ HCE Equipment and Machinery list; ",
      l6:"▪ Affidavit on stamp paper (sample available in the application form);",
      l7:"▪ Pay order / demand draft in the name of the Sindh Health Care Commission for the registration fee as specified in below table;",
      table:HealthCareTable,
      map:SindhHealthCareCommission,
      location:"https://www.google.com/maps/place/Sindh+Health+Care+Commision/@24.8583639,67.0495759,17z/data=!3m2!4b1!5s0x3eb33e81570b5473:0x5dc46c3300de7ce2!4m6!3m5!1s0x3eb33eec63544583:0xd50963284260903f!8m2!3d24.8583591!4d67.0521508!16s%2Fg%2F11f3wcyn1p?entry=ttu"
 
    },
    {
      sNo: 12,
      issuingDepartment: "Sindh Health Care Commission ( 25 and above bedded Hospital (Category I & II-A))",
      rlcoID: "SHCC-001",
      details: "Registration &amp; Licensing of Healthcare Establishments",
      type: "Registration",
      timeLine: "30 Days",
      fee: "Rs.5,000",
      address: "2nd Floor, Block C, FTC Building, Shahrah-e-Faisal, Karachi",
      contactno: "(021) 38656000",
      video:sindhHealthcarevideo,
      logo:SindhHeathCare,
      l1:"▪ Copy of CNIC; ",
      l2:"▪ Copy of Degree/Diploma; ",
      l3:"▪ Copy of updated registration with relevant council (PMDC/PNC/NCH/NCT);",
      l4:"▪ HCE staff list;",
      l5:"▪ HCE Equipment and Machinery list; ",
      l6:"▪ Affidavit on stamp paper (sample available in the application form);",
      l7:"▪ Pay order / demand draft in the name of the Sindh Health Care Commission for the registration fee as specified in below table;",
      table:HealthCareTable,
      map:SindhHealthCareCommission,
      location:"https://www.google.com/maps/place/Sindh+Health+Care+Commision/@24.8583639,67.0495759,17z/data=!3m2!4b1!5s0x3eb33e81570b5473:0x5dc46c3300de7ce2!4m6!3m5!1s0x3eb33eec63544583:0xd50963284260903f!8m2!3d24.8583591!4d67.0521508!16s%2Fg%2F11f3wcyn1p?entry=ttu"
 
    },
    {
      sNo: 12,
      issuingDepartment: "Sindh Health Care Commission",
      rlcoID: "SHCC-001",
      details: "Registration &amp; Licensing of Healthcare Establishments",
      type: "Registration",
      timeLine: "30 Days",
      fee: "As per schedule",
      address: "2nd Floor, Block C, FTC Building, Shahrah-e-Faisal, Karachi",
      contactno: "(021) 38656000",
      video:sindhHealthcarevideo,
      logo:SindhHeathCare,
      l1:"▪ Copy of CNIC; ",
      l2:"▪ Copy of Degree/Diploma; ",
      l3:"▪ Copy of updated registration with relevant council (PMDC/PNC/NCH/NCT);",
      l4:"▪ HCE staff list;",
      l5:"▪ HCE Equipment and Machinery list; ",
      l6:"▪ Affidavit on stamp paper (sample available in the application form);",
      l7:"▪ Pay order / demand draft in the name of the Sindh Health Care Commission for the registration fee as specified in below table;",
      table:HealthCareTable,
      map:SindhHealthCareCommission,
      location:"https://www.google.com/maps/place/Sindh+Health+Care+Commision/@24.8583639,67.0495759,17z/data=!3m2!4b1!5s0x3eb33e81570b5473:0x5dc46c3300de7ce2!4m6!3m5!1s0x3eb33eec63544583:0xd50963284260903f!8m2!3d24.8583591!4d67.0521508!16s%2Fg%2F11f3wcyn1p?entry=ttu"
 
    },
    {
      sNo: 12,
      issuingDepartment: "Sindh Health Care Commission (Any change in the already registered HCE)",
      rlcoID: "SHCC-001",
      details: "Registration &amp; Licensing of Healthcare Establishments",
      type: "Registration",
      timeLine: "30 Days",
      fee: "Rs.1,000",
      address: "2nd Floor, Block C, FTC Building, Shahrah-e-Faisal, Karachi",
      contactno: "(021) 38656000",
      logo:SindhHeathCare,
      video:sindhHealthcarevideo,

      l1:"▪ Copy of CNIC; ",
      l2:"▪ Copy of Degree/Diploma; ",
      l3:"▪ Copy of updated registration with relevant council (PMDC/PNC/NCH/NCT);",
      l4:"▪ HCE staff list;",
      l5:"▪ HCE Equipment and Machinery list; ",
      l6:"▪ Affidavit on stamp paper (sample available in the application form);",
      l7:"▪ Pay order / demand draft in the name of the Sindh Health Care Commission for the registration fee as specified in below table;",
      table:HealthCareTable,
      map:SindhHealthCareCommission,
      location:"https://www.google.com/maps/place/Sindh+Health+Care+Commision/@24.8583639,67.0495759,17z/data=!3m2!4b1!5s0x3eb33e81570b5473:0x5dc46c3300de7ce2!4m6!3m5!1s0x3eb33eec63544583:0xd50963284260903f!8m2!3d24.8583591!4d67.0521508!16s%2Fg%2F11f3wcyn1p?entry=ttu"
 
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
      address:"statelife building no 11, 2nd floor Directorate of industries",
      contactno:"(021) 99202190",
      logo:IndustrieAndCommerce,
      video:ICD_001,
      l1:"▪ Partnership deed; ",
      l2:"▪ CNIC copies of all the local partners; ",
      l3:"▪ Form 1 along with partnership witness form; and ",
      l4:"▪ Prescribed fee challan of Rs. 110. ",
      l5:"In case a company is a partner",
      l6:"▪ Certified copy of incorporation certificate; ",
      l7:"▪ Form 29 (in case a local company is a partner);",
      l8:"▪ Copy of Board Resolution; and",
      l9:"▪ Certified copy of Memorandum of association (MOA) & Article of Association clearly stating that partnership is allowed for the company. ",
      l10:"Additional requirements in case of a foreign company ",
      l11:"▪ CEO's passport/ visa copy; and ",
      l12:"▪ SECP equivalence letter.",
      map:IndustrialDepartmentMaps,
      location:"https://www.google.com/maps/dir//Directorate+of+Industries,+Trust+Wing,+Sindh+Govt.,+2nd+Floor,+State+Life+Building+No.+11,+Abdullah+Haroon+Rd,+Civil+Lines,+Karachi,+Karachi+City,+Sindh+74400,+Pakistan/@24.8544337,66.9871678,13z/data=!3m1!5s0x3eb33e741d2fccf1:0xc3b35a0e92558ed!4m8!4m7!1m0!1m5!1m1!1s0x3eb33f45b8e53693:0x1368d0053cc6b4b6!2m2!1d67.0283678!2d24.8543615?entry=ttu"
      // officials: "1. Junior Clerk/ Assistant \n2.Registrar",
      // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 14,
      issuingDepartment: "Industries and Commerce Department",
      rlcoID: "ICD-002",
      details:
        "Registration Certificate of Amendment/Dissolution /Rectification in Partnership Firm",
      type: "Registration",
      // prevailing: "Partnership Act, 1932",
      // jurisdiction: "Sindh",
      timeLine: "5 days",
      address:"statelife building no 11, 2nd floor Directorate of industries",
      contactno:"(021) 99202190",
      fee: "Rs.55",
      logo:IndustrieAndCommerce,
      video:ICD_002,
      l1:"▪ Partnership deed; ",
      l2:"▪ CNIC copies of all the local partners; ",
      l3:"▪ Form 1 along with partnership witness form; and ",
      l4:"▪ Prescribed fee challan of Rs. 110. ",
      l5:"In case a company is a partner",
      l6:"▪ Certified copy of incorporation certificate; ",
      l7:"▪ Form 29 (in case a local company is a partner);",
      l8:"▪ Copy of Board Resolution; and",
      l9:"▪ Certified copy of Memorandum of association (MOA) & Article of Association clearly stating that partnership is allowed for the company. ",
      l10:"Additional requirements in case of a foreign company ",
      l11:"▪ CEO's passport/ visa copy; and ",
      l12:"▪ SECP equivalence letter.",
      map:IndustrialDepartmentMaps,
      location:"https://www.google.com/maps/dir//Directorate+of+Industries,+Trust+Wing,+Sindh+Govt.,+2nd+Floor,+State+Life+Building+No.+11,+Abdullah+Haroon+Rd,+Civil+Lines,+Karachi,+Karachi+City,+Sindh+74400,+Pakistan/@24.8544337,66.9871678,13z/data=!3m1!5s0x3eb33e741d2fccf1:0xc3b35a0e92558ed!4m8!4m7!1m0!1m5!1m1!1s0x3eb33f45b8e53693:0x1368d0053cc6b4b6!2m2!1d67.0283678!2d24.8543615?entry=ttu"
      // officials:
        // "Dispatcher \n▪ Public Dealing Officer \n▪ Superintendent \n▪ Registrar",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 15,
      issuingDepartment: "Industries and Commerce Department",
      rlcoID: "ICD-003",
      details: "Registration of New Boiler",
      type: "Registration",
      address:"statelife building no 11, 2nd floor Directorate of industries",
      contactno:"(021) 99202190",
      // prevailing:
        // "Boiler Act, 1923. Sindh Boiler Rules, 1941.\nThe Boiler and Pressure Vessel Ordinance, 2002. \nThe Pakistan Boiler Rules, 2009.",
      // jurisdiction: "Sindh",
      timeLine: "10-15 Days",
      fee: "S.R.O.88(I)/2008)",
      logo:IndustrieAndCommerce,
      video:ICD_003,
      l1:"▪ Partnership deed; ",
      l2:"▪ CNIC copies of all the local partners; ",
      l3:"▪ Form 1 along with partnership witness form; and ",
      l4:"▪ Prescribed fee challan of Rs. 110. ",
      l5:"In case a company is a partner",
      l6:"▪ Certified copy of incorporation certificate; ",
      l7:"▪ Form 29 (in case a local company is a partner);",
      l8:"▪ Copy of Board Resolution; and",
      l9:"▪ Certified copy of Memorandum of association (MOA) & Article of Association clearly stating that partnership is allowed for the company. ",
      l10:"Additional requirements in case of a foreign company ",
      l11:"▪ CEO's passport/ visa copy; and ",
      l12:"▪ SECP equivalence letter.",
      map:IndustrialDepartmentMaps,
      location:"https://www.google.com/maps/dir//Directorate+of+Industries,+Trust+Wing,+Sindh+Govt.,+2nd+Floor,+State+Life+Building+No.+11,+Abdullah+Haroon+Rd,+Civil+Lines,+Karachi,+Karachi+City,+Sindh+74400,+Pakistan/@24.8544337,66.9871678,13z/data=!3m1!5s0x3eb33e741d2fccf1:0xc3b35a0e92558ed!4m8!4m7!1m0!1m5!1m1!1s0x3eb33f45b8e53693:0x1368d0053cc6b4b6!2m2!1d67.0283678!2d24.8543615?entry=ttu"
      // officials:
        // "Office Superintendent \n▪ Boiler Inspector \n▪ Chief Inspector Boile",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 16,
      issuingDepartment: "Industries and Commerce Department",
      rlcoID: "ICD-004",
      details: "Registration of Old Boiler",
      type: "Registration",
      address:"statelife building no 11, 2nd floor Directorate of industries",
      contactno:"(021) 99202190",
      // prevailing:
        // "Boiler Act, 1923. Sindh Boiler Rules, 1941.\nThe Boiler and Pressure Vessel Ordinance, 2002. \nThe Pakistan Boiler Rules, 2009.",
      // jurisdiction: "Sindh",
      timeLine: "10-15 Days",
      fee: "S.R.O.88(I)/2008)",
      logo:IndustrieAndCommerce,
      video:ICD_004,
      l1:"▪ Partnership deed; ",
      l2:"▪ CNIC copies of all the local partners; ",
      l3:"▪ Form 1 along with partnership witness form; and ",
      l4:"▪ Prescribed fee challan of Rs. 110. ",
      l5:"In case a company is a partner",
      l6:"▪ Certified copy of incorporation certificate; ",
      l7:"▪ Form 29 (in case a local company is a partner);",
      l8:"▪ Copy of Board Resolution; and",
      l9:"▪ Certified copy of Memorandum of association (MOA) & Article of Association clearly stating that partnership is allowed for the company. ",
      l10:"Additional requirements in case of a foreign company ",
      l11:"▪ CEO's passport/ visa copy; and ",
      l12:"▪ SECP equivalence letter.",
      map:IndustrialDepartmentMaps,
      location:"https://www.google.com/maps/dir//Directorate+of+Industries,+Trust+Wing,+Sindh+Govt.,+2nd+Floor,+State+Life+Building+No.+11,+Abdullah+Haroon+Rd,+Civil+Lines,+Karachi,+Karachi+City,+Sindh+74400,+Pakistan/@24.8544337,66.9871678,13z/data=!3m1!5s0x3eb33e741d2fccf1:0xc3b35a0e92558ed!4m8!4m7!1m0!1m5!1m1!1s0x3eb33f45b8e53693:0x1368d0053cc6b4b6!2m2!1d67.0283678!2d24.8543615?entry=ttu"
      // officials:
      //   "Office Superintendent \n▪ Boiler Inspector \n▪ Chief Inspector Boile",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 17,
      issuingDepartment: "Industries and Commerce Department",
      rlcoID: "ICD-005",
      details:
        "Approval of Plan and Particulars of Boilers Acceptable for Registration (New Boiler)",
      type: "Other",
      // prevailing:
        // "The Boiler and Pressure Vessel Ordinance, 2002.\nThe Pakistan Boiler Rules, 2009. \nImport Policy, 2016",
      // jurisdiction: "Sindh",
      address:"statelife building no 11, 2nd floor Directorate of industries",
      contactno:"(021) 99202190",
      timeLine: "10-15 Days",
      fee: "S.R.O.88(I)/2008)",
      logo:IndustrieAndCommerce,
      video:ICD_005,
      l1:"▪ Partnership deed; ",
      l2:"▪ CNIC copies of all the local partners; ",
      l3:"▪ Form 1 along with partnership witness form; and ",
      l4:"▪ Prescribed fee challan of Rs. 110. ",
      l5:"In case a company is a partner",
      l6:"▪ Certified copy of incorporation certificate; ",
      l7:"▪ Form 29 (in case a local company is a partner);",
      l8:"▪ Copy of Board Resolution; and",
      l9:"▪ Certified copy of Memorandum of association (MOA) & Article of Association clearly stating that partnership is allowed for the company. ",
      l10:"Additional requirements in case of a foreign company ",
      l11:"▪ CEO's passport/ visa copy; and ",
      l12:"▪ SECP equivalence letter.",
      map:IndustrialDepartmentMaps,
      location:"https://www.google.com/maps/dir//Directorate+of+Industries,+Trust+Wing,+Sindh+Govt.,+2nd+Floor,+State+Life+Building+No.+11,+Abdullah+Haroon+Rd,+Civil+Lines,+Karachi,+Karachi+City,+Sindh+74400,+Pakistan/@24.8544337,66.9871678,13z/data=!3m1!5s0x3eb33e741d2fccf1:0xc3b35a0e92558ed!4m8!4m7!1m0!1m5!1m1!1s0x3eb33f45b8e53693:0x1368d0053cc6b4b6!2m2!1d67.0283678!2d24.8543615?entry=ttu"
      // officials:
      //   "Office Superintendent \n▪ Boiler Inspector \n▪ Chief Inspector Boile",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 18,
      issuingDepartment: "Industries and Commerce Department",
      rlcoID: "ICD-006",
      details:
        "Approval of Plan and Particulars of Boilers Acceptable for Registration (Used Boiler)",
      type: "Other",
      address:"statelife building no 11, 2nd floor Directorate of industries",
      contactno:"(021) 99202190",
      // prevailing:
        // "The Boiler and Pressure Vessel Ordinance, 2002.\nThe Pakistan Boiler Rules, 2009. \nImport Policy, 2016",
      // jurisdiction: "Sindh",
      timeLine: "10-15 Days",
      fee: "S.R.O.88(I)/2008)",
      logo:IndustrieAndCommerce,
      video:ICD_006,
      l1:"▪ Partnership deed; ",
      l2:"▪ CNIC copies of all the local partners; ",
      l3:"▪ Form 1 along with partnership witness form; and ",
      l4:"▪ Prescribed fee challan of Rs. 110. ",
      l5:"In case a company is a partner",
      l6:"▪ Certified copy of incorporation certificate; ",
      l7:"▪ Form 29 (in case a local company is a partner);",
      l8:"▪ Copy of Board Resolution; and",
      l9:"▪ Certified copy of Memorandum of association (MOA) & Article of Association clearly stating that partnership is allowed for the company. ",
      l10:"Additional requirements in case of a foreign company ",
      l11:"▪ CEO's passport/ visa copy; and ",
      l12:"▪ SECP equivalence letter.",
      map:IndustrialDepartmentMaps,
      location:"https://www.google.com/maps/dir//Directorate+of+Industries,+Trust+Wing,+Sindh+Govt.,+2nd+Floor,+State+Life+Building+No.+11,+Abdullah+Haroon+Rd,+Civil+Lines,+Karachi,+Karachi+City,+Sindh+74400,+Pakistan/@24.8544337,66.9871678,13z/data=!3m1!5s0x3eb33e741d2fccf1:0xc3b35a0e92558ed!4m8!4m7!1m0!1m5!1m1!1s0x3eb33f45b8e53693:0x1368d0053cc6b4b6!2m2!1d67.0283678!2d24.8543615?entry=ttu"
      // officials:
      //   "Office Superintendent \n▪ Boiler Inspector \n▪ Chief Inspector Boile",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 19,
      issuingDepartment: "Industries and Commerce Department",
      rlcoID: "ICD-007",
      details: "Transfer of Ownership",
      type: "Other",
      // prevailing: "The Pakistan Boiler Rules, 2009.",
      // jurisdiction: "Sindh",
      timeLine: "10-15 Days",
      address:"statelife building no 11, 2nd floor Directorate of industries",
      contactno:"(021) 99202190",
      fee: "S.R.O.88(I)/2008)",
      logo:IndustrieAndCommerce,
      video:ICD_007,
      l1:"▪ Partnership deed; ",
      l2:"▪ CNIC copies of all the local partners; ",
      l3:"▪ Form 1 along with partnership witness form; and ",
      l4:"▪ Prescribed fee challan of Rs. 110. ",
      l5:"In case a company is a partner",
      l6:"▪ Certified copy of incorporation certificate; ",
      l7:"▪ Form 29 (in case a local company is a partner);",
      l8:"▪ Copy of Board Resolution; and",
      l9:"▪ Certified copy of Memorandum of association (MOA) & Article of Association clearly stating that partnership is allowed for the company. ",
      l10:"Additional requirements in case of a foreign company ",
      l11:"▪ CEO's passport/ visa copy; and ",
      l12:"▪ SECP equivalence letter.",
      map:IndustrialDepartmentMaps,
      location:"https://www.google.com/maps/dir//Directorate+of+Industries,+Trust+Wing,+Sindh+Govt.,+2nd+Floor,+State+Life+Building+No.+11,+Abdullah+Haroon+Rd,+Civil+Lines,+Karachi,+Karachi+City,+Sindh+74400,+Pakistan/@24.8544337,66.9871678,13z/data=!3m1!5s0x3eb33e741d2fccf1:0xc3b35a0e92558ed!4m8!4m7!1m0!1m5!1m1!1s0x3eb33f45b8e53693:0x1368d0053cc6b4b6!2m2!1d67.0283678!2d24.8543615?entry=ttu"
      // officials:
      //   "Office Superintendent \n▪ Boiler Inspector \n▪ Chief Inspector Boile",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 20,
      issuingDepartment: "Sindh Environmental Protection Agency (SEPA)",
      address:"ST-21،, Sector 23 Korangi Industrial Area, Karachi, Karachi City, Sindh",
      contactno:"(021) 35065950",
      rlcoID: "SEPA-001",
      details: "License for Handling of Hazardous Substances",
      type: "License",
      timeLine: "7 Days",
      fee: "Rs.50000",
      documentname: "The Hazardous Substances Rule 2014",
      documenttype: "Law / Rules / Regulations	",
      downloaddocument: `${process.env.PUBLIC_URL}../assets/sindhkatciabadiact1987.pdf`,
      pdf:TheHazardousSubstancesRule2014,
      logo:SindhEnviromentalProtection,
      video:sepa_001,
      l1:"▪ Covering letter;",
      l2:"▪ Hazardous substances management plan; and",
      l3:"▪ Pay order of PKR 50,000/- as prescribed in the Schedule-III of Hazardous Substances Rules, 2014.",
      map:SindhEnvironmentProtectionMaps,
      location:"https://www.google.com/maps/dir//Sindh+Environmental+Protection+Agency%D8%8C+ST-21%D8%8C,+Sector+23+Korangi+Industrial+Area,+Karachi,+Karachi+City,+Sindh%E2%80%AD/@24.8376612,67.0792909,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb33b946a825e95:0xe0803268ac5da982!2m2!1d67.1204909!2d24.837589?entry=ttu"
      // officials:
      //   "Director/ Deputy Director \nAssistant Director \nEnvironmental Inspector ▪ DG (SEPA)  \nExpert Committee",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 21,
      issuingDepartment: "Sindh Environmental Protection Agency (SEPA)",
      address:"ST-21،, Sector 23 Korangi Industrial Area, Karachi, Karachi City, Sindh",
      contactno:"(021) 35065950",
      rlcoID: "SEPA-002",
      details:
        "License to Waste Contractor for Handling of Hazardous Substances and Non-Hazardous substances",
      type: "License",
      // prevailing:
      //   "The Sindh Environmental Protection Act, 2014. \nHazardous Substances Rules, 2014",
      // jurisdiction: "Sindh",
      timeLine: "7 days",
      fee: "Rs.50000",
      documentname: "The Hazardous Substances Rule 2014",
      documenttype: "Law / Rules / Regulations	",
      downloaddocument: `${process.env.PUBLIC_URL}../assets/sindhkatciabadiact1987.pdf`,
      pdf:TheHazardousSubstancesRule2014,
      logo:SindhEnviromentalProtection,
      l1:"▪ Covering letter;",
      l2:"▪ Hazardous substances management plan; and",
      l3:"▪ Pay order of PKR 50,000/- as prescribed in the Schedule-III of Hazardous Substances Rules, 2014.",
      map:SindhEnvironmentProtectionMaps,
      location:"https://www.google.com/maps/dir//Sindh+Environmental+Protection+Agency%D8%8C+ST-21%D8%8C,+Sector+23+Korangi+Industrial+Area,+Karachi,+Karachi+City,+Sindh%E2%80%AD/@24.8376612,67.0792909,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb33b946a825e95:0xe0803268ac5da982!2m2!1d67.1204909!2d24.837589?entry=ttu"
      // officials:
      //   "Director/ Deputy Director \nAssistant Director \nEnvironmental Inspector ▪ DG (SEPA)  \nExpert Committee",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 22,
      issuingDepartment: "Sindh Environmental Protection Agency (SEPA) (Up to 20 Million)",
      address:"ST-21،, Sector 23 Korangi Industrial Area, Karachi, Karachi City, Sindh",
      contactno:"(021) 35065950",
      rlcoID: "SEPA-003",
      details: "Approval Under Section 17 (IEE/EIA/EC)",
      type: "Other",
      video:sepa_003,
      // prevailing:
      //   "1. The Sindh Environmental Protection Act, 2014. 2. Sindh Environmental Protection Agency (Environmental Assessment) Regulations, 2021.",
      // jurisdiction: "Sindh",
      timeLine: "EC (15 days) \n▪ IEE (30 days) \n▪ EIA (60 days)",
      fee: "Rs.50,000",
      logo:SindhEnviromentalProtection,
      l1:"▪ Covering letter;",
      l2:"▪ Hazardous substances management plan; and",
      l3:"▪ Pay order of PKR 50,000/- as prescribed in the Schedule-III of Hazardous Substances Rules, 2014.",
      map:SindhEnvironmentProtectionMaps,
      location:"https://www.google.com/maps/dir//Sindh+Environmental+Protection+Agency%D8%8C+ST-21%D8%8C,+Sector+23+Korangi+Industrial+Area,+Karachi,+Karachi+City,+Sindh%E2%80%AD/@24.8376612,67.0792909,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb33b946a825e95:0xe0803268ac5da982!2m2!1d67.1204909!2d24.837589?entry=ttu"
      // officials:
      //   "Director/ Deputy Director \nAssistant Director \nEnvironmental Inspector ▪ DG (SEPA)  \nExpert Committee",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 22,
      issuingDepartment: "Sindh Environmental Protection Agency (SEPA) (Above 20 Million up to 100 Million)",
      address:"ST-21،, Sector 23 Korangi Industrial Area, Karachi, Karachi City, Sindh",
      contactno:"(021) 35065950",
      rlcoID: "SEPA-003",
      details: "Approval Under Section 17 (IEE/EIA/EC)",
      type: "Other",
      video:sepa_003,

      // prevailing:
      //   "1. The Sindh Environmental Protection Act, 2014. 2. Sindh Environmental Protection Agency (Environmental Assessment) Regulations, 2021.",
      // jurisdiction: "Sindh",
      timeLine: "EC (15 days) \n▪ IEE (30 days) \n▪ EIA (60 days)",
      fee: "Rs.100,000",
      logo:SindhEnviromentalProtection,
      l1:"▪ Covering letter;",
      l2:"▪ Hazardous substances management plan; and",
      l3:"▪ Pay order of PKR 50,000/- as prescribed in the Schedule-III of Hazardous Substances Rules, 2014.",
      map:SindhEnvironmentProtectionMaps,
      location:"https://www.google.com/maps/dir//Sindh+Environmental+Protection+Agency%D8%8C+ST-21%D8%8C,+Sector+23+Korangi+Industrial+Area,+Karachi,+Karachi+City,+Sindh%E2%80%AD/@24.8376612,67.0792909,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb33b946a825e95:0xe0803268ac5da982!2m2!1d67.1204909!2d24.837589?entry=ttu"
      // officials:
      //   "Director/ Deputy Director \nAssistant Director \nEnvironmental Inspector ▪ DG (SEPA)  \nExpert Committee",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 22,
      issuingDepartment: "Sindh Environmental Protection Agency (SEPA) (Above 100 Milliion up to 200Million)",
      address:"ST-21،, Sector 23 Korangi Industrial Area, Karachi, Karachi City, Sindh",
      contactno:"(021) 35065950",
      rlcoID: "SEPA-003",
      details: "Approval Under Section 17 (IEE/EIA/EC)",
      video:sepa_003,

      type: "Other",
      // prevailing:
      //   "1. The Sindh Environmental Protection Act, 2014. 2. Sindh Environmental Protection Agency (Environmental Assessment) Regulations, 2021.",
      // jurisdiction: "Sindh",
      timeLine: "EC (15 days) \n▪ IEE (30 days) \n▪ EIA (60 days)",
      fee: "Rs.200,000",
      logo:SindhEnviromentalProtection,
      l1:"▪ Covering letter;",
      l2:"▪ Hazardous substances management plan; and",
      l3:"▪ Pay order of PKR 50,000/- as prescribed in the Schedule-III of Hazardous Substances Rules, 2014.",
      map:SindhEnvironmentProtectionMaps,
      location:"https://www.google.com/maps/dir//Sindh+Environmental+Protection+Agency%D8%8C+ST-21%D8%8C,+Sector+23+Korangi+Industrial+Area,+Karachi,+Karachi+City,+Sindh%E2%80%AD/@24.8376612,67.0792909,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb33b946a825e95:0xe0803268ac5da982!2m2!1d67.1204909!2d24.837589?entry=ttu"
      // officials:
      //   "Director/ Deputy Director \nAssistant Director \nEnvironmental Inspector ▪ DG (SEPA)  \nExpert Committee",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 22,
      issuingDepartment: "Sindh Environmental Protection Agency (SEPA) (Above 200 Million up to 500 Million)",
      address:"ST-21،, Sector 23 Korangi Industrial Area, Karachi, Karachi City, Sindh",
      contactno:"(021) 35065950",
      rlcoID: "SEPA-003",
      video:sepa_003,

      details: "Approval Under Section 17 (IEE/EIA/EC)",
      type: "Other",
      // prevailing:
      //   "1. The Sindh Environmental Protection Act, 2014. 2. Sindh Environmental Protection Agency (Environmental Assessment) Regulations, 2021.",
      // jurisdiction: "Sindh",
      timeLine: "EC (15 days) \n▪ IEE (30 days) \n▪ EIA (60 days)",
      fee: "Rs.400,000",
      logo:SindhEnviromentalProtection,
      l1:"▪ Covering letter;",
      l2:"▪ Hazardous substances management plan; and",
      l3:"▪ Pay order of PKR 50,000/- as prescribed in the Schedule-III of Hazardous Substances Rules, 2014.",
      map:SindhEnvironmentProtectionMaps,
      location:"https://www.google.com/maps/dir//Sindh+Environmental+Protection+Agency%D8%8C+ST-21%D8%8C,+Sector+23+Korangi+Industrial+Area,+Karachi,+Karachi+City,+Sindh%E2%80%AD/@24.8376612,67.0792909,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb33b946a825e95:0xe0803268ac5da982!2m2!1d67.1204909!2d24.837589?entry=ttu"
      // officials:
      //   "Director/ Deputy Director \nAssistant Director \nEnvironmental Inspector ▪ DG (SEPA)  \nExpert Committee",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 22,
      issuingDepartment: "Sindh Environmental Protection Agency (SEPA) (Above 500 Million)",
      address:"ST-21،, Sector 23 Korangi Industrial Area, Karachi, Karachi City, Sindh",
      contactno:"(021) 35065950",
      rlcoID: "SEPA-003",
      video:sepa_003,

      details: "Approval Under Section 17 (IEE/EIA/EC)",
      type: "Other",
      // prevailing:
      //   "1. The Sindh Environmental Protection Act, 2014. 2. Sindh Environmental Protection Agency (Environmental Assessment) Regulations, 2021.",
      // jurisdiction: "Sindh",
      timeLine: "EC (15 days) \n▪ IEE (30 days) \n▪ EIA (60 days)",
      fee: "Rs.600,000",
      logo:SindhEnviromentalProtection,
      l1:"▪ Covering letter;",
      l2:"▪ Hazardous substances management plan; and",
      l3:"▪ Pay order of PKR 50,000/- as prescribed in the Schedule-III of Hazardous Substances Rules, 2014.",
      map:SindhEnvironmentProtectionMaps,
      location:"https://www.google.com/maps/dir//Sindh+Environmental+Protection+Agency%D8%8C+ST-21%D8%8C,+Sector+23+Korangi+Industrial+Area,+Karachi,+Karachi+City,+Sindh%E2%80%AD/@24.8376612,67.0792909,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb33b946a825e95:0xe0803268ac5da982!2m2!1d67.1204909!2d24.837589?entry=ttu"
      // officials:
      //   "Director/ Deputy Director \nAssistant Director \nEnvironmental Inspector ▪ DG (SEPA)  \nExpert Committee",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 22,
      issuingDepartment: "Sindh Environmental Protection Agency (SEPA) (Review fee for Environmental Checklist or EMP is)",
      address:"ST-21،, Sector 23 Korangi Industrial Area, Karachi, Karachi City, Sindh",
      contactno:"(021) 35065950",
      rlcoID: "SEPA-003",
      video:sepa_003,

      details: "Approval Under Section 17 (IEE/EIA/EC)",
      type: "Other",
      // prevailing:
      //   "1. The Sindh Environmental Protection Act, 2014. 2. Sindh Environmental Protection Agency (Environmental Assessment) Regulations, 2021.",
      // jurisdiction: "Sindh",
      timeLine: "EC (15 days) \n▪ IEE (30 days) \n▪ EIA (60 days)",
      fee: "PKR 40,000.",
      logo:SindhEnviromentalProtection,
      l1:"▪ Covering letter;",
      l2:"▪ Hazardous substances management plan; and",
      l3:"▪ Pay order of PKR 50,000/- as prescribed in the Schedule-III of Hazardous Substances Rules, 2014.",
      map:SindhEnvironmentProtectionMaps,
      location:"https://www.google.com/maps/dir//Sindh+Environmental+Protection+Agency%D8%8C+ST-21%D8%8C,+Sector+23+Korangi+Industrial+Area,+Karachi,+Karachi+City,+Sindh%E2%80%AD/@24.8376612,67.0792909,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb33b946a825e95:0xe0803268ac5da982!2m2!1d67.1204909!2d24.837589?entry=ttu"
      // officials:
      //   "Director/ Deputy Director \nAssistant Director \nEnvironmental Inspector ▪ DG (SEPA)  \nExpert Committee",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 23,
      issuingDepartment: "Sindh Environmental Protection Agency (SEPA)",
      address:"ST-21،, Sector 23 Korangi Industrial Area, Karachi, Karachi City, Sindh",
      contactno:"(021) 35065950",
      rlcoID: "SEPA-004",
      details: "Approval of an Environmental Management Plan",
      type: "Other",
      // prevailing: "The Sindh Environmental Protection Act, 2014.",
      // jurisdiction: "Sindh",
      timeLine: "7-10 Days",
      fee: "PKR 40,000",
      logo:SindhEnviromentalProtection,
      l1:"▪ Covering letter;",
      l2:"▪ Hazardous substances management plan; and",
      l3:"▪ Pay order of PKR 50,000/- as prescribed in the Schedule-III of Hazardous Substances Rules, 2014.",
      map:SindhEnvironmentProtectionMaps,
      location:"https://www.google.com/maps/dir//Sindh+Environmental+Protection+Agency%D8%8C+ST-21%D8%8C,+Sector+23+Korangi+Industrial+Area,+Karachi,+Karachi+City,+Sindh%E2%80%AD/@24.8376612,67.0792909,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb33b946a825e95:0xe0803268ac5da982!2m2!1d67.1204909!2d24.837589?entry=ttu"
      // officials:
      //   "Director/ Deputy Director \nDeputy Director (Chemist) \nDeputy Director (Microbiologist) \nDG (SEPA)",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 24,
      issuingDepartment: "Sindh Environmental Protection Agency (SEPA) (Security Fee)",
      address:"ST-21،, Sector 23 Korangi Industrial Area, Karachi, Karachi City, Sindh",
      contactno:"(021) 35065950",
      rlcoID: "SEPA-005",
      details: "Certification of Environmental Lab",
      type: "Certifcate",
      // prevailing:
      //   "1. The Sindh Environmental Protection Act, 2014. \n2. Sindh Environmental Quality Standards (Certification of Environmental Laboratories) Regulations, 2014.",
      // jurisdiction: "Sindh",
      timeLine: "7 Days",
      fee: "Rs.20000",
      logo:SindhEnviromentalProtection,
      l1:"▪ Covering letter;",
      l2:"▪ Hazardous substances management plan; and",
      l3:"▪ Pay order of PKR 50,000/- as prescribed in the Schedule-III of Hazardous Substances Rules, 2014.",
      map:SindhEnvironmentProtectionMaps,
      location:"https://www.google.com/maps/dir//Sindh+Environmental+Protection+Agency%D8%8C+ST-21%D8%8C,+Sector+23+Korangi+Industrial+Area,+Karachi,+Karachi+City,+Sindh%E2%80%AD/@24.8376612,67.0792909,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb33b946a825e95:0xe0803268ac5da982!2m2!1d67.1204909!2d24.837589?entry=ttu"
      // officials:
      //   "Director/ Deputy Director \nAssistant Director \nEnvironmental Inspector ▪ DG (SEPA)  \nExpert Committee",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 24,
      issuingDepartment: "Sindh Environmental Protection Agency (SEPA) (Certificate Fee)",
      address:"ST-21،, Sector 23 Korangi Industrial Area, Karachi, Karachi City, Sindh",
      contactno:"(021) 35065950",
      rlcoID: "SEPA-005",
      details: "Certification of Environmental Lab",
      type: "Certifcate",
      // prevailing:
      //   "1. The Sindh Environmental Protection Act, 2014. \n2. Sindh Environmental Quality Standards (Certification of Environmental Laboratories) Regulations, 2014.",
      // jurisdiction: "Sindh",
      timeLine: "7 Days",
      fee: "Rs.50000",
      logo:SindhEnviromentalProtection,
      l1:"▪ Covering letter;",
      l2:"▪ Hazardous substances management plan; and",
      l3:"▪ Pay order of PKR 50,000/- as prescribed in the Schedule-III of Hazardous Substances Rules, 2014.",
      map:SindhEnvironmentProtectionMaps,
      location:"https://www.google.com/maps/dir//Sindh+Environmental+Protection+Agency%D8%8C+ST-21%D8%8C,+Sector+23+Korangi+Industrial+Area,+Karachi,+Karachi+City,+Sindh%E2%80%AD/@24.8376612,67.0792909,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb33b946a825e95:0xe0803268ac5da982!2m2!1d67.1204909!2d24.837589?entry=ttu"
      // officials:
      //   "Director/ Deputy Director \nAssistant Director \nEnvironmental Inspector ▪ DG (SEPA)  \nExpert Committee",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 25,
      issuingDepartment: "Sindh Environmental Protection Agency (SEPA)",
      address:"ST-21،, Sector 23 Korangi Industrial Area, Karachi, Karachi City, Sindh",
      contactno:"(021) 35065950",
      rlcoID: "SEPA-006",
      details: "Approval of Hospital Waste Management Plan",
      type: "Other",
      timeLine: "7 days",
      fee: "Rs.50000",
      logo:SindhEnviromentalProtection,
      l1:"▪ Covering letter;",
      l2:"▪ Hazardous substances management plan; and",
      l3:"▪ Pay order of PKR 50,000/- as prescribed in the Schedule-III of Hazardous Substances Rules, 2014.",
      map:SindhEnvironmentProtectionMaps,
      location:"https://www.google.com/maps/dir//Sindh+Environmental+Protection+Agency%D8%8C+ST-21%D8%8C,+Sector+23+Korangi+Industrial+Area,+Karachi,+Karachi+City,+Sindh%E2%80%AD/@24.8376612,67.0792909,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb33b946a825e95:0xe0803268ac5da982!2m2!1d67.1204909!2d24.837589?entry=ttu"
    },
    {
      sNo: 26,
      issuingDepartment: "Sindh Building Control Authority (SBCA) (Residential area category I. I-A. II. III. IX & X.)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-001 (A)",
      video:null,
      details: "Approval of proposed building plan for Category-I",
      type: "Other",
      timeLine: "5 days for Cat-I \n&amp; 60 Days for Cat-II, III &amp; IV",
      fee: "Rs.15 PSF",
      

    },
    {
      sNo: 26,
      issuingDepartment: "Sindh Building Control Authority (SBCA) (Residential area category Area category IV. V. VI. VII &. VIII)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-001 (A)",
      details: "Approval of proposed building plan for Category-I",
      type: "Other",
      timeLine: "5 days for Cat-I \n&amp; 60 Days for Cat-II, III &amp; IV",
      fee: "Rs.11 PSF",
      

    },
    {
      sNo: 26,
      issuingDepartment: "Sindh Building Control Authority (SBCA) (Commercial Public Sale Projects Area Cat I. I-A. II. III. IX & X)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-001 (A)",
      details: "Approval of proposed building plan for Category-I",
      type: "Other",
      timeLine: "5 days for Cat-I \n&amp; 60 Days for Cat-II, III &amp; IV",
      fee: "Rs.20 PSF",
      

    },
    {
      sNo: 26,
      issuingDepartment: "Sindh Building Control Authority (SBCA) (Commercial Public Sale Projects Area CatI V.V. VII. VII& VIII)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-001 (A)",
      details: "Approval of proposed building plan for Category-I",
      type: "Other",
      timeLine: "5 days for Cat-I \n&amp; 60 Days for Cat-II, III &amp; IV",
      fee: "Rs.16 PSF",
      

    },
    {
      sNo: 26,
      issuingDepartment: "Sindh Building Control Authority (SBCA) (Industrial Scrutiny fee for industrial plot, which is situated beyond 50km from Municipal Limit All Cat)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-001 (A)",
      details: "Approval of proposed building plan for Category-I",
      type: "Other",
      timeLine: "5 days for Cat-I \n&amp; 60 Days for Cat-II, III &amp; IV",
      fee: "Rs.18 Rs.1",
      

    },
    {
      sNo: 26,
      issuingDepartment: "Sindh Building Control Authority (SBCA) (Amanities)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-001 (A)",
      details: "Approval of proposed building plan for Category-I",
      type: "Other",
      timeLine: "5 days for Cat-I \n&amp; 60 Days for Cat-II, III &amp; IV",
      fee: "Rs.11 PSF",
      

    },
    {
      sNo: 27,
      issuingDepartment: "Sindh Building Control Authority (SBCA) (Residential area category I. I-A. II. III. IX & X.)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-001 (B)",
      video:SBCA_001_B,
      details: "Approval of proposed building plan for Category-II, III, IV",
      type: "Other",
      // prevailing:
      //   "Karachi Building &amp;Town Planning Regulations, 2002 Amended up to Date. 2021",
      // jurisdiction: "Karachi",
      timeLine: "5 days for Cat-I \n&amp; 60 Days for Cat-II, III &amp; IV",
      fee: "Rs.15 PSF",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility) \nDeputy Director \nDirector",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 27,
      issuingDepartment: "Sindh Building Control Authority (SBCA) (Residential area category IV. V. VI. VII &. VIII)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-001 (B)",
      video:SBCA_001_B,

      details: "Approval of proposed building plan for Category-II, III, IV",
      type: "Other",
      // prevailing:
      //   "Karachi Building &amp;Town Planning Regulations, 2002 Amended up to Date. 2021",
      // jurisdiction: "Karachi",
      timeLine: "5 days for Cat-I \n&amp; 60 Days for Cat-II, III &amp; IV",
      fee: "Rs.11 PSF",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility) \nDeputy Director \nDirector",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 27,
      issuingDepartment: "Sindh Building Control Authority (SBCA) (Commercial Public Sale Projects Area Cat I. I-A. II. III. IX & X)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-001 (B)",
      video:SBCA_001_B,

      details: "Approval of proposed building plan for Category-II, III, IV",
      type: "Other",
      // prevailing:
      //   "Karachi Building &amp;Town Planning Regulations, 2002 Amended up to Date. 2021",
      // jurisdiction: "Karachi",
      timeLine: "5 days for Cat-I \n&amp; 60 Days for Cat-II, III &amp; IV",
      fee: "Rs.20 PSF",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility) \nDeputy Director \nDirector",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 27,
      issuingDepartment: "Sindh Building Control Authority (SBCA) (Commercial Public Sale Projects Area CatI V.V. VII. VII& VIII)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-001 (B)",
      video:SBCA_001_B,

      details: "Approval of proposed building plan for Category-II, III, IV",
      type: "Other",
      // prevailing:
      //   "Karachi Building &amp;Town Planning Regulations, 2002 Amended up to Date. 2021",
      // jurisdiction: "Karachi",
      timeLine: "5 days for Cat-I \n&amp; 60 Days for Cat-II, III &amp; IV",
      fee: "Rs.16 PSF",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility) \nDeputy Director \nDirector",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 27,
      issuingDepartment: "Sindh Building Control Authority (SBCA) (Industrial Scrutiny fee for industrial plot, which is situated beyond 50km from Municipal Limit All Cat)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-001 (B)",
      video:SBCA_001_B,

      details: "Approval of proposed building plan for Category-II, III, IV",
      type: "Other",
      // prevailing:
      //   "Karachi Building &amp;Town Planning Regulations, 2002 Amended up to Date. 2021",
      // jurisdiction: "Karachi",
      timeLine: "5 days for Cat-I \n&amp; 60 Days for Cat-II, III &amp; IV",
      fee: "Rs.18 Rs.1",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility) \nDeputy Director \nDirector",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 27,
      issuingDepartment: "Sindh Building Control Authority (SBCA) (Amanities)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-001 (B)",
      video:SBCA_001_B,

      details: "Approval of proposed building plan for Category-II, III, IV",
      type: "Other",
      // prevailing:
      //   "Karachi Building &amp;Town Planning Regulations, 2002 Amended up to Date. 2021",
      // jurisdiction: "Karachi",
      timeLine: "5 days for Cat-I \n&amp; 60 Days for Cat-II, III &amp; IV",
      fee: "Rs.11 PSF",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility) \nDeputy Director \nDirector",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 28,
      issuingDepartment: "Sindh Building Control Authority (SBCA) (Residential area category I. I-A. II. III. IX & X.)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-002",
      details: "Notice of Completion (Category I to IV",
      type: "Other",
      video:SBCA_002,
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002",
      // jurisdiction: "Karachi",
      timeLine: "5 days for Cat-I \n&amp; 60 Days for Cat-II, III &amp; IV",
      fee: " Rs.15 PSF",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility) \nBuilder Inspector \nDeputy Director \nDirector \nDirector General (SBCA)",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 28,
      issuingDepartment: "Sindh Building Control Authority (SBCA) (Residential area category IV. V. VI. VII &. VIII)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-002",
      details: "Notice of Completion (Category I to IV",
      type: "Other",
      video:SBCA_002,

      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002",
      // jurisdiction: "Karachi",
      timeLine: "5 days for Cat-I \n&amp; 60 Days for Cat-II, III &amp; IV",
      fee: "Rs.11 PSF",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility) \nBuilder Inspector \nDeputy Director \nDirector \nDirector General (SBCA)",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 28,
      issuingDepartment: "Sindh Building Control Authority (SBCA) (Commercial Public Sale Projects Area Cat I. I-A. II. III. IX & X)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-002",
      details: "Notice of Completion (Category I to IV",
      type: "Other",
      video:SBCA_002,

      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002",
      // jurisdiction: "Karachi",
      timeLine: "5 days for Cat-I \n&amp; 60 Days for Cat-II, III &amp; IV",
      fee: "Rs.20 PSF",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility) \nBuilder Inspector \nDeputy Director \nDirector \nDirector General (SBCA)",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 28,
      issuingDepartment: "Sindh Building Control Authority (SBCA) (Commercial Public Sale Projects Area CatI V.V. VII. VII& VIII)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-002",
      details: "Notice of Completion (Category I to IV",
      type: "Other",
      video:SBCA_002,

      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002",
      // jurisdiction: "Karachi",
      timeLine: "5 days for Cat-I \n&amp; 60 Days for Cat-II, III &amp; IV",
      fee: "Rs.16 PSF",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility) \nBuilder Inspector \nDeputy Director \nDirector \nDirector General (SBCA)",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 28,
      issuingDepartment: "Sindh Building Control Authority (SBCA) (Industrial Scrutiny fee for industrial plot, which is situated beyond 50km from Municipal Limit All Cat)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-002",
      details: "Notice of Completion (Category I to IV",
      type: "Other",
      video:SBCA_002,

      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002",
      // jurisdiction: "Karachi",
      timeLine: "5 days for Cat-I \n&amp; 60 Days for Cat-II, III &amp; IV",
      fee: " Rs.18 Rs.1",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility) \nBuilder Inspector \nDeputy Director \nDirector \nDirector General (SBCA)",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 28,
      issuingDepartment: "Sindh Building Control Authority (SBCA) (Amanities)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-002",
      details: "Notice of Completion (Category I to IV",
      type: "Other",
      video:SBCA_002,

      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002",
      // jurisdiction: "Karachi",
      timeLine: "5 days for Cat-I \n&amp; 60 Days for Cat-II, III &amp; IV",
      fee: "Rs.11 PSF",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility) \nBuilder Inspector \nDeputy Director \nDirector \nDirector General (SBCA)",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 29,
      issuingDepartment: "Sindh Building Control Authority (SBCA) (Cat A-l)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-003",
      video:SBCA_003,
      details:
        "Additional floor Charges for Category (I) / Betterment Charges for Category (II, III &amp; IV",
      type: "Other",
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002.",
      // jurisdiction: "Karachi",
      timeLine: "15 days for Cat I \nand 60 Days for Cat-II, III &amp; IV",
      fee: "Rs. 5000/-",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility) \nBuilder Inspector \nDeputy Director \nDirector \nDirector General (SBCA)",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 29,
      issuingDepartment: "Sindh Building Control Authority (SBCA) (Cat : 2)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-003",
      video:SBCA_003,
      details:
        "Additional floor Charges for Category (I) / Betterment Charges for Category (II, III &amp; IV",
      type: "Other",
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002.",
      // jurisdiction: "Karachi",
      timeLine: "15 days for Cat I \nand 60 Days for Cat-II, III &amp; IV",
      fee: "Rs. 5000/-",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility) \nBuilder Inspector \nDeputy Director \nDirector \nDirector General (SBCA)",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 29,
      issuingDepartment: "Sindh Building Control Authority (SBCA) (Cat : 3)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-003",
      video:SBCA_003,
      details:
        "Additional floor Charges for Category (I) / Betterment Charges for Category (II, III &amp; IV",
      type: "Other",
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002.",
      // jurisdiction: "Karachi",
      timeLine: "15 days for Cat I \nand 60 Days for Cat-II, III &amp; IV",
      fee: "Rs. 2500/-",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility) \nBuilder Inspector \nDeputy Director \nDirector \nDirector General (SBCA)",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 29,
      issuingDepartment: "Sindh Building Control Authority (SBCA) (Cat : 4)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-003",
      video:SBCA_003,
      details:
        "Additional floor Charges for Category (I) / Betterment Charges for Category (II, III &amp; IV",
      type: "Other",
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002.",
      // jurisdiction: "Karachi",
      timeLine: "15 days for Cat I \nand 60 Days for Cat-II, III &amp; IV",
      fee: "Rs. 2500/-",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility) \nBuilder Inspector \nDeputy Director \nDirector \nDirector General (SBCA)",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 29,
      issuingDepartment: "Sindh Building Control Authority (SBCA) (Cat : 5)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-003",
      video:SBCA_003,
      details:
        "Additional floor Charges for Category (I) / Betterment Charges for Category (II, III &amp; IV",
      type: "Other",
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002.",
      // jurisdiction: "Karachi",
      timeLine: "15 days for Cat I \nand 60 Days for Cat-II, III &amp; IV",
      fee: "Rs. 1500/-",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility) \nBuilder Inspector \nDeputy Director \nDirector \nDirector General (SBCA)",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 29,
      issuingDepartment: "Sindh Building Control Authority (SBCA) (Cat : 6)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-003",
      video:SBCA_003,
      details:
        "Additional floor Charges for Category (I) / Betterment Charges for Category (II, III &amp; IV",
      type: "Other",
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002.",
      // jurisdiction: "Karachi",
      timeLine: "15 days for Cat I \nand 60 Days for Cat-II, III &amp; IV",
      fee: "Rs. 700/-",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility) \nBuilder Inspector \nDeputy Director \nDirector \nDirector General (SBCA)",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 29,
      issuingDepartment: "Sindh Building Control Authority (SBCA) (Cat : 7)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-003",
      video:SBCA_003,
      details:
        "Additional floor Charges for Category (I) / Betterment Charges for Category (II, III &amp; IV",
      type: "Other",
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002.",
      // jurisdiction: "Karachi",
      timeLine: "15 days for Cat I \nand 60 Days for Cat-II, III &amp; IV",
      fee: "Rs. 700/-",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility) \nBuilder Inspector \nDeputy Director \nDirector \nDirector General (SBCA)",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 30,
      issuingDepartment: "Sindh Building Control Authority (SBCA)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-004",
      details: "Renewal of Building Plan for Category (I To IV)",
      type: "Other",
      video:SBCA_004,
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002.",
      // jurisdiction: "Karachi",
      timeLine: "15 days for Cat I \nand 60 Days for Cat-II, III &amp; IV",
      fee: "As per schedule",
      // officials:
      //   "Assistant Director (Technical) \nData Entry Operator (One Window Facility)\nDeputy Director \nDirector",
        // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 31,
      issuingDepartment: "Sindh Building Control Authority (SBCA)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-005",
      details:
        "Addition / Alteration / Revision of Building Plan for Category (I To IV)",
      type: "Other",
      video:SBCA_005,
      // video:SBCA_005,
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
      issuingDepartment: "Sindh Building Control Authority (SBCA)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-006",
      details: "Permit to Demolish Buildings for Category (I To IV)",
      type: "Other",
      video:SBCA_006,
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
      issuingDepartment: "Sindh Building Control Authority (SBCA)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
      rlcoID: "SBCA-007",
      details: "Attestation Fee",
      type: "Other",
      video:SBCA_007,
      // prevailing: "Karachi Building &amp;Town Planning Regulations, 2002.",
      // jurisdiction: "Karachi",
      timeLine: "3 Days",
      // officials: "Deputy Director\nAssistant Director (Technical)",
      // validity: "",                   
      //  renewalFee:""
    },
    {
      sNo: 34,
      issuingDepartment: "Sindh Building Control Authority (SBCA)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
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
      issuingDepartment: "Sindh Building Control Authority (SBCA)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
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
      issuingDepartment: "Sindh Building Control Authority (SBCA)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
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
      issuingDepartment: "Sindh Building Control Authority (SBCA)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
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
      issuingDepartment: "Sindh Building Control Authority (SBCA)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
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
      issuingDepartment: "Sindh Building Control Authority (SBCA)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
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
      issuingDepartment: "Sindh Building Control Authority (SBCA)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
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
      issuingDepartment: "Sindh Building Control Authority (SBCA)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
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
      issuingDepartment: "Sindh Building Control Authority (SBCA)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
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
      issuingDepartment: "Sindh Building Control Authority (SBCA)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
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
      issuingDepartment: "Sindh Building Control Authority (SBCA)",
      address:" V3XF+X36، Civic Center, University Road, Pakistan, Block 14 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh",
      contactno:"(021) 99230329",
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
      address:"Sindh Secretariat Building # 2 (Tughluq House), Ground Floor, Karachi, Pakistan",
      contactno: "00922199211468",
      rlcoID: "AD-001",
      details:
        "Distributor Registration / License (for both Pesticides and fertilizers)",
      type: "Registration",
      // prevailing:
      //   "Pest control Ordinance, 1971 and Rules 1973.\nSindh Fertilizer Control Act, 1994 and Rules, 1999.",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Pesticide Rs.200,000/- ",
      // officials:
      //   "Secretary (Agriculture) \nDirector General (DG) \nTechnical Committee \nSub Committee (Inspector) of Technical Committee",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 45,
      issuingDepartment: "Agriculture Department",
      address:"Sindh Secretariat Building # 2 (Tughluq House), Ground Floor, Karachi, Pakistan",
      contactno: "00922199211468",
      rlcoID: "AD-001",
      details:
        "Distributor Registration / License (for both Pesticides and fertilizers)",
      type: "Registration",
      // prevailing:
      //   "Pest control Ordinance, 1971 and Rules 1973.\nSindh Fertilizer Control Act, 1994 and Rules, 1999.",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Fertilizer Rs. 50,000/-",
      // officials:
      //   "Secretary (Agriculture) \nDirector General (DG) \nTechnical Committee \nSub Committee (Inspector) of Technical Committee",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 46,
      issuingDepartment: "Agriculture Department",
      address:"Sindh Secretariat Building # 2 (Tughluq House), Ground Floor, Karachi, Pakistan",
      contactno: "00922199211468",
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
      issuingDepartment: "Agriculture Department",
      address:"Sindh Secretariat Building # 2 (Tughluq House), Ground Floor, Karachi, Pakistan",
      contactno: "00922199211468",
      rlcoID: "AD-003",
      details: "Market Committee License (Retailer, Wholesaler, Factories)",
      type: "License",
      // prevailing:
      //   "Agricultural Produce Markets Act, 1939. \nAgricultural Produce Market Rules, 1940.",
      // jurisdiction: "Sindh",
      timeLine: "7-10 days",
      fee: "Rs. 1,000 (for Factories - A group) ",
      // officials:
      //   "Concerned Circle In-charge \nInspector \nLicense In-charge \nSecretary (Market Committee)\nChairman (Market Committee)\n",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 47,
      issuingDepartment: "Agriculture Department",
      address:"Sindh Secretariat Building # 2 (Tughluq House), Ground Floor, Karachi, Pakistan",
      contactno: "00922199211468",
      rlcoID: "AD-003",
      details: "Market Committee License (Retailer, Wholesaler, Factories)",
      type: "License",
      // prevailing:
      //   "Agricultural Produce Markets Act, 1939. \nAgricultural Produce Market Rules, 1940.",
      // jurisdiction: "Sindh",
      timeLine: "7-10 days",
      fee: "Rs. 500 (for wholesaler – B group) ",
      // officials:
      //   "Concerned Circle In-charge \nInspector \nLicense In-charge \nSecretary (Market Committee)\nChairman (Market Committee)\n",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 47,
      issuingDepartment: "Agriculture Department",
      address:"Sindh Secretariat Building # 2 (Tughluq House), Ground Floor, Karachi, Pakistan",
      contactno: "00922199211468",
      rlcoID: "AD-003",
      details: "Market Committee License (Retailer, Wholesaler, Factories)",
      type: "License",
      // prevailing:
      //   "Agricultural Produce Markets Act, 1939. \nAgricultural Produce Market Rules, 1940.",
      // jurisdiction: "Sindh",
      timeLine: "7-10 days",
      fee: "Rs. 100 (for Retailers – C group)",
      // officials:
      //   "Concerned Circle In-charge \nInspector \nLicense In-charge \nSecretary (Market Committee)\nChairman (Market Committee)\n",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 48,
      issuingDepartment: "Sindh Industrial Trading Estate (S.I.T.E) Limited",
      address: "W267+673, Estate Ave, SITE Industrial Area, Karachi, Sindh, Sindh Industrial Trading Estate",
      contactno:"(021) 99333152",
      rlcoID: "ICD-008 (A)",
      details: "Allotment of Land/ Plot",
      type: "Other",
      timeLine: "60 days",
      fee:"",
      documentname: "Building By laws",
      documenttype: "Law / Rules / Regulations	",
      downloaddocument: `${process.env.PUBLIC_URL}../assets/sindhkatciabadiact1987.pdf`,
      pdf:BuildingBylaws
    
    },
    {
      sNo: 49,
      issuingDepartment: "Sindh Industrial Trading Estate (S.I.T.E) Limited",
      address: "W267+673, Estate Ave, SITE Industrial Area, Karachi, Sindh, Sindh Industrial Trading Estate",
      contactno:"(021) 99333152",
      rlcoID: "ICD-008 (B)",
      details: "Approval of Building Drawing",
      type: "Other",
      // prevailing:
      //   "Bylaws/ Outline of revised building Bylaws of S.I.T.E Limited",
      // jurisdiction: "Sindh",
      timeLine: "14 days",
      fee:"",
      documentname: "Building By laws",
      documenttype: "Law / Rules / Regulations	",
      downloaddocument: `${process.env.PUBLIC_URL}../assets/sindhkatciabadiact1987.pdf`,
      pdf:BuildingBylaws
      // officials:
      //   "Draft man\nEstate Engineer\nAssistant Engineer \nDeputy Chief Engineer\nChief Enginee",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 50,
      issuingDepartment: "Sindh Industrial Trading Estate (S.I.T.E) Limited",
      address: "W267+673, Estate Ave, SITE Industrial Area, Karachi, Sindh, Sindh Industrial Trading Estate",
      contactno:"(021) 99333152",
      rlcoID: "ICD-008 (C)",
      details: "Approval of Completion (Block) Plan",
      type: "Other",
      // prevailing: "By Laws",
      // jurisdiction: "Sindh",
      timeLine: "7 days",
      fee:"",
      documentname: "Building By laws",
      documenttype: "Law / Rules / Regulations	",
      downloaddocument: `${process.env.PUBLIC_URL}../assets/sindhkatciabadiact1987.pdf`,
      pdf:BuildingBylaws
      // officials:
      //   "Draft man\nEstate Engineer\nAssistant Engineer \nDeputy Chief Engineer\nChief Enginee",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 51,
      issuingDepartment: "Sindh Industrial Trading Estate (S.I.T.E) Limited",
      address: "W267+673, Estate Ave, SITE Industrial Area, Karachi, Sindh, Sindh Industrial Trading Estate",
      contactno:"(021) 99333152",
      rlcoID: "ICD-009",
      details: "Collection of Additional Trade Fee",
      type: "Other",
      // prevailing: "By Laws",
      // jurisdiction: "Sindh",
      timeLine: "14 days",
      fee:"",
      documentname: "Building By laws",
      documenttype: "Law / Rules / Regulations	",
      downloaddocument: `${process.env.PUBLIC_URL}../assets/sindhkatciabadiact1987.pdf`,
      pdf:BuildingBylaws
      // officials:
      //   "Office Superintendent \nAD/ DD/ (Admin)\nDirector (Admin) \nSecretary \nMD",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 52,
      issuingDepartment: "Sindh Industrial Trading Estate (S.I.T.E) Limited",
      address: "W267+673, Estate Ave, SITE Industrial Area, Karachi, Sindh, Sindh Industrial Trading Estate",
      contactno:"(021) 99333152",
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
      issuingDepartment: "Sindh Industrial Trading Estate (S.I.T.E) Limited",
      address: "W267+673, Estate Ave, SITE Industrial Area, Karachi, Sindh, Sindh Industrial Trading Estate",
      contactno:"(021) 99333152",
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
        documentname: "Building By laws",
        documenttype: "Law / Rules / Regulations	",
        downloaddocument: `${process.env.PUBLIC_URL}../assets/sindhkatciabadiact1987.pdf`,
        pdf:BuildingBylaws
    },
    {
      sNo: 54,
      issuingDepartment: "Sindh Industrial Trading Estate (S.I.T.E) Limited",
      address: "W267+673, Estate Ave, SITE Industrial Area, Karachi, Sindh, Sindh Industrial Trading Estate",
      contactno:"(021) 99333152",
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
        documentname: "Building By laws",
        documenttype: "Law / Rules / Regulations	",
        downloaddocument: `${process.env.PUBLIC_URL}../assets/sindhkatciabadiact1987.pdf`,
        pdf:BuildingBylaws
    },
    {
      sNo: 55,
      issuingDepartment: "Sindh Industrial Trading Estate (S.I.T.E) Limited",
      address: "W267+673, Estate Ave, SITE Industrial Area, Karachi, Sindh, Sindh Industrial Trading Estate",
      contactno:"(021) 99333152",
      rlcoID: "ICD-013",
      details: "NOC for Mortgage",
      type: "Other",
      prevailing: "By Laws",
      // jurisdiction: "Sindh",
      timeLine: "14 days",
      fee:"Rs.50,000/-",
      officials:
        "Office Superintendent\nAD/ DD (Admin) \nDirector (Admin) \nSecretary MD",
        // validity: "",                   
        // renewalFee:""
        documentname: "Building By laws",
        documenttype: "Law / Rules / Regulations	",
        downloaddocument: `${process.env.PUBLIC_URL}../assets/sindhkatciabadiact1987.pdf`,
        pdf:BuildingBylaws
    },
    {
      sNo: 56,
      issuingDepartment: "Sindh Industrial Trading Estate (S.I.T.E) Limited",
      address: "W267+673, Estate Ave, SITE Industrial Area, Karachi, Sindh, Sindh Industrial Trading Estate",
      contactno:"(021) 99333152",
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
        documentname: "Building By laws",
        documenttype: "Law / Rules / Regulations	",
        downloaddocument: `${process.env.PUBLIC_URL}../assets/sindhkatciabadiact1987.pdf`,
        pdf:BuildingBylaws
    },
    {
      sNo: 57,
      issuingDepartment: "Sindh Industrial Trading Estate (S.I.T.E) Limited",
      address: "W267+673, Estate Ave, SITE Industrial Area, Karachi, Sindh, Sindh Industrial Trading Estate",
      contactno:"(021) 99333152",
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
        documentname: "Building By laws",
        documenttype: "Law / Rules / Regulations	",
        downloaddocument: `${process.env.PUBLIC_URL}../assets/sindhkatciabadiact1987.pdf`,
        pdf:BuildingBylaws
    },
    {
      sNo: 58,
      issuingDepartment: "Sindh Small Industries Corporation (SSIC)",
      address:"AM-310, Preedy Street, Saddar, Karachi",
      contactno: "(021) 99332167-68",
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
      issuingDepartment: "Sindh Small Industries Corporation (SSIC)",
      address:"AM-310, Preedy Street, Saddar, Karachi",
      contactno: "(021) 99332167-68",
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
      issuingDepartment: "Sindh Small Industries Corporation (SSIC)",
      address:"AM-310, Preedy Street, Saddar, Karachi",
      contactno: "(021) 99332167-68",
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
      issuingDepartment: "Sindh Small Industries Corporation (SSIC)",
      address:"AM-310, Preedy Street, Saddar, Karachi",
      contactno: "(021) 99332167-68",
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
      issuingDepartment: "Sindh Small Industries Corporation (SSIC)",
      address:"AM-310, Preedy Street, Saddar, Karachi",
      contactno: "(021) 99332167-68",
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
      issuingDepartment: "Sindh Small Industries Corporation (SSIC)",
      address:"AM-310, Preedy Street, Saddar, Karachi",
      contactno: "(021) 99332167-68",
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
      issuingDepartment: "Sindh Small Industries Corporation (SSIC)",
      address:"AM-310, Preedy Street, Saddar, Karachi",
      contactno: "(021) 99332167-68",
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
      issuingDepartment: "Sindh Small Industries Corporation (SSIC)",
      address:"AM-310, Preedy Street, Saddar, Karachi",
      contactno: "(021) 99332167-68",
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
      address: "ST-4, Revenue House, Adjacent Dr. Ziauddin Hospital Clifton Block-6, Karachi.",
      contactno: "(021) 111 267 467",
      rlcoID: "BOR-001",
      details: "Issuance of the True Copy of Land Record",
      type: "Other",
      prevailing: "Land revenue Act, 1967",
      video:BOR_001,
      // jurisdiction: "Sindh",
      timeLine: "Same Day",
      fee: "Rs.300 Per Page",
      officials: "Data Processing Assistant \nManager (People Services Center)",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 67,
      issuingDepartment: "Board of Revenue",
      address: "ST-4, Revenue House, Adjacent Dr. Ziauddin Hospital Clifton Block-6, Karachi.",
      contactno: "(021) 111 267 467",
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
      address: "Rashid Minhas Rd, Karachi 75950 Rashid Minhas Rd, Federal B Area Block 16 Gulberg Town, Karachi, Karachi City, Sindh",
      contactno: "(021) 99260342",
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
      issuingDepartment: "District Municipal Corporation (DMC)",
      address: "Rashid Minhas Rd, Karachi 75950 Rashid Minhas Rd, Federal B Area Block 16 Gulberg Town, Karachi, Karachi City, Sindh",
      contactno: "(021) 99260342",
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
      issuingDepartment: "District Municipal Corporation (DMC)",
      address: "Rashid Minhas Rd, Karachi 75950 Rashid Minhas Rd, Federal B Area Block 16 Gulberg Town, Karachi, Karachi City, Sindh",
      contactno: "(021) 99260342",
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
      issuingDepartment: "District Municipal Corporation (DMC)",
      address: "Rashid Minhas Rd, Karachi 75950 Rashid Minhas Rd, Federal B Area Block 16 Gulberg Town, Karachi, Karachi City, Sindh",
      contactno: "(021) 99260342",
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
       issuingDepartment: "District Municipal Corporation (DMC)",
      address: "Rashid Minhas Rd, Karachi 75950 Rashid Minhas Rd, Federal B Area Block 16 Gulberg Town, Karachi, Karachi City, Sindh",
      contactno: "(021) 99260342",
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
      issuingDepartment: "District Municipal Corporation (DMC)",
      address: "Rashid Minhas Rd, Karachi 75950 Rashid Minhas Rd, Federal B Area Block 16 Gulberg Town, Karachi, Karachi City, Sindh",
      contactno: "(021) 99260342",
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
      issuingDepartment: "District Municipal Corporation (DMC)",
      address: "Rashid Minhas Rd, Karachi 75950 Rashid Minhas Rd, Federal B Area Block 16 Gulberg Town, Karachi, Karachi City, Sindh",
      contactno: "(021) 99260342",
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
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-001",
      details: "Transfer/ Mutation of Land",
      type: "Other",
      prevailing:
        "Sindh Local Government Act 2013\n\nThe Sindh People’s\nLocal Council (Land) Rules 1975",
      // jurisdiction: "Karachi",
      timeLine: "15 days",
      fee: "As per schedule",
      officials:
        "▪ Director Land\n▪ Concerned Additional Director\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Assistant Accounts Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 76,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-002",
      details: "NOC for Sale",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 days",
      fee: "As per schedule",
      officials:
        "▪ Director Land\n▪ Concerned Additional Director\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 77,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-003",
      details: "NOC for Mortgage",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 days",
      fee: "As per schedule",
      officials:
        "▪ Director Land\n▪ Concerned Additional Director\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 78,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-004",
      details: "Lease",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "1 month",
      fee: "As per schedule",
      officials:
        "▪ Director Land\n▪ Concerned Additional Director\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Land Inspector/ Surveyor\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 79,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-005",
      details: "Transfer/ Mutation of Land in Orangi Town",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 days",
      fee: "As per schedule",
      officials:
        "▪ Project Director\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 80,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-006",
      details: "NOC for Sale",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 days",
      fee: "Residential Rs.1000",
      officials:
        "▪ Project Director\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 80,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-006",
      details: "NOC for Sale",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 days",
      fee: "Commercial Rs.2000",
      officials:
        "▪ Project Director\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 81,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-007",
      details: "NOC for Mortgage",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 days",
      fee: "Residential Rs.10,000",
      officials:
        "▪ Project Director\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 81,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-007",
      details: "NOC for Mortgage",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 days",
      fee: "Residential Cum Commercial Rs.15,000",
      officials:
        "▪ Project Director\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 81,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-007",
      details: "NOC for Mortgage",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 days",
      fee: "Commercial Rs.20,000",
      officials:
        "▪ Project Director\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 82,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-008",
      details: "Pre-Lease",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "1 month",
      fee: "As per schedule",
      officials:
        "▪ Project Director\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 83,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-009",
      details: "Lease",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "1 month",
      fee: "As per schedule",
      officials:
        "▪ Project Director\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 84,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-010",
      details: "Amalgamation and Subdivision of Land",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 days",
      fee: "Residential Per Sq Yard Rs.100",
      officials:
        "▪ Project Director\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 84,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-010",
      details: "Amalgamation and Subdivision of Land",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 days",
      fee: "Commerical per sq yard Rs.200",
      officials:
        "▪ Project Director\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 85,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC–011",
      details: "Transfer / Mutation of Land in Katchi Abadi",
      type: "Other",
      prevailing:
        "The Sindh Katchi Abadi Act 1987\n\nThe Sindh People\nLocal Council (Land)\nRules, 1975",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "As per schedule",
      officials:
        "▪ Director Katchi Abadi\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Land Surveyor/Inspector\n▪ Scrutiny Committee\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 86,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-012",
      details: "NOC for Sale",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "Resedential Rs.1000",
      officials:
        "▪ Director Katchi Abadi\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Land Surveyor/Inspector\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 86,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-012",
      details: "NOC for Sale",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "Commercial Rs.2000",
      officials:
        "▪ Director Katchi Abadi\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Land Surveyor/Inspector\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 87,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-013",
      details: "NOC for Mortgage",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "Residential Rs.10,000",
      officials:
        "▪ Director Katchi Abadi\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Land Surveyor/Inspector\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 87,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-013",
      details: "NOC for Mortgage",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "Residential Cum Commercial Rs.15,000",
      officials:
        "▪ Director Katchi Abadi\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Land Surveyor/Inspector\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 87,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-013",
      details: "NOC for Mortgage",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "Commercial Rs.20,000",
      officials:
        "▪ Director Katchi Abadi\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Land Surveyor/Inspector\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 88,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-014",
      details: "Lease",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "1 Month",
      fee: "As per schedule",
      officials:
        "▪ Director Katchi Abadi\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Land Surveyor/Inspector\n▪ Scrutiny Committee\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 89,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-015",
      details: "Amalgamation and Subdivision of Land",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "Residential Per Sq Yard Rs.100",
      officials:
        "▪ Director Katchi Abadi\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Land Surveyor/Inspector\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 89,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-015",
      details: "Amalgamation and Subdivision of Land",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "Commerical per sq yard Rs.200",
      officials:
        "▪ Director Katchi Abadi\n▪ Concerned Deputy Director\n▪ Assistant Director\n▪ Land Surveyor/Inspector\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 90,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
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
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-017",
      details:
        "Temporary NOC for temporary installation of\nGenerators outside the premises",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "District Nort Rs.15000",
      officials:
        "▪ Director Anti Encroachment\n▪ Concerned Deputy Director\n▪ Inspector\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 91,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-017",
      details:
        "Temporary NOC for temporary installation of\nGenerators outside the premises",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "District East Rs.10000",
      officials:
        "▪ Director Anti Encroachment\n▪ Concerned Deputy Director\n▪ Inspector\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 91,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-017",
      details:
        "Temporary NOC for temporary installation of\nGenerators outside the premises",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "District Centeral Rs.7500",
      officials:
        "▪ Director Anti Encroachment\n▪ Concerned Deputy Director\n▪ Inspector\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 91,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-017",
      details:
        "Temporary NOC for temporary installation of\nGenerators outside the premises",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "District West Rs.5000",
      officials:
        "▪ Director Anti Encroachment\n▪ Concerned Deputy Director\n▪ Inspector\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 92,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC) (Commercial Building & Complex)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-018",
      details:
        "Temporary NOC for keeping building\nmaterials on roads during construction",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "On Streed Rs.10 Per Sq Ft",
      officials:
        "▪ Director Anti Encroachment\n▪ Concerned Deputy Director\n▪ Inspector\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 92,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC) (Commercial Building & Complex)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-018",
      details:
        "Temporary NOC for keeping building\nmaterials on roads during construction",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "On Footpath Rs.5 Per Sq Ft",
      officials:
        "▪ Director Anti Encroachment\n▪ Concerned Deputy Director\n▪ Inspector\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 92,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC) (Resedential)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-018",
      details:
        "Temporary NOC for keeping building\nmaterials on roads during construction",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "On street Rs.5 Per Sq Ft",
      officials:
        "▪ Director Anti Encroachment\n▪ Concerned Deputy Director\n▪ Inspector\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 92,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC) (Resedential)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-018",
      details:
        "Temporary NOC for keeping building\nmaterials on roads during construction",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "On Footpath Rs.3 Per Sq Ft",
      officials:
        "▪ Director Anti Encroachment\n▪ Concerned Deputy Director\n▪ Inspector\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 93,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KCM-019",
      details: "NOC for film and Ad shooting in Safari Park\nand Karachi Zoo",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "Karachi Zoo & Park Rs.7000 Per Hour",
      officials:
        "▪ Director Safari Park/ Karachi Zoo\n▪ Concerned Additional Director\n▪ Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 93,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KCM-019",
      details: "NOC for film and Ad shooting in Safari Park\nand Karachi Zoo",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "Security Deposit Rs.25000",
      officials:
        "▪ Director Safari Park/ Karachi Zoo\n▪ Concerned Additional Director\n▪ Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 93,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KCM-019",
      details: "NOC for film and Ad shooting in Safari Park\nand Karachi Zoo",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "In Karachi Zoo Rs.10,000 Per Hour",
      officials:
        "▪ Director Safari Park/ Karachi Zoo\n▪ Concerned Additional Director\n▪ Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 93,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KCM-019",
      details: "NOC for film and Ad shooting in Safari Park\nand Karachi Zoo",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "Security Deposit Rs.50,000",
      officials:
        "▪ Director Safari Park/ Karachi Zoo\n▪ Concerned Additional Director\n▪ Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 93,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KCM-019",
      details: "NOC for film and Ad shooting in Safari Park\nand Karachi Zoo",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "Karachi Safari Park Rs.7,000",
      officials:
        "▪ Director Safari Park/ Karachi Zoo\n▪ Concerned Additional Director\n▪ Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 93,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KCM-019",
      details: "NOC for film and Ad shooting in Safari Park\nand Karachi Zoo",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "Secuirty Deposit Rs.25000",
      officials:
        "▪ Director Safari Park/ Karachi Zoo\n▪ Concerned Additional Director\n▪ Deputy Director\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 94,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-020",
      details: "Outdoor Advertisement on major Bridges and underpass",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "As per schedule",
      officials:
        "▪ Director Advertisement\n▪ Metropolitan Commissioner\n▪ Deputy Director\n▪ Inspector\n▪ Engineering Department\n▪ Assistant Director\n▪ Assistant Account Officer",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 95,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
      rlcoID: "KMC-021",
      details: "Road Cutting Permission",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Karachi",
      timeLine: "15 Days",
      fee: "As per schedule",
      officials:
        "▪ Director General (Technical Services)\n▪ Concerned Chief Engineer \n▪ Superintendent Engineer (Engineering Department)\n▪ Executive Engineer (Engineering Department)\n▪ Assistant Executive Engineer \n▪ Superintendent Engineer (Quality Control)\n▪ Executive Engineer (Quality Control)\n▪ Account Branch",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 96,
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
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
      issuingDepartment: "Karachi Metropolitan Corporation (KMC)",
      address: "Adhumal Oodharam Quarter, Karachi, Karachi City, Sindh",
      contactno: "(021) 99215125",
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
      address: "3rd Floor, Statelife Building No.3، Dr. Opposite CM House، Doctor Ziauddin Ahmed Road, Kashmir Mujahid Colony, Karachi, Karachi City, Sindh",
      contactno: "(021) 99206272",
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
      issuingDepartment: "Energy Department",
      address: "3rd Floor, Statelife Building No.3، Dr. Opposite CM House، Doctor Ziauddin Ahmed Road, Kashmir Mujahid Colony, Karachi, Karachi City, Sindh",
      contactno: "(021) 99206272",
      rlcoID: "ED-002\n",
      details: "Competency Certificate for Wireman",
      type: "Certificate",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "NA",
      fee: "Rs.100",
      officials: "Electric Inspector",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 99,
      issuingDepartment: "Energy Department",
      address: "3rd Floor, Statelife Building No.3، Dr. Opposite CM House، Doctor Ziauddin Ahmed Road, Kashmir Mujahid Colony, Karachi, Karachi City, Sindh",
      contactno: "(021) 99206272",
      rlcoID: "ED-002\n",
      details: "Competency Certificate for Wireman",
      type: "Certificate",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "NA",
      fee: "Late Fee: Rs.150",
      officials: "Electric Inspector",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 100,
      issuingDepartment: "Energy Department",
      address: "3rd Floor, Statelife Building No.3، Dr. Opposite CM House، Doctor Ziauddin Ahmed Road, Kashmir Mujahid Colony, Karachi, Karachi City, Sindh",
      contactno: "(021) 99206272",
      rlcoID: "ED-003\n",
      details: "Competency Certificate for Electric Supervisor",
      type: "Certificate",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "NA",
      fee: "Rs.500",
      officials: "Electric Inspector",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 100,
      issuingDepartment: "Energy Department",
      address: "3rd Floor, Statelife Building No.3، Dr. Opposite CM House، Doctor Ziauddin Ahmed Road, Kashmir Mujahid Colony, Karachi, Karachi City, Sindh",
      contactno: "(021) 99206272",
      rlcoID: "ED-003\n",
      details: "Competency Certificate for Electric Supervisor",
      type: "Certificate",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "NA",
      fee: "Late Fee Rs.750",
      officials: "Electric Inspector",
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 101,
      issuingDepartment: "Energy Department",
      address: "3rd Floor, Statelife Building No.3، Dr. Opposite CM House، Doctor Ziauddin Ahmed Road, Kashmir Mujahid Colony, Karachi, Karachi City, Sindh",
      contactno: "(021) 99206272",
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
      issuingDepartment: "Energy Department",
      address: "3rd Floor, Statelife Building No.3، Dr. Opposite CM House، Doctor Ziauddin Ahmed Road, Kashmir Mujahid Colony, Karachi, Karachi City, Sindh",
      contactno: "(021) 99206272",
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
      issuingDepartment: "Energy Department",
      address: "3rd Floor, Statelife Building No.3، Dr. Opposite CM House، Doctor Ziauddin Ahmed Road, Kashmir Mujahid Colony, Karachi, Karachi City, Sindh",
      contactno: "(021) 99206272",
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
      issuingDepartment: "Energy Department",
      address: "3rd Floor, Statelife Building No.3، Dr. Opposite CM House، Doctor Ziauddin Ahmed Road, Kashmir Mujahid Colony, Karachi, Karachi City, Sindh",
      contactno: "(021) 99206272",
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
      address:" Plot no. G, 270, Jamal Goth Landhi Karachi Mansehra Colony Mansehra Colony Sector 32 Landhi Town, Karachi, Karachi City, Sindh",
      contactno:"(021) 99243813",
      rlcoID: "SESSI-001",
      details: "Registration of an Establishments (R-1)\n",
      type: "Registration",
      prevailing: "Sindh Employees SocialSecurityAct,2016, amended \n2018",
      // jurisdiction: "Sindh",
      timeLine: "Same Day",
      fee:"",
      officials: "▪ Director C&amp;B\n▪ Director IT\n",
      map:SindhEmployeesSocialSecurityInstitution,
      location:"https://www.google.com/maps/search/Sindh+Employees+Social+Security+Institution+(SESSI)+Plot+no.+G,+270,+Jamal+Goth+Landhi+Karachi+Mansehra+Colony+Mansehra+Colony+Sector+32+Landhi+Town,+Karachi,+Karachi+City,+Sindh/@24.8612297,67.1223026,11.5z?entry=ttu"
      // validity: "",                   
      // renewalFee:""
    },
    {
      sNo: 106,
      issuingDepartment:
        "Excise, Taxation &amp; Narcotics Control Department\n",
        address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
        contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-001",
      details: "Motor vehicle Registration",
      type: "Registration",
      prevailing: "Motor Vehicle Registration Act, 1965",
      // jurisdiction: "Sindh",
      timeLine: "7 days",
      fee: "As per schedule",
      officials:
        "▪ Counter In-Charge\n▪ Head Cashier \n▪ Motor Registration Authority\n▪ Staff from Card Section\n▪ Staff from Return File Section\n▪ Staff from Scanning Section",
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 107,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n (Motorcycle)",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-002",
      details: "Transfer on Motor vehicle",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "7 days",
      fee: "Rs.200/-",
      officials:
        '"▪ Counter In-Charge\n▪ Head Cashier \n▪ Motor Registration Authority\n▪ Staff from Card Section\n▪ Staff from Return File Section\n▪ Staff from Scanning Section"',
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 107,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n (M/Cars, Jeeps, etc. up to 800 cc Engine Power)",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-002",
      details: "Transfer on Motor vehicle",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "7 days",
      fee: "Rs.800/-",
      officials:
        '"▪ Counter In-Charge\n▪ Head Cashier \n▪ Motor Registration Authority\n▪ Staff from Card Section\n▪ Staff from Return File Section\n▪ Staff from Scanning Section"',
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 107,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n (M/Cars, Jeeps, etc. from 801 cc to 2,000 cc Engine Power)",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-002",
      details: "Transfer on Motor vehicle",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "7 days",
      fee: "Rs.1,000/-",
      officials:
        '"▪ Counter In-Charge\n▪ Head Cashier \n▪ Motor Registration Authority\n▪ Staff from Card Section\n▪ Staff from Return File Section\n▪ Staff from Scanning Section"',
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 107,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n (Rickshaws)",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-002",
      details: "Transfer on Motor vehicle",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "7 days",
      fee: " Rs.400/-",
      officials:
        '"▪ Counter In-Charge\n▪ Head Cashier \n▪ Motor Registration Authority\n▪ Staff from Card Section\n▪ Staff from Return File Section\n▪ Staff from Scanning Section"',
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 107,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n (Tractors)",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-002",
      details: "Transfer on Motor vehicle",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "7 days",
      fee: " Rs.1,000/-",
      officials:
        '"▪ Counter In-Charge\n▪ Head Cashier \n▪ Motor Registration Authority\n▪ Staff from Card Section\n▪ Staff from Return File Section\n▪ Staff from Scanning Section"',
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 108,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n (Big Vehicle)",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-003",
      details: "Alteration of Vehicle",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "7 days",
      fee: "Rs.1,500/-",
      officials:
        '▪ Counter In-Charge\n▪ Head Cashier \n▪ Motor Registration Authority\n▪ Staff from Card Section\n▪ Staff from Return File Section\n▪ Staff from Scanning Section"""',
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 108,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n (Small Vehicle)",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-003",
      details: "Alteration of Vehicle",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "7 days",
      fee: "Rs.1,250/-",
      officials:
        '▪ Counter In-Charge\n▪ Head Cashier \n▪ Motor Registration Authority\n▪ Staff from Card Section\n▪ Staff from Return File Section\n▪ Staff from Scanning Section"""',
        // validity: "",                   
        // renewalFee:""
    },
    {
      sNo: 109,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
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
      documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 110,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-005",
      details: "Professional Tax Registration\n",
      type: "Registration",
      prevailing:
        "▪ Sindh Finance Act 1964\n▪ Sindh Professions, Trades, Calling &amp; Employment \nTax  Rules, 1976",
      // jurisdiction: "Sindh",
      timeLine: "Same Day",
      fee: "As per schedule",
      officials:
        "▪ Chief Minister, Sindh\n▪ Chief Secretary/ Secretary \n▪ Section Officer \n▪ Director General Excise \n▪ Regional Director \n▪ Concerned District Officer\n▪ Concerned Assistant ETO/Concerned Inspector",
        // validity: "",                   
        // renewalFee:""
        documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 111,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-006",
      details: "Distillery License for Intoxicating Liquor",
      type: "License",
      prevailing:
        "▪ Prohibition (Enforcement of Hadd) Order 1979\n▪ Sindh Prohibition Rules 1979",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Distillery License for intoxicating Liquor 30,000/- per annum",
      officials:
        "▪ Chief Minister, Sindh\n▪ Chief Secretary/ Secretary \n▪ Section Officer \n▪ Director General Excise \n▪ Regional Director \n▪ Concerned District Officer\n▪ Concerned Assistant ETO/Concerned Inspector",
        // validity: "",                   
        // renewalFee:""
        documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 111,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-006",
      details: "Distillery License for Intoxicating Liquor",
      type: "License",
      prevailing:
        "▪ Prohibition (Enforcement of Hadd) Order 1979\n▪ Sindh Prohibition Rules 1979",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Establishment Charges 3,500,000/- per annum",
      officials:
        "▪ Chief Minister, Sindh\n▪ Chief Secretary/ Secretary \n▪ Section Officer \n▪ Director General Excise \n▪ Regional Director \n▪ Concerned District Officer\n▪ Concerned Assistant ETO/Concerned Inspector",
        // validity: "",                   
        // renewalFee:""
        documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 112,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-007",
      details: "Manufacturing of PMFL License\n",
      type: "License",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Manufacturing of PMFL License 30,000/- per annum",
      officials:"",
      // validity: "",                   
      // renewalFee:""
      documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 112,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-007",
      details: "Manufacturing of PMFL License\n",
      type: "License",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Establishment Charges 3,500,000/- per annum",
      officials:"",
      // validity: "",                   
      // renewalFee:""
      documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 113,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-008",
      details: "Brewery License for Beer",
      type: "License",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Establishing a Brewery for Beer 30,000/- per annum",
      officials:"",
      // validity: "",                   
      documenttype: "Law / Rules / Regulations	",

      // renewalFee:""
    },
    {
      sNo: 113,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-008",
      details: "Brewery License for Beer",
      type: "License",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Establishment Charges 35,00,000/- per annum",
      officials:"",
      // validity: "",                   
      documenttype: "Law / Rules / Regulations	",

      // renewalFee:""
    },
    {
      sNo: 114,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
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
      documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 115,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
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
      documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 116,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-011",
      details: "Distillery License for Manufacturing of Ethanol\n",
      type: "License",
      prevailing:
        "▪ The Sindh Abkari act 1878\n▪ Sindh Excise Manual Volume-I\n",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Distillery License for manufacturing of Ethanol 30,000/- per annum",
      officials:
        "▪ Regional Director \n▪ District Officer (DO)/ETO\n▪ Assistant ETO/ Inspector \n▪ Director General (DG) Excise",
        // validity: "",                   
        // renewalFee:""
        documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 116,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-011",
      details: "Distillery License for Manufacturing of Ethanol\n",
      type: "License",
      prevailing:
        "▪ The Sindh Abkari act 1878\n▪ Sindh Excise Manual Volume-I\n",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Establishment Fee 3,500,000/- per annum",
      officials:
        "▪ Regional Director \n▪ District Officer (DO)/ETO\n▪ Assistant ETO/ Inspector \n▪ Director General (DG) Excise",
        // validity: "",                   
        // renewalFee:""
        documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 117,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
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
      documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 118,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
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
      documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 119,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
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
      documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 120,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-015",
      details: "Denatured Spirit License for Retail",
      type: "License",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Denatured Spirit License for Retail-Sale 2400/- per anum (License fee) and 2400/- per anum (Bottling Fee)",
      officials:"",
      // validity: "",                   
      // renewalFee:""
      documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 121,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-016",
      details: "Intoxicants (Drugs) Manufacturing License",
      type: "License",
      prevailing:
        '"▪ Prohibition (Enforcement of Hadd) Order 1979\n▪ Sindh Prohibition Rules 1979"\n\n\n\n',
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Denatured Spirit License for Retail-Sale 2400/- per anum (License fee) and 2400/- per anum (Bottling Fee)",
      officials:"",
      // validity: "",                   
      // renewalFee:""
      documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 122,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
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
      documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 123,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-018",
      details: "Permit for Hotels for RetailSale of Intoxicating Liquor\n",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "As per schedule",
      officials:
        '▪ Chief Minister, Sindh\n▪ Chief Secretary/ Secretary \n▪ Section Officer \n▪ Director General Excise \n▪ Regional Director \n▪ Concerned District Officer\n▪ Concerned Assistant ETO/Concerned Inspector"\n\n\n\n',
        // validity: "",                   
        documenttype: "Law / Rules / Regulations	",

        // renewalFee:""
    },
    {
      sNo: 124,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
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
        documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 125,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
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
        documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 126,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
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
        documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 127,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-022",
      details:
        "Permission to use Rectified Spirit in the Manufacturing \nof Spirituous / Medicinal / Homeopathic / Toilet Preparation",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Permission to use Rectified Spirit in the Manufacturing of Spirituous / Medicinal/ Toilet  Preparation 15,000/- per annum",
      officials:
        "▪ Regional Director \n▪ District Officer (DO)/ETO\n▪ Assistant ETO/ Inspector \n▪ Director General (DG) Excise",
        // validity: "",                   
        // renewalFee:""
        documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 127,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-022",
      details:
        "Permission to use Rectified Spirit in the Manufacturing \nof Spirituous / Medicinal / Homeopathic / Toilet Preparation",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Permission to use Rectified Spirit in the Manufacturing Homeopathic Medicine Preparation 600/- per annum ",
      officials:
        "▪ Regional Director \n▪ District Officer (DO)/ETO\n▪ Assistant ETO/ Inspector \n▪ Director General (DG) Excise",
        // validity: "",                   
        // renewalFee:""
        documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 127,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-022",
      details:
        "Permission to use Rectified Spirit in the Manufacturing \nof Spirituous / Medicinal / Homeopathic / Toilet Preparation",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Establishment Charges 3,500,000/- per anum",
      officials:
        "▪ Regional Director \n▪ District Officer (DO)/ETO\n▪ Assistant ETO/ Inspector \n▪ Director General (DG) Excise",
        // validity: "",                   
        // renewalFee:""
        documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 128,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-023",
      details:
        "Transport Permit (Buyer of the PMFL, Beer, Denatured \nSpirit, Methanol)",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "3 Days",
      fee: "Transport Permit for Beer 76/- Per Liter ",
      officials:
        "▪ District Officer \n▪ Deputy Director \n▪ Director \n▪ Director General",
        // validity: "",                   
        // renewalFee:""
        documenttype: "Law / Rules / Regulations",

    },
    {
      sNo: 128,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-023",
      details:
        "Transport Permit (Buyer of the PMFL, Beer, Denatured \nSpirit, Methanol)",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "3 Days",
      fee: "Transport Permit for PMFL 2,160/- per Proof Gallon",
      officials:
        "▪ District Officer \n▪ Deputy Director \n▪ Director \n▪ Director General",
        // validity: "",                   
        // renewalFee:""
        documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 128,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-023",
      details:
        "Transport Permit (Buyer of the PMFL, Beer, Denatured \nSpirit, Methanol)",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "3 Days",
      fee: "Transport Permit for Denatured Spirit 10/- per Bulk Gallon Vend Fee 6/- per Bulk Gallon",
      officials:
        "▪ District Officer \n▪ Deputy Director \n▪ Director \n▪ Director General",
        // validity: "",                   
        // renewalFee:""
        documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 128,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-023",
      details:
        "Transport Permit (Buyer of the PMFL, Beer, Denatured \nSpirit, Methanol)",
      type: "Other",
      prevailing:"",
      // jurisdiction: "Sindh",
      timeLine: "3 Days",
      fee: "Transport Permit for Methanol 10/- per bulk gallon Vend Fee 6/- per Bulk Gallon",
      officials:
        "▪ District Officer \n▪ Deputy Director \n▪ Director \n▪ Director General",
        // validity: "",                   
        // renewalFee:""
        documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 129,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-023 B",
      details:
        "Retail of Transport Permit (buyer of the PMFL, \nBeer, Denatured Spirit, Methanol)",
      type: "Other",
      prevailing:
        '"▪ The Sindh Abkari act 1878\n▪ Sindh Excise Manual Volume-I\n\n\n',
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "fee challan of Rs. 60/-",
      officials:
        "▪ District Officer \n▪ Deputy Director \n▪ Director \n▪ Director General",
        // validity: "",                   
        // renewalFee:""
        documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 129,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-023 B",
      details:
        "Retail of Transport Permit (buyer of the PMFL, \nBeer, Denatured Spirit, Methanol)",
      type: "Other",
      prevailing:
        '"▪ The Sindh Abkari act 1878\n▪ Sindh Excise Manual Volume-I\n\n\n',
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Transport Permit for Beer Rs.02/- per bottle of Beer",
      officials:
        "▪ District Officer \n▪ Deputy Director \n▪ Director \n▪ Director General",
        // validity: "",                   
        // renewalFee:""
        documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 129,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-023 B",
      details:
        "Retail of Transport Permit (buyer of the PMFL, \nBeer, Denatured Spirit, Methanol)",
      type: "Other",
      prevailing:
        '"▪ The Sindh Abkari act 1878\n▪ Sindh Excise Manual Volume-I\n\n\n',
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Transport Permit for PMFL Rs.15/- per unit of PMFL",
      officials:
        "▪ District Officer \n▪ Deputy Director \n▪ Director \n▪ Director General",
        // validity: "",                   
        // renewalFee:""
        documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 129,
      issuingDepartment:
      "Excise, Taxation &amp; Narcotics Control Department\n",
      address:"Tughlaq House Sindh Secretariat Karachi Pakistan",
      contactno:"(021) 99231410",
      rlcoID: "ET&amp;NC-023 B",
      details:
        "Retail of Transport Permit (buyer of the PMFL, \nBeer, Denatured Spirit, Methanol)",
      type: "Other",
      prevailing:
        '"▪ The Sindh Abkari act 1878\n▪ Sindh Excise Manual Volume-I\n\n\n',
      // jurisdiction: "Sindh",
      timeLine: "1 Month",
      fee: "Transport Permit for Methanol Rs.10/- per bulk Gallon and Vend fee of Rs. 6 /- per bulk Gallon (both collected together)",
      officials:
        "▪ District Officer \n▪ Deputy Director \n▪ Director \n▪ Director General",
        // validity: "",                   
        // renewalFee:""
        documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 130,
      issuingDepartment: "Sindh Revenue Board",
      rlcoID: "SRB-001",
      details: "Sindh Sales Tax on Services (SST)\n\n",
      type: "Registration",
      address:"Shaheen Complex, 3rd, 6th, 9th and 12th floor, Civil Lines, Karachi, Karachi City, Sindh",
      contactno:"(021) 99217800",
      prevailing:
        "▪ . Sindh Sales Tax on Services Act, 2011\n▪ Sales Tax on Services Rules, 2011",
      // jurisdiction: "Sindh",
      video:SRB_001,
      timeLine: "Same Day",
      fee: "Free of cost",
      officials: "▪ Deputy Commissioner (IT)",
      // validity: "",                   
      // renewalFee:""
      documenttype: "Law / Rules / Regulations	",
      map:SindhRevenueBoard,
      location:"https://www.google.com/maps/place/Sindh+Revenue+Board+Karachi/@24.8583667,67.0103355,13z/data=!3m1!5s0x3eb33e0bb3bf44e7:0xde47060d5f31a781!4m10!1m2!2m1!1sSindh+Revenue+Board!3m6!1s0x3eb33e0a54d24ab3:0xa79dcdbd2b4625a!8m2!3d24.8508901!4d67.0194336!15sChNTaW5kaCBSZXZlbnVlIEJvYXJkkgERZ292ZXJubWVudF9vZmZpY2XgAQA!16s%2Fg%2F11bccgny25?entry=ttu"

    },
    {
      sNo: 131,
      issuingDepartment: "Local Government Department",
      rlcoID: "",
      details: "",
      type: "",
      prevailing:"",
      address:"Kamal Atta turk Road Karachi،, Local Government, Rural Development,PHE & HTP Departmen, Sindh Secretariat, Government of Sindh, Shahrah-e-Kemal Ataturk, Burns Road, Karachi, Karachi City, Sindh",
      contactno:"(021) 99211536",
      // jurisdiction: "",
      timeLine: "",
      fee:"",
      officials:"",
      // validity: "",                   
      // renewalFee:""
      documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 132,
      issuingDepartment: "Karachi Water &amp; Sewerage Board ",
      address:"Head office behind civic center old KBCA Building , Gulshan Iqbal",
      contactno:"(021) 99230317",
      rlcoID: "KWSB-001",
      details: "Sanction Letter for Water Connection (Consumer and Bulk)",
      type: "Other",
      prevailing:
        "Karachi Water and Sewerage Board Standard \nOperating Procedures 2016 ",
      // jurisdiction: "Karachi",
      timeLine: 21,
      fee: "As per schedule",
      officials:
        "▪ DMD Technical Services\n▪ SUB- Engineer \n▪ RRG Department\n▪ MD KWSB",
        // validity: "",                   
        // renewalFee:""
        documenttype: "Law / Rules / Regulations	",

    },
    {
      sNo: 133,
      issuingDepartment: "Karachi Water &amp; Sewerage Board ",
      address:"Head office behind civic center old KBCA Building , Gulshan Iqbal",
      contactno:"(021) 99230317",
      rlcoID: "KWSB-002",
      details: "License for Sub-soil Water Supply",
      type: "License",
      prevailing:
        "Sub-Soil Water (Extraction and Consumption) \nRegulations 2018",
      // jurisdiction: "Karachi",
      timeLine: "Varies",
      fee: "Non-refundable license fee per borehole Rs. 100,000/-",
      officials:
        "▪ Superintending Engineer\n▪ Committee\n▪ Sub- Engineer \n▪ RRG Department\n▪ MD KWSB\n",
        // validity: "",                   
        // renewalFee:""
        documenttype: "Law / Rules / Regulations	",
        map:KarachiWaterSewerageBoard,
        location:"https://www.google.com/maps/place/Karachi+Water+Sewerage+Board/@24.9275284,67.079292,14z/data=!4m10!1m2!2m1!1sKarachi+Water+Sewerage+Board+!3m6!1s0x3eb33f352288be1f:0x2ac113172fa92e92!8m2!3d24.9248042!4d67.0926816!15sChxLYXJhY2hpIFdhdGVyIFNld2VyYWdlIEJvYXJkkgERZ292ZXJubWVudF9vZmZpY2XgAQA!16s%2Fg%2F11xk1wbnb?entry=ttu"

    },
    {
      sNo: 133,
      issuingDepartment: "Karachi Water &amp; Sewerage Board ",
      address:"Head office behind civic center old KBCA Building , Gulshan Iqbal",
      contactno:"(021) 99230317",
      rlcoID: "KWSB-002",
      details: "License for Sub-soil Water Supply",
      type: "License",
      prevailing:
        "Sub-Soil Water (Extraction and Consumption) \nRegulations 2018",
      // jurisdiction: "Karachi",
      timeLine: "Varies",
      fee: "One-time advance security deposit per borehole Rs. 90,000/-",
      officials:
        "▪ Superintending Engineer\n▪ Committee\n▪ Sub- Engineer \n▪ RRG Department\n▪ MD KWSB\n",
        // validity: "",                   
        // renewalFee:""
        documenttype: "Law / Rules / Regulations	",
        map:KarachiWaterSewerageBoard,
        location:"https://www.google.com/maps/place/Karachi+Water+Sewerage+Board/@24.9275284,67.079292,14z/data=!4m10!1m2!2m1!1sKarachi+Water+Sewerage+Board+!3m6!1s0x3eb33f352288be1f:0x2ac113172fa92e92!8m2!3d24.9248042!4d67.0926816!15sChxLYXJhY2hpIFdhdGVyIFNld2VyYWdlIEJvYXJkkgERZ292ZXJubWVudF9vZmZpY2XgAQA!16s%2Fg%2F11xk1wbnb?entry=ttu"

    },
    {
      sNo: 133,
      issuingDepartment: "Karachi Water &amp; Sewerage Board ",
      address:"Head office behind civic center old KBCA Building , Gulshan Iqbal",
      contactno:"(021) 99230317",
      rlcoID: "KWSB-002",
      details: "License for Sub-soil Water Supply",
      type: "License",
      prevailing:
        "Sub-Soil Water (Extraction and Consumption) \nRegulations 2018",
      // jurisdiction: "Karachi",
      timeLine: "Varies",
      fee: "Monthly license fee per bore hole Rs. 30,000/-",
      officials:
        "▪ Superintending Engineer\n▪ Committee\n▪ Sub- Engineer \n▪ RRG Department\n▪ MD KWSB\n",
        // validity: "",                   
        // renewalFee:""
        documenttype: "Law / Rules / Regulations	",
        map:KarachiWaterSewerageBoard,
        location:"https://www.google.com/maps/place/Karachi+Water+Sewerage+Board/@24.9275284,67.079292,14z/data=!4m10!1m2!2m1!1sKarachi+Water+Sewerage+Board+!3m6!1s0x3eb33f352288be1f:0x2ac113172fa92e92!8m2!3d24.9248042!4d67.0926816!15sChxLYXJhY2hpIFdhdGVyIFNld2VyYWdlIEJvYXJkkgERZ292ZXJubWVudF9vZmZpY2XgAQA!16s%2Fg%2F11xk1wbnb?entry=ttu"

    },
  ];

export default function RegulatoryCatalogue() {
  const gridRef = useRef(null);
  const [dataForGrid, setdataForGrid] = useState(arr)
  const [dataForGridClone,] = useState(arr)
  const [licenceData, setLicenceData] = useState({});
  const [openModal,setOpenModal] = useState(false)
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

  const openDetailModal = () => {
    setOpenModal(true)
  }

  const closeDetailModal = () => {
    setOpenModal(false)
  }
 
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const filterData = (event) => {
    try {
         ;
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
const GetGridData = (data) =>{
  try {
    
    setLicenceData(data);
  } catch (error) {
    console.log(error);
  }
};


// Print the filtered data
  return (
    <>
   {openModal && <DetailModal licenceData={licenceData} openDetailModal={openDetailModal} closeDetailModal={closeDetailModal} dataForGrid={dataForGrid} GetGridData={GetGridData}/>}
           {/* <GenericHeader /> */}
           {windowWidth <=500 ? <MobileHeaderGeneric/>: <GenericHeader />}
           {windowWidth <= 500 ? (
        <div></div>
      ) : (
        <div style={{ height: "120px" }}></div>
      )}
{/*       
      <div
        className="row mt-2"
        style={windowWidth <=500?{paddingTop:10}:{
          height: "300px",
          width: "100%",
          // background: "#F5F5F5",
          paddingTop: "155px",
        }}
      >
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <h1 className={window.innerWidth <= 540 ?"ReportRegulatorybefore":"mainHeading"} >Regulatory Directory of Government of Sindh</h1>
        </div>
        <div className="row ">
          <div className="col-md-8 m-md-auto">
            <p className="h5 text-center">This Portal provides you access to Regulatory Details such as Name of License, Registration, Permit, and Certificate, It's Applicable Fee, Timelines, Laws. For any further information contact us.</p>
          </div>
        </div> */}
        {/* <div className="col-lg-2"></div> */}
      {/* </div> */}
      <div
        className="row "
        style={{
          // height: "250px",
          background: "",
          // backgroundColor:"red"
        }}
      >
        <div
          className="col-lg-12"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
            // textAlign:"justify",
            // margin:"auto",
            position:"relative"
          }}
        >
       <div className="" >
       <h1 className={window.innerWidth <= 540 ?"catalog  mb-4":"catalog "}>Regulatory Directory of Government of Sindh</h1>
         <p
            className={window.innerWidth <= 540 ? "mobileparaforfeedback" : "feedbackpara col-8"} style={{fontSize:window.innerWidth === 280 || window.innerWidth ===320 ? "17.5px": " ",textAlign:"center",}}
          >
This Portal provides you access to Regulatory Details such as Name of License, Registration, Permit, and Certificate, It's Applicable Fee, Timelines, Laws. For any further information contact us.
          </p>
       </div>
        </div>
      </div>
      {/* <div
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
      </div> */}
      <div className="row "  style={windowWidth <=500?{ display: "flex",flexDirection:"row-reverse",marginTop:20} :{ display: "flex", justifyContent: "end" }} >
        <div
          className=" col col-md-10"
          style={ windowWidth <=500?{display: "flex",alignItems:"center"} :{ display: "flex", justifyContent: "end" }}
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
        <div className="col col-md-2">
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
          <DemoGrid ref={gridRef} data={dataForGrid}  setOpenModal={setOpenModal} openModal={openModal} GetGridData={GetGridData} windowWidth={windowWidth} setWindowWidth={setWindowWidth}/>
        </div>
      </div>
      <Footer />
    </>
  );
}
 