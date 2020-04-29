---
layout: post
date: Apr 29, 2020
title: Integrators in Molecular Dynamics
wiki: https://en.wikipedia.org/wiki/Verlet_integration
---

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

There are several kinds of integrators algorithms for carrying out molecular dynamics.
1. Velocity-Verlet
2. Verlet
3. Leap-Frog
4. Euler
5. Predictor-Corrector

All of these algorithms are derived from Taylor expansion
<p>
\[r(t+\delta t) = r(t) + v(t)\delta t + \frac{1}{2}a(t)(\delta t)^2 + \frac{1}{3!}b(t)(\delta t)^3 + \ldots\]
</p>

Force is generally calculated by using the positions of the atoms. Thus, acceleration at a given time is calculated after estimating positions.

# Velocity-verlet
This is the most popular owing to its stability and convenience.
<p>
\begin{eqnarray}
r(t+\delta t) &=& r(t) + v(t)\delta t + \frac{1}{2}a(t)(\delta t)^2\\
a(t + \delta t) &=& \frac{F(t + \delta t)}{m}\\
v(t+\delta t) &=& v(t) + \frac{a(t)+a(t+\delta t)}{2}\\
r(t+2\delta t) &=& r(t+\delta t) + v(t+\delta t)\delta t + \frac{1}{2}a(t+\delta t) (\delta t)^2
\end{eqnarray}
</p>

# Verlet
Velocity is not involved at all. This is numerically unstable for large timesteps.
<p>
\begin{eqnarray}
a(t) &=& \frac{F(t)}{m}\\
r(t+\delta t) &=& 2r(t) - r(t-\delta t) + a(t)(\delta t)^2\\
a(t+\delta t) &=& \frac{F(t+\delta t)}{m}\\
\end{eqnarray}
</p>

# Leap-Frog
Velocity and position grids are staggered. Velocity and positions are calculated one after the other.
<p>
\begin{eqnarray}
v(t+\frac{\delta t}{2}) &=& v(t - \frac{\delta t}{2}) + a(t)\delta t\\
r(t+\delta t) &=& r(t) + v(t+\frac{\delta t}{2})\delta t\\
a(t+\delta t) &=& \frac{F(t+\delta t)}{m}\\
v(t+\frac{3\delta t}{2}) &=& v(t + \frac{\delta t}{2}) + a(t+\delta t)\delta t\\
\end{eqnarray}
</p>