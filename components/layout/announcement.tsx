'use client'

import Link from 'next/link'
import { Facebook, Instagram, Youtube, Phone, Linkedin, Mail, } from 'lucide-react'

export default function Announcement() {
    return (
        <div className='text-white bg-gradient-to-r from-prime to-second'>
            <div className="2xl:container max-w-[100%] mx-auto overflow-x-hidden px-6 md:px-12   py-2 flex text-xs md:text-sm  items-center justify-between ">
                <Link href="tel:+17065811963">
                    <Phone className="w-3 h-3 md:w-4 md:h-4 inline-flex mr-1" /> +1 (706) 581-1963
                </Link>
                <Link href="mailto:support@itcloudconsultings.com" className='hidden md:block'>
                    <Mail className="w-3 h-3 md:w-4 md:h-4 inline-flex mr-1" /> support@itcloudconsultings.com
                </Link>
                <div className="flex items-center justify-between">
                    <Link href="https://www.facebook.com/profile.php?id=61580501526943&sk=about_profile_transparency&locale=fr_FR" className='rounded-full p-1 text-sm md: text-md border-1 border-zinc-600'>
                        <Facebook className="w-3 h-3 md:w-4 md:h-4" size={4} />
                    </Link>
                    <Link href="https://www.instagram.com/itcloud_consulting/" className='rounded-full p-1 text-sm md: text-md border-1 border-zinc-600'>
                        <Instagram className="w-3 h-3 md:w-4 md:h-4" size={4} />
                    </Link>
                    <Link href="https://www.tiktok.com/@itcloudconsulting" className='rounded-full p-1 text-sm md: text-md border-1 border-zinc-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.2 10.1c0 .22-.18.401-.4.39a8 8 0 0 1-3.362-.93c-.281-.15-.638.045-.638.364V15.5a6 6 0 1 1-6.4-5.987a.38.38 0 0 1 .4.387v2.8c0 .22-.18.397-.398.433A2.4 2.4 0 1 0 12.2 15.5V2.9a.4.4 0 0 1 .4-.4h2.8a.43.43 0 0 1 .418.4a4.4 4.4 0 0 0 3.983 3.982c.22.02.4.197.4.418z"></path></svg>
                    </Link>
                    <Link href="https://www.youtube.com" className='rounded-full p-1 text-sm md: text-md border-1 border-zinc-600'>
                        <Youtube className="w-3 h-3 md:w-4 md:h-4" size={4} />
                    </Link>
                    <Link href="https://www.linkedin.com/company/108900033/admin/dashboard/" className='rounded-full p-1 text-sm md: text-md border-1 border-zinc-600'>
                        <Linkedin className="w-3 h-3 md:w-4 md:h-4" size={4} />
                    </Link>
                </div>
            </div>
        </div>
    )
}