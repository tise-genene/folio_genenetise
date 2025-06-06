import React from 'react'
import { socials } from '@/appData/personal'
import Logo from '../Navbar/Logo'

interface SocialLink {
  href: string
  icon: React.ReactNode
}

const Footer = () => {
  return (
    <footer className="bg-secondary relative flex flex-col items-center justify-center gap-8 py-12">
      <div className="flex flex-col items-center text-center">
        <h5 className="mb-4 flex items-center gap-2">
          <Logo width={30} height={24} />
          <span className="text-neutral text-lg font-medium">Genene</span>
        </h5>
        <p className="text-tertiary-content mb-4">
          Software Developer & Problem Solver
        </p>
        <div className="flex gap-4">
          {socials.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-neutral hover:text-accent transition-colors duration-300"
              title={
                index === 0 ? 'GitHub' :
                index === 1 ? 'LinkedIn' :
                index === 2 ? 'Twitter' :
                `Link ${index + 1}`
              }
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <p className="text-tertiary-content text-sm">
        © {new Date().getFullYear()} Genene. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
