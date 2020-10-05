let distance_from_sonar = 0
let strip2 = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
basic.forever(function () {
    distance_from_sonar = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (distance_from_sonar > 4) {
        strip2 = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        strip2.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(5000)
        strip2.clear()
    }
    basic.pause(5000)
    if (distance_from_sonar <= 4) {
        strip2 = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        strip2.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(5000)
        strip2.clear()
    }
    basic.pause(5000)
    if (distance_from_sonar <= 1) {
        strip2 = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        strip2.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(5000)
        strip2.clear()
    }
    basic.pause(5000)
    strip2.clear()
})
