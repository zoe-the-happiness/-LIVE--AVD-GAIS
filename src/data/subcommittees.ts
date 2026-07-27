export interface SubCommittee {
  id: string;
  annexure: string;
  resolution: string;
  title: string;
  convenor: string;
  jointConvenors?: string[];
  members: string[];
  specialNote?: string;
}

export const subCommitteesData: SubCommittee[] = [
  {
    id: "B-1",
    annexure: "ANNEXURE B-1",
    resolution: "(to Resolution No. 39-2026-MOM-AVD)",
    title: "Organization Sub-Committee",
    convenor: "Dr. Sukanta Roy",
    members: [
      "Dr. Pradip Pati",
      "Dr. Prasanta Kumar Bera",
      "Dr. Biswadip Rakshit",
      "Dr. Krishna Prasad Mukherjee"
    ]
  },
  {
    id: "B-2",
    annexure: "ANNEXURE B-2",
    resolution: "(to Resolution No. 39-2026-MOM-AVD)",
    title: "Animal Health Sub-Committee",
    convenor: "Dr. Jayanta Biswas",
    members: [
      "Dr. Basudev Sil",
      "Dr. Raj Kumar Maity",
      "Dr. Biswajit Maji",
      "Dr. Raj Kumar Banerjee",
      "Dr. Utpal Singha",
      "Dr. Sanjib Sarkar",
      "Dr. Utpal Bannerjee",
      "Dr. Gopal Samanta",
      "Dr. Rajib Kanti Saha",
      "Dr. Rakesh Mondal",
      "Dr. Brihat Chhetri",
      "Dr. Sambho Chowdhury",
      "Dr. Keshab Chatterjee",
      "Dr. Sourav Kumar"
    ]
  },
  {
    id: "B-3",
    annexure: "ANNEXURE B-3",
    resolution: "(to Resolution No. 39-2026-MOM-AVD)",
    title: "Diagnostics Sub-Committee",
    convenor: "Dr. Amit Sarkar",
    members: [
      "Dr. Amit Das",
      "Dr. Sukdev Basu",
      "Dr. Pralay Mandal",
      "Dr. Tapas Gupta",
      "Dr. Arnab Das",
      "Dr. Bipul Biswas",
      "Dr. Liton Biswas",
      "Dr. Kingshuk Maity",
      "Dr. Tapabrata Saha",
      "Dr. Mrityunjoy Mondal",
      "Dr. Arnab Kumar Majie",
      "Dr. Bithi Roy Chowdhury",
      "Dr. Supratim Mondal"
    ]
  },
  {
    id: "B-4",
    annexure: "ANNEXURE B-4",
    resolution: "(to Resolution No. 39-2026-MOM-AVD)",
    title: "Finance Sub-Committee",
    convenor: "Dr. Debi Prasad Nandi",
    members: []
  },
  {
    id: "B-5",
    annexure: "ANNEXURE B-5",
    resolution: "(to Resolution No. 39-2026-MOM-AVD)",
    title: "IT, Website and Allied IT-Related Matters Sub-Committee",
    convenor: "",
    jointConvenors: ["Dr. Krishnendu Sinha", "Dr. Nirmalya Ranjan Sarkar"],
    members: [
      "Dr. Manas Mondal",
      "Dr. Arindam Chatterjee",
      "Dr. Kuntal Dutta",
      "Dr. Sourav Mohanty",
      "Dr. Subhagata Dey",
      "Dr. Arunava Saha"
    ]
  },
  {
    id: "B-6",
    annexure: "ANNEXURE B-6",
    resolution: "(to Resolution No. 39-2026-MOM-AVD)",
    title: "Matri Shakti Sub-Committee",
    convenor: "Dr. Soma Das (Saha)",
    members: [
      "Dr. Jomawati Jaiswal",
      "Dr. Moumita Biswas",
      "Dr. Mahuya Dey",
      "Dr. Mandira Chowdhury",
      "Dr. Tista Mondal",
      "Dr. Aditi Patra",
      "Dr. Nabanita Dutta",
      "Dr. Aparna Das",
      "Dr. Sutrishna Basu"
    ]
  },
  {
    id: "B-7",
    annexure: "ANNEXURE B-7",
    resolution: "(to Resolution No. 39-2026-MOM-AVD)",
    title: "Office Administration and Legal Matters Sub-Committee",
    convenor: "Dr. Sribas Biswas",
    members: [
      "Dr. Rathin Chatterjee",
      "Dr. Arnab Kumar Majie"
    ]
  },
  {
    id: "B-8",
    annexure: "ANNEXURE B-8",
    resolution: "(to Resolution No. 39-2026-MOM-AVD)",
    title: "Planning and Development Sub-Committee",
    convenor: "Dr. Krishna Prasad Mukherjee",
    members: [
      "Dr. Animesh Sikder",
      "Dr. Prabir Kumar Pathak",
      "Dr. Sritanu Maity",
      "Dr. Jayanta Chowdhury (CLART)",
      "Dr. Nisith Panda",
      "Dr. Debjyoti Chatterjee",
      "Dr. Sumit Jana",
      "Dr. Dipak Mondal (IAH&VB)",
      "Dr. Arup Kumar Ghosh",
      "Dr. Pulak Banerjee",
      "Dr. Pushpendu Panja",
      "Dr. Dipak Barh",
      "Dr. Samik Paul",
      "Dr. Chandi Charan Samanta",
      "Dr. Prabir Roy",
      "Dr. Sougata Chakraborty"
    ],
    specialNote: "Officers posted at Headquarters (Kolkata) who are involved in planning and development work may be incorporated in this Sub-Committee by the Convenor with the approval of the Central Executive Committee."
  },
  {
    id: "B-9",
    annexure: "ANNEXURE B-9",
    resolution: "(to Resolution No. 39-2026-MOM-AVD)",
    title: "Private Sector, CSR and Employment Generation (beyond Government Programmes) Sub-Committee",
    convenor: "Dr. Chandan Ghosh",
    members: [
      "Dr. Chandan Dutta",
      "Dr. Arindam Chatterjee",
      "Dr. Sankar Dutta",
      "Dr. Chandan Mukherjee",
      "Dr. Surya Sankar Jana",
      "Dr. Banibrata Maity",
      "Dr. Biplab Patra",
      "Dr. Biswapriya Chatterjee",
      "Dr. Partha Das",
      "Dr. Shivaji Dey",
      "Dr. Soumen Dandapat",
      "Dr. Uddhab Sarkar"
    ]
  },
  {
    id: "B-10",
    annexure: "ANNEXURE B-10",
    resolution: "(to Resolution No. 39-2026-MOM-AVD)",
    title: "Purchase Committee",
    convenor: "Dr. Indranil Bera",
    members: [
      "Dr. Kartick Chandra Roy",
      "Dr. Tapan Kumar Mahata",
      "Dr. Prabir Chandra Pradhan",
      "Dr. Atanu Sarkar"
    ]
  },
  {
    id: "B-11",
    annexure: "ANNEXURE B-11",
    resolution: "(to Resolution No. 39-2026-MOM-AVD)",
    title: "Scientific and Cultural Sub-Committee",
    convenor: "",
    jointConvenors: ["Dr. Gourisankar Hatui", "Dr. Amit Sarkar"],
    members: [
      "Dr. Bhaskar Prasad Maji",
      "Dr. Kalidas Bannerjee",
      "Dr. Sourav Chandra",
      "Dr. Joydip Biswas",
      "Dr. Anirban Ghosh",
      "Dr. Tapan Chettri",
      "Dr. Sumit Chowdhury",
      "Dr. Apurba Chakraborty",
      "Dr. Arnab Paul",
      "Dr. Sanjib Sarkar",
      "Dr. Dibyendu Bikash Karmakar",
      "Dr. Piu Pal",
      "Dr. Parameshwari Mandal",
      "Dr. Debraj Nandi",
      "Dr. Souvik Mondal",
      "Dr. Sushovan Chowdhury",
      "Dr. Krishnendu Mondal",
      "Dr. Jyotirmoy Adhikary"
    ],
    specialNote: "Faculty members of the West Bengal University of Animal and Fishery Sciences may be incorporated in this Sub-Committee by the Convenor with the approval of the Central Executive Committee."
  },
  {
    id: "B-12",
    annexure: "ANNEXURE B-12",
    resolution: "(to Resolution No. 39-2026-MOM-AVD)",
    title: "Service Matters Sub-Committee",
    convenor: "Dr. Kartick Chandra Roy",
    members: [
      "Dr. Prabir Kumar Pathak",
      "Dr. Swarup Bakshi",
      "Dr. Tushar Kanti Samanta",
      "Dr. Tuhin Chakraborty",
      "Dr. Swapan Kumar Jana",
      "Dr. Ashim Bose",
      "Dr. Bhaskar Prasad Maji",
      "Dr. Debendra Pradhan",
      "Dr. Sudanshu Sekher Das",
      "Dr. Shyamalendu Biswas",
      "Dr. Raj Kumar Banerjee",
      "Dr. Jayanta Dutta",
      "Dr. Sourav Chandra",
      "Dr. Manas Kundu",
      "Dr. Atanu Saha",
      "Dr. Ram Krishna Ghosh",
      "Dr. Soumitra Pandit",
      "Dr. Nilratan Mondal"
    ]
  },
  {
    id: "B-13",
    annexure: "ANNEXURE B-13",
    resolution: "(to Resolution No. 39-2026-MOM-AVD)",
    title: "Social Welfare Sub-Committee",
    convenor: "Dr. Banibrata Nayek",
    members: [
      "Dr. Sujit Newar",
      "Dr. Sandip Chowdhury",
      "Dr. Dulumoni Chowdhury",
      "Dr. Niranjan Roy",
      "Dr. Dwijen Mitra",
      "Dr. Sarbasish Mandal",
      "Dr. Ritwik Hajra",
      "Dr. Soumitra Pandit",
      "Dr. Sanjib Kumar Das",
      "Dr. Shib Prasad Ghorai"
    ]
  }
];
