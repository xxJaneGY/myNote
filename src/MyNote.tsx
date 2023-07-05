import { Login } from "./auth/login/Login";
import { MyNoteListPage } from "./list/MyNoteListPage";
import { Logout } from "./auth/logout/Logout";

export const MyNote = () => {
  const isAuth = false;

  const handleCreatePage = () => {
    //제목없음으로 생성 (list)
    //createPage 펼치기
  };
  return (
    <>
      {isAuth ? <Logout /> : <Login />}
      <h1>MyNote</h1>
      <button onClick={handleCreatePage}>새로 만들기</button>
      <MyNoteListPage />
    </>
  );
};
