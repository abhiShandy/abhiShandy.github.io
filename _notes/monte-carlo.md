---
date: Apr 18, 2020
title: Monte Carlo method
wiki: https://en.wikipedia.org/wiki/Monte_Carlo_method
---

Monte Carlo (MC) method is basically use of random numbers for modeling a phenomena. It may model scientific phenomena or financial markets.
It starts with defining the objective function which will guide the decisions made by the MC method. Then, a perturbation is defined which will change the state of the system. The extent and direction of the perturbation may be fixed or randomly chosen. At every step, MC method proposes a perturbation is evaluated by the change in objective function. If this change in the favorable direction, it is accepted right away. If not, the acceptance depends on the probabilistic cost function.

For example, suppose a set of atoms are confined in a box. These atoms are interacting via a simplistic LJ potential. In every MC step, a randomly chosen atom is moved in random direction. This move may increase or decreases the total energy of the system. Any move which decreases the energy is accepted right away. When energy is increasing, a random number between 0 and 1 is compared to the Boltzmann factor to make the decision. This Boltzmann term includes temperature which indirectly decides the capability of the system to jump over energy barriers. At higher temperature, it can jump over higher barriers, which can be seen as aggressive vibrations of atoms.

Pseudo code is shown below:
```python
sys = initialize(nAtoms, boxSize)
E0 = calcEnergy(sys)

while iStep < nSteps:
	iAtom = randomInt(nAtoms)
	theta = random()*2*pi
	newPos = oldPos + dr * [cos(theta), sin(theta)]
	dE = calcEnergy(iAtom, newPos)
	if dE < 0 or random() < exp(-dE/kT):
		accept()
	else:
		reject()
```

This method is technically called Markov chain which is just one of the several Monte Carlo methods. Other examples are kinetic Monte Carlo (KMC) and quantum Monte Carlo (QMC).