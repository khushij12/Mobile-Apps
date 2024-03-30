import React from "react";

export default function FooterLinks(props) {
  return <div className="mb-[10px]"><a className="hover:text-[#d53987] text-white font-bold" href={props.link}>{props.text}</a></div>;
}
