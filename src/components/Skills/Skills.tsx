'use client'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import SectionHeading from '../SectionHeading/SectionHeading'
import SectionContainer from '../UI/SectionContainer'

const MarqueeWrapper = dynamic(() => import('../Marquee/MarqueeWrapper'), { ssr: false })

type SkillsProps = {
  skills: { name: string; icon: string }[]
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="mt-16">
      <div className="mb-8">
        <SectionHeading
          title="<Skills />"
          subtitle="Technical expertise and tools I use to build modern web applications"
        />
      </div>
      <SectionContainer>
        <MarqueeWrapper className="from-primary to-primary via-marquee bg-linear-to-r">
          <div className="flex gap-8 lg:gap-24">
            {skills.map(({ name, icon }, index) => (
              <span
                key={index}
                className="font-inter text-primary-content flex items-center text-xs lg:text-base">
                <Image src={icon} alt={name} className="mx-2 size-11 lg:size-14" />
                {name}
              </span>
            ))}
          </div>
        </MarqueeWrapper>
      </SectionContainer>
    </div>
  )
}

export default Skills
