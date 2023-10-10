import React from 'react'
import GenericHeader from './genericHeader'
import { useState } from 'react'
import { useEffect } from 'react'
import MobileHeaderGeneric from './MobileHeaderGeneric'
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend,} from 'chart.js';
import { Chart, Doughnut } from 'react-chartjs-2'
;
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
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
    const [windowWidth,setwindowWidth]=useState(window.innerWidth)
    useEffect(()=>{
        const handleResize = () => {
            setwindowWidth(window.innerWidth);
          };
          window.addEventListener('resize', handleResize);
            return () => {
            window.removeEventListener('resize', handleResize);
          };
    },[])
    const [data, setData] = useState({
      datasets: [{
          data: [10, 20, 30],
          backgroundColor:[
            'pink',
            'blue',
            'yellow'
          ]
      },
    ],
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ], 
  });
    useEffect(()=> {
      const fetchData = () =>  {
        fetch('https://jsonplaceholder.typicode.com/users').then((data) => {
          const res = data.json();
          return res
        }).then((res) => {
          console.log("resss", res)
          const label = [];
          const data = [];
          for(var i of res) {
              label.push(i.name);
              data.push(i.id)
          }
          setData(
            {
              datasets: [{
                  data:data,
                  backgroundColor:[
                    'pink',
                    'skyblue',
                    'yellow'
                  ]
              },
            ],
            labels:label, 
            color: function(context) {
              const index = context.dataIndex;
              const value = context.dataset.data[index];
              return value < 0 ? 'red' :  // draw negative values in red
                  index % 2 ? 'blue' :    // else, alternate values in blue and green
                  'green';
          },
          },
          
          )
  
        }).catch(e => {
          console.log("error", e)
        }) 
      }
    fetchData();
    }, [])
    // const options = {
    //   // Customize the appearance of the labels
    //   legend: {
    //     display: true,
    //     position: 'right',
    //     labels: {
    //       fontColor: 'red', // Set label text color
    //       fontSize: 16,
    //       backgroundColor:"red"       // Set label text font size
    //     },
    //   },
    // };
    const zain = {
      labels: ['college Department', 'Labour Department', 'Health Department'],
      datasets: [
        {
          // label: 'Dataset 1',
          data: [1, 2, 3],
          // borderColor: '#36A2EB',
           backgroundColor: '#9BD0F5',
          backgroundColor:["pink","skyblue","green"],
      
        },
       
      ],
 
    }
    const options = {
      // Customize the appearance of the labels
      plugins: {
        legend: {
          display: true, // Display the legend
          position: 'right', // Position the legend on the right side
        },
      },
      // Customize label font settings
      scales: {
        y: {
          ticks: {
            color: 'black', // Label text color
            font: {
              size: 16, // Label text font size
              weight: 'bold', // Label text font weight
            },
          },
        },
      },
    };
  return (
    <>
    {windowWidth<=500?<MobileHeaderGeneric/>:<GenericHeader/>}
    {windowWidth <= 500 ? (
        <div></div>
      ) : (
        <div style={{ height: "150px" }}></div>
      )}
         <div className="App" style={{width:'30%', height:'30%',}}>
         <Doughnut data={zain}
        //  options={options}
         />
         </div>
    

    </>
  )
}

export default Dashboard