export default function HowItWorks() {
  return (
    <section className="max-w-3xl mx-auto px-6 mt-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        How to Learn with L.AI.RRY?
      </h2>

      <div className="space-y-10 relative">
        {[
          {
            n: "1️⃣",
            title: "Pick Your Exam",
            text: "Choose the exam you want to prepare for from our wide list of categories.",
          },
          {
            n: "2️⃣",
            title: "Select Your Course",
            text: "Pick a course that suits your learning style — videos, tests, or bundles.",
          },
          {
            n: "3️⃣",
            title: "Complete the Purchase",
            text: "Finish the checkout in a few steps using your preferred payment method.",
          },
          {
            n: "4️⃣",
            title: "Go to My Courses",
            text: "Instantly access all your purchased learning materials.",
          },
          {
            n: "5️⃣",
            title: "Start Learning",
            text: "Watch lessons, attempt mock tests, and improve with smart analytics.",
          },
        ].map((step, i) => (
          <div
            key={i}
            className="
              bg-white p-6 rounded-xl border border-gray-200 shadow-sm
              hover:-translate-y-1 hover:shadow-xl
              transition-all duration-300
              animate-[float_3s_ease-in-out_infinite]
              relative overflow-hidden
                 before:content-['']
                before:absolute before:inset-0
                before:bg-[radial-gradient(circle_at_center,rgba(0,128,0,0.50),transparent_90%)]
                before:scale-0 hover:before:scale-150
                before:opacity-0 hover:before:opacity-100
                before:transition-all before:duration-700
            "
          >
            {/* Water ripple hover effect */}
            <span
              className="
                pointer-events-none absolute inset-0
                bg-blue-100 opacity-0
                rounded-xl scale-0
                group-hover:opacity-40 group-hover:scale-150
                transition-all duration-700
              "
            ></span>

            <h3 className="text-lg font-semibold flex items-center gap-2 relative z-10">
              <span className="text-blue-500 text-2xl">{step.n}</span>
              {step.title}
            </h3>

            <p className="text-gray-600 mt-2 relative z-10">{step.text}</p>

            {i < 4 && (
              <div className="flex justify-center mt-4">
                <span className="text-gray-400 text-3xl animate-bounce">
                  ⬇️
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Float animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  );
}
