// ==================================================Task=======================================================

// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

function hide(){
    let text = document.getElementById("text")
    if(text.style.display === "block"){
        text.style.display = "none"
    }else{
        text.style.display = "block"
    }
}

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let buttons = document.getElementById("seek")
buttons.onclick = function(){
    buttons.style.display = "none"
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

function userInfo(){
    let puts = document.getElementsByClassName("user")
    let userName = puts[0]
    let userAge = puts[1]
    console.log(`User name: ${userName.value}`)
    if(userAge.value > 17){
        console.log("You're 18 old! Welcome")
    }else{
        console.log("Oh, sorry but you can't see this material(((")
    }
}

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.



// ***- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

function check(){
    let arrWords = ["fuck", "shit"]
    let words = document.getElementById("word")
    let word = words.value
    for (const i of arrWords) {
        if(word === i){
            return alert(word + "!!!")
        }
    }
    return console.log(word)
}

// =================================================Practice====================================================

// - Создайте меню, которое раскрывается/сворачивается при клике

const menu = document.getElementById('menu');
const button = document.getElementById('button-menu');
button.onclick = function (e) {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)

function info(){
    let inputs = document.getElementsByTagName("input")
    for (const input of inputs) {
        console.log(input.value)
    }
}

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

function createTable(){

    let inputs = document.getElementsByClassName("table")
    let rows = inputs[0]
    let colums = inputs[1]
    let text = inputs[2]
    let table = document.createElement("table")
    for (let i = 0; i < rows.value; i++) {
        let tr = document.createElement("tr")
        table.appendChild(tr)
        for (let j = 0; j < colums.value; j++) {
            let td = document.createElement("td")
            td.innerText = text.value
            tr.appendChild(td)
        }
    }
    document.body.appendChild(table)

}