import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Users, ShieldCheck, HeartPulse, BookOpen, GraduationCap, Globe2, Mic, Quote, Award, Scroll } from "lucide-react";

export function About() {
  const { hash } = useLocation();

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
        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl text-center mb-6 drop-shadow-sm">About AVD</h1>
        <p className="text-xl text-slate-600 text-center max-w-3xl mx-auto mb-16">
          The Association of Veterinary Doctors (AVD) is a dedicated professional body representing veterinarians across West Bengal.
        </p>

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

          {/* Founding Pillars (2015) Section */}
          <div className="bg-gradient-to-b from-amber-50/40 to-orange-50/20 border border-amber-200/60 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
            {/* Watermark Seal */}
            <div className="absolute -right-12 -bottom-12 text-amber-500/5 select-none pointer-events-none transform -rotate-12">
              <Award className="w-96 h-96" />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-10 max-w-3xl mx-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-800 text-xs font-extrabold rounded-full border border-amber-200 uppercase tracking-widest mb-4">
                  <Award className="w-3.5 h-3.5 animate-pulse" /> Founding Pillars of AVD
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl mb-4">
                  Founding Executive Committee (2015)
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
                { name: "Dr. Prasanta Bera", designation: "General Secretary" },
                { name: "Dr. Sukanta Roy", designation: "Asst. General Secretary" },
                { name: "Dr. Krishna Prasad Mukherjee", designation: "Joint Secretary" },
                { name: "Dr. Biswadip Rakshit", designation: "Joint Secretary" },
                { name: "Dr. Atanu Sarkar", designation: "Joint Secretary" },
                { name: "Dr. Kartik Roy", designation: "Office Secretary" },
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
                { name: "Dr. Dipak Dey", designation: "Member" }
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
