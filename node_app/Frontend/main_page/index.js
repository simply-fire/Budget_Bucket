
var flag = 0;


function show_nb() {
    let x = document.getElementsByClassName('nav_bar');
    x[0].classList.toggle('active');
}

// script for animation

let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 100;
let speed = 5;

let max = 5000;
let spent = 4401;
let left = max - spent;

let prog = (spent / max) * 100;

let progress = setInterval(() => {
    progressValue++;
    var col = "#6200ff";
    if (progressValue > 25) {
        col = "#00ff08";
    }
    if (progressValue > 50) {
        col = "#ffdd00";
    }
    if (progressValue > 75) {
        col = "#ff8c00";
    }
    if (progressValue > 85) {
        col = "#d90909";
    }
    // valueContainer.textContent = ``;
    progressBar.style.background = `conic-gradient(
        ${col} ${Math.ceil(progressValue) * 3.6}deg,
        #B1B1B1 ${Math.ceil(progressValue) * 3.6}deg
  )`;
    if (progressValue == Math.ceil(prog)) {
        clearInterval(progress);
    }
}, speed);

// script for animation ends

// integration with main page

budget = {
    extra: 0,
    amount: 0,
    categories: ['transport', 'food', 'entertainment', 'utilities', 'miscellaneous'],
    spendings: {
        total_spent: 0,

    }
}

let category = "";




// function foodi() { category = "food"; }
// function cloth() { category = "cloth"; }
// function transport() { category = "transport"; }
// function medical() { category = "medical"; }
// function entertainment() { category = "entertainment"; }
// function utilities() { category = "utilities"; }
// function education() { category = "education"; }


function display_but() {

    let parent = document.getElementsByClassName("but_cont")[0];
    for (i in budget.categories) {
        let e = document.createElement('button');
        e.id = budget.categories[i];
        e.onclick = function () {
            category = this.id;

        };
        e.onfocus = function () {
            if (flag === 0) {
                this.style.background = "black";
                this.style.color = "white";
                flag = 1;
            }
        }

        e.onblur = function () {
            this.style.background = "white";
            this.style.color = "black";

            flag = 0;
        }
        e.innerHTML = budget.categories[i];
        e.className = "catbut";
        parent.appendChild(e);
        // console.log(`${i}`);
    }
}

display_but();




function add_amount() {
    if (category != "") {

        let date = new Date();
        let month = date.getMonth();
        month++;
        let fulldate = date.getDate() + "-" + month + "-" + date.getFullYear();
        let fulltime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        let date_time = fulldate + "_" + fulltime;
        let amount = document.getElementById("aip");
        transaction = {
            date: fulldate,
            time: fulltime,
            category: category,
            amount: amount.value
        }
        budget.spendings[date_time] = transaction;
        category = "";
    }
    else {
        alert("select the category first!!!");
    }

    console.log(budget.spendings);

    flag = 0;

    for (i in budget.categories) {
        document.getElementsByClassName("catbut")[i].style.background = "white";
    }

    document.getElementById("aip").value = "";
}

function add() {

    const div = document.createElement("div");
    const form = document.createElement("form");
    const input = document.createElement("input");
    div.id = "container";
    form.id = "form";
    input.id = "new_category";
    input.setAttribute("type", "text");


    document.body.appendChild(div);
    document.getElementById("container").appendChild(form);
    document.getElementById("form").appendChild(input);


    document.getElementById("container").appendChild(done_btn);
    done_btn.innerHTML = "done";

}

const done_btn = document.createElement("button");
done_btn.addEventListener("click", function () {
    const ele = document.getElementById("new_category")
    if (ele.value != "" && amount.value != "") {
        category = ele.value;
        add_amount();
        document.getElementById("container").remove();
    }
});



// integration with main page ends