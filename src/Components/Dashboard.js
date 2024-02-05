import React, { useCallback, useMemo } from "react";
import GenericHeader from "./genericHeader";
import { useState } from "react";
import { useEffect } from "react";
import MobileHeaderGeneric from "./MobileHeaderGeneric";
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
import "../Css/dashboard.css";
import { InputLabel, Select } from "@mui/material";
import CountUp from "react-countup";
import BarChart from "./BarChart";
import { dataForDonut } from "./constant";

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
  const vehicleType = ['Two-Wheelers (Bikes)', 'Four-Wheelers (Cars)']
  const [getVehicleType, setgetVehicleType] = useState(vehicleType[0])

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
 let donutData=useMemo(()=>{
 return dataForDonut?.filter((item) => {
    return selectedDepartment == item?.text ? item : null;
  });
 },[selectedDepartment])

  const handleDepartment = (event) => {
    let value = event.target.value
    if (value == 'Excise Taxation Department') {
      setgetVehicleType('Two-Wheelers (Bikes)')
      setVehicleName('Honda')
    }
    setSelectedDepartment(value);
  };
  const vehicleName = useMemo(() => {
    let selectedData = donutData.filter((item) => {
      return item?.vehicleType == getVehicleType ? item : null
    })
    return selectedData
  }, [getVehicleType, selectedDepartment])

  const [getVehicleName, setVehicleName] = useState(vehicleName[0]?.label)

  const handleVehicleType = (event) => {
    let { value } = event.target
    setgetVehicleType(value)
    let selectedData = donutData.filter((item) => {
      return item?.vehicleType == value ? item : null
    })
    setVehicleName(selectedData[0].label)
  }

  const handleVehicleName = (event) => {
    setVehicleName(event.target.value)
  }

  let singleBar = useMemo(()=>{
    console.log('zain')
    return vehicleName.filter((item) => {
      return item?.label == getVehicleName ? item : null
    })
  },[getVehicleName,selectedDepartment])
  useEffect(() => {
    setSelectedDepart(donutData[0]?.label);
  }, [selectedDepartment]);
  let subDropdownFilter;
  if (vehicleName[0]) {
    
    subDropdownFilter = donutData?.filter((item) => {
      return item?.label == getVehicleName && item;
    });
  }
  else if (donutData[0]) {
    subDropdownFilter = donutData?.filter((item) => {
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
    datasets: singleBar.length > 0 ? singleBar.map((item, index) => {
      
      return {
        label: subDropdownFilter[0]?.label,
        data: item?.yearWiseData,
        backgroundColor: color[randomNumber],
      };
    }
    ) : donutData.map((item, index) => {
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
                  margin: "auto",
                  position: "relative"
                }}
              >
                <div className="" >
                  <h1 className={window.innerWidth <= 540 ? "ReportRegulatorybefore mt-4 mb-4" : "ReportRegulatoryDifficulties"}>Business Registrations in Karachi</h1>
                  <p
                    className={window.innerWidth <= 540 ? "mobileparaforfeedback" : "feedbackpara col-8"} style={{ fontSize: window.innerWidth === 280 || window.innerWidth === 320 ? "17.5px" : " ", textAlign: "center", }}
                  >
                    The aim of this portal is to bring out the analytical overview of business competitiveness in Karachi. This analysis gives you an insight into the historical business registrations in various areas in Karachi such as schools, colleges, pharmacies, hospitals, food businesses, vehicle registrations, partnership registrations, etc.
                    You can also contact us for further details on your specific queries at feedback@business.gos.pk
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-sm-5 mb-md-4  justify-content-between g-0 ">
            <div className={selectedDepartment === 'Excise Taxation Department' ? "col-md-3 " : "col-md-4 "}>
              <div className="">
                <InputLabel shrink htmlFor="Department">
                  Department
                </InputLabel>
                <Select
                  size="small"
                  native
                  style={{ width: "100%" }}
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
            </div>
            {
              selectedDepartment === 'Excise Taxation Department' && (
                <div className="col-md-3 col-12">
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
                <div className="col-md-3 col-12">
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
          </div>
          <div
            className={` card_container ${donutData[0]?.sun?.length == 3 ? "col-7" : ""
              }`}
          >
            {subDropdownFilter[0]?.total
              ? subDropdownFilter[0]?.sun?.map((item, index) => {
                return (
                  <div
                    className={`box1_container 

         `}
                    style={windowWidth <= 500 ? { width: "100%" } : {
                      width:
                        donutData[0]?.sun?.length == 3 ? "20%" : "17.9%",
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
                        )}
                      </h1>
                    </div>
                  </div>
                );
              })
              : donutData[0]?.sun?.map((item, index) => {
                return (
                  <div
                    className={`box1_container  ${subDropdownFilter[0]?.sun?.length > 5 && "mb-5"
                      } `}
                    style={windowWidth <= 500 ? { width: "100%" } : {
                      width:
                        donutData[0]?.sun?.length == 3 ? "30%" : "17.9%",
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
                        )}
                      </h1>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="chart_container">
          <div className="pie_chart ">
            <div className="row g-0 ">
              <div className="col-md-12 col-lg-6 xxl-4 pe-xxl-4 mt-md-0   mt-sm-5 mt-lg-5 mt-xxl-0 ">
                <DonutChart
                  innerWidth={500}
                  legend={false}
                  clickToggle={false}
                  colors={color}
                  data={
                    selectedDepartment == "Excise Taxation Department" ?
                      vehicleName
                      : donutData || [
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
                />
                {/* ////////////////////////////////////////////////////////////////////// */}
              </div>

              <div className="col-sm-12 col-lg-5 col-xxl-4 justify-content-end lable_parent">
                <div className="wappper ms-md-3 ms-xxl-0 " >
                  {
                    selectedDepartment === 'Excise Taxation Department' ? vehicleName.map((item, id) => {
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
                    }) :

                      donutData.map((item, id) => {
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
          <div className="bar_chart ">
            <div className="row g-0 ">
              <div className="col">
                <h3>
                  { selectedDepartment === 'Excise Taxation Department'
                    && getVehicleName
                    }
                </h3>
              </div>
            </div>
            <div className="">
              <BarChart options={options} data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
