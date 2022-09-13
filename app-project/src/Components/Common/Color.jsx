import React from "react";
const Color = ({ color, tag, bg, suffix, text }) => {
//   const tagName = tag;
  switch (color) {
    case "default":
        color = "text-default";
      break;
    case "info":
        color = "text-info";
      break;
    case "primary":
        color = "text-primary";
      break;
    case "secondary":
        color = "text-secondary";
      break;
    case "light":
        color = "text-light";
      break;
    case "dark":
        color = "text-dark";
      break;
    case "success":
        color = "text-success";
      break;
    case "danger":
        color = "text-danger";
      break;
    case "mute":
        color = "text-mute";
      break;
    default:
        color = "";
  }const tagName = tag === "div" ? "div" : tag === "p" ? "p" : tag === "span" ? "span" : tag === "button" ? "button": tag === "label" ? "lable" : "";
  const background =
    bg === "default" ? "bg-default" : bg === "info" ? "bg-info" : bg === "primary" ? "bg-primary" : bg === "secondary" ? "bg-secondary" : bg === "light" ? "bg-light" : bg === "dark" ? "bg-dark" : bg === "success" ? "bg-success" : bg === "danger" ? "bg-danger" : bg === "mute" ? "bg-mute" : "";
  const suffixText =
    suffix === "light" ? "white" : suffix === "dark" ? "black" : "";
  return <span className={`${color} ${background} ${suffixText}`}>{text}</span>;
};
export default Color;
