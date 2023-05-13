function settings_update(){
    document.getElementById("total_bugs-number").innerText = parseInt(localStorage.TOTAL_BUGS_NUMBER).toString()
    document.getElementById("total_builds").innerText = builds_calculator().toString()
}

function builds_calculator(){
    let totalBuilds = 0
    totalBuilds += parseInt(localStorage.TOTAL_BUG_DETECTOR)
    totalBuilds += parseInt(localStorage.TOTAL_BRUT_FORCE)
    totalBuilds += parseInt(localStorage.TOTAL_FLIPPER_ZERO)
    totalBuilds += parseInt(localStorage.TOTAL_PHISHING)
    totalBuilds += parseInt(localStorage.TOTAL_ANONYMOUS)
    totalBuilds += parseInt(localStorage.TOTAL_DDOS)

    return totalBuilds
}
document.getElementById("music").addEventListener("click", music_system)

//Volume set-up
let multiplicateur = 1
document.body.onkeydown = function(e) {
    if (e.key === "Shift") {
        multiplicateur = 5
    }else if (e.key === "Control"){
        multiplicateur = 10
    }
}

document.body.onkeyup = function (e){
    if (e.key === "Shift") {
        multiplicateur = 1
    }else if (e.key === "Control"){
        multiplicateur = 1
    }
}

const current_volume = document.getElementById("volume-number")

current_volume.innerHTML = localStorage.VOLUME
volume_bar()

document.getElementById("Button-Vol-up").addEventListener("click", ()=>{
    current_volume.innerHTML = parseInt(current_volume.innerText) + multiplicateur
    if(parseInt(current_volume.innerText) >= 100){
        current_volume.innerHTML = 100
        localStorage.VOLUME = 100
    }else{
        localStorage.VOLUME = current_volume.innerText
    }
    volume_bar()
})

document.getElementById("Button-Vol-down").addEventListener("click", ()=>{
    current_volume.innerHTML = parseInt(current_volume.innerText) - multiplicateur
    if(parseInt(current_volume.innerText) <= 0){
        current_volume.innerHTML = 0
        localStorage.VOLUME = 0
    }else{
        localStorage.VOLUME = current_volume.innerText
    }
    volume_bar()
})

document.getElementById("Button-Vol-mute").addEventListener("click", ()=>{
    current_volume.innerHTML = 0
    localStorage.VOLUME = 0
    volume_bar()
})

function volume_bar() {
    const styleElem = document.head.appendChild(document.createElement("style"));

    styleElem.innerHTML = "#volume-bar:before {width:"+localStorage.VOLUME+"%;}";
}