// All site content lives here. Edit this file to update the portfolio —
// no layout code needs to change.

export const profile = {
  name: 'Princess May Cruz',
  nickname: 'Cess',
  displayName: 'Cess Cruz',
  handle: 'cess-cruz',
  title: 'Senior .NET Developer',
  // Cycled by the typing animation in the hero; the first one shows without JavaScript.
  roles: ['Senior .NET Engineer', 'Full-stack Engineer', 'Integration Engineer'],
  location: 'Philippines',
  yearsExperience: '9+',
  tagline:
    'I build and ship production web apps end to end — C# and ASP.NET Core APIs, Angular/React frontends, SQL Server, and the Azure pipelines that deploy them.',
  // Wrap text in **double asterisks** to make it bold.
  about: [
    "I'm Cess, a Senior .NET Developer with 9+ years of experience designing and delivering scalable, high-performance software solutions. My expertise spans enterprise applications across healthcare, airline catering, document management, asset inventory, resource allocation, CRM, and ride-hailing, including the Xpress Super App, a large-scale ride-hailing and multi-service platform. I also have experience developing cross-platform mobile applications using Flutter.",
    "I go beyond writing code—I build robust, maintainable, and future-ready systems. I apply **Clean Architecture, SOLID principles, Repository Pattern, and Dependency Injection** to create solutions that are scalable, testable, and easy to extend. My technical expertise includes C#, .NET, ASP.NET Core, RESTful APIs, React, Angular, MSSQL performance optimization, and Azure deployment and support.",
    "At Tonic, I develop C# integration middleware and React applications that connect HR, payroll, and accounting platforms with systems such as Xero and MYOB. I thrive on solving complex technical challenges, modernizing legacy applications, streamlining integrations, and delivering reliable solutions in fast-paced environments.",
    "My problem-solving skills and ability to deliver under pressure have earned me podium finishes at the ADB-AIM Hackathon, competing against 500+ global entries, and Accenture's Health Industry Hackathon.",
    "**My goal is to turn complex business requirements into clean, efficient, and maintainable software that delivers lasting value.**",
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
  { value: '7+', label: 'companies & teams' },
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
    company: 'Tonic Technologies',
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
    end: 'Mar 2026',
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
  { name: 'AgriConnect', lang: 'C# · React · SQL', description: 'A full-stack platform that helps agricultural offices run farmer events, from registration and requirement approvals to QR code check-in, announcements and attendance reports.' },
  { name: 'QualifyHealth', lang: 'C# · React · SQL · Azure', description: 'Led the migration and modernization of a legacy healthcare application into a new React and .NET Core solution, improving maintainability, performance, and user experience while preserving existing functionality and integrating with SQL Server stored procedures..' }
];
