'use client';

import { projects } from '../constants';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <section className="bg-black text-white py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12">My Projects</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
