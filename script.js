var task, taskSbmt, taskList, list, listItem;
//element/tags
task = document.querySelector('#task');
taskSbmt = document.querySelector('#task-submit');
taskList = document.querySelector('#task-list');
list = document.createElement('ul');

// Delete Button
// Update Button
taskList.appendChild(list)

const addTask = (e) => {
    //on click,
    e.preventDefault();
    //get input value
    listItem = document.createElement('li');
    let taskText = document.createTextNode(task.value);
    let deleteBtn = document.innerHTML = '<p>X</p>'
    list.appendChild(listItem)
    listItem.appendChild(taskText);
}

const deleteTask = (e) =>{

}
 
const updateTask = (e) =>{

} 
// Event Listners
taskSbmt.addEventListener('click', addTask);

// add task function

// var task;
//task can be object with 
//task, status, time created, time it took to create
//Toggle time mode, Time Created - Time modified