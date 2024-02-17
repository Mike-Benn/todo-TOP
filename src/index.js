import './style.css';
import { PageController } from "./pagecontroller.js";
import { ProjectList , Project , Task } from './task.js';
import { createTaskButton , createProjectButton , createConfirmProjectButton , getText , newProjectFromInput , resetInputValue} from './interface.js';





function ScreenController() {
    const mainHeader = document.querySelector('#main-header');
    const page = PageController();
    let activeSidebar = page.getActiveSidebar();
    const dynamicProjects = page.getDynamicProjects();
    const createProjectBtn = createProjectButton();
    const confirmProjectBtn = createConfirmProjectButton();
    

    
    createProjectBtn.addEventListener('click' , toggleAddProjectListener);
    confirmProjectBtn.querySelector('.project-add-btn').addEventListener('click' , addProjectConfirmListener); 
    confirmProjectBtn.querySelector('.project-cancel-btn').addEventListener('click' , toggleAddProjectListener);
    
    

    
    const addProject = document.querySelector('.addproject-btn');
    const addProjectPopup = document.querySelector('.addproject-popup');
    const projectAddBtn = document.querySelector('.project-add-btn');
    const projectCancelBtn = document.querySelector('.project-cancel-btn');
    
    
    



    
    

    const updateMainScreen = () => {
        let content = document.querySelector("#main-body");
        let activeProject = page.getActiveProject();
        

        while(content.firstChild) {
            content.removeChild(content.firstChild);

        }
        let header = document.createElement('h2');
        header.textContent = activeProject.getName(); 
        mainHeader.appendChild(header);

        for (const task of activeProject.getTasks()) {
            let currTask = document.createElement('div');
            currTask.classList.add('task');
            currTask.textContent = task.getName();
            content.appendChild(currTask);
            
        }

        let button = createTaskButton();
        button.style.fontSize = "16px";
        content.appendChild(button);


    }

    const updateSidebar = () => {
        let projects = page.getDynamicProjects().getProjects();
        let sidebar = document.querySelector('#sidebar-two');
        
        while (sidebar.firstChild) {
            sidebar.removeChild(sidebar.firstChild);
        }

        for (const project in projects) {
            let currProj = document.createElement('button');
            currProj.classList.add('side-image');
            currProj.innerHTML = "<img src='../images/checklist.png' alt='Picture of a green clipboard containing a green checklist'> <p>Name</p>";
            sidebar.appendChild(currProj);
            
        }
        if (page.isAddProjectActive() === "false") {
            sidebar.appendChild(createProjectBtn);
            
            
        } else {
            sidebar.appendChild(confirmProjectBtn);
            resetInputValue();
            
        }
          
    }

    

    

    function toggleAddProjectListener(e) {
        let result = e.target.dataset.state;
        page.setAddProjectActive(result);
        updateSidebar();
           
    }

    function addProjectConfirmListener(e) {
        let result = e.target.dataset.state;
        page.setAddProjectActive(result);

        let newProject = newProjectFromInput();
        let dynamicProjects = page.getDynamicProjects();
        dynamicProjects.addProject(newProject);
        updateSidebar();
        

    }
    
    
    return {
        updateMainScreen,
        updateSidebar
    }

}



let test = ScreenController();

test.updateMainScreen();
test.updateSidebar();