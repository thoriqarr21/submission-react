import React from "react";

function NoteHeader({ keyword, onSearchData }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input
          type="search"
          placeholder="Cari catatan..."
          value={keyword}
          onChange={onSearchData}
        />
      </div>
    </div>
  );
}

export default NoteHeader;
