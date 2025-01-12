import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  if (request.method === 'POST') {

    const reqBody = await request.json();
    const { name, email, message } = reqBody;


    const transporter = nodemailer.createTransport({
      service: 'Gmail', 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email, 
      to: process.env.EMAIL_USER, 
      subject: 'New Contact Form Submission',
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      return NextResponse.json({
        message:"You message has been received successfully!",
        success:true
      });
    } catch (error) {
      return NextResponse.json({
        message:error.message,
        success:false
      });
    }
  } else {
    // Handles non-POST requests
    return NextResponse.json({
        message: "Method not allowed!",
        success:false,
    });
  }
}
