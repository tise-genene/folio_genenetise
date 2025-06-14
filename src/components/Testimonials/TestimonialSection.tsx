'use client'

import { Testimonial } from '@/lib/types'
import { useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import TestimonialCard from './TestimonialCard'
import SectionContainer from '../UI/SectionContainer'

interface TestimonialSectionProps {
  testimonials: Testimonial[]
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonials }) => {
  const [activeCard, setActiveCard] = useState(0)

  return (
    <div className="mt-16">
      <div className="mb-8">
        <SectionHeading
          title="<Testimonials />"
          subtitle="Real success stories from businesses and teams I've helped grow through modern web solutions"
        />
      </div>
      <SectionContainer>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-[1200px] mx-auto px-4">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              testimonial={testimonial}
              handleActiveCard={() => {
                setActiveCard(idx)
              }}
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-1 sm:hidden">
          {testimonials.map((_, idx) => (
            <div
              key={idx}
              className={`${idx === activeCard ? 'bg-accent size-[12px]' : 'size-[10px] bg-white/50'} rounded-full`}
            />
          ))}
        </div>
      </SectionContainer>
    </div>
  )
}

export default TestimonialSection
