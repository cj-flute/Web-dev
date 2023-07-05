const dbpin = "7755"; // in built log in pin

// basic variable declarations
const div1input = document.getElementById("div1input");
const send = document.getElementById("send");
const div1 = document.getElementById("div1");
const warning = document.getElementById("warning");
let count = 0;

//Refressh function
function refresh() {
  setTimeout(() => {
    history.go();
  }, 100);
}

//send button in div 1
send.addEventListener("click", () => {
  count++;
  if (div1input.value == dbpin && count <= 3) {
    div1.style.display = "none";
    div2.style.display = "block";
  } else if (count >= 3) {
    warning.style.display = "block";
    warning.innerHTML = "Locked!";
    div1input.disabled = true;
    div1input.value = "";
  } else {
    warning.style.display = "block";
    warning.innerHTML = `Wrong pin try again, you have ${
      3 - count
    } trials left`;
  }
  console.log(count);
});

// div 2 sellect options
const div2 = document.getElementById("div2");
const btnd2L1 = document.getElementById("btnd2L1");
const btnd2L2 = document.getElementById("btnd2L2");
// withdrawal button from options
btnd2L1.addEventListener("click", () => {
  div2.style.display = "none";
  withdrawalDiv.style.display = "block";
});
// transfer button from options
btnd2L2.addEventListener("click", () => {
  div2.style.display = "none";
  transferDiv1.style.display = "block";
});
// Exit button from options
const btnd2R4 = document.getElementById("btnd2R4");
btnd2R4.addEventListener("click", () => {
  refresh();
});

// withdral div
const withdrawalDiv = document.getElementById("withdrawalDiv");
const Wbtn = document.getElementById("Wbtn");
const Winput = document.getElementById("Winput");
let dbAmount = 1000;
const withdrawalMessageDiv = document.getElementById("withdrawalMessageDiv");
let wMessage = document.getElementById("wMessage");
const Wbtn2 = document.getElementById("Wbtn2");
Wbtn.addEventListener("click", () => {
  if (Winput.value < dbAmount && Winput.value !== "") {
    withdrawalMessageDiv.style.display = "block";
    wMessage.style.color = "green";
    wMessage.innerHTML = `TAKE CASH $${Winput.value}`;
    dbAmount = dbAmount - +Winput.value;
    console.log(dbAmount);
  } else if (Winput.value == "") {
    Winput.style.borderColor = "red";
  } else {
    withdrawalMessageDiv.style.display = "block";
    wMessage.innerHTML = "INSUFICIENT BALANCE";
    wMessage.style.color = "red";
  }
});
Wbtn2.addEventListener("click", () => {
  refresh();
});

// transfer div
// NT: transfer has 4 different divs
const transferDiv1 = document.getElementById("transferDiv1");
const tBnkinput = document.getElementById("tBnkinput");
const accountNo = document.getElementById("accountNo");
const tBnkBtn = document.getElementById("tBnkBtn");
const transferDiv2 = document.getElementById("transferDiv2");
const bankName = document.getElementById("bankName");
const tBnkBtn2_1 = document.getElementById("tBnkBtn2.1");
const tBnkBtn2_2 = document.getElementById("tBnkBtn2.2");
const tAmountBtn = document.getElementById("tAmountBtn");
const tAmountinput = document.getElementById("tAmountinput");
const transferDiv3 = document.getElementById("transferDiv3");
const tMessage = document.getElementById("tMessage");
let img = document.getElementById("img");
const tBnkBtn3 = document.getElementById("tBnkBtn3");
let CBnkName = document.getElementById("CBnkName");
let CAcctNo = document.getElementById("CAcctNo");
let CAmt = document.getElementById("CAmt");
const cOkBtn = document.getElementById("cOkBtn");
const cBackBtn = document.getElementById("cBackBtn");
const transferDiv4 = document.getElementById("transferDiv4");

// div1 send button to div2
tBnkBtn.addEventListener("click", () => {
  transferDiv1.style.display = "none";
  transferDiv2.style.display = "block";
  bankName.innerHTML = tBnkinput.value;
});
tBnkBtn2_1.addEventListener("click", () => {
  refresh();
});
tAmountBtn.addEventListener("click", () => {
  if (accountNo.value == "") {
    accountNo.style.borderColor = "red";
  } else if (tAmountinput.value == "") {
    tAmountinput.style.borderColor = "red";
  } else {
    transferDiv2.style.display = "none";
    transferDiv4.style.display = "block";
    CBnkName.innerHTML = tBnkinput.value;
    CAcctNo.innerHTML = accountNo.value;
    CAmt.innerHTML = `$${tAmountinput.value}`;
  }
});
cOkBtn.addEventListener("click", () => {
  transferDiv4.style.display = "none";
  transferDiv3.style.display = "block";
  if (tAmountinput.value <= dbAmount) {
    tMessage.innerHTML = `$${tAmountinput.value} sent successfully`;
  } else if (tAmountinput.value > dbAmount) {
    let badImg = "resource/multimedia/images/wrong symbol.png";
    tMessage.innerHTML = "Transfer failed <br> Insuficient balance";
    img.setAttribute("src", badImg);
  }
});
//back button at div4
cBackBtn.addEventListener("click", () => {
  transferDiv4.style.display = "none";
  transferDiv2.style.display = "block";
});

tBnkBtn2_2.addEventListener("click", () => {
  refresh();
});
tBnkBtn3.addEventListener("click", () => {
  refresh();
});
