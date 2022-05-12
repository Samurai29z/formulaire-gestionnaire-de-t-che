// selectionner les elements dans le DOM
const saisi = document.querySelector('.saisi')
const submit = document.querySelector('.submit')
const todolist = document. querySelector('.todolist')
// ecouteurs
document.addEventListener('DOMcontenteLoaded',getTodos);
submit.addEventListener('click',settodo);
todolist.addEventListener('click', action);
// fonction
function settodo(event){
    if (saisi.value === '') {
        alert("Décrivez une tâche");
    }
    else{
     event.preventDefault();
     // creation du div
     const todoboxDiv = document.createElement("div");
     todoboxDiv.classList.add('todobox')
     // creation du boutton check
     const bouton= document.createElement('button');
     bouton.classList.add('btn');
     bouton.innerHTML = "<i class='fa-solid fa-check'></i>";
     todoboxDiv.appendChild(bouton);
     // creé le Li
     const newTodo = document.createElement('li');
     newTodo.classList.add('todoitem');
     newTodo.innerText = saisi.value;
     todoboxDiv.appendChild(newTodo);
     console.log(todoboxDiv);
     // ajout dans localStorage
     let tache = {
        content: saisi.value,
        action:"undone"
     }
     saveTodo(tache);
     // creation du boutton delete
     const boutton= document.createElement('button');
     boutton.classList.add('bttn');
     boutton.innerHTML = "<i class='fa-solid fa-xmark'></i>";
     todoboxDiv.appendChild(boutton);
     //  ajouté tout au todolist
     todolist.appendChild(todoboxDiv);
     //  rendre la case vide quand on ajoute
     saisi.value="";
    }
}

function saveTodo(todo){
     //  verifié l'existance des taches dans localstorage
    let todos = [];
    if (localStorage.getItem("todos")!= null){
    todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}
function getTodos(){
    //  verifié l'existance des taches dans localstorage
    let todos =[];
     if (localStorage.getItem("todos")!= null){
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(todobox => {
        // creation du div
    const todoboxDiv = document.createElement("div");
    todoboxDiv.classList.add('todobox')
    // creation du boutton check
    const bouton= document.createElement('button');
    bouton.classList.add('btn');
    bouton.innerHTML = "<i class='fa-solid fa-check'></i>";
    todoboxDiv.appendChild(bouton);
    // creé le Li
    const newTodo = document.createElement('li');
    newTodo.classList.add('todoitem');
    newTodo.innerText = todobox.content;
    todoboxDiv.appendChild(newTodo);
    // creation du boutton delete
    const boutton= document.createElement('button');
    boutton.classList.add('bttn');
    boutton.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    todoboxDiv.appendChild(boutton);
    //  ajouté tout au todolist
    todolist.appendChild(todoboxDiv);
    });
}
function action(event) {
    const item = event.target;
    //  delete todo
    if (item.classList[0] === "bttn"){
        item.parentNode.classList.add('fail')

        item.parentNode.remove();
    }
    // check todo
    if (item.classList[0] === "btn"){
        item.parentNode.classList.toggle('done')
    }
}