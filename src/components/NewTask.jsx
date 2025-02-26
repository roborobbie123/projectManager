import { useState } from "react";

export default function NewTask({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event) {
        setEnteredTask(event.target.value)
    }
    
    function handleClick() {
        onAdd(enteredTask)
        setEnteredTask('');
    }

    return (
        <div className="flex items-center gap-4">
            <input onChange={handleChange} value={enteredTask} className="w-64 px-2 py-1 rounded-sm bg-stone-200" type="text"/>
            <button onClick={handleClick} className="mx-5 text-stone-700 hover:text-stone-300">Add Task</button>
        </div>
    );
}