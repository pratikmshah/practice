# -*- coding: utf-8 -*-
"""
Created on Sat May 21 18:35:54 2016

@author: Pratik
"""

import os
import glob
import patoolib

def extractFiles(indir="/Users/Pratik/Documents/Pratik/Work/practice/py-data-analysis", out="/Users/Pratik/Documents/Pratik/Work/practice/py-data-analysis/extracted"):
    os.chdir(indir)                     # change directory
    archives = glob.glob("*.gz")        # get all archive files that end in .gz
    if not os.path.exists(out):         # if folder doesn't exist make it
        os.mkdirs(out)       
    files = os.listdir("extracted")     # get list of all the files currently in the directory
    for archive in archives:            # loop through archives and extract files
        if archive[:-3] not in files:   # if file is already in folder don't extract (cut out exten)
            patoolib.extract_archive(archive, outdir=out)