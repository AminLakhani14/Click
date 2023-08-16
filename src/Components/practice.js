import React, { useEffect, useState } from "react";
import Tourisim from "../assets/Tourisim.svg";
import TourisimFocus from "../assets/TourisimFocus.svg";
import Agriculture from "../assets/Agriculture.png";
import AgricultureFocus from "../assets/AgricultureFocus.svg";
import Education from "../assets/Education.svg";
import EducationFocus from "../assets/EducationFocus.svg";
import Energy from "../assets/Energy.svg";
import EnergyFocus from "../assets/EnergyFocus.svg";
import Health from "../assets/Health.svg";
import HealthFocus from "../assets/HealthFocus.svg";
import IT from "../assets/IT.svg";
import ITFocus from "../assets/ITFocus.svg";
import Manufacturing from "../assets/Manufacturing.svg";
import ManufacturingFocus from "../assets/ManufacturingFocus.svg";
import Textile from "../assets/Textile.svg";
import TextileFocus from "../assets/TextileFocus.svg";
import "../Css/header.css";
import { translations } from "../Transalation/Transalation";

const brownColor = "#720D1D";

function getTranslations(languageCode) {
  const result = {};
  
  for (const key in translations) {
      if (translations[key][languageCode]) {
          result[key] = translations[key][languageCode];
      }
  }
  
  return result;
}

const getArr = (lang) => [
  {
    value: 45,
    color: "#e6e6e6",
    image: Tourisim,
    focusImage: TourisimFocus,
    Program:getTranslations(lang)['Tourism'],
    Percentage: 50,
    Description: "Approx US$1.6 Billion (2019-2020)",
    wheat: "4 Million ",
    subweat: getTranslations(lang)["Wheat"],
    Rice: "1.9 Million ",
    subrice: getTranslations(lang)["Rice"],
    sugarcane: "4.2 Million",
    subsugarcane: getTranslations(lang)["Sugarcane"],
    cotton: "2.3 Million",
    subcotton: getTranslations(lang)["Cotton"],
    textXaxis: "250",
    boxColor: "#720d1d",
  },
  {
    value: 45,
    color: "#e6e6e6",
    image: Agriculture,
    focusImage: AgricultureFocus,
    Program: getTranslations(lang)["Agriculture"],
    Percentage: 50,
    Description: "Approx US$1.6 Billion (2019-2020)",
    wheat: "4 Million ",
    subweat: getTranslations(lang)["Wheat"],
    Rice: "1.9 Million ",
    subrice: getTranslations(lang)["Rice"],
    sugarcane: "4.2 Million",
    subsugarcane: getTranslations(lang)["Sugarcane"],
    cotton: "2.3 Million",
    subcotton: getTranslations(lang)["Cotton"],
    textXaxis: "185",
    boxColor: "#4B7145",
  },
  {
    value: 45,
    color: "#e6e6e6",
    image: Education,
    focusImage: EducationFocus,
    Program: getTranslations(lang)["Education"],
    Percentage: 50,
    Description: "Approx US$1.6 Billion (2019-2020)",
    wheat: "4 Million ",
    subweat: getTranslations(lang)["Wheat"],
    Rice: "1.9 Million ",
    subrice: getTranslations(lang)["Rice"],
    sugarcane: "4.2 Million",
    subsugarcane: getTranslations(lang)["Sugarcane"],
    cotton: "2.3 Million",
    subcotton: getTranslations(lang)["Cotton"],
    textXaxis: "15",
    boxColor: "#75b3dd",
  },
  {
    value: 45,
    color: "#e6e6e6",
    image: Energy,
    focusImage: EnergyFocus,
    Program: getTranslations(lang)["Energy"],
    Percentage: 50,
    Description: "Approx US$1.6 Billion (2019-2020)",
    wheat: "4 Million ",
    subweat: getTranslations(lang)["Wheat"],
    Rice: "1.9 Million ",
    subrice: getTranslations(lang)["Rice"],
    sugarcane: "4.2 Million",
    subsugarcane: getTranslations(lang)["Sugarcane"],
    cotton: "2.3 Million",
    subcotton: getTranslations(lang)["Cotton"],
    textXaxis: "-50",
    boxColor: "#bbcf3e",
  },
  {
    value: 45,
    color: "#e6e6e6",
    image: Health,
    focusImage: HealthFocus,
    Program: getTranslations(lang)["Health"],
    Percentage: 50,
    Description: "Approx US$1.6 Billion (2019-2020)",
    wheat: "4 Million ",
    subweat: getTranslations(lang)["Wheat"],
    Rice: "1.9 Million ",
    subrice: getTranslations(lang)["Rice"],
    sugarcane: "4.2 Million",
    subsugarcane: getTranslations(lang)["Sugarcane"],
    cotton: "2.3 Million",
    subcotton: getTranslations(lang)["Cotton"],
    textXaxis: "-50",
    boxColor: "#0f5789",
  },
  {
    value: 45,
    color: "#e6e6e6",
    image: IT,
    focusImage: ITFocus,
    Program: getTranslations(lang)["InformationTechnology"],
    Percentage: 50,
    Description: "Approx US$1.6 Billion (2019-2020)",
    wheat: "4 Million ",
    subweat: getTranslations(lang)["Wheat"],
    Rice: "1.9 Million ",
    subrice: getTranslations(lang)["Rice"],
    sugarcane: "4.2 Million",
    subsugarcane: getTranslations(lang)["Sugarcane"],
    cotton: "2.3 Million",
    subcotton: getTranslations(lang)["Cotton"],
    textXaxis: "-10",
    boxColor: "#996b95",
  },
  {
    value: 45,
    color: "#e6e6e6",
    image: Manufacturing,
    focusImage: ManufacturingFocus,
    Program: getTranslations(lang)['Manufacturing'],
    Percentage: 50,
    Description: "Approx US$1.6 Billion (2019-2020)",
    wheat: "4 Million ",
    subweat: getTranslations(lang)["Wheat"],
    Rice: "1.9 Million ",
    subrice: getTranslations(lang)["Rice"],
    sugarcane: "4.2 Million",
    subsugarcane: getTranslations(lang)["Sugarcane"],
    cotton: "2.3 Million",
    subcotton: getTranslations(lang)["Cotton"],
    textXaxis: "192",
    boxColor: "#868372",
  },
  {
    value: 45,
    color: "#e6e6e6",
    image: Textile,
    focusImage: TextileFocus,
    Program: getTranslations(lang)["Textile"],
    Percentage: 50,
    Description: "Approx US$1.6 Billion (2019-2020)",
    wheat: "4 Million ",
    subweat: getTranslations(lang)["Wheat"],
    Rice: "1.9 Million ",
    subrice: getTranslations(lang)["Rice"],
    sugarcane: "4.2 Million",
    subsugarcane: getTranslations(lang)["Sugarcane"],
    cotton: "2.3 Million",
    subcotton: getTranslations(lang)["Cotton"],
    textXaxis: "248",
    boxColor: "#f9a932",
  },
]

