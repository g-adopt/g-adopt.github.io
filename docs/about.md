G-ADOPT is currently underpinned by three state-of-the-art software libraries:

1. [Firedrake](https://www.firedrakeproject.org/): an automated system
for solving partial differential equations using the finite element
method.  

2. [dolfin-adjoint](https://github.com/dolfin-adjoint/pyadjoint):
which automatically derives the corresponding representation of discrete
adjoint equations in a form compatible with Firedrake.  

3. [Rapid Optimisation Library
(ROL)](https://trilinos.github.io/rol.html): a highly-efficient package for large-scale
optimization.   

When combined, they provide a geoscientific modelling framework that is highly efficient, with forward and adjoint calculations that achieve theoretical computational efficiency.
