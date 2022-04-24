/* eslint-disable no-unused-vars */

/* eslint-disable no-unexpected-multiline */
/* eslint-disable func-call-spacing */

// eslint-disable-next-line no-unused-vars
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line func-call-spacing
// eslint-disable-next-line no-unused-vars
const stripe = require("stripe")
// eslint-disable-next-line max-len
("sk_test_51KmlrhGaF09sHyTmTMvgVANOJNLE6vpTjG5m3w9VjANXKwPH2S6Dmu3wytJ7TsANPeEY1Z3M4yjUKIlXQKw0xk3V00p8yGYT9J");

// API

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello World!"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received BOOM!!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
    // OK - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,

  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// (http://localhost:5001/clone-26fa8/us-central1/api)
