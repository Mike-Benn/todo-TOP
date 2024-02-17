export { ProjectList , Project , Task }



function ProjectList() {
    let projects = new Map();

    const getProjects = () => projects;

    const addProject = (project) => {
        if (projects.has(project.getName())) {
            alert('Please choose a unique project name');
        } else {
            projects.set(project.getName() , project);
            console.log(projects);
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
    let tasks = [];

    const getName = () => name;

    const setName = (nameValue) => {
        name = nameValue;
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