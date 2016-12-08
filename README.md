[smsAlert](https://www.npmjs.com/package/smsAlert)

A small [node.js](http://nodejs.org) library for smsAlert sms api.

For more info visit [Sms Alert](https://smsalert.co.in/)

## Requirements 

* apikey : Api Key(This key is unique for every user)

* number : single mobile number (Keep number in international format)

* message : Message Content to send

* senderid : Receiver will see this as sender's ID

* route : If your operator supports multiple routes then give one route name

* senderno : Sender Mobile No

## Installation

```bash
$ npm install smsAlert
```


## How to use

### Text SMS

#### Send sms
  ```js

var smsAlert=require('./smsAlert.js');

//Authentication Key / Api Key
var apikey='';

//for number
var number='';

//message
var message='';

//Sender ID
var senderid='';

//Route
var route='';


//send to single number

smsAlert.sendOne(apikey,number,message,senderid,route,function(response){

//Returns Message Response, If Sent Successfully or the appropriate Error Message
console.log(response);
});

## License

  [CVT](LICENSE)
