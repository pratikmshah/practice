# -*- coding: utf-8 -*-
"""
Created on Sat May 21 16:43:47 2016

@author: Pratik
"""
from ftplib import FTP
import os

# login and download file from ftp site
def ftpDownloader(host, user, passwd):
    ftp = FTP(host)                 # get the host url of ftp site
    ftp.login(user, passwd)         # login with username and password
    ftp.cwd('Data')                 # change directory to Data
    os.chdir("/Users/Pratik/Documents/Pratik/Work/practice/py-data-analysis") # change directory
    print(ftp.nlst())               # print list of all files in dir
    with open("isd-lite-format.pdf", 'wb') as file:     # open file and w/r
        ftp.retrbinary('RETR isd-lite-format.pdf', file.write) # read contents of pdf and write to our file