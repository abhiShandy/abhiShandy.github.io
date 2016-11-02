---
layout: page
title: Projects
permalink: /projects
---

## Modelling and Simulation

### 1. Master's Thesis: Modeling and Simulation of fluid flow in the mushy zone using lattice Boltzmann method
Fluid flow within the melt during solidification and its effect on microstructure evolution considering density difference, surface tension is being modeled and simulated. The moving solid-liquid interface is tracked using the phase field method within the lattice Boltzmann framework. The fluid velocity, density and pressure is also calculated using the LB distribution function. Removal of no-slip interfacial boundary condition to find the true relation between the surface tension and fluid pressure is attempted. Explicit formulation of lattice Boltzmann method is exploited to parallelize the simulation using [OpenCL](https://www.khronos.org/opencl/) and accelerated on GPU.

### 2. Internship at [TRDDC](https://en.wikipedia.org/wiki/Tata_Research_Development_and_Design_Centre)
I modelled dendritic solidification in an undercooled pure molten metal using phase field method coupled with lattice Boltzmann model for fluid-flow in the melt. Explicit and Implicit schemes to solve the relevant partial differential equations were applied using code written in C/C++. The simulation time is reduced significantly using parallelization through [MPI](https://www.open-mpi.org/) routines on the available computing cluster.

### 3. FEM anaylsis of scaffolds manufactured by SLM 
I applied finite element method (FEM) to analyse the scaffolds manufactured using selected laser melting (SLM). I used [ABAQUS](http://www.3ds.com/products-services/simulia/products/abaqus/) for creating the 3D model of scaffolds, and applying compressive and tensile loads to find the weak points.

### 4. MD simulation of Frank Read Sources
I, along with ARG Sreekar, simulated a prevalent dislocation source for pure Nickel using molecular dynamics on [LAMMPS](http://lammps.sandia.gov/) software. We analyzed the effect of the Nickel block size on the dislocation loop. I parameterised the input files (for LAMMPS) to reduce time in submitting jobs with various configurations to GNR (one of the IIT Madras' compting clusters).

## Web Development

### 1. Front-end web developer in [Shaastra](http://shaastra.org/) and [Saarang](http://saarang.org/)
I was member of the WebOps team handling the website for college festivals. I designed the page transitions and SVG animations using HTML5, CSS3 and [AngularJS_v1](https://angularjs.org/).

### 2. Internship at [AdWyze](https://adwyze.com)
In winter 2014, I interned as front-end web-developer at AdWyze. They are developing a product for analysing and improving online ads for various companies. I made a lot of simple but necessary UI/UX changes as no one in the founding team could spend time on front-end. Firstly, I migrated from Bootstrap 2 to Bootstrap 3. Then I used elements of Bootstrap alongwith DataTables and jQuery to improve UI/UX of the dashboard. All these changes had to be done in the Ruby-on-Rails framework, which was new for me. As instructed after the selection, I had come prepared by reading the famous book authored by Michael Hartl. I received a performance bonus and verbatim job offer.

### 3. Website for the Indian research activity in High Entropy Alloys
I developed a static website for the High Entropy Alloys research group in India. [Check it out](https://mme.iitm.ac.in/hea/)! It was a freelance project from the Nano Technology Lab of my department.

### 4. Website for SolarDC and UDC projects
I setup a couple of Wordpress sites for a project in Electrical Department of IIT Madras. Using a base theme, the website was further customized before handing it over.

## Robotics

### 1. Robocon

### 2. Gold Rush