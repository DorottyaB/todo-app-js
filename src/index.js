import { showTodaysTasks, showHighPriorityTasks, showUpcomingTasks } from './tasks';
import {
  populateOptions,
  toggleDropdown,
  showProjectForm,
  noTasksMsg,
  closeForm,
  openForm,
} from './domManipulation';
import { onLoad } from './storage';

// On Load
populateOptions();
onLoad();
noTasksMsg();

if (window.innerWidth < 1024) {
  const nav = document.querySelector('nav');
  function showNav() {
    nav.classList.remove('hidden');
  }
  function hideNav() {
    nav.classList.add('hidden');
  }
  const navIcon = document.getElementById('navIcon');
  navIcon.addEventListener('click', showNav);
  const closeNavIcon = document.getElementById('closeNav');
  closeNavIcon.addEventListener('click', hideNav);
  const navItems = document.querySelectorAll('li.nav-item');
  navItems.forEach(item => item.addEventListener('click', hideNav));
  const dropdownLink = document.querySelectorAll('.dropdown-item-link');
  dropdownLink.forEach(item => item.addEventListener('click', hideNav));
}

const openFormBtn = document.getElementById('openForm');
openFormBtn.addEventListener('click', openForm);

const closeFormBtn = document.getElementById('closeForm');
closeFormBtn.addEventListener('click', closeForm);

// Set the date input's default value to the current date
Date.prototype.toDateInputValue = function () {
  let local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
};
document.getElementById('date').value = new Date().toDateInputValue();

// Event Listeners
document.querySelector('.upcoming').addEventListener('click', () => {
  showUpcomingTasks();
  noTasksMsg();
});

document.querySelector('.today').addEventListener('click', () => {
  showTodaysTasks();
  noTasksMsg();
});

document.querySelector('.high-priority').addEventListener('click', () => {
  showHighPriorityTasks();
  noTasksMsg();
});

document.querySelector('.projects').addEventListener('click', toggleDropdown);
document.querySelector('.add-project').addEventListener('click', showProjectForm);
