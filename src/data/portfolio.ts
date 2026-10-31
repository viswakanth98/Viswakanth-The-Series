/**
 * Central portfolio data — generated from Viswakanth Bandaru's DevOps resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Viswakanth Bandaru',
  displayName: 'Viswakanth Bandaru',
  firstName: 'VISWAKANTH',
  seriesTag: 'DEVOPS / CLOUD',
  originalLabel: 'A BANDARU ORIGINAL',
  role: 'DevOps Engineer | AWS Cloud Engineer',
  tagline: ['DevOps Engineer', 'AWS Cloud Engineer', 'Agentic AI'],
  intro:
    'DevOps and AWS Cloud Engineer with 5+ years of experience building, automating, migrating, and supporting production cloud infrastructure with Terraform, CloudFormation, CDK, Jenkins, GitHub Actions, GitLab CI, Docker, Kubernetes, Amazon EKS, and AI-assisted DevOps workflows.',
  location: 'Hyderabad, Telangana, India',
  email: 'bandaruviswakanth@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/viswakanth-b-/',
    github: 'https://github.com/viswakanth98',
  },
  resumePdf: '/assets/VISWAKANTH_BANDARU_DevOps_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Viswakanth Bandaru',
  },
  interests: ['Infrastructure as Code', 'Cloud Migration', 'Agentic AI & GenAI'],
};

export const education = [
  {
    school: 'Sathyabama University',
    place: '',
    degree: 'Bachelor of Engineering',
    period: '',
    score: '',
  },
];

export const experience = [
  {
    company: 'EPAM Systems',
    role: 'Senior Systems Engineer (DevOps / Cloud Migration)',
    place: 'Hyderabad, Telangana, India',
    period: 'April 2026 – Present',
    points: [
      'Designed East-West and Firewall-19 rules for enterprise Azure-to-AWS migrations by analyzing application communication flows, source and destination IPs, subnet CIDRs, ports, protocols, and connectivity dependencies.',
      'Created migration architecture and delivery documentation covering Solution Impact Gateway (SIG), target architecture, migration methodology, implementation phases, validation, cutover, and hypercare.',
      'Architected an AI-driven CI/CD migration platform using Model Context Protocol (MCP), specialized agents, and tool-based workflows to analyze Jenkins pipelines and automate migration to GitHub Actions and GitLab CI.',
      'Developed agentic pipeline-analysis workflows that inspect Jenkinsfiles, stages, dependencies, parameters, environment variables, runtime requirements, and execution semantics before generating target CI/CD configurations.',
      'Designed agent-driven validation and remediation workflows to identify blockers involving runtime capabilities, container dependencies, Docker and AWS CLI requirements, and pipeline semantic mismatches before code commits or merge requests.',
      'Finalized a RAG pipeline with similarity search to retrieve relevant SIG data for AI-driven migration activities.',
      'Implemented Amazon Bedrock Knowledge Bases and Guardrails to enable secure, context-aware GenAI operations.',
    ],
  },
  {
    company: 'Amazon Web Services (AWS)',
    role: 'Cloud Engineer I – DevOps / Deployment',
    place: 'Hyderabad, Telangana, India',
    period: 'January 2024 – April 2026',
    points: [
      'Managed 1,200+ technical incidents and led recovery from 100+ high-severity production outages across AWS services for enterprise and Fortune 500 customers.',
      'Resolved 80+ complex escalations across AWS CloudFormation, AWS CDK, and AWS Control Tower while troubleshooting deployment and upgrade failures across ECS, EKS, Auto Scaling, Lambda, EC2, and RDS.',
      'Served as an Infrastructure as Code (IaC) expert within the AWS technical community, guiding enterprise customers toward highly available, secure, and scalable AWS architectures.',
      'Collaborated with 15+ AWS development teams to reproduce and resolve infrastructure issues and unblock failing ECS and Lambda deployments through CloudFormation.',
      'Guided enterprise customers in implementing multi-environment, cross-account CI/CD pipelines using IaC for containerized ECS/EKS and serverless Lambda workloads.',
      'Mentored 4 engineers toward AWS CloudFormation SME status and served as an on-call engineer for critical production incidents, leading real-time troubleshooting and root cause analysis.',
      'Authored and peer-reviewed 5 internal troubleshooting documents that improved support engineers’ ability to diagnose recurring AWS infrastructure issues.',
      'Drove AWS Control Tower adoption for multi-account governance and service catalog standards, supporting 150+ enterprise migrations.',
      'Assisted enterprise customers with application and infrastructure migrations from on-premises and legacy environments to AWS using CloudFormation, CDK, and Terraform.',
    ],
  },
  {
    company: 'Western Digital',
    role: 'DevOps Engineer',
    place: 'Bengaluru, Karnataka, India',
    period: 'December 2021 – June 2023',
    points: [
      'Implemented CI/CD pipelines using Jenkins and Git to automate NVMe firmware build and validation workflows and improve release cycle time.',
      'Automated AWS infrastructure provisioning and environment configuration using Terraform and Infrastructure as Code practices.',
      'Containerized microservices using Docker and Amazon ECR and deployed workloads on Kubernetes clusters in Amazon EKS.',
      'Pioneered Kubernetes adoption for containerized workloads, achieving 20% infrastructure cost efficiency.',
      'Developed Python automation scripts that reduced manual operational effort by 75% over 12 months.',
      'Implemented monitoring solutions using Prometheus and Grafana to provide real-time visibility into application and infrastructure health.',
      'Integrated Git-based version control practices to improve collaboration, traceability, and release management.',
      'Supported automated testing and static code analysis workflows using unit, integration, performance testing, and SonarQube.',
    ],
  },
  {
    company: 'Amazon',
    role: 'ML Data Associate',
    place: 'Hyderabad, Telangana, India',
    period: 'August 2019 – March 2021',
    points: [
      'Designed EC2 infrastructure architecture with a focus on high availability and security requirements.',
      'Developed and deployed Snapshot Optimize, a Python-based AWS Lambda solution for snapshot management and operational efficiency.',
      'Supported machine learning teams with application build and deployment activities and gained hands-on experience with Amazon SageMaker.',
      'Worked with AWS EC2, S3, Auto Scaling, AWS CLI, CloudFormation templates, and JFrog Artifactory.',
      'Led knowledge-sharing sessions that improved team productivity and contributed to a 20% reduction in post-release defects.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'enterprise-migration-ai-cicd',
    title: 'Enterprise Azure-to-AWS Migration & AI-Driven CI/CD Modernization',
    year: '2026 – Present',
    genre: 'Cloud Migration • GenAI • CI/CD',
    logline: 'Enterprise migration architecture and agentic pipeline modernization across Azure, AWS, Jenkins, GitHub Actions, and GitLab CI.',
    stack: ['AWS', 'Azure', 'MCP', 'AI Agents', 'Jenkins', 'GitHub Actions', 'GitLab CI', 'Bedrock', 'RAG'],
    build: experience[0].points,
    features: [
      'Azure-to-AWS migration architecture',
      'East-West and firewall rule analysis',
      'MCP-powered specialized agents',
      'Jenkins-to-GitHub Actions and GitLab CI migration',
      'Agent-driven validation and remediation',
      'Bedrock Knowledge Bases and Guardrails',
    ],
    metrics: [],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'aws-infrastructure-operations',
    title: 'Enterprise AWS Infrastructure Support, IaC & Cloud Operations',
    year: '2024 – 2026',
    genre: 'AWS • IaC • Reliability',
    logline: 'Production cloud operations, incident response, infrastructure automation, and multi-account governance for enterprise customers.',
    stack: ['AWS', 'CloudFormation', 'AWS CDK', 'Control Tower', 'ECS', 'EKS', 'Lambda', 'EC2', 'RDS', 'Terraform'],
    build: experience[1].points,
    features: [
      'Enterprise incident management and outage recovery',
      'CloudFormation, CDK, and Control Tower escalation support',
      'Multi-environment, cross-account CI/CD',
      'AWS architecture guidance',
      'IaC troubleshooting and root cause analysis',
      'Multi-account governance and service catalog standards',
    ],
    metrics: [
      { value: '1,200+', label: 'technical incidents managed' },
      { value: '100+', label: 'high-severity outages recovered' },
      { value: '80+', label: 'complex escalations resolved' },
      { value: '15+', label: 'AWS development teams' },
      { value: '4', label: 'engineers mentored to SME status' },
      { value: '150+', label: 'enterprise migrations supported' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'shield',
  },
  {
    id: 'nvme-devops-platform',
    title: 'NVMe Firmware Validation & Cloud-Native DevOps Platform',
    year: '2021 – 2023',
    genre: 'DevOps • Kubernetes • CI/CD',
    logline: 'Cloud-native build, validation, deployment, automation, and observability for NVMe firmware and microservices.',
    stack: ['Jenkins', 'Git', 'Terraform', 'Docker', 'Amazon ECR', 'Kubernetes', 'Amazon EKS', 'Python', 'Prometheus', 'Grafana'],
    build: experience[2].points,
    features: [
      'NVMe firmware build and validation pipelines',
      'Terraform-based AWS provisioning',
      'Docker and Amazon ECR containerization',
      'Kubernetes workloads on Amazon EKS',
      'Prometheus and Grafana observability',
      'Automated testing and SonarQube analysis',
    ],
    metrics: [
      { value: '20%', label: 'infrastructure cost efficiency' },
      { value: '75%', label: 'less manual operational effort' },
    ],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'tenants',
  },
  {
    id: 'snapshot-optimization-ml-platform',
    title: 'Serverless Snapshot Optimization & AWS ML Platform Support',
    year: '2019 – 2021',
    genre: 'Serverless • AWS • ML Platform',
    logline: 'High-availability EC2 architecture, serverless snapshot automation, and deployment support for machine learning teams.',
    stack: ['EC2', 'S3', 'Lambda', 'Python', 'SageMaker', 'AWS CLI', 'CloudFormation', 'JFrog Artifactory'],
    build: experience[3].points,
    features: [
      'High-availability and secure EC2 architecture',
      'Python-based Snapshot Optimize Lambda',
      'Machine learning application build and deployment',
      'Amazon SageMaker hands-on support',
      'CloudFormation and AWS CLI workflows',
    ],
    metrics: [{ value: '20%', label: 'fewer post-release defects' }],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'incidents-managed',
    title: '1,200+ Incidents',
    org: 'Amazon Web Services',
    detail: 'Managed technical incidents and led recovery from 100+ high-severity production outages across AWS services.',
    laurel: 'Production Impact',
  },
  {
    id: 'enterprise-migrations',
    title: '150+ Migrations',
    org: 'AWS Control Tower',
    detail: 'Supported enterprise application and infrastructure migrations and drove multi-account governance standards.',
    laurel: 'Enterprise Scale',
  },
  {
    id: 'kubernetes-efficiency',
    title: '20% Efficiency',
    org: 'Western Digital',
    detail: 'Pioneered Kubernetes adoption for containerized workloads and improved infrastructure cost efficiency.',
    laurel: 'Cloud Native',
  },
  {
    id: 'automation-impact',
    title: '75% Less Manual Work',
    org: 'Western Digital',
    detail: 'Developed Python automation scripts that reduced manual operational effort over 12 months.',
    laurel: 'Automation',
  },
  {
    id: 'agentic-devops',
    title: 'Agentic DevOps',
    org: 'EPAM Systems',
    detail: 'Architected MCP and specialized-agent workflows for AI-driven CI/CD migration, validation, and remediation.',
    laurel: 'Current Focus',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'AWS', name: 'AWS Certified Solutions Architect – Associate' },
  { issuer: 'AWS', name: 'AWS Certified AI Practitioner' },
  { issuer: 'HashiCorp', name: 'HashiCorp Certified: Terraform Associate (003)' },
  { issuer: 'Claude', name: 'Claude Certified Architect – Foundations' },
];

export type ManagerQuote = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const managerQuote: ManagerQuote = {
  quote:
    'Viswa exhibits good Customer Obsession through understanding customer needs, clear communication of technical concepts, and consistently providing effective solutions that enhance engagement and build lasting trust with customers. He demonstrated Ownership by actively working on different services, accepting complete responsibility for cases, performing detailed investigations to identify root causes. Viswa showed strong technical expertise, good team collaboration — approachable, working closely across different support teams, ensuring smooth handovers during escalations, and maintaining open communication that promotes team collaboration.',
  name: 'Sanjaya Navada',
  role: 'Manager · Amazon Web Services',
  initials: 'SN',
};

export type PeerFeedback = { quote: string; tag: string };

export const peerFeedback: PeerFeedback[] = [
  {
    quote:
      'Through rapid response to customer needs and clear communication of technical concepts, Viswa exhibits strong Customer Obsession that enhances engagement and builds lasting trust. His deep CloudFormation knowledge empowers him to make decisive choices that reliably improve customer outcomes.',
    tag: 'Peer · AWS',
  },
  {
    quote:
      'They demonstrate bias for action in their approach to work challenges. They handle complex situations patiently while delivering positive outcomes for customers, showcasing their ability to balance urgency with thoughtful problem-solving. Their technical expertise is commendable and contributes significantly to case resolutions.',
    tag: 'Peer · AWS',
  },
  {
    quote:
      'Viswakanth was my onboarding buddy and was very helpful during my initial days. He was always approachable, patient, and willing to explain concepts or processes whenever support was needed, which made the onboarding experience smooth and confidence-building.',
    tag: 'Peer · AWS',
  },
  {
    quote:
      'He has shown his dedication towards learning by taking up the CloudFormation SME path and is close to completing it. His commitment to building deep technical expertise reflects consistent effort and ownership of his growth. He applies his CloudFormation knowledge effectively while working on cases.',
    tag: 'Peer · AWS',
  },
  {
    quote:
      'Viswakanth demonstrates strong ownership by actively working on different services and ensures fast resolution for cases, showing commitment to taking responsibility across various technical areas and maintaining efficient problem-solving approaches.',
    tag: 'Peer · AWS',
  },
  {
    quote:
      'Viswa is a strong performer with solid technical skills and customer focus. With continued learning and SME certifications, he is well-positioned for career advancement in 2026. I appreciate his dependability and the support he readily offers to the team.',
    tag: 'Peer · AWS',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'cloud',
    title: 'Cloud',
    subtitle: 'AWS and Azure infrastructure',
    skills: [
      { name: 'AWS', mono: 'Aw', note: 'Primary' },
      { name: 'Azure', mono: 'Az' },
      { name: 'EC2', mono: 'E2' },
      { name: 'VPC', mono: 'Vp' },
      { name: 'S3', mono: 'S3' },
      { name: 'IAM', mono: 'Ia' },
      { name: 'RDS', mono: 'Rd' },
      { name: 'ECS', mono: 'Ec' },
      { name: 'EKS', mono: 'Ek' },
      { name: 'Lambda', mono: 'La' },
      { name: 'Auto Scaling', mono: 'As' },
      { name: 'Elastic Load Balancing', mono: 'Lb' },
      { name: 'CloudWatch', mono: 'Cw' },
      { name: 'ECR', mono: 'Er' },
    ],
  },
  {
    id: 'iac',
    title: 'Infrastructure as Code',
    subtitle: 'Repeatable cloud delivery',
    skills: [
      { name: 'Terraform', mono: 'Tf', note: 'Certified' },
      { name: 'AWS CloudFormation', mono: 'Cf' },
      { name: 'AWS CDK', mono: 'Ck' },
      { name: 'AWS Control Tower', mono: 'Ct' },
      { name: 'AWS Service Catalog', mono: 'Sc' },
      { name: 'YAML', mono: 'Yl' },
    ],
  },
  {
    id: 'cicd',
    title: 'CI/CD & DevOps',
    subtitle: 'Automation from commit to production',
    skills: [
      { name: 'Jenkins', mono: 'Je' },
      { name: 'GitHub Actions', mono: 'Gh' },
      { name: 'GitLab CI/CD', mono: 'Gl' },
      { name: 'AWS CodePipeline', mono: 'Cp' },
      { name: 'AWS CodeBuild', mono: 'Cb' },
      { name: 'AWS CodeDeploy', mono: 'Cd' },
      { name: 'Git', mono: 'Gt' },
      { name: 'JFrog Artifactory', mono: 'Jf' },
      { name: 'SonarQube', mono: 'Sq' },
    ],
  },
  {
    id: 'containers',
    title: 'Containers',
    subtitle: 'Cloud-native platforms',
    skills: [
      { name: 'Docker', mono: 'Dk' },
      { name: 'Kubernetes', mono: 'K8' },
      { name: 'Amazon EKS', mono: 'Ek' },
      { name: 'Amazon ECR', mono: 'Er' },
      { name: 'Helm', mono: 'Hm' },
    ],
  },
  {
    id: 'automation',
    title: 'Automation',
    subtitle: 'Scripts and operational tooling',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'Bash', mono: 'Bs' },
      { name: 'Groovy', mono: 'Gr' },
      { name: 'Ansible', mono: 'An' },
      { name: 'AWS CLI', mono: 'Cl' },
    ],
  },
  {
    id: 'reliability',
    title: 'Monitoring & Reliability',
    subtitle: 'Visibility and recovery',
    skills: [
      { name: 'Prometheus', mono: 'Pr' },
      { name: 'Grafana', mono: 'Gr' },
      { name: 'CloudWatch', mono: 'Cw' },
      { name: 'Incident Management', mono: 'Im' },
      { name: 'Root Cause Analysis', mono: 'Rc' },
      { name: 'Observability', mono: 'Ob' },
      { name: 'Production Support', mono: 'Ps' },
    ],
  },
  {
    id: 'migration-security',
    title: 'Migration & Security',
    subtitle: 'Safe movement at enterprise scale',
    skills: [
      { name: 'Azure-to-AWS Migration', mono: 'Am' },
      { name: 'AWS Application Migration Service', mono: 'Ms' },
      { name: 'Network / Firewall Analysis', mono: 'Nf' },
      { name: 'East-West Connectivity', mono: 'Ew' },
      { name: 'IAM', mono: 'Ia' },
      { name: 'KMS', mono: 'Km' },
      { name: 'Multi-Account Governance', mono: 'Mg' },
    ],
  },
  {
    id: 'ai-genai',
    title: 'AI & GenAI',
    subtitle: 'Intelligent engineering workflows',
    skills: [
      { name: 'Model Context Protocol (MCP)', mono: 'Mc' },
      { name: 'AI Agents', mono: 'Ag' },
      { name: 'Agentic Workflows', mono: 'Aw' },
      { name: 'Prompt Engineering', mono: 'Pe' },
      { name: 'GitHub Copilot', mono: 'Gc' },
      { name: 'Kiro', mono: 'Ki' },
      { name: 'AWS Bedrock', mono: 'Bk' },
      { name: 'RAG', mono: 'Rg' },
      { name: 'LangChain', mono: 'Lc' },
    ],
  },
  {
    id: 'operating-systems',
    title: 'Operating Systems',
    subtitle: 'The systems underneath',
    skills: [
      { name: 'Linux', mono: 'Lx' },
      { name: 'Red Hat', mono: 'Rh' },
      { name: 'Ubuntu', mono: 'Ub' },
      { name: 'Windows', mono: 'Ws' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  AWS: ['AWS Cloud Operations', 'AWS Certified Solutions Architect – Associate', 'AWS Certified AI Practitioner'],
  Azure: ['Enterprise Azure-to-AWS Migration'],
  Terraform: ['AWS Infrastructure Support', 'HashiCorp Certified: Terraform Associate'],
  'AWS CloudFormation': ['AWS Infrastructure Support', 'CloudFormation SME'],
  'AWS CDK': ['AWS Infrastructure Support', 'Enterprise migrations'],
  Jenkins: ['NVMe Firmware Validation', 'AI-driven CI/CD modernization'],
  'GitHub Actions': ['AI-driven CI/CD modernization'],
  'GitLab CI/CD': ['AI-driven CI/CD modernization'],
  Docker: ['NVMe Firmware Validation', 'Agent-driven pipeline validation'],
  Kubernetes: ['NVMe Firmware Validation', 'Amazon EKS'],
  Python: ['Snapshot Optimize Lambda', 'Operational automation'],
  Prometheus: ['Cloud-native DevOps platform'],
  Grafana: ['Cloud-native DevOps platform'],
  'Incident Management': ['1,200+ AWS incidents managed'],
  'Root Cause Analysis': ['Critical production incidents'],
  'Model Context Protocol (MCP)': ['AI-driven CI/CD migration platform'],
  'AI Agents': ['Specialized-agent migration workflows'],
  'AWS Bedrock': ['Bedrock Knowledge Bases and Guardrails'],
  RAG: ['SIG similarity-search pipeline'],
  'Multi-Account Governance': ['AWS Control Tower adoption'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundations',
    period: '2019 – 2021',
    synopsis: 'Amazon ML Data Associate work spanning EC2 architecture, serverless automation, and machine learning platform support.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Architect',
        description: 'Designed high-availability EC2 infrastructure and built Snapshot Optimize, a Python-based AWS Lambda solution for snapshot management.',
        tags: ['EC2', 'Lambda', 'Python'],
        runtime: 'Aug 2019 – Mar 2021',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The ML Platform Partner',
        description: 'Supported machine learning teams with application build and deployment activities and gained hands-on experience with Amazon SageMaker.',
        tags: ['SageMaker', 'AWS CLI', 'CloudFormation'],
        runtime: 'Amazon',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Cloud Native Delivery',
    period: '2021 – 2023',
    synopsis: 'DevOps engineering at Western Digital across firmware validation, Kubernetes, AWS provisioning, automation, and observability.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Pipeline Builder',
        description: 'Implemented Jenkins and Git CI/CD pipelines to automate NVMe firmware build and validation workflows.',
        tags: ['Jenkins', 'Git', 'CI/CD'],
        runtime: 'Dec 2021 – Jun 2023',
        palette: crimson,
      },
      {
        code: 'S02 E02',
        title: 'The Kubernetes Adopter',
        description: 'Containerized microservices with Docker and Amazon ECR and deployed workloads on Kubernetes clusters in Amazon EKS.',
        tags: ['Docker', 'Kubernetes', 'EKS'],
        runtime: 'Western Digital',
        palette: ocean,
      },
      {
        code: 'S02 E03',
        title: 'The Automation Engineer',
        description: 'Reduced manual operational effort by 75% with Python automation and improved real-time visibility with Prometheus and Grafana.',
        tags: ['Python', 'Prometheus', 'Grafana'],
        runtime: 'Western Digital',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'AWS at Scale',
    period: '2024 – 2026',
    synopsis: 'Cloud Engineer I at AWS handling enterprise incidents, IaC escalations, architecture guidance, and multi-account governance.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Incident Responder',
        description: 'Managed 1,200+ technical incidents and led recovery from 100+ high-severity production outages across AWS services.',
        tags: ['Incident Management', 'RCA', 'AWS'],
        runtime: 'Jan 2024 – Apr 2026',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'The IaC Specialist',
        description: 'Resolved 80+ complex CloudFormation, CDK, and Control Tower escalations across ECS, EKS, Auto Scaling, Lambda, EC2, and RDS.',
        tags: ['CloudFormation', 'CDK', 'Control Tower'],
        runtime: 'AWS',
        palette: amber,
      },
      {
        code: 'S03 E03',
        title: 'The Governance Builder',
        description: 'Drove AWS Control Tower adoption for multi-account governance and service catalog standards supporting 150+ enterprise migrations.',
        tags: ['Governance', 'Migrations', 'Service Catalog'],
        runtime: 'AWS',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Migration Meets Agents',
    period: '2026 – Present',
    synopsis: 'Senior Systems Engineer at EPAM Systems building enterprise Azure-to-AWS migration architecture and AI-driven CI/CD modernization.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Migration Architect',
        description: 'Designed East-West and Firewall-19 rules and created migration architecture and delivery documentation for enterprise Azure-to-AWS migrations.',
        tags: ['Azure', 'AWS', 'SIG'],
        runtime: 'Apr 2026 – Present',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'The Agent Builder',
        description: 'Architected an MCP-powered platform using specialized agents and tool-based workflows to migrate Jenkins pipelines to GitHub Actions and GitLab CI.',
        tags: ['MCP', 'AI Agents', 'CI/CD'],
        runtime: 'EPAM Systems',
        palette: violet,
      },
      {
        code: 'S04 E03',
        title: 'The Guardrail Engineer',
        description: 'Designed agent-driven validation and remediation workflows and implemented Bedrock Knowledge Bases and Guardrails for secure GenAI operations.',
        tags: ['Bedrock', 'Guardrails', 'RAG'],
        runtime: 'EPAM Systems',
        palette: jade,
      },
    ],
  },
  {
    number: 5,
    title: 'The Next Chapter',
    period: 'Now streaming',
    synopsis: 'The current arc combines cloud operations, platform engineering, and GenAI-assisted engineering.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Intelligent Platform Engineer',
        description: 'Building safer, more automated cloud delivery with Infrastructure as Code, agentic workflows, RAG, and GenAI-assisted engineering.',
        tags: ['IaC', 'Agentic AI', 'GenAI'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary cloud', title: 'AWS', detail: 'Cloud operations, architecture, IaC, and migrations', palette: amber },
  { label: 'Current role', title: 'EPAM Systems', detail: 'Senior Systems Engineer · DevOps / Cloud Migration', palette: ocean },
  { label: 'Production impact', title: '1,200+', detail: 'Technical incidents managed at AWS', palette: crimson },
  { label: 'Enterprise scale', title: '150+ migrations', detail: 'Supported through governance and cloud operations', palette: violet },
  { label: 'IaC specialty', title: 'Terraform + CloudFormation', detail: 'Certified Terraform and CloudFormation SME experience', palette: jade },
  { label: 'Cloud native', title: 'Kubernetes / EKS', detail: 'Container platforms and microservice delivery', palette: ocean },
  { label: 'Automation impact', title: '75%', detail: 'Less manual operational effort', palette: crimson },
  { label: 'AI frontier', title: 'MCP + Agents', detail: 'AI-driven CI/CD migration and remediation workflows', palette: violet },
  { label: 'Professional credential', title: 'AWS SAA', detail: 'AWS Certified Solutions Architect – Associate', palette: amber },
  { label: 'Current mission', title: 'Agentic DevOps', detail: 'Secure, context-aware GenAI for cloud engineering', palette: jade },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Role',
    title: 'DevOps · AWS Cloud',
    lines: ['DevOps Engineer and AWS Cloud Engineer', '5+ years building, automating, migrating, and supporting production infrastructure'],
    chips: ['AWS', 'IaC', 'CI/CD'],
  },
  {
    kicker: 'Impact',
    title: 'Built for production.',
    lines: ['1,200+ technical incidents managed', '100+ high-severity outages recovered', '150+ enterprise migrations supported'],
    chips: ['Reliability', 'Scale', 'RCA'],
  },
  {
    kicker: 'Stack',
    title: 'Infrastructure as Code.',
    lines: ['Terraform · CloudFormation · CDK · Control Tower', 'Jenkins · GitHub Actions · GitLab CI · Docker · Kubernetes'],
    chips: ['Terraform', 'CloudFormation', 'Kubernetes'],
  },
  {
    kicker: 'Current project',
    title: 'Migration meets agents.',
    lines: ['Azure-to-AWS migration architecture', 'MCP, specialized agents, RAG, Bedrock Knowledge Bases and Guardrails'],
    chips: ['MCP', 'Agents', 'Bedrock'],
  },
  {
    kicker: 'Certified',
    title: 'Four credentials.',
    lines: ['AWS Solutions Architect · AWS AI Practitioner', 'Terraform Associate · Claude Certified Architect'],
  },
  {
    kicker: 'Core strengths',
    title: 'Make systems safer.',
    lines: ['Cloud operations · DevOps automation · Platform engineering', 'Cloud migration · Incident management · GenAI-assisted engineering'],
  },
];

export type ProfileId = 'viswakanth' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'testimonials' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'viswakanth',
    name: 'Viswakanth',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'testimonials', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, impact & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'testimonials', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Engineer',
    blurb: 'Projects, stack & delivery first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'testimonials', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Explorer',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'testimonials', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Cloud engineering & delivery', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Projects • 2019 – Present`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Impact moments • ${certifications.length} Certifications`, palette: crimson },
  testimonials: { nav: 'Testimonials', card: 'Testimonials', meta: 'Manager & peer feedback', palette: ocean },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
