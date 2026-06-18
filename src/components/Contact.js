import React from 'react';
import { Facebook, Github, Linkedin, Mail, MoveUpRight } from 'lucide-react';
import { contacts } from '../data/portfolio.js';

const icons = {
  Facebook,
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin
};

function Contact() {
  return (
    <section id="contact" className="border-y border-white/[0.08] bg-ink-900/[0.62]">
      <div className="section-shell" data-reveal>
        <p className="section-eyebrow">Contact</p>
        <h2 className="section-heading">Let&apos;s connect</h2>
        <p className="section-copy">
          Reach out for freelance projects, employment opportunities, collaboration, or a quick conversation about building web applications.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {contacts.map((contact) => {
            const Icon = icons[contact.type];
            const isEmail = contact.href.startsWith('mailto:');

            return (
              <a
                key={contact.type}
                href={contact.href}
                target={isEmail ? undefined : '_blank'}
                rel={isEmail ? undefined : 'noreferrer'}
                className="card-surface group flex min-h-44 flex-col justify-between p-5 transition duration-200 hover:-translate-y-1 hover:border-accent-300/40 hover:bg-white/[0.06] hover:shadow-soft focus:outline-none focus:ring-2 focus:ring-accent-300 focus:ring-offset-2 focus:ring-offset-ink-900"
                aria-label={`Open ${contact.type} contact: ${contact.label}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-accent-400/10 text-accent-100 transition group-hover:bg-accent-400/[0.16]">
                    {Icon ? <Icon size={23} aria-hidden="true" /> : null}
                  </span>
                  <MoveUpRight size={18} className="text-slate-500 transition group-hover:text-accent-100" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{contact.type}</h3>
                  <p className="mt-2 break-words text-sm text-slate-300">{contact.label}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-accent-300">{contact.value}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;
