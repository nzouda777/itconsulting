'use client'

import Link from 'next/link'
import { Facebook, Instagram, Youtube, Phone, Linkedin, Mail} from 'lucide-react'

export default function Announcement() {
    return (
        <div className='text-white bg-gradient-to-r from-prime to-second'>
            <div className="2xl:container max-w-[100%] mx-auto overflow-x-hidden px-6 md:px-12   py-2 flex text-xs md:text-sm  items-center justify-between ">
                <Link href="tel:+17065811963">
                    <Phone className="w-3 h-3 md:w-4 md:h-4 inline-flex mr-1"/> +1 (706) 581-1963
                </Link>
                <Link href="mailto:contact@itcloudconsultings.com" className='hidden md:block'>
                    <Mail className="w-3 h-3 md:w-4 md:h-4 inline-flex mr-1"/> contact@itcloudconsultings.com
                </Link>
                <div className="flex items-center justify-between">
                    <Link href="https://www.facebook.com" className='rounded-full p-1 text-sm md: text-md border-1 border-zinc-600'>
                        <Facebook className="w-3 h-3 md:w-4 md:h-4" size={4} />
                    </Link>
                    <Link href="https://www.instagram.com" className='rounded-full p-1 text-sm md: text-md border-1 border-zinc-600'>
                        <Instagram className="w-3 h-3 md:w-4 md:h-4" size={4} />
                    </Link>
                    <Link href="https://www.youtube.com" className='rounded-full p-1 text-sm md: text-md border-1 border-zinc-600'>
                        <Youtube className="w-3 h-3 md:w-4 md:h-4" size={4} />
                    </Link>
                    <Link href="https://www.linkedin.com" className='rounded-full p-1 text-sm md: text-md border-1 border-zinc-600'>
                        <Linkedin className="w-3 h-3 md:w-4 md:h-4" size={4} />
                    </Link>
                    {/* <Link href="https://www.tiktok.com" className='rounded-full p-1 text-sm md: text-md border-1 border-zinc-600'>
                        <TikTok className="w-3 h-3 md:w-4 md:h-4" size={4} />
                    </Link> */}
                </div>
            </div>
        </div>
    )
}