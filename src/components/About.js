import React from 'react';
import { Bot, CheckCircle2, Compass, Layers3, Target } from 'lucide-react';
import { profile } from '../data/portfolio.js';

const profileCards = [
  {
    icon: Compass,
    title: 'Developer journey',
    copy: profile.journey
  },
  {
    icon: Target,
    title: 'Career objective',
    copy: profile.objective
  }
];

function About() {
  return (
    <section id="about" className="border-y border-white/[0.08] bg-ink-900/[0.62]">
      <div className="section-shell" data-reveal>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(300px,0.55fr)]">
          <div>
            <p className="section-eyebrow">About</p>
            <h2 className="section-heading">Professional summary</h2>
            <p className="section-copy">{profile.summary}</p>

            <div className="mt-8 grid gap-4">
              {profileCards.map(({ icon: Icon, title, copy }) => (
                <article key={title} className="rounded-lg border border-white/[0.08] bg-white/[0.035] p-5">
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent-400/10 text-accent-100">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base">{copy}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="card-surface p-5">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent-400/10 text-accent-100">
                  <Layers3 size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">Full stack mindset</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Comfortable connecting clean frontend experiences with practical backend and database decisions that support real workflows.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-surface p-5">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent-400/10 text-accent-100">
                  <CheckCircle2 size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">Professional habits</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Focused on readable code, responsive design, accessible interactions, careful testing, and steady project improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 card-surface p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent-400/10 text-accent-100">
              <Bot size={22} aria-hidden="true" />
            </span>
            <div>
              <p className="section-eyebrow text-xs">AI assistance</p>
              <h3 className="mt-2 text-xl font-semibold text-white">Modern tools, responsible development</h3>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300 sm:text-base">{profile.aiStatement}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
