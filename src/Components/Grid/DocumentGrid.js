import React, { useState } from "react";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import JqxGrid, { jqx } from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";
import sindh from "../../assets/sindhkatciabadiact1987.pdf"

///////////// Labour Department ////////////////

import Amendment from "../../assets/PDF/Amendment.pdf"
import Amendment2 from "../../assets/PDF/Amendment2.pdf"
import SindhFactoriesRules2021publishedingazetteon22August2022 from "../../assets/PDF/SindhFactoriesRules2021publishedingazetteon22August,2022.pdf"
import SindhShopsEstablishmentAct from "../../assets/PDF/SindhShops&EstablishmentAct,2015.pdf";
import TheSindhFactoriesAct2015 from "../../assets/PDF/TheSindhFactoriesAct,2015.pdf"

/////////////sindh revenue board//////////

import SindhSalesTaxonServicesAct2011amended from '../../assets/PDF/SindhSalesTaxonServicesAct2011amended2021.pdf'
import SindhSalesTaxonServicesRules2011 from "../../assets/PDF/SindhSalesTaxonServicesRules2011.pdf"

//////////SITE//////////

import SINDHEMPLOYEESSOCIALSECURITYAMENDMENTACT2018 from  "../../assets/PDF/SINDHEMPLOYEESSOCIALSECURITYAMENDMENTACT2018.pdf"
import SindhEmployeesSocialSecurityAct2016 from "../../assets/PDF/SindhEmployeesSocialSecurityAct2016.pdf"

//////////////Sindh Environmental Protection Agency (SEPA)/////
import TheHazardousSubstancesRule2014 from "../../assets/PDF/SEPA/TheHazardousSubstancesRule2014.pdf"
import THESINDHENVIRONMENTALPROTECTIONACT2014 from "../../assets/PDF/SEPA/THESINDHENVIRONMENTALPROTECTIONACT2014.pdf"
import TheSEPAregulations2014 from "../../assets/PDF/SEPA/TheSEPA(Review of IEE-EIA-checklist)regulations2014.pdf"
import SelfMonitoringandReporting from "../../assets/PDF/SEPA/SelfMonitoringandReporting.pdf"
import LaboratoryCertification from "../../assets/PDF/SEPA/LABORATORYCERTIFICATION.docx"
import HospitalWasteManagementRules2014 from "../../assets/PDF/SEPA/HOSPITALWASTEMANAGEMENTRULES2014.docx"
import FinalReviewofECIEandEEIARegulation2021 from "../../assets/PDF/SEPA/FinalReviewofECIEE&EIARegulation2021.pdf"
///////////////Energy Department//////////////////
import ElectricityAct1910 from "../../assets/PDF/EnergyDepartment/ElectricityAct1910.pdf"
import ElectricityRules1937 from "../../assets/PDF/EnergyDepartment/ElectricityRules1937.pdf"
import Rule48ElectricityRules1937 from "../../assets/PDF/EnergyDepartment/Rule48ElectricityRules1937(SOP-1982).pdf"
import SindhMiningConcession from "../../assets/PDF/EnergyDepartment/SindhMiningConcessionRues.pdf"

///////////////////KMC/////////////////
import SindhLocalGovernmentAct2013 from "../../assets/PDF/LocalGovKMC/SindhLocalGovernmentAct2013-A4-Mar-2-2015.pdf"
import SindhPeoplesLocalCouncilsLandRules1975 from "../../assets/PDF/LocalGovKMC/SindhPeople'sLocalCouncilsLandRules1975(002).pdf"
import SKAA1987 from "../../assets/PDF/LocalGovKMC/SKAA1987.pdf"

///////////////////Industries and Commerce Department///////////////
import ImportPolicyOrder2016 from "../../assets/PDF/IndustriesandCommerceDepartment/ImportPolicyOrder2016.pdf"
import PakistanBoilerRules2009 from "../../assets/PDF/IndustriesandCommerceDepartment/PakistanBoilerRules2009.pdf"
import PARTNERSHIPACT1932 from "../../assets/PDF/IndustriesandCommerceDepartment/PARTNERSHIPACT1932.pdf"
import ProposedamendementinPartnershipAct1932 from "../../assets/PDF/IndustriesandCommerceDepartment/ProposedamendementinPartnershipAct1932.pdf"
import SindhBoilerRules1941 from "../../assets/PDF/IndustriesandCommerceDepartment/SindhBoilerRules1941.pdf"
import TheBoilerandPressureVesselOrdinance2002 from "../../assets/PDF/IndustriesandCommerceDepartment/TheBoilerandPressureVesselOrdinance2002.pdf"

