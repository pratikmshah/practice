# -*- coding: utf-8 -*-
"""
Created on Sun May 22 08:02:32 2016

@author: Pratik
"""

import pandas
import numpy

def pivot(infile="/Users/Pratik/Documents/Pratik/Work/practice/py-data-analysis/out/Concatenated-Merged.csv",
          outfile="/Users/Pratik/Documents/Pratik/Work/practice/py-data-analysis/out/Pivoted.csv"):
          df = pandas.read_csv(infile)
          df = df.replace(-9999, numpy.nan)    # replace any 99999 number with NAN
          df["Temp"] = df["Temp"] / 10.0        # modify temp information
          table = pandas.pivot_table(df, index=["ID"], columns="Year", values="Temp")
          table.to_csv(outfile)