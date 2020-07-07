---
title: Stringing test
date: June 13, 2020
---

I must calibrate the extrusion temperature, retraction length and speed to prevent stringing in my prints. Here, I share my notes of the iterative process.

# Iteration 1
Default Cura settings: 20% infill
1. Low quality: 0.28mm - happening at top ends
2. Standard quality: 0.20mm - worse than last case
3. Dynamic quality: 0.16mm - best of all but still happening
4. Super quality: 0.12mm - worst of all

# Iteration 2
Reducing temperature in steps of 5 degrees
1. 195: Better than 200 C, bumps at the base
2. 190: Better than 195, minor strings still present at the top, warping at the base layer which might indicate poor base adhesion
3. 185: worse base adhesion (biased on left side), slightly less stringing
4. 180: worse base adhesion (biased on left side), slightly less stringing compared to 185 C

Conclusion:
- Stringing definitely decreases with lower temperature
- Base adhesion starts degrading at 190 and gets worse as temperature is lowered

I can either choose
- 195 and change its retraction settings
- 190 and improve base adhesion before changing its retraction settings

Base adhesion can be avoided by
- increasing bed temperature
- increasing initial extruder temperature
- using glue

# Iteration 3
Chose 190 C

Build plate temperature initial layer
- 55: Base adhesion is much better, stringing is similar to before
- 60: Base adhesion is same as 55, stringing gets worse

# Iteration 4
Using 55C as build initial temperature, final extruder temperature of 190C

Printing temperature initial layer
1. 195: Initial layers gets much worse, stringing is fine
2. 200: Initial layer is better than 195 but as good as the previous iteration.

I should completely avoid this setting.

# Iteration 5

I am printed a model with all the settings optimized so far just to make sure that callibration is going in the right direction -- it works fine, stringing is not completely gone.

## Retraction length

All3DP article mentions 2mm for Bowden extruder.

Base setting is 5mm

Decreasing the retraction length
- 4mm: more stringing, one string bridge connecting the two pillars
- 3mm: initial layers has issues, bridges appear at the bottom but stringing at the top is unchanged
- 2mm: initial layer has defects on the right-hand side, lot more string bridges at the bottom
- 1mm: much worse initial layer, lot more string bridges - so I cancelled the print midway

Increasing the retraction length
- 6mm: initial layer warped a bit, stringing looks almost the same
- 7mm: string bridge
- 8mm: string bridge
- 9mm: no string bridge but strings at the top are worse than normal
- 10mm: slightly more stringing than normal

Best retraction length is 5mm

## Retraction speed (yet to optimize)
All3DP article mentions the range of 30-50 mm/s for the Bowden extruder.

## Other concerns
Do these temperature settings improve the stringing with other layer heights?
What are side effects of decreasing extruder temperature? on overhangs

# Other changes
Moved the filament spool rack to the left (closer the feeder motor) to potentially relax the tension (and consequently the friction with the filament guide) in the filament. I hope it doesn't disturb the weight distribution of the frame and affect the print quality.
