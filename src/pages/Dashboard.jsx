import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

// Assets se icons import kar rahe hain (Check karein ki extension .svg hi hai)
import BloodIcon from "../assets/blood.svg";
import BMIIcon from "../assets/BMI.svg";
import GlucoseIcon from "../assets/glucose.svg";
import LipidIcon from "../assets/lipid 2.svg";
import LiverIcon from "../assets/liver 2.svg";
import StoolIcon from "../assets/stool.svg";
import SwabIcon from "../assets/swab.png"; // Swab image PNG hai aapke folder mein
import ThyroidIcon from "../assets/thyroid.svg";
import UrineIcon from "../assets/urine.svg";

export default function Dashboard() {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Seedha file lekar Upload page par bhej rahe hain
      navigate("/upload", { state: { uploadedFile: selectedFile } });
    }
  };

  const onCardClick = () => fileInputRef.current.click();

  const tests = [
    { name: "Blood Test", icon: BloodIcon, color: "bg-red-50" },
    { name: "BMI Analysis", icon: BMIIcon, color: "bg-green-50" },
    { name: "Glucose Level", icon: GlucoseIcon, color: "bg-blue-50" },
    { name: "Lipid Profile", icon: LipidIcon, color: "bg-pink-50" },
    { name: "Liver Function", icon: LiverIcon, color: "bg-orange-50" },
    { name: "Stool Test", icon: StoolIcon, color: "bg-amber-900/5" },
    { name: "Swab Test", icon: SwabIcon, color: "bg-teal-50" },
    { name: "Thyroid Check", icon: ThyroidIcon, color: "bg-purple-50" },
    { name: "Urine Analysis", icon: UrineIcon, color: "bg-yellow-50" },
  ];

  return (
    <div className="flex bg-[#FBFBFE] min-h-screen font-['Poppins']">
      <div className="flex-1 p-16 ml-44">
        <header className="mb-14">
          <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px]">IIT Patna • Medical AI</span>
          <h1 className="text-6xl font-black text-slate-900 tracking-tight mt-3">
            Choose a <span className="text-blue-600 italic">Test.</span>
          </h1>
        </header>

        {/* Hidden Input */}
        <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tests.map((test, i) => (
            <div 
              key={i} 
              onClick={onCardClick}
              className="bg-white p-8 rounded-[45px] shadow-sm border border-slate-50 flex flex-col items-center group hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2"
            >
              <div className={`w-28 h-28 ${test.color} rounded-[35px] flex items-center justify-center mb-6`}>
                <img src={test.icon} alt={test.name} className="w-16 h-16 object-contain" />
              </div>
              <h3 className="text-lg font-black text-slate-800 tracking-tight">{test.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}