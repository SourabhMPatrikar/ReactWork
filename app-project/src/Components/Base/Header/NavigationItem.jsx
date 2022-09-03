import React from "react";
const NavigationItem = ({navigationUrl, navigationText}) => {
    return(
        <li><a href={navigationUrl}>{navigationText}</a></li>
    );
}
export default NavigationItem;