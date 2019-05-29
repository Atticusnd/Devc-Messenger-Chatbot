const actions = require("./actions");

exports.handleMessage = (webhookEvent) =>{
    if(webhookEvent.message){
        let mensaje = webhookEvent.message;
        if(mensaje.quick_reply){
            console.log("He recibido una respuesta rápida");
        }else if(mensaje.attachment){
            console.log("He recibido un mensaje con un elemento adjunto");
        }else if(mensaje.text){
            console.log("He recibido un mensaje de texto");
            actions.sendTextMessage("Prueba de mensaje de texto",webhookEvent);
        }else if(mensaje.postback){
            console.log("He recibido un mensaje con postback");
        }
    }else{
        console.log("No se ha recibido un mensaje valido");
    }
}