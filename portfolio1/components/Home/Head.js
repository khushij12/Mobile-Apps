import React from "react";

export default function Head(props) {
  return <div className="flex justify-between p-[10px] h-[10vh] bg-black text-white items-center text-lg">
    <div>
        Khushi Jain
    </div>
    <div className="flex gap-[20px] ">
        <p>About</p>
        <p>Projects</p>
        <p>Achiements</p>
        <p>Contact</p>
    </div>
  </div>;
}
