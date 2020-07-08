---
title: Python
date: July 7, 2020
excerpt: ""
---

## Fit a curve

```python
from scipy.optimize import curve_fit
popt, pcov = curve_fit(func, x, y)
```

## Interpolation

```python
from scipy.interpolate import interp1d, CubicSpline
# simple interpolation
f = interp1d(x, y)
ynew = f(xnew)

# cubic spline
cs = CubicSpline(x, y)
ynew = cs(xs)
dydx = cs(xs, 1) # first derivative
d2ydx2 = cs(xs, 2) # second derivative
```

# Minimum Image convention
```python
bondVec = posO - posSi
bondVec = bondVec - np.rint(bondVec/L)*L
```

## CLI arguments

```python
import sys
python("Name of the script", sys.argv[0])
python("First argument", sys.argv[1])
python("Second argument", sys.argv[2])
```