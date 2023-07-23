// Declare net_salary_value as a global variable
let net_salary_value = 0;

// Get element net salary
const net_salary_input = document.querySelector("#net_salary");

// Event listener for net_salary input
net_salary_input.addEventListener("input", () => {
  net_salary_value = parseFloat(net_salary_input.value) || 0;

  // Remove d-none class when user insert input
  const chooseFormula = document.querySelector('.choose_formula');
  chooseFormula.classList.remove('d-none');

  // Call updateBudgetFormula function to recalculate the budget formula
  updateBudgetFormula(document.querySelector('input[name="formula"]:checked').id);
});

// Declare global variables
let needs_amount = 0;
let wants_amount = 0;
let savings_amount = 0;

const formulas_radio = document.querySelectorAll('input[name="formula"]');
const formula_txt = document.querySelector("#formula_txt");
const needs_percent = document.querySelectorAll(".needs_percent");
const wants_percent = document.querySelector("#wants_percent");
const savings_percent = document.querySelector("#savings_percent");
const needs_amt_txt = document.querySelector("#needs_amt_txt");
const wants_amt_txt = document.querySelector("#wants_amt_txt");
const savings_amt_txt = document.querySelector("#savings_amt_txt");

const formulas = {
  formula1: { needs: 0.5, wants: 0.3, savings: 0.2, bajet_txt: "50/30/20", needs_pct: "50%", wants_pct: "30%", savings_pct: "20%" },
  formula2: { needs: 0.7, wants: 0.2, savings: 0.1, bajet_txt: "70/20/10", needs_pct: "70%", wants_pct: "20%", savings_pct: "10%" },
  formula3: { needs: 0.6, wants: 0.3, savings: 0.1, bajet_txt: "60/30/10", needs_pct: "60%", wants_pct: "30%", savings_pct: "10%" },
};

// What happens if user clicks any of the radio buttons
formulas_radio.forEach(formula => {
  formula.addEventListener('click', () => {
    // Get the ID of the selected radio button
    const selected_id_formula = formula.id;
    updateBudgetFormula(selected_id_formula);
    document.querySelector('.formula_and_commitments').classList.remove('d-none');
  });
});

// Get the add commitment link element
const add_new_link = document.querySelector("#add_new_link");
// What happens if user clicks the Add Commitment link
add_new_link.addEventListener("click", () => {
  addNewCommitment();
});

// Get the btn_calculate element
const btn_calculate = document.querySelector("#btn_calculate");
// What happens if user clicks btn_calculate
btn_calculate.addEventListener('click', () => {
  document.querySelector('.total_commitments').classList.remove('d-none');
  updateCommitments();
});

// Reusable function to update the budget formula
function updateBudgetFormula(selectedFormula) {
  const { needs, wants, savings, bajet_txt, needs_pct, wants_pct, savings_pct } = formulas[selectedFormula];

  // Calculation to get each amount
  needs_amount = net_salary_value * needs;
  wants_amount = net_salary_value * wants;
  savings_amount = net_salary_value * savings;

  // Change text content based on calculation
  formula_txt.textContent = bajet_txt;
  needs_percent.forEach(element => {
    element.textContent = needs_pct;
  });
  wants_percent.textContent = wants_pct;
  savings_percent.textContent = savings_pct;
  needs_amt_txt.textContent = needs_amount.toFixed(2);
  wants_amt_txt.textContent = wants_amount.toFixed(2);
  savings_amt_txt.textContent = savings_amount.toFixed(2);

  // Update commitments and balance
  updateCommitments();
}

// Reusable function to update the total commitments and balance
function updateCommitments() {
  // Calculate hardcoded needs first
  const commitment_details = document.querySelectorAll(".old_needs");
  const old_sum = calculateSum(commitment_details);

  // Calculate dynamic needs
  const new_needs = document.querySelectorAll(".new_needs");
  const new_sum = calculateSum(new_needs);

  // Add both hardcoded needs and dynamic needs
  const sum_all_needs = old_sum + new_sum;

  // Update the total commitments and balance text
  const total_all_commitments = document.querySelector("#total_all_commitments");
  total_all_commitments.textContent = sum_all_needs;

  let bal_needs_amt = needs_amount - sum_all_needs;
  const bal_needs_txt = document.querySelector("#bal_needs_txt");
  bal_needs_txt.textContent = "RM " + bal_needs_amt.toFixed(2);

  // Change the color of the balance text based on the value
  bal_needs_txt.style.color = bal_needs_amt < 0 ? "red" : "green";
}

// Reusable function to calculate the sum of an array of values
function calculateSum(nodeList) {
  const items = Array.from(nodeList);
  let sum = 0;
  items.forEach(item => {
    const value = parseFloat(item.value) || 0;
    sum += value;
  });
  return sum;
}

// Reusable function to add a new commitment input field
function addNewCommitment() {
  const commitments_details_div = document.querySelector('.commitments_details');
  const new_needs_input = `
    <div class="details">
      <div>
        <input type="text" class="form-control" style="width:100%">
      </div>
      <div>
        <input type="number" class="form-control new_needs" placeholder="RM">
      </div>
    </div>`;
  commitments_details_div.insertAdjacentHTML('beforeend', new_needs_input);
}