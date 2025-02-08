import PageHeader from "@/components/pages-header"


export default function Layout({children}) {
    return (
    <>
    <PageHeader />
    <main>{children}</main>
    
    </>
    )
    }