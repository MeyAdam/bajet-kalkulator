const income = document.querySelector('.income-after-tax');
const budgetLists = document.querySelectorAll('.budget-list input');
const percentRule = document.querySelector('.percent-rule');
const rulesDiv = document.querySelector('.rules');

const rules1needs = document.querySelector('.rules1-needs');
const rules1wants = document.querySelector('.rules1-wants');
const rules1saves = document.querySelector('.rules1-saves');

const rules2needs = document.querySelector('.rules2-needs');
const rules2wants = document.querySelector('.rules2-wants');
const rules2saves = document.querySelector('.rules2-saves');

// input event listener so the result is shown whilst the user still typing
income.addEventListener('input', () => {
    //by default the div is display none and will show once user insert input
    rulesDiv.style.display = 'grid';
    incomeaftertax = income.value;

    // toFixed(2) to round of long decimal and only show two decimal places
    rules1needs.textContent = 'RM ' + (incomeaftertax * 0.5).toFixed(2);
    rules1wants.textContent = 'RM ' + (incomeaftertax * 0.3).toFixed(2);
    rules1saves.textContent = 'RM ' + (incomeaftertax * 0.2).toFixed(2);

    rules2needs.textContent = 'RM ' + (incomeaftertax * 0.7).toFixed(2);
    rules2wants.textContent = 'RM ' + (incomeaftertax * 0.2).toFixed(2);
    rules2saves.textContent = 'RM ' + (incomeaftertax * 0.1).toFixed(2);

    // if input == '', rulesDiv style is removed
    if (incomeaftertax == '') {
        rulesDiv.removeAttribute('style');
    }
});

