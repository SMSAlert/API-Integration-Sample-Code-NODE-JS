var request=require('request');

//calback function
function callBack(resultMsg) {
    console.log(resultMsg);
}

//send message to only one number
module.exports.sendOne=function(apikey,number,message,senderid,route)
{
    var url='http://www.smsalert.co.in/api/push.json?apikey='+apikey+'&route='+route+'&sender='+senderid+'&mobileno='+number+'&text='+message;
	
	var encodeurl=encodeURI(url);
	request(encodeurl, function (error, response, body) {
		var bodyResult = JSON.parse(body);
	    var resultMsg=bodyResult.status;
		//check for error
		CheckSmsError(resultMsg,function(response){
		  // callback1(resultMsg);
		});
	});
};



//check for error response
function CheckSmsError(resultMsg)
{
   switch(resultMsg)
	{
	case 'success':
	callBack('Message Send Successfully.');
	break;
	case 'error':
	callBack('Error! Try again.');
	break;

	default:
	callBack('Internal Error!');
	}
}


