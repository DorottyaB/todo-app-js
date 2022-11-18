import { saveTodoList, getTodoList, projects } from './storage';
import {
  editTask,
  removeTask,
  showUpcomingTasks,
  showTodaysTasks,
  showHighPriorityTasks,
  showProjectTasks,
} from './tasks';
import { addProject, deleteProject } from './projects';
import './style.css';

//Show message if there are no tasks to show
function noTasksMsg() {
  const content = document.getElementById('content');
  if (content.innerHTML === '') {
    const msg = document.createElement('h4');
    msg.classList.add('no-tasks-msg');
    msg.textContent = 'There are no tasks';
    content.appendChild(msg);
  }
}

// Populate the main form's option fields with the projects' name
function populateOptions() {
  const selectProject = document.getElementById('project');
  selectProject.innerHTML = '';
  for (let project of projects) {
    const option = document.createElement('option');
    option.classList.add('option');
    option.value = project.name;
    option.innerHTML = project.name;
    selectProject.appendChild(option);
  }
}

function createTaskRow(task) {
  const listItem = document.createElement('div');
  const rightSide = document.createElement('div');
  const leftSide = document.createElement('div');
  const checkbox = document.createElement('input');
  const todo = document.createElement('p');
  const dueDate = document.createElement('p');
  const edit = document.createElement('a');
  const remove = document.createElement('a');

  checkbox.setAttribute('type', 'checkbox');

  listItem.classList.add('list-item');
  for (let project of projects) {
    if (task.project === project.name) {
      listItem.classList.add(`list-item__${project.color}`);
    }
  }
  rightSide.classList.add('right-side');
  leftSide.classList.add('left-side');
  todo.classList.add('todo');
  dueDate.classList.add('due-date');
  edit.classList.add('edit');
  remove.classList.add('remove');

  // If the task is completed remove info and buttons, then remove the task itself
  checkbox.onclick = function () {
    if (checkbox.checked) {
      task.isDone = true;
      todo.style.color = '#bababa';
      todo.style.textDecoration = 'line-through';
      rightSide.removeChild(dueDate);
      rightSide.removeChild(ellipsisContainer);
      checkbox.disabled = true;
      setTimeout(function () {
        document.querySelector('#content').removeChild(listItem);
        const todoList = getTodoList();
        todoList.removeTask(task.title);
        saveTodoList(todoList);
        noTasksMsg();
      }, 2000);
    }
  };

  edit.onclick = editTask;
  remove.onclick = removeTask;

  todo.textContent = task.title;
  edit.textContent = 'Edit';
  edit.setAttribute('href', '#');
  remove.textContent = 'Remove';
  remove.setAttribute('href', '#');
  const formattedDate = task.date.replaceAll('-', '.');
  dueDate.textContent = `${formattedDate}.`;

  const ellipsisContainer = document.createElement('div');
  ellipsisContainer.classList.add('ellipsis');
  const ellipsis = document.createElement('span');
  ellipsis.textContent = '•••';
  ellipsisContainer.appendChild(ellipsis);

  const editContainer = document.createElement('div');
  editContainer.classList.add('hidden', 'edit-container');

  ellipsisContainer.onclick = () => {
    editContainer.classList.toggle('hidden');
  };

  leftSide.appendChild(checkbox);
  leftSide.appendChild(todo);
  editContainer.appendChild(edit);
  editContainer.appendChild(remove);
  rightSide.appendChild(dueDate);
  rightSide.append(ellipsisContainer);
  rightSide.appendChild(editContainer);
  listItem.appendChild(leftSide);
  listItem.appendChild(rightSide);
  document.querySelector('#content').appendChild(listItem);
}

function openForm() {
  const form = document.querySelector('.new-task-form');
  form.classList.remove('hidden');
  const overlay = document.querySelector('.overlay');
  overlay.classList.remove('hidden');
}

function closeForm() {
  const form = document.querySelector('.new-task-form');
  form.classList.add('hidden');
  const overlay = document.querySelector('.overlay');
  overlay.classList.add('hidden');
}

function updateForm(type) {
  const mainBtn = document.getElementById('main-btn');
  const formTitle = document.getElementById('formTitle');
  const closeIcon = document.getElementById('closeForm');
  if (type === 'edit') {
    mainBtn.textContent = 'Save';
    formTitle.textContent = 'Edit Task';
    closeIcon.classList.add('hidden');
  } else {
    document.querySelector('#addTask').value = '';
    document.querySelector('#date').value = '';
    mainBtn.textContent = 'Add Task';
    formTitle.textContent = 'Add New Task';
    closeIcon.classList.remove('hidden');
  }
}

const dropdown = document.getElementById('dropdown');

function toggleDropdown() {
  dropdown.classList.toggle('hidden');
  if (dropdown.classList.contains('hidden')) {
    document.getElementById('expand').setAttribute('d', 'M19.5 8.25l-7.5 7.5-7.5-7.5');
  } else {
    document.getElementById('expand').setAttribute('d', 'M4.5 15.75l7.5-7.5 7.5 7.5');
  }
}
const popup = document.getElementById('new-project');

function showProjectForm(e) {
  e.stopPropagation();
  popup.classList.remove('hidden');
  document.getElementById('name').focus();
  document.querySelector('.add-project').classList.add('hidden');
}

function closePopup() {
  popup.classList.add('hidden');
  document.querySelector('.add-project').classList.remove('hidden');
}

document.querySelector('.btn-close-popup').onclick = closePopup;

const category = document.querySelector('.category');
// Load the same category of tasks the user was viewing
function updateCurrentTasks() {
  if (category.innerHTML === 'Upcoming') {
    showUpcomingTasks();
  } else if (category.innerHTML === 'Today') {
    showTodaysTasks();
  } else if (category.innerHTML === 'High Priority') {
    showHighPriorityTasks();
  } else {
    showProjectTasks(category.innerHTML);
  }
}

const projectForm = document.querySelector('.add-project-form');

function createProjectsList(project) {
  const dropdownItem = document.createElement('li');
  dropdownItem.classList.add('dropdown-item');
  dropdownItem.setAttribute('id', project.color);

  const dropdownLink = document.createElement('a');
  dropdownLink.textContent = project.name;
  dropdownLink.setAttribute('href', '#');
  dropdownLink.classList.add('dropdown-item-link');

  const remove = document.createElement('a');
  remove.textContent = '×';
  remove.setAttribute('href', '#');
  remove.title = 'delete';
  remove.classList.add('delete');

  dropdownItem.appendChild(dropdownLink);
  dropdownItem.appendChild(remove);
  document.getElementById('dropdown').appendChild(dropdownItem);

  dropdownLink.onclick = showTasks;
  remove.onclick = deleteProject;
}

function showTasks(e) {
  const name = e.target.textContent;
  showProjectTasks(name);
  noTasksMsg();
}

projectForm.onsubmit = addProject;

export {
  noTasksMsg,
  populateOptions,
  createTaskRow,
  closeForm,
  openForm,
  updateForm,
  toggleDropdown,
  showProjectForm,
  updateCurrentTasks,
  closePopup,
  createProjectsList,
};
