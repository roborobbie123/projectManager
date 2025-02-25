import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import Project from "./components/Project";
import { projects } from "./data";

import { useState } from "react";

function App() {
  const [addProjectMenu, setAddProjectMenu] = useState(false);
  const [projectsList, setProjectsList] = useState(projects);
  const [selectedProject, setSelectedProject] = useState(projects[0]);


  function handleProjectMenu() {
    setAddProjectMenu(prev => !prev);
  }

  function handleSelectedProject(projectTitle) {
    setAddProjectMenu(false);
    setSelectedProject(projectsList.find(p => p.title === projectTitle));
  }

  function handleAddProject(project) {
    setProjectsList(prevData => {
      const updatedProjects = prevData ? [...prevData, project] : [project];
      return updatedProjects;
    })
  }

  function handleDelete(projectTitle) {
    setProjectsList(prevData => {
      const updatedList = prevData.filter((project) => project.title !== projectTitle);

      if (updatedList.length > 0) {
        setSelectedProject(updatedList[0]);
      } else {
        setAddProjectMenu(true);
      }
      return updatedList;
    });

  }



  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onClick={handleProjectMenu} projects={projectsList} handleProject={handleSelectedProject} />
      {addProjectMenu ? <NewProject onClick={handleProjectMenu} addProject={handleAddProject} /> : <Project project={selectedProject} onDelete={handleDelete} />}


    </main>
  );
}

export default App;
