import Image from "next/image"
import whyImageAbout from "@/public/images/talkhaven-why.jpg"
export default function AboutUsCeo() {
return (

<section>
<div className="bg-[#1a1a1a]] h-513px" >
        <div className="max-w-sm md:max-w-full mx-auto container ">
            <div className="  md:flex">
                {/* quote div */}
                <div className="md:w-1/2 bg-[#edfof2] py-8 md:p-16 space-y-8">
                <div className="">
                <p className="hidden md:block text-yellow-400 text-3xl md:text-6xl ">"</p>
                    <h2 className=" text-center md:text-left text-2xl md:text-5xl text-white md:pr-[3rem] leading-relaxed ">As a team of financial engineers, we created an environment where traders can feel secure and empowered.
                    </h2>
                    
                </div>

                <div className="text-center md:text-left space-y-2">
                    <p className="text-[20px] font-semibold">
                        Amaka Madubuko
                    </p>
                    <p className="text-base">
                        Founder and CEO
                    </p>
                </div>
                    
                </div>

                {/* image container */}
                <div
              className="w-full md:w-1/2 min-h-[300px] md:h-auto"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/ceo-img.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            </div>
        </div>
</div>
</section>

)
}