import { MessageSquare, House } from "lucide-react";
import Link from "next/link";



export default function Price() {
    return (
        <section className="bg-white ">
            <div className="max-w-sm md:max-w-7xl mx-auto container ">
                <div className="w-full flex flex-col items-center justify-center h-auto mt-32 md:mt-20 pb-0">
                    {/* Header Container */}
                    <div className="space-y-3 flex flex-col items-center justify-center pt-16">
                        {/* Sub Header */}
                        <div className="flex justify-center items-center bg-gray-100 text-black gap-2 rounded-full w-[227px] h-[40px]">
                            <MessageSquare className="w-[18px] h-[18px]" />
                            <p>
                                Safe & Secure Chatting
                            </p>

                        </div>
                        {/* Header */}
                        <div className="md:w-[700px]">
                            <h2 className=" text-[2rem] md:text-[2.8rem] text-[black] font-bold text-center leading-tight ">
                                One tool for your whole company.
                                Free for teams to try.
                            </h2>
                        </div>
                    </div>
                    <div className="pb-8 pt-8 ">
                        {/* Price Card Section
                        <div className="flex space-x-3 justify-center">
                            <button className="flex cursor-pointer font-semibold justify-center items-center w-[160px] h-[39px] bg-gray-200 text-gray-500 rounded-full">
                                Pay Monthly
                            </button>

                            <button className="flex font-semibold  cursor-pointer justify-center items-center w-[160px] h-[39px] bg-gray-200 text-gray-500 rounded-full">
                                Pay Yearly
                            </button>

                        </div> */}
                    </div>
                </div>

                {/* Price Cards         */}

                <div className=" space-y-4  md:flex md:gap-4 pb-16">

                    {/* Cards */}
                    <div className=" w-full md:w-[330px] h-[606px] bg-gray-100 rounded-2xl " >
                        <div className=" flex flex-col space-y-3 text-black font-semibold p-8">
                            <House className="w-8 h-8" />
                            <h4 className="text-xl">Weekly</h4>
                            <h4 className="text-3xl">$0</h4>
                            <p className=" text-[16px] font-normal ">For individuals to organize personal projects and life</p>
                            <div className="py-3 px-4 rounded-xl bg-[#ffcc00] text-black hover:text-white border-solid border-black text-center">
                                <Link href="/login">Get Started</Link>
                            </div>
                            <ul className="py-1 font-normal text-xl flex flex-col justify-center space-y-3 text-[16px] ">
                                <li className="">
                                Collaborative workspace
                                </li>

                                <li className="">
                                Integrate with Slack, GitHub & more
                                </li>

                                <li className="">
                                Basic page analytics
                                </li>

                                <li className="">
                                7 day page history
                                </li>

                                <li className="">
                                Invite 10 guests
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="w-full md:w-[330px] h-[606px] bg-gray-100 rounded-2xl " >
                        <div className=" flex flex-col space-y-3 text-black font-semibold p-8">
                            <House className="w-8 h-8" />
                            <h4 className="text-xl">Monthly</h4>
                            <h4 className="text-3xl">$0</h4>
                            <p className=" text-[16px] font-normal ">For individuals to organize personal projects and life</p>
                            <div className="py-3 px-4 rounded-xl bg-[#ffcc00] text-black hover:text-white border-solid border-black text-center">
                                <Link href="/login">Get Started</Link>
                            </div>
                            <ul className="py-1 font-normal text-xl flex flex-col justify-center space-y-3 text-[16px] ">
                                <li className="">
                                Collaborative workspace
                                </li>

                                <li className="">
                                Integrate with Slack, GitHub & more
                                </li>

                                <li className="">
                                Basic page analytics
                                </li>

                                <li className="">
                                7 day page history
                                </li>

                                <li className="">
                                Invite 10 guests
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="w-full md:w-[330px] h-[606px] bg-gray-100 rounded-2xl " >
                        <div className=" flex flex-col space-y-3 text-black font-semibold p-8">
                            <House className="w-8 h-8" />
                            <h4 className="text-xl">Quarterly</h4>
                            <h4 className="text-3xl">$0</h4>
                            <p className=" text-[16px] font-normal ">For individuals to organize personal projects and life</p>
                            <div className="py-3 px-4 rounded-xl bg-[#ffcc00] text-black hover:text-white border-solid border-black text-center">
                                <Link href="/login">Get Started</Link>
                            </div>
                            <ul className="py-1 font-normal text-xl flex flex-col justify-center space-y-3 text-[16px] ">
                                <li className="">
                                Collaborative workspace
                                </li>

                                <li className="">
                                Integrate with Slack, GitHub & more
                                </li>

                                <li className="">
                                Basic page analytics
                                </li>

                                <li className="">
                                7 day page history
                                </li>

                                <li className="">
                                Invite 10 guests
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="w-full md:w-[330px] h-[606px] bg-gray-100 rounded-2xl " >
                        <div className=" flex flex-col space-y-3 text-black font-semibold p-8">
                            <House className="w-8 h-8" />
                            <h4 className="text-xl">Yearly</h4>
                            <h4 className="text-3xl">$0</h4>
                            <p className=" text-[16px] font-normal ">For individuals to organize personal projects and life</p>
                            <div className="py-3 px-4 rounded-xl bg-[#ffcc00] text-black hover:text-white border-solid border-black text-center">
                                <Link href="/login">Get Started</Link>
                            </div>
                            <ul className="py-1 font-normal text-xl flex flex-col justify-center space-y-3 text-[16px] ">
                                <li className="">
                                Collaborative workspace
                                </li>

                                <li className="">
                                Integrate with Slack, GitHub & more
                                </li>

                                <li className="">
                                Basic page analytics
                                </li>

                                <li className="">
                                7 day page history
                                </li>

                                <li className="">
                                Invite 10 guests
                                </li>
                            </ul>
                        </div>

                    </div>

                   
                </div>
            </div>
        </section>
    )
}