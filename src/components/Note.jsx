import React from "react";

function Note(props) {

    return (
        <div className="note">
            <h1>{props.text.title}</h1>
            <p>{props.text.content}</p>
            <button 
             type="button"
             onClick={() => {
                props.deleteItem(props.id);
             }}
            >
             <span>Delete</span>
            </button>
        </div>
    );
};

export default Note;