# -*- coding: utf-8 -*-
"""
Created on Sun May 22 09:14:09 2016

@author: Pratik
"""

import os
import pandas
import numpy
import glob
import patoolib
from ftplib import FTP, error_perm
import seaborn as sns

def ftpDownloader(stationId, startYear, endYear, url="ftp.pyclass.com", user="student@pyclass.com", passwd="student123", directory="/Users/Pratik/Documents/Pratik/Work/practice/py-data-analysis"):
             ftp=FTP(url)
             ftp.login(user, passwd)
             if not os.path.exists(directory):    
                 os.makedirs(directory)
             os.chdir(directory)
             for year in range(startYear, endYear+1): 
                 fullpath='/Data/%s/%s-%s.gz' % (year, stationId, year) 
                 filename=os.path.basename(fullpath)                
                 try:
                     with open(filename, 'wb') as file:
                         ftp.retrbinary("RETR %s" % fullpath, file.write)  
                         print("%s successfully downloaded" % filename) 
                 except error_perm:                                         
                     print("%s is not available" % filename)
                     os.remove(filename)
             ftp.close()                                               
    
def merge(left = "/Users/Pratik/Documents/Pratik/Work/practice/py-data-analysis/out/Concatenated.csv",
          right = "/Users/Pratik/Documents/Pratik/Work/practice/py-data-analysis/station-info.txt",
          output = "/Users/Pratik/Documents/Pratik/Work/practice/py-data-analysis/out/Concatenated-Merged.csv"):
          leftDf = pandas.read_csv(left)                                          
          rightDf = pandas.read_fwf(right, converters = {"USAF":str, "WBAN":str}) 
          rightDf["USAF_WBAN"] = rightDf["USAF"] + "-" + rightDf["WBAN"]         
          mergedDf = pandas.merge(leftDf,rightDf.ix[:, ["USAF_WBAN", "STATION NAME", "LAT", "LON"]],left_on = "ID",right_on = "USAF_WBAN") 
          mergedDf.to_csv(output)

def pivot(infile="/Users/Pratik/Documents/Pratik/Work/practice/py-data-analysis/out/Concatenated-Merged.csv",
          outfile="/Users/Pratik/Documents/Pratik/Work/practice/py-data-analysis/out/Pivoted.csv"):
          df = pandas.read_csv(infile)
          df = df.replace(-9999, numpy.nan)    
          df["Temp"] = df["Temp"] / 10.0        
          table = pandas.pivot_table(df, index=["ID"], columns="Year", values="Temp")
          table.to_csv(outfile)

def addField(indir="/Users/Pratik/Documents/Pratik/Work/practice/py-data-analysis/extracted"):
    os.chdir(indir)
    fileList = glob.glob("*")                            
    for filename in fileList:
        df = pandas.read_csv(filename, sep="\s+", header=None) 
        df["Station"] = [filename.rsplit("-", 1)[0]] * df.shape[0] 
        df.to_csv(filename + ".csv", index=None, header=None)          

def concatenate(indir="/Users/Pratik/Documents/Pratik/Work/practice/py-data-analysis/extracted", outfile="/Users/Pratik/Documents/Pratik/Work/practice/py-data-analysis/out/Concatenated.csv"):
    os.chdir(indir)
    filelist = glob.glob("*.csv")                     
    dfList = []                                       
    colnames = ['Year', 'Month', 'Day', 'Hour', 'Temp', 'Dewtemp', 'Pressure', 'WindDir', 'WindSpeed',
    'Sky', 'Precip1', 'Precip6', 'ID']               
    for filename in filelist:                         
        print(filename)
        df = pandas.read_csv(filename, header=None)   
        dfList.append(df)                             
    concatDf = pandas.concat(dfList, axis = 0)       
    concatDf.columns = colnames                      
    concatDf.to_csv(outfile, index=None)
    
def extractFiles(indir="/Users/Pratik/Documents/Pratik/Work/practice/py-data-analysis", out="/Users/Pratik/Documents/Pratik/Work/practice/py-data-analysis/extracted"):
    os.chdir(indir)                     
    archives = glob.glob("*.gz")        
    if not os.path.exists(out):        
        os.mkdirs(out)       
    files = os.listdir("extracted")    
    for archive in archives:            
        if archive[:-3] not in files:   
            patoolib.extract_archive(archive, outdir=out)
            
def plot(outfigure="/Users/Pratik/Documents/Pratik/Work/practice/py-data-analysis/out/Ploted.png"):
    df=pivot()
    df.T.plot(subplots=True, kind='bar')
    sns.plt.savefig(outfigure, dpi=200)
            
