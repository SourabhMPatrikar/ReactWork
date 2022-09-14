import React from "react";
const ContextMenuA = ({isDropDown}) => {
    return(
        <div className="dropdown user-dropdown" style={{display:isDropDown.contextMenuA?"block":"none"}}>
			<ul>
                <li><a href="">CMA Navigation One</a></li>
                <li><a href="">CMA Navigation Two</a></li>
                <li><a href="">CMA Navigation Three</a></li>
			</ul>
		</div>
    );
}
export default ContextMenuA;