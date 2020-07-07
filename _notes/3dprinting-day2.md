---
date: June 10, 2020
title: 3D printing - Day 2
---

# Vase
I chose the low quality 0.28 mm layer height, no infill density and also removed the top layers to print 120mm tall vase. I think I can further increase the layer height to degrade to the Z-resolution and reduce print time.

# Testing the extremes of build volume
This will test the promised build volume, any wire-tangling, vibrations of vertical screwguide and other unseen scenarios. This will also be take the longest time to print which can test the appropriate time of the day to print in a shared apartment like mine.

- Stepper motion is limited to 235 x 235 x 250 mm 
- Specified build volume is 220 x 220 x 250 mm

# Rocket

I printed a classic rocket from thingiverse to test the maximum build height and print another hollow model with vase-like settings. I used the low quality slicing settings on Cura to print it as fast as possible. It still took around 3.5 hours. Since the print was interrupted few times, there are gaps on the surface at the corresponding layer. The curved surface isn't smooth, I feel bumps which could be originating from thin walls or low resolution CAD model. I don't like the mark by the extruder where it moves to the next layer. It looks like a stitch mark. Probably, "retraction at layer change" will help. The nose is very pointy.

# Interuppting print

Pausing the print creates strings and small artifacts in the model. It should be avoided.

# Using the glass bed

A glass bed was provided in the Ender 3 package, even though it is not the pro version. The glass is 4mm thick whereas the other bed is only 2.5mm thick. So, I had to level the bed again. Leveling the glass bed turned out to be a big hassle. The leveling test print could never the print the circle on the front-left corner. I should check the glass bed is flat or warped in certain parts. The base adhesion is also another issue. The initial layer doesn't stick everytime. I should use a glue for reliable base adhesion. Won't the glue degrade the base layer finish?

Glass bed provides a reflective and smooth finish to the bottom layer. I printed batman logo successfully along with first few layers of the 3Dbenchy. This bed has two distinct sides: rough and smooth. The rough side was easier to level and there's no issue with base adhesion. Since the magnetic bed will tend to wear with every print, it's better to have to rough side of the glass bed installed permanently. I don't have to change the bed level too much even if I want to use the smoother side of the glass. The glass bed is also less prone to warping and wearing. I should avoid using the metal blade to detach the print since it can scratch the bed.

# Batarang with concentric pattern

To test my glass bed, I chose my favorite model - batman logo. To make it more interesting, I switched the top/bottom layer pattern from lines to concentric. The bottom surface is reflective due to the glass bed. The concentric pattern looks different but it has too many edges (like grain boundaries in a microstructure) in the interior. Concentric patterns doesn't look suitable for models with sharp features. I should find or make designs which exploit this concentric pattern.


# First anomaly

While printing a batman logo on the glass plate, I heard a strange sound. I wasn't looking at the printer when it happened but I found that the printer had started printing 3DBenchy instead. I don't know whether the GCode files got mixed up in the card or the firmware started reading the wrong file.
