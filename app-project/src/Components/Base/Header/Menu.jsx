import React from "react";
import NavigationItem from "./NavigationItem";

const Menu = ({ isUserMenuOpen }) => {
	return (
		<div
			className="dropdown user-dropdown"
			style={{ display: isUserMenuOpen ? "block" : "none" }}>
			<ul>
				<NavigationItem navigationUrl="#" navigationText="Profile" />
				<NavigationItem navigationUrl="#" navigationText="Setting" />
				<NavigationItem navigationUrl="#" navigationText="Sign Out" />
			</ul>
		</div>
	);
};

export default Menu;
