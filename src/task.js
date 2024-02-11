export { ProjectList , Project , Task }



function ProjectList() {
    let projects = {};

    const getProjects = () => projects;

    const addProject = (project) => {
        projects[project.getName()] = project;
    };

    const deleteProject = (project) => {
        delete projects[project.getName()];
    }

    return {
        getProjects,
        addProject,
        deleteProject
    };
}



function Project(name) {
    let name = name;
    let tasks = [];

    const getName = () => this.name;

    const setName = (name) => {
        this.name = name;
    };

    const getTasks = () => tasks;

    const addTask = (task) => {
        tasks.push(task);

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


function Task() {
    let name = "";
    let date = new Date();

    const getName = () => name;

    const getDate = () => date;

    const setName = (name) => {
        this.name = name;
    };

    const setDate = (date) => {
        this.date = date;
    };

    return {
        getName,
        getDate,
        setName,
        setDate
    };

}