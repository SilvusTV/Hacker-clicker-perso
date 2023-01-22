function clicker(){

    let bug_number = parseFloat(localStorage.BUGS_NUMBER) + parseInt(localStorage.CLICKER_MULTIPLICATOR);
    localStorage.setItem("BUGS_NUMBER", bug_number);
    update()

    document.querySelector('title').innerHTML = bug_number + " Bugs - Hacker clicker";

    price_changer()

}
function price_changer(){
    if(parseInt(localStorage.BUGS_NUMBER) >= parseInt(localStorage.CURENT_PRICE_BUG_DETECTOR)){
        document.getElementById("price").classList.remove("error");
        document.getElementById("upgrade").classList.add("clickable");
        document.getElementById("upgrade").setAttribute("onclick", "upgrade()")
        update()
    }else{
        document.getElementById("price").classList.add("error");
        document.getElementById("upgrade").classList.remove("clickable");
        document.getElementById("upgrade").removeAttribute("onclick")
    }
}
function upgrade(){
    let upgrade = parseInt(localStorage.TOTAL_BUG_DETECTOR) + 1;
    localStorage.setItem("TOTAL_BUG_DETECTOR", upgrade)

    let new_price = parseFloat(localStorage.BUGS_NUMBER) - parseInt(localStorage.CURENT_PRICE_BUG_DETECTOR)
    localStorage.setItem("BUGS_NUMBER", new_price)

    let price_bug_detector =Math.round(parseInt(localStorage.BASE_PRICE_BUG_DETECTOR) * 1.15**(parseInt(localStorage.TOTAL_BUG_DETECTOR)));
    localStorage.setItem("CURENT_PRICE_BUG_DETECTOR", price_bug_detector);

    let new_cps = (parseFloat(localStorage.CPS)) + 0.2
    localStorage.setItem("CPS", new_cps)
    update()
    price_changer()
}
function update(){
    let bug_number = localStorage.BUGS_NUMBER.split('.')
    document.getElementById("counter").innerHTML= bug_number[0];
    document.getElementById("price").innerHTML = localStorage.CURENT_PRICE_BUG_DETECTOR;
    document.getElementById("upgrade_value").innerHTML = localStorage.TOTAL_BUG_DETECTOR;
    document.getElementById("cps_count").innerHTML = localStorage.CPS;
}
function cps(){
    setInterval(event=>{
        let new_bug_number = parseFloat(localStorage.BUGS_NUMBER) + parseFloat(localStorage.CPS)
        localStorage.setItem("BUGS_NUMBER", new_bug_number)
        update()
        price_changer()
    }, 1000)
}