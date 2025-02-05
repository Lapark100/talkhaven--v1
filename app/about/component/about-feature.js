import Image from "next/image"
import whyImageAbout from "@/public/images/talkhaven-why.jpg"
export default function () {
return (
<section>

<div className="bg-[#fff] h-auto" >
        <div className="max-w-sm md:max-w-7xl mx-auto container pt-32 pb-32">
            <div className="md:flex gap-8 items-center space-y-8">
            {/* image div */}
            <div className="md:w-1/2">
                <Image
                               src={whyImageAbout}
                               alt="why-image"
                               className="w-full md:w-[616px] h-[350px] md:h-[616px] object-cover"
                             /> 
            </div>

            {/* text div */}
            <div className="text-black md:w-1/2 space-y-4">
                <h2 className="text-[26px] font-[500] ">
                The Exness way is about balance
                </h2>

                <p className="">
                We set out in 2008 to balance ethics and technology to reimagine how the ideal trading experience could be. Today, as a leader in the industry of CFD trading, servicing over 800,000 active traders, we know we’re on the right path.
                </p>

                <p>
                We built our proprietary trading features so we could offer something unique, something no other broker had ever attempted. We were the first to offer traders instant withdrawals*, stop out protection and more. Features that give traders an edge.
                </p>

                <p>
                Trading is just one part of the picture. We believe in creating ecosystems of benefit for traders, partners, and employees to thrive within. Making what once was deemed impossible, a reality.
                </p>
            </div>
            </div>

        </div>
</div>
</section>
)
}