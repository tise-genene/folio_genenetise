interface ExperienceCardProps {
  title: string
  company: string
  role: string
  date: string
  description: string
  tech: string[]
  type: 'education' | 'work'
  isLeft?: boolean
}

const ExperienceCard = ({
  title,
  company,
  role,
  date,
  description,
  tech,
  type,
  isLeft
}: ExperienceCardProps) => {
  const isEducation = type === 'education'
  
  return (
    <div className={`bg-secondary border-border flex flex-col justify-between rounded-[14px] border p-5 ${isLeft ? 'md:ml-auto' : 'md:mr-auto'}`}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <div className="flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center">
            <h3 className="text-secondary-content text-lg font-medium md:font-semibold">{title}</h3>
            <span className={`h-7 w-fit rounded-md bg-[#FFFFFF1A] p-1 text-sm ${
              isEducation ? 'text-accent' : 'text-tag'
            } backdrop-blur-[80px]`}>
              {isEducation ? 'Education' : 'Work'}
            </span>
          </div>
          {company && <p className="text-sm text-neutral">{company}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <span className="text-accent/80">{role}</span>
          <span className="text-neutral/60">•</span>
          <span className="text-neutral/60">{date}</span>
        </div>

        {description && (
          <div className="bg-primary text-primary-content rounded-2xl px-4 py-2">
            <p className="text-sm">{description}</p>
          </div>
        )}

        {tech.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tech.map((techItem, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-accent/10 text-accent/80 rounded-full text-sm"
              >
                {techItem}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export { ExperienceCard }
