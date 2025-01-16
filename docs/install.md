---
title: Install
---

# Installing the G-ADOPT library

First of all, you need to install [Firedrake](https://www.firedrakeproject.org), the finite element framework underpinning G-ADOPT.
Firedrake is available for Ubuntu, Mac, and, in principle, other Linux and Linux-like systems.

You can install both Firedrake and G-ADOPT by running:

    curl -O https://raw.githubusercontent.com/firedrakeproject/firedrake/master/scripts/firedrake-install
    python3 firedrake-install --install gadopt

More detailed instructions for installing Firedrake and suggestions for troubleshooting can be found
on the [Download](https://www.firedrakeproject.org/download.html) page of the Firedrake website. Note that the install procedure may take
up to one hour depending on your system.

## Using the G-ADOPT library

If you would like to run G-ADOPT through scripts or interactively, simply
ensure that your Firedrake environment is activated:

    source firedrake/bin/activate

Furthermore, the `gadopt` Python module should be available for you to use.

## Using the G-ADOPT library on Gadi

The G-ADOPT team maintains an up-to-date Firedrake and G-ADOPT installation 
on NCI's Gadi HPC system. To use G-ADOPT on Gadi, create an NCI account, then follow [this link](https://my.nci.org.au/mancini/project/fp50/join) to request to join the fp50 project. Once your request is approved, you can
access G-ADOPT on Gadi by running:

    module use /g/data/fp50/modules
    module load firedrake

To use G-ADOPT in you batch scripts, you'll need to add the following to your
PBS flags:

    -lstorage=gdata/fp50

You can also use G-ADOPT in a JupyterLab session on the [ARE](https://opus.nci.org.au/spaces/Help/pages/162431120/ARE+User+Guide) at NCI. When launching a
JupyterLab session, add the following in the 'Advanced options' section

![G-ADOPT ARE](images/g-adopt-are.png){: style="width:450px"}

By default, the latest release of G-ADOPT will be available when you load
the firedrake module. If you wish to use your own G-ADOPT installation, set
the environment variable `MY_GADOPT` before loading the firedrake module.

    export MY_GADOPT=/g/data/ab12/path/to/my/gadopt
    module use /g/data/fp50/modules
    module load firedrake

## Run the tutorials

The [G-ADOPT tutorials](tutorials/index.md) are located within the [G-ADOPT
GitHub repository](https://github.com/g-adopt/g-adopt). If you would
like to experiment with them, there are a few more requirements for
your Firedrake environment.

First, activate the Firedrake environment so that the requirements
will be installed into it:

    source firedrake/bin/activate

Next, install Jupyter Notebook and the optional G-ADOPT requirements:

    python3 -m pip install notebook gadopt[demos]

Finally, clone the G-ADOPT repository to access the demos:

    git clone https://github.com/g-adopt/g-adopt

Now you should be ready to test the installation and run the first
tutorial! Start the notebook server:

    jupyter notebook

Within the browser window that pops up, you can browse to the
`g-adopt/demos` directory and open any Python script with the `.py`
extension as a notebook.

The tutorials can also be run in the JupyterLab environment on the ARE
after following the above instructions.

## Visualisation software

Firedrake can output data in VTK format, suitable for viewing in [Paraview](https://www.paraview.org/).
On Ubuntu and similar systems, you can obtain Paraview by installing the paraview package. On Mac OS the
easiest approach is to download a binary from the paraview website.

## Optional install

To bring in the optional nonlinear optimisation dependencies you should activate the virtual environment of an existing Firedrake installation
and then install the optimisation variant:

    pip install gadopt[optimisation]

## Developing G-ADOPT

If you are keen to make changes to the core G-ADOPT code (and you want to work in a separate directory to Firedrake's default location for G-ADOPT), you should first clone the [G-ADOPT GitHub repository](https://github.com/g-adopt/g-adopt):

    git clone https://github.com/g-adopt/g-adopt.git

After activating the virtual environment of an existing Firedrake installation, you can then install G-ADOPT with:

    pip install -e g-adopt/

The editable, `-e`, flag means that any updates you make to this directory will be reflected directly in the Firedrake virtual environment.
