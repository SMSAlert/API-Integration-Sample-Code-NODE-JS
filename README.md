[smsAlert-sms v1.0.1](https://www.npmjs.com/package/smsAlert)

A small [node.js](http://nodejs.org) library for smsAlert sms api.


For more info visit [Sms Alert](https://smsalert.co.in/)

## Requirements 

* authkey : Login Authentication Key(This key is unique for every user)

* number : single mobile number (Keep number in international format)

* numbers : array of mobile numbers (Keep numbers in international format)

* message : Message Content to send

* senderid : Receiver will see this as sender's ID

* route : If your operator supports multiple routes then give one route name. Eg: route=1 for promotional, route=4 for transactional SMS.

* dialcode : 91 for India

* date & time : when you want to schedule the SMS to be sent. Time format will be yyyy-MM-dd & HH:mm:ss

* senderno : Sender Mobile No

* schtimestart : when you want to schedule the SMS to be sent. Time format will be yyyy-MM-dd & HH:mm:ss

* schtimeend : when you want to schedule the SMS to be sent. Time format will be yyyy-MM-dd & HH:mm:ss


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
var authkey='';

//for multiple numbers
var numbers=[];
numbers.push('');

//for single number
var number='';

//message
var message='';

//Sender ID
var senderid='';

//Route
var route='';

//Country dial code
var dialcode='';


  //send to single number

smsAlert.sendOne(authkey,number,message,senderid,route,dialcode,callback,function(response){

//Returns Message Response, If Sent Successfully or the appropriate Error Message
console.log(response);
});

## License

  [CVT](LICENSE)
