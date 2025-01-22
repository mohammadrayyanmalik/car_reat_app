import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const route = createBrowserRouter([
  {
  path:"/",
  element:<>
  <Navbar/>
  <Main/>
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
