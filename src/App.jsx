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
    if (projectsList.length < 1) {
      setAddProjectMenu(true);
    } else {
      setAddProjectMenu(prev => !prev);
    }
  }

  function handleSelectedProject(projectTitle) {
    setAddProjectMenu(false);
    if (projectsList) {
      setSelectedProject(projectsList.find(p => p.title === projectTitle));
    }
    else {
      setSelectedProject('');
    }

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
        setSelectedProject('');
      }
      return updatedList;
    });
  }

  function handleAddTask(projectTitle, task) {
    setProjectsList((prevData) => {
      const updatedProjects = prevData.map((project) =>
        project.title === projectTitle
          ? { ...project, tasks: project.tasks ? [...project.tasks, task] : [task] }
          : project
      );

      if (selectedProject.title === projectTitle) {
        const updatedProject = updatedProjects.find((p) => p.title === projectTitle);
        setSelectedProject(updatedProject);
      }

      return updatedProjects;
    });
  }

  function handleDeleteTask(projectTitle, task) {
    setProjectsList((prevData) => {
      const updatedProjects = prevData.map((project) =>
        project.title === projectTitle
          ? { ...project, tasks: project.tasks && [...project.tasks.filter(item => item !== task)]}
          : project
      );

      if (selectedProject.title === projectTitle) {
        const updatedProject = updatedProjects.find((p) => p.title === projectTitle);
        setSelectedProject(updatedProject);
      }

      return updatedProjects;
    });
  }




  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onClick={handleProjectMenu} projects={projectsList} selectedProject={selectedProject} handleProject={handleSelectedProject} />
      {addProjectMenu ? <NewProject onSelect={handleSelectedProject} onClick={handleProjectMenu} addProject={handleAddProject} /> : <Project onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} project={selectedProject} onDelete={handleDelete} />}


    </main>
  );
}

export default App;
