import { serviceData } from '../../appData'
import SectionHeading from '../SectionHeading/SectionHeading'
import ServiceCard from './ServiceCard'
import SectionContainer from '../UI/SectionContainer'

const ServiceSection = () => {
  return (
    <div className="mt-16">
      <div className="mb-8">
        <SectionHeading
          title="<Services />"
          subtitle="Building modern web solutions that drive business growth and user engagement."
        />
      </div>
      <SectionContainer>
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              shortDescription={service.shortDescription}
            />
          ))}
        </div>
      </SectionContainer>
    </div>
  )
}

export default ServiceSection
