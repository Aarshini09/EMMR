import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Upload from "./pages/Upload.jsx";
import Feedback from "./pages/Feedback.jsx";
import Result from "./pages/Result.jsx";

export default function App() {
  return (
    <Router>
      <div className="flex bg-[#FBFBFE] min-h-screen">
        <Sidebar /> {/* Sidebar sirf yahan rahega */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/Result" element={<Result />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}