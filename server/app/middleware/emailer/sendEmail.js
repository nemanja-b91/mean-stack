const nodemailer = require('nodemailer')
const mg = require('nodemailer-mailgun-transport')
const sgMail = require('@sendgrid/mail')
const {template} = require("./templates/registrationEmail");

/**
 * Sends email
 * @param {Object} data - data
 * @param {boolean} callback - callback
 */
const sendEmail = async (data = {}, callback) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const title = data.subject;
  const msg = {
    from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_ADDRESS}>`,
    to: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_ADDRESS}>`,
    // to: `${data.user.name} <${data.user.email}>`,
    subject: data.subject,
    html: template(title)
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error('Error: ', error)
    })
}

module.exports = {sendEmail}
