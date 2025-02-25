export default function Project({project, onDelete}) {
    console.log(project);
    return(
        
        <div className="w-[35rem] mt-16 flex flex-col gap-3">
            <p className="text-xl font-bold uppercase">{project.title}</p>
            <p>{project.description}</p>
            <p className="text-sm font-thin">{project.dueDate}</p>
            <p><button onClick={() => onDelete(project.title)}className="bg-stone-950 rounded-md text-stone-50 hover:bg-stone-700 px-6 py-2">Delete</button></p>
            
        </div>
    );
}