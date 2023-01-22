if (localStorage.length <= 5) {
    data_reset()
}

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    update()
    price_changer()
    cps()
}

function reset() {

    const result = confirm("reset ?")
    if (result === true) {
        localStorage.clear();
        location.reload();
        data_reset();
    }

}
function data_reset(){
    localStorage.setItem("BUGS_NUMBER", "0");
    localStorage.setItem("CLICKER_MULTIPLICATOR", "1");
    localStorage.setItem("CPS", "0")
    localStorage.setItem("TOTAL_BUG_DETECTOR", "0")
    localStorage.setItem("BASE_PRICE_BUG_DETECTOR", "15")
    localStorage.setItem("CURENT_PRICE_BUG_DETECTOR", "15")
}