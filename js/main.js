// =================signUp==========================

var namee = document.getElementById("sing-upname");
var email = document.getElementById("sing-upemail");
var password = document.getElementById("password")
var allDe = []



if (localStorage.getItem("elUser") != null) {
    allDe = JSON.parse(localStorage.getItem("elUser"))
}


function isEmailExist() {
    for (var i = 0; i < allDe.length; i++) {
        if (allDe[i].pEmail.toLowerCase() == email.toLowerCase) {
            return true

        }
    }   
    return false
}
function clearInput() {
    namee.value=""
    email.value=""
    password.value=""

}

document.getElementById("btn-singup").addEventListener("click", function () {
    var userLog = {
        pName: namee.value,
        pEmail: email.value,
        pPassword: password.value
    }



    if (userLog.pEmail == "" || userLog.pName == "" || userLog.pPassword == "") {
        document.querySelector(".one").innerHTML = "  all inputs is required "
        document.querySelector(".tow").innerHTML = ""
        document.querySelector(".three").innerHTML = ""
    } else if (isEmailExist() == true) {
        document.querySelector(".tow").innerHTML = "  email already exists "
        document.querySelector(".one").innerHTML = ""
        document.querySelector(".three").innerHTML = ""
    } else {

        allDe.push(userLog);
        localStorage.setItem("elUser", JSON.stringify(allDe))
        console.log(localStorage.getItem("elUser"));

        clearInput()
        document.querySelector(".three").innerHTML = "  Success "
        document.querySelector(".one").innerHTML = ""
        document.querySelector(".tow").innerHTML = ""

    }
})

