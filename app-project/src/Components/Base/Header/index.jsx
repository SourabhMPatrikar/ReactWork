import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderUser from "./HeaderUser";
import HeaderNavigation from "./HeaderNavigation";
const Header = () => {
    return(
        <header>
            <div className="header-top">Header</div>
            <div className="header-main">
                <HeaderLogo />
                <HeaderUser />
                <HeaderNavigation />
            </div>
            {/* <div className="header-btm">Header</div> */}
            <div className="clear-fix"></div>
        </header>
    );
}
export default Header;