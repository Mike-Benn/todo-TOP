import './style.css';
import { PageController } from "./pagecontroller.js";
import { ProjectList , Project , Task } from './task.js';





function ScreenController() {
    const page = PageController();
    const mainHeader = document.querySelector('#main-header');
    const content = document.querySelector("#main-body");
    

    const updateScreen = () => {

        let activeProject = page.getActiveProject();
        let test1 = Task();
        test1.setName("test1");
        let test2 = Task();
        test2.setName("test2");
        activeProject.addTask(test1);
        activeProject.addTask(test2);

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

    }

    return {
        updateScreen
    }

}

let test = ScreenController();
test.updateScreen();