import React from "react";
const DropdownUl1 = ({isUserNameAvailable}) => {
    return(
        <>
            {isUserNameAvailable&& <div className="dropdown user-dropdown">
			<ul>
                <li><a href="">Navigation UI1 One</a></li>
                <li><a href="">Navigation UI1 Two</a></li>
                <li><a href="">Navigation UI1 Three</a></li>
			</ul>
		</div>
            }
        </>
    );
}
export default DropdownUl1;