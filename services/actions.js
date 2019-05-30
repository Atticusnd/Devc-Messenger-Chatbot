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

exports.stores = (webhookEvent) => {
    let response = {
        recipient: {
            id: webhookEvent.sender.id
        },
        message:{
            attachment:{
                type:"template",
                payload:{
                    template_type:"generic",
                    elements:[
                        {
                            title:"Tienda del centro",
                            image_url:"https://media4.s-nbcnews.com/i/newscms/2017_26/2053956/170627-better-grocery-store-main-se-539p_80a9ba9c8d466788799ca27568ee0d43.jpg",
                            subtitle:"Dirección corta de la tienda",
                            default_action:{
                                type:"web_url",
                                url:"https://www.google.es/maps/place/Platzi/@4.6560716,-74.0595918,17z/data=!4m5!3m4!1s0x8e3f9a4333a1a275:0x91a59c01b85e3f59!8m2!3d4.6560663!4d-74.0574031",
                                messenger_extensions: "FALSE",
                                webview_height_ratio:"COMPACT"
                            },
                            buttons:[
                                {
                                    type:"web_url",
                                    url:"https://www.google.es/maps/place/Platzi/@4.6560716,-74.0595918,17z/data=!4m5!3m4!1s0x8e3f9a4333a1a275:0x91a59c01b85e3f59!8m2!3d4.6560663!4d-74.0574031",
                                    title:"Mostrar el mapa"
                                },
                                {
                                    type:"phone_number",
                                    title:"Llama a la tienda",
                                    payload:"+5211223344"
                                }
                                 
                            ]
                    },{
                        title:"Tienda dos",
                        image_url:"https://media4.s-nbcnews.com/i/newscms/2017_26/2053956/170627-better-grocery-store-main-se-539p_80a9ba9c8d466788799ca27568ee0d43.jpg",
                        subtitle:"Dirección corta de la tienda",
                        default_action:{
                            type:"web_url",
                            url:"https://www.google.es/maps/place/Platzi/@4.6560716,-74.0595918,17z/data=!4m5!3m4!1s0x8e3f9a4333a1a275:0x91a59c01b85e3f59!8m2!3d4.6560663!4d-74.0574031",
                            messenger_extensions: "FALSE",
                            webview_height_ratio:"COMPACT"
                        },
                        buttons:[
                            {
                                type:"web_url",
                                url:"https://www.google.es/maps/place/Platzi/@4.6560716,-74.0595918,17z/data=!4m5!3m4!1s0x8e3f9a4333a1a275:0x91a59c01b85e3f59!8m2!3d4.6560663!4d-74.0574031",
                                title:"Mostrar el mapa"
                            },
                            {
                                type:"phone_number",
                                title:"Llama a la tienda",
                                payload:"+5211223344"
                            }
                             
                        ]
                }
                        
                    ]
                }
            }
        }
    }
    sendAPI.callSendAPI(response);
}
