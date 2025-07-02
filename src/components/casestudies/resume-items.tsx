import { ProductItem } from "./product-list-item";

const resumeItems: (ProductItem & { category: "professional" | "volunteer"; industry: string })[] = [
  {
    id: "snowflake",
    company: "Snowflake",
    role: "Solutions Engineer - Enterprise",
    location: "Remote",
    industry: "SaaS-AI", 
    impact_summary:
      "Built Cortex ML templates reducing analysis time by 85%. Architected data clean room solutions, performed PoCs with 40+ F500 clients, and drove +$7M in enterprise revenue via technical engagements.",
    technologies: ["Cortex ML", "Open AI", "GCP", "AWS", "Docker", "PySpark", "SQL", "YAML", "APIs", "UDFs", "ETLs", "React","SME" ],
    category: "professional",
  },
  {
    id: "miq",
    company: "MiQ",
    role: "Solutions Engineer - Enterprise",
    location: "Remote",
    industry: "SaaS-AI",
    impact_summary:
      "Delivered LLM-powered support automation reducing support loads by 40%. Led Databricks React-based web solution yielding $5M in commitments. Handled RFPs for US Politics vertical totaling $10M.",
    technologies: ["Databricks", "PrivateGPT", "GCP", "AWS", "Docker", "PySpark", "SQL", "YAML", "APIs", "UDFs", "ETLs", "React","SME"],
    category: "professional",
  },
  {
    id: "bcd",
    company: "Blue Clover Devices",
    role: "Senior Sales Engineer - Enterprise",
    location: "California",
    industry: "SaaS-Telecom",
    impact_summary:
      "Reduced troubleshooting time by 50% via test automation using YAML & Docker. Managed full sales lifecycle for $5M hardware biz. Helped build demo env and automate deployment pipelines.",
    technologies: ["AWS IoT","AWS EKS", "Arduino", "Nvidia Jetson","Embedded ML","Python","Docker", "YAML", "CI/CD", "DevOps","SME"],
    category: "professional",
  },
  {
    id: "hustle",
    company: "Hustle",
    role: "Senior Sales Engineer",
    location: "California",
    industry: "SaaS-Telecom",
    impact_summary:
      "Drove $3M+ in recurring revenue via pilots. Built demo platform in Python. Delivered 20+ presentations to execs and streamlined client-facing collaboration.",
    technologies: ["AWS", "GCP", "Twilio", "Sisense", "Looker", "Periscope", "Python", "SQL","SME"],
    category: "professional",
  },
  {
    id: "zuora",
    company: "Zuora",
    role: "Business Development",
    location: "California",
    industry: "SaaS-Finance",
    impact_summary:
      "Closed 150% quota in Q4FY17. Owned 120+ accounts and demonstrated Zuora ERP integrations to C-suite clients.",
    technologies: ["Stripe", "NetSuite", "Sage Intact", "Recurly", "SalesForce", "Outreach", "ZoomInfo","SME" ],
    category: "professional",
  },
  {
    id: "copper",
    company: "Copper CRM",
    role: "Business Development",
    location: "California",
    industry: "SaaS-GTM",
    impact_summary:
      "Exceeded 100% quota every quarter. Delivered 20+ demos/week and helped launch an account health-tracking feature for customers.",
    technologies: [ "GCP", "Zapier","Tray.ai", "REST APIs", "Product Research","SME"],
    category: "professional",
  },
  {
    id: "preqin",
    company: "Preqin",
    role: "Business Development",
    location: "California",
    industry: "Finance",
    impact_summary:
      "Top 10 rep among 35. Closed $80K+ in direct sales and supported $20K+ in renewals while servicing 175+ clients.",
    technologies: ["Bloomberg Terminal", "PitchBook", "FactSet", "MS Excel", "Investment Research", "Investment Sales", "PE/VC Research","SME"],
    category: "professional",
  },
  {
    id: "wellsfargo",
    company: "Wells Fargo",
    role: "Financial Analyst",
    location: "California",
    industry: "Finance",
    impact_summary:
      "Analyzed property-level cash flows for $50M+ in deals. Authored financial reviews and ran diligence for $1B real estate portfolio.",
    technologies: ["Bloomberg Terminal", "PitchBook", "FactSet", "MS Excel", "Financial Modeling", "Investment Research"],
    category: "professional",
  },
  {
    id: "civic",
    company: "San Francisco's Mayor's Office",
    role: "Civic Tech Volunteer",
    location: "Remote",
    industry: "Government",
    impact_summary:
      "Taught digital literacy to underserved communities. Worked with Pacific Community Ventures helping small companies in the professional services space ",
    technologies: ["Zoom", "SquareSpace", "GCP", "Technical Instructor", "Technical Mentor","SME"],
    category: "volunteer",
  },

  {
    id: "uprighted",
    company: "Uprighted",
    role: "Teaching Assistant",
    location: "Remote",
    industry: "Edtech",
    impact_summary:
      "Built early-stage infrastructure for civic engagement SaaS platform. Developed APIs and React components to support onboarding and turnout initiatives.",
    technologies: ["Python", "SQL", "Technical Instructor","SME"],
    category: "volunteer",
  },
  
];

export default resumeItems;
