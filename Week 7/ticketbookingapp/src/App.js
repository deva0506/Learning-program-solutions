import React, { useState } from "react";
import "./App.css";

const GuestPage = () => (
  <div>
    <h2>Welcome Guest</h2>
    <p>You can view flight details, but must log in to book tickets.</p>
  </div>
);

const UserPage = () => (
  <div>
    <h2>Welcome User</h2>
    <p>You can now book flight tickets!</p>
  </div>
);

const FlightDetails = () => (
  <div>
    <h3>Flight Details</h3>
    <ul>
      <li>Indigo - Bangalore to Delhi - ₹5,000</li>
      <li>Air India - Mumbai to Chennai - ₹4,500</li>
      <li>SpiceJet - Hyderabad to Kolkata - ₹4,800</li>
    </ul>
  </div>
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let content;
  if (isLoggedIn) {
    content = <UserPage />;
  } else {
    content = <GuestPage />;
  }

  return (
    <div className="App">
      <h1>Ticket Booking App</h1>
      <FlightDetails />
      <div className="button-group">
        {!isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        ) : (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        )}
      </div>
      <hr />
      {content}
    </div>
  );
};

export default App;
