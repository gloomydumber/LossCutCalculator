# LossCutCalculator

![limitdown](/img/limitdown.png)

Never lose more than you put in with stop-loss orders and negative balance protection

## How to Use ?

### First, copy your position on Binance.

![binanceposi](/img/binanceposi.png)

you must copy from symbol to PNL (ROE %)

### Second, paste on Calculator

![paste](/img/paste.gif)

it's not based on jquery but vanilla javascript. (by onchange property)

so this is not synchronizing - like one..

you must click anywhere after pasted your data

## Copy Function by Button

when push Button with no data on SL/TP price Line, it sounds beep error once.

or sounds beep repeatly shortly on successful save.

## ver alpha

need @mediaquery and css fix

for only 1920 \* 1200 temporarlily

## Calculation

![calculation](/img/math.png)

```
(시평가-진입가)\*개수 = PNL [개수는 음수가능]

100 \* (PNL / 증거금) = ROE

->

(원하는손절가내지는익절가) 의 시평가 =[ (ROE*증거금) / (개수 *100) ]+ 진입가
```
