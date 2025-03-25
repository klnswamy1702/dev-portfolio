'use client';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '@/constants';
import { ExternalLink } from 'lucide-react';

export default function Experience() {
  return (
    <section className="bg-black text-white pt-20 px-4 sm:px-16 w-full overflow-x-hidden" id="experience">
      <div className="mb-12">
        <p className="text-gray-400 uppercase tracking-wide text-sm">My journey so far.</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold mt-2">Work Experience</h2>
      </div>

      <VerticalTimeline lineColor="#232631">
        {experiences.map((experience, idx) => (
          <VerticalTimelineElement
            key={idx}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#1d1836', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #232631' }}
            date={experience.duration}
            iconStyle={{ background: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            icon={
              <a href={experience.url} target="_blank" rel="noopener noreferrer" className="w-full h-full flex justify-center items-center">
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="w-[60%] h-[60%] object-contain"
                />
              </a>
            }
          >
            <div>
              <h3 className="text-white text-xl font-bold">{experience.role}</h3>
              <a
                href={experience.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-300 hover:underline inline-flex items-center gap-1"
              >
                {experience.company} <ExternalLink size={14} />
              </a>
            </div>

            <ul className="mt-4 list-disc ml-5 space-y-2">
              {experience.points.map((point, index) => (
                <li key={`exp-${idx}-${index}`} className="text-sm text-gray-200 tracking-wide">
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
