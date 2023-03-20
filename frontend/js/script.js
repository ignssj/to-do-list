const tbody = document.querySelector('tbody');
const addForm = document.querySelector('.add-form');
const inputTask = document.querySelector('.input-form');

const fetchTasks = async () => {
  const response = await fetch('http://localhost:8888/tasks');
  const tasks = await response.json();
  return tasks;
}

const addTask = async (event) => {
  event.preventDefault();
  const task = {title: inputTask.value}
  await fetch('http://localhost:8888/tasks',{
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: task,
  })
}

const createElement = (tag, innerText = '',innerHTML = '') => {
  const element = document.createElement(tag);
  if(innerText){
    element.innerText = innerText; 
  }
  if(innerHTML){
    element.innerHTML = innerHTML;
  }
  return element;
}

const task = {
  id: 3,
  title: 'Example task',
  created: 'April 13th, 19:39:22',
  status: 'Done'
};

const createSelect = (val) => {

  const options = `
  <option value="To do">To do</option>
  <option value="Doing">Doing</option>
  <option value="Done">Done</option>
  `
  const select = createElement('select','',options);
  select.value = val;
  return select;
}

const createRow = (task) => {
 const {id, title, status, created} = task;

 const tr = createElement('tr');
 const tdTitle = createElement('td',title);
 const tdCreated = createElement('td',created);
 const tdStatus = createElement('td');
 const tdOptions = createElement('td');
 const select = createSelect(status);
 const editButton = createElement('button','','<span class="material-symbols-outlined">edit_note</span>');
 const deleteButton = createElement('button','','<span class="material-symbols-outlined">delete</span>');
 editButton.classList.add('btn');
 deleteButton.classList.add('btn');

 tdStatus.appendChild(select); 
 tdOptions.appendChild(deleteButton);
 tdOptions.appendChild(editButton);
 tr.appendChild(tdTitle);
 tr.appendChild(tdCreated);
 tr.appendChild(tdStatus);
 tr.appendChild(tdOptions);

 return tr;
}

const loadTasks = async () => {
  const tasks = await fetchTasks ();
  tasks.forEach((task) => {
    const tr = createRow(task);
    tbody.appendChild(tr);
  });
}

addForm.addEventListener('submit',addTask);
loadTasks();