///////////////////////Excise, Taxation &amp; Narcotics Control Department/////////////////////////////
import AbkariRules from "../../assets/PDF/ETNCLegalDocs/AbkariRules.pdf"
import Excisedutiesfile from "../../assets/PDF/ETNCLegalDocs/Excisedutiesfile.docx"
import IMG20221011WA0024 from "../../assets/PDF/ETNCLegalDocs/IMG-20221011-WA0024.jpg"
import IMG20221011WA0025 from "../../assets/PDF/ETNCLegalDocs/IMG-20221011-WA0025.jpg"
import THEPROHIBITION1979 from "../../assets/PDF/ETNCLegalDocs/THE PROHIBITION1979.pdf"

////////////////////DMC/////////////////////
import SindhLocalGovernmentAct2013A from "../../assets/PDF/LocalGovDMC/SindhLocalGovernmentAct 2013-A4-Mar-2-2015.pdf"

/////////////////////Health Department////////////////////////////
import DrugAct1976DrapAct2012 from "../../assets/PDF/HealthDepartment/DrugAct1976DRAPACT2012..doc"
import SindhDrugSalesRules1079amended2010 from "../../assets/PDF/HealthDepartment/SindhDrugsalesRules1079amended2010-11.pdf"
 
//////////////SSIC////////////////////
import ProcedureforAllotmentofPlot1985 from "../../assets/PDF/SSIC/ProcedureforAllotmentofPlot1985.pdf"
import smallindustriesAct1972 from "../../assets/PDF/SSIC/smallindustriesAct1972.pdf"

//////////////////Sindh Building Control Authority (SBCA)/////////////////////
import Annexure from "../../assets/PDF/SindhBuildingControlAuthority/Annexure's.pdf"
import TheKarachiBuildingTownPlanningRegulation2002 from "../../assets/PDF/SindhBuildingControlAuthority/TheKarachiBuilding&TownPlanningRegulation2002.pdf"

/////////////////////////////////////////
import SindhHealthcarecommissionAct2013 from "../../assets/PDF/SindhHealthcarecommission/SindhHealthcarecommissionAct2013.pdf"
import SindhHealthcarecommissionRegulations2017 from "../../assets/PDF/SindhHealthcarecommission/SindhHealthcarecommissionRegulations2017.pdf"
import LicenseforbothPesticidesandfertilizers from "../../assets/PDF/AgricultureDepartment/LicenseforbothPesticidesandfertilizers.pdf"
import RegistrationRenenewalAsPesticideDistributor from "../../assets/PDF/AgricultureDepartment/RegistrationRenenewalAsPesticideDistributor.pdf"
import Challan from "../../assets/PDF/AgricultureDepartment/Challan.jpg"
import SindhFoodAuthorityAct2016 from "../../assets/PDF/SindhFoodAuthority/SindhFoodAuthorityAct2016.pdf";
import APPLICATIONFORLICENSEOFFOODBUSINESS from "../../assets/PDF/SindhFoodAuthority/APPLICATIONFORLICENSEOFFOODBUSINESS.pdf";
import SindhFoodChallan from "../../assets/PDF/SindhFoodAuthority/SindhFoodChallan.jpg";


