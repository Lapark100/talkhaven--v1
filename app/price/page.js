import CheckoutButton from "@/components/check-out-button";
import { MessageSquare, House } from "lucide-react";

export default function Price() {
  const plans = [
    {
      title: "Weekly Group Pass",
      displayPrice: "₦10,000/week",
      amount: 10000,
      buttonText: "Join This Week's Session",
      features: [
        "Access to one chosen 1-hour group support session weekly",
        "Anonymous participation",
        "Safe and judgment-free environment",
        "Opportunity to share or simply listen",
      ],
    },
    {
      title: "Monthly Group Membership",
      displayPrice: "₦35,000/month",
      amount: 35000,
      buttonText: "Become a Monthly Member",
      features: [
        "Access to one chosen support group every week for a month (4 sessions)",
        "Discounted membership access",
        "Anonymous participation",
        "Consistent support community",
      ],
    },
    {
      title: "Weekly Multi-Group Pass",
      displayPrice: "₦17,500/week",
      amount: 17500,
      buttonText: "Join Multiple Groups",
      features: [
        "Access to up to 2 different support group sessions weekly",
        "Join groups based on your needs",
        "Anonymous participation",
        "Support across multiple communities",
      ],
    },
    {
      title: "Enterprise",
      displayPrice: "₦500,000",
      amount: 500000,
      buttonText: "Contact Us",
      features: [
        "Tailored support programs",
        "Employee wellness workshops",
        "Dedicated account manager",
        "Custom onboarding & reporting",
      ],
    },
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto max-w-sm md:max-w-7xl">
        <div className="flex flex-col items-center justify-center mt-32 md:mt-20">
          <div className="flex flex-col items-center justify-center pt-16 space-y-3">
            <div className="flex items-center justify-center w-[227px] h-[40px] gap-2 rounded-full bg-gray-100 text-black">
              <MessageSquare className="w-[18px] h-[18px]" />
              <p>Safe & Secure Chatting</p>
            </div>

            <div className="md:w-[700px]">
              <h2 className="text-[2rem] md:text-[2.8rem] text-black font-bold text-center leading-tight">
                One tool for your whole company. Free for teams to try.
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 py-16 md:grid-cols-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-8 bg-gray-100 rounded-2xl"
            >
              <div>
                <div className="flex flex-col space-y-3 text-black">
                  <House className="w-8 h-8" />

                  <h4 className="text-xl font-semibold">{plan.title}</h4>

                  <h4 className="text-3xl font-bold">
                    {plan.displayPrice}
                  </h4>

                  <p className="font-medium">Includes:</p>
                </div>

                <ul className="mt-4 space-y-3 text-[16px] text-black">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span>•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <CheckoutButton
                  price={plan.amount}
                  text={plan.buttonText}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}