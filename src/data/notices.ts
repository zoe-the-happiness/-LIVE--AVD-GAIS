export interface Notice {
  id: number;
  date: string;
  type: string;
  title: string;
  description: string;
  link: string;
  linkText?: string;
  downloads?: { label: string; url: string }[];
  isNew?: boolean;
}

export const noticesData: Notice[] = [
  {
    id: 5,
    date: "July 08, 2026",
    type: "Official",
    title: "Invitation for Expression of Interest — Chartered Accountant Firm",
    description: "Ref: AVD/EOI/CA/2026/01 | Date: 08 July 2026\n\nThe Association of Veterinary Doctors invites Expression of Interest from eligible practising Chartered Accountant firms for appointment as its CA firm for statutory, compliance and advisory services for two financial years (FY 2026-27 and FY 2027-28).\n\nEligible firms may download the EOI and prescribed formats below and submit their response by email to contact@avdwb.com or in a sealed envelope to the registered office.\n\n• Last date for queries: 15 July 2026.\n• Last date for submission: 22 July 2026, 5:00 PM.\n\nThe Association reserves the right to accept or reject any or all Expressions of Interest without assigning any reason.\n\nIssued by the General Secretary, for and on behalf of the Central Executive Committee.",
    link: "#",
    downloads: [
      { label: "EOI (AVD/EOI/CA/2026/70) • Annex A to D", url: "https://drive.google.com/file/d/1D_N7Q2jLeodKBmkB7XnlQ1iIWQexkla2/view?usp=sharing" },
      { label: "Annexure E GST Opinion Certificate format", url: "https://drive.google.com/file/d/1LE98kxZ6_X6CoAjkLjCKpUsfbbhyS_js/view?usp=sharing" },
      { label: "Forwarding Letter format", url: "https://drive.google.com/file/d/1RIXw2E0DzDvp9gIXmgMsqBBkz4R3hUr6/view?usp=sharing" }
    ],
    isNew: true,
  },
  {
    id: 4,
    date: "June 30, 2026",
    type: "Official",
    title: "Urgent intervention to exempt Veterinary Doctors from Human Census and other extra-departmental duties",
    description: "Urgent intervention to exempt Veterinary Doctors from Human Census and other extra-departmental duties for ensuring uninterrupted veterinary services and implementation of National Animal Disease Con",
    link: "https://drive.google.com/file/d/1QukmANtWy7plmRRZ7EZTlxhzIGBrlXcv/view?usp=sharing",
    isNew: false,
  },
  {
    id: 3,
    date: "June 1, 2026",
    type: "Official",
    title: "Letter regarding urgent intervention regarding engagement of Veterinary Officers and Animal Health Staff in extra-departmental duties",
    description: "Letter to competent authority requesting Urgent intervention regarding engagement of Veterinary Officers and Animal Health Staff in extra-departmental duties causing closure of Animal Health Institutions and disruption of essential veterinary services",
    link: "https://drive.google.com/file/d/1h7FPkdsGRZlVsqycOQDAA3bATPLtb36X/view?usp=sharing",
    isNew: false,
  },
  {
    id: 2,
    date: "May 22, 2026",
    type: "Official",
    title: "Request for arrangement of protection of Veterinary Officers and BLDOs",
    description: "Request for arrangement of protection of Veterinary Officers and BLDOs who are primarily entrusted with the task of issuance of certificate for animals slaughter in compliance of the West Bengal Animal Slaughter Control Act, 1950.",
    link: "https://drive.google.com/file/d/1ACuS1CxtOnSjv8QmpATHzOYgbSdxW1Jf/view?usp=sharing",
  },
  {
    id: 1,
    date: "May 19, 2026",
    type: "Official",
    title: "Request for Police Protection during Eid al-Adha",
    description: "Request for Police Protection for Veterinary Officers and BLDOs during Eid al-Adha (Bakrid) in compliance with the West Bengal Animal Slaughter Control Act, 1950.",
    link: "https://drive.google.com/file/d/1FT0OBTQ0XZLfKzXq-by6W0z1lkNk9h1K/view?usp=drive_link",
  },
];
