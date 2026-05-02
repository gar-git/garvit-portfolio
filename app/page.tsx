import type { Metadata } from "next";

import { ShowcaseSection } from "@/components/showcase-section";
import { ContactSection } from "@/components/contact-section";
import { EngineeringSection } from "@/components/engineering-section";
import { ExperienceSection } from "@/components/experience-section";
import { Hero } from "@/components/hero";
import { InsightsSection } from "@/components/insights-section";
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

export default function HomePage() {
  return (
    <>
      <SiteNavbar />

      <main className="flex-1 pb-14">
        <Hero />
        <ProjectsSection />
        <ShowcaseSection />
        <SkillsSection />
        <ExperienceSection />
        <EngineeringSection />
        <InsightsSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
