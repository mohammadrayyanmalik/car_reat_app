import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Vehicle from "./components/vehicles/Vehicle";

const route = createBrowserRouter([
  {
  path:"/",
  element:<>
  <Navbar/>
  <Main/>
  </>
},
{
  path:"/vehicles",
  element:<>
  <Navbar/>
  <Vehicle/>

  </>
}




]);

function App() {
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
