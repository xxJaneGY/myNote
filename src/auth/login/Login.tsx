import { ChangeEvent, useState } from "react";
import { useSetAtom } from "jotai";
import uuid from "react-uuid";
import { isCheckedAuthAtom, usernameAtom } from "../../atoms/myNote.atom";

export const Login = () => {
  const userId = uuid();

  const [name, setName] = useState<string>("");
  const setUserName = useSetAtom(usernameAtom);
  const setIsCheckedAuth = useSetAtom(isCheckedAuthAtom);

  const handleChangeId = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleLogin = () => {
    if (!name) return;

    localStorage.setItem("userId", userId);
    setUserName(name);
    setIsCheckedAuth(true);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChangeId} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
