getLoginDeatils = JSON.parse(localStorage.getItem("number"))
console.log("get", getLoginDeatils);
var numberview = document.getElementById("addNumber").innerHTML = getLoginDeatils
function onotp() {
    var getOtp = JSON.parse(localStorage.getItem("otp"))
    console.log("getOtp", getOtp);
    var otpArray = String(getOtp);
    var data = otpArray.split("")
    console.log("data", data);

    setTimeout(() => {
        document.getElementById("OTP1").value = data[0]
        document.getElementById("OTP2").value = data[1]
        document.getElementById("OTP3").value = data[2]
        document.getElementById("OTP4").value = data[3]
    }, 3000);

}
onotp();

function onresendOtp() {
    var sendOTP;
    var timeOtp = 60;
    var timer = timeOtp;
    onCountDown(timer);

    sendOTP = setInterval(function () {
        timer--;
        onCountDown(timer);
        if (timer <= 0) {
            clearInterval(sendOTP);
        }
    }, 1000);
}

function ongotoHomePage() {
    window.location.href = "../dashboard/dashboard.html"
}

function onCountDown(timer) {
    var timeDisplay = document.getElementById("addTimer")
    timeDisplay.innerHTML = `${timer}`;
    timeDisplay.style.color = "grey";
}

function onEdit() {
    window.location.href = "../login/login.html"
}