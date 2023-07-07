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
    <div className="top__wrapper">
      <button className="top__btn--close" onClick={handleClose}>
        닫기
      </button>
      <button className="top__btn--full" onClick={handleShowFullScreen}>
        전체화면
      </button>
    </div>
  );
};
