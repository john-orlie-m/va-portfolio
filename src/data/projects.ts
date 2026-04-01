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
    image: "/image/projects/Clean Version.png",
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
  }
];