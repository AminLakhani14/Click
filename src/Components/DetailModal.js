import React, { useRef, useState } from "react";
import { Button, Modal, Tabs } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Input, Space } from "antd";
import DocumentGrid from "./Grid/DocumentGrid";
import { TextField } from "@mui/material";
import { color } from "d3";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const DetailModal = (props) => {
  console.log("amin",props)
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
            }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => {
              setDisabled(true);
            }}
            onFocus={() => {}}
            onBlur={() => {}}
          >
            UPDATE OF LICENSES
          </div>
        }
        width={1000}
        height={600}
        open={props.openDetailModal}
        onCancel={props.closeDetailModal}
        footer={null}
      >
        <Tabs
          type="card"
          defaultActiveKey="1"
          items={[
            {
              label: "Department Info",
              key: "1",
              children: (
                <div style={{ height: "295px" }}>
                  <div className="row align-items-baseline">
                    <div className="col-lg-6" style={{ marginBottom: "30px" }}>
                      <div className="row">
                        <ThemeProvider theme={theme}>
                        <TextField
                          id="outline-controlled"
                          style={{ marginBottom: "8px" }}
                          label="License/Permit/NOC/Registration"
                          size="small"
                          InputLabelProps={{
                            shrink: true, // This ensures that the label shrinks when the input has a value
                          }}
                          sx={{
                            '& input:disabled': {
                              color: 'error.main' ,
                              backgroundColor:'yellow',bgcolor: 'primary.main'  // Change this to the color you want
                            },
                          }}
                          disabled={true}
                          className="textHeight"
                          type="text"
                          value={props?.licenceData?.rlcoID}
                        />
                        </ThemeProvider>
                        {/* <div style={{border:"2px solid red"}} className="disable">
                          <p className="ab" style={{color:"black",backgroundColor:"red"}}>{props?.licenceData?.rlcoID}</p>
                        </div> */}
                      </div>

                      <div className="row">
                        <TextField
                          id="outline-controlled"
                          label="Issuing Department"
                          style={{ marginBottom: "8px" }}
                          className="modalTextField"
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
                          style={{ marginBottom: "8px" }}
                          value={props?.licenceData?.timeLine}
                          className="modalTextField"
                          disabled={true}
                          InputLabelProps={{
                            shrink: true, // This ensures that the label shrinks when the input has a value
                          }}
                          type="text"
                          placeholder="Write your feedback subject"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6" style={{ marginBottom: "148px" }}>
                      <div className="row">
                        <TextField
                          label="Fee Amount"
                          style={{ marginBottom: "8px" }}
                          className="modalTextField"
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
                          style={{ marginBottom: "8px" }}
                          disabled={true}
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
                        <div class="">
                          {/* <div><label>Is inspection required?</label> </div> */}

                          <div class="input-group d-flex justify-content-end">
                            {/* <input
                              size={"Large"}
                              type="text"
                              className="modalTextField"
                              placeholder="Example input"
                            /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              label: " List of Requirements to Apply",
              key: "2",
              children: (
                <div style={{ height: "295px" }}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="row">
                        <label>Documents Required</label>
                        <div style={{ marginBottom: "8px" }}>
                          <TextArea rows={4} />
                        </div>
                      </div>
                      <div className="row">
                        <div>
                          <a href="comingsoon.html">
                            <button type="button" className="amin">
                              <span style={{ width: "179px", height: "33px" }}>
                                View Documents Requirement Detail
                              </span>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="row">
                        <label>Procedure</label>
                        <div style={{ marginBottom: "8px" }}>
                          <TextArea rows={4} />
                        </div>
                      </div>
                      <div className="row">
                        <div>
                          <a href="comingsoon.html">
                            <button type="button" className="amin">
                              <span style={{ width: "179px", height: "33px" }}>
                                View Procedure Detail
                              </span>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              label: " Laws / Rules / Regulations / Documents",
              key: "3",
              children: (
                <div style={{ height: "295px" }}>
                  <DocumentGrid dataForGrid={props.licenceData}  isuseDepart={props?.licenceData?.fee} id="LD-002"/>
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
