'use server'

const action = async (_: { success: boolean; message: string } | null, formData: FormData) => {
  try {
    // Validate form data
    const name = formData.get('name')
    if (!name)
      return {
        success: false,
        message: 'Please provide your name.',
      }

    const email = formData.get('email')
    if (!email)
      return {
        success: false,
        message: 'Please provide your email address.',
      }

    const subject = formData.get('subject')
    if (!subject)
      return {
        success: false,
        message: 'Please provide a subject.',
      }

    const message = formData.get('message')
    if (!message)
      return {
        success: false,
        message: 'Please provide a message.',
      }

    // Check if we're in development mode
    if (process.env.NODE_ENV === 'development') {
      // In development, just log the form data
      console.log('Development mode - Form data:', {
        name,
        email,
        subject,
        message,
      })
      return {
        success: true,
        message: 'Thanks for your submission! (Development mode)',
      }
    }

    // Production form submission
    const res = await fetch('https://submit.formspark.io/f/Nx0IFSCwx', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    if (res.ok) {
      return { success: true, message: 'Thanks for your submission!' }
    } else {
      const data = await res.json()
      console.error('Form submission error:', data?.error)

      return {
        success: false,
        message: 'Oops! There was a problem submitting your form. Please try again later.',
      }
    }
  } catch (error) {
    console.error('Form submission error:', error)
    return {
      success: false,
      message: 'Oops! There was a problem submitting your form. Please try again later.',
    }
  }
}

export default action
