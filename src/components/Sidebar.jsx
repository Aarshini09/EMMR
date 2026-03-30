import { Link, useLocation } from "react-router-dom";
import { FaThLarge, FaInfoCircle, FaUsers, FaFileUpload, FaComments } from "react-icons/fa";

export default function Sidebar() {
  const location = useLocation();
  const links = [
    { path: "/", label: "Dashboard", icon: <FaThLarge /> },
    { path: "/about", label: "About", icon: <FaInfoCircle /> },
    { path: "/about-us", label: "About Us", icon: <FaUsers /> },
    { path: "/upload", label: "Upload", icon: <FaFileUpload /> },
    { path: "/feedback", label: "Feedback", icon: <FaComments /> },
  ];

  return (
    <div className="w-32 bg-white h-screen fixed left-0 top-0 border-r border-slate-100 flex flex-col items-center py-10 z-50 shadow-sm">
      <div className="mb-12">
        <h1 className="text-3xl font-black text-blue-900 tracking-tighter cursor-pointer">
          EM<span className="text-blue-600">MR</span>
        </h1>
      </div>
      <div className="flex flex-col gap-8 w-full">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`flex flex-col items-center gap-2 transition-all ${
              location.pathname === link.pathname ? "text-blue-600" : "text-slate-300 hover:text-blue-400"
            }`}
          >
            <div className={`p-3 rounded-2xl ${location.pathname === link.path ? "bg-blue-50 shadow-inner" : ""}`}>
              <span className="text-xl">{link.icon}</span>
            </div>
            <span className="text-[9px] font-bold uppercase tracking-widest">{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}