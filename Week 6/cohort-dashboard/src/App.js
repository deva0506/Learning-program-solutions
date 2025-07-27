import React from "react";
import CohortDetails from "./components/CohortDetails";

function App() {
  return (
    <div>
      <h2>Cohort Details</h2>

      <CohortDetails name="React Bootcamp" trainer="Anjali" status="Ongoing" />
      <CohortDetails name="Java Mastery" trainer="Vivek" status="Completed" />
    </div>
  );
}

export default App;
