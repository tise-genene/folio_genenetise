import { MsgIcon, PhoneIcon } from '@/utils/icons'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-secondary my-16 grid grid-cols-1 gap-12 rounded-3xl p-8 md:my-24 md:grid-cols-2 md:gap-12">
      <div className="flex flex-col justify-between gap-8">
        <div>
          <h3 className="text-accent text-3xl font-bold">Let's Connect</h3>
          <h4 className="text-neutral text-2xl font-bold md:text-3xl">Building Your Digital Future</h4>
          <p className="text-neutral/70 mt-4 text-lg">
            I'm passionate about creating innovative web solutions that solve real-world problems. Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-accent text-lg font-semibold">Get in Touch</p>
          <div className="space-y-3">
            <a
              href="mailto:tisegenene@gmail.com"
              className="text-neutral hover:text-accent flex items-center gap-2 rounded-lg px-4 py-2 transition-colors duration-300">
              <MsgIcon className="h-5 w-5" /> tisegenene@gmail.com
            </a>
            <a
              href="tel:+251932508910"
              className="text-neutral hover:text-accent flex items-center gap-2 rounded-lg px-4 py-2 transition-colors duration-300">
              <PhoneIcon className="h-5 w-5" /> +251932508910
            </a>
          </div>
        </div>
      </div>

      <ContactForm />
    </section>
  )
}

export default ContactSection
