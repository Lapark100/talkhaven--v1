import Link from "next/link";
import logo from "../public/images/TalkHaven.png"
import Image from "next/image";
import { Instagram, Linkedin, X } from "lucide-react";
export default function Footer() {
    const now = new Date();

const currentDate = now.toLocaleDateString(); // Format: MM/DD/YYYY
const currentTime = now.toLocaleTimeString(); // Format: HH:MM:SS AM/PM

const currentYear = new Date().getFullYear();

    return (

        <footer>
            <div className="bg-[#1a1a1a] ">
                <div className="max-w-sm  md:max-w-7xl mx-auto pb-16 space-y-4">
                    {/* Footer items */}
                    <div className="md:flex pt-16 pb-8  md:space-x-48 ">

                        {/* Main footer item */}
                        <div className="space-y-6 pb-8">
                        <div><Link href="/"><Image src={logo} width={100} height={100} priority={true} alt="logo"/></Link></div>

                        <div className="max-w-[350px]">
                            <p className="text-base font-normal  text-gray-400">
                            Your trusted platform for compassionate and confidential online therapy. Connecting you to licensed therapists anytime, anywhere.  
                            </p>
                        </div>

                        <div className="flex gap-2">
                        <Instagram  className="w-6 h-6"/>
                        <X  className="w-6 h-6"/>
                        <Linkedin  className="w-6 h-6"/>
                        </div>
                        </div>

                        

                        <div className=" space-y-8 md:flex gap-48">

                            {/* sub footer item */}
                            <div className="flex flex-col space-y-4">
                            <h4 className="text-xl font-semmibold">
                            Services
                            </h4>
                            <p className="text-gray-400">Price</p>
                            <p className="text-gray-400">Anonymous Chat</p>
                            <p className="text-gray-400">Public Chat</p>
                            <p className="text-gray-400">Rants</p>
                                
                            </div>

                            <div className="flex flex-col space-y-4">
                            <h4 className="text-xl font-semmibold">
                            Company
                            </h4>
                            <p className="text-gray-400">About Us</p>
                            <p className="text-gray-400">Mission</p>
                            <p className="text-gray-400">Vision</p>
                            <p className="text-gray-400">Community</p>
                                
                            </div>

                            <div className="flex flex-col space-y-4">
                            <h4 className="text-xl font-semmibold">
                            Resources
                            </h4>
                            <p className="text-gray-400">Documentation</p>
                            <p className="text-gray-400">Blog</p>
                            <p className="text-gray-400">TalkHaven API</p>
                            <p className="text-gray-400">Contact Us</p>
                                
                            </div>

                            
                            
                        </div>


                    
                    </div>
                    <div>

                        <p className="text-gray-400">© {currentYear} TalkHaven Limited</p>
                    </div>
                </div>
            </div>
        </footer>

    )
}