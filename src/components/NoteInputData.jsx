import React, { useState } from "react";

function NoteInputData({ onAddData }) {
    const [inputTitle, setInputTitle] = useState('');
    const [inputNote, setInputNote] = useState('');
    const charLimit = 50;

    function handleInputTitle(e) {
        setInputTitle(e.target.value.slice(0, charLimit));
    }

    function handleInputNote(e) {
        setInputNote(e.target.value);
    }

    function handleSubmitNote(e) {
        e.preventDefault();

        const newNote = {
            id: new Date(),
            title: inputTitle,
            body: inputNote,
            createdAt: new Date(),
            archived: false
        }

        onAddData(newNote)

        setInputTitle('');
        setInputNote('');
    }

    return (
        <div className="note-input-data">
            <h2>Buat Catatan</h2>
            <form onSubmit={handleSubmitNote}>
                <p className="note-input-data__title__char-limit">Sisa Karakter {charLimit - inputTitle.length}</p>
                <input className="note-input-data__title" type="text" placeholder="Tulis Judul Catatan ..." required value={inputTitle} onChange={handleInputTitle} />
                <textarea className="note-input-data__body" type="text" placeholder="Tuliskan catatanmu ..." required value={inputNote} onChange={handleInputNote}></textarea>
                <button type="submit">Buat</button>
            </form>
        </div>
    )
}

export default NoteInputData;