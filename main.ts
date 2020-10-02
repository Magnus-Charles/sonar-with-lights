// Created by: Magnus
// 
// Created on: Oct 2020
// 
// this program uses the sonar to dictate what color the neopixels will change to.
let distance_from_sonar = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    distance_from_sonar = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
})
