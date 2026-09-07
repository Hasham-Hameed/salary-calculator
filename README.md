# 💰 Salary Calculator

Calculates an employee's gross salary from a basic salary plus house and
medical allowance percentages — built two ways:

salary_calculator.py — command-line version
index.html` / `style.css` / `script.js`— a payslip-styled web front end

Live demo: https://hasham-hameed.github.io/salary-calculator/


![status](https://img.shields.io/badge/status-active-brightgreen)
![license](https://img.shields.io/badge/license-MIT-blue)

---

## ✨ Features

- Enter basic salary, house allowance %, and medical allowance %
- Instantly see the earnings breakdown and gross salary
- Styled like a payslip, with a live-updating total
- No build step, no dependencies — plain HTML/CSS/JS
- CLI version for running the same calculation in a terminal

## 🚀 Getting started

### Run the web version
Open `index.html` directly in a browser, or serve it locally:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

### Run the CLI version

```bash
python salary_calculator.py
```

## 🗂️ Project structure

```
salary-calculator/
├── index.html            # front end markup
├── style.css              # front end styling
├── script.js               # front end logic
├── salary_calculator.py  # command-line version
├── README.md
├── LICENSE
└── .gitignore
```

## 🌐 Hosting it on GitHub Pages

1. Push this repo to GitHub (see commands below).
2. On GitHub, go to **Settings → Pages**.
3. Under **Source**, choose the `main` branch and `/ (root)` folder, then **Save**.
4. GitHub gives you a live URL shortly after — that's your hosted calculator.

## 🛠️ Built with

- Python (CLI logic)
- HTML / CSS / vanilla JavaScript (front end)

## 📄 License

MIT — see [LICENSE](LICENSE).
