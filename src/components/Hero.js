import React from 'react';
import { ArrowDownToLine, BriefcaseBusiness, Github, Mail, MoveRight, Sparkles } from 'lucide-react';
import { profile } from '../data/portfolio.js';

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="hero-grid absolute inset-0 -z-10" />

      <div className="section-shell grid items-center gap-12 lg:grid-cols-[minmax(0,1.04fr)_minmax(320px,0.72fr)]">
        <div data-reveal>
          <p className="section-eyebrow">Available for freelance and employment</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-2xl font-medium text-accent-100 sm:text-3xl">{profile.role}</p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-100 sm:text-xl">{profile.tagline}</p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{profile.intro}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#projects" className="button-primary">
              <BriefcaseBusiness size={18} aria-hidden="true" />
              View Projects
            </a>
            <a href="#contact" className="button-secondary">
              <Mail size={18} aria-hidden="true" />
              Contact Me
            </a>
            <a href={profile.resumeUrl} download className="button-secondary">
              <ArrowDownToLine size={18} aria-hidden="true" />
              Download Resume
            </a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="button-secondary">
              <Github size={18} aria-hidden="true" />
              View GitHub
            </a>
          </div>
        </div>

        <aside className="card-surface relative overflow-hidden p-5 sm:p-6" data-reveal aria-label="Developer profile highlights">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-400 via-accent-300 to-white/40" />
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">Current focus</p>
              <h2 className="mt-2 text-xl font-semibold text-white">Building reliable web experiences</h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-300/30 bg-accent-400/10 px-3 py-1 text-xs font-semibold text-accent-100">
              <Sparkles size={14} aria-hidden="true" />
              Full Stack
            </span>
          </div>

          <div className="mt-6 grid gap-3">
            {['Responsive React interfaces', 'Node.js backend foundations', 'PostgreSQL data modeling', 'Deployment-ready workflows'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-white/[0.08] bg-white/[0.035] p-3">
                <span className="h-2 w-2 rounded-full bg-accent-300" />
                <span className="text-sm text-slate-200">{item}</span>
              </div>
            ))}
          </div>

          <a href="#about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-100 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-300">
            More about Vincent
            <MoveRight size={16} aria-hidden="true" />
          </a>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
