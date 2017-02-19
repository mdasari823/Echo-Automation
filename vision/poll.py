#import the necessary packages
import argparse
import datetime
import imutils
import time
import cv2
import RPi.GPIO as GPIO
import time
import threading
import requests

import RPi.GPIO as GPIO
import time 
import json

GPIO.setmode(GPIO.BOARD)
GPIO.setup(7, GPIO.OUT)

status_l = 'false'
def foo():
        global status_l
        print('sending request '+status_l)
        r = requests.get("https://ltfxwxflbe.localtunnel.me/camera/light/command")
	print(r.text)
	j = json.loads(r.text)
	if j['command'] == 'off':
		print("Light is off")
		GPIO.output(7, GPIO.HIGH) # Off
	elif j['command'] == 'on':
		print("Light is on")
		GPIO.output(7, GPIO.LOW)
	else:
		print(r.text)
        threading.Timer(3, foo).start()

foo()
