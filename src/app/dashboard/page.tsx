
"use client";
import React, { useState, useEffect } from "react";
import { SalesChart, SalesData, ChartType } from "../../components/SalesChart";
import { FilterInput } from "../../components/FilterInput";
import { ChartSwitcher } from "../../components/ChartSwitcher";

export default function DashboardPage() {
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [threshold, setThreshold] = useState<number>(0);
  const [salesData, setSalesData] = useState<SalesData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [animate, setAnimate] = useState<boolean>(true);

  useEffect(() => {
    const fetchSales = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/sales");
        if (!res.ok) throw new Error("Failed to fetch sales data");
        const data = await res.json();
        setSalesData(data);
        setAnimate(true);
        setTimeout(() => setAnimate(false), 1200);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSales();
  }, []);

  // Refresh sales data (random) on button click
  const handleRefresh = () => {
    setLoading(true);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1200);
    fetch("/api/sales")
      .then((res) => res.json())
      .then((data) => setSalesData(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-pink-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-3xl animate-fade-in">
        <h1 className="text-3xl font-extrabold text-blue-600 mb-6 text-center animate-bounce">Interactive Sales Dashboard</h1>
        <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
          <FilterInput threshold={threshold} setThreshold={setThreshold} />
          <ChartSwitcher chartType={chartType} setChartType={setChartType} />
        </div>
        <div className="flex justify-end mb-4">
          <button
            onClick={handleRefresh}
            className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition-all duration-300 flex items-center gap-2"
            aria-label="Refresh sales data"
          >
            <span className={animate ? "animate-spin" : ""}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356-2A9 9 0 11 6.582 9" />
              </svg>
            </span>
            Refresh
          </button>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 shadow-inner">
          {loading ? (
            <div className="text-center text-gray-500 animate-pulse">Loading sales data...</div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : (
            <div className={animate ? "animate-fade-in" : ""}>
              <SalesChart data={salesData} chartType={chartType} threshold={threshold} />
            </div>
          )}
        </div>
      </div>
      <footer className="mt-8 text-gray-400 text-xs text-center">
        &copy; {new Date().getFullYear()} Interactive Sales Dashboard. Powered by Next.js, Tailwind CSS, and Recharts.
      </footer>
      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 1.2s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
