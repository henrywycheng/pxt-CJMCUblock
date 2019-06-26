//% weight=0 color=#3CB371 icon="\uf2b9" block="CJMCU-8118"

namespace CJMCUblock {
    /* 有傳回值旳拼塊 */
    //% blockId="addTwoNum" block="calculate total of num1 %num1|num2 %num2"
    //% blockGap=2 weight=90 blockExternalInputs=true
    export function addTwoNum(num1: number, num2:number): number {
        return num1+num2
    }

    /* 無傳回值旳拼塊 */
    //% blockId="showStringWithTime" block="show string %str|with delay time %delay"
    //% blockGap=2 weight=80
    export function showStringWithTime(str: string, delay:number): void {
        basic.showString(str,delay)
    }

    /* 有傳回值旳拼塊 */
    //% blockId="celcius2farenheit" block="convert Celcius to Farenheit num1 %num1"
    //% blockGap=2 weight=90
    export function celcius2farenheit(num1: number): number {
        return num1*9/5+32
    }
}
