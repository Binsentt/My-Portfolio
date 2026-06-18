export const projectRepositoryUrls = {
  theresiansQuest: 'https://github.com/Binsentt/My-Portfolio'
};

export const profile = {
  name: 'Vincent Angelo Tafalla',
  role: 'Full Stack Web Developer',
  location: 'Philippines',
  email: 'vincenttafalla2@gmail.com',
  portfolioUrl: 'https://vincent-angelo-tafalla-portfolio.vercel.app/',
  facebookUrl: 'https://www.facebook.com/share/1biuMmXMsE/?mibextid=wwXIfr',
  githubUrl: 'https://github.com/Binsentt',
  linkedinUrl: 'https://www.linkedin.com/in/vincent-angelo-tafalla-a45615417',
  resumeUrl: '/resume.pdf',
  tagline:
    'Full Stack Web Developer building responsive web applications with modern technologies, clean interfaces, and practical backend foundations.',
  intro:
    'I create clean, responsive web experiences that connect thoughtful frontend design with dependable backend and database foundations.',
  summary:
    'Vincent Angelo Tafalla is a full stack web developer focused on building professional web experiences with React, JavaScript, Node.js, and PostgreSQL. He values readable code, thoughtful layouts, accessible interfaces, and steady improvement through real projects, modern tools, and practical deployment workflows.',
  journey:
    'My developer journey has grown through hands-on web projects, capstone work, and continuous practice with modern frontend, backend, database, and deployment tools. Each project helps me sharpen how I plan, build, test, and polish applications for real users.',
  objective:
    'I am looking for opportunities where I can contribute reliable web applications, keep improving as a full stack developer, and help teams turn practical ideas into polished digital products that are easy to use and maintain.',
  aiStatement:
    'I use AI tools as a professional assistant for development support, debugging, learning, and productivity. They help me explore ideas faster and review details more carefully while I stay responsible for understanding, testing, and refining the final result.'
};

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' }
];

export const skillGroups = [
  {
    title: 'Frontend',
    description: 'Responsive interfaces built with modern browser fundamentals.',
    items: ['React', 'JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'Backend',
    description: 'Server-side foundations for practical web applications.',
    items: ['Node.js']
  },
  {
    title: 'Database',
    description: 'Structured data for reliable application features.',
    items: ['PostgreSQL']
  },
  {
    title: 'Tools',
    description: 'Version control, deployment, and daily development workflow.',
    items: ['Git', 'GitHub', 'Railway', 'Vercel', 'VS Code']
  }
];

export const aiTools = ['Development', 'Debugging', 'Learning', 'Productivity'];

export const projects = [
  {
    title: "Theresian's Quest",
    eyebrow: 'Featured Capstone Project',
    featured: true,
    description:
      "A capstone web experience for Theresian's Quest, built to present the project clearly, guide visitors through the live site, and demonstrate full stack development practice.",
    image: '/project-theresians-quest.svg',
    tech: ['React', 'JavaScript', 'Node.js', 'PostgreSQL', 'Railway', 'Vercel'],
    links: {
      live: 'https://theresiansquest.com/',
      github: projectRepositoryUrls.theresiansQuest
    }
  }
];

export const contacts = [
  {
    type: 'Facebook',
    label: 'Vincent on Facebook',
    value: 'facebook.com/share',
    href: profile.facebookUrl
  },
  {
    type: 'GitHub',
    label: '@Binsentt',
    value: 'github.com/Binsentt',
    href: profile.githubUrl
  },
  {
    type: 'LinkedIn',
    label: 'Vincent Angelo Tafalla',
    value: 'linkedin.com/in/vincent-angelo-tafalla',
    href: profile.linkedinUrl
  },
  {
    type: 'Email',
    label: profile.email,
    value: 'Send an email',
    href: `mailto:${profile.email}`
  }
];
