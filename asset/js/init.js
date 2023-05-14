if (localStorage.length === 0) {
    document.location.href = window.location.protocol + '//' + window.location.host + '/';
} else if (localStorage.length === 1) {
    localStorage.clear()
    data_reset()
}
const chargement = window.performance.navigation

if (chargement) {
    music_system()
    update()
    price_changer()
    cps()
}

//reset local
document.getElementById("restart-btn").addEventListener("click", () => {
    localStorage.clear();
    data_reset();
    location.reload();
    close_restart_modal()
})

//reset CLI
document.getElementById("restartCLI-btn").addEventListener("click", () => {
    localStorage.clear();
    document.location.href = window.location.protocol + '//' + window.location.host + '/index.html';
    close_restart_modal()
})


function data_reset() {
    //global init
    localStorage.setItem("BUGS_NUMBER", "0");
    localStorage.setItem("TOTAL_BUGS_NUMBER", "0");
    localStorage.setItem("SCREEN_BUGS_NUMBER", "0")
    localStorage.setItem("CLICKER_MULTIPLICATOR", "1");
    localStorage.setItem("CPS", "0")
    localStorage.setItem("VOLUME", "50")
    localStorage.setItem("TOTAL_CLICK", "0")
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
    //Bio Hacking
    localStorage.setItem("TOTAL_BIO_HACKING", "0")
    localStorage.setItem("BASE_PRICE_BIO_HACKING", "20000000")
    localStorage.setItem("CURENT_PRICE_BIO_HACKING", "20000000")
    localStorage.setItem("CPS_BIO_HACKING", "7800")
    //Cyber War
    localStorage.setItem("TOTAL_CYBER_WAR", "0")
    localStorage.setItem("BASE_PRICE_CYBER_WAR", "330000000")
    localStorage.setItem("CURENT_PRICE_CYBER_WAR", "330000000")
    localStorage.setItem("CPS_CYBER_WAR", "44000")
    //E-Bomb
    localStorage.setItem("TOTAL_EBOMB", "0")
    localStorage.setItem("BASE_PRICE_EBOMB", "5100000000")
    localStorage.setItem("CURENT_PRICE_EBOMB", "5100000000")
    localStorage.setItem("CPS_EBOMB", "260000")
}

function music_system() {

    const songs = [
        "/asset/sound/main_theme/main-01.mp3",
        "/asset/sound/main_theme/main-02.mp3",
        "/asset/sound/main_theme/main-03.mp3",
        "/asset/sound/main_theme/main-04.mp3",
        "/asset/sound/main_theme/main-05.mp3",
        "/asset/sound/main_theme/main-06.mp3",
        "/asset/sound/main_theme/main-07.mp3",
        "/asset/sound/main_theme/main-08.mp3",
        "/asset/sound/main_theme/main-09.mp3",
        "/asset/sound/main_theme/main-10.mp3",
        "/asset/sound/main_theme/main-11.mp3",
        "/asset/sound/main_theme/main-12.mp3",
    ];

    let song = new Audio('/asset/sound/silence.mp3');
    song.play()
    let currentSong = 0;
    let len = songs.length;

    function playSong(index) {
        song.src = songs[index];
        song.play();

        song.volume = parseInt(localStorage.VOLUME) / 100;
    }

    song.addEventListener("ended", function playNextS() {
        if (currentSong === len) {
            currentSong = 0;
            playSong(currentSong);
        } else {
            playSong(currentSong);
        }
        currentSong++;
    })
}