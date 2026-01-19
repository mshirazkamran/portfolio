import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='logo' className='w-36 mx-auto' />

        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='Mail icon' className='w-6 ' />
          <a
            href="mailto:mshirazkamran@gmail.com"
            className="cursor-pointer"
          >
            mshirazkamran@gmail.com
          </a>
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] py-6 mt-12'>
        <p>© 2026 Muhammad Shiraz Kamran. All rights reserved</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li><a target='_blank' href='https://www.linkedin.com/in/mshirazkamran/'>LinkedIn</a></li>
          <li><a target='_blank' href='https://github.com/mshirazkamran/'>Github</a></li>
          {/* <li><a target='_blank'href='https://x.com/mshirazkamran'>X</a></li> */}
        </ul>


      </div>



    </div>
  )
}

export default Footer
