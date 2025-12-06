export default function ExploreFeatures() {
  const items = [
    {
      icon: "🎥",
      title: "Live Interactive Classes",
      desc: "Learn from expert mentors through real‑time sessions and instant doubt support.",
      btn: "Browse Classes",
      color: "bg-blue-500",
    },
    {
      icon: "🧠",
      title: "Concept Visualizer",
      desc: "Understand tough topics with interactive diagrams and visual explanations.",
      btn: "Try Visual Learning",
      color: "bg-purple-500",
    },
    {
      icon: "📝",
      title: "Mock Test Hub",
      desc: "Take timed mock tests and boost your accuracy with smart analysis.",
      btn: "Start Practicing",
      color: "bg-green-500",
    },
    {
      icon: "🎧",
      title: "Video Lessons",
      desc: "HD quality video lectures covering fundamentals to advanced concepts.",
      btn: "View Lessons",
      color: "bg-red-500",
    },
    {
      icon: "📄",
      title: "Digital Notes",
      desc: "Quick, structured notes to help you learn anytime, anywhere.",
      btn: "Read Notes",
      color: "bg-yellow-500",
    },
    {
      icon: "📚",
      title: "Printed Material",
      desc: "Prefer physical books? Get curated printed material delivered home.",
      btn: "Order Books",
      color: "bg-indigo-500",
    },
    {
      icon: "🎁",
      title: "Free Prep Zone",
      desc: "Access free tests, quizzes, and revision boosters.",
      btn: "Explore Freebies",
      color: "bg-teal-500",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 mt-16">
      <h2 className="text-3xl font-bold text-gray-800">Explore by Features</h2>
      <p className="text-gray-600 mt-2 mb-8">Everything you need to learn — in one platform.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {items.map((item, index) => (
          <div
            key={index}
            className="
              bg-white border border-gray-200 p-6 rounded-2xl shadow-sm 
              transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
              relative overflow-hidden group
            "
          >
            {/* water ripple overlay */}
            <span
              className="
                absolute inset-0 bg-gradient-to-br from-blue-200/10 to-blue-600/10 
                opacity-0 group-hover:opacity-100 
                animate-[water_2s_ease-in-out_infinite]
                pointer-events-none
 
              "
            ></span>

            <div className={`${item.color} w-14 h-14 flex items-center justify-center rounded-xl text-3xl`}>
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold mt-4">{item.title}</h3>

            <p className="text-gray-600 text-sm mt-2">{item.desc}</p>

            <button className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700">
              {item.btn} →
            </button>
          </div>
        ))}
      </div>


    </section>
  );
}
