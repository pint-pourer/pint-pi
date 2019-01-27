from adafruit_motorkit import MotorKit
from adafruit_motor import stepper
import time
kit = MotorKit()

while True:
  kit.stepper1.onestep(direction=stepper.BACKWARD, style=stepper.DOUBLE)
  time.sleep(0.0008)
       

#for i in range(6000):
#	kit.stepper1.onestep(style=stepper.DOUBLE)
#	time.sleep(0.0008)
#for i in range(6000):
#	kit.stepper1.onestep(direction=stepper.BACKWARD, style=stepper.DOUBLE)
#	time.sleep(0.0008)



