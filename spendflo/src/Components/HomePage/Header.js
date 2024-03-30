import React, { useState } from "react";
import DropdownArrow from "../assets/DropdownArrow";
import Links from "../Common/Links";

function DropDownItem({ title }) {
  const [open, setOpen] = useState(false);
  // const handleClick = () => {
  //   if (open) {
  //   }
  // };
  return (
    <div onClick={() => setOpen(!open)}>
      <div className="flex flex-row gap-[10px] cursor-pointer">
        {title}
        <DropdownArrow className="mt-[10px]" />
      </div>
    </div>
  );
}

export default function Header(props) {

  return (
    <div className="flex justify-between m-[25px]">
      <div className="flex flex-row gap-[20px]">
        SpendFlo
        <DropDownItem title={"Product"} />
        <DropDownItem title={"Solutions"} />
        <Links text="About us" link="https://localhost:3000" />
        <Links text="Pricing" link="https://localhost:3000" />
        <DropDownItem title={"Resources"} />
        
        {/* <div class="flex">
        <div class="flex-col">
      <li><a>Buying Hub</a></li>
      <li><a>Discover</a></li>
      <li><a>Contract management</a></li>
      <li><a>Approval workflows</a></li>
      <li><a>Assisted buying</a></li>
      <li><a>Vendor Intelligence</a></li>
      </div>
      <div class="flex-col">
      <li><a>Management Hub</a></li>
      <li><a>Spend analytics</a></li>
      <li><a>Discover</a></li>
      <li><a>Usage tracking</a></li>
      <li><a>Sentiment survey</a></li>
        </div>
        <div class="flex-col">
        <li><a>Security Hub</a></li>
        <li><a>Vendor risk assessment</a></li>
        </div>*/}
      </div>
      {/* <select className="">
        <option>Product </option>
        </select>
        <select>
        <option></option></select>
         
        <select>
        <option>Resources</option></select>
      </div>
      
      <div>
        <button>Login</button>
        <button>Get a free savings analysis</button>
        
      </div>*/}
    </div>
  );
}


