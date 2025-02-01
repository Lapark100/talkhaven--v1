import PageHeader from "@/components/pages-header"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function Layout({children}) {
    return (
    <>
    <PageHeader />
    <main>{children}</main>
    
    </>
    )
    }