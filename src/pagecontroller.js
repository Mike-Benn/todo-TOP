import { ProjectList , Project } from "./task.js";
export { PageController };


function PageController() {
    let general = Project("General");
    let today = Project("Today");
    let weekly = Project("Weekly");

    let activeProject = general;
    let activeSidebar = general.getName();
    let addProjectActive = "false";
    let staticProjects = ProjectList();
    staticProjects.addProject(general);
    staticProjects.addProject(today);
    staticProjects.addProject(weekly);
    let dynamicProjects = ProjectList();
    

    const getActiveProject = () => activeProject;

    const getActiveSidebar = () => activeSidebar;

    const isAddProjectActive = () => addProjectActive;

    const getStaticProjects = () => staticProjects;

    const getDynamicProjects = () => dynamicProjects;

    const setActiveProject = (project) => {
        activeProject = project;
        
    }

    const setAddProjectActive = (value) => {
        addProjectActive = value;
        
        
    }

    return {
        getActiveProject,
        getActiveSidebar,
        isAddProjectActive,
        getStaticProjects,
        getDynamicProjects,
        setActiveProject,
        setAddProjectActive
        
    };


}