import React from "react";

export default function Pricing() {
  return (
    <div className="w-full px-5 py-16 bg-slate-50 ">

      {/* Heading */}
      <div className="ml-5 mb-12">
        <h1 className="text-4xl font-bold text-[#0b1437]">Choose Your Plan</h1>
        <p className="text-gray-600 mt-2 text-xl">
          Select a subscription that fits your preparation style.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-[1428px] ml-5 grid gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">

        {/* Basic */}
        <div className="bg-white rounded-xl p-8 shadow-md text-center transition hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-[#0b1437]">Basic</h2>
          <p className="text-4xl font-extrabold text-blue-600 my-4">
            ₹199<span className="text-lg text-gray-500">/month</span>
          </p>

          <ul className="text-gray-600 text-[16px] my-6">
            <li className="my-2">✔ 10 Mock Tests / month</li>
            <li className="my-2">✔ Basic Analytics</li>
            <li className="my-2">✔ Standard Support</li>
          </ul>

          <button className="w-full py-3 rounded-lg bg-[#0b1437] text-white text-lg hover:opacity-85 transition">
            Choose Plan
          </button>
        </div>

        {/* Standard – Most Popular */}
        <div className="relative bg-white rounded-xl p-8 shadow-md border-2 border-blue-600 text-center transition hover:-translate-y-1">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
            Most Popular
          </div>

          <h2 className="text-2xl font-bold text-[#0b1437]">Standard</h2>
          <p className="text-4xl font-extrabold text-blue-600 my-4">
            ₹399<span className="text-lg text-gray-500">/month</span>
          </p>

          <ul className="text-gray-600 text-[16px] my-6">
            <li className="my-2">✔ Unlimited Mock Tests</li>
            <li className="my-2">✔ Advanced Analytics</li>
            <li className="my-2">✔ AI Performance Insights</li>
          </ul>

          <button className="w-full py-3 rounded-lg bg-blue-600 text-white text-lg hover:opacity-85 transition">
            Choose Plan
          </button>
        </div>

        {/* Premium */}
        <div className="bg-white rounded-xl p-8 shadow-md text-center transition hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-[#0b1437]">Premium</h2>
          <p className="text-4xl font-extrabold text-blue-600 my-4">
            ₹699<span className="text-lg text-gray-500">/month</span>
          </p>

          <ul className="text-gray-600 text-[16px] my-6">
            <li className="my-2">✔ Unlimited Mock Tests</li>
            <li className="my-2">✔ All Analytics + AI Tools</li>
            <li className="my-2">✔ Priority Support</li>
            <li className="my-2">✔ Exclusive PDFs</li>
          </ul>

          <button className="w-full py-3 rounded-lg bg-[#0b1437] text-white text-lg hover:opacity-85 transition">
            Choose Plan
          </button>
        </div>

      </div>
    </div>
  );
}
