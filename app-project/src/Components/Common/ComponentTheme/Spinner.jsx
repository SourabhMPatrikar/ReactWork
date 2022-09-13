import React from "react";
import "../../../css/Theme/spinner.css";
const Spinner = ({ variant, variantClass }) => {
  switch (variant) {
    case "default":
      variant = "loader-default";
      break;
    case "info":
      variant = "loader-info";
      break;
    case "primary":
      variant = "loader-primary";
      break;
    case "secondary":
      variant = "loader-secondary";
      break;
    case "light":
      variant = "loader-light";
      break;
    case "dark":
      variant = "loader-dark";
      break;
    case "success":
      variant = "loader-success";
      break;
    case "danger":
      variant = "loader-danger";
      break;
    case "warn":
      variant = "loader-warn";
      break;
    default:
      variant = "";
  }
  return <div className={`loader ${variant}`}></div>;
};
export default Spinner;
