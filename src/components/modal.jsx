import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

const Modal = ({ children, title, body, isOpen, close }) => {
  return (
    <>
      {isOpen &&
        createPortal(
          <div
            className="absolute top-0 w-full h-full bg-slate-800/80 z-50 flex items-center justify-center"
            onClick={close}
          >
            <div
              className="bg-slate-700 w-1/3 h-1/4 rounded-lg flex flex-col items-start justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between w-full py-3 px-4 border-b border-slate-600">
                {title}
                <IoClose className="w-5 h-5 cursor-pointer" onClick={close} />
              </div>
              <div className="py-3 px-4">{body}</div>
              <div className="flex items-center justify-end gap-2 w-full py-3 px-4 border-t border-slate-600">
                {children}
              </div>
            </div>
          </div>,
          document.getElementById("modal")
        )}
    </>
  );
};

export default Modal;
