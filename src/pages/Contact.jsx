import React from 'react'

const Contact = () => {
  return (
    <section className='pt-5'>
      <div className='px-4 mx-auto max-w-screen-md '>
        <h2 className='heading text-center'>Contact us</h2>
        <p className='text_para text-center'>
          Do you have technical issue? Do you want to send a Feedback about us? Let us know
        </p>
        <form action='#' className='space-y-8 pt-4'>
          <div>
            <label htmlFor='email' className='form_label'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='form_input mt-1'
              placeholder='Enter your email'
            />
          </div>

          <div>
            <label htmlFor='email' className='form_label'>
              Message
            </label>
            <input
              type='email'
              id='email'
              className='form_input mt-1'
              placeholder='Enter your email'
            />
          </div>
        </form>

      </div>
    </section>
  )
}

export default Contact