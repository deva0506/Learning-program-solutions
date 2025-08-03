import { useContext } from "react";
import Styles from "./EmployeeCard.module.css";
import ThemeContext from "./Themecontext";

function EmployeeCard({ employee }) {
  const theme = useContext(ThemeContext); // Get theme from context

  return (
    <div className={Styles.Card}>
      <h3>{employee.name}</h3>
      <p>{employee.email}</p>
      <p>{employee.phone}</p>
      <p>
        <a href="#" className={theme}>
          Edit
        </a>
        <a href="#" className={theme}>
          Delete
        </a>
      </p>
    </div>
  );
}

export default EmployeeCard;
