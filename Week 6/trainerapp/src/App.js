import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import TrainersList from "./components/TrainerList";
import TrainerDetails from "./components/TrainerDetails";
import trainers from "./data/TrainersMock";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/trainers">Trainers</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/trainers"
          element={<TrainersList trainers={trainers} />}
        />
        <Route path="/trainer/:id" element={<TrainerDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
