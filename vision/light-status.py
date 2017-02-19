from picamera import PiCamera
import cv2
import time

camera = PiCamera()
camera.resolution = (800,600)

while True:
	camera.capture('selfie.jpg')
	grey = cv2.imread('selfie.jpg',0)
	print type(grey)
	print grey[0]
	time.sleep(5)

