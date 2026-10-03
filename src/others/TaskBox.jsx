import React from "react";

const TaskBox = ({data}) => {
  return (
    <div className="flex justify-between mt-10 w-full gap-5">
      <div className=" w-[25%] bg-blue-300 rounded-xl">
        <h1 className="text-4xl font-bold px-3 py-2 text-black">{data.taskNumber.newTask} </h1>
        <h1 className="text-2xl font-bold px-3 py-2 text-black">New Task</h1>
      </div>
      <div className=" w-[25%] bg-green-300 rounded-xl">
        <h1 className="text-4xl font-bold px-3 py-2 text-black">{data.taskNumber.completed}</h1>
        <h1 className="text-2xl font-bold px-3 py-2 text-black">Completed Task </h1>
      </div>
      <div className=" w-[25%] bg-amber-300 rounded-xl">
        <h1 className="text-4xl font-bold px-3 py-2 text-black">{data.taskNumber.failed}</h1>
        <h1 className="text-2xl font-bold px-3 py-2 text-black">Failed  Task</h1>
      </div>
      <div className=" w-[25%] bg-orange-300 rounded-xl">
        <h1 className="text-4xl font-bold px-3 py-2 text-black">{data.taskNumber.active}</h1>
        <h1 className="text-2xl font-bold px-3 py-2 text-black">Active  Task</h1>
      </div>
    </div>
  );
};

export default TaskBox;
