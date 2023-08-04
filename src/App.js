import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from './Route';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css';
import Chatbot from './chatbot';

function App() {
  return (
  <>
  {/* <Home/> */}
  <RouterProvider router={router} />
  <Chatbot />
  </>
  );
}

export default App;
