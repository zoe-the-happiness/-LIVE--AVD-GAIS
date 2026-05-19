export function About() {
  return (
    <div className="py-24 sm:py-32 bg-slate-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl text-center mb-12 drop-shadow-sm">About AVD</h1>
        <div className="prose prose-lg prose-slate mx-auto max-w-4xl bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-slate-200">
          <p className="text-xl sm:text-2xl text-slate-700 font-medium leading-relaxed mb-10 text-center">
            The Association of Veterinary Doctors (AVD) is a dedicated professional body representing veterinarians across West Bengal.
          </p>
          <p className="text-slate-600 mb-12 text-center max-w-2xl mx-auto">
            Founded under the West Bengal Societies Registration Act, 1961, our organization strives to uphold the dignity and honor of the veterinary profession, safeguard the rights of its members, and promote the advancement of veterinary science and animal husbandry in the state.
          </p>

          <hr className="border-slate-100 my-12" />

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
              <h2 className="text-3xl font-bold text-emerald-600 mb-6 flex items-center gap-3">
                <span className="w-10 h-1 bg-emerald-500 rounded-full inline-block"></span>
                OBJECTIVES
              </h2>
              <p className="text-slate-600 mb-6 italic">The objectives flow from the mission. Each one builds the same body.</p>
              <ul className="space-y-6 text-slate-700 pl-4 sm:pl-12 list-none">
                <li className="relative">
                  <span className="absolute -left-8 top-1.5 w-4 h-4 rounded-full border-2 border-emerald-500 bg-emerald-100"></span>
                  <strong className="text-slate-900">Organize the entire profession.</strong> Bring every veterinarian in West Bengal, government, private, academic, and retired, onto one common platform of fraternity, shared identity, and coordinated action.
                </li>
                <li className="relative">
                  <span className="absolute -left-8 top-1.5 w-4 h-4 rounded-full border-2 border-emerald-500 bg-emerald-100"></span>
                  <strong className="text-slate-900">Protect the dignity and welfare of the veterinarian.</strong> Defend the professional standing, service conditions, legal protection, and economic security of the veterinary doctor, so the profession remains attractive to the finest minds.
                </li>
                <li className="relative">
                  <span className="absolute -left-8 top-1.5 w-4 h-4 rounded-full border-2 border-emerald-500 bg-emerald-100"></span>
                  <strong className="text-slate-900">Advance animal health and welfare as a public duty.</strong> Treat the care of every animal, companion, livestock, and stray, as a service owed to society, not a transaction. Promote the right to a dignified life and a dignified death for animals.
                </li>
                <li className="relative">
                  <span className="absolute -left-8 top-1.5 w-4 h-4 rounded-full border-2 border-emerald-500 bg-emerald-100"></span>
                  <strong className="text-slate-900">Strengthen the foundations of the profession.</strong> Foster continuing education, ethical practice, modern skills, and discipline, so each member is equipped for the challenges of the present day.
                </li>
                <li className="relative">
                  <span className="absolute -left-8 top-1.5 w-4 h-4 rounded-full border-2 border-emerald-500 bg-emerald-100"></span>
                  <strong className="text-slate-900">Mould the next generation.</strong> Instill in veterinary students and young doctors a sense of pride in the profession's heritage, scientific rigour, and intense commitment to animal and public welfare.
                </li>
                <li className="relative">
                  <span className="absolute -left-8 top-1.5 w-4 h-4 rounded-full border-2 border-emerald-500 bg-emerald-100"></span>
                  <strong className="text-slate-900">Serve the people through the animals.</strong> Recognize that protecting livestock, food safety, and zoonotic disease control directly protects the rural economy and the health of every household in West Bengal.
                </li>
                <li className="relative">
                  <span className="absolute -left-8 top-1.5 w-4 h-4 rounded-full border-2 border-emerald-500 bg-emerald-100"></span>
                  <strong className="text-slate-900">Speak as one voice.</strong> Be the single, credible, non-political voice of the veterinary profession before government, public, and society, on every matter affecting animals and those who heal them.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
