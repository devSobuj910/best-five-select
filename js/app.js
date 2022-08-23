const orderList = document.getElementById('order_list')
const selectedBtn = document.getElementsByClassName('selected_btn');
for (let btn of selectedBtn) {
    btn.addEventListener('click', function (event) {
        const textContent = event.target.parentNode.childNodes[1].textContent;
        createPlayerList(textContent);
        event.target.setAttribute('disabled', true);

    });
}


function createPlayerList(playernName) {
    const li = document.createElement('li');
    li.innerText = playernName;
    if(orderList.children.length === 5){
        alert('you allrady add 5 player')
        return
    }
    else{
        orderList.appendChild(li);
        return li
    }
};

function getPlayerListNumber() {
    const listNo = orderList.children;
    return listNo.length;
};

let playerExpensesTotal = []
function calcluter(elementId, playerList, playerExpensesId) {
    const elementIdName = document.getElementById(elementId);
    const elementIdValue = parseInt(elementIdName.value);
    if(isNaN(elementIdValue)){
        alert('input number');
        return
    }
    const playerExpenses = document.getElementById(playerExpensesId);
    playerExpenses.innerText = elementIdValue * playerList;
    playerExpensesTotal.push(playerExpenses.innerText)

};

document.getElementById('player_calcluter').addEventListener('click', function () {
    const playerListNumber = getPlayerListNumber();
    calcluter('player_budget_filed', playerListNumber, 'player_expenses')

});


document.getElementById('total_calcluter_btn').addEventListener('click', function () {
    const managerBudgetFiled = document.getElementById('manager_budget_filed');
    const managerBudgetFiledValue = parseInt(managerBudgetFiled.value);
    if(isNaN(managerBudgetFiledValue)){
        alert('input manager amount');
        return
    }
    const playerExpensesTotalAmount = parseInt(playerExpensesTotal[0]);

    const totalAmount = document.getElementById('totla_amount');
    let playerAndManagerTotalAmount = playerExpensesTotalAmount + managerBudgetFiledValue;
    totalAmount.innerText = playerAndManagerTotalAmount;

    const coutseBudgetFiled = document.getElementById('coach_budget_filed');
    const courseBudgetFiledValue = parseInt(coutseBudgetFiled.value);
    if(isNaN(courseBudgetFiledValue)){
        alert('input course amouunt');
        return
    }
    const playerAndCourseTotalAmount = parseInt(totalAmount.innerText) + courseBudgetFiledValue;
    totalAmount.innerText = playerAndCourseTotalAmount;
});

