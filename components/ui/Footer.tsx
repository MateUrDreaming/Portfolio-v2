import React from 'react'

const Footer = () => {
  return (
    <section id='footer' className='scroll-mt-16'>
        <div className="dark:bg-slate-950 bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            <div className='container mx-auto px-4 md:px-6 py-6'> 
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Portfolio</span>
                    </a>
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://parinkasabia.com/" className="hover:underline">Parin Kasabia</a>. All Rights Reserved.</span>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Footer