# Targeted Premium Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Polish the existing Vincent Angelo Tafalla portfolio in place so it is professional, responsive, accessible, SEO-ready, and ready for Vercel deployment.

**Architecture:** Preserve the current Vite React and Tailwind component structure. Keep portfolio content centralized in `src/data/portfolio.js`, add only small focused helpers/components for scroll progress and back-to-top behavior, and refine existing section components instead of replacing them.

**Tech Stack:** React 19, Vite, Tailwind CSS, lucide-react, Node-based structure checks.

---

## File Structure

- Modify `scripts/check-portfolio.mjs`: update automated checks to enforce Theresian's Quest, LinkedIn, resume, metadata, and SmartCanteen removal.
- Modify `src/data/portfolio.js`: update profile, LinkedIn, skill groups, AI tools content, featured project data, and contact data.
- Create `public/project-theresians-quest.svg`: lightweight featured project image matching the current visual style.
- Replace `public/resume.pdf`: copy the provided actual resume PDF to the existing public resume path.
- Modify `src/components/Hero.jsx`: refine tagline, CTA hierarchy, subtle background, and entrance composition.
- Modify `src/components/About.jsx`: improve readability, add developer journey, career objective, and AI assistance presentation.
- Modify `src/components/Skills.jsx`: present required technology categories and a polished AI Tools card.
- Modify `src/components/Projects.jsx`: support one larger featured project card plus configurable project links.
- Modify `src/components/Resume.jsx`: improve preview card, buttons, and replacement guidance.
- Modify `src/components/Contact.jsx`: add LinkedIn, polish icons/cards, and enforce external tab behavior.
- Modify `src/components/Footer.jsx`: add quick navigation and all contact links.
- Modify `src/components/Navbar.jsx`: add active section highlighting while preserving mobile behavior.
- Create `src/components/ScrollProgress.jsx`: top scroll progress indicator.
- Create `src/components/BackToTop.jsx`: accessible floating back-to-top button.
- Modify `src/App.jsx`: render scroll progress and back-to-top helpers.
- Modify `src/index.css`: add subtle animations, focus improvements, no-overflow safeguards, and reduced-motion support.
- Modify `index.html`: add favicon support and complete metadata.

## Task 1: Update Structure Checks First

**Files:**
- Modify: `scripts/check-portfolio.mjs`

- [ ] **Step 1: Add failing checks for the requested content**

Update the imported data checks so they require the new portfolio content:

```js
assert.equal(profile.linkedinUrl, 'https://www.linkedin.com/in/vincent-angelo-tafalla-a45615417');
assert.ok(profile.tagline.includes('responsive web applications'), 'Hero tagline should communicate responsive web app work');

assert.ok(!projects.some((project) => /Smart Canteen/i.test(project.title)), 'SmartCanteen must be removed');
const featuredProject = projects.find((project) => project.featured);
assert.equal(featuredProject?.title, "Theresian's Quest");
assert.equal(featuredProject?.links.live, 'https://theresiansquest.com/');
assert.ok(featuredProject?.links.github, 'Featured project GitHub link should stay configurable');
assert.ok(featuredProject?.image.includes('theresians'), 'Featured project should use a Theresian image asset');

assert.ok(contacts.some((contact) => contact.type === 'LinkedIn'), 'Missing LinkedIn contact card');
assert.equal(contacts.find((contact) => contact.type === 'LinkedIn')?.href, profile.linkedinUrl);
```

- [ ] **Step 2: Run the check and confirm it fails**

Run: `pnpm test`

Expected: FAIL because `profile.linkedinUrl`, Theresian's Quest, and LinkedIn contact are not implemented yet.

- [ ] **Step 3: Add source checks for new UX and metadata**

Extend the source checks:

```js
const appSource = readFileSync(join(root, 'src/App.jsx'), 'utf8');
assert.ok(appSource.includes('ScrollProgress'), 'App should render the scroll progress indicator');
assert.ok(appSource.includes('BackToTop'), 'App should render the back-to-top button');

const navbarSource = readFileSync(join(root, 'src/components/Navbar.jsx'), 'utf8');
assert.ok(navbarSource.includes('activeSection'), 'Navbar should track the active section');

const indexHtml = readFileSync(join(root, 'index.html'), 'utf8');
assert.ok(indexHtml.includes('rel="icon"'), 'Favicon support should be present');
assert.ok(indexHtml.includes('og:url'), 'Open Graph URL should be present');
```

- [ ] **Step 4: Keep the no-Git checkpoint**

Run: `git status --short`

Expected: FAIL with "not a git repository". Record that commits cannot be made in this workspace.

