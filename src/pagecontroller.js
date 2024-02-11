import { ProjectList , Project } from "./task.js";
export { PageController };


function PageController() {
    let general = Project("General");
    let today = Project("Today");
    let weekly = Project("Weekly");
    let activeProject = general;
    let staticProjects = ProjectList();
    staticProjects.addProject(general);
    staticProjects.addProject(today);
    staticProjects.addProject(weekly);

    const getActiveProject = () => activeProject;

    const getStaticProjects = () => staticProjects;

    const switchActiveProject = (project) => {
        activeProject = project;
    }

    return {
        getActiveProject,
        getStaticProjects,
        switchActiveProject
        
    };


}