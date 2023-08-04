import React, { useRef, useState } from 'react';
import { Button, Modal, Tabs } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Input, Space } from 'antd';
import DocumentGrid from './Grid/DocumentGrid';

const DetailModal = (props) => {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
  const draggleRef = useRef<HTMLDivElement>(null);

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
              width: '1000px',
              cursor: 'move',
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
        // modalRender={(modal) => (
        //   <Draggable
        //     disabled={disabled}
        //     bounds={bounds}
        //     onStart={(event, uiData) => onStart(event, uiData)}
        //   >
        //     <div ref={draggleRef}>{modal}</div>
        //   </Draggable>
        // )}
      >
      <Tabs
      type="card"
      defaultActiveKey="1"
      items={[
        {
          label: 'Department Info',
          key: '1',
          children: (
            <div style={{height:"400px"}}>
            <div className='row'>

            <div className="col-lg-6" style={{marginBottom: "30px"}}>
            <div className='row'>
            <label>License/Permit/NOC/Registration Name</label>
            <div style={{ marginBottom: "8px" }}>
              <input
              size={"Small"}
                className="modalTextField"
                type="text"
                placeholder="Write your feedback subject"
              />
            </div>
            </div>

            <div className='row'>
            <label>Description</label>
            <div style={{ marginBottom: "8px" }}>
            <TextArea rows={4} />
            </div>
            </div>


            <div className='row'>
            <label>Issuing Department</label>
            <div style={{ marginBottom: "8px" }}>
              <input
                className="modalTextField"
                type="text"
                placeholder="Write your feedback subject"
              />
            </div>
            </div>

            <div className='row'>
            <label>Time to get in Days</label>
            <div style={{ marginBottom: "8px" }}>
              <input
                className="modalTextField"
                type="text"
                placeholder="Write your feedback subject"
              />
            </div>
            </div>

            <div className='row'>
            <label>Fee Amount</label>
            <div style={{ marginBottom: "8px" }}>
              <input
                className="modalTextField"
                type="text"
                placeholder="Write your feedback subject"
              />
            </div>
            </div>

            </div>
            
            <div className="col-lg-6" style={{marginBottom: "148px"}}>
            <div className='row'>
            <label>Renewal Period (Months)</label>
            <div style={{ marginBottom: "8px" }}>
              <input
                className="modalTextField"
                type="text"
                placeholder="Write your feedback subject"
              />
            </div>
            </div>

            <div className='row'>
            <label>Is inspection required?</label>
            <div style={{ marginBottom: "8px" }}>
              <input
                className="modalTextField"
                type="text"
                placeholder="Write your feedback subject"
              />
            </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>

            <div className='row'>
            <div class="">
            <div><label>Is inspection required?</label> </div>
            
            <div class="input-group d-flex justify-content-end">
                <input
                size={"Large"}
                  type="text"
                  className="modalTextField"
                  placeholder="Example input"
                />
                <button style={{marginTop: "-38px", backgroundColor: "#7a0202", borderColor: "#7a0202"}} class="btn btn-primary" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                    Visit
                </button>
            </div>
           </div>
            </div>

            </div>

            </div>
            </div>),
        },
        {
          label: ' List of Requirements to Apply',
          key: '2',
          children: (
            <div style={{height:"400px"}}>
            <div className='row'>
            <div  className='col-lg-6'>
            <div className='row'>
            <label>Documents Required</label>
            <div style={{ marginBottom: "8px" }}>
            <TextArea rows={4} />
            </div>
            </div>
            <div className='row'>
            <div><a href="comingsoon.html">
              <button type="button" className="amin">
              <span style={{ width: '179px', height: '33px' }}>
              View Documents Requirement Detail
              </span>
              </button>
              </a>
            </div>
            </div>
            </div>

            <div  className='col-lg-6'>
            <div className='row'>
            <label>Procedure</label>
            <div style={{ marginBottom: "8px" }}>
            <TextArea rows={4} />
            </div>
            </div>
            <div className='row'>
            <div><a href="comingsoon.html">
              <button type="button" className="amin">
              <span style={{ width: '179px', height: '33px' }}>
              View Procedure Detail
              </span>
              </button>
              </a>
            </div>
            </div>
            </div>
            </div>

            </div>),
        },
        {
          label: ' Laws / Rules / Regulations / Documents',
          key: '3',
          children: (<div style={{height:"400px"}}>
          <DocumentGrid/>

          </div>),
        },
      ]}
    />

      </Modal>


    </>
  );
};

export default DetailModal;