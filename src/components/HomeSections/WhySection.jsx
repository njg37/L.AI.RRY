export default function WhySection() {
  const items = [
    {
      icon: "✔",
      color: "from-green-500 to-green-400",
      title: "The Best Questions",
      desc: "Carefully crafted questions that match real exam standards.",
    },
    {
      icon: "📈",
      color: "from-blue-500 to-blue-400",
      title: "Performance Analytics",
      desc: "Track your progress with data‑driven insights.",
    },
    {
      icon: "💡",
      color: "from-yellow-500 to-yellow-400",
      title: "Smart Solutions",
      desc: "Step‑by‑step explanations that make concepts easier.",
    },
    {
      icon: "⚡",
      color: "from-purple-500 to-purple-400",
      title: "Fast Learning",
      desc: "Boost your preparation with optimized study modules.",
    },
    {
      icon: "🎯",
      color: "from-red-500 to-red-400",
      title: "Targeted Practice",
      desc: "Focus on weak areas and improve faster.",
    },
    {
      icon: "🔒",
      color: "from-teal-500 to-teal-400",
      title: "Secure & Reliable",
      desc: "Your data and progress are always safe with us.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 mt-14">
      <h2 className="text-2xl font-bold">Why L.AI.RRY?</h2>
      <p className="text-gray-600 mt-2 mb-10">
        L.AI.RRY gives you everything needed for effective and smarter learning.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="
              bg-white p-6 rounded-2xl border border-gray-200 shadow-sm
              text-center relative overflow-hidden
              hover:shadow-xl hover:-translate-y-1
              transition-all duration-300
            "
          >
            {/* Floating Glow Ring */}
            <div className="
              absolute inset-0 rounded-2xl opacity-0
              bg-gradient-to-r from-blue-400 to-purple-400 blur-xl
              group-hover:opacity-20 transition duration-500
            "></div>

            {/* Icon */}
            <span
              className={`
                bg-gradient-to-br ${item.color}
                text-white text-3xl p-4 rounded-full inline-block mb-4
                transform transition duration-300
                hover:scale-110
              `}
            >
              {item.icon}
            </span>

            <p className="font-semibold text-gray-800">{item.title}</p>
            <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Floating Animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
        `}
      </style>
    </section>
  );
}
