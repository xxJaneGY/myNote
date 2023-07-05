import { useState } from "react";

export const Logout = () => {
  const [userId, setUserId] = useState<string>("");

  const handleLogout = () => {
    //confirm popup open
    setUserId("");
    //toast popup show
  };

  return (
    <div>
      <span>{userId}</span>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};
