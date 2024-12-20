import React from "react";
import NoteInputData from "./NoteInputData";
import NoteList from "./NoteList";

function NoteBody({ onAddData, onDeleteData, onArchived, activeNotes, archivedNotes }) {
    return (
        <div className="note-app__body">
            <NoteInputData onAddData={onAddData} />
            <h2>Catatan Aktif</h2>
            {
                activeNotes.length !== 0 ? <NoteList notes={activeNotes} onDeleteData={onDeleteData} onArchived={onArchived} /> : <p className="notes-list__empty-message">Belum ada catatan</p>
            }
            <h2>Arsip</h2>
            {
                archivedNotes.length !== 0 ? <NoteList notes={archivedNotes} onDeleteData={onDeleteData} onArchived={onArchived} /> : <p className="notes-list__empty-message">Belum ada catatan</p>
            }
        </div>
    )
}

export default NoteBody;