import React from "react";

const Scorebelow70 = ({ players }) => {
  const players70 = [];
  players.map((item) => {
    if (item.score <= 70) {
      players70.push(item);
    }
  });

  return (
    <div>
      {players70.map((item, index) => (
        <li key={index}>
          Mr. {item.name} - {item.score}
        </li>
      ))}
    </div>
  );
};

export default Scorebelow70;
