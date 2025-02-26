import Tasks from "./Tasks";

export default function Project({project, onDelete, onAddTask, onDeleteTask}) {
    
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
    
    return(
        <div className="w-[35rem] mt-16 flex flex-col gap-3">
            <p className="text-xl font-bold uppercase">{project.title} <button onClick={() => onDelete(project.title)}className="ml-20 bg-stone-950 rounded-md text-xs text-stone-50 hover:bg-stone-700 px-6 py-2">Delete</button></p>
            
            <p className="text-sm font-thin">{formattedDate}</p>
            <p>{project.description}</p>
            <br></br>
            <hr></hr>
            <Tasks project={project} onAdd={onAddTask} onDelete={onDeleteTask}/>
            
        </div>
    );
}