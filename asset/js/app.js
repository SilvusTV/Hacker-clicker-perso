document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        clicker()
    }
})

document.getElementById("clicker").addEventListener('click', ()=>{
    clicker()
})
function clicker() {

    let bug_number = parseFloat(localStorage.BUGS_NUMBER) + parseInt(localStorage.CLICKER_MULTIPLICATOR);
    let total_bug_number = parseFloat(localStorage.TOTAL_BUGS_NUMBER) + parseInt(localStorage.CLICKER_MULTIPLICATOR);
    localStorage.setItem("BUGS_NUMBER", bug_number);
    localStorage.setItem("TOTAL_BUGS_NUMBER", total_bug_number);
    localStorage.TOTAL_CLICK = parseInt(localStorage.TOTAL_CLICK) + 1
    let click = new Audio('/asset/sound/click.mp3')
    click.play()
    click.volume = parseInt(localStorage.VOLUME) / 100;
    update()
    price_changer()
    bugs_visual(bug_number)
}

function price_changer() {

    //Bug Detector
    if (parseInt(localStorage.BUGS_NUMBER) >= parseInt(localStorage.CURENT_PRICE_BUG_DETECTOR)) {
        document.getElementById("price-BD").classList.remove("error");
        document.getElementById("build-BD").classList.add("clickable");
        document.getElementById("build-BD").setAttribute("onclick", "build(BD)")
        update()
    } else {
        let who = "BD";
        remove(who);
    }
    //Brute Force
    if (parseInt(localStorage.BUGS_NUMBER) >= parseInt(localStorage.CURENT_PRICE_BRUT_FORCE)) {
        document.getElementById("price-BF").classList.remove("error");
        document.getElementById("build-BF").classList.add("clickable");
        document.getElementById("build-BF").setAttribute("onclick", "build(BF)")
        update()
    } else {
        let who = "BF";
        remove(who);
    }
    //Anonymous
    if (parseInt(localStorage.BUGS_NUMBER) >= parseInt(localStorage.CURENT_PRICE_ANONYMOUS)) {
        document.getElementById("price-ANO").classList.remove("error");
        document.getElementById("build-ANO").classList.add("clickable");
        document.getElementById("build-ANO").setAttribute("onclick", "build(ANO)")
        update()
    } else {
        let who = "ANO";
        remove(who);
    }
    //Flipper Zero
    if (parseInt(localStorage.BUGS_NUMBER) >= parseInt(localStorage.CURENT_PRICE_FLIPPER_ZERO)) {
        document.getElementById("price-FZ").classList.remove("error");
        document.getElementById("build-FZ").classList.add("clickable");
        document.getElementById("build-FZ").setAttribute("onclick", "build(FZ)")
        update()
    } else {
        let who = "FZ";
        remove(who);
    }
    //Phishing
    if (parseInt(localStorage.BUGS_NUMBER) >= parseInt(localStorage.CURENT_PRICE_PHISHING)) {
        document.getElementById("price-PHS").classList.remove("error");
        document.getElementById("build-PHS").classList.add("clickable");
        document.getElementById("build-PHS").setAttribute("onclick", "build(PHS)")
        update()
    } else {
        let who = "PHS";
        remove(who);
    }
    //DDOS
    if (parseInt(localStorage.BUGS_NUMBER) >= parseInt(localStorage.CURENT_PRICE_DDOS)) {
        document.getElementById("price-DDOS").classList.remove("error");
        document.getElementById("build-DDOS").classList.add("clickable");
        document.getElementById("build-DDOS").setAttribute("onclick", "build(DDOS)")
        update()
    } else {
        let who = "DDOS";
        remove(who);
    }

    function remove(who) {
        document.getElementById("price-"+who).classList.add("error");
        document.getElementById("build-"+who).classList.remove("clickable");
        document.getElementById("build-"+who).removeAttribute("onclick")
    }
    //Bio Hacking
    if (parseInt(localStorage.BUGS_NUMBER) >= parseInt(localStorage.CURENT_PRICE_BIO_HACKING)) {
        document.getElementById("price-BH").classList.remove("error");
        document.getElementById("build-BH").classList.add("clickable");
        document.getElementById("build-BH").setAttribute("onclick", "build(BH)")
        update()
    } else {
        let who = "BH";
        remove(who);
    }

    //Cyber War
    if (parseInt(localStorage.BUGS_NUMBER) >= parseInt(localStorage.CURENT_PRICE_CYBER_WAR)) {
        document.getElementById("price-CW").classList.remove("error");
        document.getElementById("build-CW").classList.add("clickable");
        document.getElementById("build-CW").setAttribute("onclick", "build(CW)")
        update()
    } else {
        let who = "CW";
        remove(who);
    }

    //E Bombe
    if (parseInt(localStorage.BUGS_NUMBER) >= parseInt(localStorage.CURENT_PRICE_EBOMB)) {
        document.getElementById("price-EB").classList.remove("error");
        document.getElementById("build-EB").classList.add("clickable");
        document.getElementById("build-EB").setAttribute("onclick", "build(EB)")
        update()
    } else {
        let who = "EB";
        remove(who);
    }

    function remove(who) {
        document.getElementById("price-"+who).classList.add("error");
        document.getElementById("build-"+who).classList.remove("clickable");
        document.getElementById("build-"+who).removeAttribute("onclick")
    }
}

