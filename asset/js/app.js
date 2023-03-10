function clicker() {

    let bug_number = parseFloat(localStorage.BUGS_NUMBER) + parseInt(localStorage.CLICKER_MULTIPLICATOR);
    localStorage.setItem("BUGS_NUMBER", bug_number);
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
}

function build(build) {
    if (build === "BUG_DETECTOR") {
        var total = localStorage.TOTAL_BUG_DETECTOR
        var curent = localStorage.CURENT_PRICE_BUG_DETECTOR
        var base = localStorage.BASE_PRICE_BUG_DETECTOR
        var cps = localStorage.CPS_BUG_DETECTOR
    }else if (build === "BRUT_FORCE"){
        var total = localStorage.TOTAL_BRUT_FORCE
        var curent = localStorage.CURENT_PRICE_BRUT_FORCE
        var base = localStorage.BASE_PRICE_BRUT_FORCE
        var cps = localStorage.CPS_BRUT_FORCE
    }else if (build === "ANONYMOUS"){
        var total = localStorage.TOTAL_ANONYMOUS
        var curent = localStorage.CURENT_PRICE_ANONYMOUS
        var base = localStorage.BASE_PRICE_ANONYMOUS
        var cps = localStorage.CPS_ANONYMOUS
    }else if (build === "DDOS"){
        var total = localStorage.TOTAL_DDOS
        var curent = localStorage.CURENT_PRICE_DDOS
        var base = localStorage.BASE_PRICE_DDOS
        var cps = localStorage.CPS_DDOS
    }


    let upgrade = parseInt(total) + 1;
    localStorage.setItem("TOTAL_" + build, upgrade)

    let new_price = parseFloat(localStorage.BUGS_NUMBER) - parseInt(curent)
    localStorage.setItem("BUGS_NUMBER", new_price)

    let price_bug_detector = Math.round(parseInt(base) * 1.15 ** (parseInt(total)+1));
    localStorage.setItem("CURENT_PRICE_" + build, price_bug_detector);

    let new_cps = (parseFloat(localStorage.CPS)) + parseFloat(cps);
    localStorage.setItem("CPS", new_cps.toFixed(2))

    update()
    price_changer()
    bugs_visual(new_price)
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
   //Anonymous
    document.getElementById("price-ANO").innerHTML = localStorage.CURENT_PRICE_ANONYMOUS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("build_value-ANO").innerHTML = localStorage.TOTAL_ANONYMOUS;
   //DDOS
    document.getElementById("price-DDOS").innerHTML = localStorage.CURENT_PRICE_DDOS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("build_value-DDOS").innerHTML = localStorage.TOTAL_DDOS;
}

function cps() {
    setInterval(event => {
        let new_bug_number = parseFloat(localStorage.BUGS_NUMBER) + parseFloat(localStorage.CPS)
        localStorage.setItem("BUGS_NUMBER", new_bug_number)
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
        const units = ["Million", "Milliard", "Billion", "Billiard", "Trillion ", "Quatrillion ", "Quintillion ", "Sextillion ", "Nonillion ", "D??cillion ", "Und??cillion ", "Duod??cillion ", "Tred??cillion ", "Quattuord??cillion ", "Quind??cillion ", "Sexd??cillion ", "Septend??cillion ", "Octod??cillion ", "Novemd??cillion ", "Vigintillion "];
        const unit = Math.floor((num / 1.0e+1).toFixed(0).toString().length);
        const r = unit % 3;
        const x = Math.abs(Number(num)) / Number('1.0e+' + (unit - r)).toFixed(3);
        const screen_number = x.toFixed(3) + ' ' + units[Math.floor(unit / 3) - 2];
        localStorage.setItem("SCREEN_BUGS_NUMBER", screen_number);
    }

    update()
}

