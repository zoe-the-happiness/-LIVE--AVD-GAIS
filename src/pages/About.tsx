import { Users, ShieldCheck, HeartPulse, BookOpen, GraduationCap, Globe2, Mic, Quote } from "lucide-react";

export function About() {
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

        </div>
      </div>
    </div>
  );
}
