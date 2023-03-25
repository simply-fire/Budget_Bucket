budget = {extra : 0,
        amount : 0,
        categories:['transport','food', 'entertainment', 'utilities'],
        spendings :{
            total_spent :0,
            11_09_22_12_56 :{date : "aaj ka date", time: 'abhi ka time', amount: "100",category: "food"}
        }
    }
category=document.getElementById("categories");
function display_cat() {
    let list = category.children;
    while(list.length!=0)
    {
        category.removeChild(list[0]);
        list = category.children;
    }
    for(i in budget.categories){
        let cat = document.createElement('button');
        cat.innerHTML = budget.categories[i];
        
        if(i >= 4){
        cat.id=budget.categories[i];
           cat.addEventListener("click",function(){
           
            var index= budget.categories.indexOf(this.id);
            budget.categories.splice(index,1);
            console.log(budget.categories);
            budget.extra -= 1;
            display_cat();
           });
        }
        category.appendChild(cat);
    }
}

function add_cat(){
    if (budget.extra == 3){
        console.log("Extra_ category : limit reached");
    }
    else{
        
        let cat = document.getElementById("category");
        console.log(cat);
        let val = cat.value;
        budget.categories.push(val);
        budget.extra += 1;
        display_cat();
    }
}
function edit_budget_amount(){
    budget.amount = document.getElementById("budget_amount").value;
    console.log(budget.amount);
}

display_cat();
