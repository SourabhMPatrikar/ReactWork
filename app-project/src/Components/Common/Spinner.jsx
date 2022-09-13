import React from "react";
const Spinner = ({ variant, variantClass }) => {
  switch (variant) {
    case "default":
      variant = "text-default";
      break;
    case "info":
      variant = "text-info";
      break;
    case "primary":
      variant = "text-primary";
      break;
    case "secondary":
      variant = "text-secondary";
      break;
    case "light":
      variant = "text-light";
      break;
    case "dark":
      variant = "text-dark";
      break;
    case "success":
      variant = "text-success";
      break;
    case "danger":
      variant = "text-danger";
      break;
    case "warn":
      variant = "text-warn";
      break;
    default:
      variant = "";
  }
  return <div className={`spinner-border ${variant}`}></div>;
};
export default Spinner;
