export default function SearchBar() {
  return (
    <div className="max-w-3xl mx-auto mt-10 px-6 relative">
      <input
        type="text"
        placeholder="Search exam"
        className="w-full border border-gray-300 rounded-xl py-3 pl-4 pr-12 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      <span className="absolute right-10 top-1/2 -translate-y-1/2 text-xl text-gray-500">
        🔍
      </span>
    </div>
  );
}
