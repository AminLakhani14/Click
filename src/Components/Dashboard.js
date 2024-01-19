import React, { useCallback, useMemo } from "react";
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
import { InputLabel, Select } from "@mui/material";

import { Bar } from "react-chartjs-2";
import Donut from "./Donut";
import CountUp from "react-countup";
import BarChart from "./BarChart";
import Item from "antd/es/list/Item";

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
  "maroon",
  "#9ACCDB",
  "#FDC263",
  "#CBC4AA",
///////////////////
  "#8CD3FF",
  "#9ACCDB",
  "#CBC4AA",
  "#D99AC9",
  "#F54AA6",
  "#003280",
  "#F54AA6",
];
const Dashboard = () => {
  const [selectedDepartment, setSelectedDepartment] =
    useState("Private Colleges");
  const [selectedDepart, setSelectedDepart] = useState(
    "ALL"
  );
  const [showDepartment, setShowDepartment] = useState("Labour Department");
  const [toggle, setToggle] = useState(false);
  const [selectedItem, setSelectedItem] = useState(true);
  const [Color, setColor] = useState(0);
  const [toggleSelect, setToggleSelect] = useState(false);
  const [showDropdown, setshowDropdown] = useState(false);
  const [lableHover, setlableHover] = useState("Private Colleges");
  //  let [subDropdownFilter, setsubDropdownFilter] = useState([])
  const vehicleType=['Two-Wheelers (Bikes)','Four-Wheelers (Cars)']
  const [getVehicleType, setgetVehicleType] = useState(vehicleType[0])

 
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
        })
        .catch((e) => {
          console.log("error", e);
        });
    };
    fetchData();
  }, []);
 

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
    { value: "Industrial Department", text: "Industries Department" },
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
      label: "Honda",
      value: 632610,
      text: "Excise Taxation Department",
      yearWiseData: [180073, 113991, 116171, 124597, 96778],
      sun: xAxis,
      vehicleType:'Two-Wheelers (Bikes)',
      // isEmpty: true,
    },
    {
      id: 4,
      label: "United",
      value: 46932,
      text: "Excise Taxation Department",
      yearWiseData: [7777, 8056, 9898, 13200, 8901],
      sun: xAxis,
      vehicleType:'Two-Wheelers (Bikes)'

      // isEmpty: true,
    },{
      id: 3,
      label: "Super Power",
      value: 246605,
      text: "Excise Taxation Department",
      yearWiseData: [81866, 53952, 37246, 42679, 30862],
      sun: xAxis,
      vehicleType:'Two-Wheelers (Bikes)'

      // isEmpty: true,
    },{
      id: 3,
      label: "BMW",
      value: 28,
      text: "Excise Taxation Department",
      yearWiseData: [10, 9, 3, 1, 5],
      sun: xAxis,
      vehicleType:'Two-Wheelers (Bikes)'

      // isEmpty: true,
    },{
      id: 3,
      label: "Benelli",
      value: 165,
      text: "Excise Taxation Department",
      yearWiseData: [9, 42, 33, 49, 32],
      sun: xAxis,
      vehicleType:'Two-Wheelers (Bikes)'

      // isEmpty: true,
    },
    {
      id: 3,
      label: "Grace",
      value: 5432,
      text: "Excise Taxation Department",
      yearWiseData: [1755, 1720, 860, 787, 310],
      sun: xAxis,
      vehicleType:'Two-Wheelers (Bikes)'

      // isEmpty: true,
    },{
      id: 3,
      label: "Suzuki",
      value: 47535,
      text: "Excise Taxation Department",
      yearWiseData: [7462, 7988, 7036, 12048, 13001],
      sun: xAxis,
      vehicleType:'Two-Wheelers (Bikes)'

      // isEmpty: true,
    },{
      id: 3,
      label: "Road Prince",
      value: 7849,
      text: "Excise Taxation Department",
      yearWiseData: [3665, 974, 725, 1457, 1028],
      sun: xAxis,
      vehicleType:'Two-Wheelers (Bikes)'

      // isEmpty: true,
    },{
      id: 3,
      label: "Harley  Davidson",
      value: 111,
      text: "Excise Taxation Department",
      yearWiseData: [29, 32, 13, 5, 32],
      sun: xAxis,
      vehicleType:'Two-Wheelers (Bikes)'

      // isEmpty: true,
    },
    ,{
      id: 3,
      label: "Super Star",
      value: 167820,
      text: "Excise Taxation Department",
      yearWiseData: [50936, 35027, 30285, 31137, 20435],
      sun: xAxis,
      vehicleType:'Two-Wheelers (Bikes)'

      // isEmpty: true,
    },
    {
      id: 3,
      label: "Unique",
      value: 380723,
      text: "Excise Taxation Department",
      yearWiseData: [99113, 97669, 77446, 73377, 33118],
      sun: xAxis,
      vehicleType:'Two-Wheelers (Bikes)'

      // isEmpty: true,
    },
    {
      id: 3,
      label: "Crown Motor",
      value: 32383,
      text: "Excise Taxation Department",
      yearWiseData: [10633, 7351, 4456, 2898, 1845],
      sun: xAxis,
      vehicleType:'Two-Wheelers (Bikes)'

      // isEmpty: true,
    },
    {
      id: 3,
      label: "Racer",
      value: 4500,
      text: "Excise Taxation Department",
      yearWiseData: [2761, 731, 289, 461, 258],
      sun: xAxis,
      vehicleType:'Two-Wheelers (Bikes)'

      // isEmpty: true,
    },
    {
      id: 3,
      label: "Bionic",
      value: 20195,
      text: "Excise Taxation Department",
      yearWiseData: [10734, 5579, 1941, 1521, 320],
      sun: xAxis,
      vehicleType:'Two-Wheelers (Bikes)'

      // isEmpty: true,
    },
    {
      id: 3,
      label: "Hero",
      value: 692,
      text: "Excise Taxation Department",
      yearWiseData: [514, 176, 0, 0, 2],
      sun: xAxis,
      vehicleType:'Two-Wheelers (Bikes)'

      // isEmpty: true,
    },
    {
      id: 3,
      label: "Jinan",
      value: 5903,
      text: "Excise Taxation Department",
      yearWiseData: [1989, 2001, 1227, 552, 134],
      sun: xAxis,
      vehicleType:'Two-Wheelers (Bikes)'

      // isEmpty: true,
    }, 
   //////////////////////Cars///////////////////
   {
    id: 3,
    label: "Alto",
    value: 111,
    text: "Excise Taxation Department",
    yearWiseData: [857, 6363, 8746, 16012, 24228],
    sun: xAxis,
    vehicleType:'Four-Wheelers (Cars)'

    // isEmpty: true,
  },{
    id: 3,
    label: "Corolla",
    value: 111,
    text: "Excise Taxation Department",
    yearWiseData: [24228, 11244, 5630, 2258, 1953],
    sun: xAxis,
    vehicleType:'Four-Wheelers (Cars)'

    // isEmpty: true,
  },{
    id: 3,
    label: "Civic",
    value: 111,
    text: "Excise Taxation Department",
    yearWiseData: [4099, 2301, 1741, 2788, 1722],
    sun: xAxis,
    vehicleType:'Four-Wheelers (Cars)'

    // isEmpty: true,
  },{
    id: 3,
    label: "Mira",
    value: 111,
    text: "Excise Taxation Department",
    yearWiseData: [2742, 1067, 708, 1762, 1300],
    sun: xAxis,
    vehicleType:'Four-Wheelers (Cars)'

    // isEmpty: true,
  }
  ,{
    id: 3,
    label: "Cultus",
    value: 31767,
    text: "Excise Taxation Department",
    yearWiseData: [7526, 7022, 4321, 7919, 4979],
    sun: xAxis,
    vehicleType:'Four-Wheelers (Cars)'

    // isEmpty: true,
  },{
    id: 3,
    label: "Aqua",
    value: 8731,
    text: "Excise Taxation Department",
    yearWiseData: [3189, 1457, 480, 1039, 566],
    sun: xAxis,
    vehicleType:'Four-Wheelers (Cars)'

    // isEmpty: true,
  },{
    id: 3,
    label: "Swift",
    value: 10203,
    text: "Excise Taxation Department",
    yearWiseData: [2194, 1530, 674, 853, 3952],
    sun: xAxis,
    vehicleType:'Four-Wheelers (Cars)'

    // isEmpty: true,
  },{
    id: 3,
    label: "Sportage",
    value: 8051,
    text: "Excise Taxation Department",
    yearWiseData: [6, 513, 2028, 3787, 2717],
    sun: xAxis,
    vehicleType:'Four-Wheelers (Cars)'

    // isEmpty: true,
  },{
    id: 3,
    label: "Fortuner",
    value: 5320,
    text: "Excise Taxation Department",
    yearWiseData: [1167, 616, 472, 1481, 1584],
    sun: xAxis,
    vehicleType:'Four-Wheelers (Cars)'

    // isEmpty: true,
  },
