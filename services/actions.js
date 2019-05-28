const sendAPI = require("./graphAPI");

exports.sendTextMessage = (texto, webhookEvent)=>{
    let response = {
        recipient: {
            id: webhookEvent.sender.id
        },
        message:{
            text:texto
        }
    }
    sendAPI.callSendAPI(response);
}