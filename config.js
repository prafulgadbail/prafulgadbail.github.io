const PORTFOLIO_DATA = {
  // 👤 1. पर्सनल डिटेल्स
  profile: {
    name: "Praful Gadbail",
    role: "DevOps Engineer",
    bio: "DevOps Engineer with 2.5+ years of hands-on experience in Cloud Infrastructure, CI/CD Automation, Infrastructure as Code (IaC), and Kubernetes deployments across AWS, Azure, and GCP.",
    photoUrl: "profile.jpg", // अपने फोटो का नाम यही रखें
    resumeUrl: "resume.pdf", // आपके रेज़्यूमे का फाइल नेम
    github: "https://github.com/prafulgadbail",
    linkedin: "https://linkedin.com/in/prafulgadbail",
    email: "praful.gadbail01@gmail.com",
    phone: "+91-8087696782",
    location: "Pune, Maharashtra"
  },

  // 🛠️ 2. स्किल्स सेक्शन (ब्लॉक्स के रूप में दिखेंगे)
  skills: [
    { name: "AWS Services", category: "Cloud Platform", icon: "fab fa-aws", color: "text-amber-400" },
    { name: "Kubernetes / EKS", category: "Orchestration", icon: "fas fa-dharmachakra", color: "text-blue-500" },
    { name: "Docker", category: "Containerization", icon: "fab fa-docker", color: "text-blue-400" },
    { name: "Terraform", category: "IaC & Automation", icon: "fas fa-code-branch", color: "text-purple-400" },
    { name: "Jenkins", category: "CI/CD Pipeline", icon: "fab fa-jenkins", color: "text-red-400" },
    { name: "Argo CD / GitOps", category: "Continuous Delivery", icon: "fas fa-sync-alt", color: "text-orange-400" },
    { name: "GitHub Actions", category: "Automation", icon: "fab fa-github", color: "text-slate-200" },
    { name: "Prometheus & Grafana", category: "Monitoring", icon: "fas fa-chart-line", color: "text-teal-400" },
    { name: "Azure & GCP", category: "Multi-Cloud", icon: "fas fa-cloud", color: "text-sky-400" },
    { name: "Linux & Bash / Python", category: "OS & Scripting", icon: "fab fa-linux", color: "text-yellow-400" }
  ],

  // 🚀 3. प्रोजेक्ट्स सेक्शन (Direct Clickable links)
  projects: [
    {
      title: "Three-Tier AWS EKS Deployment with Jenkins CI/CD",
      description: "Deployed a 3-tier student registration app on AWS EKS with Java Spring Boot backend and React frontend (S3 + CloudFront). Integrated SonarQube, External Secrets, Route 53, Prometheus & Grafana with HPA.",
      tags: ["AWS EKS", "Jenkins", "Docker", "Kubernetes", "SonarQube", "S3", "CloudFront"],
      githubUrl: "https://github.com/prafulgadbail/three-tier-student-registration-app"
    },
    {
      title: "Microservices GitOps Deployment with GitHub Actions & Argo CD",
      description: "Containerized Java microservices with multi-stage Dockerfiles. Automated CI pipelines via GitHub Actions and implemented GitOps deployment using Argo CD on Kind Kubernetes cluster.",
      tags: ["Docker", "GitHub Actions", "Argo CD", "GitOps", "Kubernetes", "Helm"],
      githubUrl: "https://github.com/prafulgadbail" // अगर इसकी अलग लिंक हो तो यहाँ अपडेट कर सकते हैं
    }
  ],

  // 💼 4. एक्सपीरियंस / जॉब हिस्ट्री
  experience: [
    {
      role: "DevOps Engineer Intern",
      company: "Hisan Labs Pvt Ltd",
      duration: "03/2026 - Present",
      location: "Pune",
      description: "Provisioned AWS EKS, VPC, and RDS using Terraform. Built Jenkins CI/CD pipelines for 5+ microservices with Maven, SonarQube, ECR, and Helm. Configured Monitoring with Prometheus and Grafana."
    },
    {
      role: "System Administrator",
      company: "K12 Techno Services Pvt Ltd",
      duration: "07/2023 - 09/2025",
      location: "Pune",
      description: "Managed 10+ EC2 Linux servers, IAM, and Azure Entra ID for 1000+ users. Provisioned Multi-AZ AWS Infrastructure via Terraform and automated system monitoring with CloudWatch, Datadog & Shell/Python."
    }
  ],

  // 🎓 5. एजुकेशन
  education: [
    {
      degree: "B.Tech - Computer Science & Engineering",
      institution: "Eklavya University, Damoh",
      duration: "2021 - 2024"
    }
  ],

  // 📜 6. समरी / सर्टिफिकेशन्स
  certifications: [
    {
      title: "AWS & Multi-Cloud Infrastructure Expert",
      issuer: "Hands-on Experience",
      date: "2026"
    },
    {
      title: "Kubernetes & GitOps Specialist (EKS, Argo CD, Helm)",
      issuer: "Hands-on Projects",
      date: "2026"
    }
  ]
};