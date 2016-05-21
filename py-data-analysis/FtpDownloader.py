# -*- coding: utf-8 -*-
"""
Created on Sat May 21 17:09:16 2016

@author: Pratik
"""

import os
from ftplib import FTP, error_perm

def ftpDownloader(stationId, startYear, endYear, url="ftp.pyclass.com", user="student@pyclass.com", passwd="student123", directory="/Users/Pratik/Documents/Pratik/Work/practice/py-data-analysis"):
             ftp=FTP(url)
             ftp.login(user, passwd)
             if not os.path.exists(directory):    # if filepath doesn't exist create it and change dir
                 os.makedirs(directory)
             os.chdir(directory)
             for year in range(startYear, endYear+1): # loop through directory 
                 fullpath='/Data/%s/%s-%s.gz' % (year, stationId, year) # get file name
                 filename=os.path.basename(fullpath)                    # get file name and ext only
                 try:
                     with open(filename, 'wb') as file:
                         ftp.retrbinary("RETR %s" % fullpath, file.write)   # create new file and download
                         print("%s successfully downloaded" % filename) 
                 except error_perm:                                          # if file does not exist remove it
                     print("%s is not available" % filename)
                     os.remove(filename)
             ftp.close()                                                # close connnection
                     