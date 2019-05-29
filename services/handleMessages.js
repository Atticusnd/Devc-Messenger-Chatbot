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
    }else if(webhookEvent.postback){
        handlePostback(webhookEvent);
    }
}
handlePostback = (webhookEvent) =>{
    let evento = webhookEvent.postback.payload;
    switch(evento){
        case 'encuestas':
            console.log("Oprimió encuestas");
        break;
        case 'sucursales':
            actions.sendTextMessage("Oprimiste sucursales",webhookEvent);
        break;
        case 'inicio':
            actions.sendTextMessage("Bienvenido al chatbot de DevC", webhookEvent);
        break;        
    }
}


