if (localStorage.length === 0) {
    location.assign("http://localhost:63342/Hacker-clicker-perso/game.html?_ijt=dlisqf9nkorbbmgeoaddg20r1j&_ij_reload=RELOAD_ON_SAVE")
    window.location();
}

if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
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