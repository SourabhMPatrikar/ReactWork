import React, { useState } from "react";
import Menu from "./Menu";
import NavigationItem from "./NavigationItem";

const HeaderUser = () => {
	const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

	const [user, setUser] = useState({ name: "Manoj" });

	const handleClick = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsUserMenuOpen((prevState) => !prevState);
	};

	const handleClickUser = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setUser((prevName) => ({
			name: prevName?.name === "Manoj" ? "Sourav" : "Manoj",
		}));
	};

	return (
		<div className="user-point">
			<div className="navigation user-sign">
				<ul>
					<NavigationItem navigationUrl="#" navigationText="Sign In" />
					<NavigationItem navigationUrl="#" navigationText="Sign Up" />
				</ul>
			</div>
			<div className="user-exhibition">
				<div className="user-evince" onClick={handleClick}>
					<div className="user-avatar">
						<img
							src="https://www.mona.uwi.edu/modlang/sites/default/files/modlang/male-avatar-placeholder.png"
							title=""
							alt=""
						/>
					</div>
					<div className="user-name" onClick={handleClickUser}>
						{user?.name}
					</div>
				</div>
				<Menu isUserMenuOpen={isUserMenuOpen} />
			</div>
		</div>
	);
};
export default HeaderUser;
