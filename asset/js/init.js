if (localStorage.length === 0) {
    document.location.href = window.location.protocol + '//' + window.location.host + '/';
} else if (localStorage.length === 1) {
    localStorage.clear()
    data_reset()
}
const chargement = window.performance.navigation

if (chargement) {
    update()
    price_changer()
    cps()
    music_system()
}

function reset() {

    const result = confirm("Voulez-vous recommencer le jeu ?")
    if (result === true) {
        const result = confirm("Voulez-vous retourner dans l'invite de commande ?")
        if (result === true) {
            localStorage.clear();
            document.location.href = window.location.protocol + '//' + window.location.host + '/index.html';
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

function music_system() {

    var main_theme = new Audio('/asset/sound/silence.mp3')
    console.log(main_theme)
    main_theme.play()

    let i = 1;
    let nextSong = "";

    function lunch() {
        console.log("je suis fini")
        if (i >= 10) {
            nextSong = new Audio("/asset/sound/main_theme/main-" + i + ".mp3");
        } else {
            nextSong = new Audio("/asset/sound/main_theme/main-0" + i + ".mp3");
        }
        main_theme = nextSong;
        main_theme.play();
        i++


        if (i === 13) {
            i = 1;
        }

    }

    main_theme.addEventListener('ended', lunch(), true)
    return "music as been lunch"
}
