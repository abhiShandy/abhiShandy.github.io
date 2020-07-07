---
date: April 29, 2020
title: Dissipative Particle Dynamics
wiki: https://en.wikipedia.org/wiki/Dissipative_particle_dynamics
---
It is a mesoscale method to simulate fluids and soft materials.

Unlike MD, governing forces are not fundamental. There are three kinds of forces: conservative, dissipative and random.
<p>
\begin{eqnarray}
F    &=& F_C + F_D + F_R\\
F_C  &=& A w(r)\\
F_D  &=& -\gamma w^2(r) (r_{ij}\cdot v_{ij}) \\
F_R  &=& \sigma w(r) \alpha (\Delta t)^{-1/2} = \sigma w(r) \theta_{ij} \\
w(r) &=& 1-r/r_c\\
\end{eqnarray}
</p>

the model parameters are related
<p>\[\sigma^2 = 2\gamma k_B T\]</p>

# Conservative force
It is softer than the hard LJ R-12 replusion.

# Dissipative force
This force negates relative velocities between two particles, which leads to cooperative motion among the particles.

# Random force
This random force is zero in average, to conserve momentum.