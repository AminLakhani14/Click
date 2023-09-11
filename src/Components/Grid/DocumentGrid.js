import React, { useState } from "react";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import JqxGrid, { jqx } from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";
import sindh from "../../assets/sindhkatciabadiact1987.pdf"
import { useEffect } from "react";

function DocumentGrid(props) {
  console.log("amin lakh",props.dataForGrid)
    let CaseData;
    
  const source1 = {
    datafields: [
      { name: "documentname", type: "string" },
      { name: "documenttype", type: "string" },
      { name: "downloaddocument", type: "string" },
     
    ],
    localdata: props.dataForGrid,
    // CaseData = [
    //     {
    //       documentname: "Companies Act 2017",
    //       documenttype: "Law / Rules / Regulations	",
    //       downloaddocument: `${process.env.PUBLIC_URL}../assets/sindhkatciabadiact1987.pdf`,
    //     },
    
    //     {
    //         documentname: "Sindh Food Authority act",
    //         documenttype: "Law / Rules / Regulations	",
    //         downloaddocument: `${process.env.PUBLIC_URL}../assets/sindhkatciabadiact1987.pdf`,
    //     },
    //     {
    //         documentname: "",
    //         documenttype: "",
    //         downloaddocument: "",
    //     },
    //     {
    //         documentname: "",
    //         documenttype: "",
    //         downloaddocument: "",
    //     },
    //     {
    //         documentname: "",
    //         documenttype: "",
    //         downloaddocument: "",
    //     },
    //   ],


      // localdata: CaseData = [
      //   {
      //     documentname: "Companies Act 2017",
      //     documenttype: "Law / Rules / Regulations	",
      //     downloaddocument: `${process.env.PUBLIC_URL}../assets/sindhkatciabadiact1987.pdf`,
      //   },
    
      //   {
      //       documentname: "Sindh Food Authority act",
      //       documenttype: "Law / Rules / Regulations	",
      //       downloaddocument: `${process.env.PUBLIC_URL}../assets/sindhkatciabadiact1987.pdf`,
      //   },
      //   {
      //       documentname: "",
      //       documenttype: "",
      //       downloaddocument: "",
      //   },
      //   {
      //       documentname: "",
      //       documenttype: "",
      //       downloaddocument: "",
      //   },
      //   {
      //       documentname: "",
      //       documenttype: "",
      //       downloaddocument: "",
      //   },
      // ].filter((item)=>{
      //   return item==props.rlcoID && item
      // }),
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
      width: "34%",
      align: "left",
      editable: false,
      cellsalign: "right",
      filtertype: "textField",
    },
    {
      text: "Document Download",
      datafield: "downloaddocument",
      width: "33%",
      align: "left",
      editable: false,
      cellsalign: "left",
      cellsrenderer: (row, columnfield, value) => {
        return value ? `<a style="justify-content: center; display: flex;margin-top: 10px;" href="${props.dataForGrid.downloaddocument}" target="_blank">Companies Act 2017.pdf</a>` : "";
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
 
  return (
    <>
      <div className="checkbox-size">
        <JqxGrid
          className="jqx-widget-content"
          source={adapter}
          columns={columns1}
          height={152}
          columnsheight={50}
          rowsheight={50}
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
