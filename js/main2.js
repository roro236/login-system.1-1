var email = document.getElementById("log-inemail");
var password = document.getElementById("password")
var allDe = []
function clearInput() {
    var email = document.getElementById("email").innerHTML = ""

}

if(document.getElementById("btn-log-in")!=null){
    document.getElementById("btn-log-in").addEventListener("click", function () {
        var userLog = {
            pEmail: email.value,
            pPassword: password.value
        }
    
    
    
        if (userLog.pEmail == "" || userLog.pPassword == "") {
 document.querySelector(".one").innerHTML = "  all inputs is required "
            document.querySelector(".tow").innerHTML = ""
        }
      
        else {
            var arr = JSON.parse(localStorage.getItem("elUser"))
            console.log(arr);
    
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].pEmail == email.value) {
                    
                    localStorage.setItem("userName",arr[i].pName)
                    window.location.href = "index3.html"
    
                   
                }
                else {
                    document.querySelector(".tow").innerHTML = "  incorrect email or password "
                    document.querySelector(".one").innerHTML = ""
                }
            }
    
            clearInput()  
    
        }
    })
}

