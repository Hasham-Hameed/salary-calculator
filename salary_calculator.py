"""
Salary Calculator
------------------
Calculates an employee's gross salary from a basic salary plus
house and medical allowance percentages.

Run it with:
    python salary_calculator.py
"""


def main():
    basic_salary = float(input("Enter basic salary: "))
    house_allowance_per, medical_allowance_per = map(
        float, input("Enter house and medical allowance percentages: ").split()
    )

    house_allowance = basic_salary * (house_allowance_per / 100)
    print("The house allowance is:", round(house_allowance, 2))

    medical_allowance = basic_salary * (medical_allowance_per / 100)
    print("The medical allowance is:", round(medical_allowance, 2))

    gross_salary = basic_salary + house_allowance + medical_allowance
    print("The gross salary is:", round(gross_salary, 2))


if __name__ == "__main__":
    main()
