import { useAtomValue, useSetAtom } from "jotai";
import { noteIdAtom, noteInfoAtom, usernameAtom } from "../atoms/myNote.atom";
import dayjs from "dayjs";
import uuid from "react-uuid";

export const CreatePageButton = () => {
  const userId = localStorage.getItem("userId");
  const username = useAtomValue(usernameAtom);
  const setNoteList = useSetAtom(noteInfoAtom);
  const noteList = useAtomValue(noteInfoAtom);
  const noteId = `note-${uuid()}`;
  const setNoteId = useSetAtom(noteIdAtom);

  const handleCreatePage = () => {
    if (!username || !userId) return;
    //제목없음으로 생성 (list)

    console.log("noteList", noteList);

    setNoteList((prev) => [
      ...prev,
      {
        userId,
        username,
        id: noteId,
        title: "제목 없음",
        createdTime: dayjs().valueOf(),
        content: "",
        updatedTime: dayjs().valueOf(),
      },
    ]);
    setNoteId(noteId);

    //createPage 펼치기
  };
  return (
    <div className="create--wrapper">
      <button className="btn create__btn" onClick={handleCreatePage}>
        새로 만들기
      </button>
      <span className="divide__line" />
    </div>
  );
};
