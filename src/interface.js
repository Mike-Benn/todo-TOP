export { createTaskButton , createProjectButton}

function createTaskButton() {
    let button = document.createElement('button');
    button.classList.add("addtask-btn");
    button.innerHTML = "<img src='../images/plusblue.png' alt='Picture of a blue plus sign'> <p>Add Task</p>";
    return button;      
    
}

function createProjectButton() {
    let button = document.createElement('button');
    button.classList.add("addproject-btn");
    button.innerHTML = "<img src='../images/plusgreen.png' alt='Picture of a green plus sign'> <p>Add Project</p>";
    return button;
}