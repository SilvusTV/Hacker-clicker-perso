document.getElementById("btn-settings").addEventListener("click", function (){
    document.getElementById("settings").classList.remove("d-none")
})
document.getElementById("close-settings").addEventListener("click", function (){
    document.getElementById("settings").classList.add("d-none")
})

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