import {
  addProjectToStorage,
  removeProjectFromStorage,
  getTodoList,
  saveTodoList,
  projects,
} from './storage';
import {
  populateOptions,
  createProjectsList,
  closePopup,
  updateCurrentTasks,
} from './domManipulation';
import { showUpcomingTasks } from './tasks';

class Project {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}

const projectForm = document.querySelector('.add-project-form');

function addProject(e) {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const color = document.querySelector('#color').value;
  const newProject = new Project(name, color);

  projects.forEach(project => {
    if (project.name === newProject.name) {
      alert('Project already exists');
      newProject.name = '';
      return;
    }
  });

  addProjectToStorage(newProject);
  createProjectsList(newProject);

  closePopup();
  projectForm.reset();

  // Populate the main form's option fields with the projects' name
  populateOptions();
}

function deleteProject(e) {
  const name = e.target.previousElementSibling.textContent;
  removeProjectFromStorage(name);
  const todoList = getTodoList();
  for (let task of todoList.tasks) {
    if (task.project === name) {
      todoList.removeTask(task.title);
    }
  }
  saveTodoList(todoList);
  const projectElement = e.target.parentNode;
  document.getElementById('dropdown').removeChild(projectElement);
  if (document.querySelector('.category').innerHTML !== name) {
    updateCurrentTasks();
  } else {
    showUpcomingTasks();
  }
  populateOptions();
}

export { addProject, deleteProject };
