// Disable ESLint rules for this file
/* eslint-disable */

'use client'

export const metadata = {
  title: 'Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-lg mb-6">The page you are looking for does not exist.</p>
      <a
        href="/"
        className="text-primary hover:text-primary/80 transition-colors duration-200"
      >
        Return to Home
      </a>
    </div>
  )
}