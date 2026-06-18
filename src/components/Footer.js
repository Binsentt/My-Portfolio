import React from 'react';
import { Facebook, Github, Linkedin, Mail } from 'lucide-react';
import { navigation, profile } from '../data/portfolio.js';

const footerLinks = [
  { label: 'Facebook', href: profile.facebookUrl, icon: Facebook },
  { label: 'GitHub', href: profile.githubUrl, icon: Github },
  { label: 'LinkedIn', href: profile.linkedinUrl, icon: Linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail }
];

function Footer() {
  return (
    <footer className="bg-ink-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)_auto] lg:items-center lg:px-8">
        <div>
          <p className="text-base font-semibold text-white">{profile.name}</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
            Full Stack Web Developer building clean, responsive web applications with modern tools.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Footer navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-400 transition hover:text-accent-100 focus:outline-none focus:ring-2 focus:ring-accent-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-wrap gap-2">
          {footerLinks.map(({ label, href, icon: Icon }) => {
            const isEmail = href.startsWith('mailto:');

            return (
              <a
                key={label}
                href={href}
                target={isEmail ? undefined : '_blank'}
                rel={isEmail ? undefined : 'noreferrer'}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-0.5 hover:border-accent-300/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-300"
                aria-label={label}
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>

      <div className="border-t border-white/[0.08] px-5 py-4 text-center text-xs text-slate-500">
        Copyright {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.
      </div>
    </footer>
  );
}

export default Footer;
