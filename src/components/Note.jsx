import React from "react";

function Note(props) {

    const handleClick = (id) => {
        props.onDelete(props.id)
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button 
             type="button"
             onClick={handleClick}
            >
             <span>Delete</span>
            </button>
        </div>
    );
};

export default Note;