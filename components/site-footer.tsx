import { site } from "@/lib/site";

const footerLinks = [
  { label: "GitHub", href: site.github, className: "text-brand-emerald ring-brand-emerald/45 hover:shadow-emerald-500/30" },
  { label: "GitLab", href: site.gitlab, className: "text-brand-violet ring-brand-violet/40 hover:shadow-violet-500/30" },
  { label: "LinkedIn", href: site.linkedin, className: "text-brand-cyan ring-brand-teal/40 hover:shadow-teal-500/30" },
  { label: "Email", href: site.email, className: "text-brand-cyan ring-brand-teal/45 hover:shadow-teal-500/25" },
] as const;

const pillBase =
  "rounded-full px-4 py-1.5 ring-1 transition-colors hover:text-foreground";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="scroll-mt-32 border-t border-border/75 bg-[radial-gradient(circle_at_50%_-20%,oklch(0.5_0.14_174_/0.2),transparent_55%)] py-10 text-[13px] text-muted-foreground"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-foreground/80">
          {site.name}{" "}
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand-teal-muted">
            / backend-focused
          </span>
        </p>

        <div className="flex flex-wrap gap-3 font-mono text-[11px] uppercase tracking-[0.22em] sm:gap-4">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${pillBase} ${link.className} hover:bg-brand-emerald/15 hover:shadow-lg`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.resumePath}
            download
            className={`${pillBase} text-brand-cyan ring-brand-violet/40 hover:bg-brand-violet/15 hover:shadow-lg hover:shadow-violet-500/25`}
          >
            Resume
          </a>
        </div>
      </div>

      <div className="mt-8 h-[2px] w-full bg-gradient-to-r from-brand-violet via-brand-teal to-brand-cyan opacity-95" />
    </footer>
  );
}
