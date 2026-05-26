import CheckoutButton from "@/components/check-out-button";
import { MessageSquare, House } from "lucide-react";
import Link from "next/link";

export default function Price() {
    return (
        <section className="bg-white">
            <div className="max-w-sm md:max-w-7xl mx-auto container">
                <div className="w-full flex flex-col items-center justify-center h-auto mt-32 md:mt-20 pb-0">
                    <div className="space-y-3 flex flex-col items-center justify-center pt-16">
                        <div className="flex justify-center items-center bg-gray-100 text-black gap-2 rounded-full w-[227px] h-[40px]">
                            <MessageSquare className="w-[18px] h-[18px]" />
                            <p>Safe & Secure Chatting</p>
                        </div>
                        <div className="md:w-[700px]">
                            <h2 className="text-[2rem] md:text-[2.8rem] text-[black] font-bold text-center leading-tight">
                                One tool for your whole company. Free for teams to try.
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-16">
                    {[
    {
        title: "One-Off",
        displayPrice: "₦20,000",
        amount: 20000
    },
    {
        title: "Weekly",
        displayPrice: "₦40,000",
        amount: 40000
    },
    {
        title: "Monthly",
        displayPrice: "₦100,000",
        amount: 100000
    },
    {
        title: "Enterprise",
        displayPrice: "₦500,000",
        amount: 500000
    }
].map((plan, index) => (
    <div
        key={index}
        className="flex flex-col justify-between w-full bg-gray-100 rounded-2xl p-8"
    >

        <div className="flex flex-col space-y-3 text-black font-semibold">

            <House className="w-8 h-8" />

            <h4 className="text-xl">
                {plan.title}
            </h4>

            <h4 className="text-3xl">
                {plan.displayPrice}
            </h4>

            <p className="text-[16px] font-normal">
                For individuals to organize personal projects and life
            </p>
                            </div>
                            <CheckoutButton price={plan.amount} />
                            <ul className="py-1 font-normal text-base text-black flex flex-col justify-center space-y-3 md:text-[16px] mt-4">
                                <li>Collaborative workspace</li>
                                <li>Integrate with Slack, GitHub & more</li>
                                <li>Basic page analytics</li>
                                <li>7 day page history</li>
                                <li>Invite 10 guests</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
 