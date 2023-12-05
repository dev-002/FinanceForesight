import { Routes, Route } from "react-router-dom";

// Pages
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import WhySection from "./Components/Home/WhySection";
import ServiceSection from "./Components/Home/ServiceSection";
import TeamSection from "./Components/Home/TeamSection";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sevice" element={<ServiceSection />} />
        <Route path="/whyus" element={<WhySection />} />
        <Route path="/team" element={<TeamSection />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
