import React, { useCallback } from "react";
import GenericHeader from "./genericHeader";
import { useState } from "react";
import { useEffect } from "react";
import MobileHeaderGeneric from "./MobileHeaderGeneric";
import { PieChart, pieArcClasses } from "@mui/x-charts/PieChart";
import DonutChart from "react-donut-chart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart, Doughnut } from "react-chartjs-2";

import "../Css/dashboard.css";
import { Select } from "@mui/material";

import { Bar } from "react-chartjs-2";
import Donut from "./Donut";
import CountUp from "react-countup";
import BarChart from "./BarChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const color = [
  "#8CD3FF",
  "#003280",
  "#F54AA6",
  "#F2D14F",
  "#D99AC9",
  "#9ACCDB",
  "#FDC263",
  "#CBC4AA",
];
const Dashboard = () => {
  const [selectedDepartment, setSelectedDepartment] =
    useState("Private Colleges");
  const [selectedDepart, setSelectedDepart] = useState(
    "License For Pesticide Dealership"
  );
  const [showDepartment, setShowDepartment] = useState("Labour Department");
  const [toggle, setToggle] = useState(false);
  const [selectedItem, setSelectedItem] = useState(true);
  const [Color, setColor] = useState(0);
  const [toggleSelect, setToggleSelect] = useState(false);
  const [showDropdown, setshowDropdown] = useState(false);
  const [lableHover, setlableHover] = useState("Private Colleges");
  //  let [subDropdownFilter, setsubDropdownFilter] = useState([])

  ///////////////////////////////
  const [count, setCount] = useState(0);

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
    // setshowDropdown(true)
  };
  const handleDepart = (event) => {
    setSelectedDepart(event.target.value);
  };

  const xAxis = [
    "2018-19 Year",
    "2019-20 Year",
    "2020-21 Year",
    "2021-22 Year",
    "2022-23 Year",
  ];
  const department = [
    { value: "Private Colleges", text: "Private Colleges" },
    {
      value: "College education department",
      text: "College education department",
    },
    {
      value: "Excise Taxation Department",
      text: "Excise, Taxation & Narcotics Control Department",
    },
    { value: "Agriculture Department", text: "Agriculture Department" },
    { value: "Industrial Department", text: "Industrial Department" },
    { value: "Health Department", text: "Health Department" },
    { value: "Sindh Revenue Board", text: "Sindh Revenue Board" },
  ];
  const dataForDonut = [
    ///////////// labour Department \\\\\\\\\\\\\\\
    {
      id: 1,
      label: "License For Pesticide Dealership",
      value: 73,
      text: "Agriculture Department",
      yearWiseData: [12, 13, 14, 17, 17],
      sun: xAxis,
    },
    {
      id: 2,
      label: "License For Fertilizer Dealership",
      value: 30,
      text: "Agriculture Department",
      yearWiseData: [9, 2, 12, 26, 16],
      sun: xAxis,
    },
    ////////////////Excise deparment ///////////////
    {
      id: 3,
      label: "ExciseTaxation",
      value: 30,
      text: "Excise Taxation Department",
      yearWiseData: [9, 2, 12, 26, 16],
      sun: xAxis,
      // isEmpty: true,
    },
    //////////////////////Private College
    {
      id: 4,
      label: "Private Colleges",
      value: 106,
      text: "Private Colleges",
      yearWiseData: [18, 24, 20, 23, 21],
      sun: xAxis,
    },

    /////////////College education department/////////////////
    {
      id: 4,
      label: "Fresh Registration Intermediate Colleges",
      value: 42,
      text: "College education department",
      yearWiseData: [17, 8, 6, 4, 7],
      total: [51, 23, 32, 32, 55],
      sun: xAxis,
    },
    {
      id: 4,
      label: "Renewal Registration Intermediate Colleges",
      value: 126,
      text: "College education department",
      yearWiseData: [26, 14, 20, 24, 42],
      // total:[51,23,32,32,55],
      sun: xAxis,
    },
    {
      id: 4,
      label: "Fresh Registration Degree Colleges",
      value: 8,
      text: "College education department",
      yearWiseData: [3, 1, 1, 0, 3],
      // total:[51,23,32,32,55],
      sun: xAxis,
    },
    {
      id: 4,
      label: "Renewal Registration Degree Colleges",
      value: 17,
      text: "College education department",
      yearWiseData: [5, 0, 5, 4, 3],
      // total:[51,23,32,32,55],
      sun: xAxis,
    },
    ////////////////Industrial Department/////////////
    {
      id: 5,
      label: "Karachi Region",
      value: 15,
      text: "Industrial Department",
      yearWiseData: [100, 4.68, 50],
      sun: ["1986-87 Year", "2002-03 Year", "2003-04 Year"],
    },
    // {
    //   id:6,
    //   label:'Hyderabad Region',
    //   value:7,
    //   text:'Industrial Department',
    //   yearWiseData:[5, 5, 10.24, 51.21+50+30.20,50,13.50,4.68,50,50 ],
    //   sun:['1974-75 Year','1975-76 Year','1982-83 Year','1985-86 Year','1986-87 ','1992-93','2002-03','2007-08','2014-15']
    // },
    // {
    //   id:7,
    //   label:'Sukkur Region',
    //   value:8,
    //   text:'Industrial Department',
    //   yearWiseData:[110.5, 50, 15, 59.39, 50],
    //   sun:['1963-64','1985-86','1991-92','1993-94','2008-09']

    // },
    // {
    //   id:7,
    //   label:'Larkana Region',
    //   value:8,
    //   text:'Industrial Department',
    //   yearWiseData:[59.05,36+14.32],
    //   sun:['1964-65','1984-85']
    // },
    ///////////////Health Department////////////////
    {
      id: 8,
      label: "Registration Certificate",
      value: 5448,
      text: "Health Department",
      yearWiseData: [3832, 584, 446, 411, 175],
      total: [3849, 789, 483, 443, 217],
      sun: xAxis,
    },

    {
      id: 9,
      label: "Provsional License",
      value: 311,
      text: "Health Department",
      yearWiseData: [17, 205, 37, 22, 30],
      sun: xAxis,
    },
    {
      id: 10,
      label: "Reguler License",
      value: 311,
      text: "Health Department",
      yearWiseData: [0, 0, 0, 10, 12],
      sun: xAxis,
    },
    /////////////////Sindh Revenue Board/////////////
    {
      id: 11,
      label: "Sindh Revenue Board",
      value: 153136.40036,
      text: "Sindh Revenue Board",
      yearWiseData: [35563, 40036, 149580],
      sun: ["2018-19 Year", "2019-20 Year", "2020-21 Year"],
    },
  ]?.filter((item) => {
    // setSelectedDepart(item?.label)
    return selectedDepartment == item?.text ? item : null;
  });
  useEffect(() => {
    setSelectedDepart(dataForDonut[0]?.label);
  }, [selectedDepartment]);
  let subDropdownFilter;
  if (dataForDonut[0]) {
    subDropdownFilter = dataForDonut?.filter((item) => {
      return item?.label == selectedDepart && item;
    });
  } else {
    subDropdownFilter = [1, 2, 3, 4, 5];
  }
  const add = () => {
    debugger;
    // if (subDropdownFilter) {
    //   return dataForDonut[0]?.yearWiseData;
    // }
    // else if (subDropdownFilter) {
    //   // setSelectedDepart(subDropdownFilter[0]?.label)
    //     return subDropdownFilter[0]?.yearWiseData;

    // }
    // if(!subDropdownFilter) {
    //   return [1, 1, 1, 1, 1];
    // }
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
      Bar: {
        color: "red",
        backgroundColor: "red",
      },
    },
  };

  const lable = subDropdownFilter[0]?.sun || [
    "2018-19",
    "2019-20",
    "2020-21",
    "2021-22",
    "2022-23",
  ];
  const data = {
    labels: lable,
    // datasets: [
    //   {
    //     label: subDropdownFilter[0]?.label,
    //     data: subDropdownFilter[0]?.yearWiseData || add(),
    //     backgroundColor:color[Math.floor(Math.random() * 6) + 1] ,
    //   },
    // ],
    datasets: dataForDonut.map((item, index) => {
      return {
        label: subDropdownFilter[0]?.label,
        data: item?.yearWiseData,
        backgroundColor: color[index],
      };
    }),
  };
  return (
    <>
      {windowWidth <= 500 ? <MobileHeaderGeneric /> : <GenericHeader />}
      {windowWidth <= 500 ? (
        <div></div>
      ) : (
        <div style={{ height: "150px" }}></div>
      )}
      <div className="parent_con  px-md-5  px-2">
        <div className="statistics ">
          <div className="row g-0 mb-4 d-flex justify-content-center">
            <div className="d-flex justify-content-center ">
              {/* <Fade top> */}
              <h1 className="title">Business Registrations in Karachi</h1>
              {/* </Fade> */}
            </div>
          </div>
          <div className="row mb-sm-5 mb-md-4  justify-content-between g-0 ">
            <div className="col-md-4 ">
              {/* <Fade left>
                <h3 className="title">Sindh Statistics Dashboard</h3>
              </Fade> */}
              {/* <Fade left> */}
              <div className="">
                <Select
                  size="small"
                  native
                  style={{ width: "100%" }}
                  // defaultValue={selectedDepartment}
                  // value={selectedDepartment}
                  onChange={handleDepartment}
                  inputProps={{
                    name: "case",
                    id: "outlined-age-native-simple",
                  }}
                >
                  {department?.map((item) => {
                    return <option value={item?.value}>{item?.text}</option>;
                  })}
                </Select>
              </div>
              {/* </Fade> */}
            </div>
            {/* <Fade right>
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
            </Fade> */}
            {/* {dataForDonut?.length > 1 && (
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
                    return <option value={item?.label}>{item?.label}</option>;
                  })}
                </Select>
              </div>
            )} */}
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
          <div
            className={` row g-0 justify-content-between mt-4 mt-sm-0 bg-primary `}
          >
            {/* {xAxis.map((item, index) => {
              return (
                <Zoom>
                  <div
                    className={`box1_container  col-sm-12 col-md-2 mb-sm-3 mb-md-0 mb-3 ${
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
            })} */}
            {/* {xAxis.map((item, index) => {
              return (
                <Zoom>
                  <div
                    className={`box1_container  col-sm-12 col-md-2 mb-sm-3 mb-md-0 mb-3 `}
                    // style={ (index + 1) % 5== 0? {} :{marginRight:"32px",backgroundColor:"red"}}
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
            })} */}
          </div>
          {/* <Fade top> */}
          {/* <div
              className={` card_container ${
                dataForDonut[0]?.sun?.length == 3 ? "col-7" : ""
              }`}
            >
              {subDropdownFilter?.length > 1
                ? subDropdownFilter[0]?.sun?.map((item, index) => {
                    return (
                      <div
                        className={`box1_container 

         `}
                        style={{
                          width:
                            dataForDonut[0]?.sun?.length == 3 ? "20%" : "17.9%",
                          marginRight: (index + 1) % 5 == 0 ? 0 : 0,
                        }}
                      >
                        <div className="department">
                          <h4>{item}</h4>
                        </div>
                        <div className="tolat_department">
                          <h1>
                            {(
                              <CountUp
                                start={0}
                                end={subDropdownFilter[0]?.yearWiseData[index]}
                                delay={2}
                              ></CountUp>
                            ) ?? add()[index]}
                          </h1>
                        </div>
                      </div>
                    );
                  })
                : dataForDonut[0]?.sun?.map((item, index) => {
                    return (
                      <div
                        className={`box1_container  ${
                          subDropdownFilter[0]?.sun?.length > 5 && "mb-5"
                        } `}
                        style={{
                          width:
                            dataForDonut[0]?.sun?.length == 3 ? "30%" : "17.9%",
                        }}
                      >
                        <div className="department">
                          <h4>{item}</h4>
                        </div>
                        <div className="tolat_department">
                          <h1>
                            {(
                              <CountUp
                                start={0}
                                end={subDropdownFilter[0]?.yearWiseData[index]}
                                delay={0}
                              ></CountUp>
                            ) ?? add()[index]}
                          </h1>
                        </div>
                      </div>
                    );
                  })}
            </div> */}

          <div
            className={` card_container ${
              dataForDonut[0]?.sun?.length == 3 ? "col-7" : ""
            }`}
          >
            {subDropdownFilter[0]?.total
              ? subDropdownFilter[0]?.sun?.map((item, index) => {
                  return (
                    <div
                      className={`box1_container 

         `}
                      style={{
                        width:
                          dataForDonut[0]?.sun?.length == 3 ? "20%" : "17.9%",
                        marginRight: (index + 1) % 5 == 0 ? 0 : 0,
                      }}
                    >
                      <div className="department">
                        <h4>{item}</h4>
                      </div>
                      <div className="tolat_department">
                        <h1>
                          {(
                            <CountUp
                              start={0}
                              end={subDropdownFilter[0]?.total[index]}
                              delay={2}
                            ></CountUp>
                          ) ?? add()[index]}
                        </h1>
                      </div>
                    </div>
                  );
                })
              : dataForDonut[0]?.sun?.map((item, index) => {
                  return (
                    <div
                      className={`box1_container  ${
                        subDropdownFilter[0]?.sun?.length > 5 && "mb-5"
                      } `}
                      style={{
                        width:
                          dataForDonut[0]?.sun?.length == 3 ? "30%" : "17.9%",
                      }}
                    >
                      <div className="department">
                        <h4>{item}</h4>
                      </div>
                      <div className="tolat_department">
                        <h1>
                          {(
                            <CountUp
                              start={0}
                              end={subDropdownFilter[0]?.yearWiseData[index]}
                              delay={0}
                            ></CountUp>
                          ) ?? add()[index]}
                        </h1>
                      </div>
                    </div>
                  );
                })}
          </div>
          {/* </Fade> */}
        </div>

        <div className="chart_container">
          {/* <Fade > */}
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
              <div className="col-md-12 col-lg-6 xxl-4 pe-xxl-4 mt-md-0 mt-5 mt-lg-5 mt-xxl-0 ">
                {/* <Donut/> */}
                {/* <PieChart
      
      series={[
        {
          
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30,  additionalRadius: -30 },
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
                  onMouseEnter={(item) => {
                    console.log(item);
                  }}
                  innerWidth={500}
                  legend={false}
                  clickToggle={false}
                  colors={color}
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
                  stroke={false}
                  height={
                    windowWidth <= 500
                      ? 410
                      : windowWidth >= 768 && windowWidth <= 991
                      ? 300
                      : windowWidth >= 992 && windowWidth <= 1199
                      ? 300
                      : windowWidth >= 1200 && windowWidth <= 1399
                      ? 360
                      : windowWidth >= 1400 && windowWidth <= 1600
                      ? 400
                      : windowWidth > 1600
                      ? 530
                      : 350
                  }
                  width={
                    windowWidth <= 500
                      ? 390
                      : windowWidth >= 768 && windowWidth <= 991
                      ? 300
                      : windowWidth >= 992 && windowWidth <= 1199
                      ? 300
                      : windowWidth >= 1200 && windowWidth <= 1399
                      ? 360
                      : windowWidth >= 1400 && windowWidth <= 1600
                      ? 400
                      : windowWidth > 1600
                      ? 530
                      : 350
                  }
                  position="bottom"
                  // className={
                  //   " donutchart-innertext-label  donutchart-innertext-value       donutchart-arcs-pathdonutchart-legend-item  pie "
                  // }
                  // strokeColor="false"
                  // label={false}
                  // interactive={false}

                  // clickToggle={false}
                  // selectedOffset={false}
                  // outerRadius={1.1}
                />
                {/* <Donut/> */}
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

              <div className="col-md-12   col-sm-12 bg-primary col-lg-5 col-xxl-4 justify-content-end lable_parent">
                <div className="wappper ms-md-3 ms-xxl-0">
                  {dataForDonut.map((item, id) => {
                    return (
                      <>
                        <div className="lable_container ">
                          <div
                            style={{
                              height: 15,
                              minWidth: 15,
                              borderRadius: 2,
                              backgroundColor: color[id],
                              marginRight: 5,
                              marginTop: 5,
                            }}
                            className="lable_box"
                          ></div>
                          <p
                            style={{
                              backgroundColor: Color == item.id && "",
                              padding: 0,
                            }}
                            className="lable mt-n5"
                            id={id + 1}
                          >
                            {item?.label}
                          </p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* </Fade> */}

          {/* <Fade right> */}
          <div className="bar_chart ">
            <div className="row g-0 ">
              <div className="col">
                <h3>
                  {dataForDonut?.length > 1
                    ? selectedDepart
                    : selectedDepartment}
                </h3>
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
            <div className="">
              {/* <BarChart
                xAxis={[
                  {
                    // data: [
                    //   "2018-19",
                    //   "2019-20",
                    //   "2020-21",
                    //   "2021-22",
                    //   "2022-23",
                    // ],
                    data: subDropdownFilter[0]?.sun || [
                      "2018-19",
                      "2019-20",
                      "2020-21",
                      "2021-22",
                      "2022-23",
                    ],
                    scaleType: "band",
                  },
                ]}
                series={[
                  {
                    id: Math.random(),
                    // data: subDropdownFilter? subDropdownFilter[0]?.yearWiseData:dataForDonut.length==1?dataForDonut[0]?.yearWiseData: [1,1,1,1,1],
                    data: subDropdownFilter[0]?.yearWiseData || add(),
                    color: color[Math.floor(Math.random() * 6) + 1],
                    layout: "vertical",
                    fill: "red",
                    // data:[1,1,1,1,1]
                  },
                ]}
                // series={dataForDonut.map((item, index) => {
                //   return {
                //     data: item?.yearWiseData,
                //     backgroundColor: "green",
                //     color: color[index],
                //   };
                // })}
                // width={ 600}
                // height={350}

                height={
                  windowWidth <= 500
                    ? 410
                    : windowWidth >= 768 && windowWidth <= 991
                    ? 310
                    : windowWidth >= 992 && windowWidth <= 1199
                    ? 300
                    : windowWidth >= 1200 && windowWidth <= 1399
                    ? 380
                    : windowWidth >= 1400 && windowWidth < 1600
                    ? 380
                    : windowWidth >= 1600 && windowWidth < 1800
                    ? 400
                    : windowWidth >= 1800
                    ? 480
                    : 350
                }
                width={
                  windowWidth <= 500
                    ? 390
                    : windowWidth >= 768 && windowWidth <= 991
                    ? 350
                    : windowWidth >= 992 && windowWidth <= 1199
                    ? 510
                    : windowWidth >= 1200 && windowWidth <= 1399
                    ? 600
                    : windowWidth >= 1400 && windowWidth < 1600
                    ? 600
                    : windowWidth >= 1600 && windowWidth < 1800
                    ? 700
                    : windowWidth >= 1800
                    ? 800
                    : 350
                }
                className="bar-chart-container MuiXChart-bar "
                actualDuration={0.5}
                baseDuration={0.5}
                startTime={0.5}
              /> */}
              <BarChart options={options} data={data} />
            </div>
          </div>
          {/* </Fade> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
