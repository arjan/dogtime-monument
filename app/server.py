#!/usr/bin/env python
import os
import serial
import tornado.ioloop
import tornado.web

ARDUINO = '/dev/serial/by-id/usb-Arduino__www.arduino.cc__Arduino_Uno_64932343738351901230-if00'

class ShootHandler(tornado.web.RequestHandler):
    def initialize(self):
        self.serial = serial.Serial(ARDUINO, baudrate=19200)
        
    def post(self):
        print "Shooting a ball."
        self.serial.write("\x01")
        self.write("OK")


class Application(tornado.web.Application):
    def __init__(self):
        routes = [
            (r"/shoot", ShootHandler),
            (r'/(.*)', tornado.web.StaticFileHandler, {'path': os.path.dirname(__file__) + "/public"}),
            ]
        super(Application, self).__init__(routes)
        self.listen(8888)


if __name__ == "__main__":

    application = Application()
    ioloop = tornado.ioloop.IOLoop.instance()
    ioloop.start()


