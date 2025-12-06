export default function PopularExams() {
  return (
    <section className="max-w-6xl mx-auto px-6 mt-12">
      <h2 className="text-2xl font-bold mb-4">Popular Exams</h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

        {/* ---- Row 1 ---- */}
        <ExamCard icon="📝" color="bg-green-500" title="SSC CGL" />
        <ExamCard icon="📊" color="bg-yellow-400" title="IBPS PO" />
        <ExamCard icon="🧾" color="bg-red-500" title="NET" />
        <ExamCard icon="🏦" color="bg-blue-500" title="SBI Clerk" />

        {/* ---- Row 2 ---- */}
        <ExamCard icon="📘" color="bg-purple-500" title="IBPS Clerk" />
        <ExamCard icon="📚" color="bg-pink-500" title="RRB PO" />
        <ExamCard icon="⚖️" color="bg-indigo-500" title="Judiciary" />
        <ExamCard icon="🎯" color="bg-orange-500" title="UPSC Prelims" />

        {/* ---- Row 3 ---- */}
        <ExamCard icon="🏫" color="bg-teal-500" title="CTET" />
        <ExamCard icon="🚂" color="bg-gray-600" title="RRB NTPC" />
        <ExamCard icon="🌾" color="bg-cyan-500" title="AFO" />
        <ExamCard icon="🛡️" color="bg-lime-500" title="Defence Exams" />

      </div>
    </section>
  );
}

/* ------ Reusable Component ------ */
function ExamCard({ icon, color, title }) {
  return (
    <div
      className="
        flex items-center gap-3 bg-white border border-gray-200 
        rounded-xl p-4 shadow-sm cursor-pointer
        transition-all duration-300 hover:shadow-md hover:scale-[1.03]
      "
    >
      <span className={`${color} text-white text-xl p-3 rounded-full`}>
        {icon}
      </span>
      <p className="font-semibold">{title}</p>
    </div>
  );
}
