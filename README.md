# Email Validator 
A simple Web App to validate any Email. 🤩

![Email Validator Web App Image](https://github.com/paurav11/email-validator/blob/main/web-app-img/web-app-img-1.png)
*Screen capture of Email Validator Web App.*

## What is an Email Validator?
Email Validator is a Web App that basically validates and verifies any email by providing us with various email properties such as `deliverability`, `quality_score`, `is_valid_format`, `is_free_email`, `is_disposable_email`, `is_role_email`, `is_catchall_email`, `is_mx_found`, and `is_smtp_valid`.

## How all of it works like a magic?
When a user enters any email address and clicks on `Verify` button, a function `httpGetAsync()` is called and a `XMLHttpRequest()` object is created which then sends a `GET` request asynchronously (in background) with the url consisting of user's unique private `API key` (provided by Abstarct API) and `email-to-be-verified` to the Abstract API web server. 

*Copy and paste the below given function in your `.js` file and make a call to this function wherever you want to make a request.*

```js
function httpGetAsync(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
        //Enter your code here...
        callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
}

var url = "https://emailvalidation.abstractapi.com/v1/?api_key=your-private-key&email=email-to-be-verified"

httpGetAsync(url)
```

Then, the request is processed and a unique `JSON` response is returned back to the user's end which looks something like the example given below.

```js
{
    "email": "pauravshah1999@gmail.com",
    "autocorrect": "",
    "deliverability": "DELIVERABLE",
    "quality_score": "0.70",
    "is_valid_format": {
        "value": true,
        "text": "TRUE"
    },
    "is_free_email": {
        "value": true,
        "text": "TRUE"
    },
    "is_disposable_email": {
        "value": false,
        "text": "FALSE"
    },
    "is_role_email": {
        "value": false,
        "text": "FALSE"
    },
    "is_catchall_email": {
        "value": false,
        "text": "FALSE"
    },
    "is_mx_found": {
        "value": true,
        "text": "TRUE"
    },
    "is_smtp_valid": {
        "value": true,
        "text": "TRUE"
    }
}
```

Now, create a JSON object by parsing the JSON response received from the server by using `JSON.parse()` method and use the data wherever it is required. This is how this stuff works.

PS: Go get your private API key today by opening a free Abstract API account at https://www.abstractapi.com/.
