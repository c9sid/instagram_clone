import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { SwitchCamera } from "lucide-react"
import { Sanchez } from "next/font/google"

const poppins = Sanchez({weight: '400', style: 'normal', subsets: ['latin']});

const Logo = () => {
  
  return (
    <>
    <Link 
    href={'/dashboard'}
    className={buttonVariants({
      className: "hidden md:flex lg:justify-start lg:ms-8 navLink mt-5 !mb-10 lg:hover:bg-transparent lg:!p-0",
      variant: "ghost",
      size: "lg"
    })}
    >
      <SwitchCamera className="h-6 w-6 shrink-0 lg:hidden" />
      <p className={`font-semibold text-xl hidden lg:block ${poppins.className}`}>Instagram</p>
    </Link>
    </>
  )
}

export default Logo