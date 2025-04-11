import React from "react";

type props = {
  label: string;
  count: number;
  color: string;
};

const StatCard = (stat: props) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className={`${stat.color} text-3xl  font-bold mb-2`}>{stat.count}</div>
      <div className="text-gray-500">{stat.label}</div>
      <div className="flex items-center justify-between mt-4">
        <button className="text-indigo-600 text-sm">View All</button>
        {/* <span className={`${stat.color}`}>{stat.change}</span> */}
      </div>
    </div>
  );
};

export default StatCard;
