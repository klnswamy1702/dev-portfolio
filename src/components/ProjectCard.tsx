// src/components/ProjectCard.tsx
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: any;
  git: string;
  technologies: string[];
}

export default function ProjectCard({ title, description, image, git, technologies }: ProjectCardProps) {
  return (
    <div className="max-w-sm bg-gray-900 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <a href={git} target="_blank" rel="noopener noreferrer">
        <Image src={image} alt={title} className="w-full h-56 object-cover rounded-t-lg" />
      </a>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-400 mb-2">
          {title}
        </h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, idx) => (
            <span key={idx} className="text-xs text-blue-400">
              #{tech}
            </span>
          ))}
        </div>
        <a
          href={git}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-300 border border-gray-600 rounded-lg px-3 py-2 text-sm hover:text-green-400 transition"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
