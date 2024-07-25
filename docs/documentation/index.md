---
title: G-ADOPT User Guide
---

Welcome to G-ADOPT's user guide! In this guide, you will learn how to interact with the
G-ADOPT library in order to easily simulate geoscientific flows. G-ADOPT provides a
user-friendly interface underpinned by the Unified Form Language (UFL) and Firedrake.
The Python code you will write using G-ADOPT will reflect the mathematical formulation
of the numerical problem you wish to tackle and involve limited interaction with the
corresponding algorithmic structure.

G-ADOPT provides solver classes, such as `StokesSolver` and `EnergySolver`, that form
the core of the user experience. The promise of the library is simple: instantiate the
solver classes and call their primary method, for example, `solve` or `advance`, to
perform the numerical processing.

To create a solver instance, a G-ADOPT approximation is usually required.
Approximations are class instances that describe the set of mathematical equations
governing the system's evolution. Instantiating these classes only requires you to
provide the physical parameters specific to your numerical problem.

In the case of the Stokes system, G-ADOPT provides an easy-to-use function to determine
the null space associated with the system of equations. Boundary conditions are defined
in a readable manner and include a free surface. Fine-tuned solver parameters are also
included to ensure convergence in most scenarios. For the energy solver, implementations
of popular explicit and implicit Runge-Kutta numerical schemes are available and can be
selected by name. Scheme stabilisation through the streamline-upwind algorithm is also
provided.

For all other matters, such as setting up the mesh, finite-element spaces, and
representation of physical variables, G-ADOPT simply relies on Firedrake APIs, such as
`Mesh`, `FunctionSpace`, and `Function`.

G-ADOPT includes a series of demos that illustrate the essence of the library. You are
encouraged to go through them and familiarise yourself with the concepts summarised
here. The first demo represents a base case and constitutes an excellent starting place,
as most other demos build on the foundations it lays. More advanced demos bring a
gentle introduction to some state-of-the-art approaches in the current geodynamics
paradigm.
