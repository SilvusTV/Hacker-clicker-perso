//Settings modal
document.getElementById("btn-settings").addEventListener("click", ()=>{
    document.getElementById("settings").classList.remove("d-none")
    audio_modal()
})
document.getElementById("close-settings").addEventListener("click", ()=>{
    document.getElementById("settings").classList.add("d-none")
    audio_modal()
})

//Reset Modal
document.getElementById("modal-restart").addEventListener("click", ()=>{
    document.getElementById("restart-confirm").classList.remove("d-none")
    audio_modal()
})

document.getElementById("close-restart").addEventListener("click", ()=>{
    close_restart_modal()
})



function close_restart_modal(){
    document.getElementById("restart-confirm").classList.add("d-none")
    audio_modal()
}
function audio_modal(){
    const audioModal = new Audio("/asset/sound/button-click.mp3")
    audioModal.play()
}