const basicEl = document.getElementById('basicSalary');
const houseEl = document.getElementById('houseAllowance');
const medicalEl = document.getElementById('medicalAllowance');

const outBasic = document.getElementById('outBasic');
const outHouse = document.getElementById('outHouse');
const outMedical = document.getElementById('outMedical');
const outGross = document.getElementById('outGross');
const slipNo = document.getElementById('slipNo');

function fmt(n) {
  return n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function calculate() {
  const basic = parseFloat(basicEl.value) || 0;
  const housePct = parseFloat(houseEl.value) || 0;
  const medicalPct = parseFloat(medicalEl.value) || 0;

  const houseAllowance = basic * (housePct / 100);
  const medicalAllowance = basic * (medicalPct / 100);
  const gross = basic + houseAllowance + medicalAllowance;

  outBasic.textContent = fmt(basic);
  outHouse.textContent = fmt(houseAllowance);
  outMedical.textContent = fmt(medicalAllowance);
  outGross.textContent = fmt(gross);
}

[basicEl, houseEl, medicalEl].forEach(el => el.addEventListener('input', calculate));

// cosmetic: a random-looking slip number, generated once per page load
slipNo.textContent = String(Math.floor(100000 + Math.random() * 900000)).slice(0, 6);

calculate();
