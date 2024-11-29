import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="py-10 px-4 md:px-10 lg:px-20 my-10 font-sans">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 w-full">
            <div>
                <h1 className='text-xl font-bold text-blue-600'>Mehmet Akif Karasu ⏤ 2020</h1>
            </div>
            <div className='flex items-center gap-5 text-2xl'>
                <Link  href={"https://www.linkedin.com/in/mehmet-akif-karasu-8a9a731b2/"}>Artstation</Link>
                <Link  href={"https://www.linkedin.com/in/mehmet-akif-karasu-8a9a731b2/"}>Linkedin</Link>
                <Link  href={"https://www.linkedin.com/in/mehmet-akif-karasu-8a9a731b2/"}>Linkedin</Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer