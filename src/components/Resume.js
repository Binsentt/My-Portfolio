import React from 'react';
import { ArrowDownToLine, Eye, FileText, FolderOpen } from 'lucide-react';
import { profile } from '../data/portfolio.js';

const resumeHighlights = [
  {
    icon: Eye,
    title: 'Preview ready',
    copy: 'Embedded PDF viewer for quick review.'
  },
  {
    icon: ArrowDownToLine,
    title: 'Download ready',
    copy: 'Direct PDF download for employers and clients.'
  },
  {
    icon: FolderOpen,
    title: 'Consistent access',
    copy: 'The same PDF is used for preview, opening, and download.'
  }
];

function Resume() {
  return (
    <section id="resume">
      <div className="section-shell" data-reveal>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.62fr)_minmax(340px,0.9fr)] lg:items-start">
          <div>
            <p className="section-eyebrow">Resume</p>
            <h2 className="section-heading">Preview and download</h2>
            <p className="section-copy">
              A quick view of my current resume for recruiters, employers, and clients who want a concise look at my background and development focus.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="button-secondary">
                <FileText size={18} aria-hidden="true" />
                Open PDF
              </a>
              <a href={profile.resumeUrl} download className="button-primary">
                <ArrowDownToLine size={18} aria-hidden="true" />
                Download Resume
              </a>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {resumeHighlights.map(({ icon: Icon, title, copy }) => (
                <div key={title} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                  <Icon size={18} className="text-accent-100" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold text-white">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface overflow-hidden p-3 shadow-soft">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 px-2 pb-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                <FileText size={17} aria-hidden="true" />
                Resume preview
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-300">PDF</span>
            </div>
            <object
              data={profile.resumeUrl}
              type="application/pdf"
              className="mt-3 h-[32rem] w-full rounded-md bg-ink-800 sm:h-[38rem] lg:h-[42rem]"
              aria-label={`${profile.name} resume preview`}
            >
              <div className="grid min-h-72 place-items-center rounded-md bg-ink-800 p-6 text-center">
                <p className="max-w-sm text-sm leading-6 text-slate-300">
                  The resume preview is not available in this browser. Use the open or download button to view the PDF.
                </p>
              </div>
            </object>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
