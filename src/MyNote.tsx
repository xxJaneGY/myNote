import { useAtomValue } from "jotai";
import { Login } from "./auth/login/Login";
import { MyNoteListTitle } from "./components/MyNoteListTitle";
import { Logout } from "./auth/logout/Logout";
import { MyNoteCreatePage } from "./create/MyNoteCreatePage";
import { isCheckedAuthAtom, noteInfoAtom } from "./atoms/myNote.atom";
import { CreatePageButton } from "./components/CreatePageButton";

export const MyNote = () => {
  const noteList = useAtomValue(noteInfoAtom);
  const isCheckedAuth = useAtomValue(isCheckedAuthAtom);

  return (
    <div className="container">
      <div className="header">
        <h1 className="logo">MyNote</h1>
        {isCheckedAuth ? <Logout /> : <Login />}
      </div>
      <CreatePageButton />
      <div className="note--list">
        {noteList
          .map((note) => <MyNoteListTitle key={note.id} data={note} />)
          .reverse()}
      </div>
      <MyNoteCreatePage />
    </div>
  );
};
