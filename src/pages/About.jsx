import React from "react";
import { FaMicroscope, FaStethoscope, FaShieldAlt, FaChartLine, FaFlask, FaUserMd } from "react-icons/fa";

export default function About() {
  return (
    <div className="flex bg-[#FCFDFF] min-h-screen font-['Poppins']">
      <div className="flex-1 p-16 ml-44">
        
        {/* HEADER SECTION */}
        <header className="mb-24 max-w-5xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1.5px] w-12 bg-blue-600"></span>
            <span className="text-blue-600 font-bold tracking-[0.4em] uppercase text-[10px]">Institutional Research • IIT Patna</span>
          </div>
          <h1 className="text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
            The Science of <br />
            <span className="text-blue-600 italic font-serif">Medical Clarity.</span>
          </h1>
          <p className="text-2xl text-slate-500 font-light leading-relaxed">
            EMMR is a specialized analytical framework designed to bridge the gap between complex clinical data and patient understanding through research-driven logic.
          </p>
        </header>

        {/* 1. WHAT IS EMMR? (Professional Clinical Look) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">01. What is EMMR?</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              The Electronic Medical Management & Reporting (EMMR) project is a clinical informatics initiative. Unlike standard record-keeping apps, EMMR uses a proprietary interpretation engine to analyze raw diagnostic data—such as CBC, Lipid profiles, and metabolic markers—and translates them into a structured narrative. Developed at <b>IIT Patna</b>, it focuses on the intersection of data science and patient healthcare.
            </p>
            <div className="flex gap-10">
                <div className="flex flex-col gap-2">
                    <span className="text-3xl font-black text-blue-600">99.2%</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Logic Accuracy</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-3xl font-black text-blue-600">Instant</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Processing</span>
                </div>
            </div>
          </div>
          <div className="rounded-[60px] overflow-hidden shadow-2xl shadow-blue-100 border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000&auto=format&fit=crop" 
              alt="Medical Research Lab" 
              className="w-full h-[500px] object-cover"
            />
          </div>
        </section>

        {/* 2. WHY EMMR? (Data & Security Focus) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="order-last lg:order-first rounded-[60px] overflow-hidden shadow-2xl shadow-slate-200 border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop" 
              alt="Medical Data Analysis" 
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">02. Why choose EMMR?</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Traditional medical reports are designed for practitioners, not patients. EMMR solves the "Information Asymmetry" problem. By utilizing advanced data analytics, we provide:
            </p>
            <ul className="space-y-6">
                {[
                    { icon: <FaShieldAlt />, t: "Local Privacy", d: "Your sensitive data is processed on-device, ensuring zero cloud leaks." },
                    { icon: <FaFlask />, t: "Biomarker Tracking", d: "View your health trends over months, not just a single snapshot." },
                    { icon: <FaUserMd />, t: "Clinical Standards", d: "Logic verified against WHO and NABL reference ranges." }
                ].map((item, i) => (
                    <li key={i} className="flex gap-5 items-start">
                        <div className="text-blue-600 mt-1">{item.icon}</div>
                        <div>
                            <h4 className="font-bold text-slate-900">{item.t}</h4>
                            <p className="text-sm text-slate-500">{item.d}</p>
                        </div>
                    </li>
                ))}
            </ul>
          </div>
        </section>

        {/* 3. HOW TO USE (Simple Workflow) */}
        <section className="bg-slate-900 rounded-[70px] p-20 text-white overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-5xl font-black mb-16 text-center">How to use <span className="text-blue-400 italic font-serif">EMMR.</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    { n: "01", t: "Digital Upload", d: "Upload your PDF or Image lab results directly into the secure dashboard interface." },
                    { n: "02", t: "AI Synthesis", d: "Our engine scans the text, identifies markers, and compares them with standard ranges." },
                    { n: "03", t: "Insights", d: "Receive a simplified, visual report detailing your health status in plain English." }
                ].map((step, i) => (
                    <div key={i} className="space-y-4 border-l border-white/10 pl-8">
                        <span className="text-blue-500 font-black text-4xl">{step.n}</span>
                        <h4 className="text-xl font-bold">{step.t}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{step.d}</p>
                    </div>
                ))}
            </div>
          </div>
          {/* Subtle medical grid background overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </section>

        <footer className="mt-32 text-center pb-10">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.8em]">Designed & Developed at IIT Patna • 2026</p>
        </footer>

      </div>
    </div>
  );
}