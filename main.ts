// Created by: Magnus
// 
// Created on: Oct 2020
// 
// this program uses the sonar to dictate what color the neopixels will change to.
let strip2: neopixel.Strip = null
let distance_from_sonar = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    distance_from_sonar = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (distance_from_sonar > 4) {
        strip2 = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        strip2.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (distance_from_sonar <= 4) {
        strip2 = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        strip2.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (distance_from_sonar <= 1) {
        strip2 = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        strip2.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
