import { ChangeEvent, useState } from "react";

export const Login = () => {
  const [userId, setUserId] = useState<string>("");

  const handleChangeId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const handleLogin = () => {
    if (!userId) return;

    console.log("Login");
  };

  return (
    <div>
      <input type="text" value={userId} onChange={handleChangeId} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