function DocumentGrid({dataForGrid}) {
  const {issuingDepartment,rlcoID}=dataForGrid
    let CaseData;
    
  const source1 = {
    datafields: [
      { name: "documentname", type: "string" },
      { name: "documenttype", type: "string" },
      { name: "downloaddocument", type: "string" },
     
    ],
    // localdata: props.dataForGrid,
      localdata: issuingDepartment =="Labour and Human Resources Department"?
       CaseData = [
        {
          documentname: "Amendment",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[Amendment,"Amendment"]
        },
    
        {
          documentname: "Amendment 2",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[Amendment2,"Amendment 2"]
        },
        {
            documentname: "Sindh Factories Rules 2021 published in gazette on 22 August, 2022",
            documenttype: "Law / Rules / Regulations",
            downloaddocument:[SindhFactoriesRules2021publishedingazetteon22August2022,"Sindh Factories Rules 2021 published in gazette on 22 August, 2022"]

        },
        {
            documentname: "Sindh Shops & EstablishmentAct 2015",
            documenttype: "Law / Rules / Regulations",
            downloaddocument:[SindhShopsEstablishmentAct,"Sindh Shops & EstablishmentAct 2015"]
        },
        {
            documentname: "The Sindh Factories Act 2015",
            documenttype: "Law / Rules / Regulations",
            downloaddocument:[TheSindhFactoriesAct2015,"The Sindh Factories Act 2015"]
        },
      ]:issuingDepartment =="Sindh Revenue Board"?
       CaseData = [
        {
          documentname: "License (for both Pesticides and fertilizers)",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[SindhSalesTaxonServicesAct2011amended,"License (for both Pesticides and fertilizers)"]
        },
    
        {
            documentname: "Sindh Sales Tax on Services Rules 2011",
            documenttype: "Law / Rules / Regulations	",
            downloaddocument:[SindhSalesTaxonServicesRules2011,"Sindh Sales Tax on Services Rules 2011"]
        },
       
      ]:issuingDepartment =="Sindh Food Authority (SFA)"?
      CaseData = [
       {
         documentname: "Sindh Food Authority Act 2016",
         documenttype: "Law / Rules / Regulations	",
         downloaddocument:[SindhFoodAuthorityAct2016,"Sindh Food Authority Act 2016"]
       },
   
       {
           documentname: "Application For License Of Food Business",
           documenttype: "Law / Rules / Regulations	",
           downloaddocument:[APPLICATIONFORLICENSEOFFOODBUSINESS,"Application Form"]
       },{
        documentname: "Challan",
        documenttype: "Law / Rules / Regulations	",
        downloaddocument:[SindhFoodChallan,"Challan"]
    },
      
     ]:
      issuingDepartment =="Agriculture Department"?
       CaseData = [
        {
          documentname: "Requirements In Respect Of Registration License (for both Pesticides and fertilizers)",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[LicenseforbothPesticidesandfertilizers,"License (for both Pesticides and fertilizers)"]
        },
    
        {
            documentname: "Application Form For Registration Renenewal As Pesticide Distributor",
            documenttype: "Law / Rules / Regulations	",
            downloaddocument:[RegistrationRenenewalAsPesticideDistributor,"Application Form"]
        },   {
          documentname: "Challan",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[Challan,"Challan"]
      },
       
      ]:issuingDepartment =="Sindh Employees Social Security Institution (SESSI) "?
      CaseData = [
        {
          documentname: "Sindh Employees Social Security (Amendmen) Act,2018",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[SINDHEMPLOYEESSOCIALSECURITYAMENDMENTACT2018,"Sindh Employees Social Security (Amendmen) Act,2018"]
        },
    
        {
            documentname: "Sindh Employees Social Security Act,2016",
            documenttype: "Law / Rules / Regulations	",
            downloaddocument:[SindhEmployeesSocialSecurityAct2016,"Sindh Employees Social Security Act,2016"]
        },
       
      ]: rlcoID =="SEPA-001" || rlcoID =="SEPA-002"  || rlcoID =="SEPA-003" || rlcoID =="SEPA-004" || rlcoID =="SEPA-005" || rlcoID =="SEPA-006" ?
      CaseData = [
        {
          documentname: "The Hazardous Substances Rule 2014",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[TheHazardousSubstancesRule2014,"The Hazardous Substances Rule 2014"]
        },
        {
          documentname: "THE SINDH ENVIRONMENTAL PROTECTION ACT, 2014.",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[THESINDHENVIRONMENTALPROTECTIONACT2014,"THE SINDH ENVIRONMENTAL PROTECTION ACT, 2014."]
         
        },
        
        {
          documentname: "The SEPA (Review of IEE-EIA-checklist) regulations 2014",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[TheSEPAregulations2014,"The SEPA (Review of IEE-EIA-checklist) regulations 2014"]
         
        },
        {
          documentname: "Self Monitoring and Reporting",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[SelfMonitoringandReporting,"Self Monitoring and Reporting"]
         
        },
        {
          documentname: "Laboratory Certification",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[LaboratoryCertification,"Laboratory Certification"]
         
        },
        {
          documentname: "Hospital Waste Management Rules 2014",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[HospitalWasteManagementRules2014,"Hospital Waste Management Rules 2014"]
         
        },
        {
          documentname: "Final Review of EC, IEE & EIA Regulation 2021 ",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[FinalReviewofECIEandEEIARegulation2021,"Final Review of EC, IEE & EIA Regulation 2021 "]
        },
      ]
      :
      rlcoID =="ED-001\n" || rlcoID =="ED-002\n" || rlcoID =="ED-003\n" || rlcoID =="ED-004" || rlcoID =="ED-005" || rlcoID =="ED-006" || rlcoID =="ED-007"?
      CaseData = [
        {
          documentname: "Electricity Act 1910",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[ElectricityAct1910,"Electricity Act 1910"]
        },
        {
          documentname: "Electricity Rules 1937",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[ElectricityRules1937,"Electricity Rules 1937"]
        },
        {
          documentname: "Rule 48 Electricity Rules 1937 (SOP-1982)",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[Rule48ElectricityRules1937,"Rule 48 Electricity Rules 1937 (SOP-1982)"]
        }
        ,
        {
          documentname: "Sindh Mining Concession Rues Feb 4 2021 Jan 2021 Schedule",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[SindhMiningConcession,"Sindh Mining Concession Rues Feb 4 2021 Jan 2021 Schedule"]
        }
      ]
      : rlcoID =="KMC-001" || rlcoID =="KMC-002" || rlcoID =="KMC-003" || rlcoID =="KMC-004" || rlcoID =="KMC-005" || rlcoID =="KMC-006" || rlcoID =="KMC-007" || rlcoID =="KMC-008" || rlcoID =="KMC-009" || rlcoID =="KMC-010" || rlcoID =="KMC-011" || rlcoID =="KMC-012" || rlcoID =="KMC-013" || rlcoID =="KMC-014" || rlcoID =="KMC-015" || rlcoID =="KMC-016" || rlcoID =="KMC-017" || rlcoID =="KMC-018" || rlcoID =="KMC-019" || rlcoID =="KMC-020" || rlcoID =="KMC-021" || rlcoID =="KMC-022" || rlcoID =="KMC-023"?
      CaseData = [
        {
          documentname: " Sindh Local Government Act 2013-A 4-Mar-2-2015",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[SindhLocalGovernmentAct2013," Sindh Local Government Act 2013-A 4-Mar-2-2015"]
        },
        {
          documentname: "Sindh People's Local Councils Land Rules 1975 (002)",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[SindhPeoplesLocalCouncilsLandRules1975,"Sindh People's Local Councils Land Rules 1975 (002)"]
        },
        {
          documentname: "SKAA 1987",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[SKAA1987,"SKAA 1987"]
        }
       
      ]
      : rlcoID=="ICD-001" || rlcoID=="ICD-002" || rlcoID=="ICD-003" || rlcoID=="ICD-004" || rlcoID=="ICD-005" || rlcoID=="ICD-006" || rlcoID=="ICD-007"? CaseData = [
        {
          documentname: " Import Policy Order 2016",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[ImportPolicyOrder2016," Import Policy Order 2016"]
        },
        {
          documentname: "Pakistan Boiler Rules 2009",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[PakistanBoilerRules2009,"Pakistan Boiler Rules 2009"]
        },
        {
          documentname: "Partnership Act 1932",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[PARTNERSHIPACT1932,"Partnership Act 1932"]
        },
        {
          documentname: "Proposed amendement in Partnership Act 1932 ",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[ProposedamendementinPartnershipAct1932 ,"Proposed amendement in Partnership Act 1932 "]
        },
      
        {
          documentname: "Sindh Boiler Rules 1941",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[SindhBoilerRules1941,"Sindh Boiler Rules 1941"]
        },
        {
          documentname: "Sindh Boiler Rules 1941",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[TheBoilerandPressureVesselOrdinance2002,"Sindh Boiler Rules 1941"]
        }
       
      ]
      : rlcoID== "ET&amp;NC-001" || rlcoID== "ET&amp;NC-002" || rlcoID== "ET&amp;NC-003" || rlcoID== "ET&amp;NC-004" || rlcoID== "ET&amp;NC-005" || rlcoID== "ET&amp;NC-006" || rlcoID== "ET&amp;NC-007" || rlcoID== "ET&amp;NC-008" || rlcoID== "ET&amp;NC-009" || rlcoID== "ET&amp;NC-010" || rlcoID== "ET&amp;NC-011" || rlcoID== "ET&amp;NC-012" || rlcoID== "ET&amp;NC-013" || rlcoID== "ET&amp;NC-014" || rlcoID== "ET&amp;NC-015" || rlcoID== "ET&amp;NC-016" || rlcoID== "ET&amp;NC-017" || rlcoID== "ET&amp;NC-018" || rlcoID== "ET&amp;NC-019" || rlcoID== "ET&amp;NC-020" || rlcoID== "ET&amp;NC-021" || rlcoID== "ET&amp;NC-022" || rlcoID== "ET&amp;NC-023" || rlcoID== "ET&amp;NC-023 B"? CaseData = [
        {
          documentname: "Abkari Rules",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[AbkariRules,"Abkari Rules"]
        },
        {
          documentname: "Excise duties file",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[Excisedutiesfile,"Excise duties file"]
        },
        {
          documentname: "No.So(TAXES)/E&T/1(91)2019-20 Karachi ",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[IMG20221011WA0024,"No.So(TAXES)/E&T/1(91)2019-20 Karachi "]
        },
        {
          documentname: "No.So(TAXES)/E&T/1(91)2019-20 Karachi ",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[IMG20221011WA0025 ,"No.So(TAXES)/E&T/1(91)2019-20 Karachi "]
        },
      
        {
          documentname: "The Prohibition 1979",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[THEPROHIBITION1979,"The Prohibition 1979"]
        },
      ]
      : rlcoID== "DMC– 001" || rlcoID== "DMC– 002" || rlcoID== "DMC– 003" || rlcoID== "DMC– 004" || rlcoID== "DMC– 005" || rlcoID== "DMC– 006" || rlcoID== "DMC– 007"? CaseData = [
        {
          documentname: "Sindh Local Government Act 2013-A ",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[SindhLocalGovernmentAct2013A,"Sindh Local Government Act 2013-A "]
        },
        {
          documentname: "Sindh People's Local Councils Land Rules 1975 (002)",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[SindhPeoplesLocalCouncilsLandRules1975,"Sindh People's Local Councils Land Rules 1975 (002)"]
        },
      ]: issuingDepartment=="Health Department" ?
      CaseData = [
        {
          documentname: "Drug Act 1976 Drap Act 2012 ",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[DrugAct1976DrapAct2012,"Drug Act 1976 Drap Act 2012 "]
        },
        {
          documentname: "Sindh Drug Sales Rules 1079  amended 2010-1",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[SindhDrugSalesRules1079amended2010,"Sindh Drug Sales Rules 1079  amended 2010-1"]
        },
      ] : rlcoID== "ICD-016" || rlcoID== "ICD-017" || rlcoID== "ICD-018" ||  rlcoID== "ICD-019" ||  rlcoID== "ICD-020" ||  rlcoID== "ICD-021" ||  rlcoID== "ICD-022" ||  rlcoID== "ICD-023"? CaseData = [
        {
          documentname: "Procedure for Allotment of Plot, 1985 ",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[ProcedureforAllotmentofPlot1985,"Procedure for Allotment of Plot, 1985 "]
        },
        {
          documentname: "small industries Act 1972",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[smallindustriesAct1972,"small industries Act 1972"]
        },
      ]
      : rlcoID== "SBCA-001 (A)" || rlcoID== "SBCA-001 (B)" || rlcoID=="SBCA-002" || rlcoID=="SBCA-003" || rlcoID=="SBCA-004" || rlcoID=="SBCA-005" || rlcoID=="SBCA-006" || rlcoID=="SBCA-007" || rlcoID=="SBCA-008" || rlcoID=="SBCA-009" || rlcoID=="SBCA-010" || rlcoID=="SBCA-011" || rlcoID=="SBCA-012" || rlcoID=="SBCA-013" || rlcoID=="SBCA-014" || rlcoID=="SBCA-015" || rlcoID=="SBCA-016" || rlcoID=="SBCA-017" || rlcoID=="SBCA-018"? CaseData = [
        {
          documentname: "Annexure's",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[Annexure,"Annexure's"]
        },
        {
          documentname: "The Karachi Building & Town Planning Regulation 2002",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[TheKarachiBuildingTownPlanningRegulation2002,"The Karachi Building & Town Planning Regulation 2002"]
        },
      ]:issuingDepartment=="Sindh Health Care Commission" ?
      CaseData = [
        {
          documentname: "Sindh Health care commission Act 2013",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[SindhHealthcarecommissionAct2013,"Sindh Health care commission Act 2013"]
        },
        {
          documentname: "Sindh Health care commission Regulations 2017",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[SindhHealthcarecommissionRegulations2017,"Sindh Health care commission Regulations 2017"]
        },
      ]
      :dataForGrid
      ,
    datatype: "json",
  };
  const adapter = new jqx.dataAdapter(source1);
  
  const columns1 = [
    {
      text: "Document Name",
      datafield: "documentname",
      width: "33%",
      align: "left",
      cellsalign: "left",
      editable: false,
      filtertype: "textField",
    },
    {
      text: "Document Type",
      datafield: "documenttype",
      width: "25%",
      // align: "left",
      editable: false,
      // cellsalign: "right",
      filtertype: "textField",
    },
    {
      text: "Document Download",
      datafield: "downloaddocument",
      width: "42%",
      align: "left",
      FontFace:"#Ffffff",
      editable: false,
      // cellsalign: "left",
      cellsrenderer: (row, columnfield, value) => {
        ;
      
        // return value ? `<a style="justify-content: center; display: flex;margin-top: 10px;"  href="${props.dataForGrid.downloaddocument}" target="_blank">${props.dataForGrid.documentname}</a>` : "";
        return value ? `<a style=" display: flex;margin-top: 5px;" 
         href="${issuingDepartment=="Labour and Human Resources Department" || issuingDepartment=="Sindh Revenue Board" || issuingDepartment =="Sindh Food Authority (SFA)" || issuingDepartment =="Sindh Employees Social Security Institution (SESSI) " || rlcoID =="SEPA-001" || rlcoID =="SEPA-003" || rlcoID =="SEPA-004" || rlcoID =="SEPA-005" ||rlcoID =="SEPA-006" || rlcoID =="ED-001\n" || rlcoID =="ED-002\n" || rlcoID =="ED-003\n" || rlcoID =="ED-004" || rlcoID =="ED-005" || rlcoID =="ED-006" || rlcoID =="ED-007" || rlcoID =="KMC-001" || rlcoID =="KMC-002" || rlcoID =="KMC-003" || rlcoID =="KMC-004" || rlcoID =="KMC-005" || rlcoID =="KMC-006" || rlcoID =="KMC-007" || rlcoID =="KMC-008" || rlcoID =="KMC-009" || rlcoID =="KMC-010" || rlcoID =="KMC-011" || rlcoID =="KMC-012" || rlcoID =="KMC-013" || rlcoID =="KMC-014" || rlcoID =="KMC-015" || rlcoID =="KMC-016" || rlcoID =="KMC-017" || rlcoID =="KMC-018" || rlcoID =="KMC-019" || rlcoID =="KMC-020" || rlcoID =="KMC-021" || rlcoID =="KMC-022" || rlcoID =="KMC-023" | rlcoID=="ICD-001" || rlcoID=="ICD-002" || rlcoID=="ICD-003" || rlcoID=="ICD-004" || rlcoID=="ICD-005" || rlcoID=="ICD-006" || rlcoID=="ICD-007" ||rlcoID== "ET&amp;NC-001" || rlcoID== "ET&amp;NC-002" || rlcoID== "ET&amp;NC-003" || rlcoID== "ET&amp;NC-004" || rlcoID== "ET&amp;NC-005" || rlcoID== "ET&amp;NC-006" || rlcoID== "ET&amp;NC-007" || rlcoID== "ET&amp;NC-008" || rlcoID== "ET&amp;NC-009" || rlcoID== "ET&amp;NC-010" || rlcoID== "ET&amp;NC-011" || rlcoID== "ET&amp;NC-012" || rlcoID== "ET&amp;NC-013" || rlcoID== "ET&amp;NC-014" || rlcoID== "ET&amp;NC-015" || rlcoID== "ET&amp;NC-016" || rlcoID== "ET&amp;NC-017" || rlcoID== "ET&amp;NC-018" || rlcoID== "ET&amp;NC-019" || rlcoID== "ET&amp;NC-020" || rlcoID== "ET&amp;NC-021" || rlcoID== "ET&amp;NC-022" || rlcoID== "ET&amp;NC-023" || rlcoID== "ET&amp;NC-023 B" ||rlcoID== "DMC– 001" || rlcoID== "DMC– 002" || rlcoID== "DMC– 003" || rlcoID== "DMC– 004" || rlcoID== "DMC– 005" || rlcoID== "DMC– 006" || rlcoID== "DMC– 007" || issuingDepartment=="Health Department" || rlcoID== "ICD-016" || rlcoID== "ICD-017" || rlcoID== "ICD-018" ||  rlcoID== "ICD-019" ||  rlcoID== "ICD-020" ||  rlcoID== "ICD-021" ||  rlcoID== "ICD-022" ||  rlcoID== "ICD-023" ||rlcoID== "SBCA-001 (A)" || rlcoID== "SBCA-001 (B)" || rlcoID=="SBCA-002" || rlcoID=="SBCA-003" || rlcoID=="SBCA-004" || rlcoID=="SBCA-005" || rlcoID=="SBCA-006" || rlcoID=="SBCA-007" || rlcoID=="SBCA-008" || rlcoID=="SBCA-009" || rlcoID=="SBCA-010" || rlcoID=="SBCA-011" || rlcoID=="SBCA-012" || rlcoID=="SBCA-013" || rlcoID=="SBCA-014" || rlcoID=="SBCA-015" || rlcoID=="SBCA-016" || rlcoID=="SBCA-017" || rlcoID=="SBCA-018" || rlcoID=="AD-001" || issuingDepartment=="Sindh Health Care Commission"?   value[0]:  dataForGrid.pdf}" target="_blank">
         ${issuingDepartment=="Labour and Human Resources Department" ||issuingDepartment=="Sindh Revenue Board" ||issuingDepartment =="Sindh Food Authority (SFA)" ||issuingDepartment =="Sindh Employees Social Security Institution (SESSI) " || rlcoID =="SEPA-001" || rlcoID =="SEPA-003" || rlcoID =="SEPA-004" || rlcoID =="SEPA-005" || rlcoID =="SEPA-006"|| rlcoID =="ED-001\n" || rlcoID =="ED-002\n" || rlcoID =="ED-003\n" || rlcoID =="ED-004" || rlcoID =="ED-005" || rlcoID =="ED-006" || rlcoID =="ED-007" || rlcoID =="KMC-001" || rlcoID =="KMC-002" || rlcoID =="KMC-003" || rlcoID =="KMC-004" || rlcoID =="KMC-005" || rlcoID =="KMC-006" || rlcoID =="KMC-007" || rlcoID =="KMC-008" || rlcoID =="KMC-009" || rlcoID =="KMC-010" || rlcoID =="KMC-011" || rlcoID =="KMC-012" || rlcoID =="KMC-013" || rlcoID =="KMC-014" || rlcoID =="KMC-015" || rlcoID =="KMC-016" || rlcoID =="KMC-017" || rlcoID =="KMC-018" || rlcoID =="KMC-019" || rlcoID =="KMC-020" || rlcoID =="KMC-021" || rlcoID =="KMC-022" || rlcoID =="KMC-023" ||rlcoID=="ICD-001" || rlcoID=="ICD-002" || rlcoID=="ICD-003" || rlcoID=="ICD-004" || rlcoID=="ICD-005" || rlcoID=="ICD-006" || rlcoID=="ICD-007" ||rlcoID== "ET&amp;NC-001" || rlcoID== "ET&amp;NC-002" || rlcoID== "ET&amp;NC-003" || rlcoID== "ET&amp;NC-004" || rlcoID== "ET&amp;NC-005" || rlcoID== "ET&amp;NC-006" || rlcoID== "ET&amp;NC-007" || rlcoID== "ET&amp;NC-008" || rlcoID== "ET&amp;NC-009" || rlcoID== "ET&amp;NC-010" || rlcoID== "ET&amp;NC-011" || rlcoID== "ET&amp;NC-012" || rlcoID== "ET&amp;NC-013" || rlcoID== "ET&amp;NC-014" || rlcoID== "ET&amp;NC-015" || rlcoID== "ET&amp;NC-016" || rlcoID== "ET&amp;NC-017" || rlcoID== "ET&amp;NC-018" || rlcoID== "ET&amp;NC-019" || rlcoID== "ET&amp;NC-020" || rlcoID== "ET&amp;NC-021" || rlcoID== "ET&amp;NC-022" || rlcoID== "ET&amp;NC-023" || rlcoID== "ET&amp;NC-023 B" ||rlcoID== "DMC– 001" || rlcoID== "DMC– 002" || rlcoID== "DMC– 003" || rlcoID== "DMC– 004" || rlcoID== "DMC– 005" || rlcoID== "DMC– 006" || rlcoID== "DMC– 007" || issuingDepartment=="Health Department" || rlcoID== "ICD-016" || rlcoID== "ICD-017" || rlcoID== "ICD-018" ||  rlcoID== "ICD-019" ||  rlcoID== "ICD-020" ||  rlcoID== "ICD-021" ||  rlcoID== "ICD-022" ||  rlcoID== "ICD-023" || rlcoID== "SBCA-001 (A)" || rlcoID== "SBCA-001 (B)" || rlcoID=="SBCA-002" || rlcoID=="SBCA-003" || rlcoID=="SBCA-004" || rlcoID=="SBCA-005" || rlcoID=="SBCA-006" || rlcoID=="SBCA-007" || rlcoID=="SBCA-008" || rlcoID=="SBCA-009" || rlcoID=="SBCA-010" || rlcoID=="SBCA-011" || rlcoID=="SBCA-012" || rlcoID=="SBCA-013" || rlcoID=="SBCA-014" || rlcoID=="SBCA-015" || rlcoID=="SBCA-016" || rlcoID=="SBCA-017" || rlcoID=="SBCA-018" || rlcoID=="AD-001"|| issuingDepartment=="Sindh Health Care Commission"? value[1]:dataForGrid.documentname}</a>` : "";
      },
     
      filtertype: "textField",
    },
    
    // {
    //   text: "Uploaded on",
    //   datafield: "uploaded",
    //   width: "25%",
    //   align: "center",
    //   editable: false,
    //   cellsalign: "center",
    //   //   cellclassname: "color-distribution-blue cursor-pointer",
    //   filtertype: "textField",
    // },
  ];
 
  console.log("source",source1.localdata.length)
  return (
    <>
      <div className="checkbox-size">
        <JqxGrid
          className="jqx-widget-content"
          source={adapter}
          columns={columns1}
          // height={152}
          height={source1.localdata.length > 1? 280:152}
          columnsheight={50}
          rowsheight={40}
          columnsreorder={true}
          autoloadstate={true}
          autosavestate={true}
          filterable={true}
          autoshowfiltericon={true}
          sortable={true}
          editable={true}
          width="100%"
          showsortmenuitems={false}
          columnsresize={true}
          selectedrowindex={0}
          
        />
      </div>
    </>
  );
}

export default DocumentGrid;
