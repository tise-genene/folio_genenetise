'use client'

import { ExperienceCard } from './ExperienceCard'
import SectionHeading from '../SectionHeading/SectionHeading'

interface Experience {
  title: string
  company: string
  role: string
  date: string
  description: string
  tech: string[]
  type: 'education' | 'work'
}

const Experiences = () => {
  const experiences: Experience[] = [
    // Education
    {
      title: "Bachelor's degree",
      company: "Addis Ababa University",
      role: "Information Systems",
      date: "September 2021 - July 2024",
      description: "",
      tech: [],
      type: 'education'
    },
    // Work Experience
    {
      title: "Software Engineer",
      company: "Commercial Bank of Ethiopia",
      role: "Software Engineer",
      date: "Nov 2024 - Present",
      description: "Designed, developed, and maintained CBE's corporate website, improving performance, accessibility, and UI/UX",
      tech: ["React.js", "Flutter"],
      type: 'work'
    },
    {
      title: "Software Developer",
      company: "Eagle Educational Consult PLC",
      role: "Software Developer",
      date: "Aug 2023 - Nov 2024",
      description: "Developed a LMS with advanced features. Worked on a project for connecting parents/students with experienced tutors.",
      tech: ["React.js", "Tailwind CSS"],
      type: 'work'
    },
    {
      title: "Emerging Technologist Fellow",
      company: "Millennium Campus Network (MCN)",
      role: "Emerging Technologist Fellow",
      date: "Aug 2023 - Jan 2024",
      description: "Taught basic programming for over 100 highschool students. Featured on MCN website.",
      tech: [],
      type: 'work'
    },
    {
      title: "Software Developer",
      company: "Ethiopian Science and Technology Agency",
      role: "Software Developer",
      date: "Jun 2023 - Aug 2023",
      description: "Contributed fully functional two module for HRMS project. Tech Stack: HTML, CSS, JS, PHP-Laravel, MySQL",
      tech: ["HTML", "CSS", "JavaScript", "PHP-Laravel", "MySQL"],
      type: 'work'
    }
  ];

  return (
    <section id="experiences">
      <div className="my-8">
        {/* Education Section */}
        <div className="mb-8">
          <SectionHeading title="// Education" />
        </div>

        <div className="grid grid-cols-1 gap-8 mb-12">
          {experiences
            .filter(exp => exp.type === 'education')
            .map((exp, index) => (
              <ExperienceCard
                key={index}
                title={exp.title}
                company={exp.company}
                role={exp.role}
                date={exp.date}
                description={exp.description}
                tech={exp.tech}
                type={exp.type}
              />
            ))}
        </div>

        {/* Experience Section */}
        <div className="mb-8">
          <SectionHeading title="// Experience" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-accent/20" />
          
          {experiences
            .filter(exp => exp.type === 'work')
            .map((exp, index) => (
              <ExperienceCard
                key={index}
                title={exp.title}
                company={exp.company}
                role={exp.role}
                date={exp.date}
                description={exp.description}
                tech={exp.tech}
                type={exp.type}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;