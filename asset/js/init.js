if (localStorage.length === 0) {
    document.location.href = window.location.protocol + '//' + window.location.host + '/';
}else if(localStorage.length === 1){
    localStorage.clear()
    data_reset()
}

if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    update()
    price_changer()
    cps()
}

function reset() {

    const result = confirm("Voulez-vous recommencer le jeu ?")
    if (result === true) {
        const result = confirm("Voulez-vous retourner à l'invite de commande ?")
        if (result === true) {
            localStorage.clear();
            document.location.href = window.location.protocol + '//' + window.location.host + '/';
        } else {
            localStorage.clear();
            data_reset();
            location.reload();
        }

    }

}

function data_reset() {
    console.log("reset")
    //global init
    localStorage.setItem("BUGS_NUMBER", "0");
    localStorage.setItem("SCREEN_BUGS_NUMBER", "0")
    localStorage.setItem("CLICKER_MULTIPLICATOR", "1");
    localStorage.setItem("CPS", "0")
    //Bug detector
    localStorage.setItem("TOTAL_BUG_DETECTOR", "0")
    localStorage.setItem("BASE_PRICE_BUG_DETECTOR", "15")
    localStorage.setItem("CURENT_PRICE_BUG_DETECTOR", "15")
    localStorage.setItem("CPS_BUG_DETECTOR", "0.2")
    //brut force
    localStorage.setItem("TOTAL_BRUT_FORCE", "0")
    localStorage.setItem("BASE_PRICE_BRUT_FORCE", "100")
    localStorage.setItem("CURENT_PRICE_BRUT_FORCE", "100")
    localStorage.setItem("CPS_BRUT_FORCE", "0.8")
    //ANONYMOUS
    localStorage.setItem("TOTAL_ANONYMOUS", "0")
    localStorage.setItem("BASE_PRICE_ANONYMOUS", "500")
    localStorage.setItem("CURENT_PRICE_ANONYMOUS", "500")
    localStorage.setItem("CPS_ANONYMOUS", "4")
    //DDOS
    localStorage.setItem("TOTAL_DDOS", "0")
    localStorage.setItem("BASE_PRICE_DDOS", "2000")
    localStorage.setItem("CURENT_PRICE_DDOS", "2000")
    localStorage.setItem("CPS_DDOS", "10")
}
