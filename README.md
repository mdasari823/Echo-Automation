# Echo-Automation
Amazon Echo Automation - CEWIT Hackathon 2017
Inspiration
Most individuals have smartphones that help them increase productivity and facilitate many daily tasks. However, using interactive voice commands with a smart assistant is an easier and more convenient medium to perform daily tasks and monitor the home.

What it does
Using remote voice commands, our system gives you the current status of the lighting and occupancy of the area being monitored, and can even control the lighting in the room.

How we built it
Using Amazon Echo, the Raspberry Pi 3 with camera sensors and led lights, a Node.js Backend component, and Python to operate the camera and LED lights, we were able to perform remote voice commands to control the home environment.

Challenges we ran into
Communicating between Amazon's Echo, OpenCV image processing applications, and LED GPIO control interfaces proved to be a challenge when integrating all of the different underlying interface drivers.

Accomplishments that we're proud of
This project proves that low cost IOT devices and applications can be used to assist many people in their home. Applications of this system include controlling household devices, monitoring the home (security), and remote reporting of the status of smart household appliances.

What we learned
We learned how to manipulate the Rapsberry Pi hardware, such as using GPIOs with LEDs, buttons, sensors, and cameras. We also learned about the Amazon Echo API to communicate with the Rapsberry Pi and OpenCV image processing applications. Using all of these IOT devices, we learned that you can easily build a low-cost, yet full-fledged smart home environment.

What's next for Alexa Home Automation - Smart Pi
One future application for our ecosystem is performing saliency event detection, such as identity recognition, in home monitoring and reporting to a homeowner. These features can be used for security purposes to warn homeowners of unknown individuals, to automatically save energy by disabling unattended appliances (such as switching off light bulbs), and track the daily patterns of individuals within a home to recommend healthier lifestyles.

Built With
python
node.js
javascript
raspberry-pi
amazon-alexa
rest-server
