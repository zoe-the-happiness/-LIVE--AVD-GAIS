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
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Our Governing Body</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                Meet the dedicated leaders guiding the association towards a united and empowered veterinary profession in West Bengal.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Dr. Tuhin Chakravorty", designation: "President" },
                { name: "Dr. Sukanta Roy", designation: "Vice President" },
                { name: "Dr. Amit Sarkar", designation: "Vice President" },
                { name: "Dr. Biswadip Rakshit", designation: "Vice President" },
                { name: "Dr. Niranjan Roy", designation: "Vice President" },
                { name: "Dr. Prasanta Kr. Bera", designation: "General Secretary" },
                { name: "Dr. Krishna Prasad Mukherjee", designation: "Joint Secretary" },
                { name: "Dr. Atanu Sarkar", designation: "Joint Secretary" },
                { name: "Dr. Prabir Ch. Pradhan", designation: "Joint Secretary" },
                { name: "Dr. Dwijen Mitra", designation: "Asst. Secretary" },
                { name: "Dr. Chandan Mukherjee", designation: "Asst. Secretary" },
                { name: "Dr. Sarbasish Mondal", designation: "Office Secretary" },
                { name: "Dr. Jayanta Biswas", designation: "Treasurer" }
              ].map((member, index) => (
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
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                      {member.designation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
