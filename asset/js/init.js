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
    //global init
    localStorage.setItem("BUGS_NUMBER", "0");
    localStorage.setItem("SCREEN_BUGS_NUMBER", "0")
    localStorage.setItem("CLICKER_MULTIPLICATOR", "1");
    localStorage.setItem("CPS", "0")
    //Bug detector
    localStorage.setItem("TOTAL_BUG_DETECTOR", "0")
    localStorage.setItem("BASE_PRICE_BUG_DETECTOR", "15")
    localStorage.setItem("CURENT_PRICE_BUG_DETECTOR", "15")
    localStorage.setItem("CPS_BUG_DETECTOR", "0.1")
    //brut force
    localStorage.setItem("TOTAL_BRUT_FORCE", "0")
    localStorage.setItem("BASE_PRICE_BRUT_FORCE", "100")
    localStorage.setItem("CURENT_PRICE_BRUT_FORCE", "100")
    localStorage.setItem("CPS_BRUT_FORCE", "1")
    //FLIPPER ZERO
    localStorage.setItem("TOTAL_FLIPPER_ZERO", "0")
    localStorage.setItem("BASE_PRICE_FLIPPER_ZERO", "1100")
    localStorage.setItem("CURENT_PRICE_FLIPPER_ZERO", "1100")
    localStorage.setItem("CPS_FLIPPER_ZERO", "8")
    //PHISHING
    localStorage.setItem("TOTAL_PHISHING", "0")
    localStorage.setItem("BASE_PRICE_PHISHING", "12000")
    localStorage.setItem("CURENT_PRICE_PHISHING", "12000")
    localStorage.setItem("CPS_PHISHING", "47")
     //ANONYMOUS
     localStorage.setItem("TOTAL_ANONYMOUS", "0")
     localStorage.setItem("BASE_PRICE_ANONYMOUS", "130000")
     localStorage.setItem("CURENT_PRICE_ANONYMOUS", "130000")
     localStorage.setItem("CPS_ANONYMOUS", "260")
    //DDOS
    localStorage.setItem("TOTAL_DDOS", "0")
    localStorage.setItem("BASE_PRICE_DDOS", "1400000")
    localStorage.setItem("CURENT_PRICE_DDOS", "1400000")
    localStorage.setItem("CPS_DDOS", "1400")
}