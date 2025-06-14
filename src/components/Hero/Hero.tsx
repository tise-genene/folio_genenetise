'use client'
import useRoleSwitcher from '@/hooks/useRoleSwitcher'
import useRotatingAnimation from '@/hooks/useRotatingAnimation'
import Image from 'next/image'
import { HeroImage } from '../../utils/images'
import { MsgIcon } from '../../utils/icons'
import Ellipse from './Ellipse'

const Hero = () => {
  const ellipseRef = useRotatingAnimation()
  useRoleSwitcher({ roles: ['FULLSTACK DEVELOPER', 'FRONTEND DEVELOPER', 'BACKEND DEVELOPER'] })

  return (
    <section className="relative bg-gradient-to-br from-primary to-secondary min-h-[calc(dvh-3rem)] overflow-hidden">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 px-4 pt-16 pb-12 md:grid-cols-2 lg:p-8">
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-neutral bg-clip-text bg-gradient-to-r from-neutral to-accent">Hi - I'm Genene</h1>
            <h2 className="text-2xl font-semibold text-accent">Fullstack Web & Mobile Developer</h2>
          </div>

          <p className="text-lg text-neutral/80 max-w-[600px] leading-relaxed">
            I’m a software developer from Addis Ababa, Ethiopia, I craft smart, scalable, and user-friendly digital solutions that solve real problems and drive results. Let’s turn your idea into impact.
          </p>

          <div className="mt-8 flex flex-nowrap gap-4">
            <a
              href="https://www.upwork.com/freelancers/~0135ea11e94cfe1b1c"
              aria-label="Hire me on Upwork"
              className="bg-accent text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors ease-in-out duration-200 shadow-lg hover:shadow-accent/20">
              Hire me
            </a>
            <a
              href="https://www.linkedin.com/in/genene-tise-253037234/"
              aria-label="View LinkedIn Profile"
              className="text-neutral bg-secondary cursor-pointer rounded-lg px-[14px] py-[10px] text-sm">
              LinkedIn
            </a>
            <a
              href="mailto:tisegenene@gmail.com"
              aria-label="Send email"
              className="bg-secondary text-neutral px-6 py-3 rounded-full text-sm flex items-center gap-3 hover:bg-secondary/90 transition-colors ease-in-out duration-200 shadow-lg hover:shadow-secondary/20">
              <MsgIcon className="w-4 h-4" />
              Email
            </a>
          </div>
        </div>

        <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]">
          <div className="text-accent relative size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem]">
            <Image
              src={HeroImage}
              fill={true}
              priority={true}
              sizes="(min-width: 1024px) 25.75rem, (min-width: 768px) 20rem, (min-width: 640px) 15rem, 14rem"
              alt="GeneneT - Full Stack Developer"
              className="object-contain p-7"
            />
            <Ellipse
              ref={ellipseRef}
              className="absolute top-0 left-0 size-56 transition-transform duration-500 ease-out sm:size-60 md:size-[20rem] lg:size-[25.75rem]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
