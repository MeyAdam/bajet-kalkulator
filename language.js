// language code

// malay
let malayText = {
  arahan: `Arahan:<br>
  1. Masukkan gaji bersih (gaji selepas tolak cukai, EPF, SOCSO etc).<br>
  2. Kalkulator akan mengira bajet mengikut formula 50/30/20 dan 70/20/10 secara automatik.`,
  headline: `Bajet Gaji Bulanan`,
  gajiBersih: `Gaji Bersih:`,

  bajet50: `Bajet 50/30/20`,
  need50text: `50% KEPERLUAN`,
  want30text: `30% KEMAHUAN`,
  save20text: `20% SIMPANAN`,

  bajet70: `Bajet 70/20/10`,
  need70text: `70% KEPERLUAN`,
  want20text: `20% KEMAHUAN`,
  save10text: `10% SIMPANAN`,

  needsTitle: `PERBELANJAAN KEPERLUAN / KOMITMEN`,
  bilikRumah: `Bilik/Rumah (Sewa/ Pinjaman)`,
  elektrik: `Elektrik`,
  air: `Air`,
  bilTelefon: `Bil Telefon`,
  keluarga: `Keluarga`,
  hutang: `Hutang/ Pinjaman<br>(Pelajaran/ Peribadi etc.)`,
  kenderaan: `Kenderaan<br>(Maintenance/ Minyak etc.)`,
  makanMinum: `Makan Minum`,
  insurans: `Insurans/ Takaful/ Medical Card`,

  addExpenses: `+ Tambah perbelanjaan`,

  totalTxt: `Jumlah Keperluan / Komitmen:`,
  bakiBajet50: `Baki Bajet Keperluan daripada formula 50%:`,
  bakiBajet70: `Baki Bajet Keperluan daripada formula 70%:`,

  nota: `Nota: Formula kewangan ini hanyalah sebagai garis panduan.`,
}

// english
let englishText = {
  arahan: `Instruction:<br>
  1. Enter your net salary (after tax, EPF, SOCSO etc).<br>
  2. The calculator will automatically calculate your budget according to the 50/30/20 and 70/20/10 formula.`,
  headline: `Monthly Salary Budget`,
  gajiBersih: `Net Salary:`,

  bajet50: `50/30/20 Budget`,
  need50text: `50% NEEDS`,
  want30text: `30% WANTS`,
  save20text: `20% SAVINGS`,

  bajet70: `70/20/10 Budget`,
  need70text: `70% NEEDS`,
  want20text: `20% WANTS`,
  save10text: `10% SAVINGS`,

  needsTitle: `NEEDS/ COMMITMENTS EXPENSES`,
  bilikRumah: `Room/ House (Rent/ Mortgage)`,
  elektrik: `Electricity`,
  air: `Water`,
  bilTelefon: `Phone Bill`,
  keluarga: `Family`,
  hutang: `Debt/Loan<br>(Education/ Personal, etc.)`,
  kenderaan: `Vehicle<br>(Maintenance/ Fuel, etc.)`,
  makanMinum: `Food/ Drink`,
  insurans: `Insurance/ Takaful/ Medical Card`,

  addExpenses: `+ Add expenses`,

  totalTxt: `Total Needs/ Commitments:`,
  bakiBajet50: `Balance of Needs Budget from 50% formula:`,
  bakiBajet70: `Balance of Needs Budget from 70% formula:`,

  nota: `Note: This financial formula is only a guideline.`,
}

const malay = document.querySelector('.malay');
const english = document.querySelector('.english');

function language(languageText) {
  document.querySelector('.instruction').innerHTML = languageText.arahan;
  document.querySelector('.headline h1').innerText = languageText.headline;
  document.querySelector('.monthlyIncome label').innerText = languageText.gajiBersih;

  document.querySelector('.rules1 h3').innerText = languageText.bajet50;
  document.querySelector('.need50text').innerText = languageText.need50text;
  document.querySelector('.want30text').innerText = languageText.want30text;
  document.querySelector('.save20text').innerText = languageText.save20text;

  document.querySelector('.rules2 h3').innerText = languageText.bajet70;
  document.querySelector('.need70text').innerText = languageText.need70text;
  document.querySelector('.want20text').innerText = languageText.want20text;
  document.querySelector('.save10text').innerText = languageText.save10text;

  document.querySelector('.title').innerText = languageText.needsTitle;
  document.querySelector('.bilik-rumah').innerText = languageText.bilikRumah;
  document.querySelector('.elektrik').innerText = languageText.elektrik;
  document.querySelector('.air').innerText = languageText.air;
  document.querySelector('.bil-tel').innerText = languageText.bilTelefon;
  document.querySelector('.keluarga').innerText = languageText.keluarga;
  document.querySelector('.hutang').innerHTML = languageText.hutang;
  document.querySelector('.kenderaan').innerHTML = languageText.kenderaan;
  document.querySelector('.makan-minum').innerText = languageText.makanMinum;
  document.querySelector('.insurans').innerText = languageText.insurans;

  document.querySelector('.addNewNeedLink').innerText = languageText.addExpenses;

  document.querySelector('.total-text').innerText = languageText.totalTxt;
  document.querySelector('.baki-bajet-50').innerText = languageText.bakiBajet50;
  document.querySelector('.baki-bajet-70').innerText = languageText.bakiBajet70;

  document.querySelector('.nota').innerText = languageText.nota;
}

// malay
malay.addEventListener('click', function () {
  malay.classList.add('lang-active');
  english.classList.remove('lang-active');
  language(malayText);
});

// english
english.addEventListener('click', function () {
  english.classList.add('lang-active');
  malay.classList.remove('lang-active');
  language(englishText);
});