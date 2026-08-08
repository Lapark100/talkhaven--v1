export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose your support option",
      description: (
        <>
          <span className="block">• Group support</span>
          <span className="block">• Private chat</span>
        </>
      ),
    },
    {
      number: "02",
      title: "Make payment securely",
      description: "Complete your payment through our secure checkout.",
    },
    {
      number: "03",
      title: "Join anonymously and safely",
      description:
        "Enter your support space privately, safely, and without revealing your identity.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium tracking-wide text-neutral-600">
            HOW IT WORKS
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
            Getting started is simple.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-neutral-500 sm:text-base">
            Choose how you want to connect, make a secure payment, and join
            your support space privately.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative rounded-3xl border border-neutral-200 bg-neutral-50/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] sm:p-8"
            >
              {/* Step number */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-xs font-semibold text-white">
                {step.number}
              </div>

              {/* Content */}
              <div className="mt-7">
                <h3 className="text-lg font-semibold tracking-tight text-neutral-950 sm:text-xl">
                  {step.title}
                </h3>

                <div className="mt-3 text-sm leading-6 text-neutral-500">
                  {step.description}
                </div>
              </div>

              {/* Connector */}
              {index !== steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-neutral-200 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}