import { CircleHelp, CircleUserRound } from "lucide-react";
import Image from "next/image";
import whyImage from "@/public/images/contct-us.jpg"
import ng from "@/public/images/ng.svg"

export default function ContactFeatures() {
  return (
    <div className="bg-white text-black py-32">
      <div className="max-w-sm md:max-w-7xl mx-auto px-4">
        {/* Features */}
        <div className="space-y-11">
          <h2 className="text-4xl text-center">General Enquiry</h2>

          {/* Cards Wrapper */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Help Center Card */}
            <div className="flex flex-col space-y-6 bg-gray-100 rounded-xl p-6 w-full md:w-[616px] h-[190px]">
              <CircleHelp className="w-6 h-6 text-black" />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Help Center</h3>
                <p className="text-gray-400">
                  Find in-depth information about trading with Exness at the Exness Help Center.
                </p>
              </div>
            </div>

            {/* Open Ticket Card */}
            <div className="flex flex-col space-y-6 bg-gray-100 rounded-xl p-6 w-full md:w-[616px] h-[190px]">
              <CircleUserRound className="w-6 h-6 text-black" />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Open a Ticket</h3>
                <p className="text-gray-400">
                  Already registered? Log in to your Personal Area, go to the Support Hub, and submit a ticket there. We'll get back to you in 24 hours.
                </p>
              </div>
            </div>
          </div>

          <Image
            src={whyImage}
            alt="why-image"
            className="w-full md:w-[80rem] h-[350px] md:h-[459.58px] object-cover"
          />

          <div className="pt-16 pb-16">
            <h3 className="text-3xl text-center">Talk Haven offices</h3>
          </div>

          <div className="space-y-3" >
            <div className="flex gap-3 items-center">
              <Image
                src={ng}
                alt="why-image"
                className="w-full md:w-[24px] h-[350px] md:h-[24px] object-cover"
              />

              <h2>
                Nigeira
              </h2>
              
            </div>
            <p>
                1, Siafi Street, Porto Bello, Office 401 Limassol
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}
