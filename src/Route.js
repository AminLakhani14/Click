import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Resource from "./Components/Resource";
import ContactUs from "./Components/ContactUs"
import Home from "./Components/Home";
import FeedBack from "./Components/feedback";
import AboutUs from "./Components/aboutus";
import RegulatoryCatalogue from "./Components/regulatoryCatalogue";
import ComingSoon from "./Components/ComingSoon";
import InvestNow from "./Components/InvestNow";
import Opportunity from "./Components/Opportunity";
import WhySindhMain from "./Components/WhySindhMain";
import NewsAndInformation from "./Components/NewsAndInformation";
import Maps from "./Components/Maps";
import Component from "./Components/Component";
import Team from "./Components/Team";
import GenericComponentOpportunity from "./Components/GenericComponentOpportunity";
import RegulatoryCatalogCalculator from "./Components/RegulatoryCostCalculator";
// import RegulatoryCatalogCalculator from "./Components/demo";

import Poultry from "./Components/poultry";
import FrozenF from "./Components/frozenfood";
import Loan from "./Components/loan";
import Gateway from "./Components/gateway";
import EconomicPowerhouse from "./Components/economicP";
import BuildingBridges from "./Components/buildingbridges";
import Manufacturing from "./Components/manufacturing";
import Textile from "./Components/textile";
import Tourism from "./Components/tourism";
import Education from "./Components/education";
import InformationTechnology from "./Components/informationtech";
import Health from "./Components/health";
import DiverseHorizon from "./Components/diversehorizon";
import Agriculture from "./Components/agriculture";
import Energy from "./Components/energy";
import Dashboard from "./Components/Dashboard";
import Tutorial from "./Components/Tutorial";
import Watch from "./Components/Watch";
import Introduction from "./Components/Introduction";
import Presentation from "./Components/Presentation";
import ProjectObjectives from "./Components/PrjectObjectives";
import Achievement from "./Components/Achievement";
import Faq from "./Components/Faq";


export let searchText = '';
export let currentIndex = 0; // Track the current highlighted match index
export let matchIndices = []; // Store all match indices

// Function to update the current index and highlight the corresponding match
const updateCurrentIndex = (newIndex) => {
  if (newIndex < 0 || newIndex >= matchIndices.length) return;
  currentIndex = newIndex;
  highlightMatch(matchIndices[currentIndex]);
};

export const handleSearch = () => {
  searchText = document.getElementById('searchText').value;
  currentIndex = 0;
  matchIndices = []; // Reset matchIndices when searching again
  if (!searchText) {
    // Clear highlights and exit if the search text is empty
    clearHighlights();
    return;
  }
  const elements = document.getElementsByClassName('highlightable');

  for (const element of elements) {
    const text = element.textContent || element.innerText;
    let matchIndex = text.indexOf(searchText);

    while (matchIndex !== -1) {
      matchIndices.push({ element, index: matchIndex });
      matchIndex = text.indexOf(searchText, matchIndex + searchText.length);
    }
  }

  if (matchIndices.length > 0) {
    // Highlight the first occurrence
    updateCurrentIndex(0);
  }
};

export const clearHighlights = () => {
  const elements = document.getElementsByClassName('highlightable');
  for (const element of elements) {
    element.innerHTML = element.textContent || element.innerText;
  }
};

export const highlightMatch = (match) => {
  const { element, index } = match;
  const text = element.textContent || element.innerText;

  const beforeText = text.substring(0, index);
  const matchText = text.substring(index, index + searchText.length);
  const afterText = text.substring(index + searchText.length);

  const styledHTML = `${beforeText}<span class="bold">${matchText}</span>${afterText}`;
  element.innerHTML = styledHTML;

  // Scroll to the element
  element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

export const navigateNext = () => {
  if (currentIndex < 0) return;
  updateCurrentIndex(currentIndex + 1);
};

export const navigatePrevious = () => {
  if (currentIndex < 0) return;
  updateCurrentIndex(currentIndex - 1);
};



export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/resource",
    element: <Resource />,
    //   loader: rootLoader,
  },
  {
    path: "/contactUs",
    element: <ContactUs />,
    //   loader: rootLoader,
  },
  {
    path: "/feedback",
    element: <FeedBack />,
    //   loader: rootLoader,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
    //   loader: rootLoader,
  },
  {
    path: "/regulatorycatalog",
    element: <RegulatoryCatalogue />,
    //   loader: rootLoader,
  },
  {
    path: "/ComingSoon",
    element: <ComingSoon />,
    //   loader: rootLoader,
  },
  {
    path: "/InvestNow",
    element: <InvestNow />,
  },
  {
    path: "/Opportunity",
    element: <Opportunity />,
  },
  {
    path: "/WhySindh",
    element: <WhySindhMain />,
  },
    {
    path: "/NewsAndInformation",
    element: <NewsAndInformation />,
  },
  {
    path: "/Maps",
    element: <Maps />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/Component",
    element: <Component />,
  },
  {
    path: "/Team",
    element: <Team />,
  },
  {
    path: "/Sectors",
    element: <GenericComponentOpportunity />,
  }, 
  {
    path: "/RegulatoryCatalogCalculator",
    element: <RegulatoryCatalogCalculator />,
  },
  {
    path: "/poultry",
    element: <Poultry />,
  },

  {
    path: "/frozenfood",
    element: <FrozenF/>,
  },

  {
    path: "/loan",
    element: <Loan/>,
  },
  {
    path: "/gateway",
    element: <Gateway/>,
  },
  {
    path: "/economicP",
    element: <EconomicPowerhouse/>,
  },
  {
    path: "/buildingbridges",
    element: <BuildingBridges/>,
  },

  {
    path: "/manufacturing",
    element: <Manufacturing/>,
  },
  {
    path: "/textile",
    element: <Textile/>,
  },
  {
    path: "/tourism",
    element: <Tourism/>,
  },
  {
    path: "/education",
    element: <Education/>,
  },
  
  {
    path: "/informationtech",
    element: < InformationTechnology/>,
  },
  {
    path: "/health",
    element: <Health/>,
  },
  {
    path: "/diversehorizon",
    element: <DiverseHorizon/>,
  },
  {
    path: "/agriculture",
    element: <Agriculture/>,
  },
  {
    path: "/energy",
    element: <Energy/>,
  },
  {
    path: "/tutorial",
    element: <Tutorial/>,
  },
  {
    path: "/watch/:department/:id",
    element: <Watch/>,
  },
  {
    path: "/introduction",
    element: <Introduction/>,
  },
  {
    path: "/presentation",
    element: <Presentation/>,
  },
  {
    path: "/projectobjectives",
    element: <ProjectObjectives/>,
  },
  {
    path: "/acheivement",
    element: <Achievement/>,
  },
  {
    path: "/faqs",
    element: <Faq/>,
  },


]);
