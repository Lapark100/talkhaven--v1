import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function Layout({children}) {
    return (
    <>
    
    <div className="absolute left-8 top-8">
    <Link href="/" className="text-base px-5 py-3 flex items-center space-x-2 rounded-full bg-white dark:bg-black hover:bg-gray-200 dark:hover:bg-gray-500 disabled:opacity-50 ">
        <ChevronLeft className="w-4 h-4" />
        <span>Back</span>
    </Link>
</div>
    <main>{children}</main>
    
    </>
    )
    }