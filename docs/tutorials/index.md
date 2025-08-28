# Tutorials

The G-ADOPT tutorial series is designed to guide you from first steps to advanced applications in geodynamics and beyond.  
We currently provide tutorials in three main areas:  

- **Mantle Convection** – from simple box models to full spherical Earth simulations.  
- **Glacial Isostatic Adjustment (GIA)** – from 2-D Maxwell models to adjoint-based inversions of ice history and rheology.  
- **Generic Functionality** – including multi-material simulations and PDE-constrained optimisation, applicable across a wide range of problems.  

All tutorials are rendered directly from Jupyter notebooks that are included in the G-ADOPT source code (under the `demos/` directory).  

To run them, you'll need a working installation of **Firedrake** and **G-ADOPT**, along with a Jupyter kernel for Firedrake. See the [install page](../install.md) for detailed setup instructions.  

---

## Getting Started

If you're new to this ecosystem, we recommend the following sequence:  

1. **Firedrake tutorials**  
   Begin with the [introductory Firedrake tutorials](https://www.firedrakeproject.org/documentation.html) to learn the basics of the finite element framework on which G-ADOPT is built.  

2. **Mantle Convection**  
   Start with the simplest 2-D convection models and build up to spherical Earth simulations. This series introduces the essential concepts and workflows in G-ADOPT. *If your main interest is in GIA, you can skip this section.*

3. **Glacial Isostatic Adjustment (GIA)**  
   Explore viscoelastic Earth deformation under surface loads, advancing towards adjoint-based inversions for ice history and rheology. *If your main interest is in mantle convection, you can skip this section.*

4. **Generic Functionality**  
   Once comfortable with the physics-based tutorials, branch out into cross-cutting capabilities such as multi-material modelling and PDE-constrained optimisation.  

---

By following this pathway, you'll progress from core Firedrake skills, through G-ADOPT's foundational physics examples, to advanced workflows for tackling state-of-the-art research problems.