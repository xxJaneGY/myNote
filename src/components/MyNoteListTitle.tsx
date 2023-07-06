import { useSetAtom } from "jotai";
import { isCreatePageOpenAtom, noteIdAtom } from "../atoms/myNote.atom";
import { NoteInfo } from "../constant/model/myNote.model";
import { parseDateTime } from "../utils/myNote.utils";

interface Props {
  data: NoteInfo;
}

export const MyNoteListTitle = ({ data }: Props) => {
  const setIsOpen = useSetAtom(isCreatePageOpenAtom);
  const setNoteId = useSetAtom(noteIdAtom);

  const handleOpen = () => {
    setIsOpen(true);
    setNoteId(data.id);
  };

  return (
    <div className="note--item" onClick={handleOpen}>
      <span className="note--title">{data.title}</span>
      <span className="note--info">{`${data.username} / ${parseDateTime(
        data.createdTime
      )}`}</span>
    </div>
  );
};
