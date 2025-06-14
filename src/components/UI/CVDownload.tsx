import SectionHeading from '../SectionHeading/SectionHeading'
import SectionContainer from './SectionContainer'

interface CVDownloadProps {
  className?: string
}

const CVDownload: React.FC<CVDownloadProps> = ({ className = '' }) => {
  return (
    <div className={`mt-16 ${className}`}>
      <div className="mb-8">
        <SectionHeading
          title="<CV />"
          subtitle="Get my detailed resume"
        />
      </div>
      <SectionContainer>
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <p className="text-neutral/80 max-w-[600px]">
            Want the full resume? Download my detailed CV for a complete overview of my experience.
          </p>
          <a
            href="/docs/cv.pdf"
            download
            className="bg-accent text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors ease-in-out duration-200 shadow-lg hover:shadow-accent/20"
          >
            Download CV
          </a>
        </div>
      </SectionContainer>
    </div>
  )
}

export default CVDownload
