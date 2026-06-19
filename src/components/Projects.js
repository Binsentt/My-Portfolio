import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolio.js';
import theresiansQuestPreview from '../assets/theresians-quest-preview.png';

const isExternalLink = (href = '') => href.startsWith('http');
const projectPreviewFor = (project) => (project.featured ? theresiansQuestPreview : project.image);

function ProjectActions({ project, compact = false }) {
  const hasRepositoryLink = Boolean(project.links.github);
  const liveClassName = compact ? 'button-secondary px-3 py-2 text-center' : 'button-primary px-4 py-2 text-center';
  const githubClassName = compact ? 'button-secondary px-3 py-2 text-center' : 'button-secondary px-4 py-2 text-center';

  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2">
      <a
        href={project.links.live}
        className={liveClassName}
        target={isExternalLink(project.links.live) ? '_blank' : undefined}
        rel={isExternalLink(project.links.live) ? 'noreferrer' : undefined}
        aria-label={`Open live website for ${project.title}`}
      >
        <ExternalLink size={compact ? 16 : 17} aria-hidden="true" />
        Live Demo
      </a>
      {hasRepositoryLink ? (
        <a
          href={project.links.github}
          className={githubClassName}
          target={isExternalLink(project.links.github) ? '_blank' : undefined}
          rel={isExternalLink(project.links.github) ? 'noreferrer' : undefined}
          aria-label={`Open GitHub repository for ${project.title}`}
        >
          <Github size={compact ? 16 : 17} aria-hidden="true" />
          GitHub Repo
        </a>
      ) : (
        <span
          className={`${githubClassName} cursor-not-allowed opacity-60`}
          aria-disabled="true"
          aria-label={`GitHub repository link for ${project.title} is not configured yet`}
          role="link"
        >
          <Github size={compact ? 16 : 17} aria-hidden="true" />
          GitHub Repo
        </span>
      )}
    </div>
  );
}

function Projects() {
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const supportingProjects = projects.filter((project) => project.title !== featuredProject.title);

  return (
    <section id="projects" className="border-y border-white/[0.08] bg-ink-900/[0.62]">
      <div className="section-shell" data-reveal>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-eyebrow">Projects</p>
            <h2 className="section-heading">Featured project</h2>
            <p className="section-copy">
              A capstone showcase with a focused overview, clear technology badges, and direct access to the live website.
            </p>
          </div>
        </div>

        {featuredProject && (
          <article className="card-surface group mt-10 grid overflow-hidden transition duration-200 hover:-translate-y-1 hover:border-accent-300/35 hover:shadow-soft lg:grid-cols-[minmax(0,1.28fr)_minmax(300px,0.72fr)]">
            <div className="aspect-[2/1] overflow-hidden border-b border-white/10 bg-ink-800 lg:aspect-auto lg:min-h-[28rem] lg:border-b-0 lg:border-r">
              <img
                src={projectPreviewFor(featuredProject)}
                alt={`${featuredProject.title} project preview`}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col justify-center p-5 sm:p-7">
              <p className="section-eyebrow text-xs">{featuredProject.eyebrow ?? 'Featured Project'}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{featuredProject.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{featuredProject.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.tech.map((tech) => (
                  <span key={tech} className="rounded-full bg-accent-400/10 px-3 py-1.5 text-xs font-medium text-accent-100">
                    {tech}
                  </span>
                ))}
              </div>

              <ProjectActions project={featuredProject} />
            </div>
          </article>
        )}

        {supportingProjects.length > 0 && (
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {supportingProjects.map((project) => (
              <article key={project.title} className="card-surface group flex min-h-full flex-col overflow-hidden transition duration-200 hover:-translate-y-1 hover:border-accent-300/35">
                <div className="aspect-[16/10] overflow-hidden border-b border-white/10 bg-ink-800">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.025]"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full bg-accent-400/10 px-3 py-1.5 text-xs font-medium text-accent-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ProjectActions project={project} compact />
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
