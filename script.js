//importacion de los components
import checkComplete from './components/checkComplete.js';
import deleteIcon from './components/deleteIcon.js';

const btn = document.querySelector('[data-form-btn]');

//funcion para crear task
const createTask = (evento) => {
  evento.preventDefault(); //previene eventos/formatos form x defecto
  const input = document.querySelector('[data-form-input]');
  const value = input.value;
  const list = document.querySelector('[data-list]');
  const task = document.createElement('li');
  task.classList.add('card');
  input.value = '';
  //backticks
  const taskContent = document.createElement('div');

  const titleTask = document.createElement('span');
  titleTask.classList.add('task');
  titleTask.innerText = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);
 
  task.appendChild(taskContent);
  task.appendChild(deleteIcon());
  list.appendChild(task);
};

//Arrow functions o funciones anonimas
btn.addEventListener('click', createTask);