## Task 2: Update Content Data and Assets

**Files:**
- Modify: `src/data/portfolio.js`
- Create: `public/project-theresians-quest.svg`
- Replace: `public/resume.pdf`

- [ ] **Step 1: Update profile and navigation data**

Add `linkedinUrl`, `tagline`, `journey`, `objective`, and polished AI content to `profile`:

```js
linkedinUrl: 'https://www.linkedin.com/in/vincent-angelo-tafalla-a45615417',
tagline:
  'Full Stack Web Developer building responsive web applications with modern technologies, clean interfaces, and practical backend foundations.',
journey:
  'My developer journey has grown through hands-on web projects, capstone work, and continuous practice with modern frontend, backend, database, and deployment tools.',
objective:
  'I am looking for opportunities where I can contribute reliable web applications, keep improving as a full stack developer, and help teams turn practical ideas into polished digital products.',
aiStatement:
  'I use AI tools as a professional assistant for development support, debugging, learning, and productivity. They help me explore ideas faster and review details more carefully while I stay responsible for understanding, testing, and refining the final result.'
```

- [ ] **Step 2: Update skill groups**

Keep only the requested core technologies in the main categories:

```js
export const skillGroups = [
  { title: 'Frontend', description: 'Responsive interfaces built with modern browser fundamentals.', items: ['React', 'JavaScript', 'HTML', 'CSS'] },
  { title: 'Backend', description: 'Server-side foundations for practical web applications.', items: ['Node.js'] },
  { title: 'Database', description: 'Structured data for reliable application features.', items: ['PostgreSQL'] },
  { title: 'Tools', description: 'Version control, deployment, and daily development workflow.', items: ['Git', 'GitHub', 'Railway', 'Vercel', 'VS Code'] }
];
```

- [ ] **Step 3: Replace SmartCanteen with Theresian's Quest**

Make the first project featured:

```js
{
  title: "Theresian's Quest",
  eyebrow: 'Featured Capstone Project',
  featured: true,
  description:
    "A capstone web experience for Theresian's Quest, designed to present the project clearly, guide visitors through the live site, and demonstrate full stack development practice.",
  image: '/project-theresians-quest.svg',
  tech: ['React', 'JavaScript', 'Node.js', 'PostgreSQL', 'Railway', 'Vercel'],
  links: {
    live: 'https://theresiansquest.com/',
    github: profile.githubUrl
  }
}
```

- [ ] **Step 4: Add LinkedIn contact**

Ensure `contacts` contains Facebook, GitHub, LinkedIn, and Email, with external links using profile URLs and Email using `mailto:`.

- [ ] **Step 5: Create the featured project image**

Create `public/project-theresians-quest.svg` as a lightweight dark UI-style preview with the text `Theresian's Quest`, subtle blue accents, and no external asset dependencies.

- [ ] **Step 6: Replace the resume file**

Copy `C:\Users\vince\Downloads\Tafalla-Resume.pdf` to `public\resume.pdf`.

Expected: `public\resume.pdf` opens as the provided Tafalla resume PDF.

- [ ] **Step 7: Run checks**

Run: `pnpm test`

Expected: still FAIL until components and metadata are updated.

## Task 3: Polish Hero, About, and Skills

**Files:**
- Modify: `src/components/Hero.jsx`
- Modify: `src/components/About.jsx`
- Modify: `src/components/Skills.jsx`

- [ ] **Step 1: Refine the hero**

Use `profile.tagline` below the role. Keep CTA buttons but make the primary action the project link and secondary actions cleanly grouped. Add a subtle background layer using CSS classes instead of heavy media.

- [ ] **Step 2: Improve About**

Add three content blocks: professional summary, developer journey, career objective. Keep the existing full stack and professional habits cards. Present the AI statement in a premium but restrained card.

- [ ] **Step 3: Improve Skills**

Render the four required skill groups as technology cards. Add a separate AI Tools card listing Development, Debugging, Learning, and Productivity.

- [ ] **Step 4: Run checks**

Run: `pnpm test`

Expected: still FAIL only for remaining project/UX/footer/metadata checks.

## Task 4: Polish Projects, Resume, Contact, and Footer

**Files:**
- Modify: `src/components/Projects.jsx`
- Modify: `src/components/Resume.jsx`
- Modify: `src/components/Contact.jsx`
- Modify: `src/components/Footer.jsx`

- [ ] **Step 1: Implement featured project layout**

Render `projects.find((project) => project.featured)` as a larger two-column card on desktop and a stacked card on mobile. Render non-featured projects below as smaller cards only if present.

- [ ] **Step 2: Configure project buttons**

Use these labels:

