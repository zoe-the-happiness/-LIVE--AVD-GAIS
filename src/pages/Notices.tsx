import { noticesData } from "../data/notices";
import { Download } from "lucide-react";

export function Notices() {
  const notices = noticesData;

  return (
    <div className="py-24 sm:py-32 bg-slate-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">Notices & Updates</h1>
        <p className="text-lg leading-8 text-slate-600 max-w-2xl mx-auto mb-12">
          Stay informed with the latest announcements, circulars, and events from the Association.
        </p>
        <div className="max-w-3xl mx-auto text-left space-y-4">
          {notices.map((notice) => (
            <div key={notice.id} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-3 text-sm text-slate-500">
                <time>{notice.date}</time>
                <span className="bg-saffron-100 text-saffron-700 px-2.5 py-0.5 rounded-full font-bold text-[10px] tracking-wider uppercase">{notice.type}</span>
                {notice.isNew && (
                  <span className="bg-red-500 text-white px-2.5 py-0.5 rounded-full font-bold text-[10px] tracking-wider uppercase animate-pulse flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-white"></span>
                    Latest
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{notice.title}</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed whitespace-pre-line">{notice.description}</p>
              
              {notice.downloads && notice.downloads.length > 0 ? (
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Downloads & Formats:</h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {notice.downloads.map((dl, idx) => (
                      <a
                        key={idx}
                        href={dl.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-sm font-semibold text-saffron-600 hover:text-saffron-700 bg-saffron-50/40 hover:bg-saffron-50 p-3 rounded-xl border border-saffron-100/50 hover:border-saffron-200 transition-all group"
                      >
                        <span className="w-6 h-6 rounded-lg bg-saffron-100 text-saffron-700 flex items-center justify-center text-xs shrink-0 font-bold group-hover:scale-105 transition-transform">
                          <Download className="w-3.5 h-3.5" />
                        </span>
                        <span className="truncate pr-4">{dl.label}</span>
                        <span aria-hidden="true" className="ml-auto text-xs opacity-70 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                notice.link !== "#" && (
                  <a href={notice.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-saffron-600 hover:text-saffron-500">
                    {notice.linkText || "Download / View"} <span aria-hidden="true" className="ml-1">&rarr;</span>
                  </a>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
