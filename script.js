// select element gaji bersih
const income = document.querySelector(".income-after-tax");

const rulesDiv = document.querySelector(".rules");

// select element
const needLists = document.querySelectorAll(".need-list");

// select element
const addNewNeedLink = document.querySelector(".addNewNeedLink");

///// FUNCTION /////

// function what happen when user insert gaji bersih
function calcFormula() {
  // formula 50/30/20
  const rules1needs = document.querySelector(".rules1-needs");
  const rules1wants = document.querySelector(".rules1-wants");
  const rules1saves = document.querySelector(".rules1-saves");

  // formula 70/20/10
  const rules2needs = document.querySelector(".rules2-needs");
  const rules2wants = document.querySelector(".rules2-wants");
  const rules2saves = document.querySelector(".rules2-saves");

  netSalary = income.value;

  rules1needsValue = parseFloat(netSalary * 0.5);
  rules1needs.textContent = "RM " + rules1needsValue.toFixed(2);
  rules1wants.textContent = "RM " + (netSalary * 0.3).toFixed(2);
  rules1saves.textContent = "RM " + (netSalary * 0.2).toFixed(2);

  rules2needsValue = parseFloat(netSalary * 0.7);
  rules2needs.textContent = "RM " + rules2needsValue.toFixed(2);
  rules2wants.textContent = "RM " + (netSalary * 0.2).toFixed(2);
  rules2saves.textContent = "RM " + (netSalary * 0.1).toFixed(2);

  if (netSalary === "") {
    rulesDiv.removeAttribute("style");
  }
}

// function - commitment list div show when user insert gaji bersih
function openCalcNeedsDiv() {
  const calculateNeedsDiv = document.querySelector(".calculate-needs");
  calculateNeedsDiv.style.display = "flex";
}

// function - calculate total from commitment list,
// hardcoded and custom and show at "jumlah komitmen"
// calculate balance from both formula
// execute when user insert input at need list
function totalSum() {
  const sumOldNeedList = document.querySelector(".sumOldNeedList");
  const sumNewNeedList = document.querySelector(".sumNewNeedList");

  const oldNeedValue = parseFloat(sumOldNeedList.value) || 0;
  const newNeedValue = parseFloat(sumNewNeedList.value) || 0;

  const totalSum = oldNeedValue + newNeedValue;

  const totalNeeds = document.querySelector(".total-needs");
  totalNeeds.textContent = "RM " + totalSum;

  // calculate balance from 50% formula
  bal50 = rules1needsValue - totalSum;

  const balance50 = document.querySelector(".balance50");
  balance50.textContent = "RM " + bal50.toFixed(2);

  if (bal50 > 0) {
    balance50.style.color = "green";
  } else if (bal50 < 0) {
    balance50.style.color = "red";
  } else {
    balance50.style.color = "initial";
  }

  // calculate balance from 70% formula
  bal70 = rules2needsValue - totalSum;

  const balance70 = document.querySelector(".balance70");
  balance70.textContent = "RM " + bal70.toFixed(2);

  if (bal70 > 0) {
    balance70.style.color = "green";
  } else if (bal70 < 0) {
    balance70.style.color = "red";
  } else {
    balance70.style.color = "initial";
  }
}

// function - calculate sum from harcoded commitment list
// and store the value at hidden input
function calcSumOldNeed() {
  let sumOldNeed = 0;
  for (let i = 0; i < needLists.length; i++) {
    sumOldNeed += parseFloat(needLists[i].value) || 0;
  }
  // select element
  const sumOldNeedList = document.querySelector(".sumOldNeedList");
  sumOldNeedList.setAttribute("value", sumOldNeed);
}

// function - calculate sum from custom commitment list
// and store the value at hidden input
function calcSumNewNeed() {
  let sumNewNeed = 0
  for (let i = 0; i < newNeedList.length; i++) {
    sumNewNeed += parseFloat(newNeedList[i].value) || 0;
  }
  // select element
  const sumNewNeedList = document.querySelector(".sumNewNeedList");
  sumNewNeedList.setAttribute("value", sumNewNeed);
}

///// EVENT LISTENER /////

// event listener gaji bersih input
income.addEventListener("input", () => {
  rulesDiv.style.display = "flex";

  calcFormula();
  totalSum();
});

// event listener what happen if user insert value in hardcoded commitment list
needLists.forEach(oneNeed => {
  oneNeed.addEventListener("input", () => {
    openCalcNeedsDiv();
    calcSumOldNeed();
    totalSum();
  });
});

// event listener - what happen if user click link "tambah perbelanjaan"
addNewNeedLink.addEventListener("click", () => {
  // select element
  const detailsNeedsDiv = document.querySelector(".details-needs");

  // create element
  const detailsDiv = document.createElement("div");
  detailsDiv.classList.add("details");

  // create element
  const titleInput = document.createElement("input");
  titleInput.classList.add("customNeed");

  // create element
  const valueInput = document.createElement("input");
  valueInput.placeholder = "RM";
  valueInput.classList.add("newNeedList");

  // appendChild
  detailsNeedsDiv.appendChild(detailsDiv);
  detailsDiv.appendChild(titleInput);
  detailsDiv.appendChild(valueInput);

  // select element
  newNeedList = document.querySelectorAll(".newNeedList");
  // event listener - what happen if user insert value in custom need
  newNeedList.forEach(oneNewNeed => {
    oneNewNeed.addEventListener("input", () => {
      openCalcNeedsDiv();
      calcSumNewNeed();
      totalSum();
    });
  });
});