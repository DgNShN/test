input.onButtonPressed(Button.A, function () {
    sayi += 1
    basic.showNumber(sayi)
})
input.onGesture(Gesture.TiltLeft, function () {
    islemTuru = "t"
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    hesapla(sayi, islemTuru)
})
input.onButtonPressed(Button.B, function () {
    sayi += -1
    basic.showNumber(sayi)
})
input.onGesture(Gesture.TiltRight, function () {
    islemTuru = "c"
    basic.showLeds(`
        # . . # #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    hesapla(sayi, islemTuru)
})
function hesapla (sayiDegiskeni: number, islemTurun: string) {
    if (islemTurun == "t") {
        sonuc = sayiDegiskeni + 5
    } else if (islemTurun == "c") {
        sonuc = sayiDegiskeni * 5
    }
    basic.clearScreen()
    basic.pause(100)
    basic.showNumber(sonuc)
}
let islemTuru = ""
let sonuc = 0
let sayi = 0
sayi = 0
sonuc = 0
islemTuru = ""
basic.forever(function () {
	
})
