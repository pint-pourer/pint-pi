from adafruit_motorkit import MotorKit
from adafruit_motor import stepper
import RPi.GPIO as GPIO
import time

#init stuff
kit = MotorKit()
topGPIO = 23
bottomGPIO = 19

GPIO.setmode(GPIO.BCM)
GPIO.setup(topGPIO, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(bottomGPIO, GPIO.IN, pull_up_down=GPIO.PUD_UP)



def atTop():
    # true if top limit switch is triggered
    return GPIO.input(topGPIO)

def atBottom():
    # true if bottom limit switch is triggered
    return GPIO.input(bottomGPIO)


for _ in range(3):
    print("going down")
    while not atBottom():
        kit.stepper1.onestep(direction=stepper.BACKWARD, style=stepper.DOUBLE)
        time.sleep(0.0008)

    print("going up")
    while not atTop():
        kit.stepper1.onestep(style=stepper.DOUBLE)
        time.sleep(0.0008)

print("done")

