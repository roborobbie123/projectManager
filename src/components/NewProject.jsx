import Input from "./Input.jsx";
import Modal from "./Modal.jsx";
import { useRef } from 'react'

export default function NewProject({ onClick, addProject, onSelect }) {
    const modal = useRef();
    let title = useRef();
    let description = useRef();
    let dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            modal.current.open();
            return;
        }

        const project = {
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        }
        addProject(project);
    }

    return (
        <>
        <Modal ref={modal}>
            <h2 className="uppercase font-bold">Invalid Input</h2>
            <p>Oops... looks like you didn't fill out the form</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button onClick={() => onClick()} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                <li><button onClick={handleSave} className="bg-stone-800 rounded-md text-stone-50 hover:bg-stone-950 px-6 py-2">Save</button></li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title" />
                <Input ref={description} label="Description" textArea />
                <Input type="date" ref={dueDate} label="Due Date" />
            </div>
        </div>
        </>
    );
}
