input.onButtonPressed(Button.A, function () {
    Kitronik_Move_Motor.writeServoPin(Kitronik_Move_Motor.ServoSelection.servo1, 160)
    basic.pause(2000)
    Kitronik_Move_Motor.writeServoPin(Kitronik_Move_Motor.ServoSelection.servo2, 160)
    basic.pause(2000)
    Kitronik_Move_Motor.writeServoPin(Kitronik_Move_Motor.ServoSelection.servo1, 0)
    basic.pause(2000)
    Kitronik_Move_Motor.writeServoPin(Kitronik_Move_Motor.ServoSelection.servo2, 40)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(110)
    basic.pause(200)
    servos.P0.setAngle(50)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    servos.P0.setStopOnNeutral(false)
    radio.setGroup(1)
})
Kitronik_Move_Motor.writeServoPin(Kitronik_Move_Motor.ServoSelection.servo1, 0)
Kitronik_Move_Motor.writeServoPin(Kitronik_Move_Motor.ServoSelection.servo2, 40)
