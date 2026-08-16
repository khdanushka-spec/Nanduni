// Single global switch for the temporary site-update announcement banner.
// Flip to false to remove it everywhere without touching any other file.
export const SHOW_ANNOUNCEMENT_BANNER = true;

export const siteConfig = {
  name: "Nanduni Gamage",
  title: "Nanduni Gamage — Analytical Chemist",
  shortTitle: "N. Gamage",
  tagline: "Analytical Chemist & Materials Researcher",
  mission:
    "Forward-thinking analytical chemist with hands-on experience in analytical techniques, laboratory management, and research spanning academia and industry — from pharmaceutical quality control to energy storage materials.",
  status: "Analytical Chemist at BJP Laboratories · MS Chemistry, Flinders University (2024)",
  location: "Queensland, Australia",
  email: "nanduniwg@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/nanduniwg/",
    researchGate: null as string | null,
    googleScholar: null as string | null,
    orcid: null as string | null,
  },
  url: "https://example.com",
};

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Education", href: "/education" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const quickStats = [
  { label: "Career Since", value: "2016" },
  { label: "Degrees", value: "2" },
  { label: "Publications", value: "1" },
  { label: "Core Techniques", value: "5" },
];
