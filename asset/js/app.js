function clicker() {

    let bug_number = parseFloat(localStorage.BUGS_NUMBER) + parseInt(localStorage.CLICKER_MULTIPLICATOR);
    localStorage.setItem("BUGS_NUMBER", bug_number);
    update()
    price_changer()
    bugs_visual(bug_number)
}

function price_changer() {
    if (parseInt(localStorage.BUGS_NUMBER) >= parseInt(localStorage.CURENT_PRICE_BUG_DETECTOR)) {
        document.getElementById("price-BD").classList.remove("error");
        document.getElementById("upgrade-BD").classList.add("clickable");
        document.getElementById("upgrade-BD").setAttribute("onclick", "upgrade()")
        update()
    } else {
        document.getElementById("price-BD").classList.add("error");
        document.getElementById("upgrade-BD").classList.remove("clickable");
        document.getElementById("upgrade-BD").removeAttribute("onclick")
    }
}

function upgrade() {
    let upgrade = parseInt(localStorage.TOTAL_BUG_DETECTOR) + 1;
    localStorage.setItem("TOTAL_BUG_DETECTOR", upgrade)

    let new_price = parseFloat(localStorage.BUGS_NUMBER) - parseInt(localStorage.CURENT_PRICE_BUG_DETECTOR)
    localStorage.setItem("BUGS_NUMBER", new_price)

    let price_bug_detector = Math.round(parseInt(localStorage.BASE_PRICE_BUG_DETECTOR) * 1.15 ** (parseInt(localStorage.TOTAL_BUG_DETECTOR)));
    localStorage.setItem("CURENT_PRICE_BUG_DETECTOR", price_bug_detector);

    let new_cps = (parseFloat(localStorage.CPS)) + 0.2
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
    document.getElementById("price-BD").innerHTML = localStorage.CURENT_PRICE_BUG_DETECTOR.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("upgrade_value-BD").innerHTML = localStorage.TOTAL_BUG_DETECTOR;
    document.getElementById("bug_checker_count").innerHTML = localStorage.TOTAL_BUG_DETECTOR;
    document.getElementById("cps_count").innerHTML = localStorage.CPS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
        const units = ["Million", "Milliard", "Billion", "Billiard", "Trillion ", "Quatrillion ", "Quintillion ", "Sextillion ", "Nonillion ", "Décillion ", "Undécillion ", "Duodécillion ", "Tredécillion ", "Quattuordécillion ", "Quindécillion ", "Sexdécillion ", "Septendécillion ", "Octodécillion ", "Novemdécillion ", "Vigintillion "];
        const unit = Math.floor((num / 1.0e+1).toFixed(0).toString().length);
        const r = unit % 3;
        const x = Math.abs(Number(num)) / Number('1.0e+' + (unit - r)).toFixed(3);
        const screen_number = x.toFixed(3) + ' ' + units[Math.floor(unit / 3) - 2];
        localStorage.setItem("SCREEN_BUGS_NUMBER", screen_number);
    }

    update()
}

