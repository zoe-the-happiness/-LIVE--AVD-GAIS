import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { AlertCircle } from "lucide-react";

interface TransferOrder {
  title: string;
  link: string;
  date: string;
}

export function AppointmentsMarquee() {
  const [orders, setOrders] = useState<TransferOrder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTransfers() {
      try {
        const response = await fetch("https://ard.wb.gov.in/api/v1/appointments");
        if (!response.ok) throw new Error("Network response was not ok");
        const apiData = await response.json();
        if (apiData && Array.isArray(apiData)) {
          const formattedOrders = apiData.map((item: any) => ({
            title: item.title_english,
            link: item.file_path_english ? `https://ard.wb.gov.in/${item.file_path_english}` : 'https://ard.wb.gov.in',
            date: new Date(item.created).toLocaleDateString()
          }));
          setOrders(formattedOrders.slice(0, 4)); // Show 4 items on Marquee
        }
      } catch (error) {
        console.error("Failed to fetch directly, falling back to proxy", error);
        try {
          const response = await fetch("/api/transfers");
          const data = await response.json();
          if (data.success && data.data) {
            setOrders(data.data.slice(0, 4));
          }
        } catch (innerError) {
          console.error("Failed to fetch transfers via proxy", innerError);
        }
      } finally {
        setLoading(false);
      }
    }
    
    fetchTransfers();
  }, []);

  if (loading) {
    return (
      <div className="w-full bg-slate-900 py-2 border-y border-slate-800 text-slate-400 text-xs px-4">
        Syncing live appointment data...
      </div>
    );
  }

  if (orders.length === 0) {
     return (
      <div className="w-full bg-slate-900 py-2 border-y border-slate-800 text-slate-400 text-xs px-4 flex items-center justify-center gap-2">
        <AlertCircle className="w-4 h-4 text-saffron-500" />
        No recent appointments or transfers found at this time.
      </div>
     )
  }

  return (
    <div className="w-full bg-slate-900 overflow-hidden relative border-y border-slate-800 flex items-center h-10">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
      <div className="bg-saffron-600 text-white font-bold text-[10px] uppercase tracking-wider px-4 py-3 h-full flex items-center absolute left-0 z-20 shrink-0">
        Latest Orders
      </div>
      
      <div className="flex w-full ml-32 relative">
        <motion.div
          className="flex whitespace-nowrap gap-12 text-sm text-slate-300"
          animate={{ x: [0, -2000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {orders.map((order, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-saffron-500"></span>
              <a 
                href={order.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                title="Download Order Document"
              >
                {order.title} <span className="text-slate-500 ml-2">({order.date})</span>
              </a>
            </div>
          ))}
          {/* Duplicate for infinite seamless scroll */}
          {orders.map((order, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-saffron-500"></span>
              <a 
                href={order.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                title="Download Order Document"
              >
                {order.title} <span className="text-slate-500 ml-2">({order.date})</span>
              </a>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>
    </div>
  );
}
