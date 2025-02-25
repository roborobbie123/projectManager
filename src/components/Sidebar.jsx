export default function Sidebar({ onClick, projects, handleProject }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <button onClick={() => onClick()} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 hover:bg-stone-600 text-stone-400 hover:text-stone-100">+ Add Project</button>
            </div> 
            <ul className="my-4">
                {!projects && <div>No current projects</div>}
                {projects && projects.map((project) => {
                    return <li key={project.title}><button onClick={() => handleProject(project.title)} className="my-2 px-4 py-2 text-xs md:text-base rounded-md bg-stone-900 hover:bg-stone-600 text-stone-400 hover:text-stone-100">{project.title}</button></li>
                })}
            </ul>
        </aside>
    );

}