import * as functions from 'firebase-functions';
import * as express from 'express';

import * as admin from 'firebase-admin';
admin.initializeApp();

import * as nodemailer from 'nodemailer';

const app = express();

app.use(require('./routes'));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.message = '404';
  next(err);
});

exports.app = functions.https.onRequest(app);

exports.sendMail = functions.database
.ref('/queo/queries/{pushId}')
.onCreate( (snapshot:any, context:any) => {

  const user = functions.config().gmail.user;
  const pass = functions.config().gmail.pass;
  const mailTransport = nodemailer.createTransport(`smtps://${user}:${pass}@smtp.gmail.com`);

  const consulta = snapshot.val();

  let price;
  consulta.purchase ? price = `$${consulta.purchase.price}` : price = '';

  const mailOptions = {
    from: `"Queo" <info@queo.com.ar>`,
    to: "ale@quadri.com.ar",
    subject: `Queo - ${consulta.origin}`,
    text : `${consulta.name} - ${consulta.email} - ${consulta.telephone || ''}\n \n${consulta.query || ''} \n${price} \n${consulta.readablePurchase || ''}`
  };

  return mailTransport.sendMail(mailOptions)
  .then(() => {
    console.log('New query sent');
  }).catch(error => {
    console.error('There was an error while sending the email:', error);  
  });
});