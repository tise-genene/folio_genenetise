export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4 text-primary-content">404 - Not Found</h1>
      <p className="text-lg mb-6 text-secondary-content">The page you requested could not be found.</p>
    </div>
  )
}