function build(build) {
    var total = ""
    var curent = ""
    var base = ""
    var cps = ""
    if (build === "BUG_DETECTOR") {
        total = localStorage.TOTAL_BUG_DETECTOR
        curent = localStorage.CURENT_PRICE_BUG_DETECTOR
        base = localStorage.BASE_PRICE_BUG_DETECTOR
        cps = localStorage.CPS_BUG_DETECTOR
    }else if (build === "BRUT_FORCE"){

        total = localStorage.TOTAL_BRUT_FORCE
        curent = localStorage.CURENT_PRICE_BRUT_FORCE
        base = localStorage.BASE_PRICE_BRUT_FORCE
        cps = localStorage.CPS_BRUT_FORCE
    }else if (build === "FLIPPER_ZERO"){
        total = localStorage.TOTAL_FLIPPER_ZERO
        curent = localStorage.CURENT_PRICE_FLIPPER_ZERO
        base = localStorage.BASE_PRICE_FLIPPER_ZERO
        cps = localStorage.CPS_FLIPPER_ZERO
    }else if (build === "PHISHING"){
        total = localStorage.TOTAL_PHISHING
        curent = localStorage.CURENT_PRICE_PHISHING
        base = localStorage.BASE_PRICE_PHISHING
        cps = localStorage.CPS_PHISHING
    }else if (build === "ANONYMOUS"){
        total = localStorage.TOTAL_ANONYMOUS
        curent = localStorage.CURENT_PRICE_ANONYMOUS
        base = localStorage.BASE_PRICE_ANONYMOUS
        cps = localStorage.CPS_ANONYMOUS
    }else if (build === "DDOS"){
        total = localStorage.TOTAL_DDOS
        curent = localStorage.CURENT_PRICE_DDOS
        base = localStorage.BASE_PRICE_DDOS
        cps = localStorage.CPS_DDOS
    }else if (build === "BIO_HACKING"){
        total = localStorage.TOTAL_BIO_HACKING
        curent = localStorage.CURENT_PRICE_BIO_HACKING
        base = localStorage.BASE_PRICE_BIO_HACKING
        cps = localStorage.CPS_BIO_HACKING
    }else if (build === "CYBER_WAR"){
        total = localStorage.TOTAL_CYBER_WAR
        curent = localStorage.CURENT_PRICE_CYBER_WAR
        base = localStorage.BASE_PRICE_CYBER_WAR
        cps = localStorage.CPS_CYBER_WAR
    }else if (build === "EBOMB"){
        total = localStorage.TOTAL_EBOMB
        curent = localStorage.CURENT_PRICE_EBOMB
        base = localStorage.BASE_PRICE_EBOMB
        cps = localStorage.CPS_EBOMB
    }


    let upgrade = parseInt(total) + 1;
    localStorage.setItem("TOTAL_" + build, upgrade)

    let new_price = parseFloat(localStorage.BUGS_NUMBER) - parseInt(curent)
    localStorage.setItem("BUGS_NUMBER", new_price)

    let price_bug_detector = Math.round(parseInt(base) * 1.15 ** (parseInt(total)+1));
    localStorage.setItem("CURENT_PRICE_" + build, price_bug_detector);

    let new_cps = (parseFloat(localStorage.CPS)) + parseFloat(cps);
    localStorage.setItem("CPS", new_cps.toFixed(2))

    let upgradeSound = new Audio('/asset/sound/upgrade.mp3')
    upgradeSound.play()
    upgradeSound.volume = parseInt(localStorage.VOLUME) / 100;

    update()
    price_changer()
    bugs_visual(new_price)
    history()
}

