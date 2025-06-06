interface SectionContainerProps {
  children: React.ReactNode
  className?: string
}

const SectionContainer = ({ children, className = '' }: SectionContainerProps) => {
  return (
    <div className={`bg-secondary/50 border-border/20 rounded-2xl border p-8 ${className}`}>
      {children}
    </div>
  )
}

export default SectionContainer
