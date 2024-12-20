import React from "react";
import NoteDataContent from "./NoteDataContent";
import NoteDataAction from "./NoteDataAction";

function NoteData({ notes, onDeleteData, onArchived }) {
    return (
        <div className="note-data">
            <NoteDataContent notes={notes} />
            <NoteDataAction notes={notes} onDeleteData={onDeleteData} onArchived={onArchived} />
        </div>
    )
}

export default NoteData;