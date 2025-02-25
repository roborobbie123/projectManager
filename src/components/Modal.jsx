import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, ref }) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })

    return createPortal(
        <dialog className="py-5 px-5 rounded-lg" ref={dialog}>
            {children}
            <form method="dialog">
                <button className="my-3 rounded-sm bg-stone-700 text-white px-3 hover:bg-stone-200 hover:text-stone-950">Close</button>
            </form></dialog>,
        document.getElementById('modal-root')
    );
}