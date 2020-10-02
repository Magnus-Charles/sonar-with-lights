// Created by: Magnus
// 
// Created on: Oct 2020
// 
// this program uses the sonar to dictate what color the neopixels will change to.
let strip2: neopixel.Strip = null
let distance_to_object = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    distance_to_object = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    strip2 = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
})
