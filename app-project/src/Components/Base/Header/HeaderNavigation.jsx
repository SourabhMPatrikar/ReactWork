import React from "react";
import NavigationItem from "./NavigationItem";
const HeaderNavigation = () => {
    return(
        <div className="navigation navigation-main">
            <ul>
                <NavigationItem navigationUrl="#" navigationText="Home"/>
                <NavigationItem navigationUrl="#" navigationText="About"/>
                <NavigationItem navigationUrl="#" navigationText="Services"/>
                <NavigationItem navigationUrl="#" navigationText="Contacts"/>
            </ul>
        </div>
    );
}
export default HeaderNavigation;