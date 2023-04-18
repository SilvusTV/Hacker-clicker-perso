if (localStorage.length !== 0) {
    document.location.href= window.location.protocol + '//' + window.location.host + '/game.html';
}
let user = 0

addEventListener("load", (event) => {

});
if (window.performance.navigation) {
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

function inputController() {
    var displayUser = "clicker";
    if (user !== 0) {
        displayUser = "root";
    }
    document.getElementById("text").innerHTML +=
        "<br>" +
        "<span class='input_field'>" +
        "<label for='input'>[" + displayUser + "@localhost] ~   </label>" +
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

function commandLine(command) {
    if (command === "sudo" || command === "sudo su" || command === "su") {
        user = 1
        inputController()
    } else if (command === "exit") {
        user = 0
        inputController()
    } else if (command === "ls") {
        document.getElementById("text").innerHTML += "<br>README.md  asset  game.html  index.html  style";
        inputController()
    } else if (command === "ls -la") {
        document.getElementById("text").innerHTML += "<br>total 41<br>" +
            "drwxr-xr-x 6 debian debian 4096 Apr 11 13:01 .<br>" +
            "drwxr-xr-x 3 debian debian 4096 Apr 11 13:01 ..<br>" +
            "drwxr-xr-x 8 debian debian 4096 Apr 11 12:50 .git<br>" +
            "-rw-r--r-- 1 debian debian   26 Apr 11 12:41 .gitignore<br>" +
            "drwxr-xr-x 2 debian debian 4096 Apr 11 12:50 .idea<br>" +
            "-rw-r--r-- 1 debian debian  295 Apr 11 12:41 README.md<br>" +
            "drwxr-xr-x 6 debian debian 4096 Apr 11 12:49 asset<br>" +
            "-rw-r--r-- 1 debian debian 2987 Apr 11 12:49 game.html<br>" +
            "-rw-r--r-- 1 debian debian  470 Apr 11 12:49 index.html<br>" +
            "drwx------ 2 debian debian 4096 Apr 11 12:49 startGame.sh<br>" +
            "drwxr-xr-x 2 debian debian 4096 Apr 11 12:49 style";
        inputController()
    } else if (command === "startGame.sh") {
        if (user === 0) {
            document.getElementById("text").innerHTML += "<br>'" + command + "': Permission denied";
            inputController()
        } else {
            localStorage.setItem("sh", "yes")
            document.location.href = window.location.protocol + '//' + window.location.host + '/game.html';
        }
    }else if (command === "help"){
        document.getElementById("text").innerHTML += "<br>" +
            "drwxr-xr-x 6 debian debian 4096 Apr 11 13:01 .<br>" +
            "drwxr-xr-x 3 debian debian 4096 Apr 11 13:01 ..<br>" +
            "drwxr-xr-x 8 debian debian 4096 Apr 11 12:50 .git<br>" +
            "-rw-r--r-- 1 debian debian   26 Apr 11 12:41 .gitignore<br>" +
            "drwxr-xr-x 2 debian debian 4096 Apr 11 12:50 .idea<br>" +
            "-rw-r--r-- 1 debian debian  295 Apr 11 12:41 README.md<br>" +
            "drwxr-xr-x 6 debian debian 4096 Apr 11 12:49 asset<br>" +
            "-rw-r--r-- 1 debian debian 2987 Apr 11 12:49 game.html<br>" +
            "-rw-r--r-- 1 debian debian  470 Apr 11 12:49 index.html<br>" +
            "drwx------ 2 debian debian 4096 Apr 11 12:49 startGame.sh<br>" +
            "drwxr-xr-x 2 debian debian 4096 Apr 11 12:49 style";
        inputController()
    }
    else {
        document.getElementById("text").innerHTML += "<br>'" + command + "' is not defined";
        inputController()
    }
}