const addbtn = document.querySelector('.inputField__Add');
const inputTodo = document.querySelector('.inputField__text');
const todoList = document.querySelector('.todoList');
const innerPending = document.querySelector('#numPending');
const innerDone = document.querySelector('#numDone');
let penNum = 0;
let doneNum = 0;
let clearBtn = 0;
const showTodo = ()=>{
    console.log("click")

if (inputTodo.value !== ""){
    let html = `
    <div class="todoList__checkbox">
        <label for=${inputTodo.value}></label>
        <input type="checkbox" id=${inputTodo.value}>
        <div class="item__checkbox"></div>
    </div>
    <span class="todo_text" >${inputTodo.value}</span>
    <div class="todoList__edit" ><i class="far fa-edit"></i></div>
    <div class="todoList__delete" ><i class="far fa-trash-alt"></i></div>
    `
    const newTodoitem = document.createElement('li');
    newTodoitem.setAttribute("class", "item__text");
    newTodoitem.innerHTML = html;
    todoList.appendChild(newTodoitem);
    inputTodo.value = ""
    if(clearBtn>0){
        penNum = document.querySelector('.todoList').childNodes.length;
        innerPending.innerHTML = penNum;
    }else{
        penNum = document.querySelector('.todoList').childNodes.length-1;
        innerPending.innerHTML = penNum;
    }
    
}else{
    console.log('error')
}
    
}
document.querySelector('.wrapper').addEventListener('click',(event)=>{
    console.log(event.target)
<<<<<<< HEAD
=======
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    console.log(checkboxes.length)
    // console.log(document.querySelector('.todoList').childNodes.length-1)
>>>>>>> ec8825f6c71e7fda2a6039fc850fa813d4bdefa7
    if(event.target.parentNode.classList.contains("todoList__delete")){
        // event.target
        event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
        penNum -= 1;
        innerPending.innerHTML = penNum;
    }
    if(event.target.classList.contains("todoList__delete")){
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
        penNum -= 1;
        innerPending.innerHTML = penNum;
    }
    if(event.target.parentNode.classList.contains("todoList__checkbox")){
        event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
        penNum -= 1;
        doneNum += 1;
        innerPending.innerHTML = penNum;
        innerDone.innerHTML = doneNum;
    }
    if(event.target.parentNode.classList.contains("moreItem__clear")){

        while (todoList.lastChild){
            todoList.removeChild(todoList.lastChild)
        }
        
        penNum = 0;
        innerPending.innerHTML = penNum;
        clearBtn += 1;
        // todoList.appendChild("")
    }
    
    if(event.target.parentNode.classList.contains("todoList__edit")|event.target.classList.contains("todoList__edit")){
        console.log(event.target.parentNode.parentNode)
        const editScreen = document.querySelector('.edit');
        editScreen.classList.remove("hidden");
        document.querySelector('.edit').addEventListener('click',(e)=>{
            console.log(event.target.parentNode.parentNode)
            if(e.target.classList.contains("edit__okaybtn")){
                const editInput = document.querySelector('.edit__input');
                const editScreen = document.querySelector('.edit');
                if(editInput.value){
                    // console.log(event.target.parentNode.parentNode)
                    let new_text = `
                    <div class="todoList__checkbox">
                        <label for=${editInput.value}></label>
                        <input type="checkbox" id=${editInput.value}>
                        <div class="item__checkbox"></div>
                    </div>
                    <span class="todo_text" >${editInput.value}</span>
                    <div class="todoList__edit" ><i class="far fa-edit"></i></div>
                    <div class="todoList__delete" ><i class="far fa-trash-alt"></i></div>
                    `

                    const liTag = event.target.parentNode.parentNode;
                    liTag.innerHTML = new_text;
                    editScreen.classList.add("hidden");
                    editInput.value = "";
                }
                // console.log( event.target.parentNode.parentNode.classList.contains("todo_text"));
                
            }
            
        })
    }
        
    innerDone.innerHTML = checkboxes.length;
})

addbtn.addEventListener('click', showTodo)
