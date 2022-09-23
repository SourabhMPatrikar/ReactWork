import React, { useEffect, useState } from "react";
import ToDoListItem from "./ToDoListItem";
const ToDoListA = () => {
    const initValue = "Add task Here";
    const messageFirstEntry = "Add Field is empty, write a to do task item.";
    const [isToDoList, setIsTODoList] = useState(initValue);
    const [items, setItems] = useState([]);
    const [emptyInput, setEmptyInput] = useState(false);
    const [editField, setEditField] = useState(null);
    // const [emptyList, setEmptyList] = useState(false);
    const noItemCondition = items.length <= 0;
    const handleToDoInput = (e) => {
        console.log('isToDoList', e);
        setIsTODoList(e.target.value);
    }
    // const handleFocus = (e) => {

    // }
    // const handleblur = (e) => {
    //     setIsTODoList("");
    // }
    const handleOnBlur = (e) => {
        const inputBox = e.target.value;
        inputBox === "" ? setIsTODoList(initValue) : setIsTODoList(inputBox) ;
    }
    const handleOnFocus = (e) => {
        const inputBox = e.target.value;
        if(inputBox === initValue)setIsTODoList("");
    }
    const handleSave = (e) => {
        console.log(e);
        if(isToDoList === "" || isToDoList === initValue){
            setEmptyInput(true);
            setTimeout(
                ()=>{
                    setEmptyInput(false);
                }, 1000
            )
            return false;
        } 
        else{
            setItems((prevItem) => {
                return(
                    [...prevItem, isToDoList]
                );
                console.log('isToDoList', isToDoList)
            })
            setIsTODoList(initValue);
        }
    }
    const handleDelete = (e) => {
        // debugger;
        console.log('deleted ', e);

        const updatedList = items.filter((currentElement, index)=>{
            return index != e;
        })
        setItems(updatedList);
    }
    const handleEdit = (itemName, itemId) => {
        // debugger
        const updatItem = items.map((item)=>
        item.Id === itemId ? {itemName, itemId} : item 
        );

        setItems(updatItem);
        setEditField("");

    }
    useEffect(()=>{
        debugger
        if(editField){
            setIsTODoList(editField.itemName);
        }
        else{
            setIsTODoList("");
        }
    },[setIsTODoList, editField])
    return(
        <>
            <div className="todoform">
                <div className="todoinput">
                    <input type="text" placeholder="Type here" value={isToDoList} onChange={handleToDoInput} onBlur={handleOnBlur} onFocus={handleOnFocus}/>
                    <div className="todo-action">
                        <input type="button" value="Add" className="btn-info" onClick={handleSave} />
                        <input type="button" value="Reset" className="btn-secondary"/>
                    </div>
                </div>
                </div>
                <div className="todolist">
                {
                    emptyInput && (<div className="message yellow"><p>{messageFirstEntry}</p></div>)
                }
                {/* {
                    emptyList && <div className="message"><p>List is empty. You can add the item by fill the value and click on the add.</p></div>
                } */}
                
                <div className="todoul">
                    {
                        noItemCondition ? 
                        <div className="message"><p>List is empty. You can add the item by fill the value and click on the add.</p></div>
                        :
                        <ul>
                            {items.map((item,index)=>{
                                return(
                                    <>
                                    

                                    <ToDoListItem itemKey={index} itemId={index} itemName={`${index} :- ${item}`} onEdit={handleEdit} onDelete={handleDelete} setEditField={setEditField} />
                                    {/* <li key={item.index} id={item.index}>
                                        <div className="todo-item">{item}</div>
                                        <div className="todo-action"><input type="button" value="Remove" className="btn-danger" onClick={()=>{handleDelete()}} /></div>
                                    </li> */}
                                    </>
                                );
                            })}
                        </ul>
                    }
                    {/* <li>
                        <div className="todo-item">Type here {isToDoList}</div>
                        <div className="todo-action"><input type="button" value="Remove" className="btn-danger"/></div>
                    </li> */}
                </div>
            </div>
        </>
    )
}
export default ToDoListA;