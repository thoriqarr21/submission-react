import React from "react";
import NoteData from "./NoteData";

function NoteList({ notes, onDeleteData, onArchived }) {
    return (
        <div className="notes-list">
            {
                notes.map((note) => (
                    <NoteData notes={note} key={note.id} onDeleteData={onDeleteData} onArchived={onArchived} />
                ))
            }
        </div>
    )
}

export default NoteList;