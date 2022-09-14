import React, { useState } from "react";
import DropdownUl from "./DropdownUl";
import DropdownUl1 from "./DropdownUl1";
import DropdownUl2 from "./DropdownUl2";
import ContextMenuA from "./ContextMenuA";
import ContextMenuB from "./ContextMenuB";
import ContextMenuC from "./ContextMenuC";
const Dropdown = () => {
    const [isSiblingNodeOpen, setIsSiblingNodeOpen] = useState(false);
    const [isNextNodeOpen, setIsNextNodeOpen] = useState(false);
    const [isParaDescription, SetIsParaDescription] = useState(false);
    const [isParagraph, setIsParagraph] = useState(false);
    const [isUserNameAvailable, setIsUserNameAvailable] = useState(false);
    const [isDropDown, setIsDropDown] = useState({contextMenuA:false,contextMenuB:false,contextMenuC:false});
    // const [isDropDownA, setIsDropDownA] = useState({contextMenuA:false});
    // const [isDropDownB, setIsDropDownB] = useState({contextMenuB:false});
    // const [isDropDownC, setIsDropDownC] = useState({contextMenuC:false});
    const [isUserNameText, setIsUserNameText] = useState("Baba Jee Ka Thullu");
    const handleSiblingNodeToggle = (e) => {
		e.preventDefault();
		e.stopPropagation();
        setIsSiblingNodeOpen((prevState) => !prevState);
    }
    const handleNextNodeToggle = (e) => {
		e.preventDefault();
		e.stopPropagation();
        setIsNextNodeOpen((prevState) => !prevState);
    }
    const handleParaDescription = (e) => {
        e.preventDefault();
		e.stopPropagation();
        SetIsParaDescription((prevState) => !prevState);
    }
    const handleParagraph = (e) => {
        e.preventDefault();
		e.stopPropagation();
        setIsParagraph((prevState) => !prevState);
    }
    const handleUserDD = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsUserNameAvailable((prevState) => !prevState);
    }
    // const handleHideUserDD = (e) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     setIsUserNameAvailable((prevState) => !prevState);
    // }
    const handleContextDropDownA = (e) => {
        e.preventDefault();
        e.stopPropagation();
        // setIsDropDown.contextMenuA((prevState) => !prevState);
        setIsDropDown((prevStates) => ({
            contextMenuA : prevStates?.contextMenuA === false ? true : false,
        }));
    }
    const handleContextDropDownB = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDropDown((prevState) => ({
            contextMenuB:prevState?.contextMenuB === false ? true : false,
        }));
    }
    const handleContextDropDownC = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDropDown((prevState) => ({
            contextMenuC:prevState?.contextMenuC === false ? true : false,
        }));
    }
    return(
        <div className="row">
            <div className="title"><h4>Dropdown</h4></div>
            <div className="combine">
                <div className="navigation nav-info">
                    <ul>
                        <li onClick={handleSiblingNodeToggle}><a href="">Navigation Toggle</a></li>
                        {isSiblingNodeOpen && <li><a href="">Navigation Two</a></li>}
                        <li>
                            <a href="" onClick={handleUserDD}><span className="user-name">{isUserNameText}</span></a>
                            <DropdownUl isUserNameAvailable={isUserNameAvailable} />
                        </li>
                        <li>
                            <a href="" onClick={handleUserDD}><span className="user-name">{isUserNameText}</span></a>
                            <DropdownUl1 isUserNameAvailable={isUserNameAvailable} />
                        </li>
                        <li>
                            <a href="" onClick={handleUserDD}><span className="user-name">{isUserNameText}</span></a>
                            {isUserNameAvailable&& <DropdownUl2 isUserNameAvailable={isUserNameAvailable} />}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="combine">
                <div className="navigation nav-info">
                    <ul>
                        <li>
                            <a href="" onClick={handleContextDropDownA}><span className="user-name">{isUserNameText}</span></a>
                            <ContextMenuA isDropDown={isDropDown} />
                        </li>
                        <li>
                            <a href="" onClick={handleContextDropDownB}><span className="user-name">{isUserNameText}</span></a>
                            <ContextMenuB isDropDown={isDropDown} />
                        </li>
                        <li>
                            <a href="" onClick={handleContextDropDownC}><span className="user-name">{isUserNameText}</span></a>
                            {isDropDown&& <ContextMenuC isDropDown={isDropDown} />}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="combine">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div className="combine">
                <div className="navigation nav-info">
                    <ul>
                        <li><a href="" onClick={handleNextNodeToggle}>Navigation Toggle</a></li>
                        {isNextNodeOpen && <li><a href="" onClick={handleParaDescription}>Navigation Two</a></li>}
                    </ul>
                </div>
            </div>
            {isParaDescription&&<div className="combine">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<a href="javascript:void(0)" onClick={handleParagraph}>Read More...</a></p>
            </div>}
            {isParagraph&&<div className="combine">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>}
        </div>
    );
}
// const liItem = ({navURL, navText}) => {
//         <li><a href={navURL}>{navText}</a></li>
// }
export default Dropdown;