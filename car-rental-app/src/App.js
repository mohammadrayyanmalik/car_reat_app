import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Vehicle from "./components/vehicles/Vehicle";
import Registration from "./components/Registration";
import AdminVehicle from "./components/Admin/AdminVehicle";

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

},

{
  path:"/registration",
  element:<Registration/>
},
{
  path:"adminVehicle",
  element:<>
 <AdminVehicle/>
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
