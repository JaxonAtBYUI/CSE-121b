import numpy as np
import sympy as sp
from sympy.abc import a,b,c
from sympy import Integral, Matrix, pi, pprint
import matplotlib as plt

# STEPS 1 and 2
print("Step 1 and 2")
A=np.array([[1,2,3],[4,5,6],[7,8,9]])
print(A)
A[2]=[7,8,10] # This reasigns the value in the third row and third column to 10.
print(A)
A[1]=[1,1,1] # This reasigns row 2 to a row of 1s.
print(A)
print()

# Step 3
print("Step 3")
A = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(A)
print(-A[1,0])
A[1] = A[1]+A[0]*(-A[1, 0]) # This line adds rows 1 and 2, then multiples by negative row 2 column 1.
A[2] = A[2]+A[0]*(-A[2, 0]) # This line adds rows 3 and 1, then multiplies by negative row 3 column 1.
print(A)
A[2] = A[2]+A[1]*(-A[2, 1]/A[1, 1]) # This row adds row 3 and row 2, then multiplies by negative row 3 column 2 divided by row 2 column 2.
print(A)
print()

# Step 4
print("Step 4")
A = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 10]])
b = np.array([-1, 4, -10])
x = np.linalg.solve(A,b)
print(x)
print()

# Step 5
print("Step 5")
b = np.matmul(A, x)
print(b)
print()

# Step 6
print("Step 6")
B = np.linalg.inv(A)
x = np.matmul(B, b)
print(x)
print()

# Step 7
print("Step 7")
A = np.array([[1, 1, 1, 1, 1, 1], [1, 10, pow(10, 2), pow(10, 3), pow(10, 4), pow(10, 5)], [1, -10, pow(-10, 2), pow(-10, 3), pow(-10, 4), pow(-10, 5)], [1, 2, pow(2, 2), pow(2, 3), pow(2, 4), pow(2, 5)], [1, -2, pow(-2, 2), pow(-2, 3), pow(-2, 4), pow(-2, 5)], [1, -1, pow(-1, 2), pow(-1, 3), pow(-1, 4), pow(-1, 5)]])
b = np.array([1, 5, 6, 100, -30, 60])
x = np.linalg.solve(A, b)
print(f"x1: {round(x[5], 3)}")
print(f"x2: {round(x[4], 3)}")
print(f"x3: {round(x[3], 3)}")
print(f"x4: {round(x[2], 3)}")
print(f"x5: {round(x[1], 3)}")
print(f"x6: {round(x[0], 3)}")
print()

# note that Matrix is capitalized
M = sp.Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
pprint(M)
N = sp.Matrix([[a, 0, 0], [0, b, 0], [0, 0, c]])
pprint(N)
print()
pprint(M*N)  # matrix multiplication can be performed using * in SymPy
M = sp.Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
pprint(M.rref())
print()

# Step 8
print("Step 8")
M = sp.Matrix([[x+5, x-4, (x-2)**2, x**2, x, 1] for x in [1, 2, 3, 4, 5, 6]])
pprint(M.rref())
print()

# Step 9
M = sp.Matrix([[1, x, x**2, x**3, x**4, x**5] for x in [2, 3, 4, 5, 6, 7]])
sp.pprint(M.det())

input("Please hit enter to exit.")
