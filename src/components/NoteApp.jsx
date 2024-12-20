import React, { useState } from "react";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";
import { getListData } from "../utils";

function NoteApp() {
    const [notes, setNotes] = useState(getListData());
    const [search, setSearch] = useState('');

    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(search.toLowerCase()));
    const archivedNotes = filteredNotes.filter((note) => note.archived);
    const activeNotes = filteredNotes.filter((note) => !note.archived);

    function handleAddData(note) {
        setNotes([...notes, note])
    }
    function handleSearchData(e) {
        setSearch(e.target.value);
    }
    function handleDeleteData(id) {
        const updateNotes = notes.filter((note) => note.id !== id);
        setNotes(updateNotes)
    }
    function handleArchivedData(id) {
        const updateNotes = notes.map((note) => note.id === id ? { ...note, archived: !note.archived } : note);
        setNotes(updateNotes)
    }

    return (
        <>
            <NoteHeader search={search} onSearchData={handleSearchData} />
            <NoteBody notes={notes} onAddData={handleAddData} onDeleteData={handleDeleteData} onArchived={handleArchivedData} activeNotes={activeNotes} archivedNotes={archivedNotes} />
        </>
    )
}

export default NoteApp;