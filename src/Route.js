import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Resource from "./Components/Resource";
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
import RegulatoryCatalog from "./Components/RegulatoryCostCalculator";
import RegulatoryCatalogCalculator from "./Components/RegulatoryCostCalculator";
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

]);
