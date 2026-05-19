export function Notices() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Notices & Updates</h1>
        <p className="text-lg leading-8 text-gray-600 max-w-2xl mx-auto mb-12">
          Stay informed with the latest announcements, circulars, and events from the Association.
        </p>
        <div className="max-w-3xl mx-auto text-left space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-4 mb-2 text-sm text-gray-500">
                <time dateTime="2026-05-19">May 19, 2026</time>
                <span className="bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-full font-medium text-xs">Official</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Annual General Meeting Announcement</h3>
              <p className="text-gray-600 text-sm">Details regarding the upcoming annual general meeting for all registered members...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
