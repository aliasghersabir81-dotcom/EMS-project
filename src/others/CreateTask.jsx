import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const CreateTask = () => {
  const [TaskTitle, setTaskTitle] = useState("");
  const [TaskDescription, setTaskDescription] = useState("");
  const [TaskDate, setTaskDate] = useState("");
  const [AssignTo, setAssignTo] = useState("");
  const [Category, setCategory] = useState("");

  const [NewTask, setNewTask] = useState({});
  const [userData, setUserData] = useContext(AuthContext);

  const submitHandle = (e) => {
    e.preventDefault();

    const newTask = {
      title: TaskTitle,
      description: TaskDescription,
      date: TaskDate,
      category: Category,
      newTask: true,
      completed: false,
      failed: false,
    };
           
      const updatedUsers = userData.map((elem) =>
      elem.firstName.trim().toLowerCase() === AssignTo.trim().toLowerCase()
        ? {
            ...elem,
            tasks: [...elem.tasks, newTask],
            taskNumber: {
              ...elem.taskNumber,
              newTask: elem.taskNumber.newTask + 1,
              total: elem.taskNumber.total + 1,
            },
          }
        : elem,
    );

    setUserData(updatedUsers);
    localStorage.setItem("employees", JSON.stringify(updatedUsers));

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div className="w-full bg-[#1b1b1b] p-6 text-white mt-7">
      <form
        onSubmit={(e) => {
          submitHandle(e);
        }}
        className="grid grid-cols-2 gap-x-10 gap-y-5"
      >
        <div>
          <h3 className="mb-1 text-sm">Task Title</h3>
          <input
            value={TaskTitle}
            onChange={(e) => {
              setTaskTitle(e.target.value);
            }}
            className="w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 outline-none"
            type="text"
            placeholder="Make a UI design"
          />
        </div>

        <div className="row-span-4">
          <h3 className="mb-1 text-sm">Description</h3>
          <textarea
            value={TaskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            className="h-44 w-full resize-none rounded-md border border-gray-500 bg-transparent px-3 py-2 outline-none"
            placeholder="Enter task description"
          ></textarea>

          <button
            className="mt-4 w-full rounded-md bg-emerald-400 py-3 font-semibold text-white cursor-pointer"
            type="submit"
          >
            Create Task
          </button>
        </div>

        <div>
          <h3 className="mb-1 text-sm">Date</h3>
          <input
            value={TaskDate}
            onChange={(e) => {
              setTaskDate(e.target.value);
            }}
            className="w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 outline-none"
            type="date"
          />
        </div>

        <div>
          <h3 className="mb-1 text-sm">Assign To</h3>
          <input
            value={AssignTo}
            onChange={(e) => {
              setAssignTo(e.target.value);
            }}
            className="w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 outline-none"
            type="text"
            placeholder="employee name"
          />
        </div>

        <div>
          <h3 className="mb-1 text-sm">Category</h3>
          <input
            value={Category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className="w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 outline-none"
            type="text"
            placeholder="design, dev, etc"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
