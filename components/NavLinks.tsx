"use client"

import Link from 'next/link'
import React from 'react'
import { links } from '@/lib/data'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const NavLinks = () => {

  const pathname = usePathname();

  return <>
    {links.map((link) => {
      const LinkIcon = link.icon;
      const isActive = pathname === link.url;

    return(
    <Link
      key={link.name}
      href={link.url}
      className={buttonVariants({
        variant: isActive ? "secondary" : "ghost",
        className: cn("navLink", { "hidden md:flex": link.hiddenOnMobile }),
        size: "lg"
      })}
    >
      <LinkIcon className='w-6' />
      <p className={`${cn("hidden lg:block", {"font-extrabold": isActive,})}`}>
        {link.name}
      </p>
    </Link>
    )
            
    })}
  </>;
}

export default NavLinks