import { Project } from "./task";
export { createTaskButton , createProjectButton , createConfirmProjectButton , getText , newProjectFromInput , resetInputValue}

function createTaskButton() {
    let button = document.createElement('button');
    button.classList.add("addtask-btn");
    button.innerHTML = "<img src='../images/plusblue.png' alt='Picture of a blue plus sign'> <p>Add Task</p>";
    return button;      
    
}

function createProjectButton() {
    let button = document.createElement('button');
    button.classList.add("addproject-btn");
    button.dataset.state = "true";
    button.innerHTML = "<img src='../images/plusgreen.png' alt='Picture of a green plus sign' data-state='true'> <p data-state ='true'>Add Project</p>";
    return button;
}

function createConfirmProjectButton() {
    let confirmContainer = document.createElement('div');
    confirmContainer.classList.add('addproject-popup');
    let input = document.createElement('input');
    input.type = 'text';
    input.name = 'ProjectName';
    input.id = 'project_name';
    input.value = '';
    

    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('project-addcancel-btns');

    let addButton = document.createElement('button');
    addButton.type = 'button';
    addButton.classList.add('project-add-btn');
    addButton.dataset.state = 'false';
    addButton.textContent = 'Add';

    let cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.classList.add('project-cancel-btn');
    cancelButton.dataset.state = 'false';
    cancelButton.textContent = 'Cancel';

    buttonContainer.appendChild(addButton);
    buttonContainer.appendChild(cancelButton);
    confirmContainer.appendChild(input);
    confirmContainer.appendChild(buttonContainer);

    return confirmContainer;


}



function getText() {
    let inputElement = document.querySelector('#project_name');
    let projectName = inputElement.value;
    return projectName;
}



function newProjectFromInput() {
    let projectName = getText();
    let newProject = Project(projectName);
    return newProject;

}

function resetInputValue() {
    let projectInput = document.querySelector('#project_name');
    projectInput.value = "";

}