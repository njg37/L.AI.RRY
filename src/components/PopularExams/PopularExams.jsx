export default function PopularExams() {
  return (
    <section className="max-w-5xl mx-auto px-6 mt-12">
      <h2 className="text-2xl font-bold mb-4">Popular Exams</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <span className="bg-green-500 text-white text-xl p-3 rounded-full">📝</span>
          <p className="font-semibold">SSC CGL</p>
        </div>

        <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <span className="bg-yellow-400 text-white text-xl p-3 rounded-full">📊</span>
          <p className="font-semibold">IBPS PO</p>
        </div>

        <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <span className="bg-red-500 text-white text-xl p-3 rounded-full">🧾</span>
          <p className="font-semibold">NET</p>
        </div>

      </div>
    </section>
  );
}
