const tbody = document.querySelector('tbody');

const fetchTasks = async () => {
  const response = await fetch('http://localhost:8888/tasks');
  const tasks = await response.json();
  return tasks;
}

const createElement = (tag, innerText = '') => {
  const element = document.createElement(tag);
  element.innerText = innerText;
  return element;
}

const task = {
  id: 3,
  title: 'Example task',
  created: 'April 13th',
  status: 'Done'
};

const createRow = (task) => {
 const {id, title, status, created} = task;

 const tr = createElement('tr');
 const tdTitle = createElement('td',title);
 const tdCreated = createElement('td',created);
 const tdStatus = createElement('td');
 const tdOptions = createElement('td');
 
 tr.appendChild(tdTitle);
 tbody.appendChild(tr);
}

createRow(task); 