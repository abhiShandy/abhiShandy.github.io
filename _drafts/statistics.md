---
layout: page
title:  Statistics
categories: math
---

# List of topics to write about
- Confidence interval
- Standard error vs standard deviation
- Confounding
- Design of experiments
- p-hacking
- Ways to avoid false positives
- Importance sampling
- Ergodicity

# Umbrella sampling
- updated on Apr 6, 2020

It helps in sampling energy landscapes where two stable states have a barrier between them. If we want to map the energy landscape against order parameter (or reaction coordinate), time scale of MD simulation is not enough to cover the entire range of order parameter. Importance points on this range are sampled by separate simulations with an harmonic potential to offer some flexibility. The alternate method to fix the order parameter is too expensive since guessin the accurate order parameter is difficult. Results for all simulations are combined using a weighted average (called WHAM, I have no idea what the weights are) to reconstruct the energy landscape.

#### References
- [Fiona Naughton's blog](http://fiona-naughton.github.io/blog/2016/05/25/What-is-this-MD-thing-anyway) (contributor of MDAnalysis)


# Error propagation

How's it related to co-variance matrix?