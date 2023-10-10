import React, { useRef, useState } from "react";
import { Button, Modal, Tabs } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Input, Space } from "antd";
import DocumentGrid from "./Grid/DocumentGrid";
import { TextField } from "@mui/material";
import { color } from "d3";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import "../Css/resource.css";
import { useEffect } from "react";
import Map from "./Map";
import logo from "../assets/Agriculture.png"



const DetailModal = (props) => {
  debugger
  const theme = createTheme({
    overrides: {
      MuiInput: {
        // Style for disabled TextField
        disabled: {
          '& input': {
            color: 'red',
          },
        },
      },
    },
  });
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const draggleRef = useRef < HTMLDivElement > null;

  const showModal = () => {
    setOpen(true);
  };

  const onStart = (_event) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    // setBounds({
    //   left: -targetRect.left + uiData.x,
    //   right: clientWidth - (targetRect.right - uiData.x),
    //   top: -targetRect.top + uiData.y,
    //   bottom: clientHeight - (targetRect.bottom - uiData.y),
    // });
  };
  const { Search } = Input;

  return (
    <>
      <Modal
        title={
          <div
            style={{
              width: "1000px",
              cursor: "move",
              marginTop: -6,
              color: "white",
            }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => {
              setDisabled(true);
            }}
            onFocus={() => { }}
            onBlur={() => { }}
          >
            UPDATE OF LICENSES
          </div>
        }
        width={1000}
        height={600}
        open={props.openDetailModal}
        onCancel={props.closeDetailModal}
        footer={null}
        aria-selected="true"
        className="modal_container"

      >
        <Tabs
          className="regulatoryTab"
          type="card"
          defaultActiveKey="1"
          style={{ paddingBottom: "16px", paddingTop: 24, paddingLeft: 16, paddingRight: 16 }}
          items={[
            {
              label: <span className="tabsLabel">Department Info</span>,
              key: "1",
              children: (
                <div style={{ height: "295px" }}>
                  <div className="row align-items-baseline disable_input">
                    <div className="col-lg-6" style={{ marginBottom: "30px" }}>
                      <div className="row">
                        {/* <ThemeProvider theme={theme}> */}
                        <TextField
                          id="outline-controlled"
                          style={{ marginBottom: "20px" }}
                          label="License/Permit/NOC/Registration"
                          InputLabelProps={{
                            shrink: true, // This ensures that the label shrinks when the input has a value
                          }}
                          className="textHeight"
                          size="small"
                          disabled={true}
                          type="text"
                          value={props?.licenceData?.rlcoID}
                        />
                        {/* </ThemeProvider> */}
                        {/* <div style={{border:"2px solid red"}} className="disable">
                          <p className="ab" style={{color:"black",backgroundColor:"red"}}>{props?.licenceData?.rlcoID}</p>
                        </div> */}
                      </div>

                      <div className="row">
                        <TextField
                          id="outline-controlled"
                          label="Issuing Department"
                          style={{ marginBottom: "20px" }}
                          className="modalTextField"
                          size="small"
                          disabled={true}
                          InputLabelProps={{
                            shrink: true, // This ensures that the label shrinks when the input has a value
                          }}
                          value={props?.licenceData?.issuingDepartment}
                          type="text"
                          placeholder="Write your feedback subject"
                        />
                      </div>

                      <div className="row">
                        <TextField
                          label="Time to get in Days"
                          style={{ marginBottom: "20px" }}
                          value={props?.licenceData?.timeLine}
                          className="modalTextField"
                          size="small"
                          disabled={true}
                          InputLabelProps={{
                            shrink: true, // This ensures that the label shrinks when the input has a value
                          }}
                          type="text"
                          placeholder="Write your feedback subject"
                        />
                      </div>
                      <div className="row">
                        <TextField
                          label="Contact"
                          style={{ marginBottom: "20px" }}
                          disabled={true}
                          size="small"
                          className="modalTextField"
                          type="text"
                          InputLabelProps={{
                            shrink: true, // This ensures that the label shrinks when the input has a value
                          }}
                          value={props?.licenceData?.contactno}
                          placeholder="Write your feedback subject"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6" style={{ marginBottom: "148px" }}>
                      <div className="row">
                        <TextField
                          label="Fee Amount"
                          style={{ marginBottom: "20px" }}
                          className="modalTextField"
                          size="small"
                          type="text"
                          InputLabelProps={{
                            shrink: true, // This ensures that the label shrinks when the input has a value
                          }}
                          disabled={true}
                          value={props?.licenceData?.fee}
                          placeholder="Write your feedback subject"
                        />
                      </div>
                      <div className="row">
                        <TextField
                          label=" Renewal Period (Months)"
                          style={{ marginBottom: "20px" }}
                          disabled={true}
                          size="small"
                          className="modalTextField"
                          type="text"
                          InputLabelProps={{
                            shrink: true, // This ensures that the label shrinks when the input has a value
                          }}
                          value="Renewal Period (Months)"
                          placeholder="Write your feedback subject"
                        />
                      </div>
                      <div className="row">
                        <a
                          href={`https://www.google.com/maps/place/${encodeURIComponent(props?.licenceData?.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2 ms-1"
                        >
                          <TextField
                            label="Address"
                            disabled={true}
                            size="small"
                            style={{ marginBottom: "20px", 
                            cursor: "pointer", 
                            marginTop:"-6px",
                            marginLeft:"-12px",
                            width:"104%",
                            pointerEvents: "none" }}
                            className="modalTextField"
                            type="text"
                            InputLabelProps={{
                              shrink: true, // This ensures that the label shrinks when the input has a value
                            }}
                            value={props?.licenceData?.address}
                            placeholder="Write your feedback subject"
                          />
                           </a>
                      </div>
                      {props?.licenceData?.map &&
                        <div className="row g-0 ">
                        <a href={props?.licenceData?.location} target="_blank" className="p-0">
                        <img src={props?.licenceData?.map} alt="" style={{height:140,width:"100%",borderRadius:5,marginTop:-3,objectFit:"cover"}}/>
                        </a>
                         </div>
                      }
                    


                      {/* <div class="input-group d-flex justify-content-end">

                      </div> */}
                    </div>
                  </div>
                </div>
              ),
            },
            {
              label: <span className="tabsLabel">List of Requirements to Apply</span>,
              key: "2",
              children: (
                <div style={{ height: "295px", }}>
                  {props?.licenceData?.logo ? <div className="row g-0">
                    <div className="col-lg-6 document" style={{ height: 325 }}>
                      <div className="row g-0" style={{ textAlign: "left", paddingRight: 16 }}>
                        <h6>Documents Required</h6>
                        <div style={{ marginBottom: "8px" }}>
                          {/* <TextArea rows={4} /> */}
                          <ul className="document_required">
                            <li >{props?.licenceData?.l1}</li>
                            <li >{props?.licenceData?.l2}</li>
                            <li >{props?.licenceData?.l3}</li>
                            <li >{props?.licenceData?.l4}</li>
                            <li >{props?.licenceData?.l5}</li>
                            <li >{props?.licenceData?.l6}</li>
                            <li >{props?.licenceData?.l7}</li>
                            <li >{props?.licenceData?.l8}</li>
                            <li >{props?.licenceData?.l9}</li>
                            <li >{props?.licenceData?.l10}</li>
                            <li >{props?.licenceData?.l11}</li>
                            <li >{props?.licenceData?.l12}</li>
                            {/* <li ><img src={props?.licenceData?.table} alt="" /></li> */}
                          </ul>
                        </div>
                      </div>
                      {/* <div className="row">
                        <div>
                          <a href="comingsoon.html">
                            <button type="button" className="amin">
                              <span style={{ width: "179px", height: "33px" }}>
                                View Documents Requirement Detail
                              </span>
                            </button>
                          </a>
                        </div>
                      </div> */}
                    </div>
                    <div className="col-lg-6 Procedure_container" style={{ borderLeft: '2px solid #c4c4c4', paddingLeft: 16 }}>
                      {/* <div style={{height:"300px",borderLeft:"2px solid red"}}></div> */}
                      <h6>Procedure</h6>
                      <div className="row g-0">
                        <div style={{ width: "100%" }}>
                          <a href={props?.licenceData?.logo} target="_blank">
                            <img
                              className="procedure"
                              style={{ height: 300, width: "100%", border: "1px solid grey", marginLeft: -5, borderRadius: 5 }}
                              src={props?.licenceData?.logo} />
                          </a>
                        </div>
                      </div>
                      {/* <div className="row">
                        <div>
                          <a href={props?.licenceData?.logo} target="_blank">
                            <button type="button" className="amin">
                              <span style={{ width: "179px", height: "33px" }}>
                                View Procedure Detail
                              </span>
               
                            </button>
                          </a>
                        </div>
                      </div> */}
                    </div>
                  </div> : <h1>No Records</h1>}
                </div>
              ),
            },
            {
              label: <span className="tabsLabel">Laws / Rules / Regulations / Documents</span>,
              key: "3",
              children: (
                <div style={{ height: "295px" }}>
                  <DocumentGrid dataForGrid={props.licenceData} isuseDepart={props?.licenceData?.fee} id="LD-002" />
                </div>
              ),
            },
          ]}
        />
      </Modal>
    </>
  );
};

export default DetailModal;