,
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

  const add = () => {
    
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
  const handleDepartment = (event) => {
    let value = event.target.value
    if(value == 'Excise Taxation Department'){
      setgetVehicleType('Two-Wheelers (Bikes)')
      setVehicleName('Honda')
    }
    setSelectedDepartment(value);
  };
   
  // let vehicleName= dataForDonut.filter((item)=>{
  
  //     return  item?.vehicleType == getVehicleType ? item:null
  //  })
   const vehicleName = useMemo(()=> {
    let selectedData =  dataForDonut.filter((item)=>{
  
            return  item?.vehicleType == getVehicleType ? item:null
         })
         return selectedData
   },[getVehicleType,selectedDepartment])

 const [getVehicleName, setVehicleName] = useState(vehicleName[0]?.label)
 
  const handleVehicleType=(event)=>{
    let {value} = event.target
    setgetVehicleType(value)
    let selectedData = dataForDonut.filter((item)=>{
      return  item?.vehicleType == value ? item:null
   })
   setVehicleName(selectedData[0].label)
  }

const handleVehicleName=(event)=>{
  setVehicleName(event.target.value)
}

 let singleBar= vehicleName.filter((item)=>{
    return  item?.label == getVehicleName ? item:null
 })

 useEffect(() => {
  setSelectedDepart(dataForDonut[0]?.label);
}, [selectedDepartment]);
let subDropdownFilter;
if(vehicleName[0]){
  debugger
  subDropdownFilter = dataForDonut?.filter((item) => {
    return item?.label == getVehicleName  && item;
  });
}
else  if (dataForDonut[0]) {
  debugger
  subDropdownFilter = dataForDonut?.filter((item) => {
    return item?.label == getVehicleName || item?.label == selectedDepart && item;
  });
}

else {
  subDropdownFilter = [1, 2, 3, 4, 5];
}
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
var randomNumber = Math.floor(Math.random() * 13);
 
  const data = {
    labels: lable,
    // datasets: [
    //   {
    //     label: subDropdownFilter[0]?.label,
    //     data: subDropdownFilter[0]?.yearWiseData || add(),
    //     backgroundColor:color[Math.floor(Math.random() * 6) + 1] ,
    //   },
    // ],
    datasets:singleBar.length > 0 ? singleBar.map((item, index) => {
      debugger
      return {
        label: subDropdownFilter[0]?.label,
        data: item?.yearWiseData,
        backgroundColor: color[randomNumber],
      };
    }
    
    ):  dataForDonut.map((item, index) => {
      return {
        label: subDropdownFilter[0]?.label,
        data: item?.yearWiseData,
        backgroundColor: color[index],
      };
    }
    
    )
  };



  return (
    <>
      {windowWidth <= 500 ? <MobileHeaderGeneric /> : <GenericHeader />}
      {windowWidth <= 500 ? (
        <div></div>
      ) : (
        <div style={{ height: "120px" }}></div>
      )}
      <div className="parent_con  px-md-5  px-2">
        <div className="statistics ">
          <div className="row g-0 mb-4 d-flex justify-content-center">
          <div
        className="row "
      >
        <div
          className="col-lg-12"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
            margin:"auto",
            position:"relative"
          }}
        >
       <div className="" >
       <h1 className={window.innerWidth <= 540 ?"ReportRegulatorybefore mt-4 mb-4":"ReportRegulatoryDifficulties"}>Business Registrations in Karachi</h1>
         <p
            className={window.innerWidth <= 540 ? "mobileparaforfeedback" : "feedbackpara col-8"} style={{fontSize:window.innerWidth === 280 || window.innerWidth ===320 ? "17.5px": " ",textAlign:"center",}}
          >
