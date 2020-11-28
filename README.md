# LossCutCalculator

![limitdown](/img/limitdown.png)

Never lose more than you put in with stop-loss orders and negative balance protection

## How to Use ?

### First, copy your position on Binance.

![binanceposi](/img/binanceposi.png)

you must copy from symbol to PNL (ROE %) or just type marked input(\*)

### Second, paste on Calculator

<p align="center"><img src="/img/paste.gif"></p>

Applied jQuery for synchronized-like function (08/15/2020)

## Copy Function by Button

when push Button with no data on SL/TP price Line, it sounds beep error once.

or sounds beep repeatly shortly on successful save.

## ver alpha

applied @mediaquery (not perfect though)

## Calculation

![calculation](/img/math.png)

```
(시평가-진입가)*개수 = PNL [개수는 음수가능]

100 * (PNL / 증거금) = ROE

->

(원하는손절가내지는익절가) 의 시평가 =[ (ROE*증거금) / (개수*100) ]+ 진입가
```

## Log

1. 진입 가격에 따른 손익절가 소수점 처리 필요

2. Chrome Extension으로 제공

3. future.binance URI 확인 후 자동 포지션 계산 제공

4. Input 제한 TEST

5. 현물 계산 / 선물 계산 구분
