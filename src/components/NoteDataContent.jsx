import React from "react";
import { showFormatDate } from "../utils";

function NoteDataContent({ notes }) {
    return (
        <div className="note-data__content">
            <h3 className="note-data__title">{notes.title}</h3>
            <p className="note-data__date">{showFormatDate(notes.createdAt)}</p>
            <p className="note-data__body">{notes.body}</p>
        </div>
    )
}

export default NoteDataContent;