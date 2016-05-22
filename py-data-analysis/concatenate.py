# -*- coding: utf-8 -*-
"""
Created on Sun May 22 06:28:38 2016

@author: Pratik
"""

import os
import glob
import pandas

def concatenate(indir="/Users/Pratik/Documents/Pratik/Work/practice/py-data-analysis/extracted", outfile="/Users/Pratik/Documents/Pratik/Work/practice/py-data-analysis/out/Concatenated.csv"):
    os.chdir(indir)
    filelist = glob.glob("*.csv")                     # grab all csv files
    dfList = []                                       # create empty data frame list
    colnames = ['Year', 'Month', 'Day', 'Hour', 'Temp', 'Dewtemp', 'Pressure', 'WindDir', 'WindSpeed',
    'Sky', 'Precip1', 'Precip6', 'ID']                # specify file header
    for filename in filelist:                         
        print(filename)
        df = pandas.read_csv(filename, header=None)   # read each file and no header
        dfList.append(df)                             # append each file's data to list
    concatDf = pandas.concat(dfList, axis = 0)        # export vertically so axis is 0
    concatDf.columns = colnames                       # setup column names before exporting
    concatDf.to_csv(outfile, index=None)