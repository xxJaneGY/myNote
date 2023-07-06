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
    <div className="auth">
      <input
        className="input auth__input"
        type="text"
        placeholder="이름을 입력해 주세요"
        value={name}
        onChange={handleChangeId}
      />
      <button className="btn auth__btn" onClick={handleLogin}>
        LOGIN
      </button>
    </div>
  );
};
