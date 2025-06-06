'use client'

import SectionHeading from '../SectionHeading/SectionHeading'

const EducationSection = () => {
  return (
    <section id="education" className="education-section">
      <div className="mx-auto max-w-[1200px] px-4">
        <SectionHeading title="// Education" />
        <div className="my-8">
          <div className="border-border bg-secondary rounded-xl border p-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-accent text-lg font-medium">Addis Ababa University</h3>
              <p className="text-neutral text-sm">Bachelor's degree, Information Systems</p>
              <p className="text-tertiary-content text-sm">September 2021 - July 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection
