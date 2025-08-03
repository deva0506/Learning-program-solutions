import React from "react";
import "./App.css";
import image from "./Images/image.png";

const App = () => {
  const heading = <h1>Office Space Rental App</h1>;
  const officeImage = "https://via.placeholder.com/400x200?text=Office+Space";

  const office = {
    name: "Indiranagar Tech Park",
    rent: 75000,
    address: "2nd Main, Indiranagar, Bangalore"
  };

  const officeList = [
    {
      name: "Indiranagar Tech Park",
      rent: 75000,
      address: "2nd Main, Indiranagar, Bangalore"
    },
    {
      name: "HSR Layout Tower",
      rent: 55000,
      address: "27th Main, HSR Layout, Bangalore"
    },
    {
      name: "Koramangala Heights",
      rent: 85000,
      address: "5th Block, Koramangala, Bangalore"
    }
  ];

  const renderOffices = officeList.map((office, index) => (
    <div key={index} className="office-card">
      <h3>{office.name}</h3>
      <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
        Rent: ₹{office.rent}
      </p>
      <p>Address: {office.address}</p>
    </div>
  ));

  return (
    <div className="App">
      {heading}
      <img src={image} alt="Office Space" />

      <div className="office-details">
        <h2>{office.name}</h2>
        <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
          Rent: ₹{office.rent}
        </p>
        <p>Address: {office.address}</p>
      </div>

      <h2>Available Office Listings</h2>
      {renderOffices}
    </div>
  );
};

export default App;
