var smsAlert=require('./smsAlert.js');

//Api Key
var apikey='';

//for single number
var number='';

//for message
var message='';

//Sender ID
var senderid='';

//Route
var route='';

//******************************************Send sms**********************************************//

//send to single number

smsAlert.sendOne(apikey,number,message,senderid,route,function(response){

//Returns Message response, If Sent Successfully or the appropriate Error Message
console.log(response);
});
