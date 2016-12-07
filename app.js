var smsAlert=require('./smsAlert.js');

//Authentication Key / Api Key
var authkey='';

//for multiple numbers
var numbers=[];
numbers.push('');

//for single number
var number='';

//for message
var message='';

//Sender ID
var senderid='';

//Route
var route='';

//Country dial code
var dialcode='';

//date and time if sheduled message
//date should be yyyy-MM-dd and time should be HH:mm:ss (24H format)
var date='2015-11-22';
var time='20:19:20';

//Name of the Draft file
var draft_file_name='';

//Name of the folder
var campaign='';

//URL path of the file
var url_file_name='';

//group id of group
var groupid='';

//sender mobile no
var senderno='';

var callback='';

//when you want to schedule voice sms
//date should be yyyy-MM-dd and time should be HH:mm:ss (24H format)
var schtimestart='2015-11-13 09:00:00';
var schtimeend='2015-12-13 23:42:20';


//******************************************Send sms**********************************************//

//send to single number

smsAlert.sendOne(authkey,number,message,senderid,route,dialcode,callback,function(response){

//Returns Message ID, If Sent Successfully or the appropriate Error Message
console.log(response);
});
