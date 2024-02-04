import React from "react";
import Sidebar from "@/app/Components/Sidebar";
import UserTableView from "@/app/Components/UserTableView";


;

function User() {
  return (
    <div className="flex  text-center mx-auto">
      <Sidebar />
      <div className="flex mx-auto">
     
        <UserTableView />
      
      </div>
    </div>
  );
}

export default User;
