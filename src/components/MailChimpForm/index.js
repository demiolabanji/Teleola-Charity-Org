import React, { useEffect } from 'react'
import './styles.css' // Import the external CSS

const MailChimpForm = () => {
  useEffect(() => {
    // Load the MailChimp script
    const script = document.createElement('script')
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'
    script.type = 'text/javascript'
    document.body.appendChild(script)

    script.onload = () => {
      // Your Mailchimp script content here
      ;(function ($) {
        window.fnames = []
        window.ftypes = []
        window.fnames[0] = 'EMAIL'
        window.ftypes[0] = 'email'
        // ...and so on for the other fields
      })(window.jQuery)
    }

    // Cleanup the script when component unmounts
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div id="mc_embed_shell">
      <div id="mc_embed_signup">
        <form
          action="https://gmail.us21.list-manage.com/subscribe/post?u=09fbf70dec8d5abf5110724ab&amp;id=0c5fce002e&amp;f_id=00fde9e6f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
              />
              <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
            </div>
            <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              ></div>
            </div>
            <div
              aria-hidden="true"
              style={{ position: 'absolute', left: '-5000px' }}
            >
              <input
                type="text"
                name="b_09fbf70dec8d5abf5110724ab_0c5fce002e"
                tabIndex="-1"
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <br />
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  value="Subscribe"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MailChimpForm
