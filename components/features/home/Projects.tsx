import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/features/home/SectionHeader";
import { ProjectCard } from "@/components/common/ProjectCard";
import { PROJECTS } from "@/constants/project";

export function Projects() {
  return (
    <Section id="projects" className="space-y-15">
      <SectionHeading
        title="Recent Projects"
        description="Here are some of the projects I've worked on recently."
      >
       <Link
  href="/projects"
  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-blue-500 
    text-blue-500 text-sm font-medium hover:bg-blue-500 hover:text-white 
    transition-colors duration-200"
>
  View More <ArrowRight className="h-4 w-4" />
</Link>
      </SectionHeading>

      {/* Project Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.slice(0, 3).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}