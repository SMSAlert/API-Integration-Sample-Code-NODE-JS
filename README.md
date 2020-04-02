# Smsalert Node JS SMS Send

Node JS client module to send SMS messages using SMS Alert Gateway.

To use this library, you must have a valid account on https://www.smsalert.co.in.

For any questions, please contact us at support@cozyvision.com

# Installation

```bash
$ npm install smsalert
```

# Send a message

```js
    const SMS = require('smsalert');
    const sms = new SMS(username, password);
	const resultMessage = sms.send(to, message,senderid);
    core.debug('SMS sent!');
	core.debug(resultMessage.description);
```


# More info

You can check out our website https://www.smsalert.co.in
