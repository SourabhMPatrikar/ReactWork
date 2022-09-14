import React from "react";
const Navigation = ({variant}) => {
    switch(variant){
        case "default":
            variant="nav-default";
        break;
        case "info":
            variant="nav-info";
        break;
        case "primary":
            variant="nav-primary";
        break;
        case "secondary":
            variant="nav-secondary";
        break;
        case "light":
            variant="nav-light";
        break;
        case "dark":
            variant="nav-dark";
        break;
        case "success":
            variant="nav-success";
        break;
        case "danger":
            variant="nav-danger";
        break;
        case "warn":
            variant="nav-warn";
        break;
        default:
            variant="";
    }
    return(
        <div className={`navigation ${variant}`}>
            <ul>
                <li><a href="">Navigation One</a></li>
                <li><a href="">Navigation Two</a></li>
                <li><a href="">Navigation Three</a></li>
                <li><a href="">Navigation Four</a></li>
                <li><a href="">Navigation Five</a></li>
                <li><a href="">Navigation Six</a></li>
                <li><a href="">Navigation Seven</a></li>
                {/* <li><a href="">Navigation Eight</a></li>
                <li><a href="">Navigation Nine</a></li> */}
            </ul>
        </div>
    );
}
export default Navigation;