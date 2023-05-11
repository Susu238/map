const request = require('request')
const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"
request({url :geocodeUrl ,json :true},(error ,response)=>{
    if (error){
        console.log("unable to connect geocode service")
    }
    else if(response.body.features.length==0){
        console.log("unable to find location")
    }
    else if(response.body.message){
        console.log(response.body.message)
    }else{

    }
}) 
const forecast= require("./forecast")
const geocode = require ('./geocode.js')
geocode("Egypt",(error ,data)=>{
   console.log("Error:",error) 
   console.log('Data :', data)

   forecast (data.latitude ,data.longtitude ,(error , data)=>{
    console.log("Error:",error) 
    console.log('Data :', data)
 
   })

})
////////////////////////////////////////////////////////