function update() {
    let bug_number = localStorage.BUGS_NUMBER.split('.')
    bug_number = bug_number[0]
    if (bug_number.length <= 6) {
        // bug_number = bug_number / 1000 + big_number["1"]
    }
    document.getElementById("counter").innerHTML = localStorage.SCREEN_BUGS_NUMBER
    document.querySelector('title').innerHTML = localStorage.SCREEN_BUGS_NUMBER + " Bugs - Hacker clicker";
    document.getElementById("bug_checker_count").innerHTML = localStorage.TOTAL_BUG_DETECTOR;
    document.getElementById("cps_count").innerHTML = localStorage.CPS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    //Bug Detector
    document.getElementById("price-BD").innerHTML = localStorage.CURENT_PRICE_BUG_DETECTOR.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("build_value-BD").innerHTML = localStorage.TOTAL_BUG_DETECTOR;
   
    //Brut force
    document.getElementById("price-BF").innerHTML = localStorage.CURENT_PRICE_BRUT_FORCE.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("build_value-BF").innerHTML = localStorage.TOTAL_BRUT_FORCE;
    
    //Flipper zero
    document.getElementById("price-FZ").innerHTML = localStorage.CURENT_PRICE_FLIPPER_ZERO.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("build_value-FZ").innerHTML = localStorage.TOTAL_FLIPPER_ZERO;
    
    //Phishing
    document.getElementById("price-PHS").innerHTML = localStorage.CURENT_PRICE_PHISHING.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("build_value-PHS").innerHTML = localStorage.TOTAL_PHISHING;

   //Anonymous
    document.getElementById("price-ANO").innerHTML = localStorage.CURENT_PRICE_ANONYMOUS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("build_value-ANO").innerHTML = localStorage.TOTAL_ANONYMOUS;

    //DDOS
    document.getElementById("price-DDOS").innerHTML = localStorage.CURENT_PRICE_DDOS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("build_value-DDOS").innerHTML = localStorage.TOTAL_DDOS;

    //Bio hacking
    document.getElementById("price-BH").innerHTML = localStorage.CURENT_PRICE_BIO_HACKING.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("build_value-BH").innerHTML = localStorage.TOTAL_BIO_HACKING;

    //Cyber War
    document.getElementById("price-CW").innerHTML = localStorage.CURENT_PRICE_CYBER_WAR.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("build_value-CW").innerHTML = localStorage.TOTAL_CYBER_WAR;

    //Ebomb
    document.getElementById("price-EB").innerHTML = localStorage.CURENT_PRICE_EBOMB.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("build_value-EB").innerHTML = localStorage.TOTAL_EBOMB;

    settings_update()

}

function cps() {
    setInterval(event => {
        let new_bug_number = parseFloat(localStorage.BUGS_NUMBER) + parseFloat(localStorage.CPS)
        let new_total_bug_number = parseFloat(localStorage.BUGS_NUMBER) + parseFloat(localStorage.CPS)
        localStorage.setItem("BUGS_NUMBER", new_bug_number)
        localStorage.setItem("TOTAL_BUGS_NUMBER", new_total_bug_number)
        update()
        price_changer()
        bugs_visual(new_bug_number)

    }, 1000)

}


function bugs_visual(num) {
    if (parseInt(localStorage.BUGS_NUMBER) <= 999999) {
        const screen_number = parseInt(localStorage.BUGS_NUMBER).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        localStorage.setItem("SCREEN_BUGS_NUMBER", screen_number);
    } else {
        const units = ["Million", "Milliard", "Billion", "Billiard", "Trillion ", "Quatrillion ", "Quintillion ", "Sextillion ", "Nonillion ", "Décillion ", "Undécillion ", "Duodécillion ", "Tredécillion ", "Quattuordécillion ", "Quindécillion ", "Sexdécillion ", "Septendécillion ", "Octodécillion ", "Novemdécillion ", "Vigintillion "];
        const unit = Math.floor((num / 1.0e+1).toFixed(0).toString().length);
        const r = unit % 3;
        const x = Math.abs(Number(num)) / Number('1.0e+' + (unit - r)).toFixed(3);
        const screen_number = x.toFixed(3) + ' ' + units[Math.floor(unit / 3) - 2];
        localStorage.setItem("SCREEN_BUGS_NUMBER", screen_number);
    }

    update()
}

