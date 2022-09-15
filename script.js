const addTask = document.getElementById('add-task')
const taskContainer = document.getElementById('task-container')
const inputTask = document.getElementById('input-task')

addTask.addEventListener('click', () => {
    if (inputTask.value === "") {
        alert('Please input a task before adding');
        return;
    } 
    let task = document.createElement('div');
    task.classList.add('task')

    let li=document.createElement('li')
    li.innerText=`${inputTask.value}`
    task.appendChild(li)

    let checkButton = document.createElement("button")
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('check-task')
    task.appendChild(checkButton)

    let deleteButton = document.createElement("button")
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('delete-task')
    task.appendChild(deleteButton)

    taskContainer.appendChild(task);
    inputTask.value=""

    checkButton.addEventListener('click', () => {
        checkButton.parentElement.style.textDecoration = 'line-through'
    })

    deleteButton.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains('fa-trash-can')) {
            target.parentElement.parentElement.remove();
        } else if (target.classList.contains('delete-task')) {
            target.parentElement.remove();
        }
    });
})