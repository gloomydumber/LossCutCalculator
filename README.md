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

## Caculation

$$ 시평가 = MP \ 진입가 = EP \ 개수 = S \ (음수가능) \ 증거금=M \ 손익절가=TP $$

$$(MP - EP) * S = PNL $$

$$ 100 * (PNL / M) = ROE $$

$$ TP = [(ROE\*M)/(S*100)] + EP $$

```
(시평가-진입가)\*개수 = PNL [개수는 음수가능]

100 \* (PNL / 증거금) = ROE

->

(원하는손절가내지는익절가) 의 시평가 =[ (ROE*증거금) / (개수 *100) ]+ 진입가
```
