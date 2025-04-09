import React from 'react'



const DateFilter = () => {
  return (
    <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-gray-500">Home / Dashboard</div>
              <div className="flex space-x-4 mt-4">
                {["Today", "7d", "2w", "1m", "3m", "6m", "1y"].map((period) => (
                  <button
                    key={period}
                    className={`px-4 py-2 rounded-lg ${
                      period === "Today"
                        ? "bg-indigo-600 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
          </div>
  )
}

export default DateFilter