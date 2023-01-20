if (localStorage.length === 0 ) {
    localStorage.setItem("BUGS_NUMBER", "0");
    localStorage.setItem("CLICKER_MULTIPLICATOR", "1");
    document.getElementById("counter").innerHTML = "0";
}
function reset(){
    localStorage.clear();
    location.reload();
}
function clicker(){
    const counter = document.getElementById("counter");
    console.log(counter.innerHTML)
    console.log(localStorage.BUGS_NUMBER)
    bug_number = parseInt(localStorage.BUGS_NUMBER) + parseInt(localStorage.CLICKER_MULTIPLICATOR);
    localStorage.setItem("BUGS_NUMBER", bug_number);
    counter.innerHTML= bug_number;
}