var tessel = require('tessel'),
  _ = require('underscore'),
  gpio = tessel.port['GPIO'],
  pin = gpio.pin['G6']

pin.input()
console.log(pin, [pin.mode(), pin.type])

onSignalFell = function (time, type) {
  console.log('signal fell')
  spawn('afplay', ['woot.m4a'])
}

pin.on('fall', _.throttle(function (time, type) {
  console.log('signal fell', spawn)
}, 2000))
