import NewTask from "./NewTask";
import { useState } from "react";

export default function Tasks({ onAdd, onDelete, project }) {

    console.log(project)
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask onAdd={(newTask) => onAdd(project.title, newTask)} />
            {!project.tasks && <p className="text-stone-800 my-4">This projects has no tasks yet</p>}
            <ul className="mt-10">
                
                    {project.tasks && project.tasks.map((task, index) => <div key={index} className="w-1/2 flex justify-between items-center"><li>{task} </li><button onClick={() => onDelete(project.title, task)} className="bg-stone-950 rounded-md text-stone-50 hover:bg-stone-700 px-3 py-2 ml-5 my-3">Clear</button></div>)}
                
            </ul>
        </section>
    );
}