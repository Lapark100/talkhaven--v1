"use client";

import { useMemo, useState } from "react";
import CheckoutButton from "@/components/check-out-button";
import { MessageSquare, House } from "lucide-react";

const exchangeRates = {
  NGN: 1,
  USD: 0.00065,
  GBP: 0.00049,
  EUR: 0.00057,
};

const currencies = [
  {
    code: "NGN",
    label: "Nigerian Naira (₦)",
  },
  {
    code: "USD",
    label: "US Dollar ($)",
  },
  {
    code: "GBP",
    label: "British Pound (£)",
  },
  {
    code: "EUR",
    label: "Euro (€)",
  },
];

export default function Price() {
  const [currency, setCurrency] = useState("USD");

  const plans = useMemo(
    () => [
      {
        title: "Weekly Group Pass",
        price: 10000,
        period: "/week",
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
        price: 35000,
        period: "/month",
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
        price: 17500,
        period: "/week",
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
        price: 500000,
        period: "",
        buttonText: "Contact Us",
        features: [
          "Tailored support programs",
          "Employee wellness workshops",
          "Dedicated account manager",
          "Custom onboarding & reporting",
        ],
      },
    ],
    []
  );

  const formatPrice = (amount) => {
    const converted = amount * exchangeRates[currency];

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(converted);
  };

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

              <p className="text-center text-gray-500 mt-6">
                Select your preferred currency before viewing pricing.
              </p>
            </div>

            <div className="mt-4">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              >
                {currencies.map((item) => (
                  <option
                    key={item.code}
                    value={item.code}
                  >
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 py-16 md:grid-cols-4">

          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl bg-gray-100 p-8"
            >
              <div>

                <div className="text-black">

                  <House className="w-8 h-8 mb-6" />

                  {/* Fixed height title */}
                  <div className="min-h-[64px]">
                    <h4 className="text-xl font-semibold leading-7">
                      {plan.title}
                    </h4>
                  </div>

                  {/* Fixed height price */}
                  <div className="min-h-[70px] mt-4">
                    <h2 className="text-4xl font-bold tracking-tight">
                      {formatPrice(plan.price)}
                    </h2>

                    <p className="text-gray-500 font-medium">
                      {plan.period.replace("/", "per ")}
                    </p>
                  </div>

                  <p className="mt-4 font-semibold">
                    Includes
                  </p>

                </div>

                <ul className="mt-4 space-y-3 text-[16px] text-black">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2"
                    >
                      <span>•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

              </div>

              <div className="mt-8">
                <CheckoutButton
                  price={plan.price}
                  currency={currency}
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