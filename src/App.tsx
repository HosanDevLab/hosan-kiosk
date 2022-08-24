import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Meal from "./pages/Meal";
import Pathfinding from "./pages/Pathfinding";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/pathfinding" element={<Pathfinding />} />
        <Route path="/meal" element={<Meal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
