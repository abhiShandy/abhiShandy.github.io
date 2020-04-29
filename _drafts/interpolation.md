---
layout: page
title: Interpolation
date: 04-07-2020
---

# What's the difference between fitting and interpolation?
- no physical model
- must pass through all the points
- no error bars involved

# Linear interpolation
- the simplest technique
- straight lines connecting the points
- it's like the lever rule

# Splines
- smooth curve connecting 3 points
- piece-wise polynomial function passing through certain points (called knots)
- linear interpolation has discontinuos slope at knots
- quadratic spline has continuous first derivative at knots, but second derivative is discont.
- cubic spline has both first and second deriv. cont.

## Example of cubic spline
- 3 knots, 2 cubic functions, 8 unknown coefficients
- functions must pass through the knots: 4 equations
- functions must be continuous at shared knot: 2 equations
- functions must have meet some condition at free ends: 2 equations
- Python has interp
- Numerical recipes as interp_1d.h
