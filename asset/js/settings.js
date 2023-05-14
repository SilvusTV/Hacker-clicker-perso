function settings_update(){
    document.getElementById("total_bugs-number").innerText = parseInt(localStorage.TOTAL_BUGS_NUMBER).toString()
    document.getElementById("total_builds").innerText = builds_calculator().toString()
    document.getElementById("total_clicks").innerText = parseInt(localStorage.TOTAL_CLICK).toString()
}

function builds_calculator(){
    let totalBuilds = 0
    totalBuilds += parseInt(localStorage.TOTAL_BUG_DETECTOR)
    totalBuilds += parseInt(localStorage.TOTAL_BRUT_FORCE)
    totalBuilds += parseInt(localStorage.TOTAL_FLIPPER_ZERO)
    totalBuilds += parseInt(localStorage.TOTAL_PHISHING)
    totalBuilds += parseInt(localStorage.TOTAL_ANONYMOUS)
    totalBuilds += parseInt(localStorage.TOTAL_DDOS)
    totalBuilds += parseInt(localStorage.TOTAL_BIO_HACKING)
    totalBuilds += parseInt(localStorage.TOTAL_CYBER_WAR)
    totalBuilds += parseInt(localStorage.TOTAL_EBOMB)

    return totalBuilds
}

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
    sound_change_complete()
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
    sound_change_complete()
})

document.getElementById("Button-Vol-mute").addEventListener("click", ()=>{
    current_volume.innerHTML = 0
    localStorage.VOLUME = 0
    volume_bar()
    sound_change_complete()
})

function volume_bar() {
    const styleElem = document.head.appendChild(document.createElement("style"));

    styleElem.innerHTML = "#volume-bar:before {width:"+localStorage.VOLUME+"%;}";
}

function sound_change_complete(){
    location.reload();
    window.onload = function () {
        document.getElementById("settings").classList.remove("d-none")
    }
}