// selectionner les elements dans le DOM
const saisi = document.querySelector('.saisi')
const submit = document.querySelector('.submit')
const todolist = document. querySelector('.todolist')
// ecouteurs
submit.addEventListener('click',settodo);

// fonction
function settodo(event){
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

 function saveTodo(todo){
    //  verifié l'existance des taches dans localstorage
    let todos = [];
    if (localStorage.getItem("todos")!= null){
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
 }