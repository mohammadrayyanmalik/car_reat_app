import React from "react";
import vehicle from "../vehicles/Vehicle";
function VehicleItem({models, type, price, licensePlate, status}) {
  return (
    <div>
      <div class="card-container">
        <div class="card">
          {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/2019_Maruti_Suzuki_Wagon_R_%28India%29.jpg/1200px-2019_Maruti_Suzuki_Wagon_R_%28India%29.jpg" alt="Wagon R"/> */}
          <div class="card-details">
            <h3>{type}</h3>
            <p>{models}</p>
            <p>{licensePlate}</p>
            <p>{status}</p>
            <p>Includes Toll, State Tax & GST</p>
          </div>
          <div class="card-pricing">
            <p>{price}</p>
          </div>
          <button class="select-button">Select</button>
        </div>
      </div>
    </div>
  );
}

export default VehicleItem;
