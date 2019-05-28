require('dotenv').config();
const request = require("request");

exports.callSendAPI = (requestBody) =>{
    const url = "https://graph.facebook.com/v3.3/me/messages";
    request(
        {
            uri:url,
            qs:{
                access_token:process.env.ACCESS_TOKEN,
            },
            method:"POST",
            json: requestBody
        },(error, body) =>{
            if(!error){
                console.log("Petición envida", body);
            }else{
                console.error("No se puedo realizar la petición",error);
            }
        }
    );
}