const colors = [ "#720d1d", "#4B7145", "#75B3DD", "#BBCF3E", "#0F5789", "#996B95", "#868372", "#f9a932", ];

const CircleSeg = (props) => {
  const [segments, setSegments] = useState(getArr(props.language));
  
  useEffect(() => {
    props.setData(segments[0]);
  }, []);
  
  const totalValue = segments?.reduce(
    (total, segment) => total + segment.value,
    0
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update the windowWidth state when the resize event occurs
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [selectedSegmentIndex, setSelectedSegmentIndex] = useState(null);
  const [centerCircleColor, setCenterCircleColor] = useState(brownColor);
  
  const handleClick = (index, segment) => {
    let updatedSegments = [...segments];
    //   props.setData(updatedSegments[index]);
    if (typeof index === "number") {
      if (selectedSegmentIndex !== null) {
        // Revert the previously selected segment to its initial state
        updatedSegments[selectedSegmentIndex] ={...getArr(props.language)[selectedSegmentIndex], color: getArr(props.language)[selectedSegmentIndex].color}
      }

      // Assign the predefined color to the new segment
      const colorIndex = index % colors.length; // Use modulo operator to cycle through the predefined colors
      const color = colors[colorIndex];

      // Select the new segment and update its color
      updatedSegments[index] = {
        ...updatedSegments[index],
        color: color,
        image: updatedSegments[index].focusImage,
      };

      setSegments(updatedSegments);
      setSelectedSegmentIndex(index);
      props?.getSegmentData(segment); // selected segment data is sent to the parent component for display on the form
      setCenterCircleColor(color)
    }
  };

  const centerX = 100; // x-coordinate of the center of the circular path
  const centerY = 100; // y-coordinate of the center of the circular path
  const radius = 120; // radius of the circular path
  const iconRadius = 14; // Radius of the small icon-like circle

  useEffect(()=>{
    setSegments(getArr(props.language))
  },[props.language])

  return (
    <div
      style={{
        textAlign: "end",
        display: "flex",
        alignItems: "end",
        justifyContent: "flex-start",
        marginLeft: "17px",
      }}
    >
      <div>
        <svg width={windowWidth <=1440?"550":"700"} height={windowWidth <=1440?"550":"700"} viewBox="-100 0 400 300">
          <g>
            {/* <circle
                  cx={centerX}
                  cy={centerY}
                  r={radius + 14} // Increase the radius to create a border around the outer circle
                  fill="none"
                  stroke={brownColor}
                  strokeWidth="2"
                /> */}
            {segments.map((segment, index) => {
              const startAngle =
                index === 0
                  ? 0
                  : segments
                      .slice(0, index)
                      .reduce(
                        (sum, seg) =>
                          sum + (seg.value / totalValue) * 2 * Math.PI,
                        0
                      );
              const endAngle =
                startAngle + (segment.value / totalValue) * 2 * Math.PI;

              const largeArcFlag = endAngle - startAngle > Math.PI ? "1" : "0";
              const pathRadius = radius;

              const iconX =
                centerX +
                Math.cos((startAngle + endAngle) / 2) *
                  (pathRadius + iconRadius);
              const iconY =
                centerY +
                Math.sin((startAngle + endAngle) / 2) *
                  (pathRadius + iconRadius);

              const imageX =
                centerX +
                Math.cos((startAngle + endAngle) / 2) * pathRadius * 0.8; // Adjust the factor (0.8) to position the image along the radial line
              const imageY =
                centerY +
                Math.sin((startAngle + endAngle) / 2) * pathRadius * 0.8; // Adjust the factor (0.8) to position the image along the radial line

              return (
                <g
                  key={index}
                  onClick={() => props.setData(segment)} // to remove of BG
                >
                  <path
                    d={`M${centerX},${centerY} L${
                      centerX + Math.cos(startAngle) * pathRadius
                    },${
                      centerY + Math.sin(startAngle) * pathRadius
                    } A${pathRadius},${pathRadius} 0 ${largeArcFlag},1 ${
                      centerX + Math.cos(endAngle) * pathRadius
                    },${centerY + Math.sin(endAngle) * pathRadius} Z`}
                    fill={segment.color}
                    stroke="white" // Border color (black in this example)
                    strokeWidth={2} // Border width
                    onClick={() => {
                      handleClick(index, segment);
                    }} // Pass the index to handleClick function
                  />
                  <image
                    href={segment.image}
                    x={imageX - 15} // Adjust the x-coordinate based on image width
                    y={imageY - 15} // Adjust the y-coordinate based on image height
                    width="30"
                    style={{cursor:"pointer"}}
                    height="30"
                    onClick={() => {
                      handleClick(index, segment);
                    }}
                  />
                  {/* outer circle */}
                  <circle
                    cx={iconX}
                    cy={iconY}
                    style={{userSelect:"none"}}
                    r={iconRadius - 12}
                    fill={
                      segment.color !== "#e6e6e6" ? segment.color : brownColor
                    }
                  />
                  <text
                    x={segment.textXaxis}
                    y={iconY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={segment.color !== "#e6e6e6" ? segment.color : "black"}
                    // fontSize={9}
                    className="circleText"
                    fontWeight={"bold"}
                    style={{ backgroundColor: "red" ,pointerEvents:"none",userSelect:"none"}}
                  >
                    {segment.Program}
                  </text>
                  <circle
                    cx={centerX}
                    cy={centerY}
                    style={{userSelect:"none"}}
                    r={radius - 80}
                    fill="#F0F0F0"
                    stroke="#c5c5c5"
                    strokeWidth={2}
                  />
                  <circle cx={centerX} style={{userSelect:"none",pointerEvents:"none"}} cy={centerY} r={10} fill={centerCircleColor} />{" "}
                </g>
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default CircleSeg;
