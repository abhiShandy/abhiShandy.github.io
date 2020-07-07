---
title: Bash
date: July 7, 2020
excerpt: ""
---

## Loop

```bash
# iterate over a simple range
for i in {1..5}; do
	echo $i
done
# change the step size of the range
for i in `seq 1 2 5`; do
	echo $i
done
```

## AWK

```bash
# select lines with fixed number of fields/columns
awk 'NF==2 {print $2}'
```