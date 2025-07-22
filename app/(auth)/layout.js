import { ChevronLeft } from "lucide-react"
import Link from "next/link"
export default function Layout ({children}) {
return <main>
<div className="absolute left-8 top-8">
<Link href="/" className="rounded-full bg-white dark:bg-black hover:bg-gray-200 dark:hover:bg-gray-500 disabled:opacity-25 text-base px-4 py-2 flex items-center">
<ChevronLeft className="w-4 h-4 text-gray-200"/>
<span>Back</span>
</Link>
</div>
<div>{children}</div>
</main>
}