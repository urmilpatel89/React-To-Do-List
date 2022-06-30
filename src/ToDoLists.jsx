import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToDoLists = (props) => {
  
    return (
        <>
            
            <div className="todo">
            
                <li className="list-group-item">{props.text}</li>
                <FontAwesomeIcon className="button" icon="trash" onClick={()=>{
                        props.onSelect(props.id);
                    }}></FontAwesomeIcon>
            </div>
            
        </>
    );
}
export default ToDoLists;