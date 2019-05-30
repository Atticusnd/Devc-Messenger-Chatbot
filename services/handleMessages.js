const actions = require("./actions");


exports.handleMessage = (webhookEvent) =>{
    if(webhookEvent.message){
        let mensaje = webhookEvent.message;
        if(mensaje.quick_reply){
            handleQuickReplies(webhookEvent);
        }else if(mensaje.attachments){
            actions.stores(webhookEvent);
        }else if(mensaje.text){
            handleNLP(webhookEvent);
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

handleNLP = (webhookEvent) =>{
    let nlp = webhookEvent.message.nlp;
    if(nlp.entities.mensaje){
        if(nlp.entities.mensaje[0].value === "tiempoEntrega"){
                actions.sendTextMessage("Nuestro tiempo de entrega es de 5 días hablies",webhookEvent);
        }
    }else{
        actions.sendTextMessage("No te entiendo pero te puedo ayudar encontrando sucursaesles", webhookEvent);
    }
}