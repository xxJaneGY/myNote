import { useAtom, useSetAtom } from "jotai";
import { isCheckedAuthAtom, usernameAtom } from "../../atoms/myNote.atom";

export const Logout = () => {
  const [username, setUsername] = useAtom(usernameAtom);
  const setIsCheckedAuth = useSetAtom(isCheckedAuthAtom);

  const handleLogout = () => {
    //confirm popup open
    setUsername("");
    setIsCheckedAuth(false);
    localStorage.clear();
    //toast popup show
  };

  return (
    <div>
      <span>{username}</span>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};
