// Sourced directly from Nanduni Gamage's resume — nothing here is invented.

export const researchInterests = [
  {
    title: "Energy Storage Materials",
    description:
      "Converting low-cost commercial polymers into cathode materials for practical aqueous zinc-ion batteries.",
  },
  {
    title: "Analytical Method Development",
    description: "NMR, FT-IR, GC-MS, HPLC, and UV-Vis methods for accurate, reproducible data.",
  },
  {
    title: "Pharmaceutical Quality Control",
    description: "GMP/GLP-compliant analysis of raw materials, finished products, and stability samples.",
  },
  {
    title: "Materials Characterization",
    description: "Structural and compositional analysis of polymers and battery electrode materials.",
  },
  {
    title: "Biomarker Development",
    description:
      "Identifying efficient bacterial strains for solubilization of rock phosphate (BSc thesis work).",
  },
] as const;

export const featuredProjects = [
  {
    slug: "analytical-chemist-bjp",
    title: "Analytical Chemist — BJP Laboratories",
    period: "Oct 2024 – Present",
    summary:
      "Operate and maintain LC, LC-MS, FTIR, and UV-Vis instruments; analyze raw materials, finished pharmaceutical products, herb samples, and stability samples. Maintain GMP, TGA, and GLP compliance, and train junior chemists.",
    tags: ["Analytical Chemistry", "GMP", "Pharmaceutical QC"],
  },
  {
    slug: "flinders-battery-research",
    title: "MS Thesis — Aqueous Zinc-Ion Battery Cathodes",
    period: "Jul 2024 – Oct 2024",
    summary:
      "Research assistant work at Flinders University converting a low-cost commercial polymer into cathode materials for practical aqueous zinc-ion batteries — published in Energy Storage Material (Aug 2024).",
    tags: ["Materials Science", "Batteries", "NMR", "FT-IR"],
  },
  {
    slug: "samson-international-rd",
    title: "R&D Officer — Samson International PLC",
    period: "Mar 2017 – Nov 2017",
    summary:
      "Identified process improvements that reduced production costs by 7%, and validated 5 new products through to successful market launch.",
    tags: ["Product Development", "Quality Assurance"],
  },
];

export const educationHistory = [
  {
    degree: "Master of Science (M.S.), Chemistry",
    institution: "Flinders University, Adelaide, SA",
    period: "Jul 2024",
    description:
      "GPA: 6.8/7. Thesis: Converting a Low-cost Commercially Available Polymer into Cathode Materials for Practical Aqueous Zinc Ion Batteries.",
  },
  {
    degree: "Bachelor of Science (Honours), Chemistry",
    institution: "University of Kelaniya, Sri Lanka",
    period: "Feb 2016",
    description:
      "GPA: 3.5/4.0, Second Upper Class. Thesis: Developing a Biomarker to Identify Efficient Bacterial Strains for Solubilization of Rock Phosphate.",
  },
] as const;

export const publications: Array<{
  title: string;
  venue: string;
  year: string;
  type: string;
}> = [
  {
    title:
      "Converting a Low-cost Commercially Available Polymer into Organic Cathode Materials for High-mass Loading Aqueous Zinc Ion Batteries",
    venue: "Energy Storage Material",
    year: "2024",
    type: "Journal Article",
  },
];

export const certifications = [
  "First Aid & CPR (Jun 2024)",
  "Member — Golden Key International Honour Society (Flinders University)",
] as const;

// `order` reflects actual chronological start date (for the About-page timeline);
// array order otherwise follows the CV's own resume-style grouping.
export const workExperience = [
  {
    role: "Analytical Chemist",
    org: "BJP Laboratories",
    location: "Yatala, QLD",
    period: "Oct 2024 – Present",
    order: 7,
  },
  {
    role: "Research Assistant",
    org: "Flinders University",
    location: "Adelaide, SA",
    period: "Jul 2024 – Oct 2024",
    order: 6,
  },
  {
    role: "Research and Development Officer",
    org: "Samson International PLC",
    location: "Sri Lanka",
    period: "Mar 2017 – Nov 2017",
    order: 2,
  },
  {
    role: "Laboratory Demonstrator",
    org: "University of Kelaniya",
    location: "Sri Lanka",
    period: "Feb 2016 – Feb 2017",
    order: 1,
  },
  {
    role: "Science Teacher",
    org: "Thalapalakanda Secondary School",
    location: "Deniyaya, Sri Lanka",
    period: "Jan 2020 – Aug 2022",
    order: 5,
  },
  {
    role: "Science Teacher",
    org: "Nabadawa Sri Sumangala Secondary School",
    location: "Galle, Sri Lanka",
    period: "Sep 2019 – Dec 2019",
    order: 4,
  },
  {
    role: "Science Tutor (Part time)",
    org: "Sirasa Education Institute",
    location: "Galle, Sri Lanka",
    period: "Dec 2017 – Dec 2021",
    order: 3,
  },
] as const;

export const skillGroups = [
  {
    title: "Analytical Techniques",
    items: ["NMR", "FT-IR", "GC-MS", "HPLC", "UV-Vis"],
  },
  {
    title: "Laboratory Equipment",
    items: [
      "Optical Microscopes",
      "pH Meters",
      "Centrifuges",
      "Spectrophotometers",
      "Refractometer",
      "Analytical & Precision Balances",
      "Polarimeter",
      "Auto Titrator",
    ],
  },
  {
    title: "Quality & Compliance",
    items: ["LIMS", "SOP/LOP", "GLP", "GMP", "Regulatory Compliance", "Laboratory Safety"],
  },
] as const;
