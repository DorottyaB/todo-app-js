import { createTaskRow, createProjectsList } from './domManipulation';
import { Todo } from './tasks';

// LOCAL STORAGE
function saveTodoList(data) {
  localStorage.setItem('todoList', JSON.stringify(data));
}

function getTodoList() {
  const todoList = Object.assign(new Todo(), JSON.parse(localStorage.getItem('todoList')));
  return todoList;
}

function addTaskToStorage(task) {
  const todoList = getTodoList();
  todoList.addTask(task);
  saveTodoList(todoList);
}

function removeTaskFromStorage(title) {
  const todoList = getTodoList();
  todoList.removeTask(title);
  saveTodoList(todoList);
}

function getTask(title) {
  const todoList = getTodoList();
  return todoList.getTask(title);
}

function saveProjects() {
  localStorage.setItem('projects', JSON.stringify(projects));
}

let projects = JSON.parse(localStorage.getItem('projects')) || [];

function addProjectToStorage(newProject) {
  projects.push(newProject);
  saveProjects();
}

function removeProjectFromStorage(name) {
  projects = projects.filter(project => project.name !== name);
  saveProjects();
}

function onLoad() {
  const todoList = getTodoList();
  document.querySelector('.category').innerHTML = 'Upcoming';
  document.querySelector('#content').innerHTML = '';
  for (let task of todoList.tasks) {
    createTaskRow(task);
  }

  document.getElementById('dropdown').innerHTML = '';
  for (let project of projects) {
    createProjectsList(project);
  }
}

export {
  saveTodoList,
  addTaskToStorage,
  getTodoList,
  onLoad,
  removeTaskFromStorage,
  getTask,
  projects,
  addProjectToStorage,
  removeProjectFromStorage,
};
