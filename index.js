var express = require('express')
var app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

function handleSubscriptionHook(payload, token) {
  return new Promise(function(resolve, reject) {

      // Check verification token from the Crystallize token.
      // You find this token in the Crystallize admin under tenant configuration
      if ( token ==  "123xyz" ){
        console.log("Handling entitlement for new subscription customer");
        console.log(payload.first_name);
        console.log(payload.last_name);

        // Check the product items purchased
        payload.cart.items.forEach(function(item) {
          console.log(item.name);
          console.log(item.reference);
          console.log(item.merchant_item_data);
        });

        // Do your  entitlement here:
        // <insert magic code>
        // i.e. give user access to something
        //

        // Return updated message
        resolve("Entitlement performed.");
      }
      else {
        reject("Verification token is not valid.");
      }
  })
}

app.post('/subscription_hook', function (req, res) {
  // Fetch the secret token sent by Crystallize
  var token = req.get("X-Crystallize-Webhook-Token");
  handleSubscriptionHook(req.body,token)
  .then((message) => {
    res.status(200).json(message);
  }).catch(function(err) {
    res.status(500).send(err);
  });
})

app.listen(3000, function () {
  console.log('Crystallize webhook example listening on port 3000!')
})
