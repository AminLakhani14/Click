import React from "react";
import GenericHeader from "./genericHeader";
import { useState } from "react";
import { useEffect } from "react";
import MobileHeaderGeneric from "./MobileHeaderGeneric";
import { BarChart } from "@mui/x-charts/BarChart";
import Roll from "react-reveal/Roll";
import Checkbox from "@mui/material/Checkbox";
import { PieChart, pieArcClasses } from "@mui/x-charts/PieChart";
import DonutChart from "react-donut-chart";
// import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend, } from 'chart.js';
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Chart, Doughnut } from "react-chartjs-2";

import "../Css/dashboard.css";
import { Select } from "@mui/material";
import { Footer } from "antd/es/layout/layout";

import { Bar } from "react-chartjs-2";
import { Faker } from "@faker-js/faker";
import Donut from "./Donut";
import { Fade, Zoom } from "react-reveal";
import { red } from "@mui/material/colors";

ChartJs.register(
  Tooltip,
  Title,
  ArcElement,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

// const data = {
//     datasets: [{
//         data: [10, 20, 30],
//         backgroundColor:[
//           'red',
//           'blue',
//           'yellow'
//         ]
//     },
//   ],
//   // These labels appear in the legend and in the tooltips when hovering different arcs
//   labels: [
//       'Red',
//       'Yellow',
//       'Blue'
//   ],
// };

const Dashboard = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(
    "Agriculture Department"
  );
  const [selectedDepart, setSelectedDepart] = useState(
    "License For Pesticide Dealership"
  );
  const [showDepartment, setShowDepartment] = useState("Labour Department");
  const [toggle, setToggle] = useState(false);
  const [selectedItem, setSelectedItem] = useState(true);
  const [Color, setColor] = useState(0);
  const [toggleSelect, setToggleSelect] = useState(false);

  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setwindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // const [data, setData] = useState({
  //   datasets: [{
  //     data: [10, 20, 30],
  //     backgroundColor: [
  //       'pink',
  //       'blue',
  //       'yellow'
  //     ]
  //   },
  //   ],
  //   labels: [
  //     'Red',
  //     'Yellow',
  //     'Blue'
  //   ],
  // });
  useEffect(() => {
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((data) => {
          const res = data.json();
          return res;
        })
        .then((res) => {
          console.log("resss", res);
          const label = [];
          const data = [];
          for (var i of res) {
            label.push(i.name);
            data.push(i.id);
          }
          // setData(
          //   {
          //     datasets: [{
          //       data: data,
          //       backgroundColor: [
          //         'pink',
          //         'skyblue',
          //         'yellow'
          //       ]
          //     },
          //     ],
          //     labels: label,
          //     color: function (context) {
          //       const index = context.dataIndex;
          //       const value = context.dataset.data[index];
          //       return value < 0 ? 'red' :  // draw negative values in red
          //         index % 2 ? 'blue' :    // else, alternate values in blue and green
          //           'green';
          //     },
          //   },

          // )
        })
        .catch((e) => {
          console.log("error", e);
        });
    };
    fetchData();
  }, []);

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  // const options = {
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         position: 'top' ,
  //       },
  //       title: {
  //         display: false,
  //         text: 'Chart.js Bar Chart',
  //       },
  //     },
  //   };

  const options = {
    // Customize the appearance of the labels
    legend: {
      display: true,
      position: "right",
      labels: {
        fontColor: "red", // Set label text color
        fontSize: 16,
        backgroundColor: "red", // Set label text font size
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        // label: 'Dataset 1',
        // data: labels.map(() => Faker.datatype.number({ min: 0, max: 1000 })),
        data: [1, 2, 3],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        // data: labels.map(() => Faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const d = {
    labels: ["college Department", "Labour Department", "Health Department"],
    datasets: [
      {
        // label: 'Dataset 1',
        data: [1, 2, 3],
        // borderColor: '#36A2EB',
        backgroundColor: "#9BD0F5",
        backgroundColor: ["pink", "skyblue", "green"],
        labels: false,
      },
    ],
  };
  // const options = {
  //   // Customize the appearance of the labels
  //   plugins: {
  //     legend: {
  //       display: true, // Display the legend
  //       position: 'right', // Position the legend on the right side
  //     },
  //   },
  //   // Customize label font settings
  //   scales: {
  //     y: {
  //       ticks: {
  //         color: 'black', // Label text color
  //         font: {
  //           size: 16, // Label text font size
  //           weight: 'bold', // Label text font weight
  //         },
  //       },
  //     },
  //   },
  // };
  const handleDepartment = (event) => {
    setSelectedDepartment(event.target.value);
    // console.log(LicenseFilter[0]?.yearWiseData)
    // setShowDepartment(event.target.innerHTML)
  };
  const handleDepart = (event) => {
    setSelectedDepart(event.target.value);
  };
  console.log("lable", selectedDepart);
  const a = [
    {
      id: 0,
      value: 10,
      label: "Labour Department",
      style: { backgroundColor: "red" },
    },
    { id: 1, value: 15, label: "Labour Department" },
    { id: 3, value: 12, label: "Labour Department" },
    { id: 5, value: 5, label: "Labour Department" },
    { id: 6, value: 10, label: "Labour Department" },
    { id: 7, value: 20, label: "Labour Department" },
  ];

  const handleItemClick = (item, toggled) => {
    // When an item is clicked:
    // - If it's not selected (toggled is true), select it.
    // - If it's already selected (toggled is false), deselect it.
    // setSelectedItem(toggled ? item : null);
    console.log("item", item, "toggle", toggled);
    //  if(toggled){
    //   setSelectedItem(false)
    //  }
    //  else{
    //   setSelectedItem(true)
    //  }
  };
  const arr = [
    {
      id: 1,
      label: "Health Department",
      value: 30,
    },
    {
      id: 2,
      label: "College Department",
      value: 30,
      className: "donutchart",
      // isEmpty: true,
    },
    {
      id: 3,
      label: "Labour Department",
      value: 30,
    },
    {
      id: 4,
      label: "Sindh Food Authority",
      value: 30,
    },
    {
      id: 5,
      label: "Board Of Revenue Sindh",
      value: 30,
    },
    {
      id: 6,
      label: "Industrial Department",
      value: 30,
    },
    {
      id: 7,
      label: "Energy Department",
      value: 30,
    },
  ];
  const dot = [
  
    "#8CD3FF",
    '#003280',
    "#F54AA6",
    "#F2D14F",
    "#D99AC9",
    "#9ACCDB",
    
    "#FDC263",

    "#CBC4AA",
   
  ];
  const year = [
    "2018-19 Year",
    "2019-20 Year",
    "2020-21 Year",
    "2021-22 Year",
    "2022-23 Year",
  ];
  const department = [
    {
      value: "College Education Department",
      text: "College Education Department",
    },
    {
      value: "Labour and Human Resources Department",
      text: "Labour and Human Resources Department",
    },
    { value: "Sindh Food Authority (SFA)", text: "Sindh Food Authority (SFA)" },
    { value: "Health Department", text: "Health Department" },
    {
      value: "School Education and Literacy Department",
      text: "School Education and Literacy Department",
    },
    {
      value: "Sindh Health Care Commission",
      text: "Sindh Health Care Commission",
    },
    {
      value: "Industries and Commerce Department",
      text: "Industries and Commerce Department",
    },
    {
      value: "Sindh Environmental Protection Agency (SEPA)",
      text: "Sindh Environmental Protection Agency (SEPA)",
    },
    {
      value: "Sindh Building Control Authority (SBCA)",
      text: "Sindh Building Control Authority (SBCA)",
    },
    { value: "Agriculture Department", text: "Agriculture Department" },
    {
      value: "Sindh Industrial Trading Estate (S.I.T.E) Limited",
      text: "Sindh Industrial Trading Estate (S.I.T.E) Limited",
    },
    {
      value: "Sindh Small Industries Corporation (SSIC)",
      text: "Sindh Small Industries Corporation (SSIC)",
    },
    { value: "Board Of Revenue", text: "Board of Revenue" },
    {
      value: "District Municipal Corporation",
      text: "District Municipal Corporation (DMC)",
    },
    {
      value: "Karachi Metropolitan Corporation",
      text: "Karachi Metropolitan Corporation (KMC)",
    },
    { value: "Energy Department", text: "Energy Department" },
    {
      value: "SindhEmployeesSecurity",
      text: "Sindh Employees Social Security Institution (SESSI)",
    },
    {
      value: "ExciseTaxation",
      text: "Excise, Taxation & Narcotics Control Department",
    },
    { value: "Sindh Revenue Board", text: "Sindh Revenue Board" },
    { value: "LocalGovernment", text: "Local Government Department" },
    {
      value: "Karachi Water And Sewerage",
      text: "Karachi Water &amp; Sewerage Board",
    },
  ];
  const dataForDonut = [
    {
      id: 1,
      label: "License For Pesticide Dealership",
      value: 73,
      text: "Agriculture Department",
      yearWiseData: [12, 13, 14, 17, 17],
    },
    {
      id: 2,
      label: "License For Fertilizer Dealership",
      value: 30,
      text: "Agriculture Department",
      yearWiseData: [9, 2, 12, 26, 16],

      // isEmpty: true,
    },

    {
      id: 3,
      label: "ExciseTaxation",
      value: 30,
      text: "ExciseTaxation",
      yearWiseData: [9, 2, 12, 26, 16],
      // isEmpty: true,
    },
  ].filter((item) => {
    return selectedDepartment == item?.text ? item : null;
  });

  let LicenseFilter;
  if (dataForDonut[0]) {
    LicenseFilter = dataForDonut?.filter((item) => {
      return item?.label == selectedDepart && item;
    });
  }
  console.log(
    "🚀 ~ file: Dashboard.js:376 ~ Dashboard ~ LicenseFilter:",
    dataForDonut
  );

  // console.log("🚀 ~ file: Dashboard.js:373 ~ LicenseFilter ~ LicenseFilter:", LicenseFilter)
  const barData = [12, 13, 14, 17, 17];
  const add = () => {
    
    if (dataForDonut.length == 1) {
      console.log(
        "🚀 ~ file: Dashboard.js:429 ~ add ~ dataForDonut:",
        dataForDonut
      );
      return dataForDonut[0]?.yearWiseData;
    } else if (LicenseFilter) {
      return LicenseFilter[0]?.yearWiseData;
    } else {
      return [1, 1, 1, 1, 1];
    }
  };
  const label = {
    label: "My Checkbox",
    disabled: false,
    value: "ads",
    // Other properties
  };
  return (
    <>
      {windowWidth <= 500 ? <MobileHeaderGeneric /> : <GenericHeader />}
      {windowWidth <= 500 ? (
        <div></div>
      ) : (
        <div style={{ height: "150px" }}></div>
      )}
      {/* <div className="App" style={{width:'30%', height:'30%',}}>
         <Doughnut data={d}
        //  options={options}
         />
         </div> */}
      <div className="parent_con  px-md-5  px-2">
        <div className="statistics ">
          <div className="row mb-sm-5 mb-md-4  justify-content-between g-0 ">
            <div className="col ">
              <Fade left>
                <h3 className="title">Sindh Statistics Dashboard</h3>
              </Fade>
            </div>
            <Fade right>
              <div className="col-md-4">
                <Select
                  size="small"
                  native
                  style={{ width: "100%" }}
                  defaultValue={selectedDepartment}
                  value={selectedDepartment}
                  onChange={handleDepartment}
                  inputProps={{
                    name: "case",
                    id: "outlined-age-native-simple",
                  }}
                >
                  {department.map((item) => {
                    return <option value={item.value}>{item.text}</option>;
                  })}
                </Select>
              </div>
            </Fade>
            {/* <div className="row g-0 ">
              <div className="col-12 d-flex justify-content-end">
                {dataForDonut[1] && (
                  <div className="col-4 ">
                    {dataForDonut?.map((item, index) => {
                      return (
                        <>
                          {index == 0 ? (
                            <>
                              <div className="d-flex">
                              <Checkbox
                                defaultValue={selectedDepart}
                                value={item.label}
                                onChange={handleDepart}
                                defaultChecked
                                {...label}
                              />
                              <p  className="mt-3">{item.label}</p>
                              </div>
                            </>
                          ) : (

                            <>
                            <div className="d-flex">
                            <Checkbox
                              defaultValue={selectedDepart}
                              value={item.label}
                              onChange={handleDepart}
                              {...label}
                            />
                            <p  className="mt-3">{item.label}</p>
                            </div>
                          </>
                          )}
                        </>
                      );
                    })}
                  </div>
                )}
              </div>
            </div> */}
          </div>
          {/* <div className="row g-0 bg-secondary ">
            {year.map((item, index) => {
              return (
                <Zoom>
                  <div
                    className={`col-sm-12 bg-primary ${
                      year.length == index + 1 ? 0 : "me-3"
                    }  box`}
                  >
                    <div className="department">
                      <h4>{item}</h4>
                    </div>
                    <div className="tolat_department">
                      <h1>{add()[index]}</h1>
                    </div>
                  </div>
                  
                </Zoom>
              );
            })}
          </div> */}
            <div className=" row g-0 justify-content-between ">
            {year.map((item, index) => {
              return (
                <Zoom>
                  <div
                    className={`box1_container  col-sm-12 col-md-2   ${
                      (index + 1) % 5== 0? 0 : "me-3"
                     }`}
                    // style={{marginRight:windowWidth =>1400 && 400}}
                  >
                    <div className="department">
                      <h4>{item}</h4>
                    </div>
                    <div className="tolat_department">
                      <h1>{add()[index]}</h1>
                    </div>
                  </div>
                  
                </Zoom>
              );
            })}
          </div>
        </div>
        <div className="chart_container">
          <Fade left>
            <div className="pie_chart ">
              {/* <div className="row justify-content-between g-0  mb-3">
              <div className="col ">
                <h4 className='title'>{selectedDepart}</h4>
              </div>
              <div className="col-4">
                <Select
                  size='small'
                  native
                  style={{ width: "100%", }}
                  defaultValue={selectedDepart}
                  value={selectedDepart}
                  onChange={handleDepart}
                  inputProps={{
                    name: "case",
                    id: "outlined-age-native-simple",
                  }}
                  >
                  <option value={"Labour Department"}>Labour Department</option>;
                  <option value={"Health Department"}>Health Department</option>;
                  </Select>
                  </div>
                </div> */}

              <div className="row g-0 ">
                <div className="col-md-6  col-xxl-8   mt-5 ">
                  {/* <Donut/> */}
                  {/* <PieChart
      
      series={[
        {
          
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30 },
          data:a,
          cornerRadius:5,

        },
      ]}
      color={['red','green','blue']}
      sx={{
        [`& .${pieArcClasses.faded}`]: {
          fill: ' gray',
        },
        backgroundColor:"red",
        marginRight:10,
        display:"flex",
        justifyContent:"space-between",
        padding:0,
      
      }}
      height={350}
    /> */}
                  <DonutChart
                    onClick={(a, toggled) => {
                      handleItemClick("", toggled);
                    }}
                    innerWidth={500}
                    legend={false}
                    clickToggle={false}
                    colors={dot}
                    data={
                      dataForDonut || [
                        {
                          id: 4,
                          label: "License For Pesticide Dealership",
                          value: 73,
                          text: "Agriculture Department",
                          yearWiseData: [12, 13, 14, 17, 17],
                        },
                      ]
                    }
                    // interactive={false}

                    height={380}
                    width={380}
                    // onMouseLeave={(a)=>{
                    //   console.log(a)
                    // }}
                    //  selected={false}
                    // colorFunction={()=>{}}
                    position="bottom"
                    // emptyOffset={false}
                    className={
                      " donutchart-innertext-label  donutchart-innertext-value       donutchart-arcs-pathdonutchart-legend-item  pie "
                    }
                    strokeColor="false"
                    // label={false}
                    // interactive={false}

                    // clickToggle={false}
                    // selectedOffset={false}
                    // outerRadius={1.1}
                  />
                  {/* ////////////////////////////////////////////////////////////////////// */}
                  {/* <Doughnut data={d}
         options={options}
         onAnimationStart={true}
         borderRadius={50}
         borderJoinStyle='round'
         hoverBackgroundColor='red'
         borderColor='red'
         label={false}
         legend={false}
         color='red'
         /> */}
                </div>

                <div
                  className="col-md-6  col-sm-12  col-xxl-4  justify-content-end"
                  style={{ marginTop: "-335px " }}
                >
                  {/* <div className="d-flex justify-content-between border-bottom pb-0 mb-0 mt-n5">
                <p style={{fontSize:18,fontWeight:"bold",margin:1,color:"#054a91"}}>License For :</p>
                <p style={{fontSize:18,fontWeight:"bold",margin:1,color:"#054a91"}}>Total</p>
              </div> */}
                  {dataForDonut.map((item, id) => {
                    return (
                      <>
                        <div className="d-flex justify-content-end">
                          <div
                                // className="me-1 mt-1"
                                style={{
                                  height: 15,
                                  width: 15,
                                  borderRadius: 2,
                                  backgroundColor: dot[id],
                                  display: "inline-block",
                                  marginRight:5
                                }}
                              ></div>
                            <p
                              // className="m-1 ms-0"
                              style={{
                                backgroundColor: Color == item.id && "",
                                display: "inline-block",
                                // marginTop: -50,
                                // backgroundColor: "red",
                                padding: 0,
                                marginTop:-5

                                // margin:50
                              }}
                              id={id + 1}
                            >
                             
                              {item.label}
                            </p>
                          </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="bar_chart ">
              <div className="row g-0">
                <div className="col">
                  <h3>{selectedDepartment}</h3>
                </div>

                {/* {dataForDonut[1] && (
                  <div className="col-4">
                    <Select
                      size="small"
                      native
                      style={{ width: "100%" }}
                      defaultValue={selectedDepart}
                      value={selectedDepart}
                      onChange={handleDepart}
                      inputProps={{
                        name: "case",
                        id: "outlined-age-native-simple",
                      }}
                    >
                      {dataForDonut?.map((item) => {
                        return <option value={item.label}>{item.label}</option>;
                      })}
                    </Select>
                  </div>
                )} */}
              </div>
              <div className="mt-3">
                <BarChart
                  id="auto-generated-id-0"
                  xAxis={[
                    {
                      data: [
                        "2018-19",
                        "2019-20",
                        "2020-21",
                        "2021-22",
                        "2022-23",
                      ],
                      scaleType: "band",
                    },
                  ]}
                  // series={[
                  //   {
                  //     id: Math.random(),
                  //     data: add(),
                  //     // data: LicenseFilter? LicenseFilter[0]?.yearWiseData:dataForDonut.length==1?dataForDonut[0].yearWiseData: [1,1,1,1,1],
                  //     // data: {
                  //     //   if(LicenseFilter){
                  //     //    return  LicenseFilter[0]?.yearWiseData
                  //     //   }
                  //     //   else if(sdadsda){

                  //     //   }
                  //     // },
                  //   },  {
                  //     id: Math.random(),
                  //     data: add(),
                  //     // data: LicenseFilter? LicenseFilter[0]?.yearWiseData:dataForDonut.length==1?dataForDonut[0].yearWiseData: [1,1,1,1,1],
                  //     // data: {
                  //     //   if(LicenseFilter){
                  //     //    return  LicenseFilter[0]?.yearWiseData
                  //     //   }
                  //     //   else if(sdadsda){

                  //     //   }
                  //     // },
                  //   },
                  // ]}
                  series={dataForDonut.map((item, index) => {
                    return {
                      data: item.yearWiseData,
                      backgroundColor: "green",
                      color: dot[index],
                    };
                  })}
                  width={ 600}
                  height={350}
                  className="bar"
                />
              </div>
            </div>
          </Fade>
        </div>
      </div>
      
    </>
  );
};

export default Dashboard;
