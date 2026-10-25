// All site content lives here. Edit this file to update the portfolio —
// no layout code needs to change.

export const profile = {
  name: 'Princess May Cruz',
  nickname: 'Cess',
  displayName: 'Cess Cruz',
  handle: 'cess-cruz',
  title: 'Senior .NET Developer',
  // Cycled by the typing animation in the hero; the first one shows without JavaScript.
  roles: ['Senior .NET Developer', 'Full-stack Engineer', 'Integration Engineer', 'Flutter Developer'],
  location: 'Philippines',
  yearsExperience: '9+',
  tagline:
    'I build and ship production web apps end to end — C# and ASP.NET Core APIs, Angular frontends, SQL Server, and the Azure pipelines that deploy them.',
  about: [
    "I'm Cess, a Senior .NET Developer with 9+ years of hands-on experience building scalable, high-performance applications. I've worked on enterprise systems for airline catering, healthcare, document tracking, asset inventory, resource allocation, CRM and ride-hailing — including the Xpress Super App, a large-scale ride-hailing and multi-service platform. I also build cross-platform mobile apps with Flutter.",
    "I don't just write code — I build clean, maintainable systems that last. I apply SOLID principles, the Repository Pattern and Dependency Injection so systems stay scalable, testable and easy to extend, whether I'm designing ASP.NET Core APIs, building Angular or React frontends, optimizing MSSQL queries or deploying to Azure.",
    "Today I build integration middleware at Tonic, keeping HR, payroll and accounting platforms like Xero, MYOB and Stripe in sync. I'm at my best in fast-paced teams, modernizing systems or building products from scratch — the same focus and speed that earned podium finishes at the ADB-AIM Hackathon (500+ global entries) and Accenture's Health Industry Hackathon.",
  ],
  avatar: '/avatar.jpg',
  email: 'princess.may.y.cruz@gmail.com',
  // Put a public copy of your resume (without phone, address or references)
  // at public/resume.pdf, then set this to '/resume.pdf'. Empty hides the button.
  resumeUrl: '',
  links: {
    github: 'https://github.com/crzsec14',
    linkedin: 'https://www.linkedin.com/in/cess-c-6860aa145/',
    upwork: 'https://www.upwork.com/freelancers/princessmayc2',
  },
};

export const stats = [
  { value: '9+', label: 'years shipping software' },
  { value: '7', label: 'companies & teams' },
  { value: '2', label: 'hackathon podiums' },
];

export type Job = {
  company: string;
  role: string;
  // Leave start/end empty to hide the dates.
  start?: string;
  end?: string;
  highlights: string[];
  stack?: string[];
  // Draft entries are kept here but not shown on the site.
  draft?: boolean;
};

export const experience: Job[] = [
  {
    company: 'Tonic',
    role: 'Full-stack Software Engineer',
    start: 'Feb 2026',
    end: 'Present',
    highlights: [
      'Developed and maintained integration solutions with C#, React and custom schedulers that automate data sync between HR, payroll, accounting and business management platforms.',
      'Integrated HiBob, Employment Hero, Stripe, HumanForce, Total Synergy and AccountRight, with MYOB and Xero on the accounting side.',
      'Built console middleware apps for data processing, API integrations and communication between external systems.',
      'Focused on reliable execution, error handling and data consistency across every sync.',
    ],
    stack: ['C#', 'React', 'REST APIs', 'Schedulers', 'Xero', 'MYOB', 'Stripe'],
  },
  {
    company: 'Xpress Super App',
    role: 'Full-stack Software Engineer',
    start: 'Mar 2025',
    end: 'Present',
    highlights: [
      'Design and ship new features and enhancements across the stack.',
      'Drive bug fixing, refactoring and codebase optimization.',
      'Provide technical leadership and mentor junior and mid-level developers.',
    ],
  },
  {
    company: 'Bruntwork',
    role: 'IT Developer / Full-stack Software Engineer',
    start: 'Apr 2023',
    end: 'Mar 2025',
    highlights: [
      'Built a business application from scratch with Angular 17 and a .NET Core 6 REST API, including Azure App Service, Storage, custom domain and SSL setup.',
      'Orchestrated CI/CD with Azure DevOps build and release pipelines.',
      'Integrated third-party APIs and upgraded libraries to improve performance and reach.',
      'Led refactoring and debugging efforts and mentored junior developers.',
    ],
    stack: ['Angular 17', '.NET Core 6', 'Azure', 'Azure DevOps'],
  },
  {
    company: 'Alloc8',
    role: 'L3 Support Engineer / Full-stack Software Engineer',
    start: 'Aug 2021',
    end: 'Apr 2023',
    highlights: [
      'Resolved production issues as the L3 escalation point, including bug and data fixes.',
      'Built pipelines and managed releases and deployments to QA and production.',
      'Improved existing web and mobile apps; reviewed pull requests and estimated sprint work.',
      'Onboarded and trained new team members.',
    ],
  },
  {
    company: 'Accenture',
    role: 'Application Developer Analyst',
    start: 'Aug 2019',
    end: 'Aug 2021',
    highlights: [
      'Developed and troubleshot integration and migration tools with BizTalk Server, .NET and MS SQL.',
      'Built web and Windows apps with ASP.NET MVC, Web API, Kendo UI and Active Reports.',
      'Worked directly with clients and vendors; wrote technical specs and ran knowledge-transfer sessions.',
    ],
    stack: ['BizTalk', 'ASP.NET MVC', 'Web API', 'MS SQL'],
  },
  {
    company: 'Infomax Systems Solutions and Services',
    role: 'Associate Software Engineer',
    start: 'Jul 2017',
    end: 'Aug 2019',
    highlights: [
      'Built new systems from client requirements and enhanced existing ones.',
      'Packaged installers and deployed web apps to IIS and QA servers in an Agile/Scrum team.',
    ],
  },
];

