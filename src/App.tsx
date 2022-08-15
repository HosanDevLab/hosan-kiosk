import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Intro from "./pages/Intro";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
