if (localStorage.length !== 0) {
    location.assign("http://localhost:63342/Hacker-clicker-perso/index.html?_ijt=i6639q89t9kminks3q3f20gqul&_ij_reload=RELOAD_ON_SAVE")
    window.location();
}
if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    var i = 0;
    var txt = 'Loading... Don\'t forget, the command help exist'; /* The text */
    var speed = 20; /* The speed/duration of the effect in milliseconds */

    typeWriter()
    setTimeout(inputController, speed * txt.length + 200);
}
function typeWriter() {
    if (txt !== undefined) {
        var txtLength = txt.length;
    } else {
        console.log("undefined")
    }
    if (i < txtLength) {
        document.getElementById("startupMessage").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
function inputController(){
    document.getElementById("text").innerHTML +=
        "<br>" +
        "<span class='input_field'>" +
        "<label for='input'>[clicker@localhost ~   </label>" +
        "<input type='text' name='input' id='input'>";
    document.getElementById("input").focus()
}
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        const input = document.getElementById("input")
        input.removeAttribute("id");
        input.removeAttribute("autofocus");
        input.setAttribute("value", input.value)
        input.setAttribute("disabled", "true")
        commandLine(input.value)
    }
});
function commandLine(command){
    if(command === "sudo" | command === "sudo su" | command === "su"){
        inputController()
    }else{
        document.getElementById("text").innerHTML += "<br>'" + command + "' is not defined";
        inputController()
    }
}