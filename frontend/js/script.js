const tbody = document.querySelector('tbody');
const addForm = document.querySelector('.add-form');
const inputTask = document.querySelector('.input-form');
const inputBtn = document.querySelector('.add-btn');

const fetchTasks = async () => {
  const response = await fetch('http://localhost:8888/tasks');
  const tasks = await response.json();
  console.log(tasks);
  return tasks;
}

const addTask = async (event) => {
  event.preventDefault();
  const task = {title: inputTask.value}
  await fetch('http://localhost:8888/tasks',{
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(task),
  })
  inputTask.value = '';
  loadTasks();
}

const deleteTask = async (id) => {
  await fetch(`http://localhost:8888/tasks/${id}`,{
    method: 'delete'
});
  loadTasks();
}

const updateTask = async (task) => {
  const {id,title,status} = task;
  console.log(JSON.stringify({title,status},null,2));
  await fetch(`http://localhost:8888/tasks/${id}`,{
    method: 'put',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({title,status}),
});
}
 
const loadTasks = async () => {
  const tasks = await fetchTasks();
  tbody.innerHTML = '';
  tasks.forEach((task) => {
    const tr = createRow(task);
    tbody.appendChild(tr);
  });
}

const formatTime = (dateISO) => {
const options = {dateStyle: 'long', timeStyle: 'short'}
const date = new Date(dateISO).toLocaleString('en-us',options);
return date;
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
  const { id, title, status, created } = task;

  const tr = createElement('tr');
  const tdTitle = createElement('td', title);
  const tdCreated = createElement('td', formatTime(created));
  const tdStatus = createElement('td');
  const tdOptions = createElement('td');
  const select = createSelect(status);
  const editButton = createElement('button', '', '<span class="material-symbols-outlined">edit_note</span>');
  const deleteButton = createElement('button', '', '<span class="material-symbols-outlined">delete</span>');

  editForm = createElement('form');
  editInput = createElement('input');
  editInput.value = title;
  editForm.appendChild(editInput);

  editForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    await updateTask({id,title: editInput.value,status});
    loadTasks();
  });

  editButton.addEventListener('click', () => {
    tdTitle.innerText = '';
    tdTitle.appendChild(editForm);
  });


  editButton.classList.add('btn');
  deleteButton.classList.add('btn');

  deleteButton.addEventListener('click', () => deleteTask(id));
  select.addEventListener('change',({target}) => updateTask({id,title,status: target.value}));

  tdStatus.appendChild(select);
  tdOptions.appendChild(deleteButton);
  tdOptions.appendChild(editButton);
  tr.appendChild(tdTitle);
  tr.appendChild(tdCreated);
  tr.appendChild(tdStatus);
  tr.appendChild(tdOptions);

  return tr;
}

addForm.addEventListener('submit',addTask);
inputBtn.addEventListener('click',addTask);
loadTasks();