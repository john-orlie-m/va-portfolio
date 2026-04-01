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
  }
];