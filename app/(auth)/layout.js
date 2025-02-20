import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { variants, sizes } from "@/const/consts";

export default function Layout({children}) {
    return (
    <>
    
    <div className="absolute left-8 top-8">
    <Link href="/" className={`${variants['ghost']} ${sizes['base']} flex items-center space-x-2 text-sm`}>
        <ChevronLeft className="w-4 h-4" />
        <span>Back</span>
    </Link>
</div>
    <main>{children}</main>
    
    </>
    )
    }