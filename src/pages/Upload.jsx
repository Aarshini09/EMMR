import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // location import karein
import { 
  FaCloudUploadAlt, FaCheckCircle, FaShieldAlt, 
  FaArrowRight, FaMicroscope, FaChartLine, FaBrain 
} from "react-icons/fa";

export default function Upload() {
  const location = useLocation(); // Get passed state from Dashboard
  
  // Updated state initialization: Check if a file was passed from Dashboard
  const [file, setFile] = useState(location.state?.uploadedFile || null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const executeAnalysis = () => {
    setIsAnalyzing(true);
    // Simulating Neural Processing for IIT Patna EMMR Engine
    setTimeout(() => {
      setIsAnalyzing(false);
      alert("Neural Analysis Complete! Redirecting to health insights...");
      // navigate("/results"); // Future step
    }, 4000);
  };

  return (
    <div className="flex bg-[#F1F5F9] min-h-screen font-['Poppins'] relative overflow-hidden">
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] bg-indigo-100/40 rounded-full blur-[100px]"></div>

      <div className="flex-1 p-16 ml-44 relative z-10">
        
        <header className="mb-16">
          <button 
            onClick={() => navigate("/")} 
            className="mb-6 text-blue-600 font-black uppercase text-[10px] tracking-[0.3em] hover:translate-x-[-5px] transition-transform flex items-center gap-2"
          >
            ← Back to System Dashboard
          </button>
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[3px] w-20 bg-blue-600 rounded-full"></span>
            <span className="text-blue-600 font-black tracking-[0.5em] uppercase text-[12px]">Intelligence Unit</span>
          </div>
          <h1 className="text-7xl font-black text-slate-900 tracking-tighter leading-tight">
            Decode your <br />
            <span className="text-blue-600 italic font-serif">Medical DNA.</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-[1700px]">
          
          {/* LEFT COLUMN: UPLOAD & STATS */}
          <div className="lg:col-span-8 space-y-10">
            <div className="bg-white/80 backdrop-blur-xl p-12 rounded-[60px] shadow-2xl shadow-blue-900/5 border border-white relative group">
              
              {/* Added conditional cursor-pointer */}
              <div 
                onClick={() => !isAnalyzing && fileInputRef.current.click()}
                className={`border-[4px] border-dashed rounded-[50px] p-24 flex flex-col items-center justify-center transition-all 
                ${isAnalyzing ? 'border-blue-500 bg-blue-50/20' : 'border-slate-100 group-hover:border-blue-200 bg-slate-50/30 group-hover:bg-blue-50/40 cursor-pointer'}`}
              >
                
                {isAnalyzing ? (
                  <div className="text-center">
                    <div className="w-24 h-24 border-8 border-blue-600 border-t-transparent rounded-full animate-spin mb-8 mx-auto shadow-2xl shadow-blue-100"></div>
                    <p className="text-blue-600 font-black uppercase tracking-[0.4em] text-sm animate-pulse">Analyzing Bio-Markers...</p>
                    <p className="text-slate-400 text-xs mt-4 font-bold uppercase tracking-widest">Scanning markers for IIT Patna EMMR Engine</p>
                  </div>
                ) : file ? (
                  // File display logic from original
                  <div className="text-center animate-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                      <FaCheckCircle className="text-green-500 text-5xl" />
                    </div>
                    <h4 className="text-3xl font-black text-slate-800 mb-2 tracking-tight">{file.name}</h4>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">File Integrity Verified</p>
                    <button 
                      onClick={(e) => {e.stopPropagation(); setFile(null);}} 
                      className="mt-6 text-red-500 font-bold text-[10px] uppercase tracking-widest hover:underline"
                    >
                      Remove File
                    </button>
                  </div>
                ) : (
                  // Default Dropzone state from original
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white rounded-[40px] shadow-2xl flex items-center justify-center mx-auto mb-10 group-hover:rotate-6 transition-transform duration-500">
                      <FaCloudUploadAlt className="text-blue-600 text-6xl" />
                    </div>
                    <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Drop Report Here</h3>
                    <p className="text-slate-400 font-bold text-[11px] tracking-[0.5em] uppercase mb-12">System Supports PDF • JPG • PNG</p>
                    <span className="bg-slate-900 text-white px-16 py-6 rounded-3xl font-black text-[11px] uppercase tracking-[0.4em] shadow-2xl hover:bg-blue-600 transition-all">
                      Select File
                    </span>
                  </div>
                )}
                {/* File Input for browser selection */}
                <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} accept=".pdf,image/*" />
              </div>

              {/* Show Execute button only when file is present and not analyzing */}
              {file && !isAnalyzing && (
                <button 
                  onClick={executeAnalysis}
                  className="w-full mt-10 bg-blue-600 text-white py-8 rounded-[40px] font-black uppercase tracking-[0.5em] text-xs flex items-center justify-center gap-6 hover:bg-slate-900 transition-all shadow-xl shadow-blue-200 active:scale-95"
                >
                  Execute Digital Interpretation <FaArrowRight />
                </button>
              )}
            </div>

            {/* FLOATING STATS */}
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-[45px] shadow-lg border border-slate-50 flex items-center gap-6 group hover:shadow-blue-100 transition-all">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <FaChartLine className="text-blue-600 group-hover:text-white text-2xl" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Accuracy Rate</p>
                  <h5 className="text-3xl font-black text-slate-900 tracking-tighter">99.82%</h5>
                </div>
              </div>
              <div className="bg-white p-8 rounded-[45px] shadow-lg border border-slate-50 flex items-center gap-6 group hover:shadow-indigo-100 transition-all">
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <FaBrain className="text-indigo-600 group-hover:text-white text-2xl" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Logic Engine</p>
                  <h5 className="text-3xl font-black text-slate-900 tracking-tighter">EMMR v2.0</h5>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: GUIDELINES */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900 rounded-[60px] p-12 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] h-full relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
              
              <h4 className="text-[11px] font-black text-blue-400 uppercase tracking-[0.6em] mb-16 flex items-center gap-4">
                <FaMicroscope /> Submission Protocol
              </h4>

              <div className="space-y-16">
                {[
                  { n: "01", t: "Ensure report text is crystal clear and high-resolution." },
                  { n: "02", t: "Upload full-page scans for metabolic marker detection." },
                  { n: "03", t: "Wait for logic engine to complete verification scan." }
                ].map((item, i) => (
                  <div key={i} className="relative group">
                    <span className="absolute -top-8 -left-4 text-7xl font-black text-white/5 italic select-none group-hover:text-blue-500/10 transition-colors">
                      {item.n}
                    </span>
                    <p className="text-lg font-bold text-slate-100 leading-relaxed pl-4 relative z-10 group-hover:translate-x-2 transition-transform">
                      {item.t}
                    </p>
                  </div>
                ))}
              </div>

              {/* Sidebar bottom code fixed to prevent word repeats */}
              <div className="mt-24 p-8 rounded-[40px] bg-white/5 border border-white/10 flex items-center gap-6">
                <FaShieldAlt className="text-blue-400 text-3xl" />
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-loose">
                  {/* Clean text based on user image reference */}
                  IIT Patna Protected <br /> Encryption Active
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Footer Style from original */}
        <div className="mt-24 text-center">
            <span className="text-slate-300 font-black text-[10px] uppercase tracking-[1em]">Engineered by IIT Patna Project Team</span>
        </div>

      </div>
    </div>
  );
}