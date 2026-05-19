export function Districts() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Districts</h1>
        <p className="text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
          AVD maintains a strong presence across all districts in West Bengal. Find your local representative and district-level activities here.
        </p>
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {/* Placeholder for district map or list */}
          {Array.from({ length: 23 }).map((_, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:border-blue-300 transition-colors cursor-pointer">
              <span className="font-medium text-gray-900">District {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
