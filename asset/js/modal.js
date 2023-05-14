//Settings modal
document.getElementById("btn-settings").addEventListener("click", ()=>{
    document.getElementById("settings").classList.remove("d-none")
    audio_modal()
})

document.addEventListener("keydown", function(event) {
    //Appuyer sur la touche esc
    if(event.keyCode === 27){
        if (
            //si tout modal fermer, ouvrir les settings
            document.getElementById("restart-confirm").classList.contains("d-none") &&
            document.getElementById("settings").classList.contains("d-none"))
        {
            document.getElementById("settings").classList.remove("d-none")
            audio_modal()

        }else if (
            //si settings ouvert, les fermer
            document.getElementById("restart-confirm").classList.contains("d-none") &&
            !document.getElementById("settings").classList.contains("d-none")
        ){
            close_settings_modal()
        }else if(
            //si restart ouvert, le fermer
            !document.getElementById("restart-confirm").classList.contains("d-none")
        ){
            close_restart_modal()
        }
    }

    {

    }
});



//Reset Modal
document.getElementById("modal-restart").addEventListener("click", ()=>{
    document.getElementById("restart-confirm").classList.remove("d-none")
    audio_modal()
})

document.getElementById("close-settings").addEventListener("click", ()=>{
    close_settings_modal()
})
document.getElementById("close-restart").addEventListener("click", ()=>{
    close_restart_modal()
})

function close_settings_modal(){
    document.getElementById("settings").classList.add("d-none")
    audio_modal()
}

function close_restart_modal(){
    document.getElementById("restart-confirm").classList.add("d-none")
    audio_modal()
}


function audio_modal(){
    const audioModal = new Audio("/asset/sound/button-click.mp3")
    audioModal.play()
    audioModal.volume = parseInt(localStorage.VOLUME) / 100;
}