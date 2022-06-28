export default function notification(msg) {
    const notify = document.getElementById('notify')
    const msgContainer = document.getElementById('msg-container')
    msgContainer.innerHTML=msg;
    notify.style.display= "flex"


    
}