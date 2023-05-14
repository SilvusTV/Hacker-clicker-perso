if (window.performance.navigation) {
    history()
}

function history() {

    //history BRUT FORCE
    if (localStorage.TOTAL_BRUT_FORCE > 0 && localStorage.TOTAL_BRUT_FORCE !== 'undefined') {
        document.getElementById('history-BF').innerHTML = null
        let limite = 0

        if (localStorage.TOTAL_BRUT_FORCE > 50) {
            limite = 50
        } else {
            limite = localStorage.TOTAL_BRUT_FORCE
        }

        for (let i = limite; i !== 0; i--) {
            const style = randomPose();
            document.getElementById('history-BF').innerHTML += '<img src="asset/images/brut-force.png" alt="brut force" style="'+style+'">'
            document.getElementById('history-BF').classList.remove('d-none')
        }
    }

    //history FLIPPER ZERO
    if (localStorage.TOTAL_FLIPPER_ZERO > 0 && localStorage.TOTAL_FLIPPER_ZERO !== 'undefined') {
        document.getElementById('history-FZ').innerHTML = null
        let limite = 0

        if (localStorage.TOTAL_FLIPPER_ZERO > 50) {
            limite = 50
        } else {
            limite = localStorage.TOTAL_FLIPPER_ZERO
        }

        for (let i = limite; i !== 0; i--) {
            const style = randomPose();
            document.getElementById('history-FZ').innerHTML += '<img src="asset/images/Flipper-Zero.png" alt="Flipper Zero" style="'+style+'">'
            document.getElementById('history-FZ').classList.remove('d-none')
        }
    }

    //history PHISHING
    if (localStorage.TOTAL_PHISHING > 0 && localStorage.TOTAL_PHISHING !== 'undefined') {
        document.getElementById('history-PHS').innerHTML = null
        let limite = 0

        if (localStorage.TOTAL_PHISHING > 50) {
            limite = 50
        } else {
            limite = localStorage.TOTAL_PHISHING
        }

        for (let i = limite; i !== 0; i--) {
            const style = randomPose();
            document.getElementById('history-PHS').innerHTML += '<img src="asset/images/phishing.png" alt="Phishing" style="'+style+'">'
            document.getElementById('history-PHS').classList.remove('d-none')
        }
    }

    //history ANONYMOUS
    if (localStorage.TOTAL_ANONYMOUS > 0 && localStorage.TOTAL_ANONYMOUS !== 'undefined') {
        document.getElementById('history-ANO').innerHTML = null
        let limite = 0

        if (localStorage.TOTAL_ANONYMOUS > 50) {
            limite = 50
        } else {
            limite = localStorage.TOTAL_ANONYMOUS
        }

        for (let i = limite; i !== 0; i--) {
            const style = randomPose();
            document.getElementById('history-ANO').innerHTML += '<img src="asset/images/anonymous.png" alt="Anonymous" style="'+style+'">'
            document.getElementById('history-ANO').classList.remove('d-none')
        }
    }

    //history DDOS
    if (localStorage.TOTAL_DDOS > 0 && localStorage.TOTAL_DDOS !== 'undefined') {
        document.getElementById('history-DDOS').innerHTML = null
        let limite = 0

        if (localStorage.TOTAL_DDOS > 50) {
            limite = 50
        } else {
            limite = localStorage.TOTAL_DDOS
        }

        for (let i = limite; i !== 0; i--) {
            const style = randomPose();
            document.getElementById('history-DDOS').innerHTML += '<img src="asset/images/DDOS.png" alt="DDOS" style="'+style+'">'
            document.getElementById('history-DDOS').classList.remove('d-none')
        }
    }

    //history Bio hacking
    if (localStorage.TOTAL_BIO_HACKING > 0 && localStorage.TOTAL_BIO_HACKING !== 'undefined') {
        document.getElementById('history-BH').innerHTML = null
        let limite = 0

        if (localStorage.TOTAL_BIO_HACKING > 50) {
            limite = 50
        } else {
            limite = localStorage.TOTAL_BIO_HACKING
        }

        for (let i = limite; i !== 0; i--) {
            const style = randomPose();
            document.getElementById('history-BH').innerHTML += '<img src="asset/images/BH.png" alt="BIO HACKING" style="'+style+'">'
            document.getElementById('history-BH').classList.remove('d-none')
        }
    }

    //history Cyber War
    if (localStorage.TOTAL_CYBER_WAR > 0 && localStorage.TOTAL_CYBER_WAR !== 'undefined') {
        document.getElementById('history-CW').innerHTML = null
        let limite = 0

        if (localStorage.TOTAL_CYBER_WAR > 50) {
            limite = 50
        } else {
            limite = localStorage.TOTAL_CYBER_WAR
        }

        for (let i = limite; i !== 0; i--) {
            const style = randomPose();
            document.getElementById('history-CW').innerHTML += '<img src="asset/images/CW.png" alt="CYBER WAR" style="'+style+'">'
            document.getElementById('history-CW').classList.remove('d-none')
        }
    }

    //history Bio hacking
    if (localStorage.TOTAL_EBOMB > 0 && localStorage.TOTAL_EBOMB !== 'undefined') {
        document.getElementById('history-EB').innerHTML = null
        let limite = 0

        if (localStorage.TOTAL_EBOMB > 50) {
            limite = 50
        } else {
            limite = localStorage.TOTAL_EBOMB
        }

        for (let i = limite; i !== 0; i--) {
            const style = randomPose();
            document.getElementById('history-EB').innerHTML += '<img src="asset/images/EB.png" alt="EBOMB" style="'+style+'">'
            document.getElementById('history-EB').classList.remove('d-none')
        }
    }
}
//Function_History_Alea

function randomPose () {

    let top = Math.round(Math.random()*85);
    let left = Math.round(Math.random()*95);

    return`position: absolute; top:${top}%; left:${left}%;`
}