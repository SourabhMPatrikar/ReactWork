import React from "react";
import "../../../css/Theme/progress.css";
const Progress = ({variant, percent}) => {
    if(variant === "default"){variant="";}
    else if(variant === "info"){variant="bg-info";}
    else if(variant === "primary"){variant="bg-primary";}
    else if(variant === "secondary"){variant="bg-secondary";}
    else if(variant === "dark"){variant="bg-dark";}
    else if(variant === "light"){variant="bg-light";}
    else if(variant === "success"){variant="bg-success";}
    else if(variant === "danger"){variant="bg-danger";}
    else if(variant === "warn"){variant="bg-warn";}
    else{variant="";}
  return (
    <div className="progress">
      <div className={`progress-bar ${variant}`} style={{width:`${percent}%`}}><span className="percentage">{percent+"%"}</span></div>
    </div>
    // {`${percent}%`}
  );
};
export default Progress;