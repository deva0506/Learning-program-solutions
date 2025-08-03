import React from "react";

const ListOfIndianPlayers = ({ IndianPlayers }) => {
  return (
    <div>
      {IndianPlayers.map((player, index) => (
        <li key={index}>Mr. {player}</li>
      ))}
    </div>
  );
};

export default ListOfIndianPlayers;
