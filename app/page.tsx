import type { Metadata } from "next";

import { ExperienceSection } from "@/components/experience-section";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { SkillsSection } from "@/components/skills-section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} • ${site.title}`,
  description: site.tagline,
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description: site.tagline,
    type: "website",
    url: "/",
    siteName: site.name,
    locale: "en_US",
  },
};

export default function Page() {
  return (
    <>
      <SiteNavbar />

      <main className="flex-1 pb-14">
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
      </main>

      <SiteFooter />
    </>
  );
}
