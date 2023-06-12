pins.onPulsed(DigitalPin.P12, PulseValue.High, function () {
    pins.servoWritePin(AnalogPin.P14, 58)
})
input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P12, 1023)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P8, 180)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
})
basic.showString("Hello!")
