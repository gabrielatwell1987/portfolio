import nodemailer from "nodemailer";
import { GOOGLE_EMAIL, GOOGLE_EMAIL_PASSWORD } from "$env/static/private";

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: GOOGLE_EMAIL,
    pass: GOOGLE_EMAIL_PASSWORD,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.error(error);
  } else {
    console.log(success);
  }
});

export default transporter;