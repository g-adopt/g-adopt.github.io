---
title: Install
---

# Installing the G-ADOPT library

First of all, you need to install [Firedrake](https://www.firedrakeproject.org), the finite element framework that G-ADOPT is built on.
Firedrake is available for Ubuntu, Mac and in principle other Linux and Linux-like systems. 

You can install both Firedrake and G-ADOPT by running:

    curl -O https://raw.githubusercontent.com/firedrakeproject/firedrake/master/scripts/firedrake-install
    python3 firedrake-install --install gadopt

More detailed instructions for installing Firedrake and suggestions for troubleshooting can be found 
on the [Download](https://www.firedrakeproject.org/download.html) page of the Firedrake website. Note that the install procedure may take
up to one hour depending on your system.

## Run the demos

Once Firedrake is installed you will need to activate the Firedrake virtual environment every time you want
to use G-ADOPT:

    source firedrake/bin/activate

Now you should be ready to test the installation and run the first tutorial!


## Visualisation software

Firedrake can output data in VTK format, suitable for viewing in [Paraview](https://www.paraview.org/). 
On Ubuntu and similar systems, you can obtain Paraview by installing the paraview package. On Mac OS the 
easiest approach is to download a binary from the paraview website.

## Optional install

To bring in the optional nonlinear optimisation dependencies you should activate the virtual environment of an existing Firedrake installation
and then install the optimisation variant:

    pip install gadopt[optimisation]

## Developing G-ADOPT

If you are keen to make changes to the core G-ADOPT code (and you want to work in a separate directory to Firedrake's default location for G-ADOPT) you should first clone the GitHub repository from 
[https://github.com/g-adopt/g-adopt](https://github.com/g-adopt/g-adopt):

    git clone https://github.com/g-adopt/g-adopt.git

After activating the virtual environment of an existing Firedrake installation, you can then install G-ADOPT with:
    
    pip install -e g-adopt/

The editable, -e, flag means that any updates you make to this directory will be reflected directly in the Firedrake virtual environment.