export const featured = [
  {
    file: 'sync-middleware.cs',
    title: 'HR, payroll & accounting integrations',
    company: 'Tonic',
    summary:
      'Scheduled C# middleware that keeps HR, payroll and accounting systems in sync — HiBob, Employment Hero, HumanForce, Total Synergy, AccountRight and Stripe feeding into MYOB and Xero — built for reliable runs, solid error handling and consistent data.',
    stack: ['C#', 'React', 'Schedulers', 'Xero API', 'MYOB API', 'Stripe API'],
  },
  {
    file: 'greenfield-app.ts',
    title: 'Greenfield business app on Azure',
    company: 'Bruntwork',
    summary:
      'Took a new business application from an empty repo to production: Angular 17 frontend, .NET Core 6 REST API, and the full Azure setup — App Service and Plan, Storage containers, custom domain and SSL.',
    stack: ['Angular 17', '.NET Core 6', 'Azure App Service', 'Azure Storage'],
  },
  {
    file: 'pipelines.yml',
    title: 'CI/CD and release automation',
    company: 'Across roles',
    summary:
      'Set up and maintained build and release pipelines with Azure DevOps, Octopus and TeamCity so QA and production deployments became repeatable instead of manual.',
    stack: ['Azure DevOps', 'Octopus', 'TeamCity', 'GitFlow'],
  },
  {
    file: 'integration.cs',
    title: 'Enterprise integration & migration tools',
    company: 'Accenture',
    summary:
      'Developed and troubleshot BizTalk-based integration and data migration tooling for a client, alongside supporting ASP.NET MVC and Windows apps for both the client and internal teams.',
    stack: ['BizTalk Server', '.NET', 'MS SQL', 'Stored Procedures'],
  },
];

export const skills = [
  { group: 'Backend', items: ['C#', 'ASP.NET Core', 'ASP.NET MVC', 'Web API', 'Entity Framework / LINQ', 'Dapper', 'Node.js', 'VB.NET'] },
  { group: 'Frontend', items: ['React', 'Angular', 'AngularJS', 'TypeScript / JavaScript', 'HTML / CSS', 'Bootstrap', 'jQuery', 'Kendo UI'] },
  { group: 'Mobile', items: ['Flutter', 'Ionic'] },
  { group: 'Data & Reporting', items: ['MS SQL Server', 'Stored Procedures', 'Azure Storage (Blobs, Tables)', 'Active Reports', 'Crystal Reports'] },
  { group: 'Cloud & DevOps', items: ['Azure App Service', 'App Insights', 'Azure VMs', 'Azure DevOps CI/CD', 'Octopus', 'TeamCity', 'IIS', 'Git'] },
  { group: 'AI & Ways of working', items: ['Claude', 'Cursor', 'Agile / Scrum', 'Code review', 'Mentoring', 'Jira / Bitbucket'] },
];

export const awards = [
  { title: '2nd Place — Health Industry Hackathon', org: 'Accenture', date: 'May 2021' },
  { title: 'Agila Gantimpala Award', org: 'Accenture', date: 'Nov 2020' },
  { title: '3rd Place — ADB-AIM Hackathon', org: 'Asian Development Bank × AIM', date: 'Sep 2018' },
];

export const sideProjects = [
  { name: 'GameStore.Api', lang: 'C#', description: 'ASP.NET Core minimal API for a game catalog — endpoints, DTOs, mapping and a SQLite database.', url: 'https://github.com/crzsec14/GameStore.Api' },
  { name: 'Todo-App', lang: 'C# · Angular', description: 'Clean Architecture .NET + Angular todo app, with features like per-item colors and tag filtering added on top.', url: 'https://github.com/crzsec14/Todo-App' },
  { name: 'loan', lang: 'C#', description: 'Loan app split into data, repository, service and helper layers.', url: 'https://github.com/crzsec14/loan' },
  { name: 'RealEstate', lang: 'C# · JavaScript', description: 'Real-estate solution with separate API, core and web projects.', url: 'https://github.com/crzsec14/RealEstate' },
];