```jsx
Live Website
GitHub Repository
```

The live link opens in a new tab. The GitHub link uses `project.links.github`, opens in a new tab, and remains visually distinct from the primary live button.

- [ ] **Step 3: Improve Resume**

Keep the embedded `<object>` preview and both actions:

```jsx
<a href={profile.resumeUrl} target="_blank" rel="noreferrer">Open PDF</a>
<a href={profile.resumeUrl} download>Download Resume</a>
```

Improve the surrounding card copy and layout.

- [ ] **Step 4: Improve Contact**

Add LinkedIn icon support using `Linkedin` from `lucide-react`. Ensure external links use `target="_blank"` and `rel="noreferrer"` while Email remains `mailto:`.

- [ ] **Step 5: Improve Footer**

Render quick navigation links from `navigation` plus social links for Facebook, GitHub, LinkedIn, and Email.

- [ ] **Step 6: Run checks**

Run: `pnpm test`

Expected: FAIL only for UX helper and metadata checks if those are not complete yet.

## Task 5: Add Subtle UX Helpers

**Files:**
- Create: `src/components/ScrollProgress.jsx`
- Create: `src/components/BackToTop.jsx`
- Modify: `src/components/Navbar.jsx`
- Modify: `src/App.jsx`
- Modify: `src/index.css`

- [ ] **Step 1: Add scroll progress**

Create a fixed top progress bar that updates from `window.scrollY` and hides from assistive tech with `aria-hidden="true"`.

- [ ] **Step 2: Add back-to-top button**

Create a fixed button that appears after scrolling down, calls `window.scrollTo({ top: 0, behavior: 'smooth' })`, and has `aria-label="Back to top"`.

- [ ] **Step 3: Add active nav tracking**

In `Navbar.jsx`, observe section IDs from `navigation`, set `activeSection`, and apply a stronger class when a link is active.

- [ ] **Step 4: Wire helpers into the app**

Import and render:

```jsx
<ScrollProgress />
<Navbar />
...
<BackToTop />
```

- [ ] **Step 5: Add CSS polish**

Add subtle background animation, card hover consistency, focus-visible polish, and reduced-motion overrides.

- [ ] **Step 6: Run checks**

Run: `pnpm test`

Expected: PASS once metadata is updated.

## Task 6: Update SEO, Accessibility, and Metadata

**Files:**
- Modify: `index.html`
- Modify: `src/index.css`
- Modify: `scripts/check-portfolio.mjs`

- [ ] **Step 1: Add favicon support**

Add inline SVG favicon support:

```html
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
```

Create `public/favicon.svg`.

- [ ] **Step 2: Complete Open Graph metadata**

Add:

```html
<meta property="og:url" content="https://theresiansquest.com/" />
<meta property="og:site_name" content="Vincent Angelo Tafalla Portfolio" />
<meta name="twitter:card" content="summary_large_image" />
```

- [ ] **Step 3: Verify labels and focus states**

Ensure all icon buttons have aria labels and all primary controls have visible focus states.

- [ ] **Step 4: Run checks**

Run: `pnpm test`

Expected: PASS.

## Task 7: Build and Quality Assurance

**Files:**
- All changed files

- [ ] **Step 1: Build production bundle**

Run: `pnpm build`

Expected: Vite production build completes successfully.

- [ ] **Step 2: Start preview server**

Run: `pnpm preview --host 127.0.0.1 --port 4173`

Expected: Local preview URL is available.

- [ ] **Step 3: Visual QA desktop and laptop**

Check 1440x900 and 1280x800. Confirm no horizontal overflow, balanced hero spacing, featured project prominence, readable resume section, and consistent card sizing.

- [ ] **Step 4: Visual QA tablet and mobile**

Check 768x1024 and 390x844. Confirm navigation works, contact cards stack cleanly, project buttons fit, resume preview remains usable, and no text overlaps.

- [ ] **Step 5: Browser behavior QA**

Confirm all buttons and links:

- Theresian's Quest Live Website opens `https://theresiansquest.com/`
- GitHub Repository opens the configured GitHub URL in a new tab
- Facebook opens in a new tab
- GitHub opens in a new tab
- LinkedIn opens in a new tab
- Email opens `mailto:vincenttafalla2@gmail.com`
- Open PDF opens `/resume.pdf`
- Download Resume downloads `/resume.pdf`

- [ ] **Step 6: Console and overflow QA**

Confirm no console errors and no horizontal overflow at all tested widths.

- [ ] **Step 7: Final employer/client review**

Review the full site as a first-time employer or freelance client. Polish any inconsistent spacing, typography, buttons, cards, or layouts while preserving the current design direction.
