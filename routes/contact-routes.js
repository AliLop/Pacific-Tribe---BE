const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
//const Project = require('../models/project-model')
const nodemailer = require("nodemailer");

//Nodemailer
const contactEmail = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
    
  auth: {
    user: "alilopez.pan@gmail.com",
    pass: "Lisbon2020",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});


router.post("/contact-us", (req, res) => {
  const name = req.body.data.data.name;
  const email = req.body.data.data.email;
  const message = req.body.data.data.message; 
  const mail = {
    from: name,
    to: "alilopez.pan@gmail.com",
    subject: "Contact Form Message",
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "failed" });
    } else {
      res.json({ status: "sent" });
    }
  });
});


module.exports = router;

