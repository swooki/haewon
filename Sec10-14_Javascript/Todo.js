alert("connected");
let todos = [];
let lis = document.querySelectorAll("li");
alert("number of lis: " + lis.length);

for(let i = 0 ; lis.length; i++ ){
    lis[i].addEventListener("mouseover", function() {
        this.style.color = "green";
    })
    lis[i].addEventListener("mouseout", function () {
        this.style.color = "black";
    })
}

// window.setTimeout(function () {
//     // put all of your JS code from the lecture here
//     let input = prompt("What would like to do?");
//     while (input !== "quit") {
//         if (input === "list") {
//             listTodos();
//         } else if (input === "delete") {
//             let index = Number(prompt("Enter index to delete"));
//             todos.splice(index,1);
//             listTodos();
//         } else if (input === "new") {
//             let newTodo = prompt("Add a new todo");
//             todos.push(newTodo);
//             console.log(todos);
//         } else if (input === "pr") {
//             printReverse(todos);
//         }
//         input = prompt("What would like to do?");
//     }
// }, 500);

function printReverse(arr) {
    console.log("------------------");
    for (let i = arr.length-1; i >= 0; i-- ){
        console.log('[' + i + '] ' + arr[i]);
    }
    console.log("------------------");
}

function myForEach(arr, funct) {
    for (let i=0; i< arr.length; i++)  {
        funct(arr[i], i, arr);
    }
}

function max(arr) {
    let maximum = arr[0];
    for (let i=1; i<arr.length; i++){
        if (arr[i] > maximum) {
            maximum  = arr[i];
        }
    }
    return maximum;
}

function listTodos() {
    console.log("*****************");
    todos.forEach(function (todo, index) {
        console.log('[' + index + '] ' + todo);
    })
    console.log("*****************");
}