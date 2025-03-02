import {
  CodifireLogo,
  NewerestLogo,
  SharpmindsLogo,
  ThinkMobilesLogo,
  UaFundsLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Andrii Haluza",
  initials: "AH",
  location: "Sczcecin, Poland, CET",
  availability: "1 month",
  languages: [
    {
      name: "English",
      level: "B1-B2",
    },
    {
      name: "Ukrainian",
      level: "Native",
    },
  ],
  locationLink: "https://www.google.com/maps/place/Sczcecin",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary: (
    <>
      Backend-focused Full Stack Engineer specializing in high-performance Web
      applications, scalable Node.js services, and real-time collaboration
      systems. Experienced in technical architecture design and problem solving
      skills.
    </>
  ),
  avatarUrl: undefined,
  personalWebsiteUrl: "https://andrewhaluza.github.io/cv/",
  contact: {
    email: "andyhaluza+cv@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/andrewhaluza",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/andriy-haluza/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Uzhhorod National University",
      degree: "Master's Degree in Control and Cybernetics",
      start: "2011",
      end: "2017",
    },
  ],
  work: [
    {
      company: "NDA",
      badges: [
        // "Remote",
        // "Node.js",
        "Express.js",
        // "TypeScript",
        "React",
        "ArangoDB,",
        "SocketIO",
        "Docker",
        "Supertokens",
      ],
      link: undefined,
      logo: undefined,
      title: "Senior Full Stack Developer",
      start: "2024",
      end: null,
      description: (
        <>
          Senior Full Stack Developer for a security dashboard platform.
          <ul className="list-inside list-disc">
            <li>
              Developed new features and fixed bugs in the existing codebase for
              both backend and frontend
            </li>
            <li>
              Refactored legacy code to improve performance and maintainability
            </li>
            <li>
              Contributed to the creation and maintenance of technical
              documentation
            </li>
            <li>
              Implemented and integrated from scratch Bastion service for
              authentication to the internal network powered by Supertokens
            </li>
            <li>
              Contributed to CI/CD to simplify work processes for deployment
            </li>
            <li>Conducted PR reviews</li>
            <li>Participated in interviews</li>
            <li>Integrated third-party services: Supertokens, Lansweeper</li>
          </ul>
        </>
      ),
    },
    {
      company: "SharpMinds",
      link: "https://sharpminds.com/",
      badges: [
        // "Remote",
        // "Node.js",
        "NextJs",
        "MongoDB",
        "SocketIO",
        "Elasticsearch",
        // "Docker",
        "AWS",
        // "AWS (s3, Beanstalk, SSM)",
        "Payments",
        // "Stripe",
        // "Google Pub/Sub",
        // "Google/Apple market purchases and subscriptions",
      ],
      title: "Senior Backend Developer",
      logo: SharpmindsLogo,
      start: "2021",
      end: "2024",
      description: (
        <>
          Senior backend developer for an dating mobile application.
          <ul className="list-inside list-disc">
            <li>Fully rewritten the backend after MVP stage</li>
            <li>
              Optimized queries and indexes in MongoDB for faster response times
            </li>
            <li>
              Implemented matching algorithm for users based on their
              preferences
            </li>
            <li>
              Improved application performance by addressing code and database
              bottlenecks
            </li>
            <li>
              Utilized caching mechanisms like Redis for faster response times
            </li>
            <li>
              Deployed and maintained the application on AWS, ensuring high
              availability and scalability
            </li>
            <li>
              Monitored application performance and resolved production issues
              promptly
            </li>
            <li>
              Integrated payment services for Stipe, Google/Apple PlayMarket
              purchases and subscriptions
            </li>
            <li>
              Integrated third-party services: Google (Pub/Sub, Places,
              Analytics) APIs, Veriff, Sendgrid, Mailchimp, Firebase
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Codifire",
      link: "https://www.codifire.com/",
      badges: [
        // "Remote",
        "Node.js",
        // "Express.js",
        // "Koa.js",
        "Strapi",
        // "React",
        "NextJs",
        // "TypeScript",
        "MariaDB",
        "Meilisearch",
        // "Cronicle",
        "Payments",
        // "Auth0",
        // "Socket.io",
        // "Jest",
        // "Sentry",
        // "Stripe",
        // "services architecture",
      ],
      title: "Senior Full Stack Developer",
      logo: CodifireLogo,
      start: "2022",
      end: "2023",
      description: (
        <>
          Senior Full Stack Developer for customizable marketplace. Focused on
          the backend.
          <ul className="list-inside list-disc">
            <li>
              Implemented new features and fixed bugs in the existing codebase
              for both backend and frontend
            </li>
            <li>
              Utilized and customized Strapi as a core for some service,
              developed custom plugins
            </li>
            <li>
              Implemented from scratch service for synchronization data between
              SQL database and Google Spreadsheets and Drive in both direction
              utilizing customizable schemas and spreadsheet which triggers
              create/update/delete actions in the system
            </li>
            <li>
              Implemented email template system for customizing email templates
              for different types of emails via CMS
            </li>
            <li>Optimized database queries for efficient data handling</li>
            <li>Integrated third party services: Stripe, Sentry, Auth0</li>
          </ul>
        </>
      ),
    },
    {
      company: "ThinkMobiles",
      link: "https://thinkmobiles.com/",
      badges: [
        // "On Site",
        "MERN",
        "MEVN",
        // "Node.js",
        // "Express.js",
        // "React",
        // "TypeScript",
        // "MongoDB",
        // "Socket.io",
        "PortgreSQL",
        "EJS",
        // "Vue.js",
        "Cloudflare",
        "Nginx",
        "GCP",
      ],
      title:
        "Junior Full Stack Developer → Middle Full Stack Developer → Lead Full Stack Developer",
      logo: ThinkMobilesLogo,
      start: "2017",
      end: "2019",
      description: (
        <>
          Developed web applications for outsource clients and internal products
          in various domains including Marketing and Advertising, CRM\ERP
          Systems, Entertainment, Health and Wellness
          <p>
            On a last few years I was responsible for developing internal
            products focused on SEO, page speed rendering and marketing.
          </p>
          <ul className="list-inside list-disc">
            <li>
              Last year I was responsible for leading a team of 4-5 junior
              developers. Providing guidance, support, and knowledge sharing to
              help team members develop their skills and meet project goals,
              ensuring the quality and consistency of the codebase by reviewing
              and providing feedback on team members&apos; code contributions.
            </li>
            <li>
              Fully developing server-side rendering applications mixed with EJS
              templating for performance and Vue.js for functionality
            </li>
            <li>
              Tested and implemented various SEO strategies closely with CEO to
              increase organic traffic and Google indexing
            </li>
          </ul>
          <p>Previously was involved in these projects:</p>
          <ul className="list-inside list-disc">
            <li>Backend Developer for a video streaming web application</li>
            <li>Full Stack Developer for lead generation platform</li>
            <li>
              Backend Developer for a mobile application for tracking safe
              driving without cellphones
            </li>
            <li>Full Stack Developer for an ERP system</li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    // Languages
    "JavaScript, 8y",
    "TypeScript, 5y",

    // Backend
    "Node.js, 8y",
    "Express.js, 8y",
    "Nest.js, 3y",
    "Koa.js, 2y",
    "Strapi, 2y",

    // Frontend
    "React, 4y",
    "Vue.js, 2y",
    "EJS templating, 3y",
    "NextJs, 1y",
    "Nuxt, 1y",

    // Testing
    "Jest, 2y",

    // Databases
    "MongoDB, 5y",
    "PostgreSQL, 3y",
    "MariaDB/MySQL, 2y",
    "Mongoose, 5y",
    "Sequelize, 3y",
    "Redis, 4y",
    "ArangoDB, 1y",

    // Search
    "Elasticsearch, 3y",
    "Meilisearch, 2y",
    // Version Control, CI/CD, infrastructure
    "Git, 8y",
    "GitHub Actions, 3y",
    "Docker, 4y",
    "Nginx, 2y",

    // Cloud
    "AWS, 3y",
    "GCP, 2y",
    "Google Pub/Sub, 2y",

    // Real-time
    "SocketIO, 3y",

    // Payments
    "Stripe, 3y",
    "PlayMarket purchases & subscriptions, 2y",
    "AppleStore purchases & subscriptions, 2y",

    // Other
    "Cronicle",
    "Auth0",
    "Supertokens",
    "Sentry",
    "Cloudflare",
    "SEO",
    "Services architecture",
  ],
  projects: [
    {
      title: "Uafunds",
      techStack: [
        "TypeScript",
        "Strapi",
        "sqlite",
        "Nuxt",
        "Cloudflare",
        "GCP",
      ],
      description:
        "Transparent platform for aggregating small funds to collect finances for their needs. The goal is to help small funds to collect money for their needs.",
      logo: UaFundsLogo,
      link: {
        label: "uafunds.org",
        href: "https://uafunds.org/",
      },
    },
    {
      title: "Newerest",
      techStack: [
        "TypeScript",
        "Strapi",
        "PostgreSQL",
        "Nuxt",
        "Cloudflare",
        "GCP",
      ],
      description:
        "Blog platform for sharing news and articles for various topics. The goal is to test SEO strategies.",
      logo: NewerestLogo,
      link: {
        label: "newerest.space",
        href: "https://newerest.space/",
      },
    },
  ],
} as const;
