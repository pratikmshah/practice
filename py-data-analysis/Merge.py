# -*- coding: utf-8 -*-
"""
Created on Sun May 22 07:09:31 2016

@author: Pratik
"""

import pandas

def merge(left = "/Users/Pratik/Documents/Pratik/Work/practice/py-data-analysis/out/Concatenated.csv",
          right = "/Users/Pratik/Documents/Pratik/Work/practice/py-data-analysis/station-info.txt",
          output = "/Users/Pratik/Documents/Pratik/Work/practice/py-data-analysis/out/Concatenated-Merged.csv"):
          leftDf = pandas.read_csv(left)                                          
          rightDf = pandas.read_fwf(right, converters = {"USAF":str, "WBAN":str}) # convert number to string
          rightDf["USAF_WBAN"] = rightDf["USAF"] + "-" + rightDf["WBAN"]          # concat two columns
          mergedDf = pandas.merge(leftDf,rightDf.ix[:, ["USAF_WBAN", "STATION NAME", "LAT", "LON"]],left_on = "ID",right_on = "USAF_WBAN") # merge range for righrDf of all columns starting from USAF_WBAN
          mergedDf.to_csv(output)