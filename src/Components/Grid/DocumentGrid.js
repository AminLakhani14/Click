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

import THESINDHENVIRONMENTALPROTECTIONACT2014 from "../../assets/PDF/THESINDHENVIRONMENTALPROTECTIONACT2014.pdf"
import TheHazardousSubstancesRule2014 from "../../assets/PDF/TheHazardousSubstancesRule2014.pdf"
import HOSPITALWASTEMANAGEMENTRULES2014 from "../../assets/PDF/HOSPITALWASTEMANAGEMENTRULES2014.docx"

///////////////Energy Department//////////////////
import ElectricityAct1910 from "../../assets/PDF/ElectricityAct1910.pdf"
function DocumentGrid({dataForGrid}) {
  const {issuingDepartment,rlcoID}=dataForGrid
  debugger;
  // console.log("amin lakh",props.dataForGrid)
    // console.log("aminnnnnnnnnnnnnn",props)
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
          documentname: "Sindh Sales Tax on Services Act 2011 amended 2021",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[SindhSalesTaxonServicesAct2011amended,"Sindh Sales Tax on Services Act 2011 amended 2021"]
        },
    
        {
            documentname: "Sindh Sales Tax on Services Rules 2011",
            documenttype: "Law / Rules / Regulations	",
            downloaddocument:[SindhSalesTaxonServicesRules2011,"Sindh Sales Tax on Services Rules 2011"]
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
       
      ]: rlcoID =="SEPA-001" || rlcoID =="SEPA-002"?
      CaseData = [
        {
          documentname: "The sindh Environmental Protection Act 2014",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[THESINDHENVIRONMENTALPROTECTIONACT2014,"The sindh Environmental Protection Act 2014"]
        },
    
        {
            documentname: "Hazardous Substances Rules, 2014",
            documenttype: "Law / Rules / Regulations	",
           downloaddocument:[TheHazardousSubstancesRule2014,"Hazardous Substances Rules, 2014"]
        },
       
      ]
      :rlcoID =="SEPA-003"?
      CaseData = [
        {
          documentname: "The sindh Environmental Protection Act 2014",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[THESINDHENVIRONMENTALPROTECTIONACT2014,"The sindh Environmental Protection Act 2014"]
        },
    
        {
            documentname: "",
            documenttype: "Law / Rules / Regulations	",
           downloaddocument:['',""]


        },
       
      ]:rlcoID =="SEPA-004"?
      CaseData = [
        {
          documentname: "The sindh Environmental Protection Act 2014",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[THESINDHENVIRONMENTALPROTECTIONACT2014,"The sindh Environmental Protection Act 2014"]
        },
      ]
      :rlcoID =="SEPA-005"?
      CaseData = [
        {
          documentname: "The sindh Environmental Protection Act 2014",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[THESINDHENVIRONMENTALPROTECTIONACT2014,"The sindh Environmental Protection Act 2014"]
        },
        {
          documentname: "",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:["",""]
        }
      ]:
      rlcoID =="SEPA-006"?
      CaseData = [
        {
          documentname: "The sindh Environmental Protection Act 2014",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[THESINDHENVIRONMENTALPROTECTIONACT2014,"The sindh Environmental Protection Act 2014"]
        },
        {
          documentname: "Hospital Waste Management Rules 2014",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[HOSPITALWASTEMANAGEMENTRULES2014,"Hospital Waste Management Rules 2014"]
        }
      ]:
      rlcoID =="ED-001\n"?
      CaseData = [
        {
          documentname: "Electricity Act 1910",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[THESINDHENVIRONMENTALPROTECTIONACT2014,"Electricity Act 1910"]
        },
        {
          documentname: "Hospital Waste Management Rules 2014",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument:[HOSPITALWASTEMANAGEMENTRULES2014,"Hospital Waste Management Rules 2014"]
        }
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
        debugger;
      
        // return value ? `<a style="justify-content: center; display: flex;margin-top: 10px;"  href="${props.dataForGrid.downloaddocument}" target="_blank">${props.dataForGrid.documentname}</a>` : "";
        return value ? `<a style=" display: flex;margin-top: 5px;" 
         href="${issuingDepartment=="Labour and Human Resources Department" || issuingDepartment=="Sindh Revenue Board" ||issuingDepartment =="Sindh Employees Social Security Institution (SESSI) " || rlcoID =="SEPA-001" || rlcoID =="SEPA-003" || rlcoID =="SEPA-004" || rlcoID =="SEPA-005" ||rlcoID =="SEPA-006" || rlcoID =="ED-001\n"? value[0]:  dataForGrid.pdf}" target="_blank">
         ${issuingDepartment=="Labour and Human Resources Department" ||issuingDepartment=="Sindh Revenue Board" ||issuingDepartment =="Sindh Employees Social Security Institution (SESSI) " || rlcoID =="SEPA-001" || rlcoID =="SEPA-003" || rlcoID =="SEPA-004" || rlcoID =="SEPA-005" || rlcoID =="SEPA-006"|| rlcoID =="ED-001\n"? value[1]:dataForGrid.documentname}</a>` : "";
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
