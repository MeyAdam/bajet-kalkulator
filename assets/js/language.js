const malay_txt = {
  instructions: `Arahan :`,
  trans_steps: `<li>Masukkan gaji bersih (gaji selepas tolak cukai, EPF, SOCSO etc).</li>
  <li>Pilih formula kiraan yang diingini.</li>
  <li>Kalkulator akan mengira bajet gaji mengikut formula pilihan.</li>`,
  trans_headline: `Bajet Gaji Bulanan`,
  trans_netsalary: `Gaji Bersih :`,
  trans_chooseformula: `Pilih Formula Kiraan`,
  trans_formula1: `50% Komitmen, 30% Kehendak, 20% Simpanan`,
  trans_formula2: `70% Komitmen, 20% Kehendak, 10% Simpanan`,
  trans_formula3: `60% Komitmen, 30% Kehendak, 10% Simpanan`,
  trans_budget: `Bajet`,
  trans_commitment: `KOMITMEN`,
  trans_want: `KEHENDAK`,
  trans_saving: `SIMPANAN`,
  trans_commitmentexpenses: `PERBELANJAAN KOMITMEN`,
  trans_roomhouse: `Bilik / Rumah (Sewa / Pinjaman)`,
  trans_electric: `Elektrik`,
  trans_water: `Air`,
  trans_internet: `Internet`,
  trans_phonebill: `Bil Telefon`,
  trans_family: `Keluarga`,
  trans_debt: `Hutang / Pinjaman (Pelajaran / Peribadi etc.)`,
  trans_vehicle: `Kenderaan (Maintenance / Minyak etc.)`,
  trans_fooddrink: `Makan Minum`,
  trans_insurance: `Insurans/ Takaful/ Medical Card`,
  trans_addexpenses: `+ Tambah perbelanjaan`,
  trans_btncalculate: `Tekan Sini Untuk Kira Jumlah Komitmen`,
  trans_totalcommitments: `Jumlah Komitmen :`,
  trans_budgetbalance: `Baki daripada bajet komitmen :`,
  trans_note: `Nota: Formula kewangan ini hanyalah sebagai garis panduan.`
};

const english_txt = {
  instructions: `Instructions :`,
  trans_steps: `<li>Enter your net salary (after tax, EPF, SOCSO etc).</li>
  <li>Choose Calculation Formula.</li>
  <li>The calculator will calculate the salary budget according to the selected formula.</li>`,
  trans_headline: `Monthly Salary Budget`,
  trans_netsalary: `Net Salary :`,
  trans_chooseformula: `Choose Calculation Formula`,
  trans_formula1: `50% Commitments, 30% Wants, 20% Savings`,
  trans_formula2: `70% Commitments, 20% Wants, 10% Savings`,
  trans_formula3: `60% Commitments, 30% Wants, 10% Savings`,
  trans_budget: `Budget`,
  trans_commitment: `COMMITMENTS`,
  trans_want: `WANTS`,
  trans_saving: `SAVINGS`,
  trans_commitmentexpenses: `COMMITMENT EXPENSES`,
  trans_roomhouse: `Room / House (Rent / Mortgage)`,
  trans_electric: `Electric`,
  trans_water: `Water`,
  trans_internet: `Internet`,
  trans_phonebill: `Phone Bill`,
  trans_family: `Family`,
  trans_debt: `Debt / Loan (Education / Personal etc.)`,
  trans_vehicle: `Vehicle (Maintenance / Fuel etc.)`,
  trans_fooddrink: `Food / Drink`,
  trans_insurance: `Insurance / Takaful / Medical Card`,
  trans_addexpenses: `+ Add Expenses`,
  trans_btncalculate: `Click Here To Calculate Total Commitment`,
  trans_totalcommitments: `Total commitment :`,
  trans_budgetbalance: `Balance from commitment budget :`,
  trans_note: `Note: This financial formula is only a guideline.`
};

const malay = document.querySelector('.btn_malay');
const english = document.querySelector('.btn_english');
const instructions = document.querySelector('.instructions p');
const transSteps = document.querySelector('#trans_steps');
const transHeadline = document.querySelector('#trans_headline');
const transNetSalary = document.querySelector('#trans_netsalary');
const chooseFormula = document.querySelector('.choose_formula h5');
const transFormula1 = document.querySelector('#trans_formula1');
const transFormula2 = document.querySelector('#trans_formula2');
const transFormula3 = document.querySelector('#trans_formula3');
const transBudget = document.querySelector('#trans_budget');
const transCommitment = document.querySelector('#trans_commitment');
const transWant = document.querySelector('#trans_want');
const transSaving = document.querySelector('#trans_saving');
const commitmentsContainerTitle = document.querySelector('.commitments_container .title h5');
const transRoomHouse = document.querySelector('#trans_roomhouse');
const transElectric = document.querySelector('#trans_electric');
const transWater = document.querySelector('#trans_water');
const transInternet = document.querySelector('#trans_internet');
const transPhoneBill = document.querySelector('#trans_phonebill');
const transFamily = document.querySelector('#trans_family');
const transDebt = document.querySelector('#trans_debt');
const transVehicle = document.querySelector('#trans_vehicle');
const transFoodDrink = document.querySelector('#trans_fooddrink');
const transInsurance = document.querySelector('#trans_insurance');
const addNewLink = document.querySelector('#add_new_link');
const btnCalculate = document.querySelector('#btn_calculate');
const transTotalCommitments = document.querySelector('#trans_totalcommitments');
const transBudgetBalance = document.querySelector('#trans_budgetbalance');
const note = document.querySelector('.note');

function language(languageText) {
  instructions.textContent = languageText.instructions;
  transSteps.innerHTML = languageText.trans_steps;
  transHeadline.textContent = languageText.trans_headline;
  transNetSalary.textContent = languageText.trans_netsalary;
  chooseFormula.textContent = languageText.trans_chooseformula;
  transFormula1.textContent = languageText.trans_formula1;
  transFormula2.textContent = languageText.trans_formula2;
  transFormula3.textContent = languageText.trans_formula3;
  transBudget.innerHTML = languageText.trans_budget;
  transCommitment.textContent = languageText.trans_commitment;
  transWant.textContent = languageText.trans_want;
  transSaving.textContent = languageText.trans_saving;
  commitmentsContainerTitle.textContent = languageText.trans_commitmentexpenses;
  transRoomHouse.textContent = languageText.trans_roomhouse;
  transElectric.textContent = languageText.trans_electric;
  transWater.textContent = languageText.trans_water;
  transInternet.textContent = languageText.trans_internet;
  transPhoneBill.textContent = languageText.trans_phonebill;
  transFamily.textContent = languageText.trans_family;
  transDebt.textContent = languageText.trans_debt;
  transVehicle.textContent = languageText.trans_vehicle;
  transFoodDrink.textContent = languageText.trans_fooddrink;
  transInsurance.textContent = languageText.trans_insurance;
  addNewLink.textContent = languageText.trans_addexpenses;
  btnCalculate.textContent = languageText.trans_btncalculate;
  transTotalCommitments.textContent = languageText.trans_totalcommitments;
  transBudgetBalance.textContent = languageText.trans_budgetbalance;
  note.textContent = languageText.trans_note;
}

// malay
malay.addEventListener('click', function () {
  malay.classList.add('lang-active');
  english.classList.remove('lang-active');
  language(malay_txt);
});

// english
english.addEventListener('click', function () {
  english.classList.add('lang-active');
  malay.classList.remove('lang-active');
  language(english_txt);
});