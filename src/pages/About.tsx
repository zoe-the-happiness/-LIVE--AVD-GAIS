import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Users, ShieldCheck, HeartPulse, BookOpen, GraduationCap, Globe2, Mic, Quote, Award, Scroll, Layers, UserCheck, Mail, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { subCommitteesData } from "../data/subcommittees";

export function About() {
  const { hash } = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [hash]);
  return (
    <div className="py-24 sm:py-32 bg-slate-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl text-center mb-4 drop-shadow-sm">About AVD</h1>
        
        {/* Sanskrit Motto Sloka with Divine Glowing Aura */}
        <div className="relative mb-12 mx-auto max-w-2xl group">
          {/* Divine Glowing Background Aura */}
          <motion.div 
            initial={{ opacity: 0.6, scale: 0.98 }}
            animate={{ 
              opacity: [0.5, 0.85, 0.5],
              scale: [0.99, 1.02, 0.99]
            }}
            transition={{ 
              duration: 3.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute -inset-1.5 bg-gradient-to-r from-amber-400/40 via-saffron-500/50 to-amber-300/40 rounded-3xl blur-xl"
          />
          
          {/* Card Content */}
          <div className="relative text-center px-6 py-7 sm:px-8 sm:py-8 rounded-2xl bg-gradient-to-r from-amber-50/95 via-saffron-50/98 to-amber-50/95 border border-saffron-300/90 shadow-[0_0_30px_rgba(245,158,11,0.28)] backdrop-blur-xs">
            <Quote className="w-7 h-7 text-saffron-500/40 absolute top-3.5 left-4 transform -scale-x-100" />
            <Quote className="w-7 h-7 text-saffron-500/40 absolute bottom-3.5 right-4" />
            
            <div className="font-serif text-xl sm:text-2xl font-bold text-amber-950 tracking-wide leading-relaxed py-1 [text-shadow:_0_1px_12px_rgba(217,119,6,0.2)]">
              ज्ञानं सेवा च विज्ञानं ऐक्यं नः परमं बलम्।<br />
              अयं पशुवैद्यसंघः प्राणिसेवारतः सदा॥
            </div>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-saffron-400 to-transparent mx-auto my-3"></div>
            <p className="text-xs sm:text-sm font-medium text-amber-900/80 italic">
              "Knowledge, Service, and Science — Unity is our greatest strength.<br className="hidden sm:inline" />
              This Association of Veterinary Doctors is forever dedicated to the service of all living beings."
            </p>
          </div>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="text-xl sm:text-2xl font-semibold text-slate-700 text-center max-w-3xl mx-auto mb-16 tracking-tight leading-relaxed"
        >
          An organisation for professional growth and nation building through Animal husbandry
        </motion.p>

        <div className="space-y-16">
          {/* History Section */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-10 h-1 bg-slate-300 rounded-full inline-block"></span>
              OUR HISTORY
            </h2>
            <div className="prose prose-lg prose-slate max-w-none text-slate-700 leading-relaxed">
              <p>
                Founded under the <strong>West Bengal Societies Registration Act, 1961 (Reg. No. 34784)</strong>, the Association of Veterinary Doctors (AVD) emerged from a collective realization that strength comes only through unity and organization. 
              </p>
              <p>
                Over the years, our organization has strived to uphold the dignity and honor of the veterinary profession, safeguard the rights of its members, and promote the advancement of veterinary science and animal husbandry in the state. From its early origins as a small collective of visionaries, AVD has grown into the single, credible voice of the veterinary profession in West Bengal, standing firm in its commitment to the welfare of animals and those who dedicate their lives to healing them.
              </p>
            </div>
          </div>

          <div className="prose prose-lg prose-slate mx-auto max-w-none bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-200">
            <div className="space-y-16">
              <section>
                <h2 className="text-3xl font-bold text-saffron-600 mb-6 flex items-center gap-3">
                  <span className="w-10 h-1 bg-saffron-500 rounded-full inline-block"></span>
                  VISION
                </h2>
                <div className="space-y-4 text-slate-700 leading-relaxed pl-4 sm:pl-12 border-l-4 border-saffron-100">
                  <p>
                    To carry the veterinary profession of West Bengal to the pinnacle of its dignity, strength, and service, so that no power can cast an evil eye on the welfare of its animals or the standing of its doctors.
                  </p>
                  <p>
                    A West Bengal where every animal, owned or stray, productive or companion, receives competent and compassionate care; where every veterinarian stands as a respected guardian of public health, food security, and animal welfare; and where the profession functions not as scattered individuals but as one organized, self-confident body.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center gap-3">
                  <span className="w-10 h-1 bg-blue-500 rounded-full inline-block"></span>
                  MISSION
                </h2>
                <div className="space-y-4 text-slate-700 leading-relaxed pl-4 sm:pl-12 border-l-4 border-blue-100">
                  <p>
                    The well-being of animals and the well-being of the people who depend on them are one single life-breath. They cannot be separated. AVD exists to protect both.
                  </p>
                  <p>
                    Strength comes only through organization. It is therefore the duty of every veterinarian in West Bengal to consolidate the profession into one disciplined, vigilant, and united body. A scattered profession is exploited; an organized profession sets the terms of its own respect.
                  </p>
                  <p>
                    AVD is not a sectoral or reactive body. It is a power-house meant to energize every field of veterinary endeavour in the state, government service, private practice, academia, livestock development, and public health, so that the profession reaches its full potential and the society it serves prospers with it.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-emerald-600 mb-4 flex items-center gap-3">
                  <span className="w-10 h-1 bg-emerald-500 rounded-full inline-block"></span>
                  OBJECTIVES
                </h2>
                <div className="pl-4 sm:pl-12">
                  <p className="text-slate-700 font-semibold mb-8 text-lg">
                    The objects for which the society is established are:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {[
                      {
                        num: "1",
                        text: "To maintain the honor and dignity of the veterinarians and also to uphold the interest of the veterinary profession in nationalistic approach."
                      },
                      {
                        num: "2",
                        text: "To undertake different activities related to up-gradation of animal husbandry, animal health and livestock and products towards holistic socioeconomic development of the nation in general and of the rural community in particular."
                      },
                      {
                        num: "3",
                        text: "To undertake, encourage and uphold the knowledge, study and veterinary practices in all ways."
                      },
                      {
                        num: "4",
                        text: "To encourage need based research works and extension activities in the veterinary field for the prosperity of animal husbandry sector."
                      },
                      {
                        num: "5",
                        text: "To undertake proper initiation for scientific conservation of national biodiversity including wild life as well as indigenous livestock and poultry, prevention of unauthorized drainage of livestock to another country and unlawful slaughter."
                      },
                      {
                        num: "6",
                        text: "To encourage a healthy social co-operative atmosphere amongst the members of the association, other technical workers and people in general."
                      },
                      {
                        num: "7",
                        text: "To provide relief to the members in distress and to help the families of the deceased members."
                      },
                      {
                        num: "8",
                        text: "To strive for establishing a healthy working environments and infrastructure facilities in the work-places which is necessary for proper scientific working conditions and also for job satisfaction."
                      },
                      {
                        num: "9",
                        text: "To arrange extension activities like lectures, symposia, discussions and workshop on different aspects of veterinary and allied subjects for creating awareness among the stakeholder."
                      },
                      {
                        num: "10",
                        text: "To arrange publications of cultural magazine for betterment and close relationship amongst the members."
                      },
                      {
                        num: "11",
                        text: "To arrange to publish a journal for the association."
                      },
                      {
                        num: "12",
                        text: "To encourage for formation of self-help group from the locality for motivation of poor people within the scope of Section 4(2) of the W.B.S.R. Act, 1961."
                      }
                    ].map((item) => (
                      <div 
                        key={item.num} 
                        className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md hover:border-emerald-100 transition-all flex gap-4 items-start"
                      >
                        <div className="w-10 h-10 bg-emerald-100 text-emerald-700 font-bold rounded-lg flex items-center justify-center shrink-0 shadow-sm text-sm">
                          {item.num}
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed pt-1.5">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Founding Pillars Section */}
          <div className="bg-gradient-to-b from-amber-50/40 to-orange-50/20 border border-amber-200/60 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
            {/* Watermark Seal */}
            <div className="absolute -right-12 -bottom-12 text-amber-500/5 select-none pointer-events-none transform -rotate-12">
              <Award className="w-96 h-96" />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-10 max-w-3xl mx-auto">
                <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl mb-4 flex items-center justify-center gap-3">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 text-saffron-600 shrink-0" />
                  Founding Pillars of AVD
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  Names, addresses and descriptions of the members of the Executive Committee as at registration (2015), as recorded in the registered Memorandum of Association:
                </p>
              </div>

              {/* Founding Members Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                {[
                  { name: "Dr. Tuhin Chakravorty", designation: "President", badgeClass: "bg-amber-100/80 text-amber-900 border-amber-200" },
                  { name: "Dr. Sukanta Roy", designation: "Vice President", badgeClass: "bg-slate-100 text-slate-800 border-slate-200" },
                  { name: "Dr. Amit Sarkar", designation: "Vice President", badgeClass: "bg-slate-100 text-slate-800 border-slate-200" },
                  { name: "Dr. Biswadip Rakshit", designation: "Vice President", badgeClass: "bg-slate-100 text-slate-800 border-slate-200" },
                  { name: "Dr. Niranjan Roy", designation: "Vice President", badgeClass: "bg-slate-100 text-slate-800 border-slate-200" },
                  { name: "Dr. Prasanta Kr. Bera", designation: "General Secretary", badgeClass: "bg-emerald-100/80 text-emerald-900 border-emerald-200 font-bold" },
                  { name: "Dr. Krishna Prasad Mukherjee", designation: "Joint Secretary", badgeClass: "bg-blue-50 text-blue-800 border-blue-100" },
                  { name: "Dr. Atanu Sarkar", designation: "Joint Secretary", badgeClass: "bg-blue-50 text-blue-800 border-blue-100" },
                  { name: "Dr. Prabir Ch. Pradhan", designation: "Joint Secretary", badgeClass: "bg-blue-50 text-blue-800 border-blue-100" },
                  { name: "Dr. Dwijen Mitra", designation: "Asst. Secretary", badgeClass: "bg-blue-50/60 text-blue-700 border-blue-100/60" },
                  { name: "Dr. Chandan Mukherjee", designation: "Asst. Secretary", badgeClass: "bg-blue-50/60 text-blue-700 border-blue-100/60" },
                  { name: "Dr. Sarbasish Mondal", designation: "Office Secretary", badgeClass: "bg-blue-50/60 text-blue-700 border-blue-100/60" },
                  { name: "Dr. Jayanta Biswas", designation: "Treasurer", badgeClass: "bg-indigo-50 text-indigo-800 border-indigo-100" }
                ].map((member, index) => (
                  <div 
                    key={index} 
                    className="bg-white border border-amber-100 rounded-2xl p-5 shadow-xs hover:shadow-md hover:border-amber-300 transition-all flex items-center gap-4"
                  >
                    <div className="w-10 h-10 bg-amber-50 text-amber-700 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 border border-amber-100/50">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900">
                        {member.name}
                      </h4>
                      <span className={`inline-block text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full border mt-1.5 ${member.badgeClass}`}>
                        {member.designation}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Glorious Solemn Declaration Card */}
              <div className="bg-amber-950 text-amber-50 rounded-2xl p-6 sm:p-8 border border-amber-800/50 relative overflow-hidden shadow-lg">
                <div className="absolute right-4 bottom-4 text-amber-900/10 pointer-events-none select-none">
                  <Scroll className="w-32 h-32" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row gap-5 items-center md:items-start text-center md:text-left">
                  <div className="p-3 bg-amber-900 text-amber-300 rounded-xl">
                    <Scroll className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-amber-300 font-serif italic text-lg sm:text-xl leading-relaxed mb-4">
                      "We, the several persons whose name, address and occupation are hereunto subscribed are desirous of being formed into an association in pursuance of this memorandum of association."
                    </h4>
                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-amber-900/60 pt-4 text-xs font-bold uppercase tracking-wider text-amber-400">
                      <span>Dated the 31st day of January, 2015</span>
                      <span className="px-2.5 py-1 bg-amber-900 text-amber-200 rounded-md">Reg. No. 34784</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Governing Body Section */}
          <div className="py-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Central Executive Committee 2026-28</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                Meet the dedicated leaders guiding the association towards a united and empowered veterinary profession in West Bengal.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Dr. Tuhin Chakraborty", designation: "Advisor" },
                { name: "Dr. Sujit Dey", designation: "Advisor" },
                { name: "Dr. Manoranjan Roy", designation: "Advisor" },
                { name: "Dr. Pradip Pati", designation: "President" },
                { name: "Dr. Banibrata Nayek", designation: "Vice President" },
                { name: "Dr. Indranil Bera", designation: "Vice President" },
                { name: "Dr. Gourisankar Hatui", designation: "Vice President" },
                { name: "Dr. Sribas Biswas", designation: "Vice President" },
                { name: "Dr. Prasanta Kumar Bera", designation: "General Secretary" },
                { name: "Dr. Sukanta Roy", designation: "Asst. General Secretary" },
                { name: "Dr. Krishna Prasad Mukherjee", designation: "Joint Secretary" },
                { name: "Dr. Biswadip Rakshit", designation: "Joint Secretary" },
                { name: "Dr. Atanu Sarkar", designation: "Joint Secretary" },
                { name: "Dr. Kartick Chandra Roy", designation: "Office Secretary" },
                { name: "Dr. Debi Prasad Nandi", designation: "Treasurer" },
                { name: "Dr. Jayanta Biswas", designation: "Asst. Secretary" },
                { name: "Dr. Amit Sarkar", designation: "Asst. Secretary" },
                { name: "Dr. Chandan Ghosh", designation: "Asst. Secretary" },
                { name: "Dr. Krishnendu Sinha", designation: "Asst. Secretary" },
                { name: "Dr. Prashant Bhagat", designation: "Member" },
                { name: "Dr. Soma Das (Saha)", designation: "Member" },
                { name: "Dr. Prabir Chandra Pradhan", designation: "Member" },
                { name: "Dr. Partha Sarathi Mondal", designation: "Member" },
                { name: "Dr. Piyush Barman", designation: "Member" },
                { name: "Dr. Dipak Dey", designation: "Member" },
                { name: "Dr. Tapan Kumar Mahata", designation: "Co-opted Member" },
                { name: "Dr. Nirmalya Ranjan Sarkar", designation: "Co-opted Member" }
              ].map((member, index) => {
                const getBadgeStyles = (designation: string) => {
                  switch (designation) {
                    case "Advisor":
                      return "bg-slate-100 text-slate-700 border-slate-200";
                    case "President":
                      return "bg-amber-100 text-amber-800 border-amber-200 font-semibold";
                    case "Vice President":
                      return "bg-amber-50 text-amber-700 border-amber-100";
                    case "General Secretary":
                      return "bg-emerald-100 text-emerald-800 border-emerald-200 font-semibold";
                    case "Asst. General Secretary":
                      return "bg-emerald-50 text-emerald-700 border-emerald-100";
                    case "Joint Secretary":
                    case "Asst. Secretary":
                    case "Office Secretary":
                      return "bg-blue-50 text-blue-700 border-blue-100";
                    case "Treasurer":
                      return "bg-indigo-50 text-indigo-700 border-indigo-100";
                    case "Co-opted Member":
                      return "bg-purple-50 text-purple-700 border-purple-100 font-semibold";
                    default:
                      return "bg-slate-50 text-slate-500 border-slate-200";
                  }
                };

                return (
                  <div 
                    key={index} 
                    className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-saffron-300 transition-all flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-slate-50 text-slate-700 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 border border-slate-100 group-hover:bg-saffron-50 group-hover:text-saffron-600 group-hover:border-saffron-100 transition-colors">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-saffron-700 transition-colors">
                        {member.name}
                      </h3>
                      <span className={`inline-block text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border mt-1 ${getBadgeStyles(member.designation)}`}>
                        {member.designation}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Central Executive Committee Team Photo Section */}
          <div className="mt-16 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="p-8 sm:p-12 text-center">
              <div className="relative rounded-2xl overflow-hidden border border-slate-100 max-w-4xl mx-auto shadow-md">
                <img 
                  src="https://ik.imagekit.io/avdwb/cec%202026.webp" 
                  alt="AVD Central Executive Committee 2026" 
                  className="w-full h-auto object-cover max-h-[550px]"
                />
              </div>
            </div>
          </div>

          {/* Sub-Committees Section */}
          <div id="sub-committees" className="pt-8">
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white p-8 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden mb-12">
              <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 text-slate-700/20 pointer-events-none select-none">
                <Layers className="w-96 h-96" />
              </div>
              <div className="relative z-10 max-w-3xl">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-500/20 text-saffron-300 border border-saffron-500/30 text-xs font-extrabold uppercase tracking-widest mb-4">
                  <Layers className="w-4 h-4" /> AVD Specialized Wings
                </span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-4">
                  Sub-Committees &amp; Compositions
                </h2>
                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  Per <strong>Resolution No. 39-2026-MOM-AVD</strong>, the Central Executive Committee has established specialized sub-committees to oversee key sectoral, technical, administrative, and welfare responsibilities across West Bengal.
                </p>
                <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700/80 text-xs text-slate-300 leading-relaxed">
                  <strong className="text-saffron-400">Composition Rule:</strong> Ex-officio members per general composition rules are not separately named below. Members are listed in order of seniority as per the official gradation list.
                </div>
              </div>
            </div>

            {/* Sub-Committee Cards */}
            <div className="grid grid-cols-1 gap-8">
              {subCommitteesData.map((item) => (
                <div 
                  key={item.id} 
                  id={`annexure-${item.id.toLowerCase()}`}
                  className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {item.title}
                      </h3>
                    </div>

                    {/* Convenor Badge */}
                    <div className="shrink-0 bg-saffron-50/80 border border-saffron-200/80 rounded-2xl p-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-saffron-600 text-white rounded-xl flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                        <UserCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold text-saffron-800 uppercase tracking-widest block">
                          {item.jointConvenors ? "Joint Convenors" : "Convenor"}
                        </span>
                        <span className="text-sm font-extrabold text-slate-900">
                          {item.jointConvenors ? item.jointConvenors.join(" & ") : item.convenor}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Members Section */}
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-500" />
                      Sub-Committee Members {item.members.length > 0 && `(${item.members.length})`}
                    </h4>

                    {item.members.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
                        {item.members.map((member, idx) => (
                          <div 
                            key={idx} 
                            className="bg-slate-50 border border-slate-100 hover:border-saffron-200 hover:bg-white rounded-xl p-3 flex items-center gap-2.5 text-xs font-bold text-slate-800 transition-all shadow-2xs"
                          >
                            <span className="w-5 h-5 rounded-md bg-slate-200/60 text-slate-600 text-[10px] font-black flex items-center justify-center shrink-0">
                              {idx + 1}
                            </span>
                            <span className="truncate">{member}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-slate-500 text-xs italic mb-6">
                        Members list comprising ex-officio and designated representatives as per general rules of composition.
                      </div>
                    )}

                    {/* Special Notes (if present) */}
                    {item.specialNote && (
                      <div className="p-4 bg-amber-50/70 border border-amber-200/60 rounded-xl text-xs text-amber-900 mb-6 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span><strong>Note:</strong> {item.specialNote}</span>
                      </div>
                    )}

                    {/* Volunteer Callout Footer */}
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
                      <p className="italic">
                        If anyone's name has been left out but they are willing to volunteer for this sub-committee, they are most welcome to join.
                      </p>
                      <Link 
                        to="/contact" 
                        className="inline-flex items-center gap-1.5 font-bold text-saffron-700 hover:text-saffron-800 bg-saffron-100/80 hover:bg-saffron-200 px-3.5 py-2 rounded-xl transition-colors shrink-0"
                      >
                        <Mail className="w-3.5 h-3.5" /> Contact Us to Volunteer
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AVD District Units Section */}
          <div id="units" className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-200 mt-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <span className="w-10 h-1 bg-saffron-500 rounded-full inline-block"></span>
              AVD DISTRICT UNITS
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              The Association of Veterinary Doctors (AVD) maintains a robust and active presence across all districts in West Bengal. Each unit manages local operations, represents block-level veterinary needs, and organizes regional welfare activities.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {[
                "Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur",
                "Darjeeling", "Haringhata - Kalyani farm Complex", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram",
                "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia",
                "North 24 Parganas", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur",
                "Purulia", "South 24 Parganas", "Uttar Dinajpur"
              ].map((unit, i) => (
                <div key={i} className="border border-slate-100 rounded-2xl p-4 bg-slate-50 hover:bg-white hover:border-saffron-300 hover:shadow-md transition-all text-center flex items-center justify-center min-h-[72px]">
                  <span className="font-semibold text-slate-800 text-sm leading-snug">{unit}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
