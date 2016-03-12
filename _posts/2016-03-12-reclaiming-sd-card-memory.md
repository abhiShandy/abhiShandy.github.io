---
layout: post
title: Reclaiming SD card memory
date: 2016-03-12
category: tech
tags: sd-card
---

After using a SD card for Raspberry Pi or any other electronic equipment, the card might show reduced memory size when connected to your laptop.

To reclaim the memory space of your SD card, you should use the following steps in a Windows environment.

1. Connect your SD card to your computer
2. Launch `diskpart` from the start menu
3. List all the disks using `list disk`
4. Identify your SD card disk number
5. Select the SD using `list disk 1` if it is Disk 1
6. `clean`
7. `create partition primary`

Refer [the HTG post](http://www.howtogeek.com/170794/ask-htg-how-can-i-reclaim-the-full-capacity-of-an-sd-card/)