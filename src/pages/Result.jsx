import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHeartbeat, FaFileDownload, FaExclamationTriangle, FaCheckCircle, FaStethoscope } from "react-icons/fa";

export default function Results() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F1F5F9] min-h-screen font-['Poppins'] p-16">
      <div className="ml-44">
        <header className="mb-14 flex justify-between items-end">
          <div>
            <button onClick={() => navigate("/")} className="text-blue-600 font-black text-[10px] tracking-widest uppercase mb-4">← Return to Dashboard</button>
            <h1 className="text-6xl font-black text-slate-900 tracking-tighter">Health <span className="text-blue-600 italic">Insights.</span></h1>
          </div>
          <button className="bg-white px-8 py-4 rounded-2xl font-bold shadow-sm border border-slate-100 flex items-center gap-3 hover:bg-slate-50 transition-all">
            <FaFileDownload className="text-blue-600" /> Save Report
          </button>
        </header>

        <div className="grid grid-cols-12 gap-8">
          {/* Circular Score */}
          <div className="col-span-4 bg-slate-900 p-12 rounded-[60px] text-white flex flex-col items-center justify-center shadow-2xl">
            <div className="w-44 h-44 rounded-full border-[12px] border-white/5 border-t-blue-500 flex flex-col items-center justify-center mb-6">
              <span className="text-6xl font-black">82%</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Vitality</span>
            </div>
            <p className="text-slate-400 text-center text-xs font-medium leading-relaxed">Your overall health markers are in good standing.</p>
          </div>

          {/* Cards for Markers */}
          <div className="col-span-8 grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-[45px] shadow-sm border border-slate-50 flex justify-between items-center group hover:shadow-xl transition-all">
               <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Hemoglobin</p>
                  <h5 className="text-3xl font-black text-slate-900">14.2 <span className="text-xs text-slate-300">g/dL</span></h5>
               </div>
               <span className="bg-green-50 text-green-500 px-4 py-2 rounded-xl text-[10px] font-black uppercase">Normal</span>
            </div>

            <div className="bg-white p-8 rounded-[45px] shadow-sm border border-slate-50 flex justify-between items-center group hover:shadow-xl transition-all border-l-8 border-red-500">
               <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Glucose (F)</p>
                  <h5 className="text-3xl font-black text-slate-900">115 <span className="text-xs text-slate-300">mg/dL</span></h5>
               </div>
               <span className="bg-red-50 text-red-500 px-4 py-2 rounded-xl text-[10px] font-black uppercase">High</span>
            </div>
          </div>

          {/* AI Recommendation */}
          <div className="col-span-12 bg-white/60 backdrop-blur-md p-12 rounded-[60px] border border-white mt-4 flex items-start gap-8">
             <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center text-white text-2xl shadow-xl shadow-blue-200">
                <FaStethoscope />
             </div>
             <div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">AI Diagnostic Summary</h3>
                <p className="text-slate-600 font-medium max-w-3xl leading-relaxed">
                  The IITP Neural Engine detected elevated glucose levels. It is recommended to reduce sugar intake and schedule a follow-up test in 30 days. All other markers are within optimal clinical ranges.
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}