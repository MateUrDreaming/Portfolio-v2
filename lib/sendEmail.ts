"use server"

import {Resend} from "resend"
import React from "react";
import ContactEmail from "@/email/ContactEmail"; // Adjust the import path as necessary

const resend = new Resend(process.env.RESEND_KEI_API)

export const sendEmail = async (formData: FormData) => {

  const userName = formData.get("username") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!userName || !email || !subject || !message) {
    console.log(userName, email, subject, message);
    return "Please fill out all fields correctly";
  }
  

  await resend.emails.send({
    from: userName + "<onbording@resend.dev>",
    to: "pkasabia0909@gmail.com",
    subject: subject,
    replyTo: email,
    react: React.createElement(ContactEmail, { message: message, username: userName, email: email }),
  })

  return "Email sent successfully";
}
