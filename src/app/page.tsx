import { skillList, projects, testimonials } from '@/appData'
import ContactSection from '@/components/Contact/ContactSection'
import Hero from '@/components/Hero/Hero'
import ProjectSection from '@/components/Projects/ProjectSection'
import ServiceSection from '@/components/Services/ServiceSection'
import Skills from '@/components/Skills/Skills'
import TestimonialSection from '@/components/Testimonials/TestimonialSection'
import Experiences from '@/components/Experiences/Experiences'

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem]">
        <Skills skills={skillList} />
        <Experiences />
        <ProjectSection projects={projects} />
        <ServiceSection />
        <TestimonialSection testimonials={testimonials} />
        <ContactSection />
      </div>
    </main>
  )
}
