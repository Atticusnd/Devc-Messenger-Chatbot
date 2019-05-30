const actions = require("./actions");


exports.handleMessage = (webhookEvent) =>{
    if(webhookEvent.message){
        let mensaje = webhookEvent.message;
        if(mensaje.quick_reply){
            handleQuickReplies(webhookEvent);
        }else if(mensaje.attachments){
            actions.stores(webhookEvent);
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
            actions.quickReplies(webhookEvent);
        break;
        case 'sucursales':
            handleLocation(webhookEvent);
        break;
        case 'inicio':
            actions.sendTextMessage("Bienvenido al chatbot de DevC", webhookEvent);
        break;        
    }
}


handleQuickReplies = (webhookEvent) =>{
    let reply = webhookEvent.message.quick_reply.payload;
    const response = {
        texto:"¿Nos recomendarías?",
        replies:[
        {
            content_type:'text',
            title:'Si',
            payload:"siRecomienda"
        },
        {
            content_type:'text',
            title:'No',
            payload:"noRecomienda"
        }
        ]
    }
    if(reply == 'rapidez' || reply == 'ubicacion' || reply == 'servicio'){
        actions.quickReplies(webhookEvent,response);
    }else{
        actions.sendTextMessage("Gracias por ayudarnos a mejorar",webhookEvent);
    }
}

handleLocation = (webhookEvent) =>{
    const replyLocation ={
        texto:'Por favor compartenos tú ubucación',
        replies:[
            {
                content_type:"location"
            }
        ]
    }
    actions.quickReplies(webhookEvent,replyLocation);
}