import React from "react";
import "../../../css/Theme/alert.css";
const Alert = ({ alertType, alertText, alertTextType }) => {

  let alertVariant =
      alertType === "default"
      ? "alert-default"
      : alertType === "info"
      ? "alert-info"
      : alertType === "primary"
      ? "alert-primary"
      : alertType === "secondary"
      ? "alert-secondary"
      : alertType === "dark"
      ? "alert-dark"
      : alertType === "light"
      ? "alert-light"
      : alertType === "success"
      ? "alert-success"
      : alertType === "danger"
      ? "alert-danger"
      : alertType === "warn"
      ? "alert-warn"
      : "";

  let alertTxtType =
    alertTextType === "bold"
      ? "bold"
      : alertTextType === "italic"
      ? "italic"
      : alertTextType === "under-line"
      ? "under-line"
      : "";
      
  return (
    <div className={`alert ${alertVariant}`}>
      <p className={alertTxtType}>{alertText}</p>
      <span className="close"></span>
    </div>
  );
};
export default Alert;