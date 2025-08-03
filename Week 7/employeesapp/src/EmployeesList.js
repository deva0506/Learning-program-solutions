import EmployeeCard from "./EmployeeCard";
import Styles from "./EmployeeCard.module.css";

function EmployeesList({ employees }) {
  return (
    <div>
      <h1>Employees List</h1>
      <div className={Styles.cardContainer}>
        {employees.map((employee) => (
          <EmployeeCard employee={employee} key={employee.id} />
        ))}
      </div>
    </div>
  );
}

export default EmployeesList;
