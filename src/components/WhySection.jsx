export default function WhySection() {
  return (
    <section className="max-w-5xl mx-auto px-6 mt-14">
      <h2 className="text-2xl font-bold">Why L.AI.RRY?</h2>
      <p className="text-gray-600 mt-2 mb-8">
        L.AI.RRY provides the best learning experience
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

        <div className="text-center">
          <span className="bg-green-500 text-white text-3xl p-4 rounded-full inline-block mb-3">
            ✔
          </span>
          <p className="font-semibold">The best questions</p>
        </div>

        <div className="text-center">
          <span className="bg-green-500 text-white text-3xl p-4 rounded-full inline-block mb-3">
            📈
          </span>
          <p className="font-semibold">Detailed performance analysis</p>
        </div>

        <div className="text-center">
          <span className="bg-yellow-400 text-white text-3xl p-4 rounded-full inline-block mb-3">
            💡
          </span>
          <p className="font-semibold">Smart solutions</p>
        </div>

      </div>
    </section>
  );
}
