"use client"

import Link from "next/link";
import logo from "../public/images/TalkHaven.png"
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react"

export default function Header () {
const [isOpen, setIsOpen] = useState(false);
const [isOpen2, setIsOpen2] = useState(false);
const [isOpen3, setIsOpen3] = useState(false);
const [isOpen4, setIsOpen4] = useState(false);
return (
<header className="max-w-7xl mx-auto container">
{/* nav container */}
<nav className="flex justify-between items-center ">
<div><Link href="/"><Image src={logo} width={100} height={100} priority={true} alt="logo"/></Link></div>
<div className="space-x-16 flex">
<Link href="/" className="hover:underline hover:decoration-solid hover:text-[#ffcc00] flex items-center space-x-3" onMouseEnter={(()=> {
setIsOpen(true)
})} onMouseLeave={(()=> {
setIsOpen(false)
})}>About Us{isOpen? <ChevronDown className="w-4 h-4 ml-1"/> : <ChevronUp className="w-4 h-4 ml-1"/>}</Link>
<Link href="/" className="hover:underline hover:decoration-solid hover:text-[#ffcc00] flex items-center space-x-3" onMouseEnter={(()=> {
setIsOpen2(true)
})} onMouseLeave={(()=> {
setIsOpen2(false)
})}>Services{isOpen2? <ChevronDown className="w-4 h-4 ml-1"/> : <ChevronUp className="w-4 h-4 ml-1"/>}</Link>
<Link href="/" className="hover:underline hover:decoration-solid hover:text-[#ffcc00]">Price</Link>
<Link href="/" className="hover:underline hover:decoration-solid hover:text-[#ffcc00]">Contact Us</Link>


</div>
<div className="flex space-x-6 justify-center items-center">
<div className="py-3 px-4 rounded-xl bg-[#ffcc00] text-black hover:text-white border-solid border-black  ">
<Link href="/">Get Started</Link>
</div>
<div>
Dark/Light
</div>
    
</div>
</nav>

</header>
)
}