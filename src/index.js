const addProjectBtn = document.querySelector('.add-project');
const addTaskBtn = document.querySelector('.add-task');
const editProjectBtn = document.querySelector('.edit-project-title');
const deleteTaskBtn = document.querySelector('.delete-task');
const dayProjects = document.querySelector('.day');
const weekProjects = document.querySelector('.week');
const modal = document.querySelector('.modal');
const form = document.querySelector('.form');
const saveProjectBtn = document.querySelector('.save-project');
const titleInput = document.getElementById('title-input');
const projectDescription = document.getElementById('project-description');
const titleText = document.querySelector('.title-text');
const title = document.querySelector('.title');
const taskText = document.querySelector('.task-text');
const tasks = document.querySelector('.tasks');
const task = document.querySelector('.task');
const projectContainer = document.getElementById('project-container');
let projectList = [];
function createProject(projecTitle, projectDesc) {
  return {
    projecTitle,
    projectDesc,
  };
}

addProjectBtn.addEventListener('click', addProject);
addTaskBtn.addEventListener('click', addTask);
editProjectBtn.addEventListener('click', editProject);
deleteTaskBtn.addEventListener('click', deleteTask);
saveProjectBtn.addEventListener('click', saveProject);

function addProject() {
  modal.style.visibility = 'visible';
  form.style.display = 'block';
  form.reset();
}
function editProject() {
  console.log('edit project title');
}
function saveProject() {
  const newProject = createProject(titleInput.value, projectDescription.value);
  projectList.push(newProject);
  // console.log(projectList);
  const p = projectList.map((item) => {
    return /*html */ `<div class="project">
                                        <h3 class='project-title'>${item.projecTitle}</h3>
                                        <p style='display:none'>${item.projectDesc}</p>
                                        <button class="btn delete-project">rem</button>
                                      </div>`;
  });

  projectContainer.innerHTML = p.join('');

  const projectTitles = document.querySelectorAll('.project-title');
  const deleteProjectBtns = document.querySelectorAll('.delete-project');
  const projects = document.querySelectorAll('.project');

  deleteProjectBtns.forEach((btn) => {
    btn.addEventListener('click', deleteProject);
  });
  projects.forEach((p) => {
    p.addEventListener('click', showProjectDetails);
  });
  removeModal();
}

function deleteProject(e) {
  console.log(projectList);
  // console.log(e.currentTarget);
  e.currentTarget.parentElement.remove();
  projectList.filter((project, index, value) => project.index !== index);
  console.log(projectList);
}

function showProjectDetails(e) {
  projectTitle = e.currentTarget.children[0].textContent;
  projectDesc = e.currentTarget.children[1].textContent;
  title.innerHTML = projectTitle;
  taskText.textContent = projectDesc;
}

function addTask() {
  console.log('add new task');
  tasks.innerHTML += /*html */ `<div class='task'>
  <input placeholder='task' type="text"/>
  </div>`;
}
function deleteTask() {
  console.log('delete task');
}

function editTask() {
  console.log('edit task');
}

function removeModal() {
  modal.style.visibility = 'hidden';
  form.style.display = 'none';
}
