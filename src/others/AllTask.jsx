import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-6 rounded-xl">
      <h1 className="text-2xl font-semibold text-white mb-6">
        All Employees Tasks
      </h1>

      <div className="w-full bg-[#262626] text-gray-400 py-3 px-5 rounded-lg flex items-center justify-between mb-3 font-medium">
        <h2 className="w-[20%]">Name</h2>
        <h3 className="w-[16%] text-center">Active</h3>
        <h3 className="w-[16%] text-center">Completed</h3>
        <h3 className="w-[16%] text-center">Failed</h3>
        <h3 className="w-[16%] text-center">New Task</h3>
        <h3 className="w-[16%] text-center">Total</h3>
      </div>

      {userData.map(function (elem, idx) {
        return (
          <div
            key={idx}
            className="w-full bg-[#2a2a2a] py-4 px-5 rounded-lg flex items-center justify-between mb-3 text-white border border-white/5"
          >
            <h2 className="w-[20%] font-medium">
              {elem.firstName}
            </h2>

            <h3 className="w-[16%] text-center text-blue-400">
              {elem.taskNumber.active}
            </h3>

            <h3 className="w-[16%] text-center text-green-400">
              {elem.taskNumber.completed}
            </h3>

            <h3 className="w-[16%] text-center text-red-400">
              {elem.taskNumber.failed}
            </h3>

            <h3 className="w-[16%] text-center text-purple-400">
              {elem.taskNumber.newTask}
            </h3>

            <h3 className="w-[16%] text-center text-yellow-400">
              {elem.taskNumber.total}
            </h3>

          </div>
        );
      })}
    </div>
  );
};

export default AllTask;