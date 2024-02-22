import { Project , Task } from "./task";
export { createTaskButton , createProjectButton , createConfirmProjectButton , createConfirmTaskButton , createDeleteButton , getProjectText , newProjectFromInput , newTaskFromInput , resetProjectInputValue , resetTaskInputValue }

function createTaskButton() {
    let button = document.createElement('button');
    button.classList.add("addtask-btn");
    button.dataset.state = "true";
    button.innerHTML = "<img src='../images/plusblue.png' alt='Picture of a blue plus sign' data-state='true'> <p data-state='true'>Add Task</p>";
    return button;      
    
}

function createProjectButton() {
    let button = document.createElement('button');
    button.classList.add("addproject-btn");
    button.dataset.state = "true";
    button.innerHTML = "<img src='../images/plusgreen.png' alt='Picture of a green plus sign' data-state='true'> <p data-state='true'>Add Project</p>";
    return button;
}

function createConfirmTaskButton() {
    let confirmContainer = document.createElement('div');
    confirmContainer.classList.add('addproject-popup');
    let input = document.createElement('input');
    input.type = 'text';
    input.name = 'TaskName';
    input.id = 'task_name';
    input.value = '';
    input.setAttribute("maxlength" , "45");

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

function createConfirmProjectButton() {
    let confirmContainer = document.createElement('div');
    confirmContainer.classList.add('addproject-popup');
    let input = document.createElement('input');
    input.type = 'text';
    input.name = 'ProjectName';
    input.id = 'project_name';
    input.value = '';
    input.setAttribute("maxlength" , "20");
    

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



function getProjectText() {
    let inputElement = document.querySelector('#project_name');
    let projectName = inputElement.value;
    return projectName;
}

function getTaskText() {
    let inputElement = document.querySelector('#task_name');
    let taskName = inputElement.value;
    return taskName;

}

function newProjectFromInput() {
    let projectName = getProjectText();
    let newProject = Project(projectName);
    return newProject;

}

function newTaskFromInput() {
    let taskName = getTaskText();
    let newTask = Task(taskName);
    return newTask;
}


function resetProjectInputValue() {
    let projectInput = document.querySelector('#project_name');
    projectInput.value = "";

}

function resetTaskInputValue() {
    let taskInput = document.querySelector('#task_name');
    taskInput.value = "";
}

function createDeleteButton() {
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = "<img src='../images/x.png' alt='Picture of a green X'>";
    return deleteButton;

}

