import React from "react";
import Headrer from "../../others/Headrer";
import AllTask from "../../others/AllTask";
import CreateTask from "../../others/CreateTask";

const AdminDashboard = () => {
  const submitHandle = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <div className="h-full w-full p-15">
      <Headrer />
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
