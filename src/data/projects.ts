export interface Project {
  id: string;
  title: string;
  category: "Admin" | "Tech/Web";
  description: string;
  tools: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: "client-database-cleanup",
    title: "Client Database Cleanup",
    category: "Admin",
    description: "Cleaned and organized a 75-row client contact database for a fictional e-commerce store. Standardized formats, removed duplicates, and added filters for easy sorting.",
    tools: ["Google Sheets"],
    image: "/image/projects/clean-version.png",
    link: "https://docs.google.com/spreadsheets/d/1cHRgY_Zx7eR5lqsXJMQph3YV1AvHZ1Kw-L3IZlLVMRk/edit?usp=sharing"
  },
  {
    id: "notion-dashboard-creation",
    title: "Client Workspace Notion Dashboard",
    category: "Admin",
    description: "Built a Notion workspace for a fictional life coach client. Includes an inbox task tracker, weekly calendar schedule, and a file organizer — all structured for easy daily use.",
    tools: ["Notion"],
    image: "/image/projects/notion_dashboard.png",
    link: "https://grape-scooter-bbd.notion.site/My-VA-Workspace-3350fce9949080919409f2a7c62cee84"
  },
  {
    id: "sop-documentation-creation",
    title: "Email Inbox SOP Document",
    category: "Admin",
    description: "Created a Standard Operating Procedure for managing a client's Gmail inbox. Covers daily email triage, folder/label structure, response templates, and an end-of-day reporting format.",
    tools: ["Google Docs"],
    image: "/image/projects/SOP_documentation.png",
    link: "//drive.google.com/file/d/1UwKPLHhaKKstOeCuyT3tSCmr3DpYVTJr/view"
  },
  {
    id: "life-coach-landing",
    title: "Life Coach Landing Page",
    category: "Admin",
    description: "Built a fully responsive Life Coach landing page from scratch using React, Vite, and Tailwind CSS. Features a hero section, services cards, testimonials, and a contact form. Deployed live on Vercel as a sample client deliverable demonstrating Website VA capabilities.",
    tools: ["Vite, React, Tailwind CSS, TypeScript, Vercel"],
    image: "/image/projects/landing-page.png",
    link: "https://life-coach-page.vercel.app/"
  }
];