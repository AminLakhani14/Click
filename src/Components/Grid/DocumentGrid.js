import React, { useState } from "react";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import JqxGrid, { jqx } from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";
import sindh from "../../assets/sindhkatciabadiact1987.pdf"
import { useEffect } from "react";

function DocumentGrid(props) {
    let CaseData;
    
  const source1 = {
    datafields: [
      { name: "documentname", type: "string" },
      { name: "documenttype", type: "string" },
      { name: "downloaddocument", type: "string" },
      { name: "uploaded", type: "string" },
    ],
    localdata: CaseData = [
        {
          documentname: "Companies Act 2017",
          documenttype: "Law / Rules / Regulations	",
          downloaddocument: `${process.env.PUBLIC_URL}../assets/sindhkatciabadiact1987.pdf`,
          uploaded: "22/08/2019",
        },
    
        {
            documentname: "",
            documenttype: "",
            downloaddocument: "",
            uploaded: "",
        },
        {
            documentname: "",
            documenttype: "",
            downloaddocument: "",
            uploaded: "",
        },
        {
            documentname: "",
            documenttype: "",
            downloaddocument: "",
            uploaded: "",
        },
        {
            documentname: "",
            documenttype: "",
            downloaddocument: "",
            uploaded: "",
        },
      ],

    datatype: "json",
  };
  const adapter = new jqx.dataAdapter(source1);
  
  const columns1 = [
    {
      text: "Document Name",
      datafield: "documentname",
      width: "25%",
      align: "left",
      cellsalign: "left",
      editable: false,
      filtertype: "textField",
    },
    {
      text: "Document Type",
      datafield: "documenttype",
      width: "25%",
      align: "right",
      editable: false,
      cellsalign: "right",
      filtertype: "textField",
    },
    {
      text: "Document Download",
      datafield: "downloaddocument",
      width: "25%",
      align: "left",
      editable: false,
      cellsalign: "left",
      cellsrenderer: (row, columnfield, value) => {
        return value ? `<a style="justify-content: center; display: flex;margin-top: 10px;" href="${sindh}" target="_blank">Companies Act 2017.pdf</a>` : "";
      },
      filtertype: "textField",
    },
    {
      text: "Uploaded on",
      datafield: "uploaded",
      width: "25%",
      align: "center",
      editable: false,
      cellsalign: "center",
      //   cellclassname: "color-distribution-blue cursor-pointer",
      filtertype: "textField",
    },
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
