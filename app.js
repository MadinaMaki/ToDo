let task = document.querySelector('.task');

let button = document.querySelector('.button');
let doneBtn = document.querySelector('.done');
let removeBtn = document.querySelector('.remove');
let deleteBtn = document.querySelector('.delete');
let inputText = document.querySelector('#input_text');
let taskEnter = document.querySelector('.task_enter');
let save = taskEnter.querySelector('#save');

button.addEventListener('click', function () {
    taskEnter.classList.toggle('task_saving');
    inputText.classList.remove('red');
    inputText.value = '';
});

inputText.addEventListener('change', function (){
    if(inputText.value.trim() === '') {
        inputText.classList.add('red')
    } else {
        inputText.classList.remove('red')
    }
});

save.addEventListener('click', function () {
    if (inputText.value.trim() !== '') {
        let input = document.createElement('input');
        input.type = 'checkbox';

        let span = document.createElement('span');

        let label = document.createElement('label');
        label.append(input);
        label.append(span);

        let parent = document.createElement('div');
        task.append(parent);

        let taskInner = document.createElement('div');
        parent.append(taskInner);
        taskInner.classList.add('task_inner');

        let taskButton = document.createElement('button');
        taskButton.classList.add('task_button');
        taskInner.append(label);
        taskInner.append(taskButton);
        taskButton.innerText = 'Удалить задачу';

        span.innerText = inputText.value;
        inputText.value = '';

        input.addEventListener('click', function () {
            let tasks = document.querySelectorAll('.task_inner');
            tasks.forEach(function (item) {
                let taskInput = item.querySelector('input');
                if (taskInput.checked === true) {
                    item.classList.add('complete');
                } else {
                    item.classList.remove('complete');
                }
            });
        });

        taskButton.addEventListener('click', function () {
            taskButton.parentElement.parentElement.remove();
        });
    }
    save.parentElement.classList.remove('task_saving');
});

// Добавление задачи с помощью модального окна
// button.addEventListener('click', function () {
//     let taskEnter = document.querySelector('.task_enter');
//     taskEnter.classList.add('task_saving');
//
//     taskEnter
//
//     let input = document.createElement('input');
//     input.type = 'checkbox';
//
//     let span = document.createElement('span');
//
//     let label = document.createElement('label');
//     label.append(input);
//     label.append(span);
//
//     let parent = document.createElement('div');
//     parent.classList.add('task');
//     document.body.append(parent);
//
//     let taskInner = document.createElement('div');
//     parent.append(taskInner);
//     taskInner.classList.add('task_inner');
//
//     let taskButton = document.createElement('button');
//     taskButton.classList.add('task_button');
//     taskInner.append(label);
//     taskInner.append(taskButton);
//     taskButton.innerText = 'Удалить задачу';
//
//     span.innerText
//     span.innerText = prompt('Введите задачу');
//
//     input.addEventListener('click', function () {
//         let tasks = document.querySelectorAll('.task_inner');
//         tasks.forEach(function (item) {
//             let taskInput = item.querySelector('input');
//             if (taskInput.checked === true) {
//                 item.classList.add('complete');
//             } else {
//                 item.classList.remove('complete');
//             }
//         });
//     });
//
//     taskButton.addEventListener('click', function (){
//         taskButton.parentElement.parentElement.remove();
//     })
// });

doneBtn.addEventListener('click', function () {
    let tasks = document.querySelectorAll('.task_inner');
    tasks.forEach(function (task) {
        let taskInput = task.querySelector('input');
        if (taskInput.checked === false) {
            taskInput.checked = true;
        }
        task.classList.add('complete');
    });
    save.parentElement.classList.remove('task_saving');
});

removeBtn.addEventListener('click', function () {
    let tasks = document.querySelectorAll('.task_inner');
    tasks.forEach(function (task) {
        let taskInput = task.querySelector('input');
        if (taskInput.checked === true) {
            taskInput.checked = false;
        }
        task.classList.remove('complete');
    });
    save.parentElement.classList.remove('task_saving');
});

deleteBtn.addEventListener('click', function () {
    let parent = document.querySelectorAll('div');
    parent.forEach(function (item) {
        if (item.classList.contains('complete')) {
            item.parentElement.remove();
        }
    });
    save.parentElement.classList.remove('task_saving');
});

