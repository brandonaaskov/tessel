var tessel = require('tessel'),
    http = require('http'),
//  _ = require('underscore'),
    gpio = tessel.port['GPIO'],
    pin = gpio.pin['G6']

pin.input()

var onDoorClosed = function (time, type) {
  console.log('door closed')
  http.get('http://data.sparkfun.com/input/6JZVMozQLWsqWNlJQ4a4?private_key=Ww0dDWk8x2hagRPxXNBN&door_open=closed')
}

var onDoorOpened = function (time, type) {
  console.log('door opened')
  http.get('http://data.sparkfun.com/input/6JZVMozQLWsqWNlJQ4a4?private_key=Ww0dDWk8x2hagRPxXNBN&door_open=open')
}

pin.on('fall', onDoorOpened)
pin.on('rise', onDoorClosed)
console.log('waiting for door...')