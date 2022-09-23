import React from "react";
const ToDoListItem = (props) => { //{itemKey, itemId, itemName, itemDelete}
    const {itemKey, itemId, itemName, onEdit, onDelete, editFieldShow} = props;
    return(
        <li key={itemKey} id={itemId}>
            <div className="todo-item">
                {itemName}
                {editFieldShow && <input type="text" value={itemName} />}
            </div>
            <div className="todo-action">
                <input type="button" value="Edit" className="btn-danger" onClick={()=>{onEdit(itemName, itemId)}} />
                <input type="button" value="Delete" className="btn-danger" onClick={()=>{onDelete(itemId)}} />
            </div> 
        </li>
    );
}
export default ToDoListItem;