import React from "react";
const ContextMenuB = ({isDropDown}) => {
    return(
        <>
            {isDropDown.ContextMenuB &&
                <div className="dropdown user-dropdown" >
                    <ul>
                        <li><a href="">CMB Navigation One</a></li>
                        <li><a href="">CMB Navigation Two</a></li>
                        <li><a href="">CMB Navigation Three</a></li>
                    </ul>
                </div>
            }
        </>
    );
}
export default ContextMenuB;