'use client'

import { ExperienceCard } from './ExperienceCard'
import SectionHeading from '../SectionHeading/SectionHeading'
import SectionContainer from '../UI/SectionContainer'

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
      title: "Bachelor of Science in Information Systems",
      company: "Addis Ababa University",
      role: "Student",
      date: "2020 - 2024",
      description: "Studied information systems with a focus on software engineering and web development.",
      tech: ["Java", "Python", "C++", "Data Structures"],
      type: 'education'
    },
    {
      title: "From Zero to Hero - Digital Product Development From Scratch",
      company: "Technical University of Munich (TUM)",
      role: "Certificate",
      date: "Dec 2024",
      description: "Credential ID: QTTSZZUUXE5Y",
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
    <section id="experiences" className="mt-16">
      <div className="mb-8">
        <SectionHeading title="// Experience" />
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-accent/20" />

        {/* Timeline dots */}
        {experiences
          .filter(exp => exp.type === 'work')
          .map((_, index) => (
            <div
              key={index}
              className={`absolute left-1/2 transform -translate-x-1/2 ${index === 0 ? 'top-0' : 'mt-16'}`}
            >
              <div className={`w-3 h-3 rounded-full ${
                index === 0 ? 'bg-yellow-500' :
                index === 1 ? 'bg-purple-500' :
                index === 2 ? 'bg-blue-500' :
                index === 3 ? 'bg-green-500' : 'bg-accent'
              }`} />
            </div>
          ))}

        {/* Experience cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
                isLeft={index % 2 === 0}
              />
            ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-16">
        <div className="mb-8">
          <SectionHeading title="// Education" />
        </div>
        <SectionContainer>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
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
        </SectionContainer>
      </div>
    </section>
  );
};

export default Experiences;