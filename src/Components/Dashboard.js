import React from 'react'
import GenericHeader from './genericHeader'
import { useState } from 'react'
import { useEffect } from 'react'
import MobileHeaderGeneric from './MobileHeaderGeneric'
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2'
;
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);


const data = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor:[
          'red',
          'blue',
          'yellow'
        ]
    },
  ],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
      'Red',
      'Yellow',
      'Blue'
  ], 
};

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
            'red',
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
                    'red',
                    'blue',
                    'yellow'
                  ]
              },
            ],
            labels:label, 
          }
          )
  
        }).catch(e => {
          console.log("error", e)
        }) 
      }
    fetchData();
    }, [])
  return (
    <>
    {windowWidth<=500?<MobileHeaderGeneric/>:<GenericHeader/>}
    {windowWidth <= 500 ? (
        <div></div>
      ) : (
        <div style={{ height: "150px" }}></div>
      )}
         <div className="App" style={{width:'30%', height:'30%'}}>
         <Doughnut data={data}/>
         </div>
    

    </>
  )
}

export default Dashboard