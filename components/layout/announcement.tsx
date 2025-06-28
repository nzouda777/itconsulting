'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Phone, Linkedin} from 'lucide-react'

export default function Announcement() {
    return (
        <div className='text-white bg-slate-900'>
            <div className=" container mx-auto px-6 py-1 flex text-xs md:text-md  items-center justify-between ">
                <Link href="tel:+22222222">
                    <Phone className="w-3 h-3 md:w-4 md:h-4 inline-flex mr-1"/> +1 (XXX) XXX - XXX - XXX
                </Link>
                <div className="flex items-center justify-between">
                    <Link href="https://www.facebook.com" className='rounded-full p-1 text-sm md: text-md border-1 border-zinc-600'>
                        <Facebook className="w-3 h-3 md:w-4 md:h-4" size={4} />
                    </Link>
                    <Link href="https://www.instagram.com" className='rounded-full p-1 text-sm md: text-md border-1 border-zinc-600'>
                        <Instagram className="w-3 h-3 md:w-4 md:h-4" size={4} />
                    </Link>
                    <Link href="https://www.x.com" className='rounded-full p-1 text-sm md: text-md border-1 border-zinc-600'>
                        <Twitter className="w-3 h-3 md:w-4 md:h-4" size={4} />
                    </Link>
                    <Link href="https://www.linkedin.com" className='rounded-full p-1 text-sm md: text-md border-1 border-zinc-600'>
                        <Linkedin className="w-3 h-3 md:w-4 md:h-4" size={4} />
                    </Link>
                </div>
            </div>
        </div>
    )
}