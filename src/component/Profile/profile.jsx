import React from "react";
import { profileNavigation } from "./profileNavigation";
const profile = () => {
  return (
    <div className="lg:flex justify-between">
      <div className="sticky h-[8vh] lg:w-[20%]">
        <profileNavigation></profileNavigation>
      </div>
       <div className="lg:w-[80%]">

       </div>
    
    </div>
  );
};

export default profile;
