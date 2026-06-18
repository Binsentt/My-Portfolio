import React from 'react';
import { Bot, Code2, Database, Server, Sparkles, Wrench } from 'lucide-react';
import { aiTools, skillGroups } from '../data/portfolio.js';

const icons = {
  Frontend: Code2,
  Backend: Server,
  Database,
  Tools: Wrench
};

function Skills() {
  return (
    <section id="skills">
      <div className="section-shell" data-reveal>
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-heading">Technology stack</h2>
        <p className="section-copy">
          A focused toolkit for building responsive web interfaces, backend logic, database-backed features, and deployment-ready projects.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = icons[group.title];

            return (
              <article key={group.title} className="card-surface flex min-h-full flex-col p-5 transition duration-200 hover:-translate-y-1 hover:border-accent-300/35 hover:shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent-400/10 text-accent-100">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                </div>
                <p className="mt-4 min-h-12 text-sm leading-6 text-slate-400">{group.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <article className="mt-5 card-surface overflow-hidden p-5 sm:p-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent-400/10 text-accent-100">
                  <Bot size={22} aria-hidden="true" />
                </span>
                <div>
                  <p className="section-eyebrow text-xs">AI tools</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">Development assistance with clear ownership</h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                I use AI tools to support faster development, clearer debugging, continuous learning, and day-to-day productivity while keeping the final decisions, testing, and polish in my hands.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:min-w-80">
              {aiTools.map((tool) => (
                <span key={tool} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-slate-200">
                  <Sparkles size={15} className="text-accent-100" aria-hidden="true" />
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Skills;
