export { ProjectList , Project , Task }


function ProjectList() {
    let projects = new Map();

    const getProjects = () => projects;

    const addProject = (project) => {
        if (projects.has(project.getName())) {
            alert('Please choose a unique project name');
        } else if (project.getName().length < 1) {
            alert('Please choose a name for your project');
        } else {
            projects.set(project.getName() , project);
            
        }   
    };

    const deleteProject = (project) => {
        projects.delete(project.getName());
    }

    return {
        getProjects,
        addProject,
        deleteProject
    };
}

function Project(nameValue) {
    let name = nameValue;
    let tasks = new Map();

    const getName = () => name;

    const setName = (nameValue) => {
        name = nameValue;
    };

    const getTasks = () => tasks;

    const addTask = (task) => {
        if (task.getName().length < 1) {
            alert('Please choose a name for your task');
        } else if (tasks.has(task.getName())) {
            alert('Please choose a unique name for your task');
        } else {
            tasks.set(task.getName() , task);
        }

    };

    const sortTasks = () => {
        let sorted = [];
        let length = tasks.length;

        if (length == 0 || length == 1) {
            return;
        } 

        sorted.push(tasks[0]);
        for (let i = 1; i < length; i++) {
            for(let j = 0; j <= sorted.length; j++) {
                if (j == sorted.length) {
                    sorted.push(tasks[i]);
                    break;
                } else if (tasks[i].getDate() <= sorted[j].getDate()) {
                    sorted.splice(j , 0 , tasks[i]);
                    break;
                }
            }
           
        }
        tasks = sorted;

    };

    return {
        getName,
        setName,
        getTasks,
        addTask,
        sortTasks

    };

}

function Task(value) {
    let name = value;
    let date = new Date();

    const getName = () => name;

    const getDate = () => date;

    const setName = (nameValue) => {
        name = nameValue;
    };

    const setDate = (dateValue) => {
        date = dateValue;
    };

    return {
        getName,
        getDate,
        setName,
        setDate
    };

}