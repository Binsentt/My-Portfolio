import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(fileURLToPath(new URL('..', import.meta.url)));
const requiredFiles = [
  'src/App.js',
  'src/main.jsx',
  'src/index.css',
  'src/data/portfolio.js',
  'src/components/Navbar.js',
  'src/components/Hero.js',
  'src/components/About.js',
  'src/components/Skills.js',
  'src/components/Projects.js',
  'src/components/Resume.js',
  'src/components/Contact.js',
  'src/components/Footer.js',
  'src/components/ScrollProgress.js',
  'src/components/BackToTop.js',
  'public/favicon.svg',
  'public/project-theresians-quest.svg',
  'public/resume.pdf'
];

for (const file of requiredFiles) {
  assert.ok(existsSync(join(root, file)), `Missing required file: ${file}`);
}

assert.ok(!existsSync(join(root, 'src/App.jsx')), 'App component should use a .js extension');
assert.deepEqual(
  readdirSync(join(root, 'src/components')).filter((file) => file.endsWith('.jsx')),
  [],
  'React component files should use .js extensions'
);

const { profile, navigation, skillGroups, aiTools, projects, contacts } = await import(
  pathToFileURL(join(root, 'src/data/portfolio.js')).href
);

assert.equal(profile.name, 'Vincent Angelo Tafalla');
assert.equal(profile.role, 'Full Stack Web Developer');
assert.ok(profile.resumeUrl.endsWith('/resume.pdf'), 'Resume should live in the public folder');
assert.equal(profile.githubUrl, 'https://github.com/Binsentt');
assert.equal(profile.facebookUrl, 'https://www.facebook.com/share/1biuMmXMsE/?mibextid=wwXIfr');
assert.equal(profile.linkedinUrl, 'https://www.linkedin.com/in/vincent-angelo-tafalla-a45615417');
assert.equal(profile.email, 'vincenttafalla2@gmail.com');
assert.equal(typeof profile.portfolioUrl, 'string', 'Portfolio metadata URL should be configurable');
assert.ok(profile.portfolioUrl.startsWith('https://'), 'Portfolio metadata URL should be configured as an absolute HTTPS URL');
assert.ok(profile.tagline.includes('responsive web applications'), 'Hero tagline should communicate responsive web app work');
assert.ok(profile.journey.length > 80, 'Developer journey should be present');
assert.ok(profile.objective.length > 80, 'Career objective should be present');

const navLabels = navigation.map((item) => item.label);
assert.deepEqual(navLabels, ['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact']);

const expectedSkillGroups = new Map([
  ['Frontend', ['React', 'JavaScript', 'HTML', 'CSS']],
  ['Backend', ['Node.js']],
  ['Database', ['PostgreSQL']],
  ['Tools', ['Git', 'GitHub', 'Railway', 'Vercel', 'VS Code']]
]);

for (const [groupName, expectedSkills] of expectedSkillGroups) {
  const group = skillGroups.find((item) => item.title === groupName);
  assert.ok(group, `Missing skill group: ${groupName}`);
  assert.deepEqual(group.items, expectedSkills, `${groupName} skills should match the requested stack`);
}

assert.deepEqual(aiTools, ['Development', 'Debugging', 'Learning', 'Productivity']);

assert.ok(projects.length >= 1, 'At least the featured project should be present');
assert.ok(!projects.some((project) => /Smart\s*Canteen/i.test(project.title)), 'SmartCanteen must be removed');
assert.ok(
  projects.every((project) => project.image && project.tech.length && project.links.live && Object.hasOwn(project.links, 'github')),
  'Each project needs image, tech, live website, and a configurable GitHub field'
);
const featuredProject = projects.find((project) => project.featured);
assert.equal(featuredProject?.title, "Theresian's Quest");
assert.equal(featuredProject?.links.live, 'https://theresiansquest.com/');
assert.equal(
  featuredProject?.links.github,
  'https://github.com/Binsentt/My-Portfolio',
  'Featured project GitHub link should use the configured repository URL'
);
assert.notEqual(
  featuredProject?.links.github,
  profile.githubUrl,
  'Featured project GitHub link should not default to the personal GitHub profile'
);
assert.ok(featuredProject?.image.includes('theresians'), 'Featured project should use a Theresian image asset');

assert.ok(contacts.some((contact) => contact.type === 'Facebook'), 'Missing Facebook contact card');
assert.ok(contacts.some((contact) => contact.type === 'Email'), 'Missing email contact card');
assert.ok(contacts.some((contact) => contact.type === 'GitHub'), 'Missing GitHub contact card');
assert.ok(contacts.some((contact) => contact.type === 'LinkedIn'), 'Missing LinkedIn contact card');
assert.equal(contacts.find((contact) => contact.type === 'GitHub')?.href, profile.githubUrl);
assert.equal(contacts.find((contact) => contact.type === 'Facebook')?.href, profile.facebookUrl);
assert.equal(contacts.find((contact) => contact.type === 'LinkedIn')?.href, profile.linkedinUrl);
assert.equal(contacts.find((contact) => contact.type === 'Email')?.href, `mailto:${profile.email}`);

const css = readFileSync(join(root, 'src/index.css'), 'utf8');
assert.ok(css.includes('scroll-behavior: smooth'), 'Smooth scrolling should be enabled');
assert.ok(css.includes('scroll-margin-top'), 'Section anchors need scroll margin for the fixed navigation');
assert.ok(css.includes('prefers-reduced-motion'), 'Reduced motion support should be present');
assert.ok(css.includes('hero-grid'), 'Hero should include the subtle animated background treatment');

const projectsSource = readFileSync(join(root, 'src/components/Projects.js'), 'utf8');
assert.ok(projectsSource.includes('GitHub Repository'), 'Project buttons should clearly say GitHub Repository');
assert.ok(projectsSource.includes('Live Website'), 'Project buttons should clearly say Live Website');
assert.ok(!projectsSource.includes('Future projects can be added'), 'Projects section should not show maintenance guidance to visitors');

const resumeSource = readFileSync(join(root, 'src/components/Resume.js'), 'utf8');
assert.ok(!resumeSource.includes('Swap one file'), 'Resume section should not show replacement instructions to visitors');

const appSource = readFileSync(join(root, 'src/App.js'), 'utf8');
assert.ok(appSource.includes('ScrollProgress'), 'App should render the scroll progress indicator');
assert.ok(appSource.includes('BackToTop'), 'App should render the back-to-top button');

const navbarSource = readFileSync(join(root, 'src/components/Navbar.js'), 'utf8');
assert.ok(navbarSource.includes('activeSection'), 'Navbar should track the active section');

const indexHtml = readFileSync(join(root, 'index.html'), 'utf8');
assert.ok(indexHtml.includes('rel="icon"'), 'Favicon support should be present');
assert.ok(indexHtml.includes('og:url'), 'Open Graph URL should be present');
assert.ok(indexHtml.includes(`property="og:url" content="${profile.portfolioUrl}"`), 'Open Graph URL should represent the portfolio website');
assert.ok(!indexHtml.includes('property="og:url" content="https://theresiansquest.com/"'), 'Open Graph URL should not point to the featured project');
assert.ok(!indexHtml.includes('property="og:image" content="/project-theresians-quest.svg"'), 'Open Graph image should represent the portfolio rather than only the featured project');
assert.ok(indexHtml.includes('twitter:card'), 'Twitter card metadata should be present');

const resume = readFileSync(join(root, 'public/resume.pdf'));
assert.equal(resume.subarray(0, 4).toString(), '%PDF', 'Resume should be a valid PDF file');
assert.ok(resume.length > 5000, 'Resume should be replaced with the provided PDF, not the tiny sample');

const footerSource = readFileSync(join(root, 'src/components/Footer.js'), 'utf8');
assert.ok(!footerSource.includes('Ã‚Â©'), 'Footer should not contain mojibake characters');
assert.ok(footerSource.includes('LinkedIn'), 'Footer should include LinkedIn');

console.log('Portfolio structure checks passed.');
