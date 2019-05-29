const sendAPI = require("./graphAPI");

const repliesSurvey ={
    texto:'Por favor llena esta encuesta y dime ¿Qué es lo que más te gusta de nuestro servicio?',
    replies:[
        {
            content_type:"text",
            title:'Servicios',
            payload:'servicio'
        },
        {
            content_type:"text",
            title:'Rapidez',
            payload:'rapidez'
        },
        {
            content_type:"text",
            title:'Ubicación',
            payload:'ubicacion'
        }
    ]
}
exports.quickReplies =( webhookEvent, replies)=>{
    if(!replies){
        replies = repliesSurvey;
    }
    let response = {
        recipient: {
            id: webhookEvent.sender.id
        },
        message:{
            text:replies.texto,
            quick_replies:replies.replies
        }
    }
    sendAPI.callSendAPI(response);
}
exports.sendTextMessage = (texto, webhookEvent)=>{
    let response = {
        recipient: {
            id: webhookEvent.sender.id
        },
        message:{
            text:texto
        }
    }
    sendAPI.getProfile(webhookEvent.sender.id);
    sendAPI.callSendAPI(response);
}
