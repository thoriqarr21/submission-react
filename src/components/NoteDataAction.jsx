import React from "react";

function NoteDataAction({ notes, onDeleteData, onArchived }) {
    return (
        <div className="note-data__action">
            <button className="note-data__delete-button" onClick={() => onDeleteData(notes.id)}>Delete</button>
            <button className="note-data__archive-button" onClick={() => onArchived(notes.id)}>{notes.archived ? "Pindahkan" : "Arsipkan"}</button>
        </div>
    )
}

export default NoteDataAction; 