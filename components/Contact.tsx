import Link from 'next/link'
import React from 'react'
import EmailForm from './ui/EmailForm'

const Contact = () => {
  return (
    <section id='contact' className='scroll-mt-5'>
           <div className='relative flex items-center justify-center' >
                <div className="container flex-grow px-4 py-5 mx-auto ">
                    <div className="container mx-auto px-4 md:px-6 py-5"> 
                        <h1 className="text-xl text-center font-bold leading-snug tracking-wide text-slate-900 lg:text-3xl dark:text-white">
                            <span className="text-blue-500 pt-10"> Lets get in touch </span>
                        </h1>
                        <p className="text-center text-gray-500 dark:text-gray-400 mt-2">
                            Contact me at <Link className='underline' href="mailto:pkasabia0909@gmail.com">pkasabia0909@gmail.com</Link>  or through the form below.
                        </p>
                          <EmailForm />
                      </div>
                </div>
            </div>
        </section>
  )
}

export default Contact