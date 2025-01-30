import Link from "next/link";
import logo from "../public/images/TalkHaven.png";
import Image from "next/image";
import { Instagram, Linkedin, X } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1a1a1a]">
            <div className="max-w-7xl mx-auto pb-16 space-y-8 px-6">
                {/* Footer items */}
                <div className="md:flex justify-between pt-16 pb-8 gap-16">
                    {/* Main footer item */}
                    <div className="space-y-6 pb-8 max-w-[350px]">
                        <Link href="/">
                            <Image src={logo} width={100} height={100} priority={true} alt="logo"/>
                        </Link>
                        <p className="text-base font-normal text-gray-400">
                            Your trusted platform for compassionate and confidential online therapy. 
                            Connecting you to licensed therapists anytime, anywhere.
                        </p>
                        <div className="flex gap-3 text-white">
                            <Instagram className="w-6 h-6"/>
                            <X className="w-6 h-6"/>
                            <Linkedin className="w-6 h-6"/>
                        </div>
                    </div>

                    {/* Footer Links Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <div className="flex flex-col space-y-4">
                            <h4 className="text-xl font-semibold text-white">Services</h4>
                            <p className="text-gray-400">Price</p>
                            <p className="text-gray-400">Anonymous Chat</p>
                            <p className="text-gray-400">Public Chat</p>
                            <p className="text-gray-400">Rants</p>
                        </div>

                        <div className="flex flex-col space-y-4">
                            <h4 className="text-xl font-semibold text-white">Company</h4>
                            <p className="text-gray-400">About Us</p>
                            <p className="text-gray-400">Mission</p>
                            <p className="text-gray-400">Vision</p>
                            <p className="text-gray-400">Community</p>
                        </div>

                        <div className="flex flex-col space-y-4">
                            <h4 className="text-xl font-semibold text-white">Resources</h4>
                            <p className="text-gray-400">Documentation</p>
                            <p className="text-gray-400">Blog</p>
                            <p className="text-gray-400">TalkHaven API</p>
                            <p className="text-gray-400">Contact Us</p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-gray-400">© {currentYear} TalkHaven Limited</p>
                </div>
            </div>
        </footer>
    );
}
