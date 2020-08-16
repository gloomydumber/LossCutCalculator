//var savedLossValue; // 손절가가 저장되는 변수
//var savedCalValue; // 바이낸스 값이 저장되는 변수

function beep() {
  var audio = new Audio();
  audio.src = "sound/battlelogbeep.mp3";
  audio.play();
}

function errsound() {
  var audio = new Audio();
  audio.src = "sound/errorsound.mp3";
  audio.play();
}

function cutCal() {
  var settingROE = parseFloat(document.getElementById("lossROE").value);
  var eviVal = parseFloat(document.getElementById("marg").value);
  var balance = parseFloat(document.getElementById("size").value);
  var enter = document.getElementById("entPrice").value;
  enter = parseFloat(enter.replace(",", ""));
  var finalValue = parseFloat((settingROE * eviVal) / (balance * 100) + enter);
  if (finalValue) {
    document.getElementById("lossPrice").value = finalValue.toFixed(2);
  } else {
    document.getElementById("lossPrice").value = "Value Error";
  }
}
/*
function savelossValue(selectObject) {
  // 손절가를 저장하는 함수
  savedLossValue = selectObject.value;
}
function savelossValue() {
  // 손절가를 저장하는 함수
  var savedLossValue = document.getElementById("lossPrice").value;
}
*/
function savecalValue() {
  // 바이낸스 값을 저장하는 함수
  var savedcalValue = document.getElementById("calculation").value;
  var str = savedcalValue.split(" ");
  document.getElementById("size").value = str[1]; // 크기
  document.getElementById("entPrice").value = str[2]; // 진입가격
  document.getElementById("markPrice").value = str[3]; // 시장평균가
  document.getElementById("liqPrice").value = str[4]; // 청산가격
  document.getElementById("margRatio").value = str[5]; // 증거금 비율
  document.getElementById("marg").value = str[6]; // 증거금
  document.getElementById("ROE").value = str[7] + str[8]; // ROE
}

function clipBcopy() {
  // 손절가를 클립보드에 복사해주는 함수
  var tempvalue = document.getElementById("lossPrice").value;
  if (tempvalue === "") {
    errsound();
  } else {
    beep();
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = tempvalue;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  }
}

// jQuery src 여부 체크
/* <script type="text/javascript">
if (typeof jQuery == "undefined") {
  alert("없음");
} else {
  alert("있음");
}
</script> */

// 동기적으로 바이낸스 손절값을 계산해주는 함수
$(document).ready(function () {
  var oldVal = $(".val").val();
  $(".val").on("propertychange change keyup paste", function () {
    var currentVal = $(this).val();
    if (currentVal == oldVal) {
      return;
    }
    oldVal = currentVal;
    cutCal();
  });
});

// 동기적으로 바이낸스 복사 값을 처리해주는 함수
$(document).ready(function () {
  var oldVal = $(".binanceCal").val();
  $(".binanceCal").on("propertychange change keyup paste", function () {
    var currentVal = $(this).val();
    if (currentVal == oldVal) {
      return;
    }
    oldVal = currentVal;
    savecalValue();
  });
});
