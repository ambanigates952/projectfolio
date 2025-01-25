import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function ContactForm() {
  const [verified, setVerified] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!verified) {
      alert('Please complete the reCAPTCHA')
      return
    }
    
    // Add CSRF token to request
    const csrfToken = document.cookie.match('csrf-token=([^;]+)')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken?.[1] ?? ''
        },
        body: JSON.stringify({
          // Sanitize inputs
          name: DOMPurify.sanitize(e.target.name.value),
          email: DOMPurify.sanitize(e.target.email.value),
          message: DOMPurify.sanitize(e.target.message.value)
        })
      })
      
      if (!response.ok) throw new Error('Failed to send message')
      
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={() => setVerified(true)}
      />
    </form>
  )
} 