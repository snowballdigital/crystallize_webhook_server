# crystallize_webhook_server
Crystallize web hook server example.

This example

To run this locally perform the following:
```
git clone git@github.com:snowballdigital/crystallize_webhook_server.git
cd crystallize_webhook_server
npm install
node index.js
```

This will start the server locally, assuming you have Node.js and npm already installed in your environment.

This local server will run on port 3000. To make this available to Crystallize it needs to be on the internet.
You can use a neat tool called Ngrok to achieve this (https://ngrok.com). To make your local port 3000 available
on the internet via Ngrok simply run the followig command.

```
ngrok http 3000
```
Now you will have a .ngrok.io public address you can use to test your Crystallize entitlements.

Enhjoy.
