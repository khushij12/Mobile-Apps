import React from "react";

export default function Links(props) {
  return <a className="hover:text-[#d53987]" href={props.link}>{props.text}</a>;
}
