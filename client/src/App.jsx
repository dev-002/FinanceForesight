import { Routes, Route } from "react-router-dom";

// Pages
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import WhyUs from "./Pages/WhyUs/WhyUs";
import Team from "./Pages/Team/Team";
import Service from "./Pages/Service/Service";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
