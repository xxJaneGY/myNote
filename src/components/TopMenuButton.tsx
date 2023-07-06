import { useSetAtom } from "jotai";
import { isCreatePageOpenAtom } from "../atoms/myNote.atom";

export const TopMenuButton = () => {
  const setIsOpen = useSetAtom(isCreatePageOpenAtom);

  const handleClose = () => {
    //수정 및 제출
    console.log("##close");
    setIsOpen(false);
  };

  const handleShowFullScreen = () => {
    console.log("##showFullScreen");
  };

  return (
    <div>
      <button onClick={handleClose}>닫기</button>
      <button onClick={handleShowFullScreen}>전체화면</button>
    </div>
  );
};
