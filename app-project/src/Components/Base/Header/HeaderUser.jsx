import React from "react";
import NavigationItem from "./NavigationItem";
const HeaderUser = () => {
    return(
        <div className="user-point">
            <div className="navigation user-sign">
                <ul>
                    <NavigationItem navigationUrl="#" navigationText="Sign In"/>
                    <NavigationItem navigationUrl="#" navigationText="Sign Up"/>
                </ul>
            </div>
            <div className="user-exhibition">
                <div className="user-evince">
                    <div className="user-avatar"><img src="https://www.mona.uwi.edu/modlang/sites/default/files/modlang/male-avatar-placeholder.png" title="" alt="" /></div>
                    <div className="user-name">Mirchi Seth</div>
                </div>
                <div className="dropdown user-dropdown">
                    <ul>
                        <NavigationItem navigationUrl="#" navigationText="Profile"/>
                        <NavigationItem navigationUrl="#" navigationText="Setting"/>
                        <NavigationItem navigationUrl="#" navigationText="Sign Out"/>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default HeaderUser;