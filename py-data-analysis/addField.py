# -*- coding: utf-8 -*-
"""
Created on Sat May 21 19:32:19 2016

@author: Pratik
"""

import os
import glob
import pandas

def addField(indir="/Users/Pratik/Documents/Pratik/Work/practice/py-data-analysis/extracted"):
    os.chdir(indir)
    fileList = glob.glob("*")                                  # grab all the files
    for filename in fileList:
        df = pandas.read_csv(filename, sep="\s+", header=None) # read file we have one or more spaces so we use \s+ and we have no headers
        df["Station"] = [filename.rsplit("-", 1)[0]] * df.shape[0] # we want file to write new data to each file the station number which is retrieved from filename
        df.to_csv(filename + ".csv", index=None, header=None)      # write new file without header or index      