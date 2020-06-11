---
layout: post
date: Jun 10, 2020
title: Running Jupyter notbook remotely
---

1. Launch the jupyter-notebook on your remote workstation:\\
`jupyter-notebook`

2. Connect the ports of your computer and remote workstation through a custom SSH connection:\\
`ssh -N -f -L localhost:8888:localhost:8888 <remote-ip or alias>`\\
The first and the second port corresponds to your computer and remote workstation respectively.

3. If you want to close the SSH connection and relieve the port for other uses, find the PID of the service using the port:\\
`lsof -i :8888`

4. Kill the service:\\
`kill -9 <PID>`