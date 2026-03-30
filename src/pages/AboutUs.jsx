import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaGraduationCap } from "react-icons/fa";

export default function AboutUs() {
  const team = [
    { 
      name: "Antra Priyadarshini", 
      initial: "AP", 
      // RESTORED PIC: Black woman coder (Back) with large setup
      img: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=200&h=200&auto=format&fit=crop", 
      // RESTORED Name Color: Crimson Red
      color: "from-[#FF6B6B] to-[#FF8E8E] text-red-50"
    },
    { 
      name: "Taj Priyadarshi", 
      initial: "TP", 
      // RESTORED PIC: Male coder writing code on screen
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=200&h=200&auto=format&fit=crop", 
      // RESTORED Name Color: Deep Indigo/Purple
      color: "from-[#845EF7] to-[#9775FA] text-indigo-50" 
    },
    { 
      name: "Arpita Priyanka", 
      initial: "AP", 
      // RESTORED PIC: Diverse woman coder back view
      img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=200&h=200&auto=format&fit=crop", 
      // RESTORED Name Color: Fresh Green
      color: "from-[#51CF66] to-[#69DB7C] text-green-50" 
    },
    { 
      name: "Raj Priyadarshi", 
      initial: "RP", 
      // RESTORED PIC: Man coder back view (setup focus)
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=200&h=200&auto=format&fit=crop", 
      // RESTORED Name Color: Bold Blue
      color: "from-[#339AF0] to-[#4DABF7] text-blue-50" 
    },
    { 
      name: "Srishti Priya", 
      initial: "SP", 
      // RESTORED PIC: Diverse woman coder (focused perspective)
      img: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=200&h=200&auto=format&fit=crop", 
      // RESTORED Name Color: Amber Gold
      color: "from-[#FCC419] to-[#FFD43B] text-amber-50" 
    }
  ];

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen font-['Poppins']">
      
      {/* Main Content Area with sidebar spacing */}
      <div className="flex-1 p-10 ml-40">
        
        {/* Header Section */}
        <section className="mb-16 max-w-5xl">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-[2px] w-10 bg-blue-600"></div>
            <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px]">Innovation @ IIT Patna</span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Navigating Health Metrics with<br /> 
            <span className="text-blue-600 italic">Analytical Precision.</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-3xl font-medium">
            We are a team of passionate Data Analytics students at IIT Patna, dedicated to creating EMMR—a tool that demystifies medical jargon.
          </p>
        </section>

        {/* RESTORED TEAM GRID - Single Line (grid-cols-5) */}
        <div className="mb-20 w-full max-w-[1400px]">
          <h2 className="text-2xl font-black text-slate-800 mb-10 tracking-tight">Meet Our <span className="text-blue-600">Founding Team</span></h2>
          
          <div className="grid grid-cols-5 gap-4">
            {team.map((member, i) => (
              <div key={i} className="bg-white p-6 rounded-[40px] shadow-sm border border-slate-50 flex flex-col items-center group hover:shadow-xl transition-all duration-500">
                
                {/* MODERN LOGO BOX: Original Coder character illustrations [User Request Restore]
                   Color change use kiye hain with original startup glow colors.
                */}
                <div className={`w-28 h-28 bg-gradient-to-br ${member.color} rounded-[30px] flex items-center justify-center mb-6 relative shadow-inner overflow-hidden p-1`}>
                  
                  {/* Distinct Coder Image replacement - Restore */}
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover rounded-[25px]"
                  />
                  
                  {/* Outer Premium Ring (No dashed border, clean startup feel) */}
                  <div className="absolute inset-0 border-2 border-dashed border-white/20 rounded-[30px] scale-105 group-hover:scale-100 transition-transform"></div>
                </div>

                <h3 className="text-[13px] font-bold text-slate-800 tracking-tight text-center leading-tight mb-1 uppercase tracking-tight">
                  {member.name}
                </h3>
                
                {/* Tagline initialization - Small, Bold Blue */}
                <p className="text-[8px] font-black text-blue-600 uppercase tracking-widest leading-3 mb-6 text-center">
                  BS Computer Science <br/> Data Analytics Student
                </p>

                <div className="flex gap-3 mt-auto">
                  <a href="#" className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 hover:text-blue-600 transition-all">
                    <FaLinkedin size={16} />
                  </a>
                  <a href="#" className="w-8 h-8 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 hover:text-black transition-all">
                    <FaGithub size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Restored Premium No-Image Footer - Correct bottom functionality */}
        <div className="mt-24 border-t border-slate-100 pt-16 w-full max-w-[1600px] mx-auto overflow-hidden relative">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-slate-900 rounded-[60px] p-16 text-white shadow-2xl shadow-blue-200">
            <div className="text-center md:text-left flex items-start gap-6">
              
              {/* BRAND BOX - Correct textual representation restoration */}
              <div className="w-20 h-16 border-l-4 border-blue-600 pl-4 mt-2">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-tight block">PROJECT OF</span>
                  <span className="text-3xl font-black text-white tracking-tighter block mt-1">IIT <br/>Patna</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-slate-400 font-medium max-w-sm">Electronic Medical Management System & Report Interpretation Project</span>
                {/* Small Decorative IITP Logo Icon */}
                <div className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-full border border-white/10 mt-4">
                  <FaGraduationCap className="text-blue-400"/>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8">
                {/* Email Box [User Request] */}
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl flex items-center gap-4 border border-white/10 hover:bg-white/20 transition-all min-w-[320px]">
                    <FaEnvelope className="text-blue-400 text-2xl" />
                    <div className="flex flex-col">
                        <span className="text-[11px] text-slate-400 uppercase font-bold tracking-widest">Email Us</span>
                        <a href="mailto:project.emmr@gmail.com" className="text-white font-bold text-md tracking-tight">project.emmr@gmail.com</a>
                    </div>
                </div>

                {/* Phone Box [User Request] */}
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl flex items-center gap-4 border border-white/10 hover:bg-white/20 transition-all min-w-[280px]">
                    <FaPhoneAlt className="text-green-400 text-2xl" />
                    <div className="flex flex-col">
                        <span className="text-[11px] text-slate-400 uppercase font-bold tracking-widest">Call Us</span>
                        <span className="text-white font-bold text-md tracking-tight">+91 98765 43210</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}