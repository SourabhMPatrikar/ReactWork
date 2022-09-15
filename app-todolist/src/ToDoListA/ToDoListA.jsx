import React from "react";
const ToDoListA = () => {
    return(
        <>
            <div className="todoform">
                <div className="todoinput">
                    <input type="text" placeholder="Type here"/>
                    <div className="todo-action">
                        <input type="button" value="Add" className="btn-info"/>
                        <input type="button" value="Reset" className="btn-secondary"/>
                    </div>
                </div>
                </div>
                <div className="todolist">
                <div className="todoul">
                    <ul>
                    <li>
                        <div className="todo-item">Type here</div>
                        <div className="todo-action"><input type="button" value="Remove" className="btn-danger"/></div>
                    </li>
                    <li>
                        <div className="todo-item">Type here</div>
                        <div className="todo-action"><input type="button" value="Remove" className="btn-danger"/></div>
                    </li>
                    <li>
                        <div className="todo-item">Type here</div>
                        <div className="todo-action"><input type="button" value="Remove" className="btn-danger"/></div>
                    </li>
                    <li>
                        <div className="todo-item">Type here</div>
                        <div className="todo-action"><input type="button" value="Remove" className="btn-danger"/></div>
                    </li>
                    <li>
                        <div className="todo-item">Type here</div>
                        <div className="todo-action"><input type="button" value="Remove" className="btn-danger"/></div>
                    </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default ToDoListA;