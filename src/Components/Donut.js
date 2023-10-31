import React, { useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip,  } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { auto } from '@popperjs/core';
import MaleFemaleIcon from '../assets/MaleFemaleIcon.jfif'

ChartJS.register(ArcElement,  );

const chartData = {
    labels: ["Labour Department", "Agriculture Department", "Health Department"],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ['#8CD3FF', '#F54AA6', '#F2D14F', '#D99AC9','#9ACCDB', '#FDC263', '#CBC4AA', ],
        borderSkipped: "end", 
        borderColor: "transparent",
        borderRadius:100,
        borderRadii: 44,
        marginLeft:100 ,
        hoverOffset: 5,
        Offset:100
      },
    ],
  };
  


const Donut = () => {
  const [percentageValue,SetPercentageValue]=useState(chartData.datasets[0].data[0])
  const [department,SetDepartment]=useState('Agriculture Deparment')
  const chartOptions = {
    cutout: "80%",
    borderRadii:100,
    plugins: {
      legend: {
        display: false,
         // Set this to false to hide the legend
      },
      tooltip: {
        enabled: true,
        text: "test",
        callbacks: {
          label: function (context) {
            console.log(context)
            const labelIndex = context.dataIndex;
            console.log(chartData.labels[labelIndex])
            SetPercentageValue(context.raw)
            SetDepartment(chartData.labels[labelIndex])
            // return chartData.labels[labelIndex];
          },
        },
        // backgroundColor:"#054a91",
      },
    },
  };
  const data = chartData.datasets[0].data;
  const totalValue = data.reduce((a, b) => a + b, 0);
  const innerRadius = 50; // Adjust the inner radius as needed
  const center = {
    x: 50, // Adjust the x-coordinate
    y: 50, // Adjust the y-coordinate
  };
  return (
    <>
    <div className="row g-0">
    <div className='col-7 m-auto' style={{ position: "relative",}}>
    <Doughnut data={chartData}
    labels={false}
    lang='ur'
    options={chartOptions}
    onMouseEnter={(item)=>{console.log(item)}}
    // height={200}
    // width={200}
    // children={()=>{}}
    style={{width:'100%',backgroundColor:"red",padding:10,margin:10,zIndex:0}}
    />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <div
          style={{
            // position: "absolute",
            // width: `${innerRadius * 2}px`,
            // height: `${innerRadius * 2}px`,
            // borderRadius: "50%",
            // // backgroundColor: "red",
            // // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
            // top: "-50%", left: "50%"
          }}
        >
          {/* {data.map((value, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <div>{`Label ${index + 1}`}</div>
              <div>{`${((value / totalValue) * 100).toFixed(1)}%`}</div>
            </div>
          ))} */}
          {/* <p >{department}</p> */}
          <h1>{`${(percentageValue/100)}%`}</h1>
        </div>
      </div>
    </div>
    <div className="col d-flex justify-content-end h-auto">
      <div className="">
      {/* <img 
      src={MaleFemaleIcon}
      // height={150}
      // width={200}
       alt="" /> */}
    
      </div>
    </div>
    </div>
   
    </>
  )
}

export default Donut