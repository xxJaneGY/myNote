import { useAtom, useAtomValue } from "jotai";
import { TopMenuButton } from "../components/TopMenuButton";
import {
  isCreatePageOpenAtom,
  noteIdAtom,
  noteInfoAtom,
} from "../atoms/myNote.atom";
import { ChangeEvent, useMemo } from "react";

export const MyNoteCreateModal = () => {
  const isOpen = useAtomValue(isCreatePageOpenAtom);
  const noteId = useAtomValue(noteIdAtom);

  const [noteInfos, setNoteInfos] = useAtom(noteInfoAtom);

  const noteInfo = useMemo(
    () => noteInfos.find((note) => note.id === noteId),
    [noteInfos, noteId]
  );

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: title } = e.target;

    if (title.length > 20) return;

    setNoteInfos((prev) =>
      prev.map((note) => (note.id === noteId ? { ...note, title } : note))
    );
  };

  const handleChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value: content } = e.target;

    if (content.length > 100) return;

    setNoteInfos((prev) =>
      prev.map((note) => (note.id === noteId ? { ...note, content } : note))
    );
  };

  if (!isOpen) return;

  return (
    <div className={`modal ${isOpen ? "active" : ""}`}>
      <TopMenuButton />
      <div className="modal__content">
        <div className="modal__content--item">
          <input
            className="input input--title"
            type="text"
            value={noteInfo?.title === "제목 없음" ? "" : noteInfo?.title}
            onChange={handleChangeTitle}
          />
          <span>
            {noteInfo?.title === "제목 없음" ? 0 : noteInfo?.title.length}/20
          </span>
        </div>
        <div className="modal__content--item">
          <label>Created By</label>
          <span className="text">{noteInfo?.username}</span>
        </div>
        <div className="modal__content--item">
          <label>Created</label>
          <span className="text">{noteInfo?.createdTime}</span>
        </div>
        <div className="modal__content--item">
          <label>Last Edited Time</label>
          <span className="text">{noteInfo?.updatedTime}</span>
        </div>
        <div className="modal__content--item">
          <textarea
            id="content"
            name="content"
            cols={30}
            rows={10}
            maxLength={100}
            value={noteInfo?.content}
            onChange={handleChangeContent}
          />
          <span>{noteInfo?.content.length}/100</span>
        </div>
      </div>
    </div>
  );
};
