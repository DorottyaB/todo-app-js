import {
  createTaskRow,
  openForm,
  updateForm,
  updateCurrentTasks,
  closeForm,
} from './domManipulation';
import { addTaskToStorage, getTask, getTodoList, onLoad, removeTaskFromStorage } from './storage';

class Todo {
  constructor() {
    this.tasks = [];
  }

  addTask(newTask) {
    this.tasks.push(newTask);
  }

  removeTask(title) {
    this.tasks = this.tasks.filter(task => task.title !== title);
  }

  removeTaskByProjectName(project) {
    this.tasks = this.tasks.filter(task => task.project !== project);
  }

  getTask(title) {
    return this.tasks.find(task => task.title === title);
  }
}

class Task {
  constructor(title, date, priority, project) {
    this.title = title;
    this.date = date;
    this.priority = priority;
    this.project = project;
    this.isDone = false;
  }
}

const addTaskForm = document.querySelector('.new-task-form');

const category = document.querySelector('.category');

function showUpcomingTasks() {
  onLoad();
}

function showTodaysTasks() {
  category.innerHTML = 'Today';
  document.querySelector('#content').innerHTML = '';

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  // Using international date format
  today = yyyy + '-' + mm + '-' + dd;

  const todoList = getTodoList();
  for (let task of todoList.tasks) {
    if (task.date === today) {
      createTaskRow(task);
    }
  }
}

function showHighPriorityTasks() {
  category.innerHTML = 'High Priority';
  document.querySelector('#content').innerHTML = '';
  const todoList = getTodoList();
  for (let task of todoList.tasks) {
    if (task.priority === 'high') {
      createTaskRow(task);
    }
  }
}

function showProjectTasks(name) {
  category.innerHTML = name;
  document.querySelector('#content').innerHTML = '';
  const todoList = getTodoList();
  for (let task of todoList.tasks) {
    if (task.project === name) {
      createTaskRow(task);
    }
  }
}

function getTaskFromInput() {
  const title = document.querySelector('#addTask').value;
  const date = document.querySelector('#date').value;
  const priority = document.querySelector('#priority').value;
  const project = document.querySelector('#project').value;
  return new Task(title, date, priority, project);
}

function addTask(e) {
  e.preventDefault();
  const newTask = getTaskFromInput();
  addTaskToStorage(newTask);
  updateForm('add');
  closeForm();
  // document.querySelector('#addTask').value = '';
  updateCurrentTasks();
}

function removeTask(e) {
  const title = e.target.parentNode.parentNode.parentNode.firstChild.lastChild.innerHTML;
  console.log(title);
  removeTaskFromStorage(title);
  updateCurrentTasks();
}

function editTask(e) {
  const title = e.target.parentNode.parentNode.parentNode.firstChild.lastChild.innerHTML;
  const todo = getTask(title);
  document.querySelector('#addTask').value = todo.title;
  document.querySelector('#addTask').focus();
  document.querySelector('#date').value = todo.date;
  document.querySelector('#priority').value = todo.priority;
  document.querySelector('#project').value = todo.project;
  updateForm('edit');
  openForm();
  removeTaskFromStorage(title);
  updateCurrentTasks();
}

addTaskForm.onsubmit = addTask;

export {
  Todo,
  showUpcomingTasks,
  showTodaysTasks,
  showHighPriorityTasks,
  showProjectTasks,
  editTask,
  removeTask,
};