The aim of this portal is to bring out the analytical overview of business competitiveness in Karachi. This analysis gives you an insight into the historical business registrations in various areas in Karachi such as schools, colleges, pharmacies, hospitals, food businesses, vehicle registrations, partnership registrations, etc.

You can also contact us for further details on your specific queries at feedback@business.gos.pk
          </p>
       </div>
        </div>
      </div>
          </div>
          <div className="row mb-sm-5 mb-md-4  justify-content-between g-0 ">
            <div className={  selectedDepartment === 'Excise Taxation Department'?"col-md-3 ":"col-md-4 "}>
              <div className="">    
                 <InputLabel shrink htmlFor="Department">
                 Department
                </InputLabel>
                <Select
                  size="small"
                  native
                  style={{ width: "100%" }}
                  // defaultValue={selectedDepartment}
                  // value={selectedDepartment}
                  onChange={handleDepartment}
                  inputProps={{
                    name: "case",
                    id: "Department",
                  }}
                >
                  {department?.map((item) => {
                    return <option value={item?.value}>{item?.text}</option>;
                  })}
                </Select>
              </div>
              {/* </Fade> */}
            </div>
         {
  selectedDepartment === 'Excise Taxation Department' && (
    <div className="col-3">
      <InputLabel shrink htmlFor=" Vehicle Type">
        Vehicle Type
      </InputLabel>
      <Select
        size="small"
        native
        style={{ width: '100%' }}
        defaultValue={getVehicleType}
        value={getVehicleType}
        onChange={handleVehicleType}
        inputProps={{
          name: 'case',
          id: ' Vehicle Type',
        }}
      >
        {vehicleType?.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Select>
    </div>
  )
        }

              
{
  selectedDepartment === 'Excise Taxation Department' && (
    <div className="col-3 ">
      <InputLabel shrink htmlFor=" Vehicle ">
        Vehicle 
      </InputLabel>
      <Select
        size="small"
        native
        style={{ width: '100%' }}
        defaultValue={vehicleName[0]?.label}
        value={getVehicleName}
        onChange={handleVehicleName}
        inputProps={{
          name: 'case',
          id: ' Vehicle ',
        }}
      >
        {vehicleName?.map((item) => (
          <option key={item.label} value={item.label}>
            {item.label}
          </option>
        ))}
      </Select>
    </div>
  )
        }
          </div>
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
                      style={windowWidth <=500?{width:"100%"}:{
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
                      style={windowWidth <=500?{width:"100%"}:{
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
            <div className="row g-0 ">
              <div className="col-md-12 col-lg-6 xxl-4 pe-xxl-4 mt-md-0   mt-sm-5 mt-lg-5 mt-xxl-0 ">
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
                  innerWidth={500}
                  legend={false}
                  clickToggle={false}
                  colors={color}
                  data={
                      selectedDepartment == "Excise Taxation Department"? 
                      vehicleName
                  :    dataForDonut || [
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
                      ? 320
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
                      ? 320
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
              </div>

              <div  className="col-sm-12 col-lg-5 col-xxl-4 justify-content-end lable_parent">
                <div className="wappper ms-md-3 ms-xxl-0 " >
                  {
                  selectedDepartment === 'Excise Taxation Department'? vehicleName.map((item, id) => {
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
                }):

                  dataForDonut.map((item, id) => {
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
                  })
                  
                  }
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
                    ? getVehicleName
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
