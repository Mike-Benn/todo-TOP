import { ProjectList , Project } from "./task.js";
export { PageController };


function PageController() {
    let general = Project("General");
    let generalElement = document.querySelector('#General');
    let today = Project("Today");
    let weekly = Project("Weekly");

    let activeProject = general;
    let activeProjectElement = generalElement;
    let activeSidebar = general.getName();
    let addProjectActive = "false";
    let addTaskActive = "false";
    let staticProjects = ProjectList();
    staticProjects.addProject(general);
    staticProjects.addProject(today);
    staticProjects.addProject(weekly);
    let dynamicProjects = ProjectList();
    

    const getActiveProject = () => activeProject;

    const getActiveProjectElement = () => activeProjectElement;

    const isAddProjectActive = () => addProjectActive;

    const isAddTaskActive = () => addTaskActive;

    const getStaticProjects = () => staticProjects;

    const getDynamicProjects = () => dynamicProjects;

    const setActiveProject = (project) => {
        activeProject = project;
        
    };

    const setActiveProjectElement = (element) => {
        activeProjectElement = element;
    }

    const setAddProjectActive = (value) => {
        addProjectActive = value;
        
        
    }

    const setAddTaskActive = (value) => {
        addTaskActive = value;
    }

    return {
        getActiveProject,
        getActiveProjectElement,
        isAddProjectActive,
        isAddTaskActive,
        getStaticProjects,
        getDynamicProjects,
        setActiveProject,
        setActiveProjectElement,
        setAddProjectActive,
        setAddTaskActive
        
    };


}