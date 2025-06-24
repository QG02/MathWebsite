from sympy import symbols, Eq, solve
import random

x = symbols('x')

def format_coefficient(coef, variable):
    if coef == 0:
        return ""
    elif coef == 1:
        return f"{variable}"
    elif coef == -1:
        return f"-{variable}"
    else:
        return f"{coef}{variable}"

def generate_linear_equation():
    a = random.randint(-10, 10)
    while a == 0:
        a = random.randint(-10, 10)

    x_val = random.randint(-10, 10)
    b = random.randint(-10, 10)
    c = a * x_val + b

    a_part = format_coefficient(a, "x")

    if b == 0:
        b_part = ""
    else:
        b_part = f"+ {b}" if b > 0 else f"- {-b}"

    problem_str = f"{a_part} {b_part} = {c}".strip()

    eq = Eq(a*x + b, c)
    solution = solve(eq, x)[0]

    return {"problem": problem_str, "solution": float(solution)}
