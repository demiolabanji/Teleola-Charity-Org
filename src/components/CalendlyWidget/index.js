import React, { useEffect } from 'react'

const CalendlyWidget = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true

    // Append the script to the body
    document.body.appendChild(script)

    // Clean up
    return () => {
      // Remove the script from the body on component unmount
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/prophetessteleola/30min"
      style={{ minWidth: '300px', height: '1000px' }}
    />
  )
}

export default CalendlyWidget
