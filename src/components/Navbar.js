import React from 'react';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation, profile } from '../data/portfolio.js';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, []);

  useEffect(() => {
    const sectionIds = navigation.map((item) => item.href.replace('#', ''));
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    if (!('IntersectionObserver' in window) || sections.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0.08, 0.18, 0.32]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (event, href) => {
    if (href?.startsWith('#')) {
      const target = document.getElementById(href.slice(1));

      if (target) {
        event.preventDefault();

        if (window.location.hash !== href) {
          window.history.pushState(null, '', href);
        }

        const scrollMarginTop = parseFloat(window.getComputedStyle(target).scrollMarginTop) || 0;
        const top = target.getBoundingClientRect().top + window.scrollY - scrollMarginTop;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        window.requestAnimationFrame(() => {
          window.scrollTo({
            top: Math.max(0, top),
            behavior: prefersReducedMotion ? 'auto' : 'smooth'
          });
        });

        setActiveSection(target.id);
      }
    }

    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/[0.82] backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a href="#home" className="group flex items-center gap-3" onClick={(event) => handleLinkClick(event, '#home')}>
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent-300/30 bg-accent-400/10 text-sm font-bold text-accent-100 transition group-hover:border-accent-300/70">
            VT
          </span>
          <span className="hidden text-sm font-semibold text-white sm:inline">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-accent-300 ${
                activeSection === item.href.slice(1)
                  ? 'bg-accent-400/10 text-accent-100'
                  : 'text-slate-300 hover:bg-white/[0.06] hover:text-white'
              }`}
              aria-current={activeSection === item.href.slice(1) ? 'page' : undefined}
              onClick={(event) => handleLinkClick(event, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-100 transition hover:border-accent-300/60 hover:bg-accent-400/10 focus:outline-none focus:ring-2 focus:ring-accent-300 lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/10 bg-ink-900/[0.98] px-5 py-4 shadow-soft transition lg:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-2">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className={`rounded-lg px-3 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-accent-300 ${
                activeSection === item.href.slice(1)
                  ? 'bg-accent-400/10 text-accent-100'
                  : 'text-slate-200 hover:bg-white/[0.06] hover:text-white'
              }`}
              aria-current={activeSection === item.href.slice(1) ? 'page' : undefined}
              onClick={(event) => handleLinkClick(event, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
