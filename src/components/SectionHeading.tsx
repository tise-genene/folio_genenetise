'use client'

interface SectionHeadingProps {
  title: string
}

const SectionHeading = ({ title }: SectionHeadingProps) => {
  return (
    <div className="mb-8">
      <h2 className="gradient-text text-3xl font-bold md:text-4xl">{title}</h2>
    </div>
  )
}

export default SectionHeading
