import React, { useState } from "react";
import { FaPaperPlane, FaStar, FaEnvelope, FaPhoneAlt, FaGraduationCap, FaQuoteLeft } from "react-icons/fa";

export default function Feedback() {
  const [rating, setRating] = useState(0);

  // Random professional users (Not team members)
  const userReviews = [
    { name: "Rahul Sharma", text: "Interpretation accurate hai, startup vibe solid hai!", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&h=100&fit=crop", color: "border-blue-400" },
    { name: "Aditi Verma", text: "Medical reports samajhna ab bahut easy ho gaya hai.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&fit=crop", color: "border-purple-400" },
    { name: "Vikram Goel", text: "Clean UI and very fast results. IIT Patna team rocks!", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&fit=crop", color: "border-green-400" }
  ];

  // Team Avatars (No Names)
  const teamAvatars = [
    "https://img.freepik.com/free-vector/woman-working-laptop-character_23-2148498858.jpg",
    "https://img.freepik.com/free-vector/man-working-laptop-character_23-2148494413.jpg",
    "https://img.freepik.com/free-vector/female-programmer-working-flat-style_23-2147852655.jpg",
    "https://img.freepik.com/free-vector/freelancer-working-laptop-flat-style_23-2147766768.jpg",
    "https://img.freepik.com/free-vector/young-woman-working-laptop_23-2148509159.jpg"
  ];

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen font-['Poppins']">
      <div className="flex-1 p-10 ml-44">
        
        {/* Header Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-[2px] w-10 bg-blue-600"></div>
            <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px]">Feedback Loop</span>
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tight leading-tight">
            How's your <span className="text-blue-600 italic">Experience?</span>
          </h1>
        </section>

        {/* RECENT FEEDBACKS - One Line (3 Users) */}
        <div className="flex gap-6 mb-12 overflow-x-auto pb-4">
          {userReviews.map((user, i) => (
            <div key={i} className="bg-white min-w-[300px] p-6 rounded-[35px] shadow-sm border-b-4 border-slate-50 hover:border-blue-500 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-3">
                <img src={user.img} className={`w-12 h-12 rounded-full border-2 ${user.color} p-0.5`} alt={user.name} />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">{user.name}</h4>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => <FaStar key={s} className="text-yellow-400 text-[8px]" />)}
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 font-medium leading-relaxed italic">"{user.text}"</p>
            </div>
          ))}
        </div>

        {/* FEEDBACK FORM - Premium Glassmorphism */}
        <div className="bg-white p-12 rounded-[50px] shadow-xl shadow-blue-100/20 border border-slate-50 relative max-w-5xl mb-16">
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-2">Display Name</label>
              <input type="text" placeholder="John Doe" className="w-full bg-slate-50 p-5 rounded-2xl outline-none focus:ring-2 focus:ring-blue-100 font-semibold text-sm transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-2">Rating</label>
              <div className="flex gap-4 bg-slate-50 p-4 rounded-2xl w-fit">
                {[1,2,3,4,5].map(s => (
                  <FaStar key={s} onClick={() => setRating(s)} className={`cursor-pointer text-xl transition-transform active:scale-90 ${s <= rating ? "text-yellow-400" : "text-slate-200"}`} />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-2 mb-10">
            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-2">Your Thoughts</label>
            <textarea rows="4" placeholder="Tell us what you liked or how we can improve..." className="w-full bg-slate-50 p-6 rounded-3xl outline-none focus:ring-2 focus:ring-blue-100 font-semibold text-sm resize-none"></textarea>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-black py-5 px-12 rounded-2xl flex items-center gap-4 transition-all shadow-lg shadow-blue-200 uppercase text-xs tracking-[0.2em]">
            Submit Feedback <FaPaperPlane className="text-[10px]" />
          </button>
        </div>

        {/* TEAM ONE-LINE STRIP (Avatars Only) */}
        <div className="flex items-center gap-4 mb-16 px-6 py-4 bg-slate-50 rounded-full w-fit">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Built by IIT Patna Team</span>
          <div className="flex -space-x-3">
            {teamAvatars.map((url, i) => (
              <img key={i} src={url} className="w-10 h-10 rounded-full border-4 border-white shadow-sm hover:scale-110 transition-transform cursor-pointer" alt="developer" />
            ))}
          </div>
        </div>

        {/* RESTORED DARK FOOTER */}
        <div className="bg-slate-900 rounded-[55px] p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <FaGraduationCap size={200} />
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="flex items-start gap-6">
              <div className="w-20 h-16 border-l-4 border-blue-600 pl-4 mt-2">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block">PROJECT OF</span>
                  <span className="text-3xl font-black text-white tracking-tighter block mt-1 uppercase leading-none">IIT <br/>Patna</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400 text-sm font-medium max-w-sm leading-relaxed">Electronic Medical Management System & Report Interpretation Project</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
                <div className="bg-white/5 p-6 rounded-3xl flex items-center gap-4 border border-white/10 hover:bg-white/10 transition-colors">
                    <FaEnvelope className="text-blue-400 text-2xl" />
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase">Email</p>
                      <p className="text-white font-bold text-sm tracking-tight">project.emmr@gmail.com</p>
                    </div>
                </div>
                <div className="bg-white/5 p-6 rounded-3xl flex items-center gap-4 border border-white/10 hover:bg-white/10 transition-colors">
                    <FaPhoneAlt className="text-green-400 text-2xl" />
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase">Contact</p>
                      <p className="text-white font-bold text-sm tracking-tight">+91 98765 43210</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}