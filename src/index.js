import './style.css';
import { PageController } from "./pagecontroller.js";
import { ProjectList , Project , Task } from './task.js';
import { createTaskButton , createProjectButton , createConfirmProjectButton , createDeleteButton , newTaskFromInput , newProjectFromInput , resetProjectInputValue , resetTaskInputValue , createConfirmTaskButton} from './interface.js';


// Bugs:

// Possible to create blank tasks and projects
// Possible to create too long of name tasks
// Possible to create duplicate tasks - maybe ok?


function ScreenController() {
    const mainHeader = document.querySelector('#main-header');
    const page = PageController();
    const dynamicProjects = page.getDynamicProjects();
    const createProjectBtn = createProjectButton();
    const confirmProjectBtn = createConfirmProjectButton();
    const createTaskBtn = createTaskButton();
    const confirmTaskBtn = createConfirmTaskButton();
    const generalButton = document.querySelector('#General');
    const todayButton = document.querySelector('#Today');
    const weeklyButton = document.querySelector('#Weekly');
    

    generalButton.addEventListener('click' , setActiveProjectListener);
    todayButton.addEventListener('click' , setActiveProjectListener);
    weeklyButton.addEventListener('click' , setActiveProjectListener);
    createProjectBtn.addEventListener('click' , toggleAddProjectListener);
    confirmProjectBtn.querySelector('.project-add-btn').addEventListener('click' , addProjectConfirmListener); 
    confirmProjectBtn.querySelector('.project-cancel-btn').addEventListener('click' , toggleAddProjectListener);
    createTaskBtn.addEventListener('click' , toggleAddTaskListener);
    confirmTaskBtn.querySelector('.project-add-btn').addEventListener('click' , addTaskConfirmListener);
    confirmTaskBtn.querySelector('.project-cancel-btn').addEventListener('click' , toggleAddTaskListener);
    
    
    console.log(page.getActiveProject().getName());
    
    
    
    
    



    
    

    const updateMainScreen = () => {
        let headerContainer = document.querySelector('#main-header');
        let contentContainer = document.querySelector('#main-body');
        let taskContainer = document.querySelector('#task-container');
        let taskButtonContainer = document.querySelector('.task-button-holder');
        let activeProject = page.getActiveProject();
        

        while (headerContainer .firstChild) {
            headerContainer.removeChild(headerContainer.firstChild);
        }

        while (taskContainer.firstChild) {
            taskContainer.removeChild(taskContainer.firstChild);

        }

        while (taskButtonContainer.firstChild) {
            taskButtonContainer.removeChild(taskButtonContainer.firstChild);
        }

        if (activeProject) {
            let header = document.createElement('h2');
            header.textContent = activeProject.getName();
            mainHeader.appendChild(header);
            
            
            for (const [key , value] of activeProject.getTasks().entries()) {
                let taskHolder = document.createElement('div');
                taskHolder.classList.add('task-holder');
                
                let deleteButton = createDeleteButton();
                deleteButton.dataset.value = `${key}`;
                deleteButton.querySelector('img').dataset.value = `${key}`;
                deleteButton.querySelector('img').src = '../images/x-black.png';
                deleteButton.querySelector('img').alt = 'Picture of a black X';
                deleteButton.addEventListener('click' , deleteTaskListener);
                
                let currTask = document.createElement('div');
                currTask.classList.add('task');
                currTask.textContent = key;

                taskHolder.appendChild(currTask);
                taskHolder.appendChild(deleteButton);
                taskContainer.appendChild(taskHolder);


            }
        } 
        
        if (page.getActiveProject()) {
            if (page.isAddTaskActive() === "false") {
            
            
                taskButtonContainer.appendChild(createTaskBtn);
                
                
                
            } else {
                taskButtonContainer.appendChild(confirmTaskBtn);
                resetTaskInputValue();
                
            }    
        }
        


    }

    const updateSidebar = () => {
        
        let activeProject = page.getActiveProject();
        let staticProjects = page.getStaticProjects().getProjects();
        let dynamicProjects = page.getDynamicProjects().getProjects();
        let projectContainer = document.querySelector('#project-container');
        let projectButtonContainer = document.querySelector('.project-button-holder');
        
        while (projectContainer.firstChild) {
            projectContainer.removeChild(projectContainer.firstChild);
        }

        while (projectButtonContainer.firstChild) {
            projectButtonContainer.removeChild(projectButtonContainer.firstChild);
        }

        if (activeProject) {
            for (const [key , value] of staticProjects.entries()) {
                if (activeProject.getName() === key) {
                    page.getActiveProjectElement().classList.remove('active');
                    let activeElement = document.querySelector(`#${key}`)
                    activeElement.classList.add('active');
                    page.setActiveProjectElement(activeElement);
                    
                }
            }
        }

        for (const [key , value] of dynamicProjects.entries()) {
            let currProj = document.createElement('button');
            currProj.classList.add('side-image');
            currProj.dataset.value = key;
            currProj.id = `${key}`;
            currProj.addEventListener('click' , setActiveProjectListener);

            let projectNameContainer = document.createElement('div');
            projectNameContainer.classList.add('project-name-container');

            let projectImage = document.createElement('img');
            projectImage.src = '../images/checklist.png';
            projectImage.alt = 'Picture of a green clipboard containing a green checklist';
            projectImage.dataset.value = `${key}`;

            let projectName = document.createElement('p');
            projectName.textContent = `${key}`;
            projectName.dataset.value = `${key}`;

            let deleteButton = createDeleteButton();
            deleteButton.dataset.value = `${key}`;
            deleteButton.querySelector('img').dataset.value = `${key}`;
            deleteButton.addEventListener('click' , deleteProjectListener);

            projectNameContainer.appendChild(projectImage);
            projectNameContainer.appendChild(projectName);
            currProj.appendChild(projectNameContainer);
            currProj.appendChild(deleteButton);
            projectContainer.appendChild(currProj);
            
            if (page.getActiveProject()) {
                if (activeProject.getName() === key) {
                    page.getActiveProjectElement().classList.remove('active');
                    let activeElement = document.getElementById(key);
                    activeElement.classList.add('active');
                    page.setActiveProjectElement(activeElement);
                    
                }
            }
            
        }
        if (page.isAddProjectActive() === "false") {
            projectButtonContainer.appendChild(createProjectBtn);
            
            
            
        } else {
            projectButtonContainer.appendChild(confirmProjectBtn);
            resetProjectInputValue();
            
        }
          
    }

    

    

    function toggleAddProjectListener(e) {
        let result = e.target.dataset.state;
        page.setAddTaskActive("false");
        page.setAddProjectActive(result);
        updateSidebar();
        updateMainScreen();
           
    }

    function toggleAddTaskListener(e) {
        let result = e.target.dataset.state;
        page.setAddProjectActive("false");
        page.setAddTaskActive(result);
        updateSidebar();
        updateMainScreen();

    }

    function addProjectConfirmListener(e) {
        let result = e.target.dataset.state;
        page.setAddProjectActive(result);

        let newProject = newProjectFromInput();
        let dynamicProjects = page.getDynamicProjects();
        
        dynamicProjects.addProject(newProject);
        updateSidebar();
        updateMainScreen();
        
    }

    function addTaskConfirmListener(e) {
        let result = e.target.dataset.state;
        page.setAddTaskActive(result);

        let newTask = newTaskFromInput();
        let activeProject = page.getActiveProject();

        activeProject.addTask(newTask);
        let staticProjects = page.getStaticProjects();
        let dynamicProjects = page.getDynamicProjects();
        if (staticProjects.getProjects().has(activeProject.getName())) {
            staticProjects.getProjects().set(activeProject.getName() , activeProject);
            page.setActiveProject(activeProject);
        } else {
            dynamicProjects.getProjects().set(activeProject.getName() , activeProject);
            page.setActiveProject(activeProject);
        }
        updateSidebar();
        updateMainScreen();

        
    }


    function setActiveProjectListener(e) {
        let staticProjects = page.getStaticProjects().getProjects();
        let dynamicProjects = page.getDynamicProjects().getProjects();
        
        if (staticProjects.has(e.target.dataset.value)) {
            page.setActiveProject(staticProjects.get(e.target.dataset.value));
            console.log(page.getActiveProject().getName());
            
            
        } else {
            page.setActiveProject(dynamicProjects.get(e.target.dataset.value));
            console.log(page.getActiveProject().getName());
            
            
               
        }
        page.setAddTaskActive("false");
        page.setAddProjectActive("false");
        updateSidebar();
        updateMainScreen();
        
    }
    
    function deleteProjectListener(e) {
        e.stopPropagation();
        let projectToRemove = e.target.dataset.value;
        let dynamicProjects = page.getDynamicProjects().getProjects();

        dynamicProjects.delete(projectToRemove);

        if (page.getActiveProject()) {
            if (page.getActiveProject().getName() === projectToRemove) {
                page.setActiveProject(undefined);
            }
        } 
        updateSidebar();
        updateMainScreen();
        
    }

    function deleteTaskListener(e) {
        e.stopPropagation();
        let taskToRemove = e.target.dataset.value;
        let tasks = page.getActiveProject().getTasks();

        tasks.delete(taskToRemove);
        updateMainScreen();
        
    }


    return {
        updateMainScreen,
        updateSidebar
    }

}



let test = ScreenController();

test.updateMainScreen();
test.updateSidebar();

