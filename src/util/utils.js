export default function notification(msg, type) {


    const notify = document.getElementById('notify') 
    const msgContainer = document.getElementById('msg-container')
    const progress = document.getElementById('progress')

    if(type === "success"){
        notify.style.backgroundColor= "#2FB08C"
        progress.style.backgroundColor= "#239474"
    }else if(type === "error"){
        notify.style.backgroundColor= "#D04F4E"
        progress.style.backgroundColor= "#b34342"
    }else{
        notify.style.backgroundColor= "#F6AB2F"
        progress.style.backgroundColor= "#cc8e27"
    }
    
    msgContainer.innerHTML=msg;
    notify.style.display= "flex"
    
}

