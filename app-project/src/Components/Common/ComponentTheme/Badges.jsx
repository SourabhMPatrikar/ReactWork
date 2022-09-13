import React from "react";
import "../../../css/Theme/badges.css";
const Badges = ({ variant, badgesText, badgeColor }) => {
  switch (variant) {
    case "default":
      variant = "badge-default";
      break;
    case "info":
      variant = "badge-info";
      break;
    case "primary":
      variant = "badge-primary";
      break;
    case "secondary":
      variant = "badge-secondary";
      break;
    case "light":
      variant = "badge-light";
      break;
    case "dark":
      variant = "badge-dark";
      break;
    case "success":
      variant = "badge-success";
      break;
    case "danger":
      variant = "badge-danger";
      break;
    case "warn":
      variant = "badge-warn";
      break;
    default:
      variant = "";
  }
  // let badgesClass = badgesVariant === "" ? "" :
  // badgesVariant === "default" ? "badge-default" :
  // badgesVariant === "info" ? "badge-info" :
  // badgesVariant === "primary" ? "badge-primary" :
  // badgesVariant === "secondary" ? "badge-secondary" :

  // badgesVariant === "light" ? "badge-light" :
  // badgesVariant === "dark" ? "badge-dark" :

  // badgesVariant === "success" ? "badge-success" :
  // badgesVariant === "danger" ? "badge-danger" :
  // badgesVariant === "warn" ? "badge-warn" : "";

  let badgeColorClass =
    badgeColor === "light" ? "white" : badgeColor === "dark" ? "black" : "";
  return (
    <span className={`badge ${variant} ${badgeColorClass}`}>{badgesText}</span>
  );
};
export default Badges;
