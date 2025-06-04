import { MsgIcon, PhoneIcon } from '@/utils/icons'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-secondary my-4 grid grid-cols-1 gap-8 rounded-2xl p-6 md:my-12 md:grid-cols-2 md:gap-6">
      <div className="flex flex-col justify-between gap-4">
        <div>
          <h3 className="text-neutral text-2xl font-bold">Let's Talk</h3>
          <h4 className="text-accent text-xl font-bold md:text-2xl">I'd love to help</h4>
          <p className="text-neutral mt-4">
            Crafting innovative solutions to solve real-world problems
          </p>
        </div>

        <div className="space-y-1">
          <p className="text-neutral text-base font-bold">Contact Information</p>
          <a
            href="mailto:tisegenene@gmail.com"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <MsgIcon /> tisegenene@gmail.com
          </a>
          <a
            href="tel:+251932508910"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <PhoneIcon /> +251932508910
          </a>
        </div>
      </div>

      <ContactForm />
    </section>
  )
}

export default ContactSection
