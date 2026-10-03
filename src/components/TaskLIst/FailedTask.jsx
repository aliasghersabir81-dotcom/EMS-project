import React from "react";

const FailedTask = ({ data,}) => {
  return (
    <div className="h-[320px] w-[310px] min-w-[310px] flex-shrink-0 bg-[#292524] border border-amber-500 p-5 rounded-lg">
      <div className="flex justify-between items-center mt-3">
        <span className="bg-amber-500/15 text-amber-400 border  px-3 py-1.5 rounded-lg text-xs font-medium">
          {data.category}
        </span>
        <span className="text-gray-400 text-lg"> {data.date} </span>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-white">{data.title}</h2>
        <p className="mt-3 text-sm text-gray-400">{data.description}</p>
      </div>
      <div className="flex gap-3 mt-8">
        <button className="flex-1 bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 py-2.5 rounded-xl text-sm font-bold  cursor-pointer">
           Failed Task
        </button>
      </div>
      
    </div>
  );
};

export default FailedTask;
