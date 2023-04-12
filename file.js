let taskNameInput = document.querySelector('#task-name-input');
let addTaskBtn = document.querySelector('#add-task-btn');
let taskList = document.querySelector('#task-list');
let startMessage = document.querySelector('#start-message');

addTaskBtn.addEventListener('click',inputTaskHandler);

function createTask(text){
        let div = document.createElement('div');
        div.classList.add('task');

        let input = document.createElement('input');
        input.addEventListener('click', changTaskState);
        input.type = 'checkbox';

        let paragraf = document.createElement('p');
        paragraf.textContent = text;

        let btnRemove = document.createElement('button');
        btnRemove.classList.add('btn-remove');
        btnRemove.textContent = 'Видалити';
        btnRemove.addEventListener('click', function (){
                if(confirm("Ви дійсно хочете видалити завдання")){
                        div.remove();
                }
        });

        div.append(input);
        div.append(paragraf);
        div.append(btnRemove)
        return div;

};

function changTaskState(){
        if(this.checked){
                this.parentElement.classList.add('completed');
        }else{
                this.parentElement.classList.remove('completed');
        }
};
function inputTaskHandler(){
        if(taskNameInput.value){
                if(!startMessage.hidden){
                        startMessage.hidden = true
                }
                let newTask = createTask(taskNameInput.value);
                taskList.append(newTask);
                taskNameInput.value = '';
        }else{
                alert("Введіть ім'я завдання")
        }
}
    