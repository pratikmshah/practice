# -*- coding: utf-8 -*-
"""
Created on Sat May 21 16:43:47 2016

@author: Pratik
"""
from ftplib import FTP

def ftpDownloader(host, user, passwd):
    ftp = FTP(host)
    ftp.login(user, passwd)
    print(ftp.nlst())
