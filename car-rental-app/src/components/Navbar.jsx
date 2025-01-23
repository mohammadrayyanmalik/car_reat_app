import React from "react";
import logo from "../imgaes/car1.jpg";
import car from "../css/Car1.css";
import carHtml from "../html/Car1.html";

function Navbar() {
  return (
    <div class="header">
    <div class="logo">SUHANA SAFAR<br/></div>
    <div class="contact">
        <span>24x7</span>
        <span>6307402592</span>
    </div>
    <div class="nav">
        <a href="#">Blog</a>
        <a href="#" class="login">Login</a>
    </div>
</div>
  );
}

export default Navbar;
