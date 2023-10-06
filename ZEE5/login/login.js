var otp;
var otpSave;
function onLogin() {
    var onLoginDetails = document.getElementById("login_datail").value;
    var regex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

    var valideText = document.getElementById("text_valid");
    var valid = ''
    console.log("localdeatils", number);
    if (onLoginDetails.match(regex)) {
        valid += "Verified Successfully";
        valideText.style.color = "green";
        valideText.innerHTML = valid;

        otp = Math.floor(Math.random() * 9999 + 1000)

        console.log("otp", otp);

        setTimeout(() => {
            window.location.href = "../otp/otp.html"
        }, 2000);

        var number = localStorage.setItem("number", JSON.stringify(onLoginDetails));
        otpSave = localStorage.setItem("otp", JSON.stringify(otp))


    } else if (onLoginDetails.match(emailRegex)) {
        valid += "Varified SuccessFully"
        valideText.style.color = "green";
        valideText.innerHTML = valid;

        var otp = Math.floor(Math.random() * 9999 + 1000)


        setTimeout(() => {
            window.location.href = "../otp/otp.html"
        }, 2000);

        var number = localStorage.setItem("number", JSON.stringify(onLoginDetails));
        otpSave = localStorage.setItem("otp", JSON.stringify(otp))

    }
    else {
        valid += "Enter Reqired Details.";
        valideText.style.color = "red";
        valideText.innerHTML = valid;
        return
    }


}

var getLoginDeatils = JSON.parse(localStorage.getItem("number"))
console.log("get", getLoginDeatils);

var getOtp = JSON.parse(localStorage.getItem("otp"))
console.log("getOtp", getOtp);

function gotoRegister() {
    window.location.href = "../register/register.html"
}