import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Terminal, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Layout, 
  FileText, 
  MessageSquare, 
  Palette, 
  Globe, 
  Code, 
  Box, 
  Zap, 
  Send, 
  Calendar,
  Star,
  Github,
  Linkedin,
  ExternalLink,
  Menu,
  X
} from "lucide-react";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Skills", href: "#skills" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-3" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter text-primary-fixed font-headline">
          ARCHITECT.VA
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-headline tracking-tight">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-on-secondary-container hover:text-primary-fixed transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-primary-fixed text-on-primary-fixed px-6 py-2 font-bold hover:scale-95 transition-all duration-200 rounded-sm"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary-fixed"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-surface-container-high p-6 flex flex-col gap-4 border-b border-outline-variant/20"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-on-secondary-container hover:text-primary-fixed transition-colors text-lg font-medium"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-primary-fixed text-on-primary-fixed px-6 py-3 font-bold rounded-sm w-full">
            Hire Me
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#1c2a41_0%,_transparent_70%)] opacity-30"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <span className="inline-block px-3 py-1 bg-surface-container-highest text-primary-fixed-dim font-body text-[10px] tracking-[0.2em] mb-6 uppercase font-semibold">
            BSIT Student & Technical Expert
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold leading-[1.1] tracking-tight mb-8">
            Tech-Savvy <span className="text-primary-fixed">Virtual Assistant</span> | Web Development + Admin Support
          </h1>
          <p className="text-lg md:text-xl text-secondary leading-relaxed mb-10 max-w-2xl font-body font-light">
            Bridging the gap between high-level administrative mastery and architectural technical rigor. I don't just manage your tasks; I engineer your workflows.
          </p>
          <div className="flex flex-wrap gap-6">
            <a 
              href="#portfolio" 
              className="px-8 py-4 bg-primary-fixed text-on-primary-fixed font-bold hover:bg-primary-fixed-dim transition-all rounded-sm"
            >
              View My Work
            </a>
            <a 
              href="https://calendly.com/architect-va" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-secondary-container text-on-secondary-container font-bold hover:bg-surface-container-high transition-all rounded-sm"
            >
              Book a Free Call
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="aspect-square bg-surface-container-low relative group">
            <img 
              alt="Technical workspace" 
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR6x6QQSHYSX3g1X1n3PH5-bGnuLZ4ngP1EpzO-AotpkjMn6VUb0vKxsYRdV95-ZsjKD28oOKJ2ZL0zOEz5GR_C9t8lG1018UNbzqS6K9kk6FqvNd0OWlG93TnvccrZdq6dCMgaS-h5OaAM1K-TSTPTqMrlVvGM6StNNbBrkzPLODb9s20w7sKyUlHVr1qSxrju8V9MMVu9z-tjry5iiONfQqE-chFCu1beJ3xdK9gLc5muywGrEm9gKMaApKGy7y7I28Hb3mRlTg"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 p-6 bg-surface-container-high shadow-2xl border border-outline-variant/10">
              <p className="font-headline font-bold text-4xl text-primary-fixed">100%</p>
              <p className="text-[10px] uppercase tracking-widest text-secondary font-semibold">Efficiency Optimized</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-surface-container-lowest" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 font-body text-secondary text-lg leading-relaxed"
        >
          <h2 className="text-4xl font-headline font-bold text-primary mb-4">About Me</h2>
          <p>
            As a dedicated BSIT student, I approach virtual assistance with the mindset of an architect. I thrive on creating systems that are not only functional but resilient and scalable. My background in Information Technology allows me to navigate complex technical landscapes while maintaining the meticulous attention to detail required for executive administration.
          </p>
          <p>
            I understand that your time is the most valuable asset you have. My mission is to reclaim those hours for you by implementing smart automations and providing seamless administrative support. Whether it's debugging a WordPress issue or organizing a chaotic inbox, I treat every task as a critical component of your business's infrastructure.
          </p>
          <p>
            When I'm not optimizing workflows or studying system architecture, I’m constantly refining my skills in React, Next.js, and modern web frameworks. I’m not just an assistant; I’m a technical partner invested in your long-term operational success.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] bg-surface-container-low overflow-hidden border border-outline-variant/10">
            <img 
              alt="Professional profile" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWY7BHj68aMIfax4kaOdq4wNRrcj6XE0O7-LmRV-t6De1kOuhp2aW9u2l1mNxnFvk-xDV4aV3dhaVcCf58lUfgSfMZ1GfDSe4-vOmkTArSwo1GydyphtG8BI_LpK5ggJWyncNa2y7je6vQU4Ren0QkOpA70M3iA1lm9bUr9UNGcCm1zvSLYBJau8SqpfVWFpB1NjdoURNoBHSu5qOaESdyQ4w5Tpv_EJypRYbKZ7dCNAKlH1t9AQUg5EuE2CyXX7wjkMCkqzX32PY"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary-fixed/30"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary-fixed/30"></div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const adminServices = [
    "Email Management & Inbox Zero",
    "Calendar Scheduling & Optimization",
    "Precision Data Entry & Database Cleanup",
    "Systematic File Organization (Cloud-based)",
    "Deep-Dive Market & Competitor Research",
  ];

  const techServices = [
    "Website Content Updates & Maintenance",
    "Landing Page Builds (High Conversion)",
    "WordPress & Elementor Management",
    "Zapier & Make Workflow Automations",
    "HTML/CSS/JS Troubleshooting & Fixes",
  ];

  return (
    <section className="py-32 px-6 md:px-12" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">Service <span className="text-primary-fixed">Architecture</span></h2>
            <p className="text-secondary text-lg">Specialized support tailored for the modern, tech-forward entrepreneur.</p>
          </div>
          <div className="text-primary-fixed-dim font-headline font-bold text-xl tracking-tighter opacity-50">02 / SERVICES</div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface-container-low p-12 hover:bg-surface-container-high transition-all duration-300 border border-outline-variant/5"
          >
            <div className="flex items-center gap-4 mb-8">
              <ShieldCheck className="text-primary-fixed" size={40} />
              <h3 className="text-2xl font-headline font-bold">Admin VA Services</h3>
            </div>
            <ul className="space-y-6">
              {adminServices.map((service, idx) => (
                <li key={idx} className="flex items-center gap-4 text-secondary">
                  <CheckCircle2 className="text-primary-fixed-dim" size={18} />
                  <span className="font-body">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-surface-container-low p-12 hover:bg-surface-container-high transition-all duration-300 border border-outline-variant/5"
          >
            <div className="flex items-center gap-4 mb-8">
              <Terminal className="text-primary-fixed" size={40} />
              <h3 className="text-2xl font-headline font-bold">Tech & Web VA Services</h3>
            </div>
            <ul className="space-y-6">
              {techServices.map((service, idx) => (
                <li key={idx} className="flex items-center gap-4 text-secondary">
                  <CheckCircle2 className="text-primary-fixed-dim" size={18} />
                  <span className="font-body">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

  const projects = [
    {
      title: "E-Commerce Ops Automation",
      tags: ["Admin", "Tech"],
      desc: "Problem: Client lost 10 hours/week manually syncing sales data. Solution: Built a custom Zapier bridge and automated Shopify reporting.",
      longDesc: "This project involved a deep dive into the client's existing manual workflows. By mapping out every touchpoint between Shopify and their reporting tools, I was able to identify critical bottlenecks. I implemented a multi-step Zapier automation that not only synced data in real-time but also performed data validation to ensure accuracy. The result was a 100% reduction in manual data entry time and a significant increase in reporting reliability.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAO6GUBJnRtGPwe89eDRJzEor0V4XKLUkjurlvpArYHxZzuF0eTux0AkHc5HfgE4PHpjz0CkLTrKed3WAJ_Qu4ty9TVn_nKJwvbsg3yl8g48Aojt58uxnjStNoXwH-wZCMCJpj4-mBAGHXXfl_TuU1ZiMvpfGa1BtOGYJ0bMzDKwwprKn6-CqkTqWaXGQLfwgZi1I8QqS3eZDyHgx_TNXNj4SQcydi0uo0ub_IDFzJ9zxa--hvZjlGelkjsMUaPioTI1q2mkv8qU0o"
    },
    {
      title: "Tech Consultant Portfolio",
      tags: ["Web"],
      desc: "Problem: Slow loading site and broken CSS on mobile. Solution: Refactored HTML/CSS and optimized asset delivery for a 95+ PageSpeed score.",
      longDesc: "The original site was built on a bloated theme with excessive third-party scripts. I performed a full audit and refactored the core HTML and CSS to be more semantic and lightweight. I also implemented modern image optimization techniques and lazy loading. The final product achieved a near-perfect Google PageSpeed score and provided a seamless experience across all device types, directly contributing to a 25% increase in lead generation for the client.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXqUUyJv2XtbogIUyg9903AWfJQXrD7FRyEGljpVPvv6-hgNapKx7c5uFeenXvPTOwYXjJGrGLotox5WF_alAIYWErrfzT6aZxkv-HbmV_yw3E_s65j5clU-Hy2XQ-6aTMywjFUIiHTIZUoWOruNEGP7xooSkuA62HRHuL6NYUqaH05jqACoSKYi6MWvhFMYcgz4r-TbIMOU_zy4WkuBCdqBLjy9ttNfV4q0hDUZ0kYWhdDfKdQ14RAPOFo-rMMlXtd3IrGzQTSFc"
    },
    {
      title: "CRM System Migration",
      tags: ["Admin", "Tech"],
      desc: "Problem: Messy CSV data and duplicated contacts. Solution: Cleaned 5,000+ entries using Python scripts and migrated to Notion CRM.",
      longDesc: "The client was struggling with fragmented data across multiple legacy systems. I developed a series of Python scripts to extract, clean, and deduplicate over 5,000 contact records. I then designed and implemented a custom CRM architecture in Notion, tailored specifically to the client's sales pipeline. This migration provided the team with a single source of truth and enabled advanced tracking and reporting that was previously impossible.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBooXQLWa_19XOanMsbP5MGA5U1-FZ1YFTjDsBMjC6FASLMBxFf__1z5_3QoZklFbQX7BD8k61jN4DmhIJgWONMUrJpcvTx90LVGmHudWikv1QYfxMwxYr9Fyca44TB5wboltNdz4L1cYdSqjMOHLtv5eEkEh437eufDhmfIBmwI20ASC0-B8zU3TpUjt_6cuOKnFHvSgVvbpTF25cY-ALQGz6fLOPEl_a9gEBJBl4ied41BN7oC3plEOrBy6mfz1IaUAwVDMu1Dxc"
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-surface-container-lowest" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-headline font-bold mb-16 text-center">Selected <span className="text-primary-fixed">Works</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface shadow-xl flex flex-col group border border-outline-variant/10"
            >
              <div className="aspect-video bg-surface-container-low overflow-hidden">
                <img 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={project.img}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] uppercase tracking-widest text-primary-fixed-dim border border-primary-fixed-dim/30 px-2 py-0.5 font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-headline font-bold mb-3">{project.title}</h3>
                <p className="text-secondary text-sm mb-6 flex-grow leading-relaxed">{project.desc}</p>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="text-primary-fixed font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all group/btn"
                >
                  View Project <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedProject(null)}
            className="absolute inset-0 bg-surface-container-lowest/90 backdrop-blur-sm"
          ></motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative bg-surface-container-low max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-outline-variant/10 shadow-2xl"
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-secondary hover:text-primary-fixed transition-colors z-10"
            >
              <X size={32} />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-square md:aspect-auto bg-surface-container-highest">
                <img 
                  src={selectedProject.img} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-12">
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest text-primary-fixed-dim border border-primary-fixed-dim/30 px-3 py-1 font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-headline font-bold mb-6">{selectedProject.title}</h3>
                <div className="space-y-6 text-secondary font-body leading-relaxed">
                  <p className="font-bold text-on-surface">The Challenge:</p>
                  <p>{selectedProject.desc.split("Solution:")[0].replace("Problem:", "")}</p>
                  <p className="font-bold text-on-surface">The Solution:</p>
                  <p>{selectedProject.longDesc}</p>
                </div>
                <div className="mt-12">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="w-full py-4 bg-primary-fixed text-on-primary-fixed font-bold uppercase tracking-widest text-xs rounded-sm"
                  >
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: "Google Workspace", icon: Mail },
    { name: "Trello", icon: Layout },
    { name: "Notion", icon: FileText },
    { name: "Slack", icon: MessageSquare },
    { name: "Canva", icon: Palette },
    { name: "WordPress", icon: Globe },
    { name: "React", icon: Code },
    { name: "Next.js", icon: Box },
    { name: "HTML/CSS/JS", icon: Code },
    { name: "Zapier", icon: Zap },
    { name: "Mailchimp", icon: Send },
  ];

  return (
    <section className="py-32 px-6 md:px-12" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline font-bold mb-4">The Digital <span className="text-primary-fixed">Toolkit</span></h2>
          <p className="text-secondary font-body">Battle-tested tools and frameworks I use to drive results.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-center gap-2 bg-surface-container-highest px-6 py-3 rounded-full text-sm font-body font-medium hover:bg-surface-container-high transition-colors border border-outline-variant/10 cursor-default"
            >
              <skill.icon size={16} className="text-primary-fixed-dim" />
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Founder, TechSprint",
      text: "Working with Architect.VA was a game changer. The technical proficiency they brought to our admin tasks saved us hours of troubleshooting."
    },
    {
      name: "Michael Chen",
      role: "Agency Owner",
      text: "Finally, a VA who actually knows how to fix a WordPress site without me having to hire a separate dev. Highly recommend!"
    },
    {
      name: "David Ross",
      role: "Operations Manager",
      text: "The data organization and automation they set up for our CRM was flawless. Clean, logic-driven, and perfectly executed."
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-surface-container-low" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-headline font-bold mb-16 text-center">Client <span className="text-primary-fixed">Feedback</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface p-10 relative border border-outline-variant/10"
            >
              <div className="text-primary-fixed-dim mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-secondary italic mb-8 font-body leading-relaxed">"{review.text}"</p>
              <div>
                <p className="font-bold text-primary font-headline">{review.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-primary-fixed-dim font-bold">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("success");
        setResponseMessage(data.message);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setResponseMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setResponseMessage("Failed to send message. Please check your connection.");
    }
  };

  return (
    <section className="py-32 px-6 md:px-12" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-12">Ready to <span className="text-primary-fixed">Optimize</span> Your Business?</h2>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface-container-low p-8 md:p-12 text-left border border-outline-variant/10"
        >
          {status === "success" ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-primary-fixed/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="text-primary-fixed" size={32} />
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">Message Sent!</h3>
              <p className="text-secondary mb-8">{responseMessage}</p>
              <button 
                onClick={() => setStatus("idle")}
                className="px-8 py-3 bg-primary-fixed text-on-primary-fixed font-bold rounded-sm uppercase tracking-widest text-xs"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form className="space-y-8 mb-12" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-secondary mb-2 font-bold">Name</label>
                  <input 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-surface-container-lowest border-none border-b border-outline-variant/20 focus:ring-0 focus:border-primary-fixed-dim transition-all p-4 text-on-surface outline-none" 
                    placeholder="John Doe" 
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-secondary mb-2 font-bold">Email</label>
                  <input 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-surface-container-lowest border-none border-b border-outline-variant/20 focus:ring-0 focus:border-primary-fixed-dim transition-all p-4 text-on-surface outline-none" 
                    placeholder="john@example.com" 
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-secondary mb-2 font-bold">Message</label>
                <textarea 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-surface-container-lowest border-none border-b border-outline-variant/20 focus:ring-0 focus:border-primary-fixed-dim transition-all p-4 text-on-surface min-h-[150px] outline-none resize-none" 
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              {status === "error" && <p className="text-error text-sm">{responseMessage}</p>}
              <button 
                disabled={status === "submitting"}
                className="w-full bg-primary-fixed text-on-primary-fixed font-bold py-4 hover:bg-primary-fixed-dim transition-all uppercase tracking-widest text-sm rounded-sm disabled:opacity-50" 
                type="submit"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
          <div className="border-t border-outline-variant/10 pt-12 text-center">
            <p className="text-secondary mb-6 font-body">Prefer a direct conversation?</p>
            <a 
              className="inline-flex items-center gap-3 text-primary-fixed font-bold text-lg group" 
              href="https://calendly.com/architect-va"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book on Calendly 
              <Calendar size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest py-12 px-6 md:px-12 border-t border-outline-variant/5">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-8">
        <div className="text-primary-fixed font-bold text-xl font-headline tracking-tighter">
          ARCHITECT.VA
        </div>
        <p className="text-on-secondary-container font-body text-xs tracking-wide opacity-60">
          © 2024 Technical Architect VA. All rights reserved.
        </p>
        <div className="flex gap-8 font-body text-xs tracking-wide">
          <a 
            className="text-on-secondary-container hover:text-primary-fixed underline-offset-4 hover:underline transition-all duration-300" 
            href="https://linkedin.com/in/architect-va"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a 
            className="text-on-secondary-container hover:text-primary-fixed underline-offset-4 hover:underline transition-all duration-300" 
            href="https://github.com/architect-va"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a 
            className="text-on-secondary-container hover:text-primary-fixed underline-offset-4 hover:underline transition-all duration-300" 
            href="https://calendly.com/architect-va"
            target="_blank"
            rel="noopener noreferrer"
          >
            Calendly
          </a>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="p-4 bg-primary-fixed text-on-primary-fixed rounded-full shadow-2xl hover:scale-110 transition-all"
        >
          <ArrowRight className="-rotate-90" size={24} />
        </motion.button>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary-fixed/30 selection:text-primary-fixed">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
