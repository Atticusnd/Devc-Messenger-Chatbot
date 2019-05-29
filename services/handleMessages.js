const actions = require("./actions");


exports.handleMessage = (webhookEvent) =>{
    if(webhookEvent.message){
        let mensaje = webhookEvent.message;
        if(mensaje.quick_reply){
            console.log("Envió respuesta rápida");
        }else if(mensaje.attachements){
            console.log("Envió un adjunto");
        }else if(mensaje.text){
            console.log("Envió un texto");
            actions.sendTextMessage("Has enviado texto", webhookEvent);
        }
    }
}