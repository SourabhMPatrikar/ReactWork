import React from "react";
const DropdownUl = ({isUserNameAvailable, liUrl, liText}) => {
    return(
        <div className="dropdown user-dropdown" style={{display:isUserNameAvailable?"block":"none"}}>
			<ul>
                {/* <ddLi liUrl="sdfsdf" liText="sfdsfdsdf"></ddLi> */}
                <li><a href="">Navigation One</a></li>
                <li><a href="">Navigation Two</a></li>
                <li><a href="">Navigation Three</a></li>
			</ul>
		</div>
    );
}
const ddLi =({liUrl, liText}) => {return(<li><a href={liUrl}>{liText}</a></li>);}
export default DropdownUl;