import React from "react";
const Alert = ({ alertType, alertText, alertTextType }) => {

  let alertVariant =
    alertType === "success"
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
    </div>
  );
};
export default Alert;