//% weight=0 color=#3CB371 icon="\uf140" block="CJMCU-8118"

namespace CJMCU8118 {

    /* CJMCU-8118 HDC1080 Temp&Humidity sensor addr 0x40 register 0xFF return 0x1050 */
    //% blockId="CJMCUTHIDno" block="CJMCU8118 TH IDno"
    //% blockGap=2 weight=79
    export function CJMCUTHIDno(): number {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	basic.pause(200)
	pins.i2cWriteNumber(64,255,NumberFormat.UInt8LE,false)
	basic.pause(200)
	let THIDno = pins.i2cReadNumber(64, NumberFormat.UInt16BE, false)
	basic.pause(200)
	return THIDno
    }

    /* CJMCU-8118 HDC1080 Temp&Humidity sensor addr 0x40 register 0x02 return 2 bytes */
    //% blockId="CJMCUTHConfig" block="CJMCU8118 TH Config"
    //% blockGap=2 weight=78
    export function CJMCUTHConfig(): number {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	basic.pause(200)
	pins.i2cWriteNumber(64,2,NumberFormat.UInt8LE,false)
	basic.pause(200)
	let THConfig = pins.i2cReadNumber(64, NumberFormat.UInt16BE, false)
	basic.pause(200)
	return THConfig
    }

    /* CJMCU-8118 HDC1080 Temp&Humidity sensor addr 0x40 register 0x00 return 2 bytes */
    //% blockId="CJMCUTHgetTemp" block="CJMCU8118 TH get Temperature"
    //% blockGap=2 weight=77
    export function CJMCUTHgetTemp(): number {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	basic.pause(200)
	pins.i2cWriteNumber(64,0,NumberFormat.UInt8LE,false)
	basic.pause(200)
	let Temperature = pins.i2cReadNumber(64, NumberFormat.UInt16BE, false)
	basic.pause(200)
	return Math.round(Temperature * 165 / 65536 - 40)
    }

    /* CJMCU-8118 HDC1080 Temp&Humidity sensor addr 0x40 register 0x00 return 2 bytes */
    //% blockId="CJMCUTHgetHumid" block="CJMCU8118 TH get Humidity"
    //% blockGap=2 weight=76
    export function CJMCUTHgetHumid(): number {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	basic.pause(200)
	pins.i2cWriteNumber(64,1,NumberFormat.UInt8LE,false)
	basic.pause(200)
	let Temperature = pins.i2cReadNumber(64, NumberFormat.UInt16BE, false)
	basic.pause(200)
	return Math.round(Temperature / 65536 * 100)
    }

    /* CJMCU-8118 CCS811 Gas sensor addr 0x5A register 0x20 return 1 byte */
    //% blockId="CJMCUGasIDno" block="CJMCU8118 Gas IDno"
    //% blockGap=2 weight=75
    export function CJMCUGasIDno(): number {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	basic.pause(200)
	pins.i2cWriteNumber(90,32,NumberFormat.UInt8LE,false)
	basic.pause(200)
	let GasIDno = pins.i2cReadNumber(90, NumberFormat.UInt8LE, false)
	basic.pause(200)
	return GasIDno
    }

    /* CJMCU-8118 CCS811 Gas sensor addr 0x5A register 0xF4 */
    //% blockId="CJMCUGasAppStart" block="CJMCU8118 Gas AppStart"
    //% blockGap=2 weight=74
    export function CJMCUGasAppStart() {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	basic.pause(200)
	pins.i2cWriteNumber(90,244,NumberFormat.UInt8LE,false)
	basic.pause(200)
    }

    /* CJMCU-8118 CCS811 Gas sensor addr 0x5A register 0x00 return 1 byte */
    //% blockId="CJMCUGasStatus" block="CJMCU8118 Gas Status"
    //% blockGap=2 weight=73
    export function CJMCUGasStatus(): number {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	basic.pause(200)
	pins.i2cWriteNumber(90,0,NumberFormat.UInt8LE,false)
	basic.pause(200)
	let GasStatus = pins.i2cReadNumber(90, NumberFormat.UInt8LE, false)
	basic.pause(200)
	return GasStatus
    }

    /* CJMCU-8118 CCS811 Gas sensor addr 0x5A register 0xE0 return 1 byte */
    //% blockId="CJMCUGasErrID" block="CJMCU8118 Gas ErrorID"
    //% blockGap=2 weight=72
    export function CJMCUGasErrID(): number {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	basic.pause(200)
	pins.i2cWriteNumber(90,224,NumberFormat.UInt8LE,false)
	basic.pause(200)
	let GasErrID = pins.i2cReadNumber(90, NumberFormat.UInt8LE, false)
	basic.pause(200)
	return GasErrID
    }

    /* CJMCU-8118 CCS811 Gas sensor addr 0x5A register 0x01 */
    //% blockId="CJMCUGasDrvMode" block="CJMCU8118 Gas DrvMode1"
    //% blockGap=2 weight=71
    export function CJMCUGasDrvMode() {
	pins.setPull(DigitalPin.P19, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P20, PinPullMode.PullUp)
	basic.pause(200)
	pins.i2cWriteNumber(90,1,NumberFormat.UInt8LE,false)
	basic.pause(200)
	pins.i2cWriteNumber(90,16,NumberFormat.UInt8LE,false)
	basic.pause(200)
    }

}
