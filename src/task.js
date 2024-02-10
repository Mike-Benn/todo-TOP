


function TaskList() {
    let name = "";
    let tasks = [];

    const getName = () => name;

    const setName = (name) => {
        this.name = name;
    };

    const getTasks = () => tasks;

    const setTasks = (taskList) => {
        tasks = taskList;
    };

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
        setTasks,
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