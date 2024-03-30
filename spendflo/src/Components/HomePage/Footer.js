import React from "react";
import FooterLinks from "../Common/FooterLink";

export default function Footer(props) {
  return (
    <div class="h-[400px] bg-black text-white px-[150px] pt-[50px] absolute w-full bottom-0 font-medium">
      <div class="flex gap-[200px]">
        <div class="flex-col text-left">
          <div className="leading-10 text-[35px] pb-[10px]">SpendFlo</div>
          <div className="text-[15px]">SaaS buying and management solution</div>
          <div>Logos</div>
          <div>Certificate</div>
          {/* <div>Copyright © 2023 Spendflo, inc. All rights reserved.</div> */}
        </div>
        <div class="flex gap-[100px]">
          <div class="flex-col text-left">
            <p class="font-bold mb-[10px] text-[20px]">Product</p>
            <FooterLinks text="Buying Hub" link="www.google.com"/>
            <FooterLinks text="Management Hub" link="www.google.com"/>
            <FooterLinks text="Security Hub" link="www.google.com"/>
          </div>

          <div class="flex-col text-left">
            <p class="font-bold mb-[10px] text-[20px]">Company </p>
            <FooterLinks text="About" link="www.google.com"/>
            <FooterLinks text="Pricing" link="www.google.com"/>
            <FooterLinks text="Security" link="www.google.com"/>
            <div className="flex">
            <FooterLinks text="Careers" link="www.google.com"/>
            <div className="ml-[5px] h-[25px] rounded-[40px] text-[12px] pt-[3px] px-[10px] bg-[#d53987] text-center">{"We're Hiring"}</div>
            </div>
          </div>
          <div class="flex-col text-left">
            <p class="font-bold mb-[10px] text-[20px]">Resources</p>
            <FooterLinks text="Blog" link="www.google.com"/>
            <FooterLinks text="Case Studies" link="www.google.com"/>
            <FooterLinks text="Help" link="www.google.com"/>
            <FooterLinks text="Support Status" link="www.google.com"/>
          </div>
        </div>
      </div>
    </div>
  );
}
