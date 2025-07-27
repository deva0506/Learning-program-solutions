import Trainer from "../models/Trainer";

const trainers = [
  new Trainer(1, "Anjali Sharma", "anjali@example.com", "9876543210", "React", [
    "JSX",
    "Hooks",
    "Redux",
  ]),
  new Trainer(2, "Vivek Singh", "vivek@example.com", "8765432109", "Java", [
    "Spring",
    "JPA",
    "Hibernate",
  ]),
  new Trainer(3, "Meera Joshi", "meera@example.com", "9988776655", "Python", [
    "Django",
    "Flask",
    "Pandas",
  ]),
];

export default trainers;
