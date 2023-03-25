budget = JSON.parse(Android.load_budget_data());

category = document.getElementById("categories");
function display_cat() {
    let list = category.children;
    while (list.length != 0) {
        category.removeChild(list[0]);
        list = category.children;
    }
    for (i in budget.categories) {
        let cat = document.createElement('button');
        cat.innerHTML = budget.categories[i];
        cat.className = "cat_buts";

        if (i > 4) {
            cat.id = budget.categories[i];
            cat.addEventListener("click", function () {

                var index = budget.categories.indexOf(this.id);
                budget.categories.splice(index, 1);
                Android.add_budget_data(JSON.stringify(budget));
                console.log(budget.categories);
                display_cat();
            });
        }
        category.appendChild(cat);
    }
}

function add_cat() {
    if (budget.categories.length == 8) {
        console.log("Extra_ category : limit reached");
    }
    else {
        let category = document.getElementById("cat");
        console.log(category);
        let val = category.value;
        budget.categories.push(val);
        display_cat();
    }

    Android.add_budget_data(JSON.stringify(budget));
}

function edit_budget_amount() {
    budget.amount = document.getElementById("bud").value;
    console.log(budget.amount);
    Android.add_budget_data(JSON.stringify(budget));
}

display_cat();

