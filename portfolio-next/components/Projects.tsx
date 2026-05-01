import { projects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="bg-bg px-6 py-24 md:px-12 md:py-32">
      <SectionHeader
        label="Selected Work"
        title="Projects"
        subtitle="A collection of mobile and web applications built with Flutter, React Native & React."
      />
      <div className="flex flex-col gap-[3px]">
        {projects.map((project, i) => (
          <Reveal key={project.num}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
