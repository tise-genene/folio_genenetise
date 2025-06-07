import { Testimonial } from '@/lib/types'
import { isInViewport } from '@/utils'
import { StarIcon } from '@/utils/icons'
import { FC, useEffect, useRef } from 'react'

interface TestimonialCardProps {
  testimonial: Testimonial
  handleActiveCard: () => void
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  testimonial: { name, role, feedback, stars },
  handleActiveCard,
}) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let observer: IntersectionObserver

    if (cardRef.current) {
      observer = isInViewport(cardRef.current, handleActiveCard)
    }

    return () => {
      observer?.disconnect()
    }
  }, [cardRef, handleActiveCard])

  return (
    <div
      ref={cardRef}
      className="bg-secondary border-border flex max-w-full shrink-0 flex-col items-center justify-between gap-4 rounded-2xl border p-4 text-center sm:max-w-[425px]">
      <p className="text-neutral text-center leading-8 before:content-['“'] after:content-['”']">
        {feedback}
      </p>
      <div>
        <div className="mb-4 flex items-center gap-1.5">
          {Array.from({ length: 5 }, (_, idx) => (
            <StarIcon key={idx} className={idx < stars ? 'text-tag' : 'text-transparent'} />
          ))}
        </div>
        <div>
          <p className="text-neutral text-lg font-semibold">{name}</p>
          <p className="text-neutral/60 text-sm